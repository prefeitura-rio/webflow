"""
Query que usa a distância de levenshtein para fazer o merge entre os
dados do ipl e a tabela de logradouros. Depois disso, selec
"""
/* Traz a função que calcula a distância de levenshtein para nosso dataset devido
à diferença de regiãi (us x south-east-america)*/

-- CREATE OR REPLACE FUNCTION `rj-escritorio-dev.dataviz_032022_zonanorte.levenshtein`(source STRING, target STRING) RETURNS INT64 LANGUAGE js
-- OPTIONS (library=["gs://bqutil-lib/bq_js_libs/js-levenshtein-v1.1.6.js"]) AS R"""
-- return js_levenshtein(source || '', target || '');
-- """;

WITH ranking AS (
    WITH dist_levenshtein AS (
        with ipl as (
            SELECT
            /* Prepara dados do ipl */
            extract(date FROM PARSE_DATETIME("%d/%m/%Y %H:%M", inicio)) AS inicio, 
            extract(date FROM PARSE_DATETIME("%d/%m/%Y %H:%M", termino)) AS termino,
            bairro,
            REGEXP_REPLACE(NORMALIZE(TRIM(replace(replace(logradouro, '  ', ' '), '  ', ' ')), NFD), r'\pM', '') as logradouro,
            CASE WHEN lixo_branco='NOK' THEN 1 ELSE 0 END AS lixo_hospitalar,
            CASE WHEN bens_inserviveis='NOK' OR
                        material_de_obra='NOK' OR
                        pneus='NOK' OR
                        entulhos='NOK' OR
                        folhas_de_arvores='NOK' OR
                        galhada='NOK' THEN 1 ELSE 0 END AS entulho,
            CASE WHEN capina='NOK' THEN 1 ELSE 0 END AS resto_capina
            FROM `rj-escritorio-dev.dataviz_032022_zonanorte_staging.comlurb_ipl`),

            logr as (
                SELECT 
                    /* Prepara tabela de logradouros */
                    DISTINCT REGEXP_REPLACE(NORMALIZE(TRIM(UPPER(nome_completo)), NFD), r'\pM', '') as logradouro,
                    l.id_logradouro,
                    UPPER(b.nome) as bairro
                FROM `rj-escritorio-dev.dados_mestres.logradouro` l
                LEFT JOIN `rj-escritorio-dev.dados_mestres.bairro` b on CAST(b.id_bairro as INT)=CAST(l.id_bairro as INT)
                )

        select
            /* Faz um merge entre a base do ipl e logradouro pelo bairro
            e calcula a distância de levenshtein para as ruas desse bairro */
            ipl.* EXCEPT(logradouro, bairro),
            logr.*,
            ipl.logradouro as ipl_logradouro,
            ipl.bairro AS ipl_bairro,
            (SELECT `rj-escritorio-dev.dataviz_032022_zonanorte.levenshtein`(logr.logradouro, ipl.logradouro)) as lev
        from ipl
        LEFT JOIN logr ON logr.bairro = ipl.bairro
        WHERE ipl.inicio >= '2022-02-01' 
    )

    SELECT
    /* Seleciona apenas os endereços cuja distância de levenshtein é menor do que 3  */
        *,
        rank() OVER (PARTITION BY id_logradouro ORDER BY lev, ipl_logradouro) as rank_logr
    FROM dist_levenshtein
    WHERE lev <=3)

/* Fazemos um melt das colunas lixo_hospitalar, capina e remocao_residuos
da tabela do ipl selecionando a rua que possui a menor distância de 
levenshtein */
(SELECT 
    * EXCEPT(lixo_hospitalar, entulho, resto_capina),
    'lixo_hospitalar' AS tipo
FROM ranking
WHERE rank_logr=1 AND lixo_hospitalar = 1)
UNION ALL
(SELECT 
    * EXCEPT(lixo_hospitalar, entulho, resto_capina),
    'capina' AS tipo
FROM ranking
WHERE rank_logr=1 AND resto_capina = 1)
UNION ALL 
(SELECT 
    * EXCEPT(lixo_hospitalar, entulho, resto_capina),
    'remocao_residuos' AS tipo
FROM ranking
WHERE rank_logr=1 AND entulho = 1)

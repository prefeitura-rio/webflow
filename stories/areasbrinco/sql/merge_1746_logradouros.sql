/* Essa query deu origem a tabela dataviz_032022_zonanorte.merge_1746_logradouros */

WITH logr AS (
            /* Elimina duplicados na tabela de logradouros */
            SELECT
                * ,
                ROW_NUMBER() OVER (PARTITION BY id_logradouro, nome_completo, id_trecho, tipo, id_chavegeo) AS rank_log
            FROM `rj-escritorio-dev.dados_mestres.logradouro`
            ),
    chamado AS (
        /* Elimina duplicados na tabela de chamados do 1746 */
        SELECT DISTINCT *
        FROM `rj-segovi.administracao_servicos_publicos_1746_staging.chamado`
    ),
    enderecos AS (
        /* Elimina duplicados na tabela de logradouros geolocalizados */
        SELECT DISTINCT *
        FROM `rj-escritorio-dev.seconserva_buracos.habitacao_urbana_enderecos_geolocalizados`
    )

SELECT 
    c.*, 
    cg.*   EXCEPT(id_logradouro),
    logr.id_chavegeo,
    logr.id_trecho,
    logr.geometry
FROM chamado c
LEFT JOIN enderecos cg ON c.id_logradouro=cg.id_logradouro
LEFT JOIN logr ON logr.id_logradouro = c.id_logradouro AND logr.rank_log=1
WHERE c.dt_inicio >= '2022-02-01 00:00:00'


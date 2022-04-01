"""
Query que cria a tabela dataviz_032022_zonanorte.subprefeituras_trechos
"""

CREATE OR REPLACE TABLE `rj-escritorio-dev.dataviz_032022_zonanorte.subprefeituras_trechos` AS 
with sub as (
    SELECT 
    /* Prepara tabela de logradouros */
    DISTINCT REGEXP_REPLACE(NORMALIZE(TRIM(UPPER(bairro)), NFD), r'\pM', '') as bairro,
    l.subprefeitura
FROM `rj-escritorio-dev.dataviz_032022_zonanorte.subprefeituras_bairros` l
),

bairros as (
     SELECT 
    DISTINCT REGEXP_REPLACE(NORMALIZE(TRIM(UPPER(b.nome)), NFD), r'\pM', '') as bairro,
    b.id_bairro,
    l.id_trecho
FROM `rj-escritorio-dev.dados_mestres.bairro` b
LEFT JOIN `rj-escritorio-dev.dados_mestres.logradouro` l on CAST(l.id_bairro AS INT)= CAST(b.id_bairro AS INT)
)

 SELECT 
    DISTINCT l.subprefeitura,
    l.bairro,
    id_bairro,
    id_trecho
FROM sub l
RIGHT JOIN bairros b on b.bairro=l.bairro 

"""
Query que faz o union entre os dados do 1746 e do waze
"""
with zn AS (
    /* Ajusta dados de logradouro selecionando apenas os bairros da zona norte
    (exceto a ilha do governador) */
    SELECT 
        l.id_logradouro,
        l.id_trecho--, nome_regiao_planejamento, nome_regiao_administrativa, geometry 
    FROM `rj-escritorio-dev.dados_mestres.bairro` b
    INNER JOIN `rj-escritorio-dev.dados_mestres.logradouro` l on l.id_bairro = b.id_bairro
    WHERE id_area_planejamento = '3' AND id_regiao_planejamento != '3.7'),

    waze AS (
    /* Ajusta dados do waze */    
    SELECT
        'waze' as origem, 
        CASE WHEN tipo = 'HAZARD' THEN 'Pavimentação' ELSE 'Sinalização' END AS tipo,
        CASE WHEN subtipo = 'HAZARD_ON_ROAD_POT_HOLE' THEN 'Pista' ELSE 'Vertical' END AS subtipo, 
    geometry_waze AS chamado_geometry--, geometry_trecho
    FROM `rj-escritorio-dev.dataviz_032022_zonanorte.merge_waze_logradouro_t` t
    LEFT JOIN zn on zn.id_trecho = t.id_trecho
    WHERE DATE(data_inicio) = '2022-03-24'
),

     _1746 AS
    (
    /* Faz um merge com a indicador_fontes para ter o de-para do index dos indicadores */
    SELECT
        '1746' as origem,
        i.tipo,
        i.subcategoria_label AS subtipo,
        chamado_geometry--, geometry_trecho
    FROM `rj-escritorio-dev.dataviz_032022_zonanorte.merge_1746_logradouro` t
    LEFT JOIN `rj-escritorio-dev.dataviz_032022_zonanorte.indicador_fontes` i on i.id_tipo = t.id_tipo AND i.id_subtipo = t.id_subtipo
    LEFT JOIN zn on zn.id_logradouro = t.id_logradouro AND zn.id_trecho = t.id_trecho
    WHERE DATE(data_inicio) = '2022-03-24'
)

(SELECT * FROM _1746)
UNION ALL
(SELECT * FROM waze)

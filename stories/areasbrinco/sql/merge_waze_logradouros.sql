/* Essa query deu origem a tabela dataviz_032022_zonanorte.merge_waze_logradouro */

WITH mais_proximo AS (
    WITH cria_rank_mais_proximos AS (
        WITH waze AS (
            /* Elimina duplicados na tabela do waze */
            SELECT 
                * EXCEPT(geometry),
                geometry as geometry_waze,
                ROW_NUMBER() OVER (PARTITION BY uuid) AS rank_waze
            FROM `datario.transporte_rodoviario_waze.alertas`
            WHERE subtype in ('HAZARD_ON_ROAD_POT_HOLE', 'HAZARD_ON_SHOULDER_MISSING_SIGN')
                  AND date >= '2022-02-01'
            ),
            log AS (
                /* Elimina duplicados na tabela de logradouros */
                SELECT
                    * EXCEPT(geometry),
                    geometry as geometry_log,
                    ROW_NUMBER() OVER (PARTITION BY id_logradouro, nome_completo, id_trecho, tipo, id_chavegeo) AS rank_log
                FROM `rj-escritorio-dev.dados_mestres.logradouro`
            )
        /* Faz merge entre POINT do Waze e LINESTRING de Logradouros considerando um buffer
        e deixa calculada a distência entre eles */
        SELECT 
            *, 
            ST_DISTANCE(waze.geometry_waze, log.geometry_log) AS distancia
        FROM waze 
        JOIN log ON ST_DWITHIN(waze.geometry_waze, log.geometry_log, 30) AND waze.rank_waze = 1 AND log.rank_log = 1)

    /* Rankeia os LINESTRINGS mais próximos de cada POINT */
    SELECT
        *, 
        ROW_NUMBER() OVER (PARTITION BY uuid ORDER BY distancia) AS rank_mais_proximo
    FROM cria_rank_mais_proximos
)

SELECT
    * EXCEPT(rank_waze, rank_log),
    CASE WHEN vp.COD_TRECHO IS NULL THEN 0 ELSE 1 END AS via_prioritaria
FROM mais_proximo mp
LEFT JOIN `rj-escritorio-dev.dataviz_032022_zonanorte.vias_prioritarias` vp on (vp.COD_TRECHO = CAST(mp.id_trecho AS INT) AND vp.CHAVEGEO_T=mp.id_chavegeo)

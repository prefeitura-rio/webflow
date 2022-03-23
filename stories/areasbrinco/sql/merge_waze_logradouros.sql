WITH mais_proximo AS (
    WITH cria_rank_mais_proximos AS (
        WITH waze AS (
            SELECT 
                *,
                ROW_NUMBER() OVER (PARTITION BY uuid) AS rank
            FROM `datario.transporte_rodoviario_waze.alertas`
            WHERE subtype in ('HAZARD_ON_ROAD_POT_HOLE', 'HAZARD_ON_SHOULDER_MISSING_SIGN')
                  AND date >= '2022-02-01'
            ),
            log AS (
                SELECT
                    * ,
                    ROW_NUMBER() OVER (PARTITION BY id_logradouro, nome_completo, id_trecho, tipo, id_chavegeo) AS rank
                FROM `rj-escritorio-dev.dados_mestres.logradouro`
            )
        SELECT 
            *, 
            ST_DISTANCE(waze.geometry, log.geometry) AS distancia
        FROM waze 
        JOIN log ON ST_DWITHIN(waze.geometry, log.geometry, 10) AND waze.rank = 1 AND log.rank = 1)

    SELECT 
        *, 
        ROW_NUMBER() OVER (PARTITION BY uuid ORDER BY distancia) AS rank_mais_proximo
    FROM cria_rank_mais_proximos
)

SELECT *
FROM mais_proximo
--WHERE rank_mais_proximo = 1
with leaded as (
	with completely_separated as (
		with lines as (

			SELECT 
				geometria, 
				ST_ASGEOJSON(ST_GEOGFROMTEXT(geometria)) AS line
			FROM `rj-escritorio-dev.seconserva_buracos.logradouros_prefeitura`
		)

		SELECT 
			*, 
			JSON_EXTRACT_ARRAY(line, '$.coordinates') AS together
		FROM lines
		LEFT JOIN unnest(JSON_EXTRACT_ARRAY(line, '$.coordinates')) AS separated WITH OFFSET
		ORDER BY geometria, offset
	)

	SELECT 
		*, 
		CONCAT('[',(separated), ', ', LEAD(separated, 1, 'ignore') OVER (PARTITION BY geometria ORDER BY geometria, offset ASC), ']') AS segment
	FROM completely_separated
)

SELECT 
	geometria, 
	segment
FROM leaded
WHERE offset != ARRAY_LENGTH(together)-1
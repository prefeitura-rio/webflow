WITH
  source AS (
  SELECT
    *
  FROM
    `rj-escritorio-dev.dataviz_032022_zonanorte.indice_categoria` t1),
indice as (
  SELECT
    t1.dt,
    t1.id_trecho,
    ROUND(AVG(t2.indicador), 2) * 100 indicador_global,
    ROUND(AVG(iluminacao), 2) * 100 iluminacao,
    ROUND(AVG(pavimentacao), 2) * 100 pavimentacao,
    ROUND(AVG(limpeza), 2) * 100 limpeza,
    ROUND(AVG(sinalizacao), 2) * 100 sinalizacao,
    sum(t2.n_chamados) n_chamados
  FROM
    source PIVOT(AVG(indicador) FOR categoria IN (
        'iluminacao',
        'pavimentacao',
        'limpeza',
        'sinalizacao')) t1
  JOIN
    source t2
  ON
    t1.dt = t2.dt
    AND t1.id_trecho = t2.id_trecho
  GROUP BY
    t1.dt,
    t1.id_trecho)

select t1.*, t2.nome_completo, t3. subprefeitura, t2.geometry
from indice t1
join `rj-escritorio-dev.dados_mestres.logradouro` t2
on t1.id_trecho = t2.id_trecho
join `rj-escritorio-dev.dataviz_032022_zonanorte.subprefeituras_trechos` t3
on t1.id_trecho = t3.id_trecho
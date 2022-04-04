"""
Query que deu origem a tabela chamados_agg
"""
select 
    t2.origem,
    t2.categoria, 
    t2.subcategoria, 
    t1.id_chamado, 
    t1.id_trecho,
    coalesce(t1.number_thumbs_up, 1) peso,
    datetime(t1.data_inicio) data_inicio,
    case 
        when datetime_diff(data_inicio, t1.data_fim, DAY) < 2 
        then datetime(datetime_add(data_inicio, INTERVAL 2 DAY))
        else datetime(t1.data_fim)
    end data_fim
from `rj-escritorio-dev.dataviz_032022_zonanorte.merge_waze_logradouro_t` t1
join `rj-escritorio-dev.dataviz_032022_zonanorte.indicador_fontes` t2
on t2.id_tipo = t1.tipo and t2.id_subtipo = t1.subtipo
union all
SELECT
  t2.origem,
  t2.categoria,
  t2.subcategoria,
  id_chamado,
  id_trecho,
  1 peso,
  datetime(data_inicio),
  coalesce(data_fim,
    current_datetime('America/Sao_Paulo')) data_fim
FROM
  `rj-escritorio-dev.dataviz_032022_zonanorte.merge_1746_logradouro` t1
JOIN
  `rj-escritorio-dev.dataviz_032022_zonanorte.indicador_fontes` t2
ON
  t1.id_tipo = t2.id_tipo
  AND t1.id_subtipo = t2.id_subtipo
union all
select 
  t2.origem,
  t2.categoria,
  t2.subcategoria,
  null id_chamado,
  id_trecho,
  10 peso,
  datetime(inicio) data_inicio,
  datetime(date_add(inicio, interval 10 day)) data_fim
FROM
  (
    select t1.*, t2.id_trecho
   from `rj-escritorio-dev.dataviz_032022_zonanorte.merge_ipl_logradouro` t1
   join `rj-escritorio-dev.dados_mestres.logradouro` t2
   on cast(t1.id_logradouro as int) = cast(t2.id_logradouro as int)
   ) t1
JOIN
  `rj-escritorio-dev.dataviz_032022_zonanorte.indicador_fontes` t2
ON
  t1.tipo = t2.id_tipo

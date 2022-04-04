with dates as (
  SELECT
  *
  FROM 
    UNNEST(GENERATE_DATE_ARRAY('2022-02-01', current_date('America/Sao_Paulo'), INTERVAL 1 DAY)) AS dt
),
tabela_completa as (
  select
    dt, t1.*, t2.*
  from (
    select 
      distinct categoria, subcategoria 
    from `rj-escritorio-dev.dataviz_032022_zonanorte.indicador_fontes`) t1
  join 
    (select distinct id_trecho from `rj-escritorio-dev.dados_mestres.logradouro`) t2
  on 1=1
  join dates
  on 1=1
),
indice as (
  select 
    dt, 
    categoria, 
    subcategoria,
    id_trecho,
    status,
    sum(peso) peso, # numero de chamados 
    count(distinct t1.id_chamado) n_chamados,
    case when count(*) > 0 then 0 else 1 end indicador
from `rj-escritorio-dev.dataviz_032022_zonanorte.chamados_agg` t1
join dates
on dates.dt between t1.data_inicio and t1.data_fim
group by  dt, 
    categoria, 
    subcategoria, 
    id_trecho,
    status
)
select 
  t2.dt, t2.categoria, t2.subcategoria, t2.id_trecho, t1.status,
  coalesce(peso, 1) peso, # 1 se peso for nulo
  coalesce(n_chamados, 0) n_chamados,
  coalesce(indicador, 1) indicador, # 1 se indicador for nulo
from indice t1
right join tabela_completa t2
on t1.categoria = t2.categoria and t1.subcategoria = t2.subcategoria and t1.id_trecho = t2.id_trecho
and t1.dt = t2.dt
order by peso desc
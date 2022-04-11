select 
  dt,
  categoria,
  id_trecho,
  sum(peso * indicador) / sum(peso) indicador,
  sum(n_chamados) n_chamados,
  sum(peso) peso
from `rj-escritorio-dev.dataviz_032022_zonanorte.indice_subcategoria`
group by dt, categoria, id_trecho
order by peso desc
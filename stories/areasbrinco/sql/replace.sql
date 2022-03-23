


/* Query para criar colunas com logradouros sem abreviações do tipo R. Av.
Essa query deu origem a view dataviz.032022_zonanorte.habitacao_urbana_enderecos_geolocalizados */
SELECT 
    *, 
    REPLACE(
        REPLACE(
            REPLACE(
                REPLACE(
                    REPLACE(
                        REPLACE(
                            REPLACE(
                                REPLACE(
                                    REPLACE(
                                        REPLACE(
                                            REPLACE(
                                                REPLACE(
                                                    REPLACE(
                                                        REPLACE(
                                                            REPLACE(
                                                                REPLACE(
                                                                    REPLACE(
                                                                        REPLACE(
                                                                            REPLACE(
                                                                                REPLACE(
                                                                                    REPLACE(
                                                                                        REPLACE(
                                                                                            REPLACE(
                                                                                                REPLACE(
                                                                                                    REPLACE(
                                                                                                        REPLACE(
                                                                                                            REPLACE(
                                                                                                                REPLACE(
                                                                                                                    REPLACE(
                                                                                                                        REPLACE(
                                                                                                                            REPLACE(
                                                                                                                                REPLACE(logradouro,
                                                                                                                                        'Acs.', 'Acesso'),
                                                                                                                                    'Aetr.', 'Autoestrada'),
                                                                                                                            'Alm.', 'Almirante'),
                                                                                                                        'Av.', 'Avenida'),
                                                                                                                    'Avn.', 'Avenida'),
                                                                                                                'Bc.', 'Beco'),
                                                                                                            'Blv.', 'Boulevard'),
                                                                                                        'Cam.', 'Caminho'),
                                                                                                    'Elv.', 'Elevado'),
                                                                                                'Eng.', 'Engenheiro'),
                                                                                            'Ent.', 'Entrada'),
                                                                                        'Esc.', 'Escadaria'),
                                                                                    'Etr.', 'Estrada'),
                                                                                'Lad.', 'Ladeira'),
                                                                            'Lrg.', 'Largo'),
                                                                        'Pq.', 'Parque'),
                                                                    'Pqe.', 'Parque'),
                                                                'Praia.', 'Praia'),
                                                            'Prç.', 'Praça'),
                                                        'Psr.', 'Passarela'),
                                                    'Pte.', 'Ponte'),
                                                'Pça.', 'Praça'),
                                            'R.', 'Rua'),
                                        'Rod.', 'Rodovia'),
                                    'Rpa.', 'Rampa'),
                                'Srv.', 'Servidão'),
                            'Tre.', 'Trevo'),
                        'Trv.', 'Trevo'),
                    'Tun.', 'Túnel'),
                'Via.', 'Via'),
            'Vl.', 'Vila'),
        'Vto.', 'Viaduto') AS logradouro_sem_abreviacao,
    REPLACE(
        REPLACE(
            REPLACE(
                REPLACE(
                    REPLACE(
                        REPLACE(
                            REPLACE(
                                REPLACE(
                                    REPLACE(
                                        REPLACE(
                                            REPLACE(
                                                REPLACE(
                                                    REPLACE(
                                                        REPLACE(
                                                            REPLACE(
                                                                REPLACE(
                                                                    REPLACE(
                                                                        REPLACE(
                                                                            REPLACE(
                                                                                REPLACE(
                                                                                    REPLACE(
                                                                                        REPLACE(
                                                                                            REPLACE(
                                                                                                REPLACE(
                                                                                                    REPLACE(
                                                                                                        REPLACE(
                                                                                                            REPLACE(
                                                                                                                REPLACE(
                                                                                                                    REPLACE(
                                                                                                                        REPLACE(
                                                                                                                            REPLACE(
                                                                                                                                REPLACE(endereco_completo,
                                                                                                                                        'Acs.', 'Acesso'),
                                                                                                                                    'Aetr.', 'Autoestrada'),
                                                                                                                            'Alm.', 'Almirante'),
                                                                                                                        'Av.', 'Avenida'),
                                                                                                                    'Avn.', 'Avenida'),
                                                                                                                'Bc.', 'Beco'),
                                                                                                            'Blv.', 'Boulevard'),
                                                                                                        'Cam.', 'Caminho'),
                                                                                                    'Elv.', 'Elevado'),
                                                                                                'Eng.', 'Engenheiro'),
                                                                                            'Ent.', 'Entrada'),
                                                                                        'Esc.', 'Escadaria'),
                                                                                    'Etr.', 'Estrada'),
                                                                                'Lad.', 'Ladeira'),
                                                                            'Lrg.', 'Largo'),
                                                                        'Pq.', 'Parque'),
                                                                    'Pqe.', 'Parque'),
                                                                'Praia.', 'Praia'),
                                                            'Prç.', 'Praça'),
                                                        'Psr.', 'Passarela'),
                                                    'Pte.', 'Ponte'),
                                                'Pça.', 'Praça'),
                                            'R.', 'Rua'),
                                        'Rod.', 'Rodovia'),
                                    'Rpa.', 'Rampa'),
                                'Srv.', 'Servidão'),
                            'Tre.', 'Trevo'),
                        'Trv.', 'Trevo'),
                    'Tun.', 'Túnel'),
                'Via.', 'Via'),
            'Vl.', 'Vila'),
        'Vto.', 'Viaduto') AS endereco_completo_sem_abreviacao,

FROM `rj-escritorio-dev.seconserva_buracos.habitacao_urbana_enderecos_geolocalizados`
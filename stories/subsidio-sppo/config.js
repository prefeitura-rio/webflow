var labelsContainer = [{
    'layerId': 'label-transoeste',
    'labels': [{
        'description': "TRANSOESTE",
        'textColor': '#299ed3',
        'textSize': 22,
        'textSizeMobile': 10,
        "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
        'textHaloColor': '#ffffff',
        'textHaloWidth': 50,
        'textHaloBlur': 50,
        'coordinates': [-43.51444, -22.93781]
    }, ]
}, ]


var config = {
    style: 'mapbox://styles/escritoriodedados/cl3ot22ze000w14pg1t33119h', // original
    accessToken: 'pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w',
    theme: 'light',
    use3dTerrain: true,
    cameraViewWidthBreakpoint: 800,
    mobileSizeMultiplier: 0.2,
    chapters: [
        // 2012 - 2019
        {
            id: 'capa',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.45268,
                        lat: -22.93530
                    },
                    zoom: 8.65,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.46494,
                        lat: -22.91815
                    },
                    zoom: 9.62,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },
            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                layer: '',
                opacity: 0,
            }, ],
            onChapterExit: [{
                layer: '',
                opacity: 0,
            }, ]
        },
        {
            id: 'inicio1',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.45268,
                        lat: -22.93530
                    },
                    zoom: 8.55,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.45439,
                        lat: -22.92773
                    },
                    zoom: 10.53,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },
            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'inicio1',
                    opacity: 1,
                },
                {
                    layer: 'linhas-antigas',
                    opacity: 1,
                },
                {
                    layer: 'pontos-antigos',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'inicio1',
                    opacity: 0,
                },
                {
                    layer: 'linhas-antigas',
                    opacity: 0,
                },
                {
                    layer: 'pontos-antigos',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'inicio2',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.45268,
                        lat: -22.93530
                    },
                    zoom: 8.55,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.45439,
                        lat: -22.92773
                    },
                    zoom: 10.53,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },
            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'inicio2',
                    opacity: 1,
                },
                {
                    layer: 'linhas-futuras',
                    opacity: 1,
                },
                {
                    layer: 'pontos-futuros',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'inicio2',
                    opacity: 0,
                },
                {
                    layer: 'linhas-futuras',
                    opacity: 0,
                },
                {
                    layer: 'pontos-futuros',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'inicio4',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.45268,
                        lat: -22.93530
                    },
                    zoom: 8.55,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25942,
                        lat: -22.92894
                    },
                    zoom: 9.93,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },

            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'inicio3',
                    opacity: 1,
                },
                {
                    layer: 'label-transoeste',
                    opacity: 1,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 1,
                },
                {
                    layer: 'label-transolimpica',
                    opacity: 1,
                },
                {
                    layer: 'label-abertura-transolimpica',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'inicio3',
                    opacity: 0,
                },
                {
                    layer: 'label-transoeste',
                    opacity: 0,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 0,
                },
                {
                    layer: 'label-transolimpica',
                    opacity: 0,
                },
                {
                    layer: 'label-abertura-transolimpica',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'inicio5',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.45268,
                        lat: -22.93530
                    },
                    zoom: 8.55,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25942,
                        lat: -22.92894
                    },
                    zoom: 9.93,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },

            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'label-transoeste',
                    opacity: 1,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 1,
                },
                {
                    layer: 'label-transolimpica',
                    opacity: 1,
                },
                {
                    layer: 'inicio4',
                    opacity: 1,
                },
                {
                    layer: 'label-transbrasil',
                    opacity: 1,
                },
                {
                    layer: 'label-abertura-transbrasil',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'label-transoeste',
                    opacity: 0,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 0,
                },
                {
                    layer: 'inicio4',
                    opacity: 0,
                },
                {
                    layer: 'label-transolimpica',
                    opacity: 0,
                },
                {
                    layer: 'label-transbrasil',
                    opacity: 0,
                },
                {
                    layer: 'label-abertura-transbrasil',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'inicio6',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.34756,
                        lat: -22.96384
                    },
                    zoom: 10.88,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.28405,
                        lat: -22.96238
                    },
                    zoom: 11.62,
                    pitch: 4.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },

            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'comparacao-onibus',
                    opacity: 1,
                },
                {
                    layer: 'comparacao-brt',
                    opacity: 1,
                },
                {
                    layer: 'label-comparacao',
                    opacity: 1,
                }
            ],
            onChapterExit: [{
                    layer: 'comparacao-onibus',
                    opacity: 0,
                },
                {
                    layer: 'comparacao-brt',
                    opacity: 0,
                },
                {
                    layer: 'label-comparacao',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'inicio8',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.34756,
                        lat: -22.96384
                    },
                    zoom: 10.88,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.28405,
                        lat: -22.96238
                    },
                    zoom: 11.62,
                    pitch: 4.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },

            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'comparacao-onibus',
                    opacity: 1,
                },
                {
                    layer: 'comparacao-brt',
                    opacity: 1,
                },
                {
                    layer: 'label-comparacao',
                    opacity: 1,
                }
            ],
            onChapterExit: [{
                    layer: 'comparacao-onibus',
                    opacity: 0,
                },
                {
                    layer: 'comparacao-brt',
                    opacity: 0,
                },
                {
                    layer: 'label-comparacao',
                    opacity: 0,
                }
            ]
        },
        // 2017 - 2020
        {
            id: 'crivela1',
            style: 'mapbox://styles/escritoriodedados/cl3ot22ze000w14pg1t33119h',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.45268,
                        lat: -22.93530
                    },
                    zoom: 8.55,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25942,
                        lat: -22.92894
                    },
                    zoom: 9.93,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },

            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'estacao_transoeste',
                    opacity: 1,
                    style: {
                        mobile: {
                            'circle-radius': 2.1
                        }
                    }
                },
                {
                    layer: 'estacao_transcarioca',
                    opacity: 1,
                    style: {
                        mobile: {
                            'circle-radius': 2.1
                        }
                    }
                },
                {
                    layer: 'estacao_transolimpica',
                    opacity: 1,
                    style: {
                        mobile: {
                            'circle-radius': 2.1
                        }
                    }
                },
                {
                    layer: 'estacao_transbrasil',
                    opacity: 1,
                    style: {
                        mobile: {
                            'circle-radius': 2
                        }
                    }
                },
                {
                    layer: 'label-crivela-estacoes',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'estacao_transoeste',
                    opacity: 0,
                },
                {
                    layer: 'estacao_transcarioca',
                    opacity: 0,
                },
                {
                    layer: 'estacao_transolimpica',
                    opacity: 0,
                },
                {
                    layer: 'estacao_transbrasil',
                    opacity: 0,
                },
                {
                    layer: 'label-crivela-estacoes',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'crivela2',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.45268,
                        lat: -22.93530
                    },
                    zoom: 8.55,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25942,
                        lat: -22.92894
                    },
                    zoom: 9.93,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },

            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'crivela-transbrasil',
                    opacity: 1,
                    style: {
                        mobile: {
                            'circle-radius': 2
                        }
                    }
                },
                {
                    layer: 'label-crivela-brasil',
                    opacity: 1,
                },
                {
                    layer: 'estacao_transbrasil',
                    opacity: .4,
                    style: {
                        mobile: {
                            'circle-radius': 2
                        }
                    }
                },
            ],
            onChapterExit: [{
                    layer: 'crivela-transbrasil',
                    opacity: 0,
                },
                {
                    layer: 'label-crivela-brasil',
                    opacity: 0,
                },
                {
                    layer: 'estacao_transbrasil',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'crivela3',
            style: 'mapbox://styles/escritoriodedados/cl3ot22ze000w14pg1t33119h',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.45268,
                        lat: -22.93530
                    },
                    zoom: 8.55,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25942,
                        lat: -22.92894
                    },
                    zoom: 9.93,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },

            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'crivela-estacoes',
                    opacity: 1,
                    style: {
                        mobile: {
                            'circle-radius': 1.5
                        }
                    }
                },
                {
                    layer: 'label-crivela',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'crivela-estacoes',
                    opacity: 0,
                },
                {
                    layer: 'label-crivela',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'crivela4',
            style: 'mapbox://styles/escritoriodedados/cl3ot22ze000w14pg1t33119h',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.45268,
                        lat: -22.93530
                    },
                    zoom: 8.55,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25942,
                        lat: -22.92894
                    },
                    zoom: 9.93,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },

            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'crivela-estacoes',
                    opacity: 1,
                    style: {
                        mobile: {
                            'circle-radius': 1.5
                        }
                    }
                },
                {
                    layer: 'label-crivela',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'crivela-estacoes',
                    opacity: 0,
                },
                {
                    layer: 'label-crivela',
                    opacity: 0,
                },
            ]
        },
        // 2021 - Linha do Tempo
        {
            id: 'recuperacao1',
            style: 'mapbox://styles/escritoriodedados/cl3ot22ze000w14pg1t33119h',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.45268,
                        lat: -22.93530
                    },
                    zoom: 8.55,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25942,
                        lat: -22.92894
                    },
                    zoom: 9.93,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },

            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'crivela-estacoes1',
                    opacity: 1,
                    style: {
                        mobile: {
                            'circle-radius': 1.5
                        }
                    }
                },
                {
                    layer: 'label-recuperacao',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'crivela-estacoes',
                    opacity: 0,
                },
                {
                    layer: 'label-recuperacao',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'recuperacao2',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.33262,
                        lat: -22.90382
                    },
                    zoom: 9.95,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.23681,
                        lat: -22.90992
                    },
                    zoom: 10.58,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },

            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'retomada-1',
                    opacity: 1,
                    style: {
                        mobile: {
                            'circle-radius': [
                                "match", ["get", "data_reabertura"],
                                ["2021-01"],
                                2, ["2021-06", "2021-07"],
                                5,
                                0
                            ],
                        }
                    }
                },
                {
                    layer: 'label-reabertura',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'retomada-1',
                    opacity: 0,
                },
                {
                    layer: 'label-reabertura',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'recuperacao3',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.55653,
                        lat: -22.93631
                    },
                    zoom: 9.71,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.48249,
                        lat: -22.93694
                    },
                    zoom: 10.82,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },

            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'retomada-2',
                    opacity: 1,
                    style: {
                        mobile: {
                            'circle-radius': [
                                "match", ["get", "data_reabertura"],
                                ["2021-01", "2021-06", "2021-07"],
                                2, ["2021-08", "2021-09"],
                                5,
                                0
                            ],
                        }
                    }
                },
                {
                    layer: 'label-reabertura1',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'retomada-2',
                    opacity: 0,
                },
                {
                    layer: 'label-reabertura1',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'recuperacao4',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.45268,
                        lat: -22.93530
                    },
                    zoom: 8.55,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25942,
                        lat: -22.92894
                    },
                    zoom: 9.93,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },

            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'retomada-3',
                    opacity: 1,
                    style: {
                        mobile: {
                            'circle-radius': [
                                "match", ["get", "data_reabertura"],
                                ["2021-01", "2021-06", "2021-07", "2021-08", "2021-09"],
                                2, ["2021-11", "2021-12"],
                                5,
                                0
                            ],
                        }
                    }
                },
                {
                    layer: 'label-reabertura2',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'retomada-3',
                    opacity: 0,
                },
                {
                    layer: 'label-reabertura2',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'recuperacao5',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.45268,
                        lat: -22.93530
                    },
                    zoom: 8.55,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25942,
                        lat: -22.92894
                    },
                    zoom: 9.93,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },

            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'retomada-3',
                    opacity: 1,
                    style: {
                        mobile: {
                            'circle-radius': [
                                "match", ["get", "data_reabertura"],
                                ["2021-01", "2021-06", "2021-07", "2021-08", "2021-09"],
                                2, ["2021-11", "2021-12"],
                                5,
                                0
                            ],
                        }
                    }
                },
                {
                    layer: 'label-reabertura2',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'retomada-3',
                    opacity: 0,
                },
                {
                    layer: 'label-reabertura2',
                    opacity: 0,
                },
            ]
        },
        // 2022 - Futuro
        {
            id: 'final1',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.30118,
                        lat: -22.85878
                    },
                    zoom: 10.24,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.21537,
                        lat: -22.86059
                    },
                    zoom: 11.01,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },

            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'corredor_transbrasil',
                    opacity: 1,
                },
                {
                    layer: 'label-transbrasil-final',
                    opacity: 1,
                },
                {
                    layer: 'transporte-completo',
                    opacity: 0.2,
                },
            ],
            onChapterExit: [{
                    layer: 'corredor_transbrasil',
                    opacity: 0,
                },
                {
                    layer: 'label-transbrasil-final',
                    opacity: 0,
                },
                {
                    layer: 'transporte-completo',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'final2',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.21054,
                        lat: -22.89849
                    },
                    zoom: 14.56,
                    pitch: 46.50,
                    bearing: 15.73,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.20766,
                        lat: -22.89912
                    },
                    zoom: 15.99,
                    pitch: 59.50,
                    bearing: 8.22,
                    speed: 1,
                    curve: 1
                }
            },

            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'gentileza',
                    opacity: .7,
                },
                {
                    layer: 'corredor_transbrasil',
                    opacity: 0.5,
                },
                {
                    layer: 'transporte-completo',
                    opacity: 0.7,
                },
                {
                    layer: 'label-intermodal',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'corredor_transbrasil',
                    opacity: 0,
                },
                {
                    layer: 'gentileza',
                    opacity: 0,
                },
                {
                    layer: 'transporte-completo',
                    opacity: 0,
                },
                {
                    layer: 'label-intermodal',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'final3',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.45268,
                        lat: -22.93530
                    },
                    zoom: 8.55,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.44823,
                        lat: -22.92715
                    },
                    zoom: 10.20,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },

            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'transporte-completo',
                    opacity: 1,
                },
                {
                    layer: 'corredor_transoeste',
                    opacity: 1,
                },
                {
                    layer: 'corredor_transcarioca',
                    opacity: 1,
                },
                {
                    layer: 'corredor_transolimpica',
                    opacity: 1,
                },
                {
                    layer: 'corredor_transbrasil',
                    opacity: 1,
                },
                {
                    layer: 'label-transoeste',
                    opacity: 1,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 1,
                },
                {
                    layer: 'label-transolimpica',
                    opacity: 1,
                },
                {
                    layer: 'label-transbrasil',
                    opacity: 1,
                },
                {
                    layer: 'label-transporte',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'transporte-completo',
                    opacity: 0,
                },
                {
                    layer: 'corredor_transoeste',
                    opacity: 0,
                },
                {
                    layer: 'corredor_transcarioca',
                    opacity: 0,
                },
                {
                    layer: 'corredor_transolimpica',
                    opacity: 0,
                },
                {
                    layer: 'corredor_transbrasil',
                    opacity: 0,
                },
                {
                    layer: 'label-transoeste',
                    opacity: 0,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 0,
                },
                {
                    layer: 'label-transolimpica',
                    opacity: 0,
                },
                {
                    layer: 'label-transbrasil',
                    opacity: 0,
                },
                {
                    layer: 'label-transporte',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'footer',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.45268,
                        lat: -22.93530
                    },
                    zoom: 8.55,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.44823,
                        lat: -22.92715
                    },
                    zoom: 10.20,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },

            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'final',
                    opacity: 1,
                },
                {
                    layer: 'label-transoeste',
                    opacity: 1,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 1,
                },
                {
                    layer: 'label-transolimpica',
                    opacity: 1,
                },
                {
                    layer: 'label-transbrasil',
                    opacity: 1,
                },
                {
                    layer: 'label-transporte',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'final',
                    opacity: 0,
                },
                {
                    layer: 'label-transoeste',
                    opacity: 0,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 0,
                },
                {
                    layer: 'label-transolimpica',
                    opacity: 0,
                },
                {
                    layer: 'label-transbrasil',
                    opacity: 0,
                },
                {
                    layer: 'label-transporte',
                    opacity: 0,
                },
            ]
        },
    ]
};
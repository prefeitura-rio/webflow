var labelsContainer = [{
        'layerId': 'label-transoeste',
        'labels': [{
            'description': "TRANSOESTE",
            'textColor': '#299ed3',
            'textSize': 22,
            "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
            'textHaloColor': '#ffffff',
            'textHaloWidth': 50,
            'textHaloBlur': 50,
            'coordinates': [-43.49813, -22.93957]
        }, ]
    },
    {
        'layerId': 'label-transbrasil',
        'labels': [{
            'description': "TRANSBRASIL",
            'textColor': '#ffffff',
            'textSize': 22,
            "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
            'textHaloColor': '#d1be1a',
            'textHaloWidth': 50,
            'textHaloBlur': 50,
            'coordinates': [-43.33511, -22.76938]
        }, ]
    },
    {
        'layerId': 'label-transcarioca',
        'labels': [{
            'description': "TRANSCARIOCA",
            'textColor': '#f9811f',
            'textSize': 22,
            "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
            'textHaloColor': '#ffffff',
            'textHaloWidth': 50,
            'textHaloBlur': 50,
            'coordinates': [-43.26895, -22.94070]
        }, ]
    },
    {
        'layerId': 'label-transolimpica',
        'labels': [{
            'description': "TRANSOLIMPICA",
            'textColor': '#1db657',
            'textSize': 22,
            "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
            'textHaloColor': '#ffffff',
            'textHaloWidth': 50,
            'textHaloBlur': 50,
            'coordinates': [-43.48157, -22.82394]
        }, ]
    },
    {
        'layerId': 'label-abertura-transoeste',
        'labels': [{
            'description': "ABERTURA 2022",
            'textColor': '#000000',
            'textSize': 17,
            "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
            'textHaloColor': '#ffffff',
            'textHaloWidth': 50,
            'textHaloBlur': 50,
            'coordinates': [-43.26200, -23.05568]
        }, ]
    },
    /*    {
            'layerId': 'label-abertura-transbrasil',
            'labels': [{
                'description': "ABERTURA 2021",
                'textColor': '#000000',
                'textSize': 17,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#ffffff',
                'textHaloWidth': 50,
                'textHaloBlur': 50,
                'coordinates': [-43.26200, -23.05568]
            }, ]
        }, */
    {
        'layerId': 'label-abertura-transolimpica',
        'labels': [{
            'description': "ABERTURA 2020",
            'textColor': '#000000',
            'textSize': 17,
            "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
            'textHaloColor': '#ffffff',
            'textHaloWidth': 50,
            'textHaloBlur': 50,
            'coordinates': [-43.26200, -23.05568]
        }, ]
    }, {
        'layerId': 'label-abertura-transcarioca',
        'labels': [{
            'description': "ABERTURA 2019",
            'textColor': '#000000',
            'textSize': 17,
            "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
            'textHaloColor': '#ffffff',
            'textHaloWidth': 50,
            'textHaloBlur': 50,
            'coordinates': [-43.26200, -23.05568]
        }, ]
    },
    {
        'layerId': 'label-reabertura',
        'labels': [{
            'description': "ESTAÇÕES REABERTAS",
            'textColor': '#f9811f',
            'textSize': 22,
            "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
            'textHaloColor': '#ffffff',
            'textHaloWidth': 50,
            'textHaloBlur': 50,
            'textJustify': 'left',
            'coordinates': [-43.26895, -22.94070]
        }, ]
    },
    {
        'layerId': 'label-reabertura1',
        'labels': [{
            'description': "ESTAÇÕES REABERTAS",
            'textColor': '#299ed3',
            'textSize': 22,
            "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
            'textHaloColor': '#ffffff',
            'textHaloWidth': 50,
            'textHaloBlur': 50,
            'coordinates': [-43.49813, -22.93957]
        }, ]
    },
    {
        'layerId': 'label-transporte',
        'labels': [{
                'description': "METRO",
                'textColor': '#766f6f',
                'textSize': 22,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#ffffff',
                'textHaloWidth': 50,
                'textHaloBlur': 50,
                'coordinates': [-43.27815, -22.94700]
            },
            {
                'description': "TREM",
                'textColor': '#766f6f',
                'textSize': 22,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#ffffff',
                'textHaloWidth': 50,
                'textHaloBlur': 50,
                'coordinates': [-43.37976, -22.87862]
            },
        ]
    },
    {
        'layerId': 'label-crivela-brasil',
        'labels': [{
            'description': "OBRAS DA TRANSBRASIL NÃO AVANÇARAM",
            'textColor': '#d1be1a',
            'textSize': 22,
            "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
            'textHaloColor': 'white',
            'textHaloWidth': 50,
            'textHaloBlur': 50,
            'textJustify': 'left',
            'coordinates': [-43.37990, -23.04896]
        }, ]
    },
]


var config = {
    // style: 'stories/brt/style.json',
    // style: 'mapbox://styles/escritoriodedados/ckwpfvolk150q15qk5hdcxuao', // modificado
    // style: 'mapbox://styles/escritoriodedados/cl0pyw2j6000d15np43i9pa9p',  // basic
    style: 'mapbox://styles/escritoriodedados/cl0o1yvxn001015mtsysibtq6', // original
    accessToken: 'pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t5bGx6Z2I1MG5nbzJwcGUyeHFxcGs1bCJ9.sAUs1LRcb3R4l-6Dbhk8Pw',
    theme: 'light',
    use3dTerrain: true,
    cameraViewWidthBreakpoint: 800,
    chapters: [
        // 2012 - 2019
        {
            id: 'inicio1',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.46915,
                        lat: -22.92849
                    },
                    zoom: 8.40,
                    pitch: 0.00,
                    bearing: -2.42,
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
                    layer: 'transporte',
                    opacity: 1,
                },
                {
                    layer: 'label-transporte',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'transporte',
                    opacity: 0,
                },
                {
                    layer: 'label-transporte',
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
                        lon: -43.46915,
                        lat: -22.92849
                    },
                    zoom: 8.40,
                    pitch: 0.00,
                    bearing: -2.42,
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
                    layer: 'transporte',
                    opacity: 1,
                },
                {
                    layer: 'corredor_transoeste',
                    opacity: 1,
                },
                {
                    layer: 'label-transoeste',
                    opacity: 1,
                },
                {
                    layer: 'label-abertura-transoeste',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'transporte',
                    opacity: 0,
                },
                {
                    layer: 'corredor_transoeste',
                    opacity: 0,
                },
                {
                    layer: 'label-transoeste',
                    opacity: 0,
                },
                {
                    layer: 'label-abertura-transoeste',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'inicio3',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.46915,
                        lat: -22.92849
                    },
                    zoom: 8.40,
                    pitch: 0.00,
                    bearing: -2.42,
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
                    layer: 'transporte',
                    opacity: 1,
                },
                {
                    layer: 'corredor_transoeste',
                    opacity: 1,
                },
                {
                    layer: 'label-transoeste',
                    opacity: 1,
                },
                {
                    layer: 'corredor_transcarioca',
                    opacity: 1,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 1,
                },
                {
                    layer: 'label-abertura-transcarioca',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'transporte',
                    opacity: 0,
                },
                {
                    layer: 'corredor_transoeste',
                    opacity: 0,
                },
                {
                    layer: 'label-transoeste',
                    opacity: 0,
                },
                {
                    layer: 'corredor_transcarioca',
                    opacity: 0,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 0,
                },
                {
                    layer: 'label-abertura-transcarioca',
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
                        lon: -43.46915,
                        lat: -22.92849
                    },
                    zoom: 8.40,
                    pitch: 0.00,
                    bearing: -2.42,
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
                    layer: 'transporte',
                    opacity: 1,
                },
                {
                    layer: 'corredor_transoeste',
                    opacity: 1,
                },
                {
                    layer: 'label-transoeste',
                    opacity: 1,
                },
                {
                    layer: 'corredor_transcarioca',
                    opacity: 1,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 1,
                },
                {
                    layer: 'corredor_transolimpica',
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
                    layer: 'transporte',
                    opacity: 0,
                },
                {
                    layer: 'corredor_transoeste',
                    opacity: 0,
                },
                {
                    layer: 'label-transoeste',
                    opacity: 0,
                },
                {
                    layer: 'corredor_transcarioca',
                    opacity: 0,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 0,
                },
                {
                    layer: 'corredor_transolimpica',
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
                        lon: -43.46915,
                        lat: -22.92849
                    },
                    zoom: 8.40,
                    pitch: 0.00,
                    bearing: -2.42,
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
                    layer: 'transporte',
                    opacity: 1,
                },
                {
                    layer: 'corredor_transoeste',
                    opacity: 1,
                },
                {
                    layer: 'label-transoeste',
                    opacity: 1,
                },
                {
                    layer: 'corredor_transcarioca',
                    opacity: 1,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 1,
                },
                {
                    layer: 'corredor_transolimpica',
                    opacity: 1,
                },
                {
                    layer: 'label-transolimpica',
                    opacity: 1,
                },
                {
                    layer: 'corredor_transbrasil',
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
                    layer: 'transporte',
                    opacity: 0,
                },
                {
                    layer: 'corredor_transoeste',
                    opacity: 0,
                },
                {
                    layer: 'label-transoeste',
                    opacity: 0,
                },
                {
                    layer: 'corredor_transcarioca',
                    opacity: 0,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 0,
                },
                {
                    layer: 'corredor_transolimpica',
                    opacity: 0,
                },
                {
                    layer: 'label-transolimpica',
                    opacity: 0,
                },
                {
                    layer: 'corredor_transbrasil',
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
                        lon: -43.46915,
                        lat: -22.92849
                    },
                    zoom: 8.40,
                    pitch: 0.00,
                    bearing: -2.42,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.30505,
                        lat: -22.95810
                    },
                    zoom: 11.85,
                    pitch: 0.00,
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
            ],
            onChapterExit: [{
                    layer: 'comparacao-onibus',
                    opacity: 0,
                },
                {
                    layer: 'comparacao-brt',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'inicio7',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.46915,
                        lat: -22.92849
                    },
                    zoom: 8.40,
                    pitch: 0.00,
                    bearing: -2.42,
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
                    layer: 'corredor_transoeste',
                    opacity: 1,
                },
                {
                    layer: 'label-transoeste',
                    opacity: 1,
                },
                {
                    layer: 'corredor_transcarioca',
                    opacity: 1,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 1,
                },
                {
                    layer: 'corredor_transolimpica',
                    opacity: 1,
                },
                {
                    layer: 'label-transolimpica',
                    opacity: 1,
                },
                {
                    layer: 'corredor_transbrasil',
                    opacity: 1,
                },
                {
                    layer: 'label-transbrasil',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'corredor_transoeste',
                    opacity: 0,
                },
                {
                    layer: 'label-transoeste',
                    opacity: 0,
                },
                {
                    layer: 'corredor_transcarioca',
                    opacity: 0,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 0,
                },
                {
                    layer: 'corredor_transolimpica',
                    opacity: 0,
                },
                {
                    layer: 'label-transolimpica',
                    opacity: 0,
                },
                {
                    layer: 'corredor_transbrasil',
                    opacity: 0,
                },
                {
                    layer: 'label-transbrasil',
                    opacity: 0,
                },
            ]
        },
        // 2017-2020
        {
            id: 'crivela1',
            style: 'mapbox://styles/escritoriodedados/cl0o3gv0r000214nyitwqkz83',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.46915,
                        lat: -22.92849
                    },
                    zoom: 8.40,
                    pitch: 0.00,
                    bearing: -2.42,
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
                },
                {
                    layer: 'label-transoeste',
                    opacity: 1,
                },
                {
                    layer: 'estacao_transcarioca',
                    opacity: 1,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 1,
                },
                {
                    layer: 'estacao_transolimpica',
                    opacity: 1,
                },
                {
                    layer: 'label-transolimpica',
                    opacity: 1,
                },
                {
                    layer: 'estacao_transbrasil',
                    opacity: 1,
                },
                {
                    layer: 'label-transbrasil',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'estacao_transoeste',
                    opacity: 0,
                },
                {
                    layer: 'label-transoeste',
                    opacity: 0,
                },
                {
                    layer: 'estacao_transcarioca',
                    opacity: 0,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 0,
                },
                {
                    layer: 'estacao_transolimpica',
                    opacity: 0,
                },
                {
                    layer: 'label-transolimpica',
                    opacity: 0,
                },
                {
                    layer: 'estacao_transbrasil',
                    opacity: 0,
                },
                {
                    layer: 'label-transbrasil',
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
                        lon: -43.46915,
                        lat: -22.92849
                    },
                    zoom: 8.40,
                    pitch: 0.00,
                    bearing: -2.42,
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
                },
                {
                    layer: 'label-crivela-brasil',
                    opacity: 1,
                }
            ],
            onChapterExit: [{
                    layer: 'crivela-transbrasil',
                    opacity: 0,
                },
                {
                    layer: 'label-crivela-brasil',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'crivela3',
            style: 'mapbox://styles/escritoriodedados/cl0o1yvxn001015mtsysibtq6',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.46915,
                        lat: -22.92849
                    },
                    zoom: 8.40,
                    pitch: 0.00,
                    bearing: -2.42,
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
            }, ],
            onChapterExit: [{
                layer: 'crivela-estacoes',
                opacity: 0,
            }, ]
        },
        // 2021 - Linha do Tempo
        {
            id: 'recuperacao1',
            style: 'mapbox://styles/escritoriodedados/cl0o1yvxn001015mtsysibtq6',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.46915,
                        lat: -22.92849
                    },
                    zoom: 8.40,
                    pitch: 0.00,
                    bearing: -2.42,
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
            }, ],
            onChapterExit: [{
                layer: 'crivela-estacoes',
                opacity: 0,
            }, ]
        },
        {
            id: 'recuperacao2',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.46915,
                        lat: -22.92849
                    },
                    zoom: 8.40,
                    pitch: 0.00,
                    bearing: -2.42,
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
                        lon: -43.46915,
                        lat: -22.92849
                    },
                    zoom: 8.40,
                    pitch: 0.00,
                    bearing: -2.42,
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
                        lon: -43.46915,
                        lat: -22.92849
                    },
                    zoom: 8.40,
                    pitch: 0.00,
                    bearing: -2.42,
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
            }, ],
            onChapterExit: [{
                layer: 'retomada-3',
                opacity: 0,
            }, ]
        },
        // 2022 - Futuro
        {
            id: 'final1',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.46915,
                        lat: -22.92849
                    },
                    zoom: 8.40,
                    pitch: 0.00,
                    bearing: -2.42,
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
                    layer: 'estacao_transbrasil',
                    opacity: 1,
                },
                {
                    layer: 'corredor_transbrasil1',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'estacao_transbrasil',
                    opacity: 0,
                },
                {
                    layer: 'corredor_transbrasil1',
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
                        lon: -43.46915,
                        lat: -22.92849
                    },
                    zoom: 8.40,
                    pitch: 0.00,
                    bearing: -2.42,
                    speed: 1,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.19655,
                        lat: -22.89957
                    },
                    zoom: 13.82,
                    pitch: 0.00,
                    bearing: 0.00,
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
                    layer: 'transporte_completo',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'gentileza',
                    opacity: 0,
                },
                {
                    layer: 'transporte_completo',
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
                        lon: -43.46915,
                        lat: -22.92849
                    },
                    zoom: 8.40,
                    pitch: 0.00,
                    bearing: -2.42,
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
                    layer: 'transporte',
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
            ],
            onChapterExit: [{
                    layer: 'transporte',
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
            ]
        },
    ]
};
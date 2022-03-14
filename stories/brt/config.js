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
            'coordinates': [-43.50186, -22.97128]
        }, ]
    },
    {
        'layerId': 'label-transbrasil',
        'labels': [{
            'description': "TRANSBRASIL",
            'textColor': '#d1be1a',
            'textSize': 22,
            "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
            'textHaloColor': '#ffffff',
            'textHaloWidth': 50,
            'textHaloBlur': 50,
            'coordinates': [-43.35032, -22.78958]
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
            'coordinates': [-43.27152, -22.89830]
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
            'coordinates': [-43.49742, -22.85302]
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
            }, ],
            onChapterExit: [{
                layer: 'crivela-transbrasil',
                opacity: 0,
            }, ]
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
                layer: 'retomada-1',
                opacity: 1,
            }, ],
            onChapterExit: [{
                layer: 'retomada-1',
                opacity: 0,
            }, ]
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
                layer: 'retomada-2',
                opacity: 1,
            }, ],
            onChapterExit: [{
                layer: 'retomada-2',
                opacity: 0,
            }, ]
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
            }, ],
            onChapterExit: [{
                layer: 'estacao_transbrasil',
                opacity: 0,
            }, ]
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
                        lon: -43.20975,
                        lat: -22.89911
                    },
                    zoom: 16.53,
                    pitch: 58.00,
                    bearing: 18.40,
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
    ]
};
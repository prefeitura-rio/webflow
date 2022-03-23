    var labelsContainer = [{
            'layerId': 'label-regioes-administrativas',
            'labels': [{
                'description': "REGIÕES ADMINISTRATIVAS",
                'textColor': '#ffffff',
                'textSize': 22,
                'textSizeMobile': 10,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#9f4141',
                'textHaloWidth': 50,
                'textHaloBlur': 50,
                'coordinates': [-43.34871, -23.06189]
            }, ]
        },
        {
            'layerId': 'label-zona-norte',
            'labels': [{
                'description': "SUBPREFEITURA DA ZONA NORTE",
                'textColor': '#ffffff',
                'textSize': 22,
                'textSizeMobile': 10,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#9f4141',
                'textHaloWidth': 50,
                'textHaloBlur': 50,
                'coordinates': [-43.38232, -22.89807]
            }, ]
        },
    ]


    var config = {
        style: 'mapbox://styles/escritoriodedados/cl12caadq000m15mf0plu1gdw', // original
        accessToken: 'pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w',
        theme: 'light',
        use3dTerrain: true,
        cameraViewWidthBreakpoint: 800,
        mobileSizeMultiplier: 0.2,
        chapters: [
            // 2012 - 2019
            {
                id: 'header',
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
                            lon: -43.41078,
                            lat: -22.92387
                        },
                        zoom: 10.38,
                        pitch: 0.00,
                        bearing: 0.00,
                        speed: 1,
                        curve: 1
                    }
                },
                mapAnimation: 'flyTo',
                // callback: 'newContainer', 
                onChapterEnter: [],
                onChapterExit: []
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
                            lon: -43.24080,
                            lat: -22.90578
                        },
                        zoom: 9.88,
                        pitch: 0.00,
                        bearing: 0.00,
                        speed: 1,
                        curve: 1
                    }
                },
                mapAnimation: 'flyTo',
                // callback: 'newContainer', 
                onChapterEnter: [],
                onChapterExit: []
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
                            lon: -43.24080,
                            lat: -22.90578
                        },
                        zoom: 9.88,
                        pitch: 0.00,
                        bearing: 0.00,
                        speed: 1,
                        curve: 1
                    }
                },
                mapAnimation: 'flyTo',
                // callback: 'newContainer', 
                onChapterEnter: [],
                onChapterExit: []
            },
            {
                id: 'zn1',
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
                            lon: -43.24080,
                            lat: -22.90578
                        },
                        zoom: 9.88,
                        pitch: 0.00,
                        bearing: 0.00,
                        speed: 1,
                        curve: 1
                    }
                },
                mapAnimation: 'flyTo',
                // callback: 'newContainer', 
                onChapterEnter: [{
                        layer: 'regioes-administrativas',
                        opacity: .7,
                    },
                    {
                        layer: 'label-regioes-administrativas',
                        opacity: 1,
                    },
                ],
                onChapterExit: [{
                        layer: 'regioes-administrativas',
                        opacity: 0,
                    },
                    {
                        layer: 'label-regioes-administrativas',
                        opacity: 0,
                    },
                ]
            },
            {
                id: 'zn2',
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
                            lon: -43.22801,
                            lat: -22.86027
                        },
                        zoom: 11.20,
                        pitch: 0.00,
                        bearing: 0.00,
                        speed: 1,
                        curve: 1
                    }
                },
                mapAnimation: 'flyTo',
                // callback: 'newContainer', 
                onChapterEnter: [{
                        layer: 'regioes-administrativas',
                        opacity: .5,
                    },
                    {
                        layer: 'zona-norte-full',
                        opacity: .5,
                    },
                    {
                        layer: 'label-zona-norte',
                        opacity: 1,
                    },
                ],
                onChapterExit: [{
                        layer: 'regioes-administrativas',
                        opacity: 0,
                    },
                    {
                        layer: 'zona-norte-full',
                        opacity: 0,
                    },
                    {
                        layer: 'label-zona-norte',
                        opacity: 0,
                    },
                ]
            },
            {
                id: 'zn3',
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
                            lon: -43.22801,
                            lat: -22.86027
                        },
                        zoom: 11.20,
                        pitch: 0.00,
                        bearing: 0.00,
                        speed: 1,
                        curve: 1
                    }
                },
                mapAnimation: 'flyTo',
                // callback: 'newContainer', 
                onChapterEnter: [{
                        layer: 'regioes-administrativas',
                        opacity: .3,
                    },
                    {
                        layer: 'dados-pipocando-zn',
                        opacity: 1,
                    },
                ],
                onChapterExit: [{
                        layer: 'regioes-administrativas',
                        opacity: 0,
                    },
                    {
                        layer: 'dados-pipocando-zn',
                        opacity: 0,
                    },
                ]
            },
            {
                id: 'comeco1',
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
                            lon: -43.22801,
                            lat: -22.86027
                        },
                        zoom: 11.20,
                        pitch: 0.00,
                        bearing: 0.00,
                        speed: 1,
                        curve: 1
                    }
                },
                mapAnimation: 'flyTo',
                // callback: 'newContainer', 
                onChapterEnter: [{
                    layer: 'vias-prioritarias',
                    opacity: 1,
                }, ],
                onChapterExit: [{
                    layer: 'vias-prioritarias',
                    opacity: 0,
                }, ]
            },
            {
                id: 'comeco2',
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
                            lon: -43.22801,
                            lat: -22.86027
                        },
                        zoom: 11.20,
                        pitch: 0.00,
                        bearing: 0.00,
                        speed: 1,
                        curve: 1
                    }
                },
                mapAnimation: 'flyTo',
                // callback: 'newContainer', 
                onChapterEnter: [{
                        layer: 'vias-prioritarias',
                        opacity: 1,
                    },
                    {
                        layer: 'bairros-zn',
                        opacity: .7,
                    },
                ],
                onChapterExit: [{
                        layer: 'vias-prioritarias',
                        opacity: 0,
                    },
                    {
                        layer: 'bairros-zn',
                        opacity: 0,
                    },
                ]
            },
            {
                id: 'transporte1',
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
                            lon: -43.22801,
                            lat: -22.86027
                        },
                        zoom: 11.20,
                        pitch: 0.00,
                        bearing: 0.00,
                        speed: 1,
                        curve: 1
                    }
                },
                mapAnimation: 'flyTo',
                // callback: 'newContainer', 
                onChapterEnter: [{
                        layer: 'vias-prioritarias',
                        opacity: 1,
                    },
                    {
                        layer: 'linhas',
                        opacity: 1,
                    },
                    {
                        layer: 'estacoes',
                        opacity: 1,
                    },
                ],
                onChapterExit: [{
                        layer: 'vias-prioritarias',
                        opacity: 0,
                    },
                    {
                        layer: 'linhas',
                        opacity: 0,
                    },
                    {
                        layer: 'estacoes',
                        opacity: 0,
                    },
                ]
            },
            {
                id: 'transporte2',
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
                            lon: -43.22801,
                            lat: -22.86027
                        },
                        zoom: 11.20,
                        pitch: 0.00,
                        bearing: 0.00,
                        speed: 1,
                        curve: 1
                    }
                },
                mapAnimation: 'flyTo',
                // callback: 'newContainer', 
                onChapterEnter: [{
                    layer: 'vias-prioritarias',
                    opacity: 1,
                }, ],
                onChapterExit: [{
                    layer: 'vias-prioritarias',
                    opacity: 0,
                }, ]
            },
            {
                id: 'asfalto',
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
                            lon: -43.22801,
                            lat: -22.86027
                        },
                        zoom: 11.20,
                        pitch: 0.00,
                        bearing: 0.00,
                        speed: 1,
                        curve: 1
                    }
                },
                mapAnimation: 'flyTo',
                // callback: 'newContainer', 
                onChapterEnter: [{
                    layer: 'asfalto',
                    opacity: 1,
                }, ],
                onChapterExit: [{
                    layer: 'asfalto',
                    opacity: 0,
                }, ]
            },
            {
                id: 'luz',
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
                            lon: -43.22801,
                            lat: -22.86027
                        },
                        zoom: 11.20,
                        pitch: 0.00,
                        bearing: 0.00,
                        speed: 1,
                        curve: 1
                    }
                },
                mapAnimation: 'flyTo',
                // callback: 'newContainer', 
                onChapterEnter: [{
                    layer: 'luz',
                    opacity: 1,
                }, ],
                onChapterExit: [{
                    layer: 'luz',
                    opacity: 0,
                }, ]
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
                }, ],
                onChapterExit: [{
                    layer: 'final',
                    opacity: 0,
                }, ]
            },
        ]
    };
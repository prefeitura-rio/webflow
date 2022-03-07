var labelsContainer = [{
        'layerId': 'label-bairros',
        'labels': [{
                'description': "JACAREZINHO",
                'textColor': '#a63a3a',
                'textSize': 25,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#000',
                'textHaloWidth': 50,
                'textHaloBlur': 50,
                'coordinates': [-43.25769, -22.88634]
            },
            {
                'description': "JACARÉ",
                'textColor': '#ffffff',
                'textSize': 20,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#000',
                'textHaloWidth': 50,
                'textHaloBlur': 50,
                'coordinates': [-43.25282, -22.89176]
            },
            {
                'description': "MANGUINHOS",
                'textColor': '#ffffff',
                'textSize': 20,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#000',
                'textHaloWidth': 50,
                'textHaloBlur': 50,
                'coordinates': [-43.24402, -22.87991]
            },
            {
                'description': "MARACANÃ",
                'textColor': '#ffffff',
                'textSize': 15,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#000',
                'textHaloWidth': 50,
                'textHaloBlur': 50,
                'coordinates': [-43.22880, -22.91349]
            },
            {
                'description': "ENGENHÃO",
                'textColor': '#ffffff',
                'textSize': 15,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#000',
                'textHaloWidth': 50,
                'textHaloBlur': 50,
                'coordinates': [-43.29157, -22.89523]
            },
        ]
    },
    {
        'layerId': 'label-comunidade',
        'labels': [{
                'description': "COMUNIDADE",
                'textColor': '#a63a3a',
                'textSize': 22,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#000',
                'textHaloWidth': 50,
                'textHaloBlur': 50,
                'coordinates': [-43.25756, -22.8864]
            },
            {
                'description': "BAIRRO",
                'textColor': '#d98787',
                'textSize': 20,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#000',
                'textHaloWidth': 50,
                'textHaloBlur': 50,
                'coordinates': [-43.25722, -22.88423]
            },
        ]
    },
]

var config = {
    style: 'mapbox://styles/caiojacintho/ckyu4kjqz000a14p7kivbajq6',
    accessToken: 'pk.eyJ1IjoiY2Fpb2phY2ludGhvIiwiYSI6ImNreXVmeGNjeTBiaGczMm1sYTAzc2EyNWwifQ.gmZ0eUpq0-tgaQb3tJ0PiQ',
    theme: 'light',
    use3dTerrain: true,
    chapters: [{
            id: 'inicio',
            // mapAnimation: 'easeTo', // flyTo, easeTo, seinao
            location: {
                mobile: {
                    center: {
                        lon: -43.47918,
                        lat: -22.92342
                    },
                    zoom: 10.25,
                    pitch: 0.00,
                    bearing: -0.40
                },
                desktop: {
                    center: {
                        lon: -43.44161,
                        lat: -22.92543
                    },
                    zoom: 9.64,
                    pitch: 0.00,
                    bearing: -0.40,
                    speed: 2,
                    curve: 1
                }
            },
            rotateAnimation: {
                duration: 130, // seconds
                degrees: 180 // degress
            },
            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                layer: 'municipio',
                opacity: .5,
            }, ],
            onChapterExit: [{
                layer: 'municipio',
                opacity: 0,
            }]
        },
        {
            id: 'parte0',
            location: {
                mobile: {
                    center: {
                        lon: -43.25119,
                        lat: -22.88566
                    },
                    zoom: 14.98,
                    pitch: 8.50,
                    bearing: -34.70,
                    speed: 2,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25908,
                        lat: -22.88702
                    },
                    zoom: 13.01,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 2,
                    curve: 1
                },
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [{
                    layer: 'bairros1',
                    opacity: 1,
                },
                {
                    layer: 'jacarezinho-full',
                    opacity: .8,
                },
                {
                    layer: 'label-bairros',
                    opacity: 1,
                }
            ],
            onChapterExit: [{
                    layer: 'bairros1',
                    opacity: 0,
                },
                {
                    layer: 'jacarezinho-full',
                    opacity: 0,
                },
                {
                    layer: 'label-bairros',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'parte1',
            location: {
                mobile: {
                    center: {
                        lon: -43.25119,
                        lat: -22.88566
                    },
                    zoom: 14.98,
                    pitch: 8.50,
                    bearing: -34.70,
                    speed: 2,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25852,
                        lat: -22.88845
                    },
                    zoom: 14.92,
                    pitch: 1.50,
                    bearing: -36.40,
                    speed: 2,
                    curve: 1
                },
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [{
                    layer: 'comunidade',
                    opacity: .8,
                },
                {
                    layer: 'jacarezinho-full',
                    opacity: .4,
                },
                {
                    layer: 'label-comunidade',
                    opacity: 1,
                }
            ],
            onChapterExit: [{
                    layer: 'comunidade',
                    opacity: 0,
                },
                {
                    layer: 'jacarezinho-full',
                    opacity: 0,
                },
                {
                    layer: 'label-comunidade',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'parte2',
            location: {
                mobile: {
                    center: {
                        lon: -43.25119,
                        lat: -22.88566
                    },
                    zoom: 14.98,
                    pitch: 8.50,
                    bearing: -34.70,
                    speed: 2,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25852,
                        lat: -22.88845
                    },
                    zoom: 14.92,
                    pitch: 1.50,
                    bearing: -36.40,
                    speed: 2,
                    curve: 1
                },
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [{
                    layer: 'fogojacarezinho',
                    opacity: 1,
                },
                {
                    layer: 'jacarezinho-full',
                    opacity: .4,
                }
            ],
            onChapterExit: [{
                    layer: 'fogojacarezinho',
                    opacity: 0,
                },
                {
                    layer: 'jacarezinho-full',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'parte3',
            location: {
                mobile: {
                    center: {
                        lon: -43.25119,
                        lat: -22.88566
                    },
                    zoom: 14.98,
                    pitch: 8.50,
                    bearing: -34.70,
                    speed: 2,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25941,
                        lat: -22.88992
                    },
                    zoom: 14.71,
                    pitch: 0.50,
                    bearing: -35.49,
                    speed: 2,
                    curve: 1
                },
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [{
                layer: 'populacao',
                opacity: .8,
            }],
            onChapterExit: [{
                layer: 'populacao',
                opacity: 0,
            }]
        },
        {
            id: 'parte4',
            location: {
                mobile: {
                    center: {
                        lon: -43.25119,
                        lat: -22.88566
                    },
                    zoom: 14.98,
                    pitch: 8.50,
                    bearing: -34.70,
                    speed: 2,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25945,
                        lat: -22.88928
                    },
                    zoom: 14.95,
                    pitch: 0.50,
                    bearing: -35.49,
                    speed: 2,
                    curve: 1
                },
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [{
                layer: 'populacao',
                opacity: .8,
            }],
            onChapterExit: [{
                layer: 'populacao',
                opacity: 0,
            }]
        },
        {
            id: 'parte5',
            location: {
                mobile: {
                    center: {
                        lon: -43.25119,
                        lat: -22.88566
                    },
                    zoom: 14.98,
                    pitch: 8.50,
                    bearing: -34.70,
                    speed: 2,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25352,
                        lat: -22.88379
                    },
                    zoom: 13.98,
                    pitch: 1.50,
                    bearing: -35.04,
                    speed: 2,
                    curve: 1
                },
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [{
                    layer: 'bairros',
                    opacity: 1,
                },
                {
                    layer: 'escolas',
                    opacity: 1,
                },
                {
                    layer: 'creches',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'bairros',
                    opacity: 0,
                },
                {
                    layer: 'escolas',
                    opacity: 0,
                },
                {
                    layer: 'creches',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'parte6',
            location: {
                mobile: {
                    center: {
                        lon: -43.25119,
                        lat: -22.88566
                    },
                    zoom: 14.98,
                    pitch: 8.50,
                    bearing: -34.70,
                    speed: 2,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25537,
                        lat: -22.88806
                    },
                    zoom: 14.36,
                    pitch: 0.50,
                    bearing: -37.35,
                    speed: 2,
                    curve: 1
                },
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [{
                    layer: 'bairros',
                    opacity: 1,
                },
                {
                    layer: 'escolas',
                    opacity: 1,
                },
                {
                    layer: 'creches',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'bairros',
                    opacity: 0,
                },
                {
                    layer: 'escolas',
                    opacity: 0,
                },
                {
                    layer: 'creches',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'parte7',
            location: {
                mobile: {
                    center: {
                        lon: -43.25119,
                        lat: -22.88566
                    },
                    zoom: 14.98,
                    pitch: 8.50,
                    bearing: -34.70,
                    speed: 2,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25537,
                        lat: -22.88806
                    },
                    zoom: 14.36,
                    pitch: 0.50,
                    bearing: -37.35,
                    speed: 2,
                    curve: 1
                },
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [{
                    layer: 'cres',
                    opacity: .2,
                },
                {
                    layer: 'escolas',
                    opacity: 1,
                },
                {
                    layer: 'creches',
                    opacity: 1,
                },
                {
                    layer: 'bairros',
                    opacity: 1,
                }
            ],
            onChapterExit: [{
                    layer: 'cres',
                    opacity: 0,
                },
                {
                    layer: 'escolas',
                    opacity: 0,
                },
                {
                    layer: 'creches',
                    opacity: 0,
                },
                {
                    layer: 'bairros',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'parte8',
            location: {
                mobile: {
                    center: {
                        lon: -43.25119,
                        lat: -22.88566
                    },
                    zoom: 14.98,
                    pitch: 8.50,
                    bearing: -34.70,
                    speed: 2,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25928,
                        lat: -22.88773
                    },
                    zoom: 14.73,
                    pitch: 38.50,
                    bearing: 0.00,
                    speed: 2,
                    curve: 1
                },
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [{
                layer: 'saude1',
                opacity: .4,
            }, ],
            onChapterExit: [{
                layer: 'saude1',
                opacity: 0,
            }, ]
        },
        {
            id: 'parte9',
            location: {
                mobile: {
                    center: {
                        lon: -43.25119,
                        lat: -22.88566
                    },
                    zoom: 14.98,
                    pitch: 8.50,
                    bearing: -34.70,
                    speed: 2,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25928,
                        lat: -22.88773
                    },
                    zoom: 14.73,
                    pitch: 38.50,
                    bearing: 0.00,
                    speed: 2,
                    curve: 1
                },
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [{
                layer: 'saude2',
                opacity: .4,
            }, ],
            onChapterExit: [{
                layer: 'saude2',
                opacity: 0,
            }, ]
        },
        {
            id: 'parte10',
            location: {
                mobile: {
                    center: {
                        lon: -43.25119,
                        lat: -22.88566
                    },
                    zoom: 14.98,
                    pitch: 8.50,
                    bearing: -34.70,
                    speed: 2,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25933,
                        lat: -22.88645
                    },
                    zoom: 15.39,
                    pitch: 60.00,
                    bearing: -19.03,
                    speed: 2,
                    curve: 1
                },
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [{
                layer: 'comlurbmenor',
                opacity: 1,
            }, ],
            onChapterExit: [{
                layer: 'comlurbmenor',
                opacity: 0,
            }, ]
        },
        {
            id: 'parte11',
            location: {
                mobile: {
                    center: {
                        lon: -43.25119,
                        lat: -22.88566
                    },
                    zoom: 14.98,
                    pitch: 8.50,
                    bearing: -34.70,
                    speed: 2,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25999,
                        lat: -22.88684
                    },
                    zoom: 14.91,
                    pitch: 60.00,
                    bearing: -21.73,
                    speed: 2,
                    curve: 1
                },
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [{
                layer: 'comlurb',
                opacity: 1,
            }, ],
            onChapterExit: [{
                layer: 'comlurb',
                opacity: 0,
            }, ]
        },
        {
            id: 'parte12',
            location: {
                mobile: {
                    center: {
                        lon: -43.25119,
                        lat: -22.88566
                    },
                    zoom: 14.98,
                    pitch: 8.50,
                    bearing: -34.70,
                    speed: 2,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.44161,
                        lat: -22.92543
                    },
                    zoom: 9.64,
                    pitch: 0.00,
                    bearing: -0.40,
                    speed: 2,
                    curve: 1
                },
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [{
                layer: 'municipio',
                opacity: .5,
            }, ],
            onChapterExit: [{
                layer: 'municipio',
                opacity: 0,
            }, ]
        },
    ]
};
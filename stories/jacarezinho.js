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
                    layer: 'fogojacarezinho',
                    opacity: 1,
                },
                {
                    layer: 'jacarezinho',
                    opacity: 1,
                },
                {
                    layer: 'jacarezinho-full',
                    opacity: .3,
                }
            ],
            onChapterExit: [{
                    layer: 'fogojacarezinho',
                    opacity: 0,
                },
                {
                    layer: 'jacarezinho',
                    opacity: 0,
                },
                {
                    layer: 'jacarezinho-full',
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
                    layer: 'jacarezinho',
                    opacity: 1,
                },
                {
                    layer: 'jacarezinho-full',
                    opacity: .3,
                }
            ],
            onChapterExit: [{
                    layer: 'fogojacarezinho',
                    opacity: 0,
                },
                {
                    layer: 'jacarezinho',
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
                        lon: -43.25986,
                        lat: -22.88952
                    },
                    zoom: 14.47,
                    pitch: 1.50,
                    bearing: -36.40,
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
                        lon: -43.25986,
                        lat: -22.88952
                    },
                    zoom: 14.47,
                    pitch: 1.50,
                    bearing: -36.40,
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
                    layer: 'saude',
                    opacity: 1,
                },
                {
                    layer: 'saude1',
                    opacity: .4,
                }
            ],
            onChapterExit: [{
                    layer: 'saude',
                    opacity: 0,
                },
                {
                    layer: 'saude1',
                    opacity: 0,
                }
            ]
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
                        lon: -43.26308,
                        lat: -22.89238
                    },
                    zoom: 17.42,
                    pitch: 60.00,
                    bearing: 11.20,
                    speed: 2,
                    curve: 1
                },
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [{
                    layer: 'saude',
                    opacity: 1,
                },
                {
                    layer: 'saude2',
                    opacity: .4,
                }
            ],
            onChapterExit: [{
                    layer: 'saude',
                    opacity: 0,
                },
                {
                    layer: 'saude2',
                    opacity: 0,
                }
            ]
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
                        lon: -43.26318,
                        lat: -22.89040
                    },
                    zoom: 14.78,
                    pitch: 57.00,
                    bearing: 17.13,
                    speed: 2,
                    curve: 1
                },
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [{
                    layer: 'hidrografia',
                    opacity: 1,
                },
                {
                    layer: '',
                    opacity: .3,
                }
            ],
            onChapterExit: [{
                    layer: 'hidrografia',
                    opacity: 0,
                },
                {
                    layer: '',
                    opacity: 0,
                }
            ]
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
                        lon: -43.26318,
                        lat: -22.89040
                    },
                    zoom: 14.78,
                    pitch: 57.00,
                    bearing: 17.13,
                    speed: 2,
                    curve: 1
                },
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [{
                    layer: 'hidrografia',
                    opacity: 1,
                },
                {
                    layer: '',
                    opacity: .3,
                }
            ],
            onChapterExit: [{
                    layer: 'hidrografia',
                    opacity: 0,
                },
                {
                    layer: '',
                    opacity: 0,
                }
            ]
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
                },
                {
                    layer: '',
                    opacity: .3,
                }
            ],
            onChapterExit: [{
                    layer: 'municipio',
                    opacity: 0,
                },
                {
                    layer: '',
                    opacity: 0,
                }
            ]
        },
    ]
};
var labelsContainer = [{
        'layerId': 'label-linhasantigas',
        'labels': [{
                'description': "LINHAS DE ÔNIBUS",
                'textColor': '#be5b5b',
                'textSize': 28,
                'textSizeMobile': 10,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#ffffff',
                'textHaloWidth': 100,
                'textHaloBlur': 100,
                'coordinates': [-43.40871, -23.04737]
            },
            {
                'description': "ANTES DO ACORDO",
                'textColor': '#303e46',
                'textSize': 28,
                'textSizeMobile': 12,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#ffffff',
                'textHaloWidth': 100,
                'textHaloBlur': 100,
                'coordinates': [-43.23871, -23.04737]
            },
        ]
    },
    {
        'layerId': 'label-pontosantigos',
        'labels': [{
                'description': "PONTOS DE ÔNIBUS",
                'textColor': '#be5b5b',
                'textSize': 28,
                'textSizeMobile': 10,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#ffffff',
                'textHaloWidth': 100,
                'textHaloBlur': 100,
                'coordinates': [-43.40871, -23.04737]
            },
            {
                'description': "ANTES DO ACORDO",
                'textColor': '#303e46',
                'textSize': 28,
                'textSizeMobile': 12,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#ffffff',
                'textHaloWidth': 100,
                'textHaloBlur': 100,
                'coordinates': [-43.23871, -23.04737]
            },
        ]
    },
    {
        'layerId': 'label-novaslinhas',
        'labels': [{
                'description': "LINHAS DE ÔNIBUS ",
                'textColor': '#be5b5b',
                'textSize': 28,
                'textSizeMobile': 10,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#ffffff',
                'textHaloWidth': 100,
                'textHaloBlur': 100,
                'coordinates': [-43.40871, -23.04737]
            },
            {
                'description': "DEVOLVIDAS",
                'textColor': '#303e46',
                'textSize': 28,
                'textSizeMobile': 12,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#ffffff',
                'textHaloWidth': 100,
                'textHaloBlur': 100,
                'coordinates': [-43.26871, -23.04737]
            },
            {
                'description': "INICIALMENTE",
                'textColor': '#303e46',
                'textSize': 28,
                'textSizeMobile': 12,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#ffffff',
                'textHaloWidth': 100,
                'textHaloBlur': 100,
                'coordinates': [-43.15871, -23.04737]
            },
        ]
    },
]


var config = {
    style: 'mapbox://styles/escritoriodedados/cl3ot22ze000w14pg1t33119h', // original
    accessToken: 'pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t3bWdmcHpjMmJ2cTJucWJ4MGQ1Mm1kbiJ9.4hHJX-1pSevYoBbja7Pq4w',
    theme: 'light',
    use3dTerrain: true,
    cameraViewWidthBreakpoint: 800,
    mobileSizeMultiplier: 0.2,
    chapters: [

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
                    zoom: 9.89,
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
                    zoom: 10.23,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },
            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'linhasantigas',
                    opacity: 1,
                },
                {
                    layer: 'label-linhasantigas',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'linhasantigas',
                    opacity: 0,
                },
                {
                    layer: 'label-linhasantigas',
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
                    zoom: 10.23,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },
            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'pontosantigos',
                    opacity: 1,
                },
                {
                    layer: 'label-pontosantigos',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'pontosantigos',
                    opacity: 0,
                },
                {
                    layer: 'label-pontosantigos',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'novo',
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
                    zoom: 10.23,
                    pitch: 0.00,
                    bearing: 0.00,
                    speed: 1,
                    curve: 1
                }
            },
            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                    layer: 'novaslinhas',
                    opacity: 1,
                },
                {
                    layer: 'label-novaslinhas',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'novaslinhas',
                    opacity: 0,
                },
                {
                    layer: 'label-novaslinhas',
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
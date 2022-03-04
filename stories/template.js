var labelsContainer = [{
        'layerId': 'label-escolas',
        'labels': [{
                'description': "Caio é legal",
                'textColor': '#fff',
                'textSize': 23,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#000',
                'textHaloWidth': 1,
                'textHaloBlur': 1,
                'coordinates': [-43.25119, -22.88566]
            },
            {
                'description': "Escola Comunitária",
                'textColor': '#fff',
                'textSize': 12,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#000',
                'textHaloWidth': 1,
                'textHaloBlur': 1,
                'coordinates': [-43.25, -22.88]
            },
        ]
    },
    {
        'layerId': 'label-saude',
        'labels': [{
                'description': "Hospital",
                'textColor': '#fff',
                'textSize': 12,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#000',
                'textHaloWidth': 100,
                'textHaloBlur': 1,
                'coordinates': [-43.25119, -22.88566]
            },
            {
                'description': "Centro de Saúde",
                'textColor': '#fff',
                'textSize': 12,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#000',
                'textHaloWidth': 1,
                'textHaloBlur': 1,
                'coordinates': [-43.25, -22.88]
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
            id: 'riodejaneiro',
            // mapAnimation: 'easeTo', // flyTo, easeTo
            location: {
                mobile: {
                    center: {
                        lon: -43.41869,
                        lat: -22.95622
                    },
                    zoom: 10.85,
                    pitch: 27.00,
                    bearing: -2.79,
                    speed: 2,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.41869,
                        lat: -22.95622
                    },
                    zoom: 8.85,
                    pitch: 27.00,
                    bearing: -2.79,
                    speed: 2,
                    curve: 1
                }
            },
            rotateAnimation: {
                duration: 100, // seconds
                degrees: 180 // degress
            },
            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [{
                layer: 'jacarezinho-full',
                opacity: 1,
            }, ],
            onChapterExit: [{
                layer: 'jacarezinho-full',
                opacity: 0,
            }]
        },
        {
            id: 'bairro',
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
                        lon: -43.25119,
                        lat: -22.88566
                    },
                    zoom: 14.98,
                    pitch: 8.50,
                    bearing: -34.70,
                    speed: 2,
                    curve: 1
                },
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [{
                    layer: 'jacarezinho-full',
                    opacity: 1,
                },
                {
                    layer: 'label-escolas',
                    opacity: 1,
                }
            ],
            onChapterExit: [{
                    layer: 'jacarezinho-full',
                    opacity: 0,
                },
                {
                    layer: 'label-escolas',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'bairro2',
            location: {
                mobile: {
                    center: {
                        lon: -43.25119,
                        lat: -22.88566
                    },
                    zoom: 11.98,
                    pitch: 8.50,
                    bearing: -34.70,
                    speed: 2,
                    curve: 1
                },
                desktop: {
                    center: {
                        lon: -43.25119,
                        lat: -22.88566
                    },
                    zoom: 11.98,
                    pitch: 8.50,
                    bearing: -34.70,
                    speed: 2,
                    curve: 1
                },
            },
            mapAnimation: 'flyTo',
            onChapterEnter: [{
                    layer: 'jacarezinho-full',
                    opacity: 1,
                },
                {
                    layer: 'label-saude',
                    opacity: 1,
                }
            ],
            onChapterExit: [{
                    layer: 'jacarezinho-full',
                    opacity: 0,
                },
                {
                    layer: 'label-saude',
                    opacity: 0,
                }
            ]
        },
    ]
};
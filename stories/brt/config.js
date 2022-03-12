var labelsContainer = [{
        'layerId': 'label-bairros',
        'labels': [
            /*{
                            'description': "JACARÉ",
                            'textColor': '#ffffff',
                            'textSize': 18,
                            "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                            'textHaloColor': '#000',
                            'textHaloWidth': 50,
                            'textHaloBlur': 50,
                            'coordinates': [-43.25184, -22.89181]
                        },
                        {
                            'description': "MANGUINHOS",
                            'textColor': '#ffffff',
                            'textSize': 18,
                            "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                            'textHaloColor': '#000',
                            'textHaloWidth': 50,
                            'textHaloBlur': 50,
                            'coordinates': [-43.24402, -22.87991]
                        },*/
            {
                'description': "MARACANÃ",
                'textColor': '#ffffff',
                'textSize': 15,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#000',
                'textHaloWidth': 50,
                'textHaloBlur': 50,
                'coordinates': [-43.23197, -22.90836]
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
            {
                'description': "JACAREZINHO",
                'textColor': '#a63a3a',
                'textSize': 25,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#000',
                'textHaloWidth': 50,
                'textHaloBlur': 50,
                'coordinates': [-43.26505, -22.88362]
            },
        ]
    },
    {
        'layerId': 'label-escolas',
        'labels': [{
                'description': "JACARÉ",
                'textColor': '#ffffff',
                'textSize': 18,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#000',
                'textHaloWidth': 50,
                'textHaloBlur': 50,
                'coordinates': [-43.25478, -22.89127]
            },
            {
                'description': "MANGUINHOS",
                'textColor': '#ffffff',
                'textSize': 18,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#000',
                'textHaloWidth': 50,
                'textHaloBlur': 50,
                'coordinates': [-43.24466, -22.88187]
            },
            {
                'description': "JACAREZINHO",
                'textColor': '#ffffff',
                'textSize': 18,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#000',
                'textHaloWidth': 50,
                'coordinates': [-43.25766, -22.88637]
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
                'coordinates': [-43.25758, -22.88316]
            },
        ]
    },
]


var config = {
    style: 'mapbox://styles/escritoriodedados/cl0o1yvxn001015mtsysibtq6',
    accessToken: 'pk.eyJ1IjoiZXNjcml0b3Jpb2RlZGFkb3MiLCJhIjoiY2t5bGx6Z2I1MG5nbzJwcGUyeHFxcGs1bCJ9.sAUs1LRcb3R4l-6Dbhk8Pw',
    theme: 'light',
    use3dTerrain: true,
    cameraViewWidthBreakpoint: 800,
    chapters: [{
            id: 'inicio',
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
                        lon: -43.44161,
                        lat: -22.92543
                    },
                    zoom: 9.64,
                    pitch: 0.00,
                    bearing: -0.40,
                    speed: 1,
                    curve: 1
                }
            },
            rotateAnimation: {
                duration: 200, // seconds
                degrees: 15 // degress
            },
            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [, ],
            onChapterExit: []
        },
        {
            id: 'change-style',
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
                        lon: -43.44161,
                        lat: -22.92543
                    },
                    zoom: 9.64,
                    pitch: 0.00,
                    bearing: -0.40,
                    speed: 1,
                    curve: 1
                }
            },
            rotateAnimation: {
                duration: 200, // seconds
                degrees: 45 // degress
            },
            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [, ],
            onChapterExit: []
        },
    ]
};
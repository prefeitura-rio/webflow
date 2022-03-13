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
            'coordinates': [-43.49040, -22.93575]
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
            'coordinates': [-43.33026, -22.883087]
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
            'coordinates': [-43.25044, -22.93747]
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
            'coordinates': [-43.49374, -22.88898]
        }, ]
    },
    {
        'layerId': 'label-transporte',
        'labels': [{
                'description': "METRO",
                'textColor': '#53d219',
                'textSize': 22,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#ffffff',
                'textHaloWidth': 50,
                'textHaloBlur': 50,
                'coordinates': [-43.27815, -22.94700]
            },
            {
                'description': "TREM",
                'textColor': '#ca4444',
                'textSize': 22,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#ffffff',
                'textHaloWidth': 50,
                'textHaloBlur': 50,
                'coordinates': [-43.37976, -22.87862]
            },
            {
                'description': "VLT",
                'textColor': '#4b59d2',
                'textSize': 22,
                "textFont": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
                'textHaloColor': '#ffffff',
                'textHaloWidth': 50,
                'textHaloBlur': 50,
                'coordinates': [-43.17483, -22.86222]
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
    chapters: [
        {
            id: 'parte0',
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
            rotateAnimation: {
                duration: 200, // seconds
                degrees: 45 // degress
            },
            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [
                {
                    layer: 'jacarezinho',
                    opacity: 1,
                },
                {
                    layer: 'label-transporte',
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: 'jacarezinho',
                    opacity: 0,
                },
                {
                    layer: 'label-transporte',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'parte1',
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
            rotateAnimation: {
                duration: 800, // seconds
                degrees: 45 // degress
            },
            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [
                {
                    layer: 'estacao_transoeste',
                    opacity: 1,
                },
                {
                    layer: 'label-transoeste',
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
            ]
        },
        {
            id: 'parte2',
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
            rotateAnimation: {
                duration: 800, // seconds
                degrees: 45 // degress
            },
            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [
                {
                    layer: 'estacao_transcarioca',
                    opacity: 1,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 1,
                },
            ],
            onChapterExit: [{
                    layer: 'estacao_transcarioca',
                    opacity: 0,
                },
                {
                    layer: 'label-transcarioca',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'parte3',
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
            rotateAnimation: {
                duration: 800, // seconds
                degrees: 45 // degress
            },
            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [
                {
                    layer: 'estacao_transolimpica',
                    opacity: 1,
                },
                {
                    layer: 'label-transolimpica',
                    opacity: 1,
                },
            ],
            onChapterExit: [
                {
                    layer: 'estacao_transolimpica',
                    opacity: 0,
                },
                {
                    layer: 'label-transolimpica',
                    opacity: 0,
                },
            ]
        },
        {
            id: 'parte4',
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
            rotateAnimation: {
                duration: 800, // seconds
                degrees: 45 // degress
            },
            mapAnimation: 'flyTo',
            // callback: 'newContainer', 
            onChapterEnter: [
                {
                    layer: 'estacao_transbrasil',
                    opacity: 1,
                },
                {
                    layer: 'label-transbrasil',
                    opacity: 1,
                },
            ],
            onChapterExit: [

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
    ]
};
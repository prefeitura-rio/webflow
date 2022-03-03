function startMap() {

    var layerTypes = {
        'fill': ['fill-opacity'],
        'line': ['line-opacity'],
        'circle': ['circle-opacity', 'circle-stroke-opacity'],
        'symbol': ['icon-opacity', 'text-opacity'],
        'raster': ['raster-opacity'],
        'fill-extrusion': ['fill-extrusion-opacity'],
        'heatmap': ['heatmap-opacity']
    }

    function getLayerPaintType(layer) {
        var layerType = map.getLayer(layer).type;
        return layerTypes[layerType];
    }

    function getWidth() {
    return Math.max(
        document.body.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.offsetWidth,
        document.documentElement.offsetWidth,
        document.documentElement.clientWidth
    );
    }

    function set3dTerrain(map, config) {
    if (config.use3dTerrain) {
        map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
        });
        // add the DEM source as a terrain layer with exaggerated height
        map.setTerrain({
        'source': 'mapbox-dem',
        'exaggeration': 1.5
        });

        // add a sky layer that will show when the map is highly pitched
        map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
            'sky-type': 'atmosphere',
            'sky-atmosphere-sun': [0.0, 0.0],
            'sky-atmosphere-sun-intensity': 15
        }
        });
    };
    }

    function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function(prop) {
        var options = {};
        if (layer.duration) {
        var transitionProp = prop + "-transition";
        options = {
            "duration": layer.duration
        };
        map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
    }


    mapboxgl.accessToken = config.accessToken;

    console.log('Here1')
    var map = new mapboxgl.Map({
        container: 'map',
        style: config.style,
        center: config.chapters[0].location.desktop.center,
        zoom: config.chapters[0].location.desktop.zoom,
        bearing: config.chapters[0].location.desktop.bearing,
        pitch: config.chapters[0].location.desktop.pitch,
        interactive: false
    });

    const places = {
            'type': 'FeatureCollection',
            'features': [
            {
            'type': 'Feature',
            'properties': {
                'description': "Ford's Theater 1",
                'icon': 'theatre-15',
                'text-color': '#fff',
                'text-size': 12,
                "text-font": ["DIN Offc Pro Medium", "Arial Unicode MS Bold"],
            },
            'geometry': {
                'type': 'Point',
                'coordinates': [-43.25119,-22.88566]
                }
            },
            ]
        };

    // instantiate the scrollama
    var scroller = scrollama();

    map.on("load", function() {

        map.addSource('places', {
        'type': 'geojson',
        'data': places
        });

        map.addLayer({
        'id': 'poi-labels',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'text-field': ['get', 'description'],
            'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
            'text-radial-offset': 0.5,
            'text-justify': 'auto',
            'icon-image': ['get', 'icon'],
            'text-size': ['get', 'text-size'],
            
        },
        'paint': {
            "text-color": ['get', 'text-color'],
        }
        });
        // Load 3d buildings
        set3dTerrain(map, config);

        // setup the instance, pass callback functions
        scroller
        .setup({
        step: '.section1',
        offset: 0.5,
        })
        .onStepEnter(response => {

            console.log(response)
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            console.log(chapter)

            response.element.classList.add('active');

            if (getWidth() < config.cameraViewWidthBreakpoint) {
            map[chapter.mapAnimation || 'flyTo'](chapter.location.mobile || chapter.location.desktop)
            } else {
            map[chapter.mapAnimation || 'flyTo'](chapter.location.desktop) 
            }

            
            if (chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach(setLayerOpacity);
            }
            if (chapter.callback) {
            window[chapter.callback](chapter);
            }

            if (chapter.rotateAnimation !== undefined) {
            map.once('moveend', function() {
                const rotateNumber = map.getBearing();
                map.rotateTo(rotateNumber + chapter.rotateAnimation.degrees, {
                duration: chapter.rotateAnimation.duration * 1000, // milliseconds
                easing: function(t) {
                    return t;
                }
                });
            });
            }
        })
        .onStepExit(response => {
            var chapter = config.chapters.find(chap => chap.id === response.element.id);
            if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
            }
        });
    });

    // setup resize event
    window.addEventListener('resize', scroller.resize);
};
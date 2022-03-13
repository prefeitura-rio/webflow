function startMap(datavizId) {

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

        console.log('layer', layer)
        var paintProps = getLayerPaintType(layer.layer);
        paintProps.forEach(function (prop) {
            console.log('prop', prop)
            var options = {};
            if (layer.duration) {
                var transitionProp = prop + "-transition";
                options = {
                    "duration": layer.duration
                };
                map.setPaintProperty(layer.layer, transitionProp, options);
            }
            map.setPaintProperty(layer.layer, prop, layer.opacity, options);
            map.setPaintProperty(layer.layer, prop, layer.opacity, options);
            console.log(map.getLayer(layer.layer))
        });
    }


    mapboxgl.accessToken = config.accessToken;

    var map = new mapboxgl.Map({
        container: 'map',
        style: config.style,
        center: config.chapters[0].location.desktop.center,
        zoom: config.chapters[0].location.desktop.zoom,
        bearing: config.chapters[0].location.desktop.bearing,
        pitch: config.chapters[0].location.desktop.pitch,
        interactive: false
    });

    function prepareLabel(labelContainer, g) {

        for (var i = 0; i < labelContainer.labels.length; i++) {
            var label = labelContainer.labels[i];
            var feature = {
                'type': 'Feature',
                'properties': {
                    'description': label.description,
                    'text-color': label.textColor,
                    'text-size': label.textSize,
                    "text-font": label.textFont,
                    'text-halo-width': label.textHaloWidth,
                    'text-halo-color': label.textHaloColor,
                    'text-halo-blur': label.textHaloBlur,
                },
                'geometry': {
                    'type': 'Point',
                    'coordinates': label.coordinates
                }
            }
            g.features.push(feature);
        }
        return g
    }

    function addLabelToMap(map, labelsContainer) {

        for (var i = 0; i < labelsContainer.length; i++) {
            var labelContainer = labelsContainer[i];

            var geojsonEmpty = {
                'type': 'FeatureCollection',
                'features': []
            }

            var geojson = prepareLabel(labelContainer, geojsonEmpty);

            map.addSource(labelContainer.layerId, {
                'type': 'geojson',
                'data': geojson
            });

            map.addLayer({
                'id': labelContainer.layerId,
                'type': 'symbol',
                'source': labelContainer.layerId,
                'layout': {
                    'text-field': ['get', 'description'],
                    'text-variable-anchor': ['top', 'bottom', 'left', 'right'],
                    'text-radial-offset': 0.5,
                    'text-justify': 'auto',
                    'icon-image': ['get', 'icon'],
                    'text-size': ['get', 'text-size'],
                    'text-ignore-placement': true,


                },
                'paint': {
                    "text-color": ['get', 'text-color'],
                    'text-opacity': 0,
                    'text-halo-width': ['get', 'text-halo-width'],
                    'text-halo-color': ['get', 'text-halo-color'],
                    'text-halo-blur': ['get', 'text-halo-blur'],
                }
            });
        }
    }

    // instantiate the scrollama
    var scroller = scrollama();

    map.on("load", function () {

        addLabelToMap(map, labelsContainer)

        // Load 3d buildings
        set3dTerrain(map, config);


        // setup the instance, pass callback functions
        scroller
            .setup({
                step: '.section_' + datavizId,
                offset: 0.5,
                // debug: true
            })
            .onStepEnter(response => {
                console.log('--------CHAPTER ENTER------')
                console.log('response', response)

                // Get current chapter
                var chapter = config.chapters.find(chap => chap.id === response.element.id);

                console.log('chapter', chapter.id)
                response.element.classList.add('active');

                // Set screen breakpoint
                if (getWidth() < config.cameraViewWidthBreakpoint) {
                    map[chapter.mapAnimation || 'flyTo'](chapter.location.mobile || chapter.location.desktop)
                } else {
                    map[chapter.mapAnimation || 'flyTo'](chapter.location.desktop)
                }

                // Set layer opacity for each layer
                if (chapter.onChapterEnter.length > 0) {
                    chapter.onChapterEnter.forEach(setLayerOpacity);
                }

                // Callback for chapter enter
                if (chapter.callback) {
                    window[chapter.callback](chapter);
                }

                // Set rotate animation
                if (chapter.rotateAnimation !== undefined) {
                    map.once('moveend', function () {
                        const rotateNumber = map.getBearing();
                        map.rotateTo(rotateNumber + chapter.rotateAnimation.degrees, {
                            duration: chapter.rotateAnimation.duration * 1000, // milliseconds
                            easing: function (t) {
                                return t;
                            }
                        });
                    });
                }

            })
            .onStepExit(response => {

                console.log('--------CHAPTER EXIT------')
                var chapter = config.chapters.find(chap => chap.id === response.element.id);

                if (chapter.onChapterExit.length > 0) {
                    chapter.onChapterExit.forEach(setLayerOpacity);
                }

                response.element.classList.remove('active');
            });
    });

    // setup resize event
    window.addEventListener('resize', scroller.resize);
};
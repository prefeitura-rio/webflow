import React, { useState, useEffect } from "react";
import { Map } from 'react-map-gl';
import DeckGL from "@deck.gl/react";
import { TripsLayer } from "@deck.gl/geo-layers";




// Source data CSV
const trips = 'https://raw.githubusercontent.com/prefeitura-rio/webflow/36b75a3f6b1e609b377b9574bb0372424157bf7d/templates/react-map-gl/trips_data/trips.json';
const MAPBOX_API_TOKEN = "pk.eyJ1IjoiZDExNjYyNiIsImEiOiJjazM1ODVoZ3MxNjJoM21vcWMwZmhycHVvIn0.7hxPP_9w7z8QAVc2nStP6w";
const animationSpeed = 10
const loopLength = 2000

export default function MapGL() {

    const [time, setTime] = useState(0);
    const [animation] = useState({});

    useEffect(() => {
        const animate = () => {
            setTime(t => (t + animationSpeed) % loopLength);
            animation.id = window.requestAnimationFrame(animate);
        };
        animation.id = window.requestAnimationFrame(animate);
        return () => window.cancelAnimationFrame(animation.id);
    }, [animation]);



    const layers = [
        new TripsLayer({
            id: 'trips',
            data: trips,
            getPath: d => d.path,
            getTimestamps: d => d.timestamps,
            getColor: [253, 128, 93],
            widthMinPixels: 5,
            fadeTrail: true,
            currentTime: time,
            opacity: 1,
            rounded: true,
            trailLength:180,
            shadowEnabled: false
        }),
    ];
    
    
    const INITIAL_VIEW_STATE = {
        longitude: -43.17785,
        latitude: -22.9561,
        zoom: 13,
        pitch: 45,
        bearing: 0
    };
    
    return (
        <div>
            <DeckGL
                initialViewState={INITIAL_VIEW_STATE}
                controller={true}
                layers={layers}
            >
            <Map
                mapStyle="mapbox://styles/mapbox/dark-v9"
                mapboxAccessToken={MAPBOX_API_TOKEN}
            />
            </DeckGL>
        </div>
    );
}





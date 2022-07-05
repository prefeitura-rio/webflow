import * as React from 'react';
import {Map} from 'react-map-gl';
import DeckGL from '@deck.gl/react';
import {TripsLayer} from '@deck.gl/geo-layers';



//  Data format:
const data = [
   {
     "waypoints": [
      {"coordinates": [-122.3907988, 37.7664413], "timestamp": 1554772579000},
      {"coordinates": [-122.3908298,37.7667706], "timestamp": 1554772579010},
      {"coordinates": [-122.4485672, 37.8040182], "timestamp": 1554772580200},
     ]
   }
 ];

const layer = new TripsLayer({
  id: 'TripsLayer',
  data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf.trips.json',
  
  /* props from TripsLayer class */
  
  currentTime: 500,
  // fadeTrail: true,
  getTimestamps: d => d.waypoints.map(p => p.timestamp - 1554772579000),
  trailLength: 600,
  
  /* props inherited from PathLayer class */
  
  // billboard: false,
  capRounded: true,
  getColor: [253, 128, 93],
  getPath: d => d.waypoints.map(p => p.coordinates),
  // getWidth: 1,
  jointRounded: true,
  // miterLimit: 4,
  // rounded: true,
  // widthMaxPixels: Number.MAX_SAFE_INTEGER,
  widthMinPixels: 8,
  // widthScale: 1,
  // widthUnits: 'meters',
  
  /* props inherited from Layer class */
  
  // autoHighlight: false,
  // coordinateOrigin: [0, 0, 0],
  // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
  // highlightColor: [0, 0, 128, 128],
  // modelMatrix: null,
  opacity: 0.8,
  // pickable: false,
  // visible: true,
  // wrapLongitude: false,
});

export default function MapTris() {
  return (
      <DeckGL
        initialViewState={{longitude: -122.45, latitude: 37.78, zoom: 12}}
        controller={true}
        layers= {[layer]}
      >
      <Map
        mapStyle="mapbox://styles/mapbox/dark-v9"
        mapboxApiAccessToken={"pk.eyJ1IjoiZDExNjYyNiIsImEiOiJjazM1ODVoZ3MxNjJoM21vcWMwZmhycHVvIn0.7hxPP_9w7z8QAVc2nStP6w"} />
      </DeckGL>
  );
}



// export default function MapGL() {
//     return (
//       <Map
//         initialViewState={{
//           latitude: -22.913765,
//           longitude: -43.232163,
//           zoom: 12
//         }}
//         style={{width: '50vw', height: '50vh'}}
//         mapStyle="mapbox://styles/mapbox/streets-v9"
//         mapboxAccessToken="pk.eyJ1IjoiZDExNjYyNiIsImEiOiJjazM1ODVoZ3MxNjJoM21vcWMwZmhycHVvIn0.7hxPP_9w7z8QAVc2nStP6w"
//       />
//     );
// };

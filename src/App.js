import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl' 
import 'mapbox-gl/dist/mapbox-gl.css';

function App () {
    const [viewport, setViewport] = useState({
      width: 400,
      height: 400,
      latitude: 36,
      longitude: -122,
      zoom: 8
    })
    return (
      <div>
        <ReactMapGL
          {...viewport}
          onViewportChange = {(newViewport) => setViewport(newViewport)}
          mapboxApiAccessToken = 'pk.eyJ1IjoiZXR0dWJydXRlc2JybyIsImEiOiJjamhic2NoazAwNXVzM2Ntd2J2cGphaTV0In0.JkTXDey9VnKFN6uf0B8ixQ'
        />
      </div>
    )
  }


export default App;

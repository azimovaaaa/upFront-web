import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

function PropertyMap(props) {
  const mapRef = React.useRef(null);
  const [properties, setProperties] = React.useState([]);

  React.useEffect(() => {
    // retrieve property data from Django backend
    axios.get('/api/properties/')
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => {
        console.log(error);
      });

    // initialize Leaflet map
    const map = L.map(mapRef.current).setView([37.8, -96], 4);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    // plot property data as markers on map
    properties.forEach(property => {
      L.marker([property.latitude, property.longitude])
        .addTo(map)
        .bindPopup(property.address);
    });
  }, []);

  return (
    <div ref={mapRef} style={{ height: '500px' }}></div>
  );
}

export default PropertyMap;
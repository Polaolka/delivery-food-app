import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
// AIzaSyDuLnwmE7KvAj4eh93ay-bk9DqIJ9nnnqk
const GOOGLE_MAPS_API_KEY = "AIzaSyDuLnwmE7KvAj4eh93ay-bk9DqIJ9nnnqk";

const MapPin = () => <div className="map-pin">📍</div>;

export const Map = ({ center, zoom, selectedLocation, userLocation }) => {
    const [map, setMap] = useState(null);
  
    useEffect(() => {
      if (map && selectedLocation) {
        const bounds = new window.google.maps.LatLngBounds();
        bounds.extend(selectedLocation);
        map.fitBounds(bounds);
      }
    }, [map, selectedLocation]);
  
    const handleApiLoaded = (map, maps) => {
      setMap(map);
    };
  
    return (
      <div style={{ height: '200px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAPS_API_KEY }}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
        >
          {selectedLocation && <MapPin lat={selectedLocation.lat} lng={selectedLocation.lng} />}
          {userLocation && <MapPin lat={userLocation.lat} lng={userLocation.lng} />}
        </GoogleMapReact>
      </div>
    );
  };



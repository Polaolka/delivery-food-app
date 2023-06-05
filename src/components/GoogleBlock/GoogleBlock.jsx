import React, { useState } from 'react';
import { Map } from 'components/GoogleMap/GoogleMap';
import { AddressForm } from 'components/AddressForm/AddressForm';

export const GoogleBlock = () => {
  const defaultCenter = { lat: 50, lng: 30 };
  const defaultZoom = 7;
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  const handleAddressSelect = (location) => {
    setSelectedLocation(location);
  };

  const handleUserLocationSelect = (location) => {
    setUserLocation(location);
  };
  
    return (
      <div>
        <Map center={defaultCenter} zoom={defaultZoom} selectedLocation={selectedLocation} userLocation={userLocation} />
        <AddressForm onAddressSelect={handleAddressSelect} onUserLocationSelect={handleUserLocationSelect} />
      </div>
    );
  };

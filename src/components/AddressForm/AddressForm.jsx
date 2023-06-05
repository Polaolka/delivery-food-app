import React, { useState, useEffect } from 'react';
import { AddressInput, SearchIcon, AddressBtn } from './AddressForm.styled';


export const AddressForm = ({ onAddressSelect, onUserLocationSelect }) => {
    const [address, setAddress] = useState('');
    const [userLocation, setUserLocation] = useState(null);
  
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setUserLocation({ lat: latitude, lng: longitude });
            onUserLocationSelect(userLocation);
          },
          (error) => {
            console.error('Помилка отримання геолокації:', error);
          }
        );
      } else {
        console.error('Геолокація не підтримується вашим браузером.');
      }
    }, [onUserLocationSelect, userLocation]);
  
    const handleAddressChange = (event) => {
      setAddress(event.target.value);
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address }, (results, status) => {
        if (status === 'OK' && results[0]) {
          const { lat, lng } = results[0].geometry.location;
          onAddressSelect({ lat: lat(), lng: lng() });
        } else {
          console.error('Не вдалося знайти дану адресу.');
        }
      });
    };
  
    return (
      <form onSubmit={handleFormSubmit}>
        <AddressInput type="text" value={address} onChange={handleAddressChange} placeholder="Введіть адресу" />
        <AddressBtn type="submit"><SearchIcon/></AddressBtn>
      </form>
    );
  };


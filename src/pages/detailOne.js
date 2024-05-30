import React, { useState, useEffect } from 'react';

const DetailOne = () => {
  const [stationInfo, setStationInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStationData = async () => {
      try {
        const response = await fetch('http://api.citybik.es/v2/networks/velib');
        const data = await response.json();
        setStationInfo(data.network.stations[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching station data:', error);
        setLoading(false);
      }
    };

    fetchStationData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!stationInfo) {
    return <div>No station data available</div>;
  }

  const { name, free_bikes, empty_slots, latitude, longitude } = stationInfo;

  // Function to calculate distance between two points
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180); // Convert degrees to radians
    const dLon = (lon2 - lon1) * (Math.PI / 180); // Convert degrees to radians
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in km
    return distance.toFixed(2);
  };

  // Function to get current location
  const getCurrentLocation = () => {
    // Code to get current location using Geolocation API
    return { latitude: 48.8534, longitude: 2.3488 }; // For demonstration, hardcoded Paris coordinates
  };

  const currentLocation = getCurrentLocation();
  const distance = calculateDistance(currentLocation.latitude, currentLocation.longitude, latitude, longitude);

  return (
    <div>
      <h2>{name}</h2>
      <p>Available Bikes: {free_bikes}</p>
      <p>Empty Slots: {empty_slots}</p>
      <p>Distance from your location: {distance} km</p>
    </div>
  );
};

export default DetailOne;

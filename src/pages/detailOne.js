import React, { useState, useEffect } from 'react';

const App = () => {
  const [firstStation, setFirstStation] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Fetch data from the City Bikes API
    const fetchData = async () => {
      try {
        const response = await fetch('http://api.citybik.es/v2/networks/velo-antwerpen');
        const data = await response.json();
        const filteredStations = data.network.stations.filter(station => station.empty_slots > 0);
        setFirstStation(filteredStations.length > 0 ? filteredStations[0] : null);
        setCurrentLocation(data.network.location);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180); // deg2rad below
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      0.5 -
      Math.cos(dLat) / 2 +
      (Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * (1 - Math.cos(dLon))) / 2;

    return R * 2 * Math.asin(Math.sqrt(a)); // Distance in km
  };

  return (
    <div>
      <h1>Public Transport App</h1>
      {firstStation && (
        <div key={firstStation.id}>
          <h2>{firstStation.name}</h2>
          <p>Available Places: {firstStation.empty_slots}</p>
          <p>Available Bikes: {firstStation.free_bikes}</p>
          {currentLocation && (
            <p>
              Distance: {calculateDistance(currentLocation.latitude, currentLocation.longitude, firstStation.latitude, firstStation.longitude).toFixed(2)} km
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;

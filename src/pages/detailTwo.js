import React, { useState, useEffect } from 'react';

const App = () => {
  const [stations, setStations] = useState([]);
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    // Fetch data from the City Bikes API
    const fetchData = async () => {
      try {
        const response = await fetch('http://api.citybik.es/v2/networks/velo-antwerpen');
        const data = await response.json();
        setStations(data.network.stations.filter(station => station.empty_slots > 0));
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

  // Pick only three stations
  const selectedStations = stations.slice(0, 3);

  return (
    <div>
      <h1>Public Transport App</h1>
      {selectedStations.length > 1 && ( // Check if at least two stations are available
        <div key={selectedStations[1].id}> {/* Accessing data from the second station */}
          <h2>{selectedStations[1].name}</h2>
          <p>Available Places: {selectedStations[1].empty_slots}</p>
          <p>Available Bikes: {selectedStations[1].free_bikes}</p>
          {currentLocation && (
            <p>
              Distance: {calculateDistance(currentLocation.latitude, currentLocation.longitude, selectedStations[1].latitude, selectedStations[1].longitude).toFixed(2)} km
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
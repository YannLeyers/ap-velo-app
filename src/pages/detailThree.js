import React, { useState, useEffect } from 'react';

import grayHome from "@/img/grayHome.png";
import whiteBike from "@/img/whiteBike.png";
import wallet from "@/img/wallet.png";
import settings from "@/img/settings.png";

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
      <div className='title'>Stations</div>
      <div className='search'>
        <div className='searchText'>Search Station...</div>
      </div>

      <div className='whiteCover'>
        {selectedStations.length > 2 && ( // Check if at least three stations are available
          <div key={selectedStations[2].id}> {/* Accessing data from the third station */}
            <h2>{selectedStations[2].name}</h2>
            <p>Available Places: {selectedStations[2].empty_slots}</p>
            <p>Available Bikes: {selectedStations[2].free_bikes}</p>
            {currentLocation && (
              <p>
                Distance: {calculateDistance(currentLocation.latitude, currentLocation.longitude, selectedStations[2].latitude, selectedStations[2].longitude).toFixed(2)} km
              </p>
            )}
          </div>
        )}
      </div>

      <div className='footer'>
        <a href="/"> {/* Anchor tag linking to the index page */}
          <img src={grayHome.src} alt="home" className='homeImg' />
        </a>
        <div className='currentMenu'>
          <img src={whiteBike.src} alt="whiteBike" className='whiteBikeImg' />
        </div>
        <img src={wallet.src} alt="wallet" className='walletImg' />
        <img src={settings.src} alt="settings" className='settingsImg' />
      </div>
    </div>
  );
};

export default App;

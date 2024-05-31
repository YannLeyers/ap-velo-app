import React, { useState, useEffect } from 'react';
import styles from "@/styles/Home.module.css";
import Image from 'next/image';
import Link from 'next/link';
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
        const response = await fetch('https://api.citybik.es/v2/networks/velo-antwerpen');
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
        {selectedStations.length > 0 && ( // Check if at least three stations are available
          <div key={selectedStations[1].id}> {/* Accessing data from the third station */}
            <div className='selectedStation'>Groenplaats 2</div>

            <div className='stationInfo'>Station Information</div>

            <div className='infoBoxes'>
              <div className='infoBox'>
                <div className='smallBox'>
                  <div className='smallBoxText'>Available Places</div>
                </div>
                <div className='infoCode'>
                  {selectedStations[1].empty_slots}
                </div>
              </div>

              <div className='infoBox'>
                <div className='smallBox'>
                  <div className='smallBoxText'>Available Bikes</div>
                </div>
                <div className='infoCode'>
                  {selectedStations[1].free_bikes}
                </div>
              </div>
            </div>

            <div className='stationInfo'>Journey Information</div>

            <div className='infoBoxes'>
              <div className='infoBox'>
                <div className='smallBox'>
                  <div className='smallBoxText'>Distance</div>
                </div>
                <div className='infoCode'>
                  {currentLocation && (
                    <div className=''>{calculateDistance(currentLocation.latitude, currentLocation.longitude, selectedStations[2].latitude, selectedStations[2].longitude).toFixed(1)} km</div>
                  )}
                </div>
              </div>

            </div>

          </div>
        )}
      </div>

      <div className='footer'>
        <Link legacyBehavior href="/">
          <a>
            <Image src={grayHome} alt="home" className='homeImg' />
          </a>
        </Link>
        <div className='currentMenu'>
          <Link legacyBehavior href="/stations">
            <a>
              <Image src={whiteBike} alt="whiteBike" className='whiteBikeImg' />
            </a>
          </Link>
        </div>
        <Image src={wallet} alt="wallet" className='walletImg' />
        <Image src={settings} alt="settings" className='settingsImg' />
      </div>
    </div>
  );
};

export default App;

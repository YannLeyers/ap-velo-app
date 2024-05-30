import styles from "@/styles/Home.module.css";
import zeroOne from "@/img/zeroOne.png";
import heart from "@/img/heart.png";
import twenty from "@/img/twenty.png";
import closed from "@/img/closed.png";
import home from "@/img/home.png";
import bike from "@/img/bike.png";
import wallet from "@/img/wallet.png";
import settings from "@/img/settings.png";

export default function Home() {
  return (
    <>
      <main className={`${styles.main}`}>
        <div className='title'>Itinerary</div>
        <div className='search'>
          <div className='searchText'>Search Station...</div>
        </div>

        <div className='whiteCover'>
          <div className='shortcuts'>Shortcuts</div>

          <div className="shortcutBoxes">
            <div className='astridBox'>
              <img src={zeroOne.src} alt="Zero One" className='zeroOneImg' />
              <a href="/detailOne"> {/* Anchor tag linking to the stations page */}
                <div className='CentralAstrid'>Centraal Station - Astrid</div>
              </a>
              <img src={heart.src} alt="heart" className='heartImg' />
            </div>

            <div className='groenplaatsBox'>
              <img src={twenty.src} alt="twenty" className='twentyImg' />
              <a href="/detailTwo"> {/* Anchor tag linking to the stations page */}
                <div className='groenPlaats'>Groenplaats 2</div>
              </a>
              <img src={heart.src} alt="heart" className='heartImg' />
            </div>
          </div>

          <div className='veloStationsList'>Nearby Velo Stations</div>

          <div className='astridBox'>
            <img src={zeroOne.src} alt="Zero One" className='zeroOneImg' />
            <a href="/detailOne"> {/* Anchor tag linking to the stations page */}
              <div className='CentralAstrid'>Centraal Station - Astrid</div>
            </a>
            <img src={closed.src} alt="closed" className='closedImg' />
          </div>

          <div className='footer'>
            <div className='currentMenu'>
              <img src={home.src} alt="home" className='homeImg' />
            </div>
            <a href="/stations"> {/* Anchor tag linking to the stations page */}
              <img src={bike.src} alt="bike" className='bikeImg' />
            </a>
            <img src={wallet.src} alt="wallet" className='walletImg' />
            <img src={settings.src} alt="settings" className='settingsImg' />
          </div>
        </div>
      </main>
    </>
  );
}
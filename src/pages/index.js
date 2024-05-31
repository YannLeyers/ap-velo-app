import styles from "@/styles/Home.module.css";
import Image from 'next/image';
import Link from 'next/link';
import heart from "@/img/heart.png";
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
              <div className="number">01</div>
              <Link legacyBehavior href="/detailOne">
                <a>
                  <div className='CentralAstrid'>Centraal Station - Astrid</div>
                </a>
              </Link>
              <Image src={heart} alt="heart" className='heartImg' />
            </div>

            <div className='groenplaatsBox'>
              <div className="number">20</div>
              <Link legacyBehavior href="/detailTwo">
                <a>
                  <div className='groenPlaats'>Groenplaats 2</div>
                </a>
              </Link>
              <Image src={heart} alt="heart" className='heartImg' />
            </div>
          </div>

          <div className='veloStationsList'>Nearby Velo Stations</div>

          <div className='astridBox'>
            <div className="number">01</div>
            <Link legacyBehavior href="/detailOne">
              <a>
                <div className='CentralAstrid'>Centraal Station - Astrid</div>
              </a>
            </Link>
          </div>

          <div className='footer'>
            <div className='currentMenu'>
              <Link legacyBehavior href="/">
                <a>
                  <Image src={home} alt="home" className='homeImg' />
                </a>
              </Link>
            </div>
            <Link legacyBehavior href="/stations">
              <a>
                <Image src={bike} alt="bike" className='bikeImg' />
              </a>
            </Link>
            <Image src={wallet} alt="wallet" className='walletImg' />
            <Image src={settings} alt="settings" className='settingsImg' />
          </div>
        </div>
      </main>
    </>
  );
}

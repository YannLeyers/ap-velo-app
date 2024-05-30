import styles from "@/styles/Home.module.css";
import heart from "@/img/heart.png";
import grayHome from "@/img/grayHome.png";
import whiteBike from "@/img/whiteBike.png";
import wallet from "@/img/wallet.png";
import settings from "@/img/settings.png";

export default function Home() {
    return (
        <>
            <main className={`${styles.main}`}>
                <div>
                    <div className='title'>Stations</div>
                    <div className='search'>
                        <div className='searchText'>Search Station...</div>
                    </div>

                    <div className='whiteCover'>
                        <div className='shortcuts'>Shortcuts</div>

                        <div className="shortcutBoxes">
                            <div className='astridBox'>
                                <div className="number">01</div>
                                <a href="/detailOne"> {/* Anchor tag linking to the stations page */}
                                    <div className='CentralAstrid'>Centraal Station - Astrid</div>
                                </a>
                                <img src={heart.src} alt="heart" className='heartImg' />
                            </div>
                        </div>

                        <div className='groenplaatsBox'>
                            <div className="number">20</div>
                            <a href="/detailTwo"> {/* Anchor tag linking to the stations page */}
                                <div className='groenPlaats'>Groenplaats 2</div>
                            </a>
                            <img src={heart.src} alt="heart" className='heartImg' />
                        </div>

                        <div className='veloStationsList'>List of Velo Stations</div>

                        <div className='astridBox'>
                            <div className="number">01</div>
                            <a href="/detailOne"> {/* Anchor tag linking to the stations page */}
                                <div className='CentralAstrid'>Centraal Station - Astrid</div>
                            </a>
                            <a href="/detailOne"> {/* Anchor tag linking to the stations page */}
                            </a>
                        </div>

                        <div className='groenplaatsBox'>
                            <div className="number">20</div>
                            <a href="/detailTwo"> {/* Anchor tag linking to the stations page */}
                                <div className='groenPlaats'>Groenplaats 2</div>
                            </a>
                            <a href="/detailTwo"> {/* Anchor tag linking to the stations page */}
                            </a>
                        </div>

                        <div className='paleisBox'>
                            <div className="number">94</div>
                            <a href="/detailThree"> {/* Anchor tag linking to the stations page */}
                                <div className='paleis'>Paleisstraat</div>
                            </a>
                            <a href="/detailThree"> {/* Anchor tag linking to the stations page */}
                            </a>
                        </div>

                        <div className='footer'>
                            <a href="/"> {/* Anchor tag linking to the index page */}
                                <img src={grayHome.src} alt="home" className='homeImg' />
                            </a>
                            <div className='currentMenu'>
                                <a href="/stations"> {/* Anchor tag linking to the stations page */}
                                    <img src={whiteBike.src} alt="whiteBike" className='whiteBikeImg' />
                                </a>
                            </div>
                            <img src={wallet.src} alt="wallet" className='walletImg' />
                            <img src={settings.src} alt="settings" className='settingsImg' />
                        </div>
                    </div>
                </div>
            </main >
        </>
    );
}

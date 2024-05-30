import styles from "@/styles/Home.module.css";
import zeroOne from "@/img/zeroOne.png";
import heart from "@/img/heart.png";
import twenty from "@/img/twenty.png";
import nineThree from "@/img/nineThree.png";
import closed from "@/img/closed.png";
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
                                <img src={zeroOne.src} alt="Zero One" className='zeroOneImg' />
                                <a href="/detailOne"> {/* Anchor tag linking to the stations page */}
                                    <div className='CentralAstrid'>Centraal Station - Astrid</div>
                                </a>
                                <img src={heart.src} alt="heart" className='heartImg' />
                            </div>
                        </div>

                        <div className='groenplaatsBox'>
                            <img src={twenty.src} alt="twenty" className='twentyImg' />
                            <a href="/detailTwo"> {/* Anchor tag linking to the stations page */}
                                <div className='groenPlaats'>Groenplaats 2</div>
                            </a>
                            <img src={heart.src} alt="heart" className='heartImg' />
                        </div>

                        <div className='veloStationsList'>List of Velo Stations</div>

                        <div className='astridBox'>
                            <img src={zeroOne.src} alt="Zero One" className='zeroOneImg' />
                            <a href="/detailOne"> {/* Anchor tag linking to the stations page */}
                                <div className='CentralAstrid'>Centraal Station - Astrid</div>
                            </a>
                            <img src={closed.src} alt="closed" className='closedImg' />
                        </div>

                        <div className='groenplaatsBox'>
                            <img src={twenty.src} alt="twenty" className='twentyImg' />
                            <a href="/detailTwo"> {/* Anchor tag linking to the stations page */}
                                <div className='groenPlaats'>Groenplaats 2</div>
                            </a>
                            <img src={closed.src} alt="closed" className='closedImg' />
                        </div>

                        <div className='paleisBox'>
                            <img src={nineThree.src} alt="nineThree" className='nineThreeImg' />
                            <a href="/detailThree"> {/* Anchor tag linking to the stations page */}
                                <div className='paleis'>Paleisstraat</div>
                            </a>
                            <img src={closed.src} alt="closed" className='closedImg' />
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
                </div>
            </main >
        </>
    );
}

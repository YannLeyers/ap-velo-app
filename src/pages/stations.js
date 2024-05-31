import styles from "@/styles/Home.module.css";
import Image from 'next/image';
import Link from 'next/link';
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
                                <Link legacyBehavior href="/detailOne">
                                    <a>
                                        <div className='CentralAstrid'>Centraal Station - Astrid</div>
                                    </a>
                                </Link>
                                <Image src={heart} alt="heart" className='heartImg' />
                            </div>
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

                        <div className='veloStationsList'>List of Velo Stations</div>

                        <div className='astridBox'>
                            <div className="number">01</div>
                            <Link legacyBehavior href="/detailOne">
                                <a>
                                    <div className='CentralAstrid'>Centraal Station - Astrid</div>
                                </a>
                            </Link>
                        </div>

                        <div className='groenplaatsBox'>
                            <div className="number">20</div>
                            <Link legacyBehavior href="/detailTwo">
                                <a>
                                    <div className='groenPlaats'>Groenplaats 2</div>
                                </a>
                            </Link>
                        </div>

                        <div className='paleisBox'>
                            <div className="number">94</div>
                            <Link legacyBehavior href="/detailThree">
                                <a>
                                    <div className='paleis'>Paleisstraat</div>
                                </a>
                            </Link>
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
                </div>
            </main>
        </>
    );
}

import styles from './presentation.module.scss';

import Image from "next/image";

export default function Presentation() {
    return (
        <section className="flex flex-col mt-32 py-24 relative text-white">
            <div className={styles.background}>
                <Image
                    src="/img/polygonal-font.png"
                    alt="Background Polygonal"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-full"
                />
            </div>
            <div className="relative z-10">
                <h2 className="title title-white mb-4">Qui suis-je ?</h2>
                <div className="text text-white mx-20 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                <a href="/pdf/Jeremie-Parant-CV-DevWeb.pdf" target="_blank" rel="noopener noreferrer" className={`${styles["cv-button"]} title button-title`}>
                    CV
                </a>
            </div>
        </section>
    );
}
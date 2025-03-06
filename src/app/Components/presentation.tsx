import styles from './presentation.module.scss';
import Image from "next/image";

export default function Presentation() {
    return (
        <section className="flex flex-col mt-24 2xl:mt-32 mx-12 2xl:mx-24 py-20 2xl:py-30 relative text-white">
            <div className={styles.background}>
                <Image
                    src="/img/polygonal-bg.png"
                    alt="Background Polygonal"
                    width={1920}
                    height={1080}
                    style={{ objectFit: "cover" }}
                    className="w-full h-full"
                />
            </div>
            <div className="relative z-10">
                <h2 className="title title-white mb-4 2xl:mb-6">Qui suis-je ?</h2>
                <div className="text text-white mx-16 2xl:mx-24 mb-6"> Actuellement alternant, j’étudie le développement web à travers la formation MMI ainsi que mon alternance au sein de la SNCF. Je suis particulièrement attiré par la conception et le développement de sites web, ainsi que par le monde de la tech. Je me renseigne régulièrement sur les nouvelles technologies. A travers ma formation, j’ai appris les bases du développement web, allant des API aux applications web front-end. J’ai pu approfondir mes compétences au sein de mon alternance à la SNCF, en particulier dans les API avec .NET. Je souhaite poursuivre vers un Master en développement, afin de perfectionner mes compétences et atteindre mon objectif de devenir Développeur web. </div>
                <a href="/pdf/Jeremie-Parant-CV-DevWeb.pdf" target="_blank" rel="noopener noreferrer" className={`${styles["cv-button"]} title button-title duration-300 hover:scale-110`}>
                    CV
                </a>
            </div>
        </section>
    );
}
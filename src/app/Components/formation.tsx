import styles from './formation.module.scss';
import Image from "next/image";

export default function Formation() {
    return (
        <section className="mt-24 2xl:mt-32">
            <h2 className="title text-center mb-4 2xl:mb-6">Mes formations</h2>
            <div className="flex flex-col mx-36 2xl:mx-60">
                <h3 className="title sub-title mb-2 ml-4">BUT Métiers du multimédia et de l&#39;internet</h3>
                <div className={`${styles.formation} box-shadow`}>
                    <p className="text">Durant ma formation, j&#39;ai acquis des compétences en développement Front-end et Back-end. En Front-end, j&#39;ai notamment travaillé avec les frameworks Angular et React. En Back-end, j&#39;ai principalement utilisé PHP et Symfony, mais j&#39;ai aussi appris le Java, le Python et le SQL. J&#39;ai également exploré le design avec la suite Adobe et la modélisation 3D. Enfin, j&#39;ai utilisé des outils de gestion de projet comme GitHub et Trello pour organiser et suivre efficacement les tâches.</p>
                    <div className="flex justify-end pt-2">
                        <Image src="/img/logo-gustave-eiffel.png" alt="Logo de l'IUT Gustave Eiffel" width={120} height={120} />
                    </div>
                </div>
            </div>
        </section>
    );
}
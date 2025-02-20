import styles from './veille.module.scss';
import Image from "next/image";

export default function Veille() {
    return (
        <section className="mt-24 2xl:mt-32">
            <h2 className="title text-center mb-4 2xl:mb-6">Veille technologique</h2>
            <div className="flex flex-col mx-36 2xl:mx-60">
                <h3 className="title sub-title mb-2 ml-4">Daily.dev</h3>
                <div className={`${styles.formation} box-shadow`}>
                    <p className="text">Je me renseigne régulièrement sur les nouveautés liées au framework .NET afin de rester à jour sur cette technologie et d&#39;adopter les bonnes pratiques. Par exemple, .NET Aspire permet de faciliter la création d&#39;applications cloud-native, notamment à travers le dashboard ou bien l&#39;orchestrateur.</p>
                    <div className="flex justify-end pt-2">
                        <Image src="/img/daily-dev.svg" alt="Logo daily.dev" width={40} height={40} />
                    </div>
                </div>
            </div>
        </section>
    );
}
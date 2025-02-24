import styles from './projets.module.scss';
import { EyeCare, Webdocumentaire } from "@/data/projets";
import Projet from "./projet";
import Image from "next/image";

export default function Projets() {
    return (
        <section className="flex flex-col justify-center py-24 relative">
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
            <h2 className="title text-center mb-8 2xl:mb-12"> Mes projets </h2>
            <div className="flex justify-center gap-12 2xl:gap-16">
                <Projet projet={EyeCare} />
                <Projet projet={Webdocumentaire} />
            </div>
        </section>
    );
}
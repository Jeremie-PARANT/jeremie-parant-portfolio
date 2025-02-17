import styles from './projet.module.scss';
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
                    fill
                    style={{ objectFit: "cover" }}
                    className="w-full h-full"
                />
            </div>
            <h2 className="title text-center mb-8"> Mes projets </h2>
            <div className="flex justify-center gap-12">
                <Projet projet={EyeCare} />
                <Projet projet={Webdocumentaire} />
            </div>
        </section>
    );
}
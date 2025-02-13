//import styles from './projet.module.scss';
import { EyeCare, Webdocumentaire } from "@/data/projets";
import Projet from "./projet";

export default function Projets() {
    return (
        <section className="flex flex-col justify-center mt-24">
            <h2 className="title text-center"> Mes Compétences </h2>
            <div>
                <Projet projet={EyeCare} />
                <Projet projet={Webdocumentaire} />
            </div>
        </section>
    );
}
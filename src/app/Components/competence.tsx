//import styles from './competence.module.scss';
import { BackEndSkills, FrontEndSkills, OtherSkills } from "@/data/competences";
import CompetenceCategorie from "./competenceCategorie";

export default function Competence() {
    return (
        <section className="flex flex-col mt-32">
            <h2 className="title text-center"> Mes Compétences </h2>
            <CompetenceCategorie title="Back-End" competences={BackEndSkills} />
            <CompetenceCategorie title="Front-End" competences={FrontEndSkills} />
            <CompetenceCategorie title="Autres" competences={OtherSkills} />
        </section>
    );
}
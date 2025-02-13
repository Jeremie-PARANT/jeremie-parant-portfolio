//import styles from './competenceCategorie.module.scss';

import Image from "next/image";

type CompetenceCategorieProps = {
    title: string;
    competences: { name: string; img: string }[];
};


export default function CompetenceCategorie({ title, competences }: CompetenceCategorieProps) {
    return (
        <section className="flex flex-col">
            <h2 className="title">{title}</h2>
            {competences.map((competence, index) => (
                <div key={index}>
                    <p>{competence.name}</p>
                    <Image src={competence.img} alt={competence.name} width={25} height={25}></Image>
                </div>
            ))}
        </section>
    );
}

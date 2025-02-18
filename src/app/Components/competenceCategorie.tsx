import styles from './competenceCategorie.module.scss';
import Image from "next/image";

type CompetenceCategorieProps = {
    title: string;
    competences: { name: string; img: string }[];
};


export default function CompetenceCategorie({ title, competences }: CompetenceCategorieProps) {
    return (
        <section className="flex flex-col mx-36 2xl:mx-60 mb-8">
            <h3 className="title sub-title mb-2">{title}</h3>
            <div className={`${styles["custom-skills-category"]} box-shadow flex flex-wrap justify-center 2xl:gap-12 gap-8`}>
                {competences.map((competence, index) => (
                    <div key={index} className="flex flex-col items-center duration-300 hover:scale-110">
                        <Image
                            src={competence.img}
                            alt={competence.name}
                            width={70}
                            height={70}
                            className="h-12 2xl:h-16 w-auto object-contain"
                        />
                        <div className="title small-title text-center">{competence.name}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

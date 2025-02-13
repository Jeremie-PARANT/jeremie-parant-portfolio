//import styles from './projet.module.scss';

import Image from "next/image";

type ProjetProps = {
    projet: { img: string; title: string; text: string; github: string; link: string };
};

export default function Projet({ projet }: ProjetProps) {
    return (
        <div className="flex flex-col">
            {projet.img} {projet.title} {projet.text} {projet.github} {projet.link}
        </div>
    );
}
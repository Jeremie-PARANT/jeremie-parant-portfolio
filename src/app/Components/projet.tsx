//import styles from './projet.module.scss';
import Image from "next/image";

type ProjetProps = {
    projet: { img: string; title: string; text: string; github: string; link: string };
};

export default function Projet({ projet }: ProjetProps) {
    return (
        <div className="w-72 text-center box-shadow-strong bg-pale-yellow rounded-2xl">
            <div className="overflow-hidden rounded-2xl">
                <Image
                    src={projet.img}
                    alt={projet.title}
                    width={288}
                    height={160}
                    className="w-full h-48 object-cover"
                />
            </div>
            <div className="px-6 pb-6">
                <h3 className="title sub-title text-center mt-2 mb-1">{projet.title}</h3>
                <div className="text">{projet.text}</div>
                <div className="flex justify-end gap-x-3">
                    <a href={projet.link}>
                        <Image src="/img/internet.svg" alt={projet.title} width={22} height={22} />
                    </a>
                    <a href={projet.github}>
                        <Image src="/img/github.svg" alt={projet.title} width={22} height={22}/>
                    </a>
                </div>
            </div>
        </div>
    );
}
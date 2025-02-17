//import styles from './projet.module.scss';
import Image from "next/image";

type ProjetProps = {
    projet: { img: string; title: string; text: string; github: string; link: string };
};

export default function Projet({ projet }: ProjetProps) {
    return (
        <div className="w-72 text-center box-shadow-strong bg-pale-yellow rounded-2xl flex flex-col">
            <div className="overflow-hidden rounded-2xl grayscale-[20%] p-1">
                <Image
                    src={projet.img}
                    alt={projet.title}
                    width={288}
                    height={160}
                    className="w-full h-48 object-cover rounded-2xl"
                />
            </div>
            <div className="px-6 grow">
                <h3 className="title sub-title text-center mt-2 mb-1">{projet.title}</h3>
                <div className="text">{projet.text}</div>
            </div>
            <div className="flex justify-end gap-x-3 px-6 pb-6 pt-4">
                <a href={projet.link} target="_blank">
                    <Image src="/img/internet.svg" alt={projet.title} width={22} height={22} className="duration-300 hover:scale-125" />
                </a>
                <a href={projet.github} target="_blank">
                    <Image src="/img/github.svg" alt={projet.title} width={22} height={22} className="duration-300 hover:scale-125" />
                </a>
            </div>
        </div>
    );
}
import styles from './intro.module.scss';

import Image from "next/image";

export default function Intro() {
    return (
        <section className="flex justify-center mt-32 h-fit items-center">
            <div className="flex-col mr-12">
                <h1 className="title name"> JEREMIE </h1>
                <h1 className="title surname ml-6"> PARANT </h1>
                <h1 className="title job text-right"> DEVELOPPEUR WEB </h1>
            </div>
            <div className="flex-col ml-12">
                <Image src="/img/jeremie-profil.jpg" alt="Portrait de Jérémie Parant, développeur web" width={250} height={250} className={styles.profileImg}></Image>
            </div>
        </section>
    );
}
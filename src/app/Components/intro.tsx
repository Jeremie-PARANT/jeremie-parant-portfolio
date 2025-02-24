import styles from './intro.module.scss';
import Image from "next/image";

export default function Intro() {
    return (
        <section className="flex justify-center pt-48 2xl:pt-64 h-fit items-center relative">
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
            <div className="flex-col mr-12">
                <h1 className="title name"> JEREMIE </h1>
                <h1 className="title surname ml-6"> PARANT </h1>
                <h1 className="title job text-right"> DEVELOPPEUR WEB </h1>
            </div>
            <div className="flex-col ml-12">
                <Image src="/img/jeremie-profil.jpg" alt="Portrait de Jérémie Parant, développeur web" width={300} height={300} className={styles.profileImg}></Image>
            </div>
        </section>
    );
}
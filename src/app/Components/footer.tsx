import styles from './footer.module.scss';
import Image from "next/image";

export default function Footer() {
    return (
        <section className="flex flex-col items-center mt-24 2xl:mt-32 relative">
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
            <div className="flex gap-8 pb-6 pt-10">
                <a href="mailto:parantjeremie.pro@gmail.com">
                    <Image src="/img/email.png" alt="Email" width={45} height={45} className="duration-300 hover:scale-125" />
                </a>
                <a href="https://www.linkedin.com/in/j%C3%A9r%C3%A9mie-parant" target="_blank">
                    <Image src="/img/linkedin.svg" alt="Linkedin" width={45} height={45} className="duration-300 hover:scale-125" />
                </a>
                <a href="https://github.com/Jeremie-PARANT" target="_blank">
                    <Image src="/img/github-dark.svg" alt="GitHub" width={45} height={45} className="duration-300 hover:scale-125" />
                </a>
            </div>
            <div className="text text-white pb-6"> © Copyright 2025. Jérémie PARANT </div>
        </section>
    );
}
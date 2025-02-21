import styles from './footer.module.scss';
import Image from "next/image";

export default function Footer() {
    return (
        <section className="flex justify-between items-end text text-white big-line py-6 mt-24 2xl:mt-32 relative">
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
            <div>
                <div className="font-semibold"> Me contacter </div>
                <div> Email : parantjeremie.pro@gmail.com </div>
                <div> GitHub : https://github.com/Jeremie-PARANT </div>
                <div> Téléphone : +33 7 68 18 83 63 </div>
            </div>
            <div> Mentions légales </div>
            <div> © Copyright 2025 - Jérémie PARANT. Tous droits réservés. </div>
        </section>
    );
}
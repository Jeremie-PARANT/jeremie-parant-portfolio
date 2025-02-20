//import styles from './footer.module.scss';
//import Image from "next/image";

export default function Footer() {
    return (
        <div className="flex justify-between items-end text mt-24 2xl:mt-32">
            <div>
                <div className="font-semibold"> Me constacter </div>
                <div> Email : parantjeremie.pro@gmail.com </div>
                <div> GitHub : https://github.com/Jeremie-PARANT </div>
                <div> Téléphone : +33 7 68 18 83 63 </div>
            </div>
            <div> Mentions légales </div>
            <div> @Copyright - Jérémie PARANT - 2025 </div>
        </div>
    );
}
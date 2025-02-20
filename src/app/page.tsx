import Competence from "./Components/competence";
import Footer from "./Components/footer";
import Formation from "./Components/formation";
import Intro from "./Components/intro";
import Presentation from "./Components/presentation";
import Projets from "./Components/projets";
import Veille from "./Components/veille";

export default function Home() {
    return (
        <main className="flex flex-col main-container">
            <Intro />
            <Presentation />
            <Competence />
            <Projets />
            <Formation />
            <Veille />
            <Footer />
        </main>
    );
}
import Competence from "./Components/competence";
import Formation from "./Components/formation";
import Intro from "./Components/intro";
import Presentation from "./Components/presentation";
import Projets from "./Components/projets";

export default function Home() {
    return (
        <main className="flex flex-col main-container">
            <Intro />
            <Presentation />
            <Competence />
            <Projets />
            <Formation />
        </main>
    );
}
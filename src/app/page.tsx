import Competence from "./Components/competence";
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
        </main>
    );
}
import Intro from "./Components/intro";
import Presentation from "./Components/presentation";

export default function Home() {
    return (
        <main className="flex flex-col main-container">
            <Intro />
            <Presentation />
        </main>
    );
}
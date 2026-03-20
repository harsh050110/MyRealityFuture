import Explore from "../components/Explore";
import Hero from "../components/Hero";
import Help from "../components/Help";
import About from "../components/About";
import Process from "../components/Elevate";
import Neighborhoods from "../components/Neighborhoods";

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Explore />
            <Help />
            <Process />
            <Neighborhoods />
        </div>
    )
}
export default Home;
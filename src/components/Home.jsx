import Estates from "./Estates";
import Navbar from "./Header/Navbar/Navbar";
import Slider from "./Slider/Slider";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Estates></Estates>
        </div>
    );
};

export default Home;
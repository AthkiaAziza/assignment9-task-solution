import Estates from "./Estates";
import Footer from "./Footer";
import Navbar from "./Header/Navbar/Navbar";
import Slider from "./Slider/Slider";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Slider></Slider>
            <Estates></Estates>
            <Footer></Footer>
        </div>
    );
};

export default Home;
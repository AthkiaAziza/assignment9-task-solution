import "swiper/css";
import './Slider.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
const Slider = () => {
    return (
        <div>
            <Swiper
            navigation={true}
            modules={[Navigation, Autoplay, EffectFade]}
            effect="fade"
            loop={true}
            autoplay={{
                delay: 3000,
            }}

            >
                <SwiperSlide>
                    <div className="slide slide1">
                        <div className="flex mt-44 mr-[600px]">
                            <div>
                                <h2 className="font-poppins text-lg lg:text-5xl font-bold text-white">Dream Home For Family</h2>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide2">
                        <h1>Slide2</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide3">
                        <h1>Slide3</h1>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide slide4">
                        <h1>Slide4</h1>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
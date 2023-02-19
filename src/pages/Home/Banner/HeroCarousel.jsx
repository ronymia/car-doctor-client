import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './BannerItem.css';

import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';
import img5 from '../../../assets/images/banner/5.jpg';
import img6 from '../../../assets/images/banner/6.jpg';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


const bannerData = [
    {
        image: img1,
        id: 1,
    },
    {
        image: img2,
        id: 2,
    },
    {
        image: img3,
        id: 3,
    },
    {
        image: img4,
        id: 4,
    },
    {
        image: img5,
        id: 5,
    },
    {
        image: img6,
        id: 6,
    }
]

const HeroCarousel = () => {

    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Autoplay, Pagination]}
                className="w-full"
            >
                {
                    bannerData.map(slide =>
                        <SwiperSlide
                            key={slide.id}
                        >
                            <div className='carousel-img md:h-[600px] overflow-hidden'>
                                <img src={slide.image} className="object-cover w-full rounded-xl" alt="#" />
                            </div>
                            <div className="w-1/2 absolute md:left-[100px] left-8 md:top-[100px] top-7 flex flex-col md:gap-12 gap-5">
                                <div className="">
                                    <h1 className='md:text-6xl font-bold text-white leading-tight'>
                                        Affordable <br />
                                        Price for Car <br />
                                        Servicing
                                    </h1>
                                </div>
                                <div className="">
                                    <p className='md:text-lg text-xs text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                </div>
                                <div className="flex items-start justify-start">
                                    <button className="btn bg-primary h-5 mr-5 text-white hover:text-primary hover:border-primary md:text-base text-[8px]">Discover More</button>
                                    <button className="btn  btn-outline hover:text-primary hover:border-primary hover:bg-transparent md:text-base text-[10px]">Latest Project</button>
                                </div>
                            </div>
                            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
                                <div className=" md:h-[50px] h-[25px] md:w-[50px] w-[25px] bg-lightGray/60 rounded-[50%] flex justify-center items-center text-darkBlack2 hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer md:text-[25px] text-[12px]">
                                    <AiOutlineArrowLeft />
                                </div>
                                <div className="md:h-[50px] h-[25px] md:w-[50px] w-[25px]  bg-lightGray/60 rounded-[50%] flex justify-center items-center text-darkBlack2 hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer md:text-[25px] text-[12px]">
                                    <AiOutlineArrowRight />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </>
    )
};

export default HeroCarousel;

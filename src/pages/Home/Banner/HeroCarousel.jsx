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
                            <div className='carousel-img h-[600px] overflow-hidden'>
                                <img src={slide.image} className="object-cover w-full rounded-xl" alt="#" />
                            </div>
                            <div className="w-1/2 absolute left-[100px] top-[100px] flex flex-col gap-12">
                                <div className="">
                                    <h1 className='text-6xl font-bold text-white leading-tight'>
                                        Affordable <br />
                                        Price for Car <br />
                                        Servicing
                                    </h1>
                                </div>
                                <div className="">
                                    <p className='text-lg text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                                </div>
                                <div className="">
                                    <button className="btn bg-primary mr-5 text-white hover:text-primary hover:border-primary">Discover More</button>
                                    <button className="btn btn-outline hover:text-primary hover:border-primary hover:bg-transparent">Latest Project</button>
                                </div>
                            </div>
                            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-2">
                                <div className=" h-[50px] w-[50px] bg-lightGray/60 rounded-[50%] flex justify-center items-center text-darkBlack2 hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
                                    <AiOutlineArrowLeft size={25} />
                                </div>
                                <div className="h-[50px] w-[50px] bg-lightGray/60 rounded-[50%] flex justify-center items-center text-darkBlack2 hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
                                    <AiOutlineArrowRight size={25} />
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

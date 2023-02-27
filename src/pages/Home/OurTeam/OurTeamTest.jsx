import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const OurTeam = () => {
    const [teamMember, setTeamMember] = useState([]);

    useEffect(() => {
        fetch('/ourTeam.json')
            .then(res => res.json())
            .then(data => setTeamMember(data));
    }, []);


    return (
        <section className="w-full flex flex-col justify-center items-center gap-6 my-[130px]">
            <div className="text-center md:w-1/2 w-full flex flex-col justify-center items-center gap-1 md:gap-3">
                <p className="md:text-xl text-lg font-bold text-primary">Team</p>
                <h2 className="md:text-[45px] text-3xl font-semibold text-darkBlack">Meet Our Team</h2>
                <p className="text-gray md:text-base text-sm">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card card-compact shadow-xl">
                            <figure className="p-6">
                                <img src={'img'} className="rounded-[10px]" alt="Shoes" />
                            </figure>
                            <div className="card-body text-center gap-3 mb-6">
                                <h2 className="text-[25px] text-darkBlack2 font-semibold">{'specialty'}</h2>
                                <h3 className="text-xl text-gray font-semibold">{'title'}</h3>
                                <div className="card-actions justify-center gap-4">
                                    <img className="cursor-pointer" src={'facebook'} alt="" />
                                    <img className="cursor-pointer" src={'twitter'} alt="" />
                                    <img className="cursor-pointer" src={'linkedin'} alt="" />
                                    <img className="cursor-pointer" src={'instagram'} alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card card-compact shadow-xl">
                            <figure className="p-6">
                                <img src={'img'} className="rounded-[10px]" alt="Shoes" />
                            </figure>
                            <div className="card-body text-center gap-3 mb-6">
                                <h2 className="text-[25px] text-darkBlack2 font-semibold">{'specialty'}</h2>
                                <h3 className="text-xl text-gray font-semibold">{'title'}</h3>
                                <div className="card-actions justify-center gap-4">
                                    <img className="cursor-pointer" src={'facebook'} alt="" />
                                    <img className="cursor-pointer" src={'twitter'} alt="" />
                                    <img className="cursor-pointer" src={'linkedin'} alt="" />
                                    <img className="cursor-pointer" src={'instagram'} alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card card-compact shadow-xl">
                            <figure className="p-6">
                                <img src={'img'} className="rounded-[10px]" alt="Shoes" />
                            </figure>
                            <div className="card-body text-center gap-3 mb-6">
                                <h2 className="text-[25px] text-darkBlack2 font-semibold">{'specialty'}</h2>
                                <h3 className="text-xl text-gray font-semibold">{'title'}</h3>
                                <div className="card-actions justify-center gap-4">
                                    <img className="cursor-pointer" src={'facebook'} alt="" />
                                    <img className="cursor-pointer" src={'twitter'} alt="" />
                                    <img className="cursor-pointer" src={'linkedin'} alt="" />
                                    <img className="cursor-pointer" src={'instagram'} alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card card-compact shadow-xl">
                            <figure className="p-6">
                                <img src={'img'} className="rounded-[10px]" alt="Shoes" />
                            </figure>
                            <div className="card-body text-center gap-3 mb-6">
                                <h2 className="text-[25px] text-darkBlack2 font-semibold">{'specialty'}</h2>
                                <h3 className="text-xl text-gray font-semibold">{'title'}</h3>
                                <div className="card-actions justify-center gap-4">
                                    <img className="cursor-pointer" src={'facebook'} alt="" />
                                    <img className="cursor-pointer" src={'twitter'} alt="" />
                                    <img className="cursor-pointer" src={'linkedin'} alt="" />
                                    <img className="cursor-pointer" src={'instagram'} alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card card-compact shadow-xl">
                            <figure className="p-6">
                                <img src={'img'} className="rounded-[10px]" alt="Shoes" />
                            </figure>
                            <div className="card-body text-center gap-3 mb-6">
                                <h2 className="text-[25px] text-darkBlack2 font-semibold">{'specialty'}</h2>
                                <h3 className="text-xl text-gray font-semibold">{'title'}</h3>
                                <div className="card-actions justify-center gap-4">
                                    <img className="cursor-pointer" src={'facebook'} alt="" />
                                    <img className="cursor-pointer" src={'twitter'} alt="" />
                                    <img className="cursor-pointer" src={'linkedin'} alt="" />
                                    <img className="cursor-pointer" src={'instagram'} alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        </section>
    );
};

export default OurTeam;

import React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center gap-6 md:mb-[130px] mb-[60px]">
            <div className="text-center md:w-1/2 w-full flex flex-col justify-center items-center md:gap-0 gap-1">
                <p className="md:text-xl text-lg font-bold text-primary">Testimonial</p>
                <h2 className="md:text-[45px] text-3xl font-semibold text-darkBlack">What Customer Says</h2>
                <p className="text-gray capitalize md:text-base text-sm">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <section className="flex md:flex-row flex-col gap-8 relative">
                <TestimonialCard />
                <div className="absolute top-1/2 left-[-2%] text-2xl h-[60px] w-[60px] bg-lightGray rounded-[50%] flex justify-center items-center text-darkBlack2 hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
                    <AiOutlineArrowLeft />
                </div>
                <div className="absolute top-1/2 right-[-2%] text-2xl h-[60px] w-[60px] bg-lightGray rounded-[50%] flex justify-center items-center text-darkBlack2 hover:bg-primary hover:text-white transition-all duration-500 cursor-pointer">
                    <AiOutlineArrowRight />
                </div>
            </section>
        </section>
    );
};

export default Testimonial;

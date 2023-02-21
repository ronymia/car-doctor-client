import React from 'react';
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content flex-col lg:flex-row gap-4">
                <div className='relative md:w-1/2 w-4/5'>
                    <img src={person} alt="" className="md:w-4/5 w-full md:h-full h-full rounded-lg shadow-2xl" />
                    <img src={parts} alt="" className="absolute right-5 top-1/2 w-3/5 border-8 rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 w-full mt-6 md:mt-0'>
                    <p className="text-xl font-bold text-primary lg:mb-2">About Us</p>
                    <h1 className="lg:text-[45px] leading-none text-2xl font-bold text-darkBlack">
                        We are qualified <br />
                        & of experience <br />
                        in this field</h1>
                    <p className="md:py-6 py-3 text-gray text-sm md:text-base">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="md:py-6 pb-3 text-gray text-sm md:text-base">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-primary text-white border-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;
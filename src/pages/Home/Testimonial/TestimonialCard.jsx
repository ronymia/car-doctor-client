import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';

import img from '../../../assets/images/team/3.jpg'
import quote from '../../../assets/icons/quote.svg';


const TestimonialCard = () => {
    return (
        <>
            <div className="card card-compact shadow-xl p-20 items-start gap-6 relative">
                <div className="flex flex-row gap-3 items-center justify-center rounded-[50%]">
                    <figure className="h-[60px] w-[60px]">
                        <img src={img} className="object-cover" alt="" />
                    </figure>
                    <div className="">
                        <p className="text-2xl text-darkBlack2 font-bold">Awlad Hossain</p>
                        <p className="text-lg text-gray font-semibold">Businessman</p>
                    </div>
                </div>
                <p className="text-gray">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <div className="flex flex-row justify-center items-center gap-1 text-xl text-[#FF912C]">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                </div>
                <div className="h-[60px] w-[60px] absolute top-[20%] right-[23%] opacity-40">
                    <img src={quote} alt="" />
                </div>
            </div>
            <div className="card card-compact shadow-xl p-6 items-start gap-6 relative">
                <div className="flex flex-row gap-3 items-center justify-center rounded-[50%]">
                    <figure className="h-[60px] w-[60px]">
                        <img src={img} className="object-cover" alt="" />
                    </figure>
                    <div className="">
                        <p className="text-2xl text-darkBlack2 font-bold">Awlad Hossain</p>
                        <p className="text-lg text-gray font-semibold">Businessman</p>
                    </div>
                </div>
                <p className="text-gray">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <div className="flex flex-row justify-center items-center gap-1 text-xl text-[#FF912C]">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                </div>
                <div className="h-[60px] w-[60px] absolute top-[20%] right-[23%] opacity-40">
                    <img src={quote} alt="" />
                </div>
            </div>
        </>
    );
};

export default TestimonialCard;

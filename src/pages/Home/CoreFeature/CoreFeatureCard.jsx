import React from 'react';
import check from '../../../assets/icons/check.svg';


const CoreFeatureCard = ({ feature }) => {
    const { title, image } = feature;

    return (
        <div className="w-[170px] h-[156px] flex flex-col items-center justify-center gap-6 rounded-[10px] border border-[#E8E8E8] hover:bg-primary transition-all duration-500 group">
            <img src={check} alt="" />
            <h2 className="text-lg text-darkBlack2 font-bold group-hover:text-white transition-all duration-700 ease-linear">{title}</h2>
        </div>
    );
};

export default CoreFeatureCard;

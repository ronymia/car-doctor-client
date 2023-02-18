import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title } = service;
    return (
        <div className="card card-compact shadow-xl p-6">
            <figure className="h-[288px] w-[314] overflow-hidden">
                <img src={img} alt="Shoes"
                    className="object-cover rounded-lg"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-[25px] text-darkBlack2">{title}</h2>
                <div className="flex justify-between items-center">
                    <p className='text-xl text-primary font-semibold'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}
                        className="bg-white/30 rounded-[50%] hover:bg-primary h-[40px] w-[40px] group
                        flex items-center justify-center transition-all duration-500 cursor-pointer"
                    >
                        <AiOutlineArrowRight className="text-3xl text-primary group-hover:text-white group-hover:text-[25px] transition-all duration-500 cursor-pointer" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
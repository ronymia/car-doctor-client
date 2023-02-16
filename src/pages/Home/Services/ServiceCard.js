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
                    <Link to={`/checkout/${_id}`}>
                        <button className="text-3xl text-primary"><AiOutlineArrowRight /></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
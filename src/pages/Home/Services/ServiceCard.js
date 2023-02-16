import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, img, price, title } = service;
    return (
        <div className="card card-compact w-96 shadow-xl p-6">
            <figure className="h-[288px] w-[314] overflow-hidden">
                <img src={img} alt="Shoes"
                    className="object-cover rounded-lg"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-[25px] text-darkBlack2">{title}</h2>
                <p className='text-xl text-primary font-semibold'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-primary">Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
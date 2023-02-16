import React from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { BsFillStarFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id, img, price, title } = product;

    const handleAddToCart = () => {
        console.log('object');
    }

    return (
        <div className="card card-compact shadow-xl p-6 group">
            <figure className="bg-lightGray rounded-xl h-[288px] w-[314] relative">
                <img src={img} alt="Shoes"
                    className="w-1/2"
                />
                <div className="h-[53px] w-[53px] rounded-[10px] bg-white flex items-center justify-center absolute right-[10%] top-[10%] opacity-0 group-hover:opacity-100 transition-all duration-500 cursor-pointer"
                    onClick={handleAddToCart}
                >
                    <button className="text-2xl text-primary"><HiOutlineShoppingBag /></button>
                </div>
            </figure>
            <div className="card-body flex flex-col items-center justify-center gap-2">
                <div className="flex flex-row justify-center items-center gap-1 text-xl text-[#FF912C]">
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                    <BsFillStarFill />
                </div>
                <h2 className="card-title text-[25px] text-darkBlack2 text-center block">{title}</h2>
                <p className='text-xl text-primary font-semibold text-center block'>Price: ${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;

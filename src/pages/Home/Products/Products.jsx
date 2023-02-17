import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(results => setProducts(results))
            .catch(err => console.error(err));
    }, []);


    return (
        <section className="w-full flex flex-col justify-center items-center gap-6">
            <div className='text-center w-1/2 flex flex-col justify-center items-center'>
                <p className="text-xl font-bold text-orange-600">Popular Products</p>
                <h2 className="text-[45px] font-semibold text-darkBlack">Browse Our Products</h2>
                <p className="text-gray">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <button className="btn border-primary text-primary bg-transparent hover:text-white hover:border-black rounded transition-all duration-500 mt-4">More Products</button>
        </section >
    )
}

export default Products;

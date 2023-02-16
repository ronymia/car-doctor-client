import React from 'react';
import './BannerItem.css';

const BannerItem = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img h-[600px] overflow-hidden'>
                <img src={image} alt="carousel" className="object-cover w-full rounded-xl" />
            </div>
            <div className="w-1/2 absolute left-[100px] top-[100px] flex flex-col gap-12">
                <div className="">
                    <h1 className='text-6xl font-bold text-white leading-tight'>
                        Affordable <br />
                        Price for Car <br />
                        Servicing
                    </h1>
                </div>
                <div className="">
                    <p className='text-lg text-white'>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                </div>
                <div className="">
                    <button className="btn bg-primary mr-5 text-white hover:text-primary hover:border-primary">Discover More</button>
                    <button className="btn btn-outline hover:text-primary hover:border-primary hover:bg-transparent">Latest Project</button>
                </div>
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;
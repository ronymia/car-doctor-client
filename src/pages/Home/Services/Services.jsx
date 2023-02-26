import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    const [isAsc, setIsAsc] = useState(true);
    const [search, setSearch] = useState('');
    const searchRef = useRef();
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc, search]);

    const handleSearch = () => {
        setSearch(searchRef.current.value);
    }


    return (
        <div
            id="services"
            className="w-full flex flex-col justify-center items-center gap-6">
            <div className="text-center md:w-1/2 w-full flex flex-col justify-center items-center lg:gap-3">
                <p className="md:text-xl text-lg font-bold text-primary">Services</p>
                <h2 className="md:text-[45px] text-2xl font-semibold text-darkBlack my-1">Our Service Area</h2>
                <p className="text-gray text-sm md:text-base">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <div className="flex flex-row justify-center items-center gap-3">
                    <input className='input input-sm bg-transparent border-lightGray' ref={searchRef} type="text" />
                    <button onClick={handleSearch}>Search</button>
                    <button className='btn btn-ghost' onClick={() => setIsAsc(!isAsc)}>{isAsc ? 'desc' : 'asc'}</button>
                </div>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <button className="btn border-primary text-primary bg-transparent hover:text-white hover:border-black rounded transition-all duration-500 mt-4">More Services</button>
        </div>
    );
};

export default Services;
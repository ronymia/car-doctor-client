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

    console.log(services);

    return (
        <div className='w-full flex flex-col justify-center items-center gap-6'>
            <div className='text-center w-1/2 flex flex-col justify-center items-center gap-4'>
                <p className="text-xl font-bold text-orange-600">Services</p>
                <h2 className="text-[45px] font-semibold text-darkBlack">Our Service Area</h2>
                <p className="text-gray">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
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
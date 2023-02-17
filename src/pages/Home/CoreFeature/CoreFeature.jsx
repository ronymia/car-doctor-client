import React, { useEffect, useState } from 'react';

import group from '../../../assets/icons/group.svg';
import check from '../../../assets/icons/check.svg';
import person from '../../../assets/icons/person.svg';
import quote from '../../../assets/icons/quote.svg';
import wrench from '../../../assets/icons/Wrench.svg';
import delivery from '../../../assets/icons/deliveryt.svg';
import CoreFeatureCard from './CoreFeatureCard';

const CoreFeature = () => {
    const [coreFeature, setCoreFeature] = useState([]);

    useEffect(() => {
        fetch('/core_feature.json')
            .then(res => res.json())
            .then(data => setCoreFeature(data));
    }, []);

    return (
        <section className="w-full flex flex-col justify-center items-center gap-6 my-[130px]">
            <div className='text-center w-1/2 flex flex-col justify-center items-center'>
                <p className="text-xl font-bold text-primary">Core Features</p>
                <h2 className="text-[45px] font-semibold text-darkBlack">Why Choose Us</h2>
                <p className="text-gray">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-6 gap-3">
                {
                    coreFeature.map(feature => <CoreFeatureCard
                        key={feature._id}
                        feature={feature}
                    />)
                }
            </div>
        </section>
    );
};

export default CoreFeature;

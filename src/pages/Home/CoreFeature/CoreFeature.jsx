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
        <section className="w-full flex flex-col justify-center items-center gap-6 md:my-[130px] my-[60px]">
            <div className="text-center md:w-1/2 w-full flex flex-col justify-center items-center gap-1 md:gap-3">
                <p className="md:text-xl text-lg font-bold text-primary">Core Features</p>
                <h2 className="md:text-[45px] text-3xl font-semibold text-darkBlack">Why Choose Us</h2>
                <p className="text-gray md:text-base text-sm">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="grid md:grid-cols-6 grid-cols-2 gap-3">
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

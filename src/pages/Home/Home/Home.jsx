import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactSummary from '../ContactSummary/ContactSummary';
import CoreFeature from '../CoreFeature/CoreFeature';
import OurTeam from '../OurTeam/OurTeam';
import Products from '../Products/Products';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className="px-12">
            <Banner />
            <About />
            <Services />
            <ContactSummary />
            <Products />
            <OurTeam />
            <CoreFeature />
            <Testimonial />
        </div>
    )
}

export default Home;

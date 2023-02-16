import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactSummary from '../ContactSummary/ContactSummary';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="px-12">
            <Banner />
            <About />
            <Services />
            <ContactSummary />
        </div>
    )
}

export default Home;

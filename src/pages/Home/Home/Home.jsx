import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import ContactSummary from '../ContactSummary/ContactSummary';
import OurTeam from '../OurTeam/OurTeam';
import Products from '../Products/Products';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className="px-12">
            <Banner />
            <About />
            <Services />
            <ContactSummary />
            <Products />
            <OurTeam />
        </div>
    )
}

export default Home;

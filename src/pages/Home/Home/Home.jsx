import React from "react";
import About from "../About/About";
import Carousel from "../Carousel/Carousel";
import ContactSummary from "../ContactSummary/ContactSummary";
import CoreFeature from "../CoreFeature/CoreFeature";
import OurTeam from "../OurTeam/OurTeam";
import Products from "../Products/Products";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="px-[7%]">
      <Carousel />
      <About />
      <Services />
      <ContactSummary />
      <Products />
      <OurTeam />
      <CoreFeature />
      <Testimonial />
    </div>
  );
};

export default Home;

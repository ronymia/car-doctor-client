import React from "react";

import facebook from "../../../assets/icons/socialLink/facebook.svg";
import instagram from "../../../assets/icons/socialLink/instagram.svg";
import linkedin from "../../../assets/icons/socialLink/linkedin.svg";
import twitter from "../../../assets/icons/socialLink/twitter.svg";

const OurTeamCard = ({ member }) => {
  const { title, specialty, img, social_link } = member;

  return (
    <div className="card card-compact shadow-xl">
      <figure className="p-6">
        <img src={img} className="rounded-[10px]" alt="Shoes" />
      </figure>
      <div className="card-body text-center gap-3 mb-6">
        <h2 className="text-[25px] text-darkBlack2 font-semibold">
          {specialty}
        </h2>
        <h3 className="text-xl text-gray font-semibold">{title}</h3>
        <div className="card-actions justify-center gap-4">
          <img className="cursor-pointer" src={facebook} alt="" />
          <img className="cursor-pointer" src={twitter} alt="" />
          <img className="cursor-pointer" src={linkedin} alt="" />
          <img className="cursor-pointer" src={instagram} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurTeamCard;

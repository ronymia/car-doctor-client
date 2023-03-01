import React from "react";
import facebook from "../../../assets/images/login/facebook.svg";
import linkedin from "../../../assets/images/login/linkedin.svg";
import google from "../../../assets/images/login/google.svg";

const SocialLogin = () => {
  return (
    <>
      <h1 className="block text-center text-darkBlack font-medium capitalize mt-7">
        or sign in with
      </h1>
      <div className="flex flex-row gap-5 items-center justify-center my-7">
        <div className="h-[55px] w-[55px] rounded-[50%] bg-[#F5F5F8]/75 flex items-center justify-center cursor-pointer">
          <img src={facebook} alt="loading..." />
        </div>
        <div className="h-[55px] w-[55px] rounded-[50%] bg-[#F5F5F8]/75 flex items-center justify-center cursor-pointer">
          <img src={linkedin} alt="loading..." />
        </div>
        <div className="h-[55px] w-[55px] rounded-[50%] bg-[#F5F5F8]/75 flex items-center justify-center cursor-pointer">
          <img src={google} alt="loading..." />
        </div>
      </div>
    </>
  );
};

export default SocialLogin;

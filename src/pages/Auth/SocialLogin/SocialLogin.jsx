import React from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { useAuth } from '../../../hooks/useAuth';

import facebook from "../../../assets/images/login/facebook.svg";
import linkedin from "../../../assets/images/login/linkedin.svg";
import google from "../../../assets/images/login/google.svg";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const googleProvider = new GoogleAuthProvider();

const SocialLogin = () => {
  const navigate = useNavigate();
  const { providerLogin } = useAuth();

  const googleHandle = () => {
    providerLogin(googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        if (user) {
          toast.success('Successfully Login');
          navigate("/");
        }
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }

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
        <div onClick={googleHandle}
          className="h-[55px] w-[55px] rounded-[50%] bg-[#F5F5F8]/75 flex items-center justify-center cursor-pointer">
          <img src={google} alt="loading..." />
        </div>
      </div>
    </>
  );
};

export default SocialLogin;

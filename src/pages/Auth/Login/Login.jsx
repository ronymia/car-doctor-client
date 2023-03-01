import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import loginImg from "../../../assets/images/login/login.svg";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="flex flex-row items-center justify-center px-[150px] gap-10 mb-12">
      {/* login img  LEFT SIDE */}
      <div className="hidden md:block">
        <figure className="w-96 h-auto">
          <img
            src={loginImg}
            alt="login svg..."
            className="block w-full object-cover bg-cover "
          />
        </figure>
      </div>

      {/* login form  RIGHT SIDE*/}
      <div className="h-auto rounded-[10px] border border-[#D0D0D0] flex flex-col items-center p-5 md:p-[50px]">
        <h1 className="mb-6 text-4xl font-semibold block text-center text-darkBlack2">
          Login
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* email input  */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="block text-base font-semibold text-darkBlack2 capitalize"
            >
              email
            </label>
            <input
              type="text"
              placeholder="your email"
              className="block h-14 w-[360px] md:w-[460px] bg-white rounded-[10px] border border-[#E8E8E8] py-2 px-4 placeholder:capitalize placeholder:text-[15px] placeholder:text-[#A2A2A2] text-darkBlack font-medium text-lg"
              {...register("email", {
                pattern: /^\S+@\S+\.\S+$/,
              })}
            />
          </div>

          {/* password  input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="block text-base font-semibold text-darkBlack2 capitalize"
            >
              Passwrod
            </label>
            <input
              type="text"
              placeholder="your password"
              className="block h-14 w-[360px] md:w-[460px] bg-white rounded-[10px] border border-[#E8E8E8] py-2 px-4 placeholder:capitalize placeholder:text-[15px] placeholder:text-[#A2A2A2] text-darkBlack font-medium text-lg"
              {...register("password", {
                pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]/,
                minLength: 6,
                maxLength: 14,
              })}
            />
            <Link className="block text-right text-darkBlack text-sm font-medium capitalize pr-2 mt-1 hover:underline hover:text-primary cursor-pointer">
              forgot password
            </Link>
          </div>

          {/* login button  */}
          <button
            type="submit"
            className="btn bg-primary text-white border-primary text-lg font-semibold capitalize"
          >
            login
          </button>
        </form>

        {/* SOCIAL LOGIN  */}

        <div>
          <SocialLogin />
        </div>
        <h3 className="text-[#737373] text-lg">
          Have an account?{" "}
          <Link className="text-primary font-medium hover:underline">
            Sign In
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Login;

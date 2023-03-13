import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

import { useAuth } from '../../../hooks/useAuth';
import loginImg from "../../../assets/images/login/login.svg";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const navigate = useNavigate();
  const { createUser } = useAuth();
  const [loginError, setLoginError] = useState('');

  const { register,
    handleSubmit,
    reset,
    formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const { name, email, password, confirmPassword } = data;
    console.log(data);

    if (password !== confirmPassword) {
      return setLoginError("password don't match");
    }

    //createing new user
    createUser(email, password)
      .then(result => {
        const user = result.user;
        if (user) {
          reset();
          toast.success('Successfully create Account');
          navigate("/");
        }
      }).catch(error => {
        const errorCode = error.code;

        if (errorCode) {
          switch (errorCode) {
            case 'auth/user-not-found':
              setLoginError('User not founded');
              break;
            case 'auth/invalid-email':
              setLoginError('Invalid email provided, please provide a valid email')
              break;

            case 'auth/wrong-password':
              setLoginError('Wrong password');
              break;

            default:
              setLoginError('Something is wrong');
          }
        }
      });
  }

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
        <h1 className="capitalize mb-6 text-4xl font-semibold block text-center text-darkBlack2">
          sign up
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          {/* name input  */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="name"
              className="block text-base font-semibold text-darkBlack2 capitalize"
            >
              name
            </label>
            <input
              type="text"
              placeholder="your name"
              className="block h-14 w-[360px] md:w-[460px] bg-white rounded-[10px] border border-[#E8E8E8] py-2 px-4 placeholder:capitalize placeholder:text-[15px] placeholder:text-[#A2A2A2] text-darkBlack font-medium text-lg"
              {...register("name", {
                required: {
                  value: true,
                  message: "Your Name is required"
                }
              })}
            />
            {/* error message   */}
            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
            {loginError && <span className="label-text-alt text-red-500">{loginError}</span>}
          </div>
          {/* email input  */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="block text-base font-semibold text-darkBlack2 capitalize"
            >
              email
            </label>
            <input
              type="email"
              placeholder="your email"
              className="block h-14 w-[360px] md:w-[460px] bg-white rounded-[10px] border border-[#E8E8E8] py-2 px-4 placeholder:capitalize placeholder:text-[15px] placeholder:text-[#A2A2A2] text-darkBlack font-medium text-lg"
              {...register("email", {
                required: {
                  value: true,
                  message: "Your Email is required"
                },
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Provide a valid Email"
                }
              })}
            />
            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
            {loginError && <span className="label-text-alt text-red-500">{loginError}</span>}
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
              type="password"
              placeholder="new password"
              className="block h-14 w-[360px] md:w-[460px] bg-white rounded-[10px] border border-[#E8E8E8] py-2 px-4 placeholder:capitalize placeholder:text-[15px] placeholder:text-[#A2A2A2] text-darkBlack font-medium text-lg"
              {...register("password", {
                required: {
                  value: true,
                  message: "Your Password is required"
                },
                minLength: {
                  value: 6,
                  message: "Must be 6 character or longer"
                },
                maxLength: {
                  value: 14,
                  message: "No longer 14 character"
                },
              })}
            />
            {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
            {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
            {loginError && <span className="label-text-alt text-red-500">{loginError}</span>}
          </div>
          {/* confirm password  input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="ConfirmPassword"
              className="block text-base font-semibold text-darkBlack2 capitalize"
            >
              Confirm Passwrod
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="block h-14 w-[360px] md:w-[460px] bg-white rounded-[10px] border border-[#E8E8E8] py-2 px-4 placeholder:capitalize placeholder:text-[15px] placeholder:text-[#A2A2A2] text-darkBlack font-medium text-lg"
              {...register("confirmPassword", {
                required: {
                  value: true,
                  message: "Password did not match"
                }
              })}
            />
            {/* error message   */}
            {errors.ConfirmPassword?.type === 'required' && <span className="label-text-alt text-red-500">{errors.ConfirmPassword.message}</span>}
            {loginError && <span className="label-text-alt text-red-500">{loginError}</span>}
          </div>

          {/* login button  */}
          <button
            type="submit"
            className="btn bg-primary text-white border-primary text-lg font-semibold capitalize"
          >
            sign up
          </button>
        </form>

        {/* SOCIAL LOGIN  */}

        <div>
          <SocialLogin />
        </div>
        <h3 className="text-[#737373] text-lg">
          Have an account?{" "}
          <Link
            to={"/auth/login"}
            className="capitalize text-primary font-medium hover:underline"
          >
            login
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Register;

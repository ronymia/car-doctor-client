import React from "react";
import { useRouteError } from "react-router-dom";
// nav bar import
import Header from "../Header/Header";

// error image
import errorRoute from "../../../assets/images/notFound.png";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="h-screen max-w-screen-xl">
      <Header />
      <div className="flex flex-col items-center justify-center px-[10%]">
        <img src={errorRoute} alt="" />
        <h1 className="text-darkBlack text-3xl mb-4">
          Uh oh, something went terribly wrong 😩
        </h1>
        <button
          type="button"
          className="uppercase btn btn-md text-white"
          onClick={() => (window.location.href = "/")}
        >
          go to home page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;

import React from "react";
import { Link } from "react-router-dom";
import errorRoute from "../../../assets/images/notFound.png";
import Header from "../Header/Header";

const NotFound = () => {
  return (
    <div className="h-screen max-w-screen-xl">
      <Header />
      <div className="flex flex-col items-center justify-center px-[10%]">
        <img src={errorRoute} alt="" />
        <Link to={"/"} className="uppercase btn btn-md text-white">
          go to home page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

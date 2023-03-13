import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineSearch, HiOutlineShoppingBag } from "react-icons/hi";

import logo from "../../../assets/logo.svg";
import { useAuth } from "../../../hooks/useAuth";

const Header = () => {
  const [toggleIsOpned, setToggleIsOpned] = useState(false);
  const { user, logOutUser } = useAuth();

  const menuItems = (
    <>
      <li className="font-semibold text-darkBlack2 hover:text-primary">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "text-primary" : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li className="font-semibold text-darkBlack2 hover:text-primary">
        <a href="#about">About</a>
      </li>
      <li className="font-semibold text-darkBlack2 hover:text-primary">
        <a href="#services">Services</a>
      </li>
      <li className="font-semibold text-darkBlack2 hover:text-primary">
        <a href="#products">Products</a>
      </li>
      <li className="font-semibold text-darkBlack2 hover:text-primary">
        <NavLink to="/blog">Blogs</NavLink>
      </li>
      <li className="font-semibold text-darkBlack2 hover:text-primary">
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );

  return (
    <header className="navbar h-20 md:px-[7%] px-2 sticky top-0 bg-white z-50 mb-5">
      <div className="navbar-start pl-2">
        <Link to="/" className="">
          <img className="md:w-3/4 w-2/3" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end flex  gap-1 ">
        <div className="flex flex-row items-center text-darkBlack2">
          <button className="btn btn-ghost md:text-2xl text-xl">
            <HiOutlineShoppingBag />
          </button>
          <button className="btn btn-ghost md:text-2xl text-xl">
            <HiOutlineSearch />
          </button>
        </div>

        <div className="group h-[35px] md:h-[45px] w-[80px] md:w-[100px] inline-flex justify-center items-center border border-primary hover:border-primary hover:bg-primary transition-all duration-300 rounded-[5px] cursor-pointer ml-2 px-2">
          {
            user && user.uid ?
              <button type="button"
                onClick={logOutUser}
                className="btn btn-ghost text-primary hover:text-white"
              >
                Log Out</button>
              :
              <Link
                to={"/auth/login"}
                className=" text-primary group-hover:text-white font-semibold md:text-lg text-[14px]"
              >
                Login
              </Link>
          }
        </div>

        {/* responsive nav hamburger  */}
        <button
          className="btn btn-square btn-ghost md:hidden text-darkBlack2"
          onClick={() => setToggleIsOpned(!toggleIsOpned)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-7 h-7 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* responsive navbar  */}
        <ul
          className={`menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52
                absolute -left-[100%] ${!toggleIsOpned ? "top-[52px]" : "left-[50%] top-[52px]"
            } transition-all duration-300 bg-white items-center md:hidden`}
        >
          {menuItems}
        </ul>
      </div>
    </header>
  );
};

export default Header;

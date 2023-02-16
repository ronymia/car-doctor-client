import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineSearch, HiOutlineShoppingBag } from 'react-icons/hi';


import logo from '../../assets/logo.svg';

const Header = () => {
    const [toggleIsOpned, setToggleIsOpned] = useState(false);

    const menuItems = <>
        <li className='font-semibold text-darkBlack2 hover:text-primary'>
            <NavLink to='/'
                className={({ isActive }) => isActive ? "text-primary" : undefined}
            >Home</NavLink>
        </li>
        <li className='font-semibold text-darkBlack2 hover:text-primary'>
            <NavLink to='/about'>About</NavLink>
        </li>
        <li className='font-semibold text-darkBlack2 hover:text-primary'>
            <NavLink to='/services'>Services</NavLink>
        </li>
        <li className='font-semibold text-darkBlack2 hover:text-primary'>
            <NavLink to='/blog'>Blog</NavLink>
        </li>
        <li className='font-semibold text-darkBlack2 hover:text-primary'>
            <NavLink to='/orders'>Orders</NavLink>
        </li>
        <li className='font-semibold text-darkBlack2 hover:text-primary'>
            <NavLink to='/login'>Login</NavLink>
        </li>
    </>

    return (
        <header className="navbar h-20 md:px-12 px-2">
            <div className="navbar-start flex relative"
                onClick={() => setToggleIsOpned(!toggleIsOpned)}
            >
                {/* responsive nav hamburger  */}
                <button className="btn btn-square btn-ghost md:hidden text-darkBlack2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
                {/* responsive navbar  */}
                <ul className={`menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52
                absolute -left-96 ${!toggleIsOpned ? "top-14" : "left-0 top-14"} transition-all duration-300 bg-white`}>
                    {menuItems}
                </ul>
                <Link to="/" className="">
                    <img className="md:w-3/4 w-1/2" src={logo} alt="logo" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex flex-row items-center text-darkBlack2">
                    <button className="btn btn-ghost text-2xl">
                        <HiOutlineShoppingBag />
                    </button>
                    <button className="btn btn-ghost text-2xl">
                        <HiOutlineSearch />
                    </button>
                </div>
                <button className="btn btn-outline text-primary border-primary hover:bg-primary hover:text-white transition-all duration-300">Appointment</button>
            </div>
        </header>
    );
}

export default Header;

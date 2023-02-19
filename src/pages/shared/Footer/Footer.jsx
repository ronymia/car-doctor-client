import React from 'react';
import logo from '../../../assets/logo.svg';

const Footer = () => {
    return (
        <footer className="md:p-32 p-8 grid md:grid-cols-4 grid-cols-2 bg-darkBlack text-white gap-5 items-center justify-center">
            <div>
                <img src={logo} alt="" />
                <p className="md:text-base text-sm mt-2">Genius Car Doctor Ltd.<br />Providing reliable tech since 1992</p>
            </div>
            <div className="flex flex-col items-start justify-center">
                <span className="footer-title">Services</span>
                <a href="/" className="link link-hover md:text-base text-sm">Branding</a>
                <a href="/" className="link link-hover md:text-base text-sm">Design</a>
                <a href="/" className="link link-hover md:text-base text-sm">Marketing</a>
                <a href="/" className="link link-hover md:text-base text-sm">Advertisement</a>
            </div>
            <div className="flex flex-col items-start justify-center">
                <span className="footer-title">Company</span>
                <a href="/" className="link link-hover md:text-base text-sm">About us</a>
                <a href="/" className="link link-hover md:text-base text-sm">Contact</a>
                <a href="/" className="link link-hover md:text-base text-sm">Jobs</a>
                <a href="/" className="link link-hover md:text-base text-sm">Press kit</a>
            </div>
            <div className="flex flex-col items-start justify-center">
                <span className="footer-title">Legal</span>
                <a href="/" className="link link-hover md:text-base text-sm">Terms of use</a>
                <a href="/" className="link link-hover md:text-base text-sm">Privacy policy</a>
                <a href="/" className="link link-hover md:text-base text-sm">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;
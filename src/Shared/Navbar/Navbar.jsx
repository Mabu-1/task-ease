import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setDropdownOpen(false);
  };

  const navLinks = (
    <>
      <li className="px-2 py-1 font-bold bg-blue-400 border-2 rounded-lg hover:bg-blue-600">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="px-2 py-1 font-bold bg-blue-400 border-2 rounded-lg hover:bg-blue-600">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="px-2 py-1 font-bold bg-blue-400 border-2 rounded-lg hover:bg-blue-600">
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar relative">
      <div className="navbar-start">
        <Link to="/">
          <img
            className="w-[230px] hidden md:block lg:block"
            src="https://i.ibb.co/1G4T3cm/default.png"
            alt=""
          />
        </Link>
        <div className="dropdown dropdown-hover" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden lg:hidden">
            {isDropdownOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            )}
          </div>
          <ul
            tabIndex={0}
            className={`menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ${isDropdownOpen ? 'open' : ''}`}
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden md:flex lg:flex">
        <ul className="menu-horizontal px-1 gap-[10px]">{navLinks}</ul>
      </div>
      <div className="navbar-end md:mt-[-10px] lg:mt-[-20px] relative flex items-center space-x-4">
        <FaFacebook className="text-blue-500 hover:text-blue-700 text-2xl md:text-3xl lg:text-4xl cursor-pointer" />
        <FaInstagram className="text-pink-500 hover:text-pink-700 text-2xl md:text-3xl lg:text-4xl cursor-pointer" />
        <FaYoutube className="text-red-500 hover:text-red-700 text-2xl md:text-3xl lg:text-4xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;

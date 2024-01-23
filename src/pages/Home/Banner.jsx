import React, { useEffect } from 'react';
import {  FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import { Link } from 'react-router-dom';
const Banner = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between  bg-blue-300 border-2 rounded-lg " data-aos="fade-right">
      {/* Left Side */}
      <div className="w-full md:w-1/2 lg:w-1/2 pr-4 md:pr-8 lg:pr-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 p-2 text-blue-700">TaskEase</h1>
        <div className='bg-white border-2 rounded-x-5  w-full'>
          <h2 className="text-base md:text-md lg:text-xl text-gray-600 mb-4 px-2 font-bold">Organize, Collaborate, Achieve More.</h2>
        </div>
        <p className="text-base md:text-lg lg:text-xl mb-4 px-2 font-bold mt-2">Why Use <span className='text-blue-700'>TaskEase</span>?</p>
        <ul className="list-disc list-inside mb-4 px-4 font-bold">
          <li className='font-semibold'>Effortless Task Creation</li>
          <li className='font-semibold'>Intuitive Task Tracking</li>
          <li className='font-semibold'>Dynamic Management</li>
        </ul>
        <Link to="/dashboard">
        <button className="text-white m-3 px-2 md:px-3 lg:px-3 py-1 md:py-1.5 lg:py-2 rounded-lg  font-bold text-sm md:text-md lg:text-md bg-blue-600 hover:bg-purple-600">
            Explore Now
          </button>
          </Link>
         
        
       

        <div className=''>
            <h1 className='text-md md:text-lg lg:text-xl mb-2 px-2 font-bold mt-2 text-black'>Contact US</h1>
          <p className='text-base md:text-md lg:text-md mb-1 px-4 font-semibold mt-2 text-black'>TaskEase123@gmail.com</p>
          <p className='text-base md:text-md lg:text-md mb-4 px-4 font-semibold mt-2 text-black'>Our Contact: +880-123-456-7890</p>
        </div>

        <div className="flex mt-4 px-2">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="mr-2">
            <FaFacebook size={30} className="text-blue-500 hover:text-blue-700 cursor-pointer" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="mr-2">
            <FaInstagram size={30} className="text-pink-500 hover:text-pink-700 cursor-pointer" />
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube size={30} className="text-red-500 hover:text-red-700 cursor-pointer" />
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 lg:w-1/2 md:mt-6 lg:mt-0">
        <img className="w-full h-full object-cover md:h-80 lg:h-full" src="https://i.ibb.co/zbsNyTG/8104941.jpg" alt="Right Image" />
      </div>
    </div>
  );
};

export default Banner;

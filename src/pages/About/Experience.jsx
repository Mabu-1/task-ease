import React, { useEffect } from "react";
import { FaWrench, FaLaptop, FaRegLightbulb, FaStar } from 'react-icons/fa';
import { GoRocket } from "react-icons/go";
import { MdWork } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";



import "./Experience.css";

const Experience = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
      }, []);
  return (
    <div className="mb-10" data-aos="fade-right">
          
      <div className="flex items-center justify-center mb-20">
        <div className="relative flex items-center space-x-4">
          <GoRocket className="text-6xl text-red-600 absolute top-[-20px] left-[-35px]" />
         
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
          Dream big, Work Hard,<br/>&nbsp;&nbsp;&nbsp;&nbsp;achieve greatness.
          </h1>  
          <MdWork className="text-6xl text-blue-400 absolute bottom-[-35px] right-[-55px]" />
        </div>
      </div>
      <div className="experience" id='experience'>
      <div className="flex-col text-cente">
       
        <div className="circle " style={{color: 'var(--orange)'}}>3+</div>
        
        <span className="font-bold ml-[-10px]">Years Experience</span>
      </div>
      <div className="flex-col text-center ">
        <div className="circle" style={{color: 'var(--orange)'}}>100+</div>
        
        <span className="font-bold">Workers</span>
      </div>
      <div className="flex-col text-center">
        <div className="circle" style={{color: 'var(--orange)'}}>1000+</div>
       
        <span className="font-bold">Daily users</span>
      </div>
    </div>
    </div>
   
  );
};

export default Experience;

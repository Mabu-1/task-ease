import  { useEffect } from 'react';

import AOS from "aos"; 
import "aos/dist/aos.css"; 
import { FaPencilAlt } from 'react-icons/fa';
import { GrTask } from "react-icons/gr";
const AboutBanner = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);
  return (
    <div className='mb-10'>
              
<div className="flex flex-col lg:flex-row items-center justify-between  bg-blue-300 border-2 rounded-lg  " data-aos="fade-left">
     
      <div className="w-full md:w-1/2 lg:w-1/2 pr-4 md:pr-8 lg:pr-10">
     <div className='flex justify-start p-4'>
     <FaPencilAlt className='text-xl md:text-3xl lg:text-5xl text-red-500' /> 
     </div>
     
       <p className='px-4 text-md md:text-xl lg:text-2xl font-semibold'>Streamlining task organization and collaboration with a user-friendly interface and powerful features. Achieve more seamlessly, whether you're a professional or student. Explore TaskEase for enhanced productivity today.</p>
       <div className='flex justify-end p-4'>
     <GrTask className='text-xl md:text-3xl lg:text-5xl text-red-500'/> 
     </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/2 md:mt-6 lg:mt-0">
        <img className="w-full h-full object-cover md:h-80 lg:h-full" src="https://i.ibb.co/zbsNyTG/8104941.jpg" alt="Right Image" />
      </div>
    </div>
    </div>
    
  );
};

export default AboutBanner;
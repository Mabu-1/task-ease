import React, { useEffect } from 'react';
import { FaCode, FaBuilding, FaBriefcase, FaMoneyCheck } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';
import { BsPeople } from 'react-icons/bs';
import AOS from "aos"; 
import "aos/dist/aos.css"; 
const Benefit = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); 
      }, []);
  const userTypes = [
    { icon: <FaCode size={40} className='text-blue-500' />, title: 'Developers', description: 'Simplify task management for coding projects.' },
    { icon: <FaBuilding size={40} className='text-blue-500' />, title: 'Corporate Professionals', description: 'Enhance team collaboration and productivity.' },
    { icon: <BsPeople size={40} className='text-blue-500'  />, title: 'Entrepreneurs', description: 'Streamline business tasks and project management.' },
    { icon: <GiBrain size={40} className='text-blue-500' />, title: 'Creatives', description: 'Organize and track creative projects efficiently.' },
    { icon: <FaBriefcase size={40} className='text-blue-500' />, title: 'Professionals', description: 'Manage tasks effectively in various fields.' },
    { icon: <FaMoneyCheck size={40} className='text-blue-500' />, title: 'Bankers', description: 'Optimize financial task management and planning.' },
  ];

  return (
    <section className="py-16 " data-aos="fade-right">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">Who Benefits from <span className='text-blue-700'>TaskEase</span>? </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {userTypes.map((user, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-center items-center mb-4">
                {user.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{user.title}</h3>
              <p className="text-gray-600">{user.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefit;

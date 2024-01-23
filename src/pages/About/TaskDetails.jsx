import React, { useEffect } from 'react';
import { FaTasks, FaClipboardList, FaCheckSquare, FaClock } from 'react-icons/fa';
import AOS from "aos"; 
import "aos/dist/aos.css"; 
const TaskDetails = () => {
  const features = [
    { icon: <FaTasks size={90} className="text-blue-500" />, text: 'Create New Tasks' },
    { icon: <FaClipboardList size={90} className="text-blue-500" />, text: 'Review Previous Tasks' },
    { icon: <FaCheckSquare size={90} className="text-blue-500" />, text: 'Handle Tasks Effectively' },
    { icon: <FaClock size={90} className="text-blue-500" />, text: 'Manage Time Efficiently' },
  ];
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);
  return (
    <section className="py-8 md:py-16" data-aos="fade-left">
      <div className="container mx-auto text-center">
        
        <p className="text-base md:text-xl lg:text-2xl text-gray-700">
          Empower your productivity by leveraging TaskEase's advanced task management features. From creating new tasks to efficiently handling them, TaskEase simplifies your workflow.
        </p>

        <div className="flex flex-wrap justify-center mt-4 md:mt-8 space-x-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {React.cloneElement(feature.icon, { size: 48, className: "text-blue-500" })} {/* Adjusted icon size */}
              <p className="mt-2 text-lg md:text-xl lg:text-2xl text-black font-bold">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TaskDetails;

import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import AOS from "aos"; 
import "aos/dist/aos.css"; 
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);
  const faqData = [
    {
        question: 'How do I create a new task?',
        answer: 'Click on the "New Task" button in the task management dashboard, fill in the details, and click "Create."',
      },
      {
        question: 'Can I track completed tasks?',
        answer: 'Yes, completed tasks are automatically moved to the "Completed" list for your reference.',
      },
      {
        question: 'Is TaskEase suitable for large teams?',
        answer: 'Absolutely! TaskEase is designed to scale, making it ideal for both small and large teams.',
      },
      {
        question: 'How do I prioritize tasks?',
        answer: 'You can use Low, moderate, high Priority based on priority in the to-do list.',
      },
      {
        question: 'Can I access my tasks on different devices?',
        answer: 'Yes, your tasks are synchronized across devices as long as you are logged in to your account.',
      },
  ];

  return (
    <div className="mb-20 mt-[40px]" data-aos="fade-right">
      <h1 className="text-5xl font-bold text-[#0730ff] text-center mb-5">FAQ Section</h1>
      <div className="flex lg:flex-row flex-col-reverse gap-10 w-11/12 lg:w-3/4 mx-auto">
        <div data-aos="fade-right" className="w-11/12 lg:w-3/4 mx-auto flex flex-col gap-5 mt-7">
          {faqData.map((item, index) => (
            <div key={index} className="w-full mx-auto border-2 border-slate-200">
              <div
                className="accordion-title text-xl font-medium flex justify-between items-center"
                onClick={() => handleToggleAccordion(index)}
              >
                <div className='p-2'>{item.question}</div>
                <span className='cursor-pointer text-blue-600'>{activeIndex === index ?<FaMinus />: <FaPlus/> }</span>
              </div>
              {activeIndex === index && (
                <div className="accordion-content">
                  <p className='p-2'>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;

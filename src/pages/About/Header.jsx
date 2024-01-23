import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="mb-10">
      <div className="text-center " data-aos="fade-left">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-2 p-2 text-black">
          WELCOME
        </h1>
      </div>
      <div className="text-center" data-aos="fade-up">
        <p className="sm:text-xl md:text-xl lg:text-2xl">To</p>
      </div>
      <div className="text-center" data-aos="fade-right">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 p-2 text-blue-700">
          TaskEase
        </h1>
      </div>
    </div>
  );
};

export default Header;

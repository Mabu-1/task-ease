import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    const heightToHide = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHide) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="fixed bottom-10 right-10" onClick={goToTop}>
      {isVisible && (
        <button className="w-12 h-12 bg-blue-500 text-white rounded-full focus:outline-none shadow-lg" title="Go to Top">
          <FaArrowUp className="text-3xl m-auto" />
        </button>
      )}
    </div>
  );
};

export default GoToTop;

import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-4xl font-semibold text-gray-800 mb-4">Oops!!!</h2>
      <p className="text-lg text-gray-600 mb-8">
        It seems like you have taken a wrong turn.
      </p>
      <Link
        to="/"
        className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
      >
        <FaArrowLeft className="mr-2" />
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;

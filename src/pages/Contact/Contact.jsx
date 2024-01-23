import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaFacebook,  FaPhone, FaEnvelope, FaYoutube, FaInstagram} from "react-icons/fa";

import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";



const Contact = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_l4ex6hr",
        "template_i4qiiif",
        form.current,
        "TalDgw6M9gU8873Je"
      );
      setDone(true);
      form.current.reset();
      toast.success("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email. Please try again later.");
    }
  };

  return (
    <div className="">

      <div className="flex justify-center py-8" data-aos="fade-left">
        <h1 className="text-5xl font-bold text-blue-500">Get in Touch With Us </h1>
      </div>
      <div className="container mx-auto flex flex-col lg:flex-row " data-aos="fade-right">

        <div className="lg:w-1/2 lg:pr-8">
          <img
            src="https://i.ibb.co/Bs5BPbX/5124556.jpg"
            alt="Contact"
            className="w-full h-auto rounded-lg"
          />
        </div>


        <div className="lg:w-1/2 md:mt-[100px] lg:mt-[100px] gap-4">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="  px-8 pt-6 pb-8 mb-4"
          >
            <div className="flex ">
              <label className="text-xl font-bold">Name:</label>
              <input
                type="text"
                name="user_name"
                className="user-input w-full text-md bg-blue-100 border-2 border-blue-400 ml-8 p-2"
                placeholder="Name"
                required
              />
            </div>

            <div className="mt-4 flex">
              <label className="text-xl font-bold">Email:</label>
              <input
                type="email"
                name="user_email"
                className="user-input w-full text-md bg-blue-100 border-2 border-blue-400 ml-8 p-2"
                placeholder="Email"
                required
              />
            </div>
            <div className="mt-4 flex">
              <div className="mt-[10px]">
                <label className="text-xl font-bold  ">Message:</label>
              </div>

              <textarea
                name="message"
                className="user-input w-full  text-md bg-blue-100 border-2 border-blue-400 ml-1  p-2"
                placeholder="Message"
                rows="4"
                required
              />
            </div>

            <div className="flex justify-start">
              <button
                type="submit"
                className="bg-blue-300 text-white py-2 px-4 rounded-full mt-4 hover:bg-blue-700"
              >
                Send
              </button>
            </div>


          </form>
        </div>
      </div>
      <ToastContainer />



      <div className="" data-aos="fade-right" >
        <div className="text-center">
          <h2 className="text-xl md:text-4xl lg:text-5xl mb-4 font-extrabold py-2 text-blue-500">  Our Location</h2>
        </div>

        <div className="text-center ">
          <p className="font-bold text-xl lg:text-3xl py-2">We are located in the heart of TechCity,providing convenient access to our services.</p>

          <p className="text-blue-400 font-bold py-2 text-xl lg:text-4xl">Visit us at:</p>
          <p className="font-semibold py-2 text-md lg:text-xl">123 Main Street, Suite 456, TechCity,TC 12345, United States.</p>


        </div>

      </div>

      <div className="mt-10" data-aos="fade-left">

      <div className="text-center">
          <h2 className="text-xl md:text-4xl lg:text-5xl mb-4 font-extrabold py-2 text-blue-500">  Our Contact Information</h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-2 mt-5 ">
          
          <div className="flex ">
            <FaPhone className="text-blue-500 sm:text-xl md:text-xl lg:text-2xl" />
            <p className="sm:text-xl md:text-xl lg:text-2xl font-bold ml-2">Call us:</p>
            <span className="ml-2 sm:text-xl md:text-xl lg:text-2xl font-bold">+880-123-456-7890</span>
          </div>
          <div className="flex ">
            <FaEnvelope className="text-blue-500 sm:text-3xl md:text-xl lg:text-2xl mt-1" />
            <p className="sm:text-xl md:text-xl lg:text-2xl font-bold ml-2">Email us:</p>
            <span className="ml-2 sm:text-xl md:text-xl lg:text-2xl font-bold">TaskEase123@gmail.com</span>
          </div>
        </div>


        <div className="flex  justify-center gap-2 mt-5 py-5">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-blue-500 text-4xl   lg:text-6xl hover:text-purple-700" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-blue-500 text-4xl  lg:text-6xl hover:text-purple-700" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-blue-500 text-4xl lg:text-6xl hover:text-purple-700" />
          </a>
        </div>

      </div>






    </div>


  );
};

export default Contact;

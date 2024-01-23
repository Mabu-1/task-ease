import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import app from '../../firebase/firebase.config';


const Forget = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const database = getAuth(app);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const emalVal = email.trim(); // Trim the email
      await sendPasswordResetEmail(database, emalVal);
      Swal.fire({
        icon: 'success',
        title: 'Check your email',
        text: 'Password reset instructions have been sent to your email.',
      });
      navigate("/"); // Use navigate to go to the home page
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message,
      });
    }
  };

  return (
    <div className='flex p-10'>
      <div className='md:w-1/2 lg:w-1/2 hidden md:flex '>  
        <img src="https://i.ibb.co/2g4FZdS/3275434.jpg" alt="" />
      </div>
      <form onSubmit={handleSubmit} className='mt-20'>
        <label className="block text-sm font-medium text-gray-700">Email Address:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mt-2 border rounded focus:outline-none focus:border-blue-500"
          required
        />
        <div className="mt-4 flex justify-between">
          <button type="submit" className="btn bg-blue-500 text-white hover:bg-blue-700">
            Reset Password
          </button>
          <Link className="btn bg-red-500 text-blue-600 font-bold" to='/login'>
            Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Forget;

import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import UseTask from '../../Hooks/UseTask';
import axios from 'axios';
import Swal from 'sweetalert2';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Update = () => {
  const {title, description, deadline, _id} = useLoaderData();
  console.log(title);
  const[, loading,refetch] = UseTask();
  const { id } = useParams();
 const axiosPublic=useAxiosPublic();
  const { register, handleSubmit,setValue, reset, formState: { errors } } = useForm();
  
const navigate= useNavigate();
    

  const onSubmit = async (formData) => {
    try {
      // Make an Axios PUT request to update the task
      const response = await axiosPublic.put(`/tasks/${id}`, formData);

      if (response.data.acknowledged) {
        Swal.fire({
            title: 'Success!',
            text: 'Task Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Ok'

        });
        refetch(); // Refetch the data to update the UI
        navigate('/dashboard/manageTasks')
      } else {
        // Handle error
        console.error('Failed to update task');
      }
    } catch (error) {
      console.error('Error updating task', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <SectionTitle heading="Update an Task" subHeading="Refresh info"></SectionTitle>
 
    <form  onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
        <input  defaultValue={title}{...register('title', { required: 'Title is required' })} type="text" id="title" className="border rounded w-full py-2 px-3" />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
        <textarea defaultValue={description} {...register('description')} id="description" className="border rounded w-full py-2 px-3"></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="deadline" className="block text-gray-700 text-sm font-bold mb-2">deadline:</label>
        <input  defaultValue={deadline}{...register('deadline')} type="date" id="deadline" className="border rounded w-full py-2 px-3" />
      </div>

     

      <div className="mt-6">
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-purple-500" >Update Task</button>
      </div>
    </form>
  </div>
  
  );
};

export default Update;

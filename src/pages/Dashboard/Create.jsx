import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Create = () => {
  const {user} =useContext(AuthContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const axiosPublic =useAxiosPublic();
  const onSubmit = async (formData) => {
    console.log(formData);

    const requestData = {
      ...formData,
      status: 'to-do',
      share:'No',
      email:user.email,
      creator:user.email,
    };

    try {
      const res = await axiosPublic.post("/tasks", requestData);
      console.log(res);
      if (res.data.acknowledged) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Task created Successfully',
          showConfirmButton: false,
          timer: 1500
        });
      }
    } catch (error) {
      console.log(error);
    }

    reset();
  };
 
  return (
    <div className="container mx-auto mt-10">
      <form  onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
          <input {...register('title', { required: 'Title is required' })} type="text" id="title" className="border rounded w-full py-2 px-3" />
          {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description:</label>
          <textarea {...register('description')} id="description" className="border rounded w-full py-2 px-3"></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="deadline" className="block text-gray-700 text-sm font-bold mb-2">deadline:</label>
          <input {...register('deadline')} type="date" id="deadline" className="border rounded w-full py-2 px-3" />
        </div>

       

        <div className="mt-6">
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-purple-500" >Create Task</button>
        </div>
      </form>
    </div>
  );
};

export default Create;

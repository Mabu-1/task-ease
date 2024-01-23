import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useTask from '../../Hooks/UseTask';
import { CgProfile } from "react-icons/cg";
import { IoMail } from "react-icons/io5";
import { MdDone, MdSchedule, MdWork } from 'react-icons/md';
const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const email = user.email;
    const name = user.displayName;
    const [tasks, loading, refetch] = useTask();
    const toDo= tasks.filter((tasks) => tasks.status ==='to-do');
    const inProgress= tasks.filter((tasks) => tasks.status ==='in-progress');
    const completed= tasks.filter((tasks) => tasks.status ==='completed');

    return (
        <div className="flex items-center justify-center p-8">
            <div className="bg-white shadow-md rounded-lg p-8">
                
                <div className='flex gap-2 mb-2'>
                <CgProfile className='text-xl text-blue-600' />

                <h1 className="text-lg text-blue-700 font-extrabold mt-[-5px]">Name:</h1>
                <h1 className="text-lg font-bold mt-[-5px]">{name}</h1>
                </div>
                <div className='flex gap-2 mb-2'>
                <IoMail className='text-xl text-blue-600' />
                <h1 className="text-lg text-blue-700 font-extrabold mt-[-5px]">Mail:</h1>
                <h1 className="text-lg font-bold mt-[-5px]">{email}</h1>
                </div>
               
                <div className='flex gap-2 mb-2'>
                <MdSchedule className='text-xl text-blue-600' />
                <h1 className="text-lg text-blue-700 font-extrabold mt-[-5px]">Task Need To Do:</h1>
                <h1 className="text-lg font-bold mt-[-5px]">{toDo.length}</h1>
                </div>
 
                <div className='flex gap-2 mb-2'>
                <MdWork className='text-xl text-yellow-600' />
                <h1 className="text-lg text-blue-700 font-extrabold mt-[-5px]">Task in Progress:</h1>
                <h1 className="text-lg font-bold mt-[-5px]">{inProgress.length}</h1>
                </div>
               
                <div className='flex gap-2 mb-2'>
                <MdDone className='text-xl text-green-600' />
                <h1 className="text-lg text-blue-700 font-extrabold mt-[-5px]">Task is Completed:</h1>
                <h1 className="text-lg font-bold mt-[-5px]">{completed.length}</h1>
                </div>
                </div>
               
               
        </div>
    );
}

export default UserProfile;

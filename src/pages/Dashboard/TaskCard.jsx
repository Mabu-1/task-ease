import React, { useContext, useState } from 'react';
import { FaComment, FaShare } from 'react-icons/fa';
import { MdSchedule, MdWork, MdDone } from 'react-icons/md';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import useTask from '../../Hooks/UseTask';
import useUser from '../../Hooks/UseUser';
import { AuthContext } from '../../providers/AuthProvider';

const TaskCard = ({ task }) => {
    const { title, description, deadline, status,create,_id } = task;
    const { user } = useContext(AuthContext);
    const creator = user.email;
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [tasks, loading, refetch] = useTask();
    const [users] = useUser();

    const axiosPublic = useAxiosPublic();
    const handleSubmit = async(e) => {
        e.preventDefault();

        const isUserExists = users.some((user) => user.email === email);

        if (isUserExists) {
            // User exists in the list, you can proceed with your logic
           
            const addData = {
                title:title,
                description:description,
                deadline:deadline,
                status: status,
                share:'Yes',
                email:email,
                create:creator
              };
          
              try {
                const res = await axiosPublic.post("/tasks", addData);
                console.log(res);
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Comment  added successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
              } catch (error) {
                console.log(error);
              }
            
        } else {
            // User does not exist in the list
            console.log(`${email} is not in the user list.`);

            
            Swal.fire({
                icon: 'error',
                title: 'User not found',
                text: `The email ${email} is not in the users list.`,
            });
        }

        
        setEmail('');
      
        
       
      };

    const handleSubmit1 = async(e) => {
        e.preventDefault();

            const addData = {
                title:title,
                id:_id,
                description:description,
                deadline:deadline,
                status: status,
                comment:comment,
                email:creator,
                
              };
          
              try {
                const res = await axiosPublic.post("/comments", addData);
                console.log(res);
                if (res.data.acknowledged) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User added successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
              } catch (error) {
                
            Swal.fire({
                icon: 'error',
                title: 'User not found',
                text: `The comment ${comment} is not added in the list.`,
            });
              }
            
      
              setComment('');
        }

        
        
      
        
       
      
    const handleStatus = async () => {
        try {
            let newStatus;
            if (status === 'to-do') {
                newStatus = 'in-progress';
            } else if (status === 'in-progress') {
                newStatus = 'completed';
            }
            else {
                return;
            }

            const statusUpdate = await axiosPublic.patch(`/tasks/${_id}`, { status: newStatus });

            console.log(statusUpdate.data);

            if (statusUpdate.data.modifiedCount > 0) {
                Swal.fire({
                    position: 'top-centre',
                    icon: 'success',
                    title: `${title} status is updated.`,
                    showConfirmButton: false,
                    timer: 1500
                });
                refetch();
            }
        } catch (error) {
            console.error('Error updating status:', error);
            // Handle error (e.g., show an error message to the user)
        }
    };

  
    const getStatusIcon = () => {
        switch (status) {
            case 'to-do':
                return <div className='flex gap-2'> <p className='text-blue-600 text-xl font-bold  '>to-do</p> <MdSchedule className="text-blue-600 text-xl " />;</div>
            case 'in-progress':
                return <div className='flex gap-2'>  <p className='text-blue-600 text-xl font-bold  ]'>in-progress</p> <MdWork className="text-yellow-600 text-xl " />;</div>
            case 'completed':
                return <div className='flex  gap-2'><p className='text-blue-600 text-xl font-bold '>completed</p> <MdDone className="text-green-600 " />; </div>
            default:
                return null;
        }
    };

    return (
        <div className="bg-white border-3 shadow-md rounded-lg p-4 m-4">
            <div className="flex">
                <div>
                    <div className="flex">
                        <h2 className="text-2xl font-bold text-blue-600 mt-4">Title:</h2>
                        <h2 className="text-2xl font-bold mt-4 ml-4">{title}</h2>
                    </div>
                    <div className="flex">
                        <h2 className="text-2xl font-bold text-blue-600 mt-4">Description:</h2>
                        <h2 className="text-2xl font-bold mt-4 ml-4">{description}</h2>
                    </div>
                    <div className="flex">
                        <h2 className="text-2xl font-bold text-blue-600 mt-4">deadline:</h2>
                        <h2 className="text-2xl font-bold mt-4 ml-4">{deadline}</h2>
                      
                    </div>
                    <div className='flex gap-2 mt-4'>
                   
                    <p className='text-blue-600 text-md font-bold  '>Created By:</p>
                    <h2 className="text-md font-bold ">{create}</h2>
                    
                     </div>
                </div>
                <div className="ml-auto ">
                   <div>
                   <button
                        onClick={() => handleStatus()}
                        className="btn bg-red-400 hover:bg-red-600 btn-lg"
                        title="Change Status"
                    >
                        {getStatusIcon()}
                    </button>
                   </div>
                  <div>
                  <a
                        href="#my_modal_8"
                       
                        className="btn bg-red-400 hover:bg-red-600 btn-lg "
                        title="share"
                    >
                        <p className='text-2xl text-blue-600 font-bold'>Collab</p><FaShare className='text-blue-600' />

                    </a>
                  </div>
                    <div>
                    <a
                        href="#my_modal_9"
                       
                        className="btn bg-red-400 hover:bg-red-600 btn-lg "
                        title="share"
                    >
                        <p className='text-2xl text-blue-600 font-bold'>Comment</p><FaComment className='text-blue-600' />

                    </a>
                    </div>
                 
                </div>


            </div>

            <div className="modal" role="dialog" id="my_modal_8">
            <div className="modal-box">
        <h2 className="text-2xl font-bold mb-4">Collaborate on Task</h2>
        <form onSubmit={handleSubmit}>
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
              Add User
            </button>
          <a href="#" className="btn">Close</a>
          </div>
        </form>
      </div>
            </div>

            <div className="modal" role="dialog" id="my_modal_9">
            <div className="modal-box">
        <h2 className="text-2xl font-bold mb-4">Add Valuable Comment</h2>
        <form onSubmit={handleSubmit1}>
          <label className="block text-sm font-medium text-gray-700">Comment</label>
          <textarea name="comment"  type="textArea"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full p-2 mt-2 border rounded focus:outline-none focus:border-blue-500"

            required >Enter text here...</textarea>

          <div className="mt-4 flex justify-between">
          <button type="submit" className="btn bg-blue-500 text-white hover:bg-blue-700">
              Add Comment
            </button>
          <a href="#" className="btn">Close</a>
          </div>
        </form>
      </div>
            </div>
        </div>

    );
};

export default TaskCard;

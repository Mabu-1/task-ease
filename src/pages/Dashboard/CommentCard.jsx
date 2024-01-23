import React from 'react';

const CommentCard = ({ comments }) => {
  const { title, deadline, comment, email } = comments;

  return (
    <div className="bg-white border-3 shadow-md rounded-lg p-4 m-4">
      <div className="flex">
        <div>
          <div className="flex">
            <h2 className="text-2xl font-bold text-blue-600 mt-4">Title:</h2>
            <h2 className="text-2xl font-bold mt-4 ml-4">{title}</h2>
          </div>

          <div className="flex">
            <h2 className="text-2xl font-bold text-blue-600 mt-4">Deadline:</h2>
            <h2 className="text-2xl font-bold mt-4 ml-4">{deadline}</h2>
          </div>
          <div className="flex">
            <h2 className="text-2xl font-bold text-blue-600 mt-4">cooment:</h2>
            <h2 className="text-2xl font-bold mt-4 ml-4">{comment}</h2>
          </div>

          <div className='flex gap-2 mt-4'>
          <p className='text-blue-600 text-md font-bold'>Commented By:</p>
          <h2 className="text-md font-bold ">{email}</h2>
        </div>
        </div>

        
      </div>
    </div>
  );
}

export default CommentCard;

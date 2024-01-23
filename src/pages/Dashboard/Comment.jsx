
import { useContext } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import useComment from '../../Hooks/UseComment';
import useTask from '../../Hooks/UseTask';
import CommentCard from './CommentCard';

const Comment = () => {
    
    const [comments, loading, refetch] = useComment();
    const [tasks] = useTask();
    const filteredComments = comments.filter(comment => {
       
        const taskWithEmail = tasks.find(task => task._id === comment.id );
        return taskWithEmail !== undefined;
      });
    return (
        <div>
        <SectionTitle heading="List of comments" subHeading="Read it"></SectionTitle>

        {/* Filter Dropdowns */}

        {/* Display Filtered Tasks */}
        {filteredComments.map((comments) => (
          <CommentCard key={comments.id} comments={comments} />
        ))}
      </div>
    );
};

export default Comment;
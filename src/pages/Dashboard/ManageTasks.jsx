import { FaEdit, FaTrashAlt } from "react-icons/fa";

import Swal from "sweetalert2";

import { Link } from "react-router-dom";
import UseTask from "../../Hooks/UseTask";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const ManageTasks = () => {
    const [task, loading, refetch] = UseTask();
    const allow = task.filter((task) => task.share === "No");
    console.log(allow);
    const axiosPublic =useAxiosPublic();

    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
             
                const res = await axiosPublic.delete(`/tasks/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    console.log(refetch());
                    refetch();
                    Swal.fire({
                        position: "top-centre",
                        icon: "success",
                        title: `${item.title} has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }

    return (
        <div>
            <SectionTitle heading="Manage All Tasks" subHeading="Hurry up"></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    #
                                </th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>deadline</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allow.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                   
                                    <td>
                                        {item.title}
                                    </td>
                                   
                                    <td>
                                        {item.description}
                                    </td>
                                    <td>
                                        {item.deadline}
                                    </td>
                                    
                                    <td>
                                        <Link to={`/dashboard/update/${item._id}`}>
                                            <button
                                                className="btn btn-ghost btn-lg bg-orange-500">
                                                <FaEdit className="text-white 
                                        "></FaEdit>
                                            </button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() => handleDeleteItem(item)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>


                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageTasks;
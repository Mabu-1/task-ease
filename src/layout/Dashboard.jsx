import { useContext } from "react";
import { FaHome, FaTasks, FaList, FaComment } from "react-icons/fa";
import { MdTask } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { IoLogOutOutline } from "react-icons/io5";
const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);

 
  const handleSignOut = () => {
    logOut()
      .then(() => {
        // Redirect to the homepage after successful logout using location
        window.location.href = '/login';
      })
      .catch();
  };

  const dashboardLinks = (
    <>
      <li className="border rounded-lg">
        <NavLink to="/dashboard/userProfile">
      
          User Profile
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/create">
          <MdTask />
          Create Task
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/manageTasks">
        <FaList></FaList>
          Manage Task
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/lists">
          <FaTasks />
          List Task
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/comment">
        <FaComment />

          Comments
        </NavLink>
      </li>
     
      <li>
        <NavLink to="/">
          <FaHome />
          Home
        </NavLink>
      </li>
      <li>
     
        <button
          onClick={handleSignOut}
          className="flex  "
        > 
           <IoLogOutOutline className="text-md" />
          Logout
        </button>
      </li>
      <div className="divider"></div>
    </>
  );

  return (
    <div className="flex">
      <div className="sm:w-32 md:w-50 lg:w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {dashboardLinks}
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

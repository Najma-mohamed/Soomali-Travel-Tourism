import { FaUsers, FaDollarSign, FaClipboardList, FaFileContract, FaNode, FaContao } from "react-icons/fa";
import SideNave from "../components/-Home/sideNave";
import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">

      <SideNave />

      <div className=" ml-[22%] mt-22">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-32">
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaUsers className="text-5xl text-blue-500 mx-auto" />
            <h2 className="text-xl font-bold mt-4">Admin</h2>
            <p className="text-gray-600">0 </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaUsers className="text-5xl text-green-500 mx-auto" />
            <h2 className="text-xl font-bold mt-4">User</h2>
            <p className="text-gray-600">0 </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaClipboardList className="text-5xl text-orange-500 mx-auto" />
            <h2 className="text-xl font-bold mt-4">Bookings</h2>
            <p className="text-gray-600">0 Completed</p>
          </div>
          <NavLink to="/contactdash"><div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <FaFileContract className="text-5xl text-orange-500 mx-auto" />
            <h2 className="text-xl font-bold mt-4">Contact</h2>
            <p className="text-gray-600">0 Feadback</p>
          </div></NavLink>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;

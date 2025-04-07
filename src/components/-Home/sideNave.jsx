import { Link } from "react-router-dom";
import { FaHome, FaUsers, FaBox, FaChartBar, FaSignOutAlt } from "react-icons/fa";

const SideNave = () => {
  return (
    <div className="w-[18%] h-screen bg-gray-900 fixed text-white overflow-auto">
      <h2 className="text-2xl font-bold text-center py-6 border-b border-gray-700">
        Dashboard
      </h2>
      <nav className="flex-grow">
        <ul className="space-y-3 px-4">
          <li className="py-3 px-4 hover:bg-gray-700 rounded-lg">
            <Link to="/admin">
              <FaHome className="inline-block mr-2" /> Admin
            </Link>
          </li>
          <li className="py-3 px-4 hover:bg-gray-700 rounded-lg">
            <Link to="/admin/users">
              <FaUsers className="inline-block mr-2" /> Users
            </Link>
          </li>
          <li className="py-3 px-4 hover:bg-gray-700 rounded-lg">
            <Link to="bookings">
              <FaBox className="inline-block mr-2" /> Bookings
            </Link>
          </li>
          <li className="py-3 px-4 hover:bg-gray-700 rounded-lg">
            <Link to="/admin/reports">
              <FaChartBar className="inline-block mr-2" /> Reports
            </Link>
          </li>
        </ul>
      </nav>
      <div className="px-4 py-3 border-t border-gray-700">
        <button className="w-40 ml-10 flex mt-80 items-center justify-center bg-orange-500 hover:bg--600 py-2 rounded-lg">
          <FaSignOutAlt className="mr-2" /> Logout
        </button>
      </div>
    </div>
  );
};

export default SideNave;

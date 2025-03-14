import { Link, useLocation } from "react-router-dom";
import { FaHome, FaSearch, FaUser, FaStar, FaWrench, FaGift, FaRegNewspaper } from "react-icons/fa";
import { MdOutlineNightsStay, MdDashboard } from "react-icons/md";
import { GiMountainCave } from "react-icons/gi";

export default function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <div className="w-64 h-screen bg-[#000000] text-white p-4 flex flex-col"> {/* ✅ เปลี่ยนพื้นหลังเป็นสีดำ */}
      <nav className="space-y-4">
        <Link
          to="/dashboard/home"
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            isActive("/dashboard/home") ? "bg-[#F7BEB7] text-[#000000] font-semibold" : "text-gray-300 hover:text-white hover:bg-[#F7BEB7] hover:text-[#000000]"
          }`}
        >
          <FaHome className="text-lg" />
          <span>Homepage</span>
        </Link>
        <Link
          to="/dashboard/tools"
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            isActive("/dashboard/tools") ? "bg-[#F7BEB7] text-[#000000] font-semibold" : "text-gray-300 hover:text-white hover:bg-[#F7BEB7] hover:text-[#000000]"
          }`}
        >
          <FaWrench className="text-lg" />
          <span>Resources</span>
        </Link>
        <Link
          to="/dashboard/sleep"
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            isActive("/dashboard/sleep") ? "bg-[#F7BEB7] text-[#000000] font-semibold" : "text-gray-300 hover:text-white hover:bg-[#F7BEB7] hover:text-[#000000]"
          }`}
        >
          <MdOutlineNightsStay className="text-lg" />
          <span>Sleep</span>
        </Link>
        <Link
          to="/dashboard/profile"
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            isActive("/dashboard/profile") ? "bg-[#F7BEB7] text-[#000000] font-semibold" : "text-gray-300 hover:text-white hover:bg-[#F7BEB7] hover:text-[#000000]"
          }`}
        >
          <FaUser className="text-lg" />
          <span>Profile</span>
        </Link>
      </nav>
    </div>
  );
}
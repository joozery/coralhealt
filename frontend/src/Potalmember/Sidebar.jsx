import { Link, useLocation } from "react-router-dom";
import { FaHome, FaSearch, FaUser, FaStar, FaMountain, FaGift } from "react-icons/fa";
import { MdOutlineNightsStay } from "react-icons/md";

export default function Sidebar() {
  const location = useLocation(); // ดึง path ปัจจุบัน
  const currentPath = location.pathname; // เก็บค่าเส้นทางที่เลือก

  // ฟังก์ชันเช็คว่าเมนูไหน active
  const isActive = (path) => currentPath === path;

  return (
    <div className="w-64 h-screen bg-[#130d2a] text-white p-4 flex flex-col">
      <nav className="space-y-4">
        <Link
          to="/dashboard/home"
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            isActive("/dashboard/home") ? "bg-white text-[#0D1B2A] font-semibold" : "text-gray-300 hover:text-white hover:bg-gray-700"
          }`}
        >
          <FaHome className="text-lg" />
          <span>Home</span>
        </Link>
        <Link
          to="/dashboard/sleep"
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            isActive("/dashboard/sleep") ? "bg-white text-[#0D1B2A] font-semibold" : "text-gray-300 hover:text-white hover:bg-gray-700"
          }`}
        >
          <MdOutlineNightsStay className="text-lg" />
          <span>Sleep</span>
        </Link>
        <Link
          to="/dashboard/discover"
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            isActive("/dashboard/discover") ? "bg-white text-[#0D1B2A] font-semibold" : "text-gray-300 hover:text-white hover:bg-gray-700"
          }`}
        >
          <FaSearch className="text-lg" />
          <span>Discover</span>
        </Link>
        <Link
          to="/dashboard/profile"
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            isActive("/dashboard/profile") ? "bg-white text-[#0D1B2A] font-semibold" : "text-gray-300 hover:text-white hover:bg-gray-700"
          }`}
        >
          <FaUser className="text-lg" />
          <span>Profile</span>
        </Link>
        <Link
          to="/dashboard/premium"
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            isActive("/dashboard/premium") ? "bg-white text-[#0D1B2A] font-semibold" : "text-gray-300 hover:text-white hover:bg-gray-700"
          }`}
        >
          <FaStar className="text-lg" />
          <span>Premium</span>
        </Link>
        <Link
          to="/dashboard/scenes"
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            isActive("/dashboard/scenes") ? "bg-white text-[#0D1B2A] font-semibold" : "text-gray-300 hover:text-white hover:bg-gray-700"
          }`}
        >
          <FaMountain className="text-lg" />
          <span>Scenes</span>
        </Link>
        <Link
          to="/dashboard/giftcalm"
          className={`flex items-center space-x-3 p-3 rounded-lg ${
            isActive("/dashboard/giftcalm") ? "bg-white text-[#0D1B2A] font-semibold" : "text-gray-300 hover:text-white hover:bg-gray-700"
          }`}
        >
          <FaGift className="text-lg" />
          <span>Gift Calm</span>
        </Link>
      </nav>
    </div>
  );
}
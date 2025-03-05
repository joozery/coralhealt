import React, { useState } from "react";
import { FaCog, FaHistory, FaHeart, FaLayerGroup } from "react-icons/fa";
import { IoLibraryOutline } from "react-icons/io5";
import { MdOutlineCheckCircle } from "react-icons/md";
import ProfileDashboard from "./ProfileDashboard"; // 📌 Import Dashboard Tab

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const sections = [
    {
      title: "Recently Played",
      icon: <FaHistory className="text-2xl text-gray-400" />,
      message: "No history yet",
      subtext: "Start a meditation, Sleep Story or any other content",
    },
    {
      title: "No playlists yet",
      icon: <FaLayerGroup className="text-2xl text-gray-400" />,
      message: "No playlists yet",
      subtext: "Create a playlist directly from an audio session",
    },
    {
      title: "Your Favorites",
      icon: <FaHeart className="text-2xl text-gray-400" />,
      message: "No favorites yet",
      subtext: "Heart your favorite programs to save them here for quick access",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#673391] to-[#080d2f] text-white min-h-screen flex flex-col items-center p-6">
      <div className="w-full max-w-screen-xl">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <FaCog className="text-gray-300 text-xl cursor-pointer hover:text-white transition" />
          <h2 className="text-3xl font-bold">Profile</h2>
          <div className="bg-yellow-500 text-black p-2 rounded-full">🎁</div>
        </div>

        {/* Profile Menu Tabs */}
        <div className="flex space-x-3 mb-6">
          {["Dashboard", "Library", "History", "Check-ins"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full transition ${
                activeTab === tab
                  ? "border border-white bg-white text-black font-semibold"
                  : "bg-[#2d2e4a] text-white hover:bg-blue-400"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ✅ แสดงเนื้อหาตาม Tab ที่เลือก */}
        {activeTab === "Dashboard" && <ProfileDashboard />}
        {activeTab === "Library" &&
          sections.map((section, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{section.title}</h3>
                <button className="text-sm text-gray-300 hover:text-white transition">
                  See All
                </button>
              </div>
              <div className="bg-[#2d2e4a] rounded-lg p-6 mt-3 flex flex-col items-center justify-center text-center shadow-lg">
                {section.icon}
                <h4 className="text-lg font-semibold mt-2">{section.message}</h4>
                <p className="text-sm text-gray-400">{section.subtext}</p>
              </div>
            </div>
          ))}
        {activeTab === "History" && (
          <div className="text-center text-gray-300">📜 History Tab Content</div>
        )}
        {activeTab === "Check-ins" && (
          <div className="text-center text-gray-300">✅ Check-ins Tab Content</div>
        )}
      </div>
    </div>
  );
}
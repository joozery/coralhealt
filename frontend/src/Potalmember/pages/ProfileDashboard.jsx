import React from "react";
import { FaCog, FaLock, FaShareAlt } from "react-icons/fa";

export default function ProfileDashboard() {
  return (
    <div className="text-white min-h-screen flex flex-col items-center">
      <div className="w-full max-w-screen-xl">
       

        {/* 🔒 Unlock Calm Premium */}
        <div className="bg-[#2d2e4a] p-4 rounded-lg flex items-center justify-center mb-6">
          <FaLock className="text-white text-lg mr-2" />
          <span className="text-white font-semibold">Unlock Calm Premium</span>
        </div>

        {/* 📊 My Stats */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">My Stats</h3>
          <div className="bg-[#2d2e4a] rounded-lg p-6 mt-3 flex flex-col items-center text-center shadow-lg">
            {/* Mindful Days Badge */}
            <div className="text-2xl font-bold mb-2">
              0
              <span className="text-sm font-light ml-2">Mindful Days</span>
            </div>

            {/* Stat Items */}
            <div className="flex justify-between w-full max-w-md mt-4">
              <div className="text-center">
                <p className="text-lg font-semibold">0</p>
                <p className="text-sm text-gray-300">Total Sessions</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">0</p>
                <p className="text-sm text-gray-300">Mindful Minutes</p>
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold">0 days</p>
                <p className="text-sm text-gray-300">Longest Streak</p>
              </div>
            </div>

            {/* 📤 Share My Stats Button */}
            <button className="mt-6 px-6 py-3 rounded-full border border-white text-white flex items-center space-x-2 hover:bg-white hover:text-black transition">
              <FaShareAlt />
              <span>Share My Stats</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
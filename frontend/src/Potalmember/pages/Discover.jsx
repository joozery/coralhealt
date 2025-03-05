import React from "react";
import { FaSearch, FaMusic, FaCircleNotch, FaVideo, FaLeaf, FaMoon } from "react-icons/fa";
import { MdSelfImprovement, MdOutlineLibraryMusic, MdGraphicEq, MdPsychology } from "react-icons/md";

// 📌 Import รูปจาก assets
import DailyCalm from "../../assets/DailyCalm.jpeg";
import DailyJay from "../../assets/DailyJay.jpeg";
import DailyTrip from "../../assets/DailyTrip.jpeg";

export default function Discover() {
  const categories = [
    { title: "Dailies", icon: <FaCircleNotch /> },
    { title: "Meditation", icon: <MdSelfImprovement /> },
    { title: "Music", icon: <MdOutlineLibraryMusic /> },
    { title: "Soundscapes", icon: <MdGraphicEq /> },
    { title: "Mindful Tools", icon: <FaLeaf /> },
    { title: "Videos", icon: <FaVideo /> },
    { title: "Reflections", icon: <MdPsychology /> },
    { title: "Sleep", icon: <FaMoon /> },
  ];

  const newItems = [
    { title: "5 Steps to Stronger Relationships", desc: "Wisdom • Jay Shetty", img: DailyCalm, isNew: true },
    { title: "Hiroto's Tree of Life", desc: "Sleep Story • Andi Hanako Rooney", img: DailyJay, isNew: true },
    { title: "432 Hz for Sleep", desc: "Playlist • Curated by Calm", img: DailyTrip, isNew: false },
  ];

  return (
    <div className="bg-gradient-to-b from-[#673391] to-[#080d2f] text-white min-h-screen flex flex-col items-center p-6">
      <div className="w-full max-w-screen-xl">
        {/* แถบค้นหา */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold mb-4">Discover</h2>
          <div className="relative">
            <FaSearch className="absolute left-4 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Title, narrator, artist, or topic"
              className="w-full p-3 pl-10 rounded-full bg-[#2d2e4a] text-white placeholder-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {/* หมวดหมู่ */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
    {categories.map((cat, index) => (
    <button
      key={index}
       className="flex items-center justify-center h-28 w-full rounded-lg border border-white bg-[#180729]/50 text-gray-300 text-lg hover:bg-[#180729] hover:border-blue-400 hover:text-white transition"
    >
      {cat.icon}
      <span className="ml-2">{cat.title}</span>
    </button>
  ))}
</div>

        {/* New & Noteworthy */}
        <div className="mb-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">New & Noteworthy</h3>
            <button className="text-sm text-gray-300 hover:text-white">See All</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {newItems.map((item, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-[#2d2e4a]">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                
                {/* 🔵 Badge "New" */}
                {item.isNew && (
                  <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    New
                  </div>
                )}

                {/* ข้อความใต้รูป */}
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
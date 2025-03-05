import React from "react";

// 📌 Import รูปจาก src/assets/
import Wonder from "../../assets/wonder.jpeg";
import FallingBack from "../../assets/FallingBacktoSleep.jpeg";
import BilateralStimulation from "../../assets/BilateralStimulation.png";
import DailyCalm from "../../assets/DailyCalm.jpeg";
import DailyJay from "../../assets/DailyJay.jpeg";
import DailyTrip from "../../assets/DailyTrip.jpeg";

// 📌 Import Icon (React Icons)
import { FaLock, FaPlay } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";

export default function Home() {
  const popularItems = [
    { title: "Wonder", desc: "Sleep Story • Matthew McConaughey", img: Wonder },
    { title: "Falling Back to Sleep", desc: "Dr. Eric López, Ph.D.", img: FallingBack },
    { title: "Bilateral Stimulation (EMDR) for Sleep", desc: "Playlist • Curated by Calm", img: BilateralStimulation },
    { title: "Daily Calm", desc: "An original, inspiring meditation every day.", img: DailyCalm },
    { title: "Daily Jay", desc: "A daily piece of wisdom to inspire you.", img: DailyJay },
    { title: "Daily Trip", desc: "A daily meditation adventure for everyone.", img: DailyTrip },
  ];

  const recommendedItems = [
    { title: "Solo Piano for Deep Sleep", category: "Playlist", duration: "", desc: "Curated by Calm", img: BilateralStimulation, locked: true },
    { title: "Daily Trip", category: "Meditation", duration: "9 min", desc: "Field of Presence", img: DailyTrip, locked: true },
    { title: "The Chest of Memories", category: "Sleep Story", duration: "30 min", desc: "Nichole Marie", img: Wonder, locked: true },
    { title: "Deep Sleep Release", category: "Meditation", duration: "", desc: "Release tension throughout your body", img: FallingBack, locked: true },
    { title: "Soothing the Body for Rest", category: "Meditation", duration: "46 min", desc: "Dr. Eric López, Ph.D.", img: DailyCalm, locked: false },
  ];

  return (
    <div className="bg-gradient-to-b from-[#673391] to-[#080d2f] text-white min-h-screen flex flex-col items-center p-6">
      <div className="w-full max-w-screen-xl">
        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold">Good Evening, Bonuz</h2>
          <button className="flex items-center text-sm text-gray-300 hover:text-white">
            See All <MdOutlineArrowForwardIos className="ml-1 text-xs" />
          </button>
        </div>

        {/* Popular on Calm */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Popular on Calm</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {popularItems.map((item, index) => (
              <div key={index} className="relative rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-[#2d2e4a]">
                <img src={item.img} alt={item.title} className="w-full h-48 object-cover" />
                <div className="absolute top-2 left-2 bg-black bg-opacity-50 rounded-full p-2">
                  <FaLock className="text-white text-xs" />
                </div>
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended for You */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold">Recommended for You</h3>
          <div className="flex flex-col space-y-4 mt-4">
            {recommendedItems.map((item, index) => (
              <div key={index} className="flex items-center bg-[#2d2e4a] rounded-lg p-4 shadow-md hover:bg-[#3a3b5f] transition duration-300">
                {/* รูปภาพ */}
                <div className="relative w-20 h-20 rounded-lg overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                  {/* 🔒 หรือ ▶ ไอคอน */}
                  <div className="absolute bottom-2 left-2 bg-black bg-opacity-50 rounded-full p-2">
                    {item.locked ? <FaLock className="text-white text-xs" /> : <FaPlay className="text-white text-xs" />}
                  </div>
                </div>

                {/* ข้อมูลด้านขวา */}
                <div className="ml-4 flex-1">
                  <p className="text-xs text-gray-300">{item.category} {item.duration && `• ${item.duration}`}</p>
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ปุ่ม Refresh Recommendations */}
        <div className="flex justify-center">
          <button className="w-full max-w-md py-3 border border-gray-400 rounded-full text-gray-300 hover:text-white hover:border-white transition">
            Refresh Recommendations
          </button>
        </div>
      </div>
    </div>
  );
}
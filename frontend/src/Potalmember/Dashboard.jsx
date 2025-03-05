import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar คงที่ ไม่หายไปเมื่อเปลี่ยน Route */}
      <div className="w-64 bg-[#0D1B2A] border-r border-gray-300">
        <Sidebar />
      </div>

      {/* ✅ Main Content เปลี่ยนไปตาม Route */}
      <div className="flex-1  bg-gray-100 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
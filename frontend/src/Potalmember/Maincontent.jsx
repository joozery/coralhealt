import React from "react";
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Sleep from "./pages/Sleep";
import Discover from "./pages/Discover";
import Profile from "./pages/Profile";
import Premium from "./pages/Premium";
import Scenes from "./pages/Scenes";
import GiftCalm from "./pages/GiftCalm";
import ToolsPage from "./pages/ToolsPage";

const Maincontent = () => {
  const location = useLocation(); // ดึง path ปัจจุบัน
  const currentPath = location.pathname; // เก็บ path

  // กำหนดเนื้อหาตาม path ที่เลือก
  const renderContent = () => {
    switch (currentPath) {
      case "/dashboard/tools": // ✅ เพิ่มเงื่อนไขให้รองรับ ToolsPage
        return <ToolsPage />;
      case "/dashboard/sleep":
        return <Sleep />;
      case "/dashboard/discover":
        return <Discover />;
      case "/dashboard/profile":
        return <Profile />;
      case "/dashboard/premium":
        return <Premium />;
      case "/dashboard/scenes":
        return <Scenes />;
      case "/dashboard/giftcalm":
        return <GiftCalm />;
      default:
        return <Home />; // หน้า Home เป็นค่าเริ่มต้น
    }
  };

  return (
    <div className="flex-1 p-6 bg-gray-100 overflow-auto">
      {renderContent()}
    </div>
  );
};

export default Maincontent;
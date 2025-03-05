import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Potalmember/Dashboard";
import Home from "./Potalmember/pages/Home";
import Sleep from "./Potalmember/pages/Sleep";
import Discover from "./Potalmember/pages/Discover";
import Profile from "./Potalmember/pages/Profile";
import Premium from "./Potalmember/pages/Premium";
import Scenes from "./Potalmember/pages/Scenes";
import GiftCalm from "./Potalmember/pages/GiftCalm";

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ เส้นทางของ Dashboard ใช้ <Outlet /> ภายใน */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="sleep" element={<Sleep />} />
          <Route path="discover" element={<Discover />} />
          <Route path="profile" element={<Profile />} />
          <Route path="premium" element={<Premium />} />
          <Route path="scenes" element={<Scenes />} />
          <Route path="giftcalm" element={<GiftCalm />} />
        </Route>

        {/* ✅ เส้นทางของเว็บไซต์หลัก */}
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}

export default App;
import React from "react";

export default function ToolCard({ tool, onClick }) {
  return (
    <div
      className="bg-white text-gray-900 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition cursor-pointer"
      onClick={onClick}
    >
      {/* ✅ ตรวจสอบว่าไอคอนถูกส่งมาหรือไม่ */}
      {tool.icon && <div className="flex justify-center mb-4">{tool.icon}</div>}
      <h3 className="text-lg font-semibold">{tool.title}</h3>
      <p className="text-gray-600 text-sm mt-2">{tool.description}</p>
    </div>
  );
}
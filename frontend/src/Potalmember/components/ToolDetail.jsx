import React from "react";

export default function ToolDetail({ tool }) {
  if (!tool.details) return null;

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-[#F7BEB7] mb-4">{tool.title} - Details</h2>

      {/* ✅ ใช้ `flex flex-wrap` ให้เรียงเป็นแถวเดียว และรองรับหลายขนาดหน้าจอ */}
      <div className="flex flex-wrap gap-4 justify-between">
        {tool.details.map((detail, i) => (
          <div key={i} className="flex flex-col items-center bg-gray-50 p-4 rounded-lg shadow-md w-[23%] min-w-[200px]">
            <div className="text-4xl mb-2">{detail.icon}</div>
            <h3 className="text-lg font-semibold text-center">{detail.name}</h3>
            <p className="text-gray-600 text-sm text-center">{detail.description}</p>
            <a
              href={detail.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-sm mt-2"
            >
              Play Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
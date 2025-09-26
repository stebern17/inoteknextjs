import React from "react";

// VisiMisiCard.jsx
export default function VisiMisiCard({ title, children }) {
  return (
    <div className="font-display h-full flex flex-col ">
      {/* Tab Judul */}
      <div className="bg-[#00408A] py-3 rounded-t-xl relative w-2/6">
        <h2 className="text-white font-bold md:text-6xl text-3xl tracking-wider text-center">
          {title}
        </h2>
      </div>

      {/* Isi Konten */}
      <div className="bg-[#00408A] text-white p-6 -mt-2 rounded-b-xl text-xl md:text-2xl rounded-tr-xl flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}

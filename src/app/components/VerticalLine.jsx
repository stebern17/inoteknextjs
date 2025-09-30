import React from "react";

export default function VerticalLine({ text }) {
  return (
    <div className="relative self-stretch items-center justify-center px-4 select-none hidden md:flex">
      {/* Garis vertikal */}
      <div className="absolute inset-y-0 left-1/2 w-px bg-[#0253AE]"></div>

      {/* Teks di tengah garis */}
      {text && (
        <span className="relative bg-white px-2 text-gray-600 font-medium">
          {text}
        </span>
      )}
    </div>
  );
}

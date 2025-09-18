"use client";

import React from "react";

function UspCard({ image, title, icon, reverse }) {
  return (
    <div className="w-full md:h-[400px] grid grid-cols-2 bg-gray-200 rounded-xl overflow-hidden shadow-lg font-display">
      {!reverse ? (
        <>
          {/* Gambar kiri */}
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-center object-cover"
            />
          </div>

          {/* Konten kanan */}
          <div className="flex flex-col justify-center items-center gap-6 p-6 text-center">
            <img
              src={icon}
              alt={`${title} icon`}
              className="md:size-28 size-20"
            />
            <h2 className="text-xs md:text-xl font-bold">{title}</h2>
          </div>
        </>
      ) : (
        <>
          {/* Konten kiri */}
          <div className="flex flex-col justify-center items-center gap-6 p-6 text-center">
            <img
              src={icon}
              alt={`${title} icon`}
              className="md:size-28 size-20"
            />
            <h2 className="text-xs md:text-xl font-bold">{title}</h2>
          </div>

          {/* Gambar kanan */}
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default UspCard;

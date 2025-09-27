"use client";

import React from "react";

function UspCard({ image, title, icon, reverse, desc }) {
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
              width={500}
              height={400}
            />
          </div>

          {/* Konten kanan */}
          <div className="flex flex-col justify-center items-center gap-6 p-6 text-center">
            <img
              src={icon}
              alt={`${title} icon`}
              className="md:size-28 size-20"
            />
            <div className="flex flex-col items-center gap-2 md:gap-0">
              <h2 className="text-xs md:text-xl font-bold">{title}</h2>
              <p className="text-xs md:text-sm">{desc.join(" | ")}</p>
            </div>
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
            <div className="flex flex-col items-center gap-2 md:gap-0">
              <h2 className="text-xs md:text-xl font-bold">{title}</h2>
              <p className="text-xs md:text-sm">{desc.join(" | ")}</p>
            </div>
          </div>

          {/* Gambar kanan */}
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover object-center"
              width={500}
              height={400}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default UspCard;

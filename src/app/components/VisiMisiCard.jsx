import React from "react";

// VisiMisiCard.jsx
export default function VisiMisiCard({ title, children, textAlign }) {
  return (
    <>
      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
        className="lg:block hidden"
      >
        <defs>
          <clipPath id="rounded-clip" clipPathUnits="objectBoundingBox">
            <path
              d="M0,0.05 
                     C0,0.02 0.02,0 0.05,0 
                     L0.3,0 
                     C0.33,0 0.35,0.02 0.35,0.05 
                     L0.35,0.11 
                     C0.35,0.14 0.37,0.16 0.4,0.16 
                     L0.95,0.16 
                     C0.98,0.16 1,0.18 1,0.21 
                     L1,0.95 
                     C1,0.98 0.98,1 0.95,1 
                     L0.05,1 
                     C0.02,1 0,0.98 0,0.95 
                     Z"
            />
          </clipPath>
        </defs>
      </svg>

      <div
        className="font-display md:h-full md:py-0 py-10 flex flex-col bg-[#00408A] rounded-3xl shadow-lg clip-rounded-lg"
        style={{
          clipPath: "url(#rounded-clip)",
        }}
      >
        {/* Tab Judul */}
        <div className="py-2 sm:py-3 rounded-t-xl relative lg:w-2/6">
          <h2 className="text-white ms-2 md:mt-5  font-bold text-3xl  md:text-4xl lg:text-6xl tracking-wider text-center">
            {title}
          </h2>
        </div>

        {/* Isi Konten */}
        <div
          className={`text-white p-3 sm:p-4 md:p-6 text-sm sm:text-base md:text-xl lg:text-2xl leading-relaxed ${textAlign}`}
        >
          {children}
        </div>
      </div>
    </>
  );
}

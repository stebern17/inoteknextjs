"use client";
import React from "react";

export default function LoadingScreen({ message = "Loading..." }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      aria-live="polite"
      aria-busy="true"
    >
      {/* translucent white + backdrop blur */}
      <div className="absolute inset-0 bg-white/70 backdrop-blur-md"></div>

      {/* content card */}
      <div className="relative z-10 flex flex-col items-center gap-4 rounded-2xl p-6 shadow-lg">
        {/* spinner */}
        <div
          className="inline-block w-14 h-14 rounded-full border-4 border-[#013774] border-t-transparent animate-spin"
          role="status"
          aria-label="Loading spinner"
        ></div>

        {/* message */}
        <p className="text-[#013774] text-lg font-medium">{message}</p>
      </div>
    </div>
  );
}

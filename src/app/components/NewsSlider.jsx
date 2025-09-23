"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef } from "react";

export default function NewsSlider({ children }) {
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Scroll Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory gap-2"
      >
        {children}
      </div>

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        aria-label="Scroll left"
        className="absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-white text-blue-600 p-3 rounded-full shadow hover:bg-blue-100"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        aria-label="Scroll right"
        className="absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-white text-blue-600 p-3 rounded-full shadow hover:bg-blue-100"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
}

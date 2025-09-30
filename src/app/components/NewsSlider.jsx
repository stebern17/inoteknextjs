"use client";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useRef, useEffect } from "react";

export default function NewsSlider({ children }) {
  const containerRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const firstCard = container.querySelector(".news-item");

    if (firstCard) {
      const containerWidth = container.offsetWidth;
      const cardWidth = firstCard.offsetWidth;

      // hitung jarak kiri elemen terhadap container
      const cardLeft = firstCard.offsetLeft;

      // target scroll supaya card ada di tengah container
      const scrollTo = cardLeft - containerWidth / 2 + cardWidth / 2;

      container.scrollTo({ left: scrollTo, behavior: "auto" });
    }

    const handleMouseDown = (e) => {
      isDown.current = true;
      startX.current = e.pageX - container.offsetLeft;
      scrollLeftStart.current = container.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown.current = false;
    };

    const handleMouseUp = () => {
      isDown.current = false;
    };

    const handleMouseMove = (e) => {
      if (!isDown.current) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX.current) * 2; //scroll-fast
      container.scrollLeft = scrollLeftStart.current - walk;
    };

    container.addEventListener("mousedown", handleMouseDown);
    container.addEventListener("mouseleave", handleMouseLeave);
    container.addEventListener("mouseup", handleMouseUp);
    container.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="relative"
      onMouseDown={() => (containerRef.current.style.cursor = "grabbing")}
      onMouseUp={() => (containerRef.current.style.cursor = "grab")}
    >
      {/* Scroll Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory gap-2 px-12"
      >
        {children}
      </div>

      {/* Left Button */}
      <button
        onClick={scrollLeft}
        aria-label="Scroll left"
        className="cursor-pointer md:flex hidden absolute top-1/2 left-4 -translate-y-1/2 z-20 bg-white text-blue-600 p-3 rounded-full shadow hover:bg-blue-100"
      >
        <FaChevronLeft size={20} />
      </button>

      {/* Right Button */}
      <button
        onClick={scrollRight}
        aria-label="Scroll right"
        className="cursor-pointer md:flex hidden absolute top-1/2 right-4 -translate-y-1/2 z-20 bg-white text-blue-600 p-3 rounded-full shadow hover:bg-blue-100"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
}

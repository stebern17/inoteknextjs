"use client";

import { useState } from "react";

const ImageMagnifier = ({
  src,
  className,
  alt,
  magnifierHeight = 150,
  magnifierWidth = 150,
  zoomLevel = 3,
}) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [[x, y], setXY] = useState([0, 0]);

  const mouseEnter = (e) => {
    const el = e.currentTarget;
    const { width, height } = el.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  };

  const mouseLeave = () => {
    setShowMagnifier(false);
  };

  const mouseMove = (e) => {
    const el = e.currentTarget;
    const { top, left } = el.getBoundingClientRect();

    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    setXY([x, y]);
  };

  return (
    <div className=" relative inline-block w-[60%]">
      <img
        src={src}
        className={`${className} ${
          showMagnifier ? "cursor-crosshair" : "cursor-pointer"
        }`}
        alt={alt}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        onMouseMove={mouseMove}
      />

      {/* Magnifier lens */}
      <div
        className={`absolute pointer-events-none border border-gray-100 rounded-full shadow-lg transition-opacity duration-150 ${
          showMagnifier ? "opacity-100" : "opacity-0"
        }`}
        style={{
          height: `${magnifierHeight}px`,
          width: `${magnifierWidth}px`,
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifierWidth / 2}px`,
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,
          backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      />
    </div>
  );
};

export default ImageMagnifier;

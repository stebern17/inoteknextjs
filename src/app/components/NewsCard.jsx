"use client";

import React from "react";

function NewsCard({ category, title, image, link }) {
  return (
    <div className="relative font-display w-full lg:w-[500px] lg:px-6 px-2">
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] mx-auto object-cover object-center rounded-xl"
        />
      </div>

      {/* Content overlay */}
      <div className="relative -mt-20 sm:-mt-24 md:-mt-25 z-10  sm:px-6 md:px-5">
        <div className="p-4 sm:p-5 flex flex-col justify-between gap-3 w-[70%] sm:w-[90%] md:w-[80%] h-[320px] sm:h-[360px] md:h-[400px] bg-white mx-auto rounded-xl shadow-lg">
          <div>
            {/* Category */}
            <span className="text-gray-400 font-semibold text-base lg:text-lg">
              {category}
            </span>

            {/* Title */}
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 leading-snug mt-1">
              {title}
            </h3>
          </div>
          {/* Button */}
          <a
            href={link}
            className="rounded-xl inline-block text-blue-600 font-medium text-sm md:text-lg border border-blue-600 px-3 py-1 hover:bg-blue-600 hover:text-white transition-colors duration-200 w-full text-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Baca Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;

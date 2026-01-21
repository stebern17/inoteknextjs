"use client";

export default function NewsCard({ category, title, image, link }) {
  return (
    <div className="relative font-display w-full">
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] mx-auto object-cover object-center rounded-xl"
          width={500}
          height={300}
        />
      </div>

      {/* Overlay */}
      <div className="relative -mt-16 sm:-mt-20 z-10 px-3 sm:px-6">
        <div className="p-4 sm:p-5 flex flex-col justify-between gap-3 w-full max-w-[520px] min-h-[260px] sm:min-h-[300px] bg-white mx-auto rounded-xl shadow-lg">
          <div>
            <span className="text-gray-500 font-semibold text-base lg:text-lg">
              {category}
            </span>
            <h3 className="text-xl lg:text-2xl font-bold text-gray-800 leading-snug mt-1">
              {title}
            </h3>
          </div>
          <a
            href={link}
            className="rounded-xl inline-block text-blue-600 font-medium text-sm md:text-lg border border-blue-600 px-3 py-1 hover:bg-blue-600 hover:text-white transition-all duration-200 w-full text-center active:scale-95 "
            rel="noopener noreferrer"
          >
            Baca Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Carousel } from "flowbite-react";
import React from "react";

const crslitem = [
  { src: "/images/crsl1.jpg", alt: "Slide 1" },
  { src: "/images/crsl2.jpg", alt: "Slide 2" },
  { src: "/images/crsl3.jpg", alt: "Slide 3" },
  { src: "/images/crsl4.jpg", alt: "Slide 4" },
];

function CarouselSection() {
  return (
    // pastikan section relatif agar posisi absolute logo bekerja terhadap section ini
    <section className="relative">
      <Carousel slideInterval={5000} className="lg:h-screen md:h-96 h-64">
        {crslitem.map((item, index) => (
          <div key={index} className="w-full h-full relative">
            <img
              src={item.src}
              alt={item.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Carousel>

      <img
        src="/images/LogoHeader.png"
        alt="Header Nichiha Inotek"
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-24 h-auto
          md:w-48 md:h-auto
          lg:w-96 lg:h-auto lg:top-1/4 lg:-translate-y-0
          pointer-events-none
        "
      />
    </section>
  );
}

export default CarouselSection;

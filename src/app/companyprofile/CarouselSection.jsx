"use client";

import { Carousel, createTheme } from "flowbite-react";
import React from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const crslitem = [
  { src: "/nichiha/images/crsl1.jpg", alt: "Slide 1" },
  { src: "/nichiha/images/crsl2.jpg", alt: "Slide 2" },
  { src: "/nichiha/images/crsl3.jpg", alt: "Slide 3" },
  { src: "/nichiha/images/crsl4.jpg", alt: "Slide 4" },
];

const carouselTheme = createTheme({
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth scrollbar-hide rounded-none",
    snap: "snap-x",
  },

  indicators: {
    wrapper: "hidden",
  },
});

function CarouselSection() {
  return (
    // bissa min h-screen
    <section className="relative">
      <Carousel
        slideInterval={5000}
        leftControl={
          <IoIosArrowBack className="text-white opacity-60 size-10 hidden lg:block" />
        }
        rightControl={
          <IoIosArrowForward className="text-white opacity-60 size-10 hidden lg:block" />
        }
        className="h-screen"
        theme={carouselTheme}
      >
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

      {/* <img
        src="/images/LogoHeader.png"
        alt="Header Nichiha Inotek"
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-24 h-auto
          md:w-48 md:h-auto
          lg:w-96 lg:h-auto lg:top-1/4 lg:-translate-y-0
          pointer-events-none
        "
      /> */}
    </section>
  );
}

export default CarouselSection;

"use client";

import React, { useState, useEffect } from "react";
import { HR } from "flowbite-react";
import ImageMagnifier from "../components/ImageMagnifier";
import { motion } from "motion/react";

function ProductSection() {
  const [magnifierSize, setMagnifierSize] = useState({
    width: 150,
    height: 150,
  });

  useEffect(() => {
    const updateMagnifierSize = () => {
      if (window.innerWidth < 1024) {
        setMagnifierSize({ width: 90, height: 90 });
      } else {
        setMagnifierSize({ width: 150, height: 150 });
      }
    };

    window.addEventListener("resize", updateMagnifierSize);
    updateMagnifierSize(); // panggil pertama kali

    return () => window.removeEventListener("resize", updateMagnifierSize);
  }, []);

  return (
    <motion.section
      className="lg:min-h-screen bg-gray-100 py-6 font-display"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.5, once: true }}
      transition={{ type: "spring", stiffness: 90, damping: 10 }}
    >
      <div className="content md:flex grid-cols-1 ">
        <div className="md:w-[50%] w-full flex justify-center">
          <ImageMagnifier
            src="/images/EXSeriesImage.png"
            className={"w-full"}
            magnifierHeight={magnifierSize.height}
            magnifierWidth={magnifierSize.width}
            zoomLevel={2}
            alt="Sample Image"
          />
        </div>
        <div className="flex flex-col md:w-[50%] w-full space-y-4">
          <img
            src="/images/LogoNichihaExSeries.png"
            alt="LogoNichiha"
            className="w-[30%]"
          />
          <div className="space-y-4">
            <p className="size-lg font-bold">
              Panel NICHIHA EX Series merupakan produk berbahan semen yang
              dikombinasikan dengan partikel kayu berserat, lalu dicetak dengan
              tekstur permukaan khusus.
            </p>
            <HR />
            <p className="size-lg">
              Panel ini tersedia dengan ukuran panjang standar{" "}
              <span className="font-bold">3030 mm</span> atau{" "}
              <span className="font-bold">1820 mm</span>, dengan lebar efektif
              penutup <span className="font-bold">455 mm</span> dan ketebalan{" "}
              <span className="font-bold">16</span>,{" "}
              <span className="font-bold">18</span>, atau{" "}
              <span className="font-bold">21 mm</span>.
            </p>
          </div>
          <img
            src="/images/ExSeries3030.png"
            alt="ExSeries3030"
            className="w-[80%] h-auto"
          />
        </div>
      </div>
    </motion.section>
  );
}
export default ProductSection;

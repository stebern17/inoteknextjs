"use client";

import React from "react";
import { motion } from "motion/react";
import CarouselSection from "./CarouselSection";
import CompanyIntroduce from "./CompanyIntroduce";
import VisiMisiSection from "./VisiMisiSection";
import InotekSection from "./InotekSection";

export default function CompanyProfile() {
  return (
    <>
      <CarouselSection />
      <CompanyIntroduce />
      <div className="overflow-x-hidden">
        {/* Muncul dari kiri */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.1, once: true }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          <VisiMisiSection />
        </motion.div>

        {/* Muncul dari kanan */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.1, once: true }}
          transition={{ duration: 0.3, ease: "easeIn" }}
        >
          <InotekSection />
        </motion.div>
      </div>
    </>
  );
}

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
      <VisiMisiSection />
      <InotekSection />
    </>
  );
}

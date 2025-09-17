"use client";

import React from "react";
import CarouselSection from "./CarouselSection";
import CompanyIntroduce from "./CompanyIntroduce";
import VisiMisiSection from "./VisiMisiSection";
import InotekSection from "./InotekSection";

export default function CompanyProfile() {
  return (
    <>
      <CarouselSection />
      <CompanyIntroduce />
      <div>
        <VisiMisiSection />
        <InotekSection />
      </div>
    </>
  );
}

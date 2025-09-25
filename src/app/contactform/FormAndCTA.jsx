import React from "react";
import FormSection from "./FormSection";
import CTASection from "./CTASection";
import VerticalLine from "../components/VerticalLine";

export default function ContactandCTA() {
  return (
    <>
      <div className="flex flex-col gap-6 justify-center w-full border-2 border-gray-300 p-16 rounded-xl font-display">
        <div className="self-start">
          <h1 className="text-2xl font-semibold text-[#1E40AF]">
            HUBUNGI KAMI UNTUK INFORMASI DAN PEMESANAN
          </h1>
        </div>
        <section className="flex w-full justify-between items-center gap-24">
          <FormSection />
          <VerticalLine text="Atau" />
          <CTASection />
        </section>
      </div>
    </>
  );
}

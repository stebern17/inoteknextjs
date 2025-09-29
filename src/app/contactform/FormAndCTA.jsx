import React from "react";
import FormSection from "./FormSection";
import CTASection from "./CTASection";

export default function ContactandCTA() {
  return (
    <>
      <div className="flex flex-col gap-6 justify-center w-full rounded-xl font-display">
        <div className="self-start">
          <h1 className="text-4xl font-semibold text-[#1E40AF]">
            HUBUNGI KAMI
          </h1>
          <p className="text-[#1E40AF] text-2xl max-w-[50%] text-justify">
            Silakan isi formulir di bawah ini untuk menghubungi kami. Kami siap
            membantu Anda dengan pertanyaan atau kebutuhan terkait produk dan
            layanan kami.
          </p>
        </div>
        <section className="grid grid-cols-1 md:grid-cols-2 w-full justify-between items-center gap-8">
          <FormSection />
          <CTASection />
        </section>
      </div>
    </>
  );
}

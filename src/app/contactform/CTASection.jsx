import React from "react";
import AdminButton from "../components/AdminButton";

export default function CTASection() {
  return (
    <section className="h-full w-full flex flex-col self-stretch gap-8 bg-[#1E40AF] p-8 rounded-4xl">
      <div>
        <div>
          <h2 className="text-center font-semibold text-4xl text-white">
            PT INOTEK KARYA MANDIRI
          </h2>
          <p className="text-center text-white text-span tracking-wider">
            Jl. Kenanga 256 Maguwoharjo Depok, Sleman
          </p>
        </div>
        <div>
          <h3 className="text-center font-semibold text-xl text-white">
            Jam Kerja
          </h3>
          <p className="text-center text-white">Senin - Jumat, 08.00 - 17.00</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center w-full gap-4">
        <AdminButton link="#" text="Admin 1" className="w-[30%] text-xl" />
        <AdminButton link="#" text="Admin 2" className="w-[30%] text-xl" />
        <AdminButton link="#" text="Admin 3" className="w-[30%] text-xl" />
      </div>
    </section>
  );
}

import React from "react";
import { Button, createTheme } from "flowbite-react";

export default function CTASection() {
  const buttonTheme = createTheme({
    base: "w-[80%] text-center",
    color: {
      default: "bg-green-800 hover:bg-green-500 text-white font-semibold",
    },
  });
  return (
    <section className="w-full flex flex-col self-stretch gap-8">
      <div>
        <div>
          <h2 className="text-center font-semibold text-2xl text-[#1E40AF]">
            PT INOTEK KARYA MANDIRI
          </h2>
          <p className="text-center text-gray-600">
            Distributor Resmi Nasional NICHIHA di Indonesia
          </p>
        </div>
        <div>
          <h3 className="text-center font-semibold text-xl text-[#1E40AF]">
            Jam Kerja
          </h3>
          <p className="text-center text-gray-600">
            Senin - Jumat, 08.00 - 17.00
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <Button theme={buttonTheme}>Admin 1</Button>
        <Button theme={buttonTheme}>Admin 2</Button>
        <Button theme={buttonTheme}>Admin 3</Button>
      </div>
    </section>
  );
}

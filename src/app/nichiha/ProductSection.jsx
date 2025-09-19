import React from "react";
import { HR } from "flowbite-react";
import ImageMagnifier from "../components/ImageMagnifier";

function ProductSection() {
  return (
    <section className="lg:min-h-screen bg-gray-100 py-6 font-display">
      <div className="content md:flex grid-cols-1 ">
        <div className="md:w-[50%] w-full flex justify-center">
          <ImageMagnifier
            src="/images/EXSeriesImage.png"
            className={"w-full"}
            magnifierHeight={100}
            magnifierWidth={100}
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
    </section>
  );
}
export default ProductSection;

import React from "react";
import { List, ListItem } from "flowbite-react";
import { FaCircle } from "react-icons/fa";

function VisiMisiSection() {
  const misiList = {
    [1]: "Menyediakan produk fasad berkualitas tinggi dengan teknologi terbaik",
    [2]: "Mengedepankan desain modern yang sesuai tren arsitektur",
    [3]: "Memberikan layanan distribusi profesional dan responsif",
    [4]: "Menjalin kemitraan jangka panjang dengan arsitek, developer, dan kontraktor",
    [5]: "Berkomitmen pada keberlanjutan dan nilai tambah bangunan",
  };
  return (
    <section className="content flex flex-col lg:flex-row font-display bg-[#0253AE] text-white justify-center gap-10 w-full lg:py-24 p-6">
      <div className="flex flex-col gap-2">
        <h2 className="text-xl md:text-5xl md:text-left text-center font-bold mx-auto">
          Visi
        </h2>
        <p className="text-center md:text-xl text-base my-auto">
          Menjadi perusahaan distribusi terdepan dalam penyediaan material
          dinding eksterior inovatif dan berestetika di Indonesia
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-xl md:text-5xl md:text-left text-center font-bold mx-auto">
          Misi
        </h2>
        <List>
          {Object.keys(misiList).map((key) => (
            <ListItem
              key={key}
              className="text-white flex gap-2 text-justify md:text-xl text-base"
              icon={FaCircle}
            >
              <p>{misiList[key]}</p>
            </ListItem>
          ))}
        </List>
      </div>
    </section>
  );
}
export default VisiMisiSection;

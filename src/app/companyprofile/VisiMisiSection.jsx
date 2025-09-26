import React from "react";
import { List, ListItem } from "flowbite-react";
import { FaCircle } from "react-icons/fa";
import VisiMisiCard from "../components/VisiMisiCard";

function VisiMisiSection() {
  const misiList = {
    [1]: "Menyediakan produk fasad berkualitas tinggi dengan teknologi terbaik",
    [2]: "Mengedepankan desain modern yang sesuai tren arsitektur",
    [3]: "Memberikan layanan distribusi profesional dan responsif",
    [4]: "Menjalin kemitraan jangka panjang dengan arsitek, developer, dan kontraktor",
    [5]: "Berkomitmen pada keberlanjutan dan nilai tambah bangunan",
  };
  return (
    <section className="content grid grid-cols-1 lg:grid-cols-2 items-stretch gap-10 py-5 min-h-[50vh]">
      <VisiMisiCard title="Visi">
        <p>
          Menjadi perusahaan distribusi terdepan dalam penyediaan material
          dinding eksterior inovatif dan berestetika di Indonesia
        </p>
      </VisiMisiCard>

      <VisiMisiCard title="Misi">
        <List className="list-disc list-inside space-y-2">
          {Object.entries(misiList).map(([key, value]) => (
            <ListItem
              key={key}
              icon={FaCircle}
              theme={{ icon: "me-2 h-2 w-2" }}
              className="text-white flex gap-2"
            >
              <p>{value}</p>
            </ListItem>
          ))}
        </List>
      </VisiMisiCard>
    </section>
  );
}
export default VisiMisiSection;

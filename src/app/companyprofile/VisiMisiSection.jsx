import React from "react";
import { List, ListItem } from "flowbite-react";
import { FaCircle } from "react-icons/fa";
import VisiMisiCard from "../components/VisiMisiCard";
import { motion } from "motion/react";

function VisiMisiSection() {
  const misiList = {
    [1]: "Menyediakan produk fasad berkualitas tinggi dengan teknologi terbaik",
    [2]: "Mengedepankan desain modern yang sesuai tren arsitektur",
    [3]: "Memberikan layanan distribusi profesional dan responsif",
    [4]: "Menjalin kemitraan jangka panjang dengan arsitek, developer, dan kontraktor",
    [5]: "Berkomitmen pada keberlanjutan dan nilai tambah bangunan",
  };
  return (
    <section
      id="visimisi"
      className="content grid grid-cols-1 lg:grid-cols-2 gap-10 py-5 md:min-h-[70vh]"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ type: "spring", stiffness: 90, damping: 10 }}
      >
        <VisiMisiCard title="Visi" textAlign="text-center lg:text-justify">
          <p>
            Menjadi perusahaan distribusi terdepan dalam penyediaan material
            dinding eksterior inovatif dan berestetika di Indonesia
          </p>
        </VisiMisiCard>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ amount: 0.3, once: true }}
        transition={{ type: "spring", stiffness: 90, damping: 10 }}
      >
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
      </motion.div>
    </section>
  );
}
export default VisiMisiSection;

"use client";
import { React, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Dropdown, DropdownItem } from "flowbite-react";
import DistributorCard from "@/app/components/DistributorCard";

export async function getDistributors() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/distributors?populate=*`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Gagal fetch data");
  const data = await res.json();

  return data.data.map((item) => ({
    id: item.id,
    name: item.namadistributor,
    address: item.alamat,
    phone: item.phone,
    email: item.email,
    website: item.website,
    city: item.city,
  }));
}
export default function DistributorSection() {
  const [distributors, setDistributors] = useState([]);

  useEffect(() => {
    async function fetchDistributors() {
      const data = await getDistributors();
      setDistributors(data);
    }
    fetchDistributors();
  }, []);

  const [selectedCity, setSelectedCity] = useState("Pilih Kota ....");

  const uniqueCities = ["Semua", ...new Set(distributors.map((d) => d.city))];

  const filteredDistributors =
    selectedCity === "Semua" || selectedCity === "Pilih Kota ...."
      ? distributors
      : distributors.filter((d) => d.city === selectedCity);

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
    exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <section className="min-h-screen content flex flex-col gap-5 w-full my-10 font-display">
      <h1 className="font-semibold text-3xl text-[#0253AE]">
        Distributor Terdekat
      </h1>
      <div className="flex gap-4">
        <Dropdown
          label={selectedCity}
          className="bg-white border-[#0253AE] border text-[#0253AE] hover:text-white w-64 justify-between"
        >
          {uniqueCities.map((city) => (
            <DropdownItem key={city} onClick={() => setSelectedCity(city)}>
              {city}
            </DropdownItem>
          ))}
        </Dropdown>
      </div>
      <motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        <AnimatePresence>
          {filteredDistributors.map((distributor) => (
            <motion.div
              key={distributor.name}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout // Properti penting untuk menganimasikan perpindahan posisi
            >
              <DistributorCard
                name={distributor.name}
                address={distributor.address}
                phone={distributor.phone}
                email={distributor.email}
                website={distributor.website}
                city={distributor.city}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

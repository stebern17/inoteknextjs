"use client";

import React from "react";
import { motion } from "motion/react";
import UspCard from "../components/UspCard";

const uspData = [
  {
    title: "Premium Japanese Standard",
    icon: "/icons/premium-quality.png",
    image: "/images/PremiumJapanese.jpg",
    desc: ["Jaminan Mutu", "Presisi & Kontrol Kulitas Tinggi"],
  },

  {
    title: "High-End Design",
    icon: "/icons/modern-house.png",
    image: "/images/HighEnd.jpg",
    desc: ["Material Kuat", "Awet & Tahan Lama"],
  },
  {
    title: "High-Durability Material",
    icon: "/icons/reliability.png",
    image: "/images/HighDur.jpg",
    desc: ["Tahan Hujan", "Tahan Jamur", "Anti Rayap"],
  },
  {
    title: "Easy Maintenance",
    icon: "/icons/house.png",
    image: "/images/EasyMaintenance.jpg",
    desc: ["Motif Eksklusif & Beragam", "Tampilan Premium & Modern"],
  },
  {
    title: "Easy Installation",
    icon: "/icons/easy-installation.png",
    image: "/images/fireresistant.png",
    desc: ["Tahan Api", "Standar Keamanan Bangunan"],
  },
];

function UspSection() {
  return (
    <section id="keunggulan" className="content grid grid-cols-1 gap-12 w-full">
      {uspData.map((usp, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0,
            x: index % 2 === 0 ? -150 : 150, // zigzag awal
          }}
          whileInView={{
            opacity: 1,
            x: 0, // posisi normal
          }}
          exit={{
            opacity: 0,
            x: index % 2 === 0 ? 150 : -150, // zigzag keluar
          }}
          viewport={{ amount: 0.3 }}
          transition={{
            type: "spring",
            stiffness: 40,
            damping: 10,
          }}
        >
          <UspCard
            image={usp.image}
            title={usp.title}
            icon={usp.icon}
            // desc={usp.desc}
            reverse={index % 2 !== 0}
          />
        </motion.div>
      ))}
    </section>
  );
}

export default UspSection;

"use client";

import React from "react";
import { motion } from "motion/react";
import UspCard from "../components/UspCard";

const uspData = [
  {
    title: "Premium Japanese Standard",
    icon: "/icons/QualityIcon.png",
    image: "/images/PremiumJapanese.png",
  },
  {
    title: "Ease of Installation & Maintenance",
    icon: "/icons/MaintenanceIcon.png",
    image: "/images/Maintenance.png",
  },
  {
    title: "High-Durability Material",
    icon: "/icons/DurabilityIcon.png",
    image: "/images/Eco.png",
  },
  {
    title: "Any Weather Product",
    icon: "/icons/WeatherIcon.png",
    image: "/images/Weather.png",
  },
  {
    title: "No Mortar, No Mess",
    icon: "/icons/NomeshIcon.png",
    image: "/images/Nomesh.png",
  },
];

function UspSection() {
  return (
    <section className="content grid grid-cols-1 gap-12 w-full">
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
            reverse={index % 2 !== 0}
          />
        </motion.div>
      ))}
    </section>
  );
}

export default UspSection;

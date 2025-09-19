"use client";

import React from "react";
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
        <UspCard
          key={index}
          image={usp.image}
          title={usp.title}
          icon={usp.icon}
          reverse={index % 2 !== 0}
        />
      ))}
    </section>
  );
}
export default UspSection;

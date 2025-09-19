"use client";

import React from "react";
import UspCard from "../components/UspCard";

const uspData = [
  {
    title: "Premium Japanese Standard",
    icon: "nichiha/icons/QualityIcon.png",
    image: "nichiha/images/PremiumJapanese.png",
  },
  {
    title: "Ease of Installation & Maintenance",
    icon: "nichiha/icons/MaintenanceIcon.png",
    image: "nichiha/images/Maintenance.png",
  },
  {
    title: "Sustainable & Eco-Friendly Material",
    icon: "nichiha/icons/EcoIcon.png",
    image: "nichiha/images/Eco.png",
  },
  {
    title: "Any Weather Product",
    icon: "nichiha/icons/WeatherIcon.png",
    image: "nichiha/images/Weather.png",
  },
  {
    title: "No Mortar, No Mess",
    icon: "nichiha/icons/NomeshIcon.png",
    image: "nichiha/images/Nomesh.png",
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

"use client";
import { motion } from "motion/react";
import { FaArrowLeft } from "react-icons/fa";

export default function BackButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="self-start"
    >
      <a
        href="/product"
        className="flex items-center gap-2 text-[#0253AE] font-medium"
      >
        <FaArrowLeft />
        Back to Products
      </a>
    </motion.button>
  );
}

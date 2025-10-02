"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AdminButton({ link, text, className }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white relative text-[#1E40AF] font-display text-center rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 py-[14px] ${className}`}
      whileHover={{ scale: 1.05 }}
    >
      <div className="absolute rounded-full border p-2 -top-[1px] -left-3 border-[#1E40AF] bg-white">
        <FaWhatsapp stroke="#1E40AF" className="size-10" />
      </div>
      {text}
    </motion.a>
  );
}

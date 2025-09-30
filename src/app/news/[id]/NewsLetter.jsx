"use client";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function NewsLetter() {
  return (
    <>
      <section className="content flex flex-col items-center justify-center mb-10 min-h-[70vh] font-display gap-26">
        <div className="flex flex-col items-center text-center mb-6 gap-4">
          <h3 className="text-center text-4xl font-semibold text-[#0253AE]">
            Subscribe to our Newsletter
          </h3>
          <p className="text-gray-600 w-full md:max-w-[70%] md:text-lg text-sm  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsum
            laudantium, ab velit asperiores harum similique a quos aliquam enim
            est temporibus dolore non, quam ipsam animi, iure veritatis
            molestiae quo repellat! Tenetur
          </p>
        </div>
        <form action="submit" className="w-full max-w-lg flex border-b p-2">
          <input
            type="email"
            id="newslettermail"
            placeholder="Enter your email address"
            className="border-none outline-none flex-1 text-[#0253AE] placeholder:text-[#0253AE] font-medium"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.2 }}
            className="cursor-pointer"
          >
            <FaArrowRightLong size={25} className="text-[#0253AE]" />
          </motion.button>
        </form>
      </section>
    </>
  );
}

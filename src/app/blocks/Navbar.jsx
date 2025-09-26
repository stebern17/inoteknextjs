"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "flowbite-react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "motion/react";

function NavbarHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menus = [
    { label: "BERANDA", path: "/nichiha" },
    { label: "PROFIL PERUSAHAAN", path: "/companyprofile" },
    { label: "PRODUK", path: "/product" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white text-[#013774]">
      <div className="content mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/nichiha">
          <img
            src="/logo-inotek.svg"
            alt="Inotek Karya Mandiri"
            className="lg:h-10 h-8"
          />
        </Link>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex md:space-x-8 lg:space-x-16 font-display text-lg font-medium">
          {menus.map((menu) => (
            <motion.li
              key={menu.path}
              whileHover={{ scale: 1.2 }}
              transition={{
                duration: 0.2,
                ease: "easeIn",
              }}
              whileTap={{ scale: 0.8 }}
            >
              <Link
                href={menu.path}
                className={`${
                  pathname === menu.path
                    ? "text-[#0253AE] font-bold"
                    : "hover:text-[#0253AE]"
                }`}
              >
                {menu.label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Button Desktop */}
        <Link href="/contactform" className="hidden lg:block">
          <motion.div
            className="rounded-xl font-display font-bold py-2 px-4 text-lg tracking-widest text-white bg-[#0F8F36] cursor-pointer text-center"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#074D1D",
            }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            HUBUNGI KAMI
          </motion.div>
        </Link>

        {/* Hamburger (Mobile) */}
        <button className="lg:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobileMenu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50"
            style={{
              maxHeight: "calc(100vh - 4.5rem)",
              overflowY: "auto",
            }}
          >
            <ul className="flex flex-col items-center space-y-4 py-6 font-display text-lg font-medium">
              {menus.map((menu) => (
                <motion.li
                  key={menu.path}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={menu.path}
                    onClick={() => setIsOpen(false)}
                    className={`${
                      pathname === menu.path
                        ? "text-[#0253AE] font-semibold border-b-2 border-[#0253AE]"
                        : "hover:text-[#0253AE]"
                    }`}
                  >
                    {menu.label}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="block rounded-xl font-display font-bold py-2 px-4 text-lg tracking-widest text-white bg-[#0F8F36] cursor-pointer text-center"
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Link href="/contactform" className="w-full h-full block">
                    HUBUNGI KAMI
                  </Link>
                </motion.div>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default NavbarHeader;

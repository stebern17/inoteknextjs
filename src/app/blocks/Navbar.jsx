"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "flowbite-react";
import { FaBars, FaTimes } from "react-icons/fa";

function NavbarHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const menus = [
    { label: "BERANDA", path: "/" },
    { label: "COMPANY PROFILE", path: "/companyprofile" },
    { label: "PRODUK", path: "/product" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white text-[#013774]">
      <div className="content mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <img
          src="/logo-inotek.svg"
          alt="Inotek Karya Mandiri"
          className="lg:h-12 h-8"
        />

        {/* Menu Desktop */}
        <ul className="hidden lg:flex md:space-x-8 lg:space-x-16 font-display text-xl font-medium">
          {menus.map((menu) => (
            <li
              key={menu.path}
              className="hover:scale-110 transition duration-300"
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
            </li>
          ))}
        </ul>

        {/* Button Desktop */}
        <div className="hidden lg:block">
          <Button className="!bg-[#0F8F36] hover:!bg-[#074D1D] rounded-xl font-display font-bold py-2 px-4 text-lg tracking-widest hover:scale-110 transition duration-300 ease-in-out text-white">
            HUBUNGI KAMI
          </Button>
        </div>

        {/* Hamburger (Mobile) */}
        <button className="lg:hidden text-2xl" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed w-full bg-white shadow-lg">
          <ul className="flex flex-col items-center space-y-4 py-6 font-display text-lg font-medium">
            {menus.map((menu) => (
              <li key={menu.path}>
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
              </li>
            ))}
            <li>
              <Button className="!bg-[#0F8F36] hover:!bg-[#074D1D] rounded-xl font-display font-medium py-2 px-4 text-lg transition duration-300">
                HUBUNGI KAMI
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default NavbarHeader;

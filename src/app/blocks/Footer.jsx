"use client";

import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#E2E2E2] py-10 px-6 font-display">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Logo */}
        <div className="col-span-1 flex flex-col gap-4">
          <img
            src="/logo-inotek.svg"
            alt="Inotek Karya Mandiri"
            className="w-40 h-auto"
          />
          <h2 className="text-xl font-bold text-[#0253AE]">
            PT INOTEK KARYA MADIRI
          </h2>
          <p className="text-gray-700 text-sm">
            Distributor Resmi Nasional NICHIHA di Indonesia
          </p>
          <p className="text-gray-700 text-sm">
            Jl. Kenanga 256, Maguwoharjo, Depok, Sleman, Yogyakarta
          </p>
        </div>

        {/* Kontak */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-[#0253AE]">Kontak</h2>
          <div className="flex items-center gap-2">
            <img src="/icons/Email.svg" alt="email" className="w-6 h-6" />
            <p className="text-sm">info@inotekkaryamandiri.com</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/icons/TelponIcon.svg" alt="Phone" className="w-6 h-6" />
            <p className="text-sm">(0274) 4332395</p>
          </div>
          <div className="flex items-center gap-2">
            <img src="/icons/Whatsapp.svg" alt="Whatsapp" className="w-6 h-6" />
            <p className="text-sm">0851 6884 2909</p>
          </div>
        </div>

        {/* Perusahaan */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-[#0253AE]">Perusahaan</h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link
                href="/companyprofile"
                className="inline-block hover:scale-110 transition-transform duration-300"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href="/companyprofile"
                className="inline-block hover:scale-110 transition-transform duration-300"
              >
                Visi & Misi
              </Link>
            </li>
            <li>
              <Link
                href="/companyprofile"
                className="inline-block hover:scale-110 transition-transform duration-300"
              >
                Budaya
              </Link>
            </li>
          </ul>
        </div>

        {/* Produk */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-[#0253AE]">Produk</h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link
                href="/companyprofile"
                className="inline-block hover:scale-110 transition-transform duration-300"
              >
                Produk Kami
              </Link>
            </li>
            <li>
              <Link
                href="/companyprofile"
                className="inline-block hover:scale-110 transition-transform duration-300"
              >
                Keunggulan
              </Link>
            </li>
            <li>
              <Link
                href="/companyprofile"
                className="inline-block hover:scale-110 transition-transform duration-300"
              >
                EX Series 1820
              </Link>
            </li>
            <li>
              <Link
                href="/companyprofile"
                className="inline-block hover:scale-110 transition-transform duration-300"
              >
                EX Series 3030
              </Link>
            </li>
            <li>
              <Link
                href="/companyprofile"
                className="inline-block hover:scale-110 transition-transform duration-300"
              >
                EX Series 3030 New Introduction
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-400 mt-10 pt-4 text-center">
        <p className="text-sm text-gray-600">
          © 2023 PT Inotek Karya Mandiri. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

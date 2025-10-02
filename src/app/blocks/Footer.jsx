import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#E2E2E2] py-8 font-display flex flex-col content gap-5 ">
      <div className="flex flex-col">
        <img
          src="/logo-inotek.svg"
          alt="Inotek Karya Mandiri"
          className="w-40 h-auto"
        />
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold text-[#0253AE]">
            PT INOTEK KARYA MADIRI
          </h2>
          <p className="text-gray-600 font-semibold text-sm tracking-wide">
            Distributor Resmi Nasional NICHIHA di Indonesia
          </p>
        </div>
      </div>
      <div className="container w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-10 items-start">
        {/* Kantor Pusat */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-[#0253AE]">Kantor Pusat</h2>
          <div>
            <p>Jl. Kenanga 256 Maguwoharjo Depok, Sleman</p>
            <p>DI Yogyakarta</p>
            <p>0851 6884 2909</p>
          </div>
        </div>

        {/* Showroom 1 */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-[#0253AE]">Showroom 1</h2>
          <div>
            <p>Jl. Berlian IV No. 8 Curug Gunung Sindur, Bogor</p>
            <p>Jawa Barat</p>
            <p>0812 2076 4704</p>
          </div>
        </div>

        {/* Showroom 2 */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-[#0253AE]">Showroom 2</h2>
          <div>
            <p>Jl. Panglima Polim No. 07A Melawai, Kebayoran Baru</p>
            <p>Jakarta</p>
            <p>021 2277 4480</p>
          </div>
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
        </div>

        {/* Perusahaan */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-[#0253AE]">Perusahaan</h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li>
              <Link
                href="/companyprofile#companyprocrsl"
                className="inline-block hover:scale-110 transition-transform duration-300"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                href="/companyprofile#visimisi"
                className="inline-block hover:scale-110 transition-transform duration-300"
              >
                Visi & Misi
              </Link>
            </li>
            <li>
              <Link
                href="/companyprofile#budaya"
                className="inline-block hover:scale-110 transition-transform duration-300"
              >
                Budaya
              </Link>
            </li>
            <li>
              <Link
                href="/contactform#contact-form"
                className="inline-block hover:scale-110 transition-transform duration-300"
              >
                Hubungi Kami
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
                href="/product"
                className="inline-block hover:scale-110 transition-transform duration-300"
              >
                Produk Kami
              </Link>
            </li>
            <li>
              <Link
                href="/nichiha#keunggulan"
                className="inline-block hover:scale-110 transition-transform duration-300"
              >
                Keunggulan
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className="inline-block hover:scale-110 transition-transform duration-300"
              >
                EX Series 1820
              </Link>
            </li>
            <li>
              <Link
                href="/product"
                className="inline-block hover:scale-110 transition-transform duration-300"
              >
                EX Series 3030
              </Link>
            </li>
            <li>
              <Link
                href="/product"
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
          Copyright © 2025 PT Inotek Karya Mandiri
        </p>
      </div>
    </footer>
  );
}

export default Footer;

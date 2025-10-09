import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-[#E2E2E2] py-10 font-display">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header Logo & Company Info */}
        <div className="flex flex-col items-start gap-4 mb-10">
          <img
            src="/headerfootelogo.png"
            alt="Inotek Karya Mandiri"
            className="w-40 h-auto"
          />
          <div>
            <h2 className="text-xl font-bold text-[#0253AE]">
              PT INOTEK KARYA MANDIRI
            </h2>
            <p className="text-gray-600 font-medium text-sm tracking-wide">
              Distributor Resmi Nasional NICHIHA di Indonesia
            </p>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-12">
          {/* Kantor Pusat */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-[#0253AE]">
              Kantor Pusat
            </h2>
            <p className="text-sm text-gray-700">
              Jl. Kenanga 256 Maguwoharjo Depok, Sleman <br /> DI Yogyakarta
              <br /> 0274 4332395
            </p>
          </div>

          {/* Showroom 1 */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-[#0253AE]">Showroom 1</h2>
            <p className="text-sm text-gray-700">
              Jl. Berlian IV No. 8 Curug Gunung Sindur, Bogor <br /> Jawa Barat
              <br /> 0812 2076 4704
            </p>
          </div>

          {/* Showroom 2 */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-[#0253AE]">Showroom 2</h2>
            <p className="text-sm text-gray-700">
              Jl. Panglima Polim No. 07A Melawai, Kebayoran Baru <br /> Jakarta
              <br /> 021 2277 4480
            </p>
          </div>

          {/* Kontak */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-[#0253AE]">Kontak</h2>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <img src="/icons/Email.svg" alt="email" className="w-5 h-5" />
              info@inotekkaryamandiri.com
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <img
                src="/icons/TelponIcon.svg"
                alt="phone"
                className="w-5 h-5"
              />
              (0274) 4332395
            </div>
          </div>

          {/* Perusahaan */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-[#0253AE]">Perusahaan</h2>
            <ul className="flex flex-col gap-2 text-sm text-gray-700">
              <li>
                <Link
                  href="/companyprofile#companyprocrsl"
                  className="hover:text-[#0253AE] transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/companyprofile#visimisi"
                  className="hover:text-[#0253AE] transition-colors"
                >
                  Visi & Misi
                </Link>
              </li>
              <li>
                <Link
                  href="/companyprofile#budaya"
                  className="hover:text-[#0253AE] transition-colors"
                >
                  Budaya
                </Link>
              </li>
              <li>
                <Link
                  href="/contactform#contact-form"
                  className="hover:text-[#0253AE] transition-colors"
                >
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Produk */}
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-[#0253AE]">Produk</h2>
            <ul className="flex flex-col gap-2 text-sm text-gray-700">
              <li>
                <Link href="/product" className="hover:text-[#0253AE]">
                  Produk Kami
                </Link>
              </li>
              <li>
                <Link
                  href="/nichiha#keunggulan"
                  className="hover:text-[#0253AE]"
                >
                  Keunggulan
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-[#0253AE]">
                  EX Series 1820
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-[#0253AE]">
                  EX Series 3030
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-[#0253AE]">
                  EX Series 3030 New Introduction
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#0253AE]">
                  Download Catalog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-12 pt-4 text-center">
          <p className="text-sm text-gray-600">
            © 2025 PT Inotek Karya Mandiri. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

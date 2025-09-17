import React from "react";

function ClosingSection() {
  return (
    <section className="content w-full flex flex-col lg:py-24 py-16 space-y-4 font-display">
      <img src="/images/jangkauan-distribusi.png" alt="Jangkauan distribusi" />
      <div>
        <h2 className="text-2xl md:text-left text-center font-bold text-[#0253AE]">
          Jangkauan Distribusi
        </h2>
        <p className="text-justify md:text-lg text-base">
          PT Inotek Karya Mandiri hadir sebagai distributor resmi nasional
          Nichiha, dengan jaringan distribusi yang luas dan terintegrasi di
          seluruh Indonesia. Didukung oleh tim profesional dan sistem logistik
          yang handal, kami memastikan setiap proyek dapat memperoleh akses
          terhadap produk wall panel premium dari Jepang dengan kualitas dan
          layanan terbaik.
        </p>
      </div>
    </section>
  );
}

export default ClosingSection;

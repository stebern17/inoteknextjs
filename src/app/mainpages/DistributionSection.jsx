import React from "react";

function ClosingSection() {
  return (
    <section className="content w-full flex flex-col lg:py-24 py-16 space-y-4 font-display">
      <img src="/images/jangkauan-distribusi.png" alt="Jangkauan distribusi" />
      <div>
        <h2 className="md:text-2xl text-lg md:text-left text-center font-bold text-[#0253AE]">
          Jangkauan Distribusi
        </h2>
        <p className="text-justify md:text-lg text-xs">
          <span className="font-bold">PT Inotek Karya Mandiri</span> hadir
          sebagai distributor resmi nasional Nichiha, dengan jaringan distribusi
          yang luas dan terintegrasi di seluruh Indonesia. Didukung oleh tim
          profesional dan sistem logistik yang handal, kami memastikan setiap
          proyek dapat memperoleh akses terhadap produk{" "}
          <span className="font-bold">wall panel premium dari Jepang</span>{" "}
          dengan kualitas dan layanan terbaik.
        </p>
      </div>
    </section>
  );
}

export default ClosingSection;

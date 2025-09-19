import React from "react";
import { List, ListItem } from "flowbite-react";
import { FaCheckCircle } from "react-icons/fa";

function CompanyIntroduce() {
  return (
    <section className="content flex flex-col font-display justify-center lg:py-24 gap-3">
      <h2 className="text-lg md:text-2xl md:text-left text-center font-bold text-[#0253AE]">
        PT INOTEK KARYA MANDIRI
      </h2>
      <div className="space-y-4 text-justify md:text-[16px] text-sm">
        <p>
          PT Inotek Karya Mandiri adalah perusahaan distribusi yang berkomitmen
          menghadirkan produk material bangunan berkualitas tinggi dengan desain
          estetika modern. Kami ditunjuk sebagai distributor resmi nasional
          produk wall exterior dari NICHIHA Corporation - Jepang, sebuah merek
          global yang dikenal akan inovasinya dalam sistem panel fasad
          arsitektural.
        </p>
        <p>
          Sejak awal berdiri, kami membawa visi untuk menjadi mitra terpercaya
          dalam industri konstruksi dan arsitektur, dengan menghadirkan produk
          inovatif yang tidak hanya kuat dan tahan lama, tetapi juga memiliki
          nilai estetika tinggi. Kami percaya bahwa dinding luar bukan hanya
          pelindung bangunan, tetapi juga ekspresi dari karakter, kreativitas,
          dan gaya hidup penggunanya.
        </p>
      </div>
      <div className="md:text-[16px] text-sm">
        <p>
          Melalui kemitraan strategis bersama NICHIHA, PT Inotek Karya Mandiri
          menghadirkan solusi panel luar bangunan yang mengedepankan:
        </p>
        <List className="ps-4">
          <ListItem icon={FaCheckCircle} className="text-black flex gap-1">
            <p>
              <span className="font-bold">Teknologi tinggi</span> dalam
              manufaktur dan sistem pemasangan
            </p>
          </ListItem>
          <ListItem icon={FaCheckCircle} className="text-black flex gap-1">
            <p>
              <span className="font-bold">Desain fasad modern </span>
              yang sesuai dengan selera arsitektur tropis dan urban
            </p>
          </ListItem>
          <ListItem icon={FaCheckCircle} className="text-black flex gap-1">
            <p>
              <span className="font-bold">
                Daya tahan terhadap iklim ekstrem,
              </span>{" "}
              cocok untuk kondisi cuaca di Indonesia
            </p>
          </ListItem>
        </List>
      </div>
      <div className="space-y-4 text-justify md:text-[16px] text-sm">
        <p>
          Dengan dukungan tim yang profesional, layanan distribusi nasional,
          serta komitmen terhadap kualitas, kami siap menjadi bagian dari
          proyek-proyek bangunan terbaik di seluruh Indonesia dari hunian
          premium hingga gedung komersial berkelas.
        </p>
      </div>
    </section>
  );
}

export default CompanyIntroduce;

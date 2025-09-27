import React from "react";
import { List, ListItem, createTheme } from "flowbite-react";
import { FaCircle } from "react-icons/fa";
import { motion } from "motion/react";

function CompanyIntroduce() {
  4;

  const lisTheme = createTheme({
    icon: "me-2 h-2 w-2",
  });

  return (
    <section className="content flex flex-col font-display justify-center md:pt-16 gap-3">
      <div className="space-y-4 text-justify md:text-[16px] text-sm">
        <p>
          PT Inotek Karya Mandiri adalah perusahaan distributor resmi nasional
          untuk NICHIHA Wall Panel Exterior, sistem panel fasad berkualitas
          tinggi dengan inovasi dan desain estetika modern dari Jepang.
        </p>
        <p>
          Kami percaya bahwa dinding luar bukan hanya pelindung bangunan, tetapi
          juga ekspresi dari karakter, kreativitas, dan gaya hidup penggunanya.
          Karena itu kami berkomitmen untuk mempermudah industri konstruksi dan
          arsitektur dengan menghadirkan produk inovatif yang kuat, tahan lama,
          dan berestetika tinggi.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 min-h-[30vh]">
        {/* kiri */}
        <motion.div
          className="bg-gray-100 p-4 rounded-xl flex flex-col h-full border border-[#0253AE] drop-shadow-lg"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
        >
          <h3 className="font-semibold text-[#0253AE] mb-2 md:text-2xl text-xl ">
            PT. Inotek Karya Mandiri siap membantu Anda dengan layanan terbaik :
          </h3>
          <List className="mx-4 text-[#0253AE] md:text-xl text-lg">
            <ListItem icon={FaCircle} theme={lisTheme} className=" flex gap-1">
              <p>Tim DIstrubutor dan Customer Service yang profesional</p>
            </ListItem>
            <ListItem icon={FaCircle} theme={lisTheme} className=" flex gap-1">
              <p>Layanan distribusi nasional dengan jangkauan se-Indonesia</p>
            </ListItem>
            <ListItem icon={FaCircle} theme={lisTheme} className=" flex gap-1">
              <p>
                Komitmen untuk menghadirkan produk Jepang dengan kualitas
                premium
              </p>
            </ListItem>
          </List>
        </motion.div>
        {/* kanan */}
        <motion.div
          className="bg-gray-100 p-4 rounded-xl flex flex-col h-full border border-[#0253AE] drop-shadow-lg"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ amount: 0.3, once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
        >
          <h3 className="font-semibold text-[#0253AE] mb-2 md:text-2xl text-xl">
            Nichiha Wall Panel menjadi solusi fasad yang mengedepankan:
          </h3>
          <List className="mx-4 text-[#0253AE] md:text-xl text-lg">
            <ListItem icon={FaCircle} theme={lisTheme} className=" flex gap-1">
              <p>
                Teknologi praktis dan berkualitas untuk manufaktur dan sistem
                pemasangan
              </p>
            </ListItem>
            <ListItem icon={FaCircle} theme={lisTheme} className=" flex gap-1">
              <p>
                Desain fasad modern yang sesuai dengan selera arsitektur tropis
                dan urban
              </p>
            </ListItem>
            <ListItem icon={FaCircle} theme={lisTheme} className=" flex gap-1">
              <p>
                Daya tahan terhadap iklim ekstrem, cocok untuk kondisi cuaca di
                Indonesia
              </p>
            </ListItem>
          </List>
        </motion.div>
      </div>
      <div className="space-y-4 text-justify md:text-[16px] text-sm">
        <p>
          Nichiha berdedikasi untuk turut berkontribusi dalam proyek-proyek
          bangunan terbaik di seluruh Indonesia, dari hunian premium hingga
          gedung komersial berkelas.
        </p>
      </div>
    </section>
  );
}

export default CompanyIntroduce;

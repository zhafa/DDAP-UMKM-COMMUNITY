import { motion } from "framer-motion";
import { useState } from "react";
import chevron from "../Assets/chevron.svg";
import CardRiwayatAcara from "./CardRiwayatAcara";
import { dataRiwayatAcara } from "../data/dataAcara";

const dataDropdown = ["Terbaru", "Terlama"];

const RiwayatAcara = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="cust-container py-10">
      <div className="flex w-full justify-between items-end">
        <p>Menampilkan hasil :</p>
        <div className="relative">
          <div
            onClick={() => setShowDropdown((prev) => !prev)}
            className="bg-cust-secondary100 cursor-pointer w-full z-20 flex gap-2 justify-center items-center py-2 px-3 lg:px-10 border-2 border-cust-primary900 rounded-full"
          >
            <p className="font-bold text-cust-primary900 whitespace-nowrap text-sm">
              Urutkan
            </p>
            <img src={chevron} alt="icon" />
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0, y: 0 }}
            animate={{
              height: showDropdown ? "fit-content" : 0,
              opacity: showDropdown ? 1 : 0,
              y: 5,
            }}
            transition={{ duration: 0.3, type: "tween" }}
            exit={{ height: 0, opacity: 0, y: 0 }}
            className={`w-full bg-cust-secondary50 z-30 absolute right-0 overflow-hidden border-2 border-cust-primary900`}
          >
            <div className="flex flex-col">
              {dataDropdown.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="cursor-pointer text-cust-primary900 hover:bg-cust-primary100 p-2 flex items-center gap-2"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col gap-5 py-2">
        {dataRiwayatAcara.map((item, index) => {
          return <CardRiwayatAcara key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default RiwayatAcara;

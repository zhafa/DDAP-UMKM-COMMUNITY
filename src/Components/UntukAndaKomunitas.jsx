import search from "../Assets/search.svg";
import { dataUntukAndaKomunitas } from "../data/dataKomunitas";
import CardKomunitas from "./CardUntukAndaKomunitas";
import { motion } from "framer-motion";
import { useState } from "react";
import chevron from "../Assets/chevron.svg";

const dataCheckBox = [
  "Otomotif",
  "Kuliner",
  "Fashion",
  "Agribisnis",
  "Produk & Kreatif",
  "Event Organizer",
  "Tour & Travel",
  "Lain-Lain",
];

const UntukAndaKomunitas = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="cust-container relative grid grid-cols-1 lg:grid-cols-12 gap-2 bg-white py-20 lg:py-10">
      <div className="lg:col-span-2 absolute top-5 lg:top-0 lg:relative z-40 flex flex-col items-center">
        <div
          onClick={() => setShowDropdown((prev) => !prev)}
          className="bg-cust-secondary100 cursor-pointer w-full z-20 flex gap-2 justify-center items-center py-2 px-3 lg:px-0 border-2 border-cust-primary900 rounded-full"
        >
          <p className="font-bold text-cust-primary900 whitespace-nowrap text-sm">
            Kategori UMKM
          </p>
          <img src={chevron} alt="icon" />
        </div>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: showDropdown ? "fit-content" : 0 }}
          transition={{ duration: 0.3, type: "tween" }}
          exit={{ height: 0 }}
          className={`w-11/12 bg-cust-secondary50 overflow-hidden border-2 px-4 ${
            showDropdown && "pb-4 pt-4"
          } -translate-y-4 border-cust-primary900`}
        >
          <h3 className="font-bold text-cust-primary900 py-2">UMKM</h3>
            <div className="flex flex-col gap-4">
              {dataCheckBox.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="kategori"
                      id="kategori"
                      className="w-4 h-4"
                    />
                    <label htmlFor="kategori" className="text-sm">
                      {item}
                    </label>
                  </div>
                );
              })}
            </div>
        </motion.div>
      </div>
      <div className="col-span-10 flex flex-col gap-3">
        <div className="w-full relative rounded-full border-2 border-cust-primary900 overflow-hidden">
          <img
            src={search}
            className="h-8 w-8 absolute left-4 top-1/2 -translate-y-1/2"
            alt="icon"
          />
          <input
            type="text"
            placeholder="Cari Komunitas . . ."
            className=" bg-[#E6E6E6] text-cust-primary700 w-full h-full py-2 ps-14 pe-2"
          />
        </div>
        {dataUntukAndaKomunitas.map((item, index) => {
          return <CardKomunitas key={index} data={item} />;
        })}
      </div>
    </div>
  );
};

export default UntukAndaKomunitas;
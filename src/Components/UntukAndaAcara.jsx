import search from "../Assets/search.svg";
import chevron from "../Assets/chevron.svg";
import { dataUntukAndaAcara } from "../data/dataAcara";
import CardUntukAndaAcara from "./CardUntukAndaAcara";
import { useState } from "react";
import { motion } from "framer-motion";

const dataUMKM = [
  "Otomotif",
  "Kuliner",
  "Fashion",
  "Agribisnis",
  "Produk & Kreatif",
  "Event Organizer",
  "Tour & Travel",
  "Lain-Lain",
];

const dataLokasi = [
  "Jawa Barat",
  "Jawa Tengah",
  "Jawa Timur",
  "Sumatera Utara",
  "Sumatera Barat",
  "Sumatera Selatan",
  "Lampung",
  "DKI Jakarta",
  "Lain - lain",
];

const DropdownUMKM = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setShowDropdown((prev) => !prev)}
        className="bg-cust-secondary100 cursor-pointer w-full z-20 flex gap-10 justify-center items-center py-2 px-4 lg:px-10 border-2 border-cust-primary900 rounded-full"
      >
        <p className="font-bold text-cust-primary900 whitespace-nowrap text-sm">
          Kategori UMKM
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
        <div className="flex flex-col p-2 gap-2">
          {dataUMKM.map((item, index) => {
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
  );
};

const DropdownLokasi = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="relative">
      <div
        onClick={() => setShowDropdown((prev) => !prev)}
        className="bg-cust-secondary100 cursor-pointer w-full z-20 flex gap-10 justify-center items-center py-2 px-4 lg:px-10 border-2 border-cust-primary900 rounded-full"
      >
        <p className="font-bold text-cust-primary900 whitespace-nowrap text-sm">
          Lokasi
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
        <div className="flex flex-col p-2 gap-2">
          {dataLokasi.map((item, index) => {
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
  );
};

const UntukAndaAcara = () => {
  return (
    <div className="cust-container relative grid grid-cols-1 lg:grid-cols-12 gap-2 bg-white py-4 lg:py-10">
      <div className="col-span-1 w-full flex lg:hidden justify-between items-center">
        <DropdownUMKM />
        <DropdownLokasi />
      </div>
      <div className="lg:col-span-2 absolute top-5 lg:top-0 lg:relative z-40 hidden lg:flex flex-col gap-2 items-start">
        <p className="font-bold text-cust-primary900 whitespace-nowrap text-sm">
          Filter
        </p>
        <div className="w-11/12 bg-[#DBF2F2]">
          <div className="flex flex-col gap-2 p-2 border border-cust-primary900">
            <h3 className="text-cust-primary900 font-bold">UMKM</h3>
            <div className="flex flex-col gap-4">
              {dataUMKM.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="kategori"
                      id="kategori"
                      className="w-4 h-4"
                    />
                    <label htmlFor="kategori" className="text-xs md:text-sm">
                      {item}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-2 p-2 border border-cust-primary900">
            <h3 className="text-cust-primary900 font-bold">LOKASI</h3>
            <div className="flex flex-col gap-4">
              {dataLokasi.map((item, index) => {
                return (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="kategori"
                      id="kategori"
                      className="w-4 h-4"
                    />
                    <label htmlFor="kategori" className="text-xs md:text-sm">
                      {item}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1 lg:col-span-10 flex flex-col gap-3">
        <div className="w-full relative rounded-full border-2 border-cust-primary900 overflow-hidden">
          <img
            src={search}
            className="h-8 w-8 absolute left-4 top-1/2 -translate-y-1/2"
            alt="icon"
          />
          <input
            type="text"
            placeholder="Cari Acara . . ."
            className=" bg-[#E6E6E6] text-cust-primary700 w-full h-full py-2 ps-14 pe-2"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {dataUntukAndaAcara.map((item, index) => {
            return <CardUntukAndaAcara key={index} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default UntukAndaAcara;

import { motion } from "framer-motion";
import { useState } from "react";
import chevron from "../../assets/chevron.svg";
import search from "../../assets/search.svg";
import kemeja from "../../assets/kemejaPemasaran.svg";
import tempe from "../../assets/tempe.svg";
import kain from "../../assets/kain.svg";
import tepung from "../../assets/tepung.svg";
import { Link } from "react-router-dom";

const data = [
  {
    image: kemeja,
    category: "Fashion",
    item: "Kemeja Oversized",
    price: "Rp. 32.000",
    rprice: " Rp. 40.000",
    dics: "20%",
    city: "Surabaya, Jawa Timur",
  },
  {
    image: tempe,
    category: "Kuliner",
    item: "Keripik Tempe",
    price: "Rp. 32.000",
    rprice: " Rp. 40.000",
    dics: "20%",
    city: "Surabaya, Jawa Timur",
  },
  {
    image: kain,
    category: "Fashion",
    item: "Kain Katun",
    price: "Rp. 32.000",
    rprice: " Rp. 40.000",
    dics: "20%",
    city: "Surabaya, Jawa Timur",
  },
  {
    image: tepung,
    category: "Kuliner",
    item: "Tepung Terigu",
    price: "Rp. 32.000",
    rprice: " Rp. 40.000",
    dics: "20%",
    city: "Surabaya, Jawa Timur",
  },
  {
    image: kemeja,
    category: "Fashion",
    item: "Kemeja Oversized",
    price: "Rp. 32.000",
    rprice: " Rp. 40.000",
    dics: "20%",
    city: "Surabaya, Jawa Timur",
  },
  {
    image: tempe,
    category: "Kuliner",
    item: "Keripik Tempe",
    price: "Rp. 32.000",
    rprice: " Rp. 40.000",
    dics: "20%",
    city: "Surabaya, Jawa Timur",
  },
];

const dataDropdown1 = ["Semua", "Otomotif", "Kuliner", "Fashion", "Agribisnis"];
const dataDropdown = ["Semua", "Bahan Baku", "Bahan Jadi", "Bahan Daur"];

const Barang = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDropdown1, setShowDropdown1] = useState(false);

  return (
    <>
      <div className="mx-auto w-11/12 md:mt-10 mt-5 font-poppins pb-10">
        <div className="mx-auto w-11/12 flex justify-between">
          <div className="relative md:w-4/12 w-6/12">
            <div
              onClick={() => setShowDropdown1((prev) => !prev)}
              className="bg-[#B3D6E8] cursor-pointer w-11/12 z-20 flex md:gap-10 justify-between items-center py-2 px-3 lg:px-10 border-2 border-cust-primary900 rounded-full"
            >
              <p className="font-bold text-cust-primary900 whitespace-nowrap md:text-sm text-xs">
                Kategori UMKM
              </p>
              <img src={chevron} alt="icon" />
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0, y: 0 }}
              animate={{
                height: showDropdown1 ? "fit-content" : 0,
                opacity: showDropdown1 ? 1 : 0,
                y: 5,
              }}
              transition={{ duration: 0.3, type: "tween" }}
              exit={{ height: 0, opacity: 0, y: 0 }}
              className={`w-11/12 bg-cust-secondary50 z-30 absolute left-0 overflow-hidden border-2 border-cust-primary900`}
            >
              <div className="flex flex-col">
                {dataDropdown1.map((item, index) => {
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
          <div className="relative md:w-4/12 w-6/12">
            <div
              onClick={() => setShowDropdown((prev) => !prev)}
              className="bg-[#B3D6E8] cursor-pointer w-11/12 z-20 flex md:gap-10 justify-between items-center py-2 px-3 lg:px-10 border-2 border-cust-primary900 rounded-full"
            >
              <p className="font-bold text-cust-primary900 whitespace-nowrap md:text-sm text-xs">
                Jenis Produk
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
              className={`w-11/12 bg-cust-secondary50 z-30 absolute left-0 overflow-hidden border-2 border-cust-primary900`}
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
          <div className="md:block hidden w-4/12 relative rounded-full border-2 border-cust-primary900 overflow-hidden ">
            <div className="w-11/12">
              <img
                src={search}
                className="h-8 w-8 absolute left-4 top-1/2 -translate-y-1/2"
                alt="icon"
              />
              <input
                type="text"
                placeholder="Cari Lokasi . . ."
                className=" bg-[#FFFF] text-cust-primary700 w-full h-full py-2 ps-14 pe-2"
              />
            </div>
          </div>
        </div>
        <div className="w-full mt-10">
          <div className="text-2xl font-bold mb-10">Produk Terbaik</div>
          <div className="carousel  md:carousel-center carousel-start w-full">
            {data.map((item, i) => (
              <Link
                to="/produk"
                className="xl:w-3/12 lg:w-4/12 mx-auto carousel-item"
                key={i}
              >
                <div className="w-10/12 mx-auto bg-cust-primary200 rounded-2xl shadow-lg pb-5 border-2 border-black">
                  <div className="w-fit bg-cust-primary400 lg:py-4 py-2 lg:px-12 px-8 font-bold text-black border-b-black border-r-black border-b-2 border-r-2 rounded-tl-2xl rounded-br-2xl">
                    {item.category}
                  </div>
                  <img
                    src={item.image}
                    alt=""
                    className="w-10/12 mx-auto py-5"
                  />
                  <div className="w-10/12 mx-auto font-bold">{item.item}</div>
                  <div className="flex w-10/12 mx-auto justify-between pt-2">
                    <div className="w-fit">
                      <div className="text-red-600 font-bold">{item.price}</div>
                      <div className="text-red-600 opacity-50 font-bold">
                        <strike>{item.rprice}</strike>
                      </div>
                    </div>
                    <div className="px-6 py-2 w-fit h-fit bg-gray-600 text-white text-sm rounded-full">
                      {item.dics}
                    </div>
                  </div>
                  <div className="w-10/12 mx-auto text-sm pt-2">
                    {item.city}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-2xl font-bold my-10">Rekomendasi</div>
          <div className="carousel  md:carousel-center carousel-start w-full">
            {data.map((item, i) => (
              <Link
                to="/produk"
                className="xl:w-3/12 lg:w-4/12 mx-auto carousel-item"
                key={i}
              >
                <div className="w-10/12 mx-auto bg-cust-primary200 rounded-2xl shadow-lg pb-5 border-2 border-black">
                  <div className="w-fit bg-cust-primary400 lg:py-4 py-2 lg:px-12 px-8 font-bold text-black border-b-black border-r-black border-b-2 border-r-2 rounded-tl-2xl rounded-br-2xl">
                    {item.category}
                  </div>
                  <img
                    src={item.image}
                    alt=""
                    className="w-10/12 mx-auto py-5"
                  />
                  <div className="w-10/12 mx-auto font-bold">{item.item}</div>
                  <div className="flex w-10/12 mx-auto justify-between pt-2">
                    <div className="w-fit">
                      <div className="text-red-600 font-bold">{item.price}</div>
                      <div className="text-red-600 opacity-50 font-bold">
                        <strike>{item.rprice}</strike>
                      </div>
                    </div>
                    <div className="px-6 py-2 w-fit h-fit bg-gray-600 text-white text-sm rounded-full">
                      {item.dics}
                    </div>
                  </div>
                  <div className="w-10/12 mx-auto text-sm pt-2">
                    {item.city}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Barang;

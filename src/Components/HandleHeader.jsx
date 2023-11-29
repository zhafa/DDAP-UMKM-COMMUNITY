// defaultHeader = general || search || pemasaran

import { Link, useLocation } from "react-router-dom";
import search from "../Assets/search.svg";
import shop from "../Assets/shop.svg";

const HandleHeader = ({ defaultHeader = "general", open = true, setOpen }) => {

  const location = useLocation();

  return (
    <div className="bg-cust-primary400 py-4 md:py-8">
      {defaultHeader == "general" && (
        <div className="cust-container w-full flex justify-evenly text-cust-primary900 font-semibold">
          <button
            onClick={() => setOpen(true)}
            className={`hover:border-b-2 transition-all duration-100 pb-2 text-sm
            ${open && "border-b-2"}
            `}
          >
            Untuk Anda
          </button>
          <button
            onClick={() => setOpen(false)}
            className={`hover:border-b-2 transition-all duration-100 pb-2 text-sm
            ${!open && "border-b-2"}
            `}
          >
            {
              location.pathname == "/komunitas" ? "Komunitas Anda" : "Riwayat"
            }
          </button>
        </div>
      )}

      {defaultHeader == "search" && (
        <div className="cust-container flex justify-center text-cust-primary900 font-semibold">
          <div className="relative w-7/12 rounded-full border border-cust-primary900 overflow-hidden">
            <input
              type="search"
              placeholder="Cari tips yang Anda inginkan disini..."
              className="bg-[#E1EFF6] text-cust-primary600 w-full py-3 px-14 focus:outline-none active:outline-none"
            />
            <img
              src={search}
              className="absolute -translate-y-1/2 top-1/2 left-4"
              alt="icon"
            />
          </div>
        </div>
      )}

      {defaultHeader == "pemasaran" && (
        <div className="cust-container flex flex-col gap-5">
          <div className="w-full flex justify-end items-center gap-2">
            <img src={shop} alt="icon" />
            <p className="font-bold text-cust-primary900 text-lg">Produk?</p>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-7 flex flex-col gap-10 items-start justify-center">
              <h1 className="text-cust-primary900 text-5xl font-bold">
                Produk UMKM Terbaru
              </h1>
              <div className="relative w-10/12 rounded-full border border-cust-primary900 overflow-hidden">
                <input
                  type="search"
                  placeholder="Cari tips yang Anda inginkan disini..."
                  className="bg-[#E1EFF6] text-cust-primary600 w-full py-2 px-14 focus:outline-none active:outline-none"
                />
                <img
                  src={search}
                  className="absolute -translate-y-1/2 top-1/2 left-4"
                  alt="icon"
                />
              </div>
            </div>
            <div className="col-span-1"></div>
            <div className="col-span-4">
              <img
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1700670709/image_4_ttouiy.png"
                className="w-full object-cover object-center"
                alt="img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HandleHeader;

import icon from "../assets/jualProduk.svg";
import search from "../assets/search.svg";
import pemasaran from "../assets/pemasaran.svg";
import Barang from "../Components/Pemasaran/Barang";
import { Link } from "react-router-dom";

const Pemasaran = () => {
  return (
    <>
      <div className="w-full bg-cust-primary400 font-poppins py-10 md:block hidden">
        <div className="w-11/12 mx-auto">
          <Link to="/jual">
            <div className="flex lg:w-2/12 w-fit ml-auto mb-5">
              <img src={icon} alt="" className="w-2/12" />
              <div className="font-bold my-auto ml-3">Jual Produk?</div>
            </div>
          </Link>

          <div className="w-full flex">
            <div className="w-6/12 my-auto">
              <div className="w-11/12 mx-auto">
                <div className="text-black font-bold text-5xl">
                  Produk UMKM Terbaru
                </div>
                <div className="w-full relative rounded-full border-2 border-cust-primary900 overflow-hidden mt-5">
                  <img
                    src={search}
                    className="h-8 w-8 absolute left-4 top-1/2 -translate-y-1/2"
                    alt="icon"
                  />
                  <input
                    type="text"
                    placeholder="Cari Produk . . ."
                    className=" bg-[#E1EFF6] text-cust-primary700 w-full h-full py-2 ps-14 pe-2"
                  />
                </div>
              </div>
            </div>
            <div className="w-6/12">
              <div className="w-8/12 mx-auto">
                <img src={pemasaran} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden block mt-5">
        <Link to="/jual">
          <div className="flex lg:w-2/12 w-fit ml-auto mb-5">
            <img src={icon} alt="" className="w-2/12" />
            <div className="font-bold my-auto ml-3">Jual Produk?</div>
          </div>
        </Link>
      </div>
      <div className="md:hidden block w-10/12 mx-auto relative rounded-full border-2 border-cust-primary900 overflow-hidden mt-5">
        <img
          src={search}
          className="h-8 w-8 absolute left-4 top-1/2 -translate-y-1/2"
          alt="icon"
        />
        <input
          type="text"
          placeholder="Cari Produk . . ."
          className=" bg-[#E6E6E6] text-cust-primary700 w-full h-full py-2 ps-14 pe-2"
        />
      </div>
      <Barang />
    </>
  );
};

export default Pemasaran;

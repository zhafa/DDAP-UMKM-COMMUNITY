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

const Pemasaran = () => {
  return (
    <>
      <div className=" bg-cust-secondary200 pt-12 font-poppins pb-10">
        <div className="hidden lg:block w-fit mx-auto text-4xl font-bold text-black">
          Pemasaran Produk
        </div>
        <div className="lg:hidden sm:text-3xl text-2xl w-10/12 mx-auto font-bold">
          Pemasaran
        </div>
        <div className="lg:hidden sm:text-3xl text-2xl w-10/12 mx-auto font-bold">
          Produk
        </div>
        <div className="w-10/12 mx-auto text-black md:text-lg sm:text-base text-sm text-justify lg:my-10 my-5">
          Pemasaran Produk merupakan fitur kolaborasi terintegrasi yang
          memungkinkan pelaku UMKM untuk berkolaborasi dalam produksi,
          pemasaran, dan distribusi produk mereka. Selain itu, fitur ini juga
          menciptakan peluang pasar bersama dimana anggota dapat menjual produk
          mereka secara bersamaan. Fitur pemasaran produk ini juga memungkinkan
          anggota komunitas untuk membeli bahan baku dari sesama pelaku UMKM.
        </div>
        <div className="carousel  md:carousel-center carousel-start w-full">
          {data.map((item, i) => (
            <Link
              to="/login"
              className="xl:w-3/12 lg:w-4/12 mx-auto carousel-item"
              key={i}
            >
              <div className="w-10/12 mx-auto bg-gray-300 rounded-2xl shadow-lg pb-5 border-2 border-black">
                <div className="w-fit bg-cust-yellow lg:py-4 py-2 lg:px-12 px-8 font-medium text-black border-b-black border-r-black border-b-2 border-r-2 rounded-tl-2xl rounded-br-2xl">
                  {item.category}
                </div>
                <img src={item.image} alt="" className="w-10/12 mx-auto py-5" />
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
                <div className="w-10/12 mx-auto text-sm pt-2">{item.city}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pemasaran;

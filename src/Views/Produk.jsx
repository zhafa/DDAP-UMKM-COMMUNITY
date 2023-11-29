import wa from "../assets/whatsapp.svg";
import ready from "../assets/ready.svg";
import kemeja from "../assets/kemejaPemasaran.svg";
import kemeja2 from "../assets/kemejaProduk.svg";
import tempe from "../assets/tempe.svg";
import kain from "../assets/kain.svg";
import tepung from "../assets/tepung.svg";
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

const Produk = () => {
  function showItem(itemId) {
    const items = document.querySelectorAll(".carousel-item");
    items.forEach((item) => {
      item.style.display = "none"; // Sembunyikan semua gambar
    });

    const selectedItem = document.getElementById(itemId);
    selectedItem.style.display = "block"; // Tampilkan gambar yang dipilih
  }
  return (
    <>
      <div className="w-10/12 mx-auto font-poppins md:pt-20 py-10">
        <div className="w-full md:flex">
          <div className="md:w-4/12 ">
            <div className="carousel carousel-center w-full">
              <div id="item1" className="carousel-item w-full">
                <img src={kemeja} className="mask mask-square mx-auto" />
              </div>
              <div id="item2" className="carousel-item w-full">
                <img src={kemeja2} className="mask mask-square mx-auto" />
              </div>
            </div>
            {/* <div className="flex justify-center w-full py-2 gap-2">
              <button onClick={() => showItem("item1")} className="btn btn-xs">
                1
              </button>
              <button onClick={() => showItem("item2")} className="btn btn-xs">
                2
              </button>
            </div> */}
          </div>
          <div className="md:w-8/12 pt-10 md:pt-0">
            <div className="w-11/12 mx-auto">
              <div className="text-2xl font-bold md:pl-4">
                Kemeja Katun Polos S, M, L, XL, XXL
              </div>
              <div className="w-full h-[1px] bg-black my-4"></div>
              <div className="md:pl-4">Surabaya, Jawa Timur</div>
              <div className="flex md:pl-4">
                <div className="font-bold text-lg text-red-500 opacity-50">
                  Rp. 40.000
                </div>
                <div className="text-sm font-bold my-auto ml-3">Diskon 20%</div>
              </div>
              <div className="font-bold text-lg text-red-500 md:pl-4">
                Rp. 32.000
              </div>
              <div className="md:flex md:pl-4 mt-3">
                <button className="md:w-fit w-full bg-green-500">
                  <div className="flex">
                    <div className="my-auto font-bold mx-auto text-black">
                      BELI DI WHATSAPP
                    </div>
                    <img src={wa} alt="" className="w-2/12 ml-2 mx-auto" />
                  </div>
                </button>
                <div className="flex md:w-5/12 ml-5 md:mt-0 mt-5">
                  <img src={ready} alt="" className="md:w-2/12 w-1/12" />
                  <div className="my-auto ml-2">
                    <div className="text-sm font-bold">Ready Stock</div>
                    <div className="text-xs">
                      Dikirim setelah 3 hari pemesanan
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-10 border-[1px] border-black">
          <div className="w-full border-b-[1px] border-black py-4 px-4">
            <div className="text-lg font-bold">Deskripsi Produk</div>
          </div>
          <div className="pl-4">
            <div className="py-2">- Bahan : Cotton 24s</div>
            <div className="py-2">- Detail Ukuran : </div>
            <div className="pl-4">
              <div className="py-1">- S : LD 90cm, PB ; 55cm</div>
              <div className="py-1">- M : LD 90cm, PB ; 55cm</div>
              <div className="py-1">- L : LD 90cm, PB ; 55cm</div>
              <div className="py-1">- XL : LD 90cm, PB ; 55cm</div>
              <div className="py-1">- XXL : LD 90cm, PB ; 55cm</div>
            </div>
            <div className="py-2">- Berat : 124gram / pcs</div>
          </div>
        </div>
        <div className="mt-10 mb-5 text-lg font-bold">Produk Lainnya</div>
        <div className="carousel md:carousel-center carousel-start w-full">
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

export default Produk;

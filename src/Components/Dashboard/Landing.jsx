import { Link } from "react-router-dom";
import backgroundDashboard from "../../assets/backgroundDashboard.png";
import gambar from "../../assets/gambarDashboardLanding.jpg";

const Landing = () => {
  return (
    <>
      <div className="hidden lg:block bg-gradient-to-b from-cust-secondary100 from-60% to-cust-secondary200">
        <div
          className="h-screen flex bg-contain bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundDashboard})` }}
        >
          <div className="w-6/12 xl:mt-12 lg:mt-6 h-fit">
            <div className="lg:w-11/12 ml-auto py-12">
              <div className="xl:text-5xl text-3xl font-bold mb-4 text-black">
                UMKM - Community
              </div>
              <div className="text-justify xl:text-base lg:text-xs  text-black">
                UMKM-Community adalah sebuah platform digital yang berdedikasi
                untuk mendukung pertumbuhan dan perkembangan Usaha Mikro, Kecil,
                dan Menengah (UMKM) di Indonesia. Didirikan sebagai respons atas
                berbagai tantangan yang dihadapi oleh para pelaku UMKM, situs
                ini memiliki misi penting. Platform ini bukan hanya sebagai
                sarana bagi para pelaku UMKM untuk membangun bisnis yang lebih
                kuat, tetapi juga sebagai alat untuk mengatasi masalah pemasaran
                produk dan pengembangan mereka.
              </div>
              <div className="mt-4 w-fit">
                <Link to="/login">
                  <button className="text-white py-2 px-6 font-bold bg-cust-gray rounded-full">
                    Daftarkan dirimu sekarang!
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-6/12">
            <div className="w-7/12 xl:mr-auto xl:ml-16 xl:mt-28 lg:mt-20 xl:mx-0 mx-auto">
              <img src={gambar} />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden bg-gradient-to-b from-cust-secondary100 to-cust-secondary200 font-poppins pt-16">
        <div className="w-10/12 mx-auto">
          <div className="text-3xl font-bold">UMKM</div>
          <div className="text-3xl font-bold mt-2">Community</div>
          <div className="text-justify mt-8">
            UMKM-Community adalah sebuah platform digital yang berdedikasi untuk
            mendukung pertumbuhan dan perkembangan Usaha Mikro, Kecil, dan
            Menengah (UMKM) di Indonesia. Didirikan sebagai respons atas
            berbagai tantangan yang dihadapi oleh para pelaku UMKM, situs ini
            memiliki misi penting. Platform ini bukan hanya sebagai sarana bagi
            para pelaku UMKM untuk membangun bisnis yang lebih kuat, tetapi juga
            sebagai alat untuk mengatasi masalah pemasaran produk dan
            pengembangan merek.
          </div>

          <div className="mt-12 w-fit mx-auto md:pb-0 pb-20">
            <Link to="/login">
              <button className="text-white py-2 px-6 font-bold bg-cust-gray rounded-full">
                Daftarkan dirimu sekarang!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;

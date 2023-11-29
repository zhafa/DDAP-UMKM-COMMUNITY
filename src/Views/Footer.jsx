import tele from "../assets/tele.svg";
import ig from "../assets/ig.svg";
import yt from "../assets/yt.svg";
import fb from "../assets/fb.svg";

const Footer = () => {
  return (
    <>
      <div className="w-full bg-cust-primary800 py-10 font-poppins">
        <div className="w-10/12 mx-auto md:flex">
          <div className="w-5/12 md:block hidden">
            <div className="text-2xl font-bold text-white">Address</div>
            <div className="text-white lg:w-6/12">
              Jl. Veteran No.10-11, Ketawanggede, Kec. Lowokwaru, Kota Malang,
              Jawa Timur 65145
            </div>
            <div className="text-2xl font-bold text-white mt-5">Email</div>
            <div className="text-white w-6/12">communityUMKM@gmail.com</div>
            <div className="text-2xl font-bold text-white mt-5">Phone</div>
            <div className="text-white w-6/12">083578234578</div>
          </div>
          <div className="md:w-7/12 my-auto">
            <div className="text-2xl font-bold text-white md:mx-0 mx-auto w-fit">
              UMKM - Community
            </div>
            <div className="flex w-fit md:mx-0 mx-auto my-3">
              <img src={tele} alt="" className="px-4" />
              <img src={ig} alt="" className="px-4" />
              <img src={fb} alt="" className="px-4" />
              <img src={yt} alt="" className="px-4" />
            </div>
          </div>
          <div className="w-full md:hidden block">
            <div className="text-2xl font-bold text-white">Address</div>
            <div className="text-white sm:w-8/12">
              Jl. Veteran No.10-11, Ketawanggede, Kec. Lowokwaru, Kota Malang,
              Jawa Timur 65145
            </div>
            <div className="text-2xl font-bold text-white mt-5">Email</div>
            <div className="text-white w-6/12">communityUMKM@gmail.com</div>
            <div className="text-2xl font-bold text-white mt-5">Phone</div>
            <div className="text-white w-6/12">083578234578</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

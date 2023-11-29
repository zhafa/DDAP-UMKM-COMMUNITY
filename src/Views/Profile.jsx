import { Link } from "react-router-dom";
import { useState } from "react";
import profile from "../Assets/profile.svg";
import shop1 from "../Assets/shop1.svg";
import address from "../Assets/address.svg";
import exit from "../Assets/exit.svg";
import Section0 from "../Components/Profile/Section0";
import Section1 from "../Components/Profile/Section1";
import Section2 from "../Components/Profile/Section2";
import Section3 from "../Components/Profile/Section3";

const HandleSection = ({ idSection }) => {
  const dataProfile = {
    namaPengguna: "Vior",
    namaLengkap: "Viorenita Dwi Putri",
    email: "vior123@gmail.com",
    whatsapp: "08123456789",
    TanggalLahir: "12-12-2000",
    jenisKelamin: "Perempuan",
    telepon: "021-12345678",
  };
  const dataUMKM = {
    namaUMKM: "Vior Shop",
    kategoriUMKM: "Fashion",
    teleponUMKM: "021-12345678",
    whatsapp: "08123456789",
  };
  const dataAlamat = {
    alamat: "Jl. Kebayoran Baru No 9",
    provinsi: "DKI Jakarta",
    kota: "Jakarta Selatan",
    kecamatan: "Kebayoran Baru",
  };

  return idSection == 0 ? (
    <Section0 dataProfile={dataProfile} />
  ) : idSection == 1 ? (
    <Section1 dataProfile={dataProfile} />
  ) : idSection == 2 ? (
    <Section2 dataUMKM={dataUMKM} />
  ) : (
    <Section3 dataAlamat={dataAlamat} />
  );
};

const Profile = () => {
  const [idSection, setIdSection] = useState(0);

  return (
    <div className="cust-container grid grid-cols-1 md:grid-cols-12 gap-5 py-10 max-h-min">
      <div className="col-span-1 md:col-span-4 lg:col-span-2 bg-[#DFF3F3] h-full lg:h-fit pt-2 pb-5 md:pb-20 border border-cust-primary200 px-5 flex flex-col items-start justify-start lg:justify-center text-cust-primary900 font-medium">
        <h1
          onClick={() => setIdSection(0)}
          className="font-bold cursor-pointer text-lg md:text-4xl border py-4 text-center border-b-cust-primary200 mb-5 w-full"
        >
          Profil
        </h1>
        <div className="w-full flex flex-col sm:flex-row md:flex-col gap-2 items-center sm:items-start justify-center md:justify-start lg:justify-center">
          <p
            className={`flex gap-2 items-center justify-center cursor-pointer text-xs sm:text-sm md:text-base hover:font-medium
          ${idSection == 1 ? "font-bold" : "font-normal"}`}
            onClick={() => setIdSection(1)}
          >
            {" "}
            <img className="w-5 h-5" src={profile} alt="icon" /> Edit Profile
          </p>
          <p
            className={`flex gap-2 items-center justify-center cursor-pointer text-xs sm:text-sm md:text-base hover:font-medium
          ${idSection == 2 ? "font-bold" : "font-normal"}`}
            onClick={() => setIdSection(2)}
          >
            <img className="w-5 h-5" src={shop1} alt="icon" />
            Atur UMKM
          </p>
          <p
            className={`flex gap-2 items-center justify-center cursor-pointer text-xs sm:text-sm md:text-base hover:font-medium
          ${idSection == 3 ? "font-bold" : "font-normal"}`}
            onClick={() => setIdSection(3)}
          >
            <img className="w-5 h-5" src={address} alt="icon" />
            Alamat
          </p>
          <Link
            to={"/"}
            className="flex gap-2 items-center justify-center cursor-pointer text-xs sm:text-sm md:text-base font-normal hover:font-medium"
          >
            <img className="w-5 h-5" src={exit} alt="icon" />
            Keluar
          </Link>
        </div>
      </div>
      <HandleSection idSection={idSection} />
    </div>
  );
};

export default Profile;

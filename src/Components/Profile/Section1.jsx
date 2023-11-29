import { Link } from "react-router-dom";
import chevron from "../../Assets/chevron.svg";
import { useEffect, useState } from "react";

const Section1 = ({ dataProfile }) => {
  const {
    namaPengguna,
    namaLengkap,
    tanggalLahir = "12-12-2000",
    jenisKelamin,
    email,
    whatsapp,
    telepon,
  } = dataProfile;

  const getTanggal = tanggalLahir.split("-");

  const populateTanggal = () => {
    const selectTanggal = document.getElementById("tanggal");

    for (let i = 1; i <= 31; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.text = i;
      selectTanggal.appendChild(option);
    }
  };

  const populateTahun = () => {
    const selectTahun = document.getElementById("tahun");

    for (let i = 1980; i <= 2023; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.text = i;
      selectTahun.appendChild(option);
    }
  };

  useEffect(() => {
    populateTanggal();
    populateTahun();
  }, []);

  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Buat URL lokal gambar
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    }
  };

  return (
    <div className="col-span-1 md:col-span-8 lg:col-span-10 bg-[#EEEEEE]">
      <div className="px-3 md:px-10 flex items-center gap-3 py-5 bg-[#51839F]">
        <Link
          to={"/profile"}
          onClick={() => window.location.reload()}
          className="rounded-full bg-white border border-cust-primary900 w-8 h-8 flex justify-center items-center drop-shadow-[0px_3px_3px_rgba(0,0,0,0.3)]"
        >
          <img src={chevron} className="rotate-90" alt="icon" />
        </Link>
        <p className="text-black font-bold text-xl md:text-3xl">Edit profil</p>
      </div>
      <div className="grid grid-cols-12">
        <div className="flex flex-col col-span-12 lg:col-span-8 gap-3 px-3 md:px-10 py-5">
          <div className="col-span-4 h-fit lg:hidden flex flex-col gap-5 justify-center items-center p-2">
            {imagePreview ? (
              <img
                src={imagePreview}
                className="w-1/3 lg:w-1/2 aspect-square rounded-full"
                alt="profile"
              />
            ) : (
              <img
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1700668435/Rectangle_152_ocl4ks.png"
                className="w-1/2 aspect-square"
                alt="profile"
              />
            )}
            <input type="file" onChange={handleFileChange} />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-cust-primary900 text-lg md:text-xl font-bold">
              Nama Pengguna
            </label>
            <input
              type="text"
              defaultValue={namaPengguna}
              className="bg-white w-full border border-cust-primary900 p-2 font-semibold text-cust-primary700 mb-5"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-cust-primary900 text-lg md:text-xl font-bold">
              Nama Lengkap
            </label>
            <input
              type="text"
              defaultValue={namaLengkap}
              className="bg-white w-full border border-cust-primary900 p-2 font-semibold text-cust-primary700 mb-5"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-cust-primary900 text-lg md:text-xl font-bold">
              Tanggal Lahir
            </label>
            <div className="flex gap-3">
              <select
                id="tanggal"
                className="bg-white px-4 py-3 text-cust-primary900 font-semibold border border-cust-primary900"
              >
                <option value="" disabled selected>
                  {getTanggal[0]}
                </option>
              </select>
              <select
                id="bulan"
                className="bg-white border px-4 py-3 text-cust-primary900 font-semibold border-cust-primary900"
              >
                <option value="" disabled selected>
                  {getTanggal[1]}
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
              <select
                id="tahun"
                className="bg-white px-4 py-3 text-cust-primary900 font-semibold border border-cust-primary900"
              >
                <option value="" disabled selected>
                  {getTanggal[2]}
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-1 mt-3">
            <label className="text-cust-primary900 text-lg md:text-xl font-bold">
              Jenis Kelamin
            </label>
            <select className="bg-white px-4 py-3 text-cust-primary900 font-semibold border border-cust-primary900">
              <option value="" disabled selected>
                {jenisKelamin}
              </option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
            </select>
          </div>
          <div className="flex flex-col gap-1 mt-3">
            <label className="text-cust-primary900 text-lg md:text-xl font-bold">
              Email
            </label>
            <input
              type="email"
              defaultValue={email}
              className="bg-white w-full border border-cust-primary900 p-2 font-semibold text-cust-primary700 mb-5"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-cust-primary900 text-lg md:text-xl font-bold">
              Whatsapp
            </label>
            <input
              type="text"
              defaultValue={whatsapp}
              className="bg-white w-full border border-cust-primary900 p-2 font-semibold text-cust-primary700 mb-5"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-cust-primary900 text-lg md:text-xl font-bold">
              Telepon
            </label>
            <input
              type="text"
              defaultValue={telepon}
              className="bg-white w-full border border-cust-primary900 p-2 font-semibold text-cust-primary700 mb-5"
            />
          </div>
        </div>
        <div className="col-span-4 h-fit hidden lg:flex flex-col gap-5 justify-center items-center p-2">
          {imagePreview ? (
            <img
              src={imagePreview}
              className="w-1/2 aspect-square rounded-full"
              alt="profile"
            />
          ) : (
            <img
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1700668435/Rectangle_152_ocl4ks.png"
              className="w-1/2 aspect-square"
              alt="profile"
            />
          )}
          <input type="file" onChange={handleFileChange} />
        </div>
      </div>
      <div className="flex justify-center lg:justify-end text-sm md:text-base px-10">
        <div
          onClick={() => {
            window.location.reload();
          }}
          className="px-10 py-4 cursor-pointer text-center bg-[#BABABA] hover:bg-opacity-75 transition-all duration-150 text-cust-primary900 font-bold rounded-lg mb-10"
        >
          Simpan Perubahan
        </div>
      </div>
    </div>
  );
};

export default Section1;

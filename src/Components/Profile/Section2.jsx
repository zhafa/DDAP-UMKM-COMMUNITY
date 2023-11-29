import { Link } from "react-router-dom";
import chevron from "../../Assets/chevron.svg";

const Section2 = ({ dataUMKM }) => {
  const { namaUMKM, kategoriUMKM, teleponUMKM, whatsapp } = dataUMKM;

  return (
    <div className="col-span-1 md:col-span-8 lg:col-span-10 bg-[#EEEEEE]">
      <div className="px-3 md:px-10 flex items-center gap-3 py-5 bg-[#51839F]">
        <Link
          onClick={() => window.location.reload()}
          className="rounded-full bg-white border border-cust-primary900 w-8 h-8 flex justify-center items-center drop-shadow-[0px_3px_3px_rgba(0,0,0,0.3)]"
        >
          <img src={chevron} className="rotate-90" alt="icon" />
        </Link>
        <p className="text-black font-bold text-xl md:text-3xl">Atur UMKM</p>
      </div>
      <div className="grid grid-cols-12">
        <div className="flex flex-col col-span-12 gap-3 px-3 md:px-10 py-5">
          <div className="flex flex-col gap-1">
            <label className="text-cust-primary900 text-lg md:text-xl font-bold">
              Nama UMKM
            </label>
            <input
              type="text"
              defaultValue={namaUMKM}
              className="bg-white w-full border border-cust-primary900 p-2 font-semibold text-cust-primary700 mb-5"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-cust-primary900 text-lg md:text-xl font-bold">
              Kategori UMKM
            </label>
            <select className="bg-white border px-4 py-3 text-cust-primary900 font-semibold border-cust-primary900">
              <option value="" disabled selected>
                {kategoriUMKM}
              </option>
              <option value="Fashion">Fashion</option>
              <option value="Kuliner">Kuliner</option>
              <option value="Furniture">Furniture</option>
              <option value="Jasa">Jasa</option>
              <option value="Olahraga">Olahraga</option>
              <option value="Kecantikan">Kecantikan</option>
              <option value="Elektronik">Elektronik</option>
              <option value="Mainan">Mainan</option>
              <option value="Otomotif">Otomotif</option>
              <option value="Lainnya">Lainnya</option>
            </select>
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
              defaultValue={teleponUMKM}
              className="bg-white w-full border border-cust-primary900 p-2 font-semibold text-cust-primary700 mb-5"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center lg:justify-end text-sm md:text-base px-10">
        <div
          onClick={() => {
            window.location.reload();
          }}
          className="px-10 py-4 cursor-pointer bg-[#BABABA] text-center hover:bg-opacity-75 transition-all duration-150 text-cust-primary900 font-bold rounded-lg mb-10"
        >
          Simpan Perubahan
        </div>
      </div>
    </div>
  );
};

export default Section2;

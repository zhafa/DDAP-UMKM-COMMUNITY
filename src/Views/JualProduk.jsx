import { useState } from "react";
import { FaChevronCircleLeft, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const JualProduk = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="w-11/12 mx-auto border-2 border-black font-poppins my-10">
        <div className="border-b-black border-b-2 flex pl-10 py-5 bg-cust-primary200">
          <FaChevronCircleLeft className="my-auto mr-3 " size="20px" />
          <div className="font-bold text-lg">Jual Produk</div>
        </div>
        <div className="px-10 py-5">
          <div className="font-bold">Nama Produk</div>
          <input
            type="text"
            className="w-full px-4 py-2 border-[1px] border-black mt-2 mb-4"
          />
          <div className="font-bold">Jenis Produk</div>
          <select
            value={selectedOption}
            onChange={handleSelectChange}
            className="px-2 lg:w-3/12 sm:w-5/12 w-6/12 border-[1px] border-black py-2 mt-2 mb-4"
          >
            <option value="">Pilih opsi</option>
            <option value="nilai1">Nilai 1</option>
            <option value="nilai2">Nilai 2</option>
            <option value="nilai3">Nilai 3</option>
          </select>
          <div className="font-bold">Deskripsi Produk</div>
          <input
            type="text"
            className="w-full px-4 py-2 border-[1px] border-black mt-2 mb-4 h-[150px]"
          />
          <div className="font-bold">Foto Produk</div>
          <div className="aspect-square border-[1px] border-black lg:w-2/12 sm:w-4/12 w-5/12 mt-2 mb-1">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Uploaded"
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <label htmlFor="imageInput" className="w-fit py-2 cursor-pointer">
            <div className="flex">
              <FaPlusCircle size="16px" className="my-auto mr-2 " />
              <div>Tambah Gambar</div>
            </div>
          </label>
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <div className="mt-4 ml-auto w-fit bg-gray-300 rounded-lg">
            <Link to="/pemasaran">
              <button className="font-bold px-8 py-2">Tambah ke Katalog</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default JualProduk;

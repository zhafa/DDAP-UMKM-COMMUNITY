import { motion } from "framer-motion";
import { useState } from "react";

const RiwayatAcara = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="cust-container py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 text-cust-primary900">
        <div className="hidden md:flex col-span-4 w-full h-fit p-2">
          <div className="rounded-2xl flex items-center gap-3 bg-[#91B7CE] border border-cust-primary900 p-3">
            <img
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1701190591/Group_244_ttzwfr.png"
              className="h-7 aspect-square"
              alt="img"
            />
            <h2 className="font-bold text-sm">KOMUNITAS UMKM MINUMAN SEGAR</h2>
          </div>
        </div>
        
        {/* MOBILE ONLY */}

        <div className="flex md:hidden flex-col col-span-8 bg-[#DFDFDF] w-full h-fit">
          <div
            onClick={() => setOpen((prev) => !prev)}
            className="bg-[#91B7CE] cursor-pointer flex items-center gap-5 p-4 border border-cust-primary700"
          >
            <img
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1701190591/Group_244_ttzwfr.png"
              className="h-10 sm:h-16 aspect-square"
              alt="img"
            />
            <h2 className="font-bold text-sm sm:text-lg md:text-xl">KOMUNITAS UMKM MINUMAN SEGAR</h2>
          </div>
          <motion.div
            initial={{ height: 0, opacity: 0, y: 0 }}
            animate={{
              height: open ? "fit-content" : 0,
              opacity: open ? 1 : 0,
              y: 5,
              padding: open ? "1rem" : 0,
            }}
            transition={{ duration: 0.5, type: "tween" }}
            exit={{ height: 0, opacity: 0, y: 0 }}
            className="flex flex-col gap-4"
          >
            <div className="bg-white rounded-2xl flex gap-2 p-4">
              <img
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1701191001/Ellipse_43_td2lym.png"
                className="rounded-full h-16 sm:h-20 aspect-square"
                alt="img"
              />
              <div className="flex flex-col justify-evenly items-start">
                <h3 className="font-bold text-sm sm:text-base">CazMilk</h3>
                <p className="text-xs sm:text-sm md:text-base">+62 1234 5678 910</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl flex gap-2 p-4">
              <img
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1701191257/Ellipse_43_1_ryzkzx.png"
                className="rounded-full h-16 sm:h-20 aspect-square"
                alt="img"
              />
              <div className="flex flex-col justify-evenly items-start">
                <h3 className="font-bold text-sm sm:text-base">Tea Break</h3>
                <p className="text-xs sm:text-sm md:text-base">+62 1234 5678 910</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl flex gap-2 p-4">
              <img
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1701191262/Ellipse_43_2_f6iu6f.png"
                className="rounded-full h-16 sm:h-20 aspect-square"
                alt="img"
              />
              <div className="flex flex-col justify-evenly items-start">
                <h3 className="font-bold text-sm sm:text-base">Teh Poci</h3>
                <p className="text-xs sm:text-sm md:text-base">+62 1234 5678 910</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* TABLET UP TO */}

        <div className="md:flex hidden flex-col col-span-8 bg-[#DFDFDF] w-full h-fit">
          <div
            className="bg-[#91B7CE] flex items-center gap-5 p-4 border border-cust-primary700"
          >
            <img
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1701190591/Group_244_ttzwfr.png"
              className="h-16 aspect-square"
              alt="img"
            />
            <h2 className="font-bold text-sm sm:text-lg md:text-xl">KOMUNITAS UMKM MINUMAN SEGAR</h2>
          </div>
          <div
            className="py-6 px-4 flex flex-col gap-4"
          >
            <div className="bg-white rounded-2xl flex gap-2 p-4">
              <img
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1701191001/Ellipse_43_td2lym.png"
                className="rounded-full h-20 aspect-square"
                alt="img"
              />
              <div className="flex flex-col justify-evenly items-start">
                <h3 className="font-bold text-sm sm:text-base">CazMilk</h3>
                <p className="text-xs sm:text-sm md:text-base">+62 1234 5678 910</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl flex gap-2 p-4">
              <img
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1701191257/Ellipse_43_1_ryzkzx.png"
                className="rounded-full h-20 aspect-square"
                alt="img"
              />
              <div className="flex flex-col justify-evenly items-start">
                <h3 className="font-bold text-sm sm:text-base">Tea Break</h3>
                <p className="text-xs sm:text-sm md:text-base">+62 1234 5678 910</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl flex gap-2 p-4">
              <img
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1701191262/Ellipse_43_2_f6iu6f.png"
                className="rounded-full h-20 aspect-square"
                alt="img"
              />
              <div className="flex flex-col justify-evenly items-start">
                <h3 className="font-bold text-sm sm:text-base">Teh Poci</h3>
                <p className="text-xs sm:text-sm md:text-base">+62 1234 5678 910</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiwayatAcara;

import play from "../../Assets/play.svg";
import chevron from "../../Assets/chevron.svg";

const Tips = () => {
  return (
    <div className="cust-container text-cust-primary900 flex flex-col gap-10 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className="col-span-1 lg:col-span-4 flex flex-col justify-between items-center lg:items-start">
          <h2 className="font-bold text-lg">Tips</h2>
          <div className="rounded-xl w-1/2 flex lg:w-full relative overflow-hidden">
            <img
              src={play}
              className="absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 w-20 h-20"
              alt="icon"
            />
            <img
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1701137832/Rectangle_252_w29rp5.png"
              className="w-full aspect-video"
              alt="img"
            />
          </div>
        </div>
        <div className="col-span-1 lg:col-span-8">
          <div className="rounded-2xl p-5 bg-[#D9D9D9] flex flex-col gap-5 drop-shadow-[0px_3px_3px_rgba(0,0,0,0.3)]">
            <h2 className="underline font-bold">Tips Terpopuler</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-3 gap-y-10">
              <div className="flex gap-3 col-span-1">
                <img
                  src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1701138338/Rectangle_287_au1vdu.png"
                  className="w-20 md:w-28 lg:w-40 aspect-video"
                  alt="img"
                />
                <p className="text-base font-medium">
                  Cara mendapatkan keuntungan dengan modal sedikit secara cepat
                </p>
              </div>
              <div className="flex gap-3 col-span-1">
                <img
                  src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1701138568/Rectangle_289_rmbd5b.png"
                  className="w-20 md:w-28 lg:w-40 aspect-video"
                  alt="img"
                />
                <p className="text-base font-medium">
                  Cara mendapatkan keuntungan dengan modal sedikit secara cepat
                </p>
              </div>
              <div className="flex gap-3 col-span-1">
                <img
                  src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1701138571/Rectangle_288_auktts.png"
                  className="w-20 md:w-28 lg:w-40 aspect-video"
                  alt="img"
                />
                <p className="text-base font-medium">
                  Cara mendapatkan keuntungan dengan modal sedikit secara cepat
                </p>
              </div>
              <div className="flex gap-3 col-span-1">
                <img
                  src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1701138575/Rectangle_290_vma7by.png"
                  className="w-20 md:w-28 lg:w-40 aspect-video"
                  alt="img"
                />
                <p className="text-base font-medium">
                  Cara mendapatkan keuntungan dengan modal sedikit secara cepat
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 px-8 bg-[#D9D9D9] drop-shadow-[0px_3px_3px_rgba(0,0,0,0.3)] flex flex-col gap-3 relative rounded-2xl">
        <h2 className="underline">Kategori tips</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-5 relative">
          <div className="md:block hidden absolute z-30 w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 -right-12 lg:-right-14 cursor-pointer border border-cust-primary900 top-1/2 -translate-y-1/2 bg-white rounded-full">
            <img src={chevron} className="w-full -rotate-90" alt="icon" />
          </div>
          <div className="w-full relative">
            <img
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1701138915/Creative_Youtube_Thumbnail_and_Cover_Designs___EntheosWeb_1_yivs2l.png"
              className="w-full aspect-video"
              alt="img"
            />
            <p className="font-bold absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 text-white text-xs sm:text-base md:text-lg">
              Perencanaan
            </p>
          </div>
          <div className="w-full relative">
            <img
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1701138918/Rectangle_252_1_yzlbj3.png"
              className="w-full aspect-video"
              alt="img"
            />
            <p className="font-bold absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 text-white text-xs sm:text-base md:text-lg">
              Pemasaran
            </p>
          </div>
          <div className="hidden md:flex w-full relative">
            <img
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1701138923/Rectangle_252_2_fh7h27.png"
              className="w-full aspect-video"
              alt="img"
            />
            <p className="font-bold absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 text-white text-xs sm:text-base md:text-lg">
              Tutorial
            </p>
          </div>
          <div className="hidden md:flex w-full relative">
            <img
              src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1701138928/Rectangle_252_3_cs7mcd.png"
              className="w-full aspect-video"
              alt="img"
            />
            <p className="font-bold absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2 text-white text-xs sm:text-base md:text-lg">
              Inovasi
            </p>
          </div>
        </div>
        <div className="flex gap-3 justify-center">
          <span className="border border-cust-primary900 bg-cust-primary600 rounded-full cursor-pointer w-2 h-2"></span>
          <span className="border border-cust-primary900 rounded-full cursor-pointer w-2 h-2"></span>
          <span className="border border-cust-primary900 rounded-full cursor-pointer w-2 h-2"></span>
          <span className="border border-cust-primary900 rounded-full cursor-pointer w-2 h-2"></span>
        </div>
      </div>
    </div>
  );
};

export default Tips;

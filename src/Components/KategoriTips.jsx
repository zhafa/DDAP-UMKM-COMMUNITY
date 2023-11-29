import chevron from "../Assets/chevron.svg";

const dataTag = [
  "Perencanaan",
  "Pemasaran",
  "Tutorial",
  "Pengembangan",
];

const KategoriTips = () => {

  return (
    <div className="flex flex-col gap-4">
      <h2 className="underline text-cust-primary900 font-bold">
        Kategori Tips
      </h2>
      <div className="relative bg-[#DFF3F3] grid grid-cols-4 justify-center md:gap-3 px-2 py-5 border border-cust-primary900">
        {dataTag.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white w-10/12 py-2 text-center rounded-2xl border border-cust-primary900"
            >
              <p className="text-[8px] sm:text-sm lg:text-lg font-bold text-cust-primary900">{item}</p>
            </div>
          );
        })}
        <div className="absolute cursor-pointer -right-4 top-1/2 -translate-y-1/2 rounded-full border h-10 w-10 bg-[#DFF3F3] border-cust-primary900 drop-shadow-[0px_3px_3px_rgba(0,0,0,0.3)]">
            <img src={chevron} className="h-full -rotate-90" alt="icon" />
        </div>
      </div>
    </div>
  );
};

export default KategoriTips;

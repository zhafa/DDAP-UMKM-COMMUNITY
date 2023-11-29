import gambar from "../../assets/jenisKomunitas.svg";

const data = [
  {
    header: "Usaha Mikro",
    detail:
      "Komunitas bagi para pengusaha mikro yang ingin berbagi pengalaman serta berinovasi untuk usahanya.",
  },
  {
    header: "Usaha Kecil",
    detail:
      "Komunitas bagi para pengusaha kecil yang ingin berbagi pengalaman serta berinovasi untuk usahanya.",
  },
  {
    header: "Menengah",
    detail:
      "Komunitas bagi para pengusaha menengah yang ingin berbagi pengalaman serta berinovasi untuk usahanya.",
  },
];

const Jenis = () => {
  return (
    <>
      <div className="md:h-screen bg-cust-secondary200 md:flex hidden items-center font-poppins">
        <div className="w-full">
          <div className="w-fit mx-auto text-4xl font-bold text-black">
            Jenis Komunitas
          </div>
          <div className="w-fit mx-auto text-4xl font-bold text-black pt-3">
            UMKM
          </div>
          <div className="flex w-10/12 mx-auto mt-20">
            {data.map((index, i) => (
              <div className="w-4/12" key={i}>
                <div className="xl:w-10/12 md:w-11/12 mx-auto bg-gray-300 relative rounded-lg shadow-xl xl:h-[380px] md:h-[350px] flex items-center">
                  <div className="w-full absolute -top-10">
                    <img src={gambar} alt="" className="w-8/12 mx-auto" />
                  </div>
                  <div className="absolute xl:pt-24 md:pt-8">
                    <div className="w-fit mx-auto xl:text-3xl md:text-2xl font-bold text-black">
                      {index.header}
                    </div>
                    <div className="w-10/12 text-center mx-auto xl:text-base md:text-sm">
                      {index.detail}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:hidden sm:h-[1500px] h-[1200px] font-poppins bg-cust-secondary200">
        <div className="w-full bg-cust-primary900 sm:rounded-[100px] rounded-[50px] relative">
          <div className="w-10/12 mx-auto py-32">
            <div className="text-3xl font-bold text-white">Jenis</div>
            <div className="text-3xl font-bold text-white">Komunitas UMKM</div>
          </div>
          <div className="w-full absolute top-52">
            <div className="w-10/12 mx-auto mt-20">
              {data.map((index, i) => (
                <div className="w-[200px] sm:w-6/12 mx-auto" key={i}>
                  <div className="mx-auto bg-gray-300 relative rounded-2xl shadow-xl flex items-center mt-16 h-[250px] sm:h-[300px]">
                    <div className="w-full absolute -top-10 mb-2">
                      <img
                        src={gambar}
                        alt=""
                        className="sm:w-6/12 w-7/12 mx-auto "
                      />
                    </div>
                    <div className="absolute sm:relative">
                      <div className="w-fit mx-auto font-bold text-black sm:text-2xl text-xl">
                        {index.header}
                      </div>
                      <div className="w-10/12 text-center mx-auto sm:text-sm text-xs">
                        {index.detail}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jenis;

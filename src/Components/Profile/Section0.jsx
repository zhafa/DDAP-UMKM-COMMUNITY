const Section0 = ({ dataProfile }) => {
  const { namaPengguna, namaLengkap, email, whatsapp } = dataProfile;

  return (
    <>
    <div className="flex flex-col col-span-1 md:col-span-8 lg:col-span-7">
      <div className="col-span-3 h-fit lg:hidden flex flex-col gap-5 justify-center items-center p-2">
        <img
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1700668435/Rectangle_152_ocl4ks.png"
          className="w-1/3 aspect-square"
          alt="profile"
        />
        <div className="bg-[#DFF3F3] w-7/12 py-3 text-cust-primary900 font-bold">
          <p className="text-center">{namaPengguna}</p>
        </div>
      </div>
      <div className="col-span-7 h-fit bg-[#DFF3F3] px-8 py-10">
        <label className="text-cust-primary900 font-bold text-black">Nama Lengkap</label>
        <div className="bg-white w-full p-2 font-semibold text-cust-primary700 mb-5">
          {namaLengkap}
        </div>
        <label className="text-cust-primary900 font-bold text-black">Email</label>
        <div className="bg-white w-full p-2 font-semibold text-cust-primary700 mb-5">
          {email}
        </div>
        <label className="text-cust-primary900 font-bold">Whatsapp</label>
        <div className="bg-white w-full p-2 font-semibold text-cust-primary700 mb-5">
          {whatsapp}
        </div>
      </div>
    </div>
      <div className="col-span-3 h-fit hidden lg:flex flex-col gap-5 justify-center items-center p-2">
        <img
          src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1700668435/Rectangle_152_ocl4ks.png"
          className="w-1/2 aspect-square"
          alt="profile"
        />
        <div className="bg-[#DFF3F3] w-7/12 py-3 text-cust-primary900 font-bold">
          <p className="text-center">{namaPengguna}</p>
        </div>
      </div>
    </>
  );
};

export default Section0;

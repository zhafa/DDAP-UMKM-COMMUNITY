import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="h-screen bg-cust-secondary50 flex items-center font-poppins">
        <div className="lg:w-5/12 sm:w-8/12 w-10/12 mx-auto">
          <div className="font-bold text-4xl text-center w-full">Daftar</div>
          <div className="sm:w-7/12 w-10/12 mx-auto">
            <div className="pl-2 pt-6 pb-1 font-medium sm:text-base text-sm">
              Nama Depan
            </div>
            <input
              className="w-full pl-2 py-2 rounded-lg border-black border-2"
              placeholder="kartika"
            />
            <div className="pl-2 pt-6 pb-1 font-medium sm:text-base text-sm">
              Nama Belakang
            </div>
            <input
              className="w-full pl-2 py-2 rounded-lg border-black border-2"
              placeholder="putri"
            />
            <div className="pl-2 pt-6 pb-1 font-medium sm:text-base text-sm">
              Email
            </div>
            <input
              className="w-full pl-2 py-2 rounded-lg border-black border-2"
              placeholder="tika@gmail.com"
            />
            <div className="pl-2 pt-4 pb-1 font-medium sm:text-base text-sm">
              Kata Sandi
            </div>
            <input
              className="w-full pl-2 py-2 rounded-lg border-black border-2"
              type="password"
            />
            <div className="w-fit mx-auto pt-10">
              <Link to="/komunitas">
                <button className="bg-cust-secondary500 text-center py-2 px-16 text-white rounded-lg">
                  Daftar
                </button>
              </Link>
            </div>
          </div>
          <div className="w-fit mx-auto flex sm:text-sm text-xs pt-4">
            Sudah menjadi anggota?
            <Link to="/login" className="pl-2 underline text-gray-400">
              Masuk
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

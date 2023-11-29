import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="h-screen bg-cust-secondary50 flex items-center font-poppins">
        <div className="lg:w-5/12 sm:w-8/12 w-10/12 mx-auto">
          <div className="font-bold text-4xl text-center w-full">Masuk</div>
          <div className="sm:w-7/12 w-10/12 mx-auto">
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
            <div className="pt-2 text-xs text-gray-400">Lupa kata sandi?</div>
            <div className="w-fit mx-auto pt-10">
              <Link to="/komunitas">
                <button className="bg-cust-secondary500 text-center py-2 px-16 text-white rounded-lg">
                  Masuk
                </button>
              </Link>
            </div>
          </div>
          <div className="w-fit mx-auto flex sm:text-sm text-xs pt-4">
            Belum punya akun?
            <Link to="/register" className="pl-2 underline text-gray-400">
              Daftar sekarang
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

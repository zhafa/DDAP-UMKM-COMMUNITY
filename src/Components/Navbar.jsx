import logo from "../Assets/logo.svg";

const Navbar = () => {
  return (
    <div className="bg-white py-4">
      <div className="cust-container flex justify-center md:justify-start gap-5 items-center text-cust-primary800">
        <img src={logo} className="h-16 w-16 md:h-24 md:w-24" alt="Logo" />
        <p className="font-bold md:text-3xl">
          UMKM - Community
        </p>
      </div>
    </div>
  );
};

export default Navbar;

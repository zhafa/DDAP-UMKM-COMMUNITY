import { Link } from "react-router-dom";
import point from "../assets/point.svg";
import calendar from "../assets/calendar.svg";
import clock from "../assets/clock.svg";

const CardUntukAndaAcara = ({ data }) => {
  const { title, img, tag, lokasi, waktu, jam, link } = data;

  return (
    <div className="p-10 w-full flex flex-col gap-3 text-cust-primary900 border border-cust-primary900 bg-[#DBF2F2]">
      <img src={img} className="w-full" alt="img" />
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="font-normal text-sm text-cust-primary600">{tag}</p>
      <div className="grid grid-cols-2 gap-5">
        <div className="flex flex-col gap-5 justify-between">
          <div className="flex gap-2 items-center text-xs md:text-base">
            <img src={point} className="w-8 h-8" alt="icon" />
            <p>{lokasi}</p>
          </div>
          <div className="flex gap-2 items-center text-xs md:text-base">
            <img src={calendar} className="w-8 h-8" alt="icon" />
            <p>{waktu}</p>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-between">
          <div className="flex gap-2 items-start text-xs md:text-base">
            <img src={clock} className="w-8 h-8 -translate-y-1" alt="icon" />
            <p>{jam}</p>
          </div>
          <Link
            to={link}
            className="ms-auto w-fit col-span-1 text-cust-primary100 hover:bg-cust-primary800/90 bg-cust-primary800 py-2 px-8 font-bold rounded-xl transition-all duration-200"
          >
            Registrasi
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardUntukAndaAcara;

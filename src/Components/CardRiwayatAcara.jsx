import point from "../assets/point.svg";
import calendar from "../assets/calendar.svg";
import clock from "../assets/clock.svg";

import { Link } from "react-router-dom";

const CardRiwayatAcara = ({ data }) => {
  const { title, date, img, tag, description, lokasi, waktu, jam, link } = data;

  return (
    <div className="flex flex-col gap-2 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.3)]">
      <div className="border-2 grid grid-cols-12 gap-5 px-5 py-3 bg-[#DBF2F2] border-cust-primary900 overflow-hidden rounded-md md:rounded-none">
        <div className=" lg:col-span-1 hidden lg:flex items-start">
          <img
            src={img}
            className="w-full"
            alt=""
          />
        </div>
        <div className="col-span-12 lg:col-span-11 flex flex-col gap-2 text-cust-primary900">
          <div className="flex gap-4 items-center">
            <img
              src={img}
              className="w-14 sm:w-20 h-14 sm:h-20 lg:hidden"
              alt=""
            />
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center justify-start">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="font-light text-xs text-cust-primary300">
                  {date}
                </p>
              </div>
              <p className="font-normal text-sm text-cust-primary600">{tag}</p>
            </div>
          </div>
          <p className="text-base md:text-lg">{description}</p>
          <div className="flex justify-between mt-5">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center text-xs md:text-base">
                <img src={point} className="w-8 h-8" alt="icon" />
                <p>{lokasi}</p>
              </div>
              <div className="flex gap-2 items-center text-xs md:text-base">
                <img src={calendar} className="w-8 h-8" alt="icon" />
                <p>{waktu}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-start text-xs md:text-base">
                <img src={clock} className="w-8 h-8 -translate-y-1" alt="icon" />
                <p>{jam}</p>
              </div>
              <Link
                to={link}
                className="mx-auto md:hidden w-fit col-span-1 text-cust-primary100 hover:bg-cust-primary800/90 bg-cust-primary800 py-2 px-8 font-bold rounded-xl transition-all duration-200"
              >
                Terdaftar
              </Link>
            </div>
            <div className="hidden md:flex items-end">
              <Link
                to={link}
                className="mx-auto w-fit col-span-1 text-cust-primary100 hover:bg-cust-primary800/90 bg-cust-primary800 py-2 px-8 font-bold rounded-xl transition-all duration-200"
              >
                Terdaftar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRiwayatAcara;

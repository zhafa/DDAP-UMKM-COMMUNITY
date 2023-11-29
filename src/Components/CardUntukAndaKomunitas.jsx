import { Link } from "react-router-dom";

const CardUntukAndaKomunitas = ({ data }) => {
  const { title, description, subscribers, img, link } = data;

  return (
    <div className="flex flex-col gap-2 drop-shadow-[0px_2px_2px_rgba(0,0,0,0.3)]">
      <div className="border-2 bg-[#DBF2F2] border-cust-primary900 flex justify-center overflow-hidden rounded-md md:rounded-none">
        <div className="w-10/12 relative grid grid-cols-1 md:grid-cols-12 gap-5 py-10 md:py-5">
          <div className="col-span-1 md:col-span-2 relative flex gap-2 justify-center items-center">
            <img
              src={img}
              className="aspect-square w-14 h-14 sm:w-20 sm:h-20 md:w-full md:h-auto object-cover object-center"
              alt="gambar"
            />
            <h3 className="font-bold md:hidden w-2/3 text-start md:w-full text-base sm:text-xl md:text-2xl text-cust-primary900">
              {title}
            </h3>
          </div>
          <div className="col-span-1 md:col-span-10 flex flex-col gap-3 items-center justify-center">
            <h3 className="font-bold hidden md:block w-2/3 text-center md:w-full text-base sm:text-xl md:text-2xl text-cust-primary900">
              {title}
            </h3>
            <div className="w-full py-2 px-3 bg-white border border-cust-primary900">
              <p className="hidden md:block text-cust-primary900">
                {description}
              </p>
              <p className="md:hidden text-cust-primary900 text-xs sm:text-sm">
                {description.slice(0, 120)}...
              </p>
            </div>
            <div className="flex flex-col gap-2 items-center justify-center">
              <p className="text-center text-cust-primary900">{subscribers}</p>
              <img
                src="https://res.cloudinary.com/dr0lbokc5/image/upload/v1700757086/Group_850_l8iblv.png"
                className="object-fit object-center h-10"
                alt="img"
              />
            </div>
          </div>
          <Link
            to={link}
            className="mx-auto w-fit col-span-1 md:absolute md:bottom-5 md:right-0 hover:bg-cust-primary800/90 bg-cust-primary800 py-2 px-5 font-bold text-white rounded-full transition-all duration-200"
          >
            Bergabung
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardUntukAndaKomunitas;

import dataTips from "../data/dataTips";

const TabletTips = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 sm:gap-y-12 gap-5 sm:gap-x-10 md:gap-x-20 py-10">
            {dataTips.map((item, index) => {
                return (
                    <div key={index} className="bg-[#DFF3F3] flex flex-col gap-3 p-4 lg:p-8 border border-cust-primary400">
                        <img src={item.img} className="w-full" alt="img" />
                        <h3 className="font-bold text-base md:text-lg lg:text-xl text-cust-primary900">{item.title}</h3>
                        <p className="text-sm font-semibold text-cust-primary400">{item.views} . {item.date}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default TabletTips;
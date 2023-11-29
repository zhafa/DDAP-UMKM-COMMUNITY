import HandleHeader from "../Components/HandleHeader";
import KategoriTips from "../Components/KategoriTips";
import TabletTips from "../Components/TableTips";

const Tips = () => {
  return (
    <>
      <HandleHeader defaultHeader="search"  />
      <div className="cust-container py-5">
        <KategoriTips />
        <TabletTips />
      </div>
    </>
  );
};

export default Tips;

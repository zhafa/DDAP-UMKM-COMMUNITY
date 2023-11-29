import Acara from "../Components/Dashboard/Acara";
import Jenis from "../Components/Dashboard/Jenis";
import Landing from "../Components/Dashboard/Landing";
import Pemasaran from "../Components/Dashboard/Pemasaran";
import Tips from "../Components/Dashboard/Tips";

const Dashboard = () => {
  return (
    <>
      <Landing />
      <Jenis />
      <Acara />
      <Pemasaran />
      <Tips />
    </>
  );
};

export default Dashboard;

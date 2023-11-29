import HandleHeader from "../Components/HandleHeader";
import RiwayatKomunitas from "../Components/RiwayatKomunitas";
import UntukAndaKomunitas from "../Components/UntukAndaKomunitas";
import { useState } from "react";

const Komunitas = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <HandleHeader open={open} setOpen={setOpen} />
      {open ? <UntukAndaKomunitas /> : <RiwayatKomunitas />}
    </>
  );
};

export default Komunitas;

import HandleHeader from "../Components/HandleHeader";
import RiwayatAcara from "../Components/RiwayatAcara";
import UntukAndaAcara from "../Components/UntukAndaAcara";
import { useState } from "react";

const Acara = () => {
  
  const [open, setOpen] = useState(true);
  
  return (
    <>
      <HandleHeader open={open} setOpen={setOpen}  />
      {open ? <UntukAndaAcara /> : <RiwayatAcara />}
    </>
  );
};

export default Acara;

import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Views/Dashboard";
import Login from "./Views/Login";
import Register from "./Views/Register";
import Layout from "./Layout";
import Acara from "./Views/Acara";
import Komunitas from "./Views/Komunitas";
import Pemasaran from "./Views/Pemasaran";
import Profile from "./Views/Profile";
import JualProduk from "./Views/JualProduk";
import Produk from "./Views/Produk";
import Tips from "./Views/Tips";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route exact path="/" element={<Dashboard />} />

            <Route exact path="/acara" element={<Acara />} />
            <Route exact path="/komunitas/*" element={<Komunitas />} />
            <Route exact path="/pemasaran" element={<Pemasaran />} />
            <Route exact path="/produk" element={<Produk />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/jual" element={<JualProduk />} />
            <Route exact path="/tips" element={<Tips />} />
          </Route>

          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

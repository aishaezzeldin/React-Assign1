// Layout.jsx

import { Outlet } from "react-router-dom";
import Footer from "./assets/Components/Footer/Footer";
import Navbar from "./assets/Components/Navbar/Navbar";
import Information from "./assets/Components/Information/Inoformation";

export default function Layout() {
  return (
    <>
    <Navbar/>
      <div className="container-fluid  px-0 overflow-x-hidden">
        <Outlet />
      </div>
      <Information/>
      <Footer/>
    </>
  );
}

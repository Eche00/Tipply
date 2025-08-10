import Header from "./Header"
import { Outlet } from "react-router";
import  Footer from "./Footer"
// import { Svgs } from "../lib/svg/Svg";

function Container() {
  return (
    <div className="relative">
    <Header/>
    <div className="pt-[90px] ">
      <Outlet/>

    </div>
      <Footer/>
    </div>
  )
}

export default Container
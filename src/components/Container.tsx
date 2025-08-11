import Header from "./Header"
import { Outlet } from "react-router";

function Container() {
  return (
    <div className="relative">
    <Header/>
    
    <div className="pt-[90px] ">
      <Outlet/>
    </div>
    </div>
  )
}

export default Container
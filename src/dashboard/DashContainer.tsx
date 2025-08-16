import {  useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Icons } from "../lib/icons/Icons";
import { Close } from "@mui/icons-material";


function DashContainer() {
  const [compress, setCompress] = useState(false);
  const [hide, setHide] = useState(false);



  return (
    <div className="h-[100vh] relative sm:h-full bg-[#050520] w-full">
      
        <div className="w-[90%] mx-auto flex items-end justify-end py-[10px]">
          <span onClick={()=>setHide(!hide)} className=" sm:hidden flex z-50">{hide ? Icons.menu : <Close/>}</span>
        </div>
      <section className=" w-full flex  relative ">
       {!hide && 
        <div className="flex fixed left-0 sm:left-[20px] top-[20px] bottom-[20px] ">
          <Sidebar compress={compress} setCompress={setCompress} />
        </div>}
        <div
          className={
            compress
              ? "ml-0 md:ml-[80px] flex-1 p-5 h-[100vh]  "
              : "ml-0 md:ml-[300px] flex-1 p-5 h-[100vh]  "
          }>
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default DashContainer;

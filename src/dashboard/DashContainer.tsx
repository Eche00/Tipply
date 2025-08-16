import {  useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Icons } from "../lib/icons/Icons";


function DashContainer() {
  const [compress, setCompress] = useState(false);
  const [hide, setHide] = useState(false);



  return (
    <div className="h-[100vh] relative sm:h-full bg-[#050520] w-full">
      {hide && 
        <div className="w-[90%] mx-auto flex items-center justify-between py-[10px]">
           <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Tipply-logo" className="sm:w-[54px] sm:h-[50px] w-[38px] h-[34px] rounded-full object-cover" />
          <h2 className="text-[#FFFFFF] sm:text-[36px] text-[24px] font-[400] leading-[30px]">ipply</h2>
         </div>
          <span onClick={()=>setHide(false)}>{Icons.menu}</span>
        </div>}
      <section className=" w-full flex  relative ">
       {!hide && 
        <div className="flex fixed left-0 sm:left-[20px] top-[20px] bottom-[20px] ">
          <Sidebar compress={compress} setCompress={setCompress} setHide={setHide} />
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

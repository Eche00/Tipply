import {  useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


function DashContainer() {
  const [compress, setCompress] = useState(false);



  return (
    <div className="h-[100vh] relative sm:h-full bg-[#050520] w-full">
     
      <section className=" w-full flex  relative ">
        <div className="hidden md:flex fixed left-[20px] top-[20px] bottom-[20px]">
          <Sidebar compress={compress} setCompress={setCompress} />
        </div>
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

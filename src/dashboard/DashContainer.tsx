import {  useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";


function DashContainer() {
  const [compress, setCompress] = useState(false);



  return (
    <div className="h-[100vh] relative sm:h-full bg-[#1F1F1F] w-full">
     
      <section className=" w-full flex  relative bg-white dark:bg-[rgb(31,31,31)]">
        <div className="hidden md:flex fixed left-0">
          <Sidebar compress={compress} setCompress={setCompress} />
        </div>
        <div
          className={
            compress
              ? "ml-0 md:ml-[80px] flex-1 p-5 h-[100vh] bg-[#1F1F1F] "
              : "ml-0 md:ml-[300px] flex-1 p-5 h-[100vh] bg-[#1F1F1F] "
          }>
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default DashContainer;

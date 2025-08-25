import {  useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { Icons } from "../lib/icons/Icons";
import { Close } from "@mui/icons-material";
import { auth } from "../lib/firebase";
import BottomNav from "./BottomNav";
import GeneralNav from "../components/GeneralNav";
import { headerLogics } from "../lib/logics/headerLogic";


function DashContainer() {
  const [compress, setCompress] = useState(false);
   const {dropDown,setDropDown} = headerLogics()
 
 const navigate = useNavigate()

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(async(authUser)=>{
      if(!authUser){
        return navigate('/auth')
      }
    })

    return ()=>unsubscribe()
  },[auth])

  return (
    <div className="h-[100vh] relative sm:h-full bg-[#050520] w-full ">
      
        <div className="flex items-end justify-end fixed top-0 left-0 w-full z-50 py-[25px] pr-5 bg-[#050520]/20 backdrop-blur-[24.7px] md:hidden">
          <span onClick={()=>setDropDown(!dropDown)}  >{!dropDown ? Icons.menu : <Close/>}</span>
        </div>
      <section className=" w-full flex  relative ">
      
        <div className="md:flex hidden fixed left-0 sm:left-[20px] top-[20px] bottom-[20px] z-50">
          <Sidebar compress={compress} setCompress={setCompress} />
        </div>
       
        <div
          className={
            compress
              ? "ml-0 md:ml-[80px] flex-1 sm:p-5 h-[100vh]  "
              : "ml-0 md:ml-[300px] flex-1 sm:p-5 h-[100vh]  "
          }>
            <div className="sm:pb-0 py-[90px]">
          <Outlet />
            </div>

       {/* Bottom Navbar  */}
          <section className="  fixed sm:hidden flex bottom-[20px] w-full">
        <BottomNav />
      </section>
        </div>
      </section>

      {dropDown &&    
       <GeneralNav/>}
    </div>
  );
}

export default DashContainer;

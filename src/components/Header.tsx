import { Link, NavLink } from "react-router"
import { Icons } from "../lib/icons/Icons"
// import {  useState } from "react"
import { Close } from "@mui/icons-material"
import GeneralNav from "./GeneralNav"
import { useUserInfo } from "../lib/logics/profileLogic"
import { headerLogics } from "../lib/logics/headerLogic"

function Header() {
  const {user} = useUserInfo()
  const {dropDown,setDropDown} = headerLogics()

  return (
    <div className="bg-[#050520]/20 backdrop-blur-[24.7px] fixed top-0 left-0 w-full z-50" >
      <section className="flex items-center justify-between max-w-[85%] sm:max-w-[90%] md:max-w-[85%] mx-auto py-[20px]">
        {/* logo  */}
         <div className="flex flex-1 items-center gap-2">
          <img src="/logo.png" alt="Tipply-logo" className="md:w-[54px] md:h-[50px] w-[38px] h-[34px] rounded-full object-cover" />
          <h2 className="text-[#FFFFFF] md:text-[36px] text-[24px] font-[400] leading-[30px]">ipply</h2>
         </div>
     
       {/* navigations */}
         <div className="flex flex-1 items-center justify-center text-nowrap">
          <nav className="bg-[#56565633] md:flex hidden items-center gap-[40px] px-[36px] py-[10px] rounded-full">
          <NavLink to='/' className={({isActive})=> isActive ? 'text-[#008CFF] font-bold text-sm': ' text-white font-bold text-sm'}>Home</NavLink>
          <NavLink to='/about-us' className={({isActive})=> isActive ? 'text-[#008CFF] font-bold text-sm': ' text-white font-bold text-sm'}>About Us</NavLink>
          <NavLink to='/dev-spot' className={({isActive})=> isActive ? 'text-[#008CFF] font-bold text-sm': ' text-white font-bold text-sm'}>DevSpot</NavLink>
          <NavLink to='/tip-board' className={({isActive})=> isActive ? 'text-[#008CFF] font-bold text-sm': ' text-white font-bold text-sm'}>Tipboard</NavLink>
         </nav>
         </div>

      {/* auth button  */}
         {user?.username ? 
         <div className="md:flex flex-1 items-end justify-end gap-[10px] md:pl-2 hidden">
         <p className="w-[50px] h-[50px] rounded-full bg-black border-2 border-[#008CFF] flex items-center justify-center">{user?.username?.slice(0,1)}</p> <div className="flex flex-col gap-1">
          <p className=" text-[14px] font-bold bg-gradient-to-r from-[#008CFF] to-[#FFFFFF69] bg-clip-text text-transparent">{user?.username}</p>
          <Link to='/dashboard/home'  className=" shadow-sm text-gray-400 text-[12px] font-bold cursor-pointer hover:underline">Dashboard</Link>
         </div>
         </div>:
         <div className="flex flex-1 items-center justify-end gap-[20px] md:pl-2 ">
          <Link to='/connect-wallet'  className="w-[146px] h-[40px] bg-[#56565653]   md:flex hidden items-center justify-center rounded-[13px]">Connect Wallet</Link>
          <Link to='/auth'  className="w-[106px] h-[40px] bg-[#008CFF]   md:flex hidden items-center justify-center rounded-[13px]">Register </Link>
         </div>}
         <button className=" md:hidden flex" onClick={()=>setDropDown(!dropDown)}>{dropDown ? <Close fontSize="large"/> : Icons.menu }</button>
       </section>

       {dropDown &&    
       <GeneralNav />}
    </div>
  )
}

export default Header
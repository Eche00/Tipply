import { Link, NavLink } from "react-router"
import { Icons } from "../lib/icons/Icons"
import { useState } from "react"
import { Close } from "@mui/icons-material"

function Header() {
  const [dropDown,setDropDown] = useState(false)
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
         <div className="flex flex-1 items-center justify-end gap-[20px] md:pl-2 ">
          <Link to='/connect-wallet'  className="w-[146px] h-[40px] bg-[#56565653]   md:flex hidden items-center justify-center rounded-[13px]">Connect Wallet</Link>
          <Link to='/auth'  className="w-[106px] h-[40px] bg-[#008CFF]   md:flex hidden items-center justify-center rounded-[13px]">Register </Link>
         </div>
         <button className=" md:hidden flex" onClick={()=>setDropDown(!dropDown)}>{dropDown ? <Close fontSize="large"/> : Icons.menu }</button>
       </section>

       {dropDown &&    <section 
      
       className="fixed top-[70px] left-0 w-full h-[100vh] bg-[#050520] z-50 flex flex-col gap-[32px] md:hidden">
          <div className="flex flex-col  text-white text-[16px] font-[500]" onClick={()=>setDropDown(!dropDown)}>
          <NavLink to='/' className={({isActive})=> isActive ? 'text-[#008CFF] font-bold text-sm cursor-pointer p-[10px]  border-b border-gray-500': ' text-white font-bold text-sm cursor-pointer p-[10px]  border-b border-gray-500'}>Home</NavLink>
          <NavLink to='/about-us' className={({isActive})=> isActive ? 'text-[#008CFF] font-bold text-sm cursor-pointer p-[10px]  border-b border-gray-500': ' text-white font-bold text-sm cursor-pointer p-[10px]  border-b border-gray-500'}>About Us</NavLink>
          <NavLink to='/dev-spot' className={({isActive})=> isActive ? 'text-[#008CFF] font-bold text-sm cursor-pointer p-[10px]  border-b border-gray-500': ' text-white font-bold text-sm cursor-pointer p-[10px]  border-b border-gray-500'}>DevSpot</NavLink>
          <NavLink to='/tip-board' className={({isActive})=> isActive ? 'text-[#008CFF] font-bold text-sm cursor-pointer p-[10px]  border-b border-gray-500': ' text-white font-bold text-sm cursor-pointer p-[10px]  border-b border-gray-500'}>Tipboard </NavLink>
           </div>
          <div className="flex sm:flex-row flex-col sm:items-center gap-[20px]">
             <Link to='/connect-wallet'  className=" px-[32px] py-[10px] text-[16px] mx-[20px] rounded-[8px] bg-[#56565653] text-white cursor-pointer hover:scale-[105%] transition-all duration-300 text-center flex-1">Connect Wallet</Link>
           <Link to='/auth'  className=" px-[32px] py-[10px] text-[16px] mx-[20px] rounded-[8px] bg-[#008CFF] text-white cursor-pointer hover:scale-[105%] transition-all duration-300 text-center flex-1">Register</Link>

          </div>
            {/* bg */}
         <span className=" circleBlurLH md:hidden inline-block"></span>
        </section>}
    </div>
  )
}

export default Header
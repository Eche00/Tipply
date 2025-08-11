import { Link, NavLink } from "react-router"
import { Icons } from "../lib/icons/Icons"

function Header() {
  return (
    <div className="bg-[#02041A0F] backdrop-blur-[24.7px] fixed top-0 left-0 w-full z-50" >
      <section className="flex items-center justify-between max-w-[85%] mx-auto py-[20px]">
        {/* logo  */}
         <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Tipply-logo" className="sm:w-[54px] sm:h-[50px] w-[38px] h-[34px] rounded-full object-cover" />
          <h2 className="text-[#FFFFFF] sm:text-[36px] text-[24px] font-[400] leading-[30px]">ipply</h2>
         </div>
     
       {/* navigations */}
         <nav className="bg-[#FFFFFF08] sm:flex hidden items-center gap-[40px] p-[16px] rounded-full border-b-[1px] border-[#FFFFFF]">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about-us'>About Us</NavLink>
          <NavLink to='/dev-spot'>DevSpot</NavLink>
         </nav>

      {/* auth button  */}
         <Link to='/connect-wallet'  className="w-[146px] h-[40px] bg-gradient-to-b from-[#505050] to-[#030404]  border-b-[1px] border-[#FFFFFFBD] sm:flex hidden items-center justify-center rounded-[13px]">Connect Wallet</Link>
         <button className=" sm:hidden flex">{Icons.menu}</button>
       </section>
    </div>
  )
}

export default Header
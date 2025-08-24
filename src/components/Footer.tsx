import { Link, NavLink } from "react-router"
import { Svgs } from "../lib/svg/Svg"

function Footer() {

  return (
    <div className=" text-white ">
      <footer className="flex flex-col ">
        <section className="flex sm:flex-row flex-col py-[50px]  gap-[20px] w-[80%] mx-auto border-b border-[#343841]">
          <div className="flex-1 flex flex-col gap-[16px] sm:border-r border-[#343841]">
            <h2 className=" text-[#AFB3CA] text-[24px] font-[400] leading-[32px] ">Join the 𝓣ipply Ecosystem <br /> Today!</h2> 
          <Link to='/connect-wallet'  className="sm:w-[384px] w-fit sm:px-0 px-[30px] h-[40px] bg-[#56565653] border-b border-[#008CFF]   flex  items-center justify-center rounded-[13px]">Connect Wallet</Link>
          </div>
          <div className="flex-1 flex sm:flex-row flex-col items-start justify-between gap-[30px]">
            <ul className="flex flex-col ">
              <p className="text-[#F2F6FA] text-[16px] font-[300] opacity-[0.5] mb-[16px]">Routes</p>
              <NavLink to='/' className={({isActive})=> isActive ? 'text-[#008CFF]':"text-[#F2F6FA] text-[16px] leading-[24px] font-[400] hover:underline" }>Home</NavLink>
              <NavLink to='/about-us' className={({isActive})=> isActive ? 'text-[#008CFF]':"text-[#F2F6FA] text-[16px] leading-[24px] font-[400] hover:underline" }>About</NavLink>
              <NavLink to='/dev-spot' className={({isActive})=> isActive ? 'text-[#008CFF]':"text-[#F2F6FA] text-[16px] leading-[24px] font-[400] hover:underline" }>DevSpot</NavLink>
              <NavLink to='/tip-board' className={({isActive})=> isActive ? 'text-[#008CFF]':"text-[#F2F6FA] text-[16px] leading-[24px] font-[400] hover:underline" }>Tipboard</NavLink>
            </ul>
            <ul className="flex flex-col ">
              <p className="text-[#F2F6FA] text-[16px] font-[300] opacity-[0.5] mb-[16px]">Resources</p>
              <a href="#"  className="text-[#F2F6FA] text-[16px] leading-[24px] font-[400] ">Documentation</a>
              <a href="#" className="text-[#F2F6FA] text-[16px] leading-[24px] font-[400] ">Roadmap</a>
              <a href="#" className="text-[#F2F6FA] text-[16px] leading-[24px] font-[400] ">Tokenomics</a>
            </ul>
                    <div className="flex sm:flex-col flex-row items-center gap-[10px]">{Svgs.twitter}{Svgs.discord}</div>

          </div>
        </section>
       <section className="flex items-center justify-center  py-[50px]  gap-[20px] w-[80%] mx-auto">
          <p className="text-[16px] text-[#F2F6FA] font-[400] leading-[24px] opacity-[0.5]"> © 2025  by Eche_codes</p>
        </section>
      </footer>
    </div>
  )
}

export default Footer
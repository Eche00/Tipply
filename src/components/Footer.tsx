import { Link } from "react-router"
import { Svgs } from "../lib/svg/Svg"

function Footer() {

  return (
    <div className=" text-white ">
      <footer className="flex flex-col ">
        <section className="flex sm:flex-row flex-col py-[50px]  gap-[20px] w-[80%] mx-auto">
          <div className="flex-1 flex flex-col gap-[16px]">
            <h2 className=" text-[#AFB3CA] text-[24px] font-[400] leading-[32px] ">Join the Vault Ecosystem <br /> Today!</h2> 
          <Link to='/connect-wallet'  className="sm:w-[384px] w-fit sm:px-0 px-[30px] h-[40px] bg-gradient-to-b from-[#FFFFFF45] to-[#FFFFFF21]   flex  items-center justify-center rounded-[13px]">Connect Wallet</Link>
          </div>
          <div className="flex-1 flex sm:flex-row flex-col items-start justify-between gap-[30px]">
            <ul className="flex flex-col ">
              <p className="text-[#F2F6FA] text-[16px] font-[300] opacity-[0.5] mb-[16px]">Routes</p>
              <Link to='/about-us' className="text-[#F2F6FA] text-[16px] leading-[24px] font-[400] ">About</Link>
              <Link to='/dev-spot' className="text-[#F2F6FA] text-[16px] leading-[24px] font-[400] ">DevSpot</Link>
            </ul>
            <ul className="flex flex-col ">
              <p className="text-[#F2F6FA] text-[16px] font-[300] opacity-[0.5] mb-[16px]">Resources</p>
              <a href="#"  className="text-[#F2F6FA] text-[16px] leading-[24px] font-[400] ">Documentation</a>
              <a href="#" className="text-[#F2F6FA] text-[16px] leading-[24px] font-[400] ">Roadmap</a>
              <a href="#" className="text-[#F2F6FA] text-[16px] leading-[24px] font-[400] ">Tokenomics</a>
            </ul>
            <ul className="flex flex-col ">
              <p className="text-[#F2F6FA] text-[16px] font-[300] opacity-[0.5] mb-[16px]">Ecosystem</p>
              <li className="text-[#F2F6FA] text-[16px] leading-[24px] font-[400] ">Terms & Conditions</li>
              <li className="text-[#F2F6FA] text-[16px] leading-[24px] font-[400] ">Cookie Policy</li>
            </ul>
          </div>
        </section>
        <hr className=" w-full h-[1px] bg-[#343841] " />
       <section className="flex sm:flex-row justify-between flex-col py-[50px]  gap-[20px] w-[80%] mx-auto">
        <div className="flex sm:flex-row flex-col gap-[32px]">
          <p className="text-[16px] text-[#F2F6FA] font-[400]">Privacy Policy</p>
          <p className="text-[16px] text-[#F2F6FA] font-[400]">Terms of Service</p>
          <p className="text-[16px] text-[#F2F6FA] font-[400] leading-[24px] opacity-[0.5]">MIT License © 2025 Built by Eche_codes</p>
        </div>
        <div className="flex items-center gap-[10px]">{Svgs.twitter}{Svgs.discord}</div>
       </section>
      </footer>
    </div>
  )
}

export default Footer
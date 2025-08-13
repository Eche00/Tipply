import { Link } from "react-router"
import { Icons } from "../lib/icons/Icons"
import Footer from "../components/Footer"
import { Svgs } from "../lib/svg/Svg"

function Tipboard() {
  return (
    <div>
        <div className="    bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px]  [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])]   h-fit   w-full">
          <h2 className="flex-1  text-[40px]  leading-[55px] capitalize bg-gradient-to-r from-[#008CFF] to-[#FFFFFF69] font-extrabold bg-clip-text text-transparent w-[90%] mx-auto">
            Tipboard
          </h2>
         
        {/* Tippers */}
       <section className="w-[90%] mx-auto flex sm:flex-row flex-col gap-[20px] py-[20px] pb-[50px]">
        <div className="flex-1 bg-black h-fit rounded-[16px] p-[20px]">
          <h3 className=" font-bold py-2">TOP TIPPERS</h3>
          <table className=" w-full text-left ">
            <thead className="border-b-[0.1px] border-[#008CFF]"> 
              <tr>
              <th className="py-2">#</th>
              <th className="py-2">Address</th>
              <th className="py-2 sm:flex hidden">Tip</th>
              <th className="py-2">Tipped</th>
              <th className="py-2">Badge</th>
              
              </tr>
             
              </thead>
            <tbody className="text-[12px]">
             
          
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3">1.</td>
              <td className="py-3">
                <p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              <td className="py-3 group relative">{Icons.star} <span className="hidden group-hover:flex absolute top-[50%] -translate-y-1/2 right-0 bg-[#008CFF]/20 text-[008CFF] text-sm rounded-full px-[10px] py-1">Supporter</span></td>
              </tr>
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3">1.</td>
              <td className="py-3">
                <p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              <td className="py-3 group relative">{Icons.star} <span className="hidden group-hover:flex absolute top-[50%] -translate-y-1/2 right-0 bg-[#008CFF]/20 text-[008CFF] text-sm rounded-full px-[10px] py-1">Supporter</span></td>
              </tr>
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3">1.</td>
              <td className="py-3">
                <p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              <td className="py-3 group relative">{Icons.star} <span className="hidden group-hover:flex absolute top-[50%] -translate-y-1/2 right-0 bg-[#008CFF]/20 text-[008CFF] text-sm rounded-full px-[10px] py-1">Supporter</span></td>
              </tr>
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3">1.</td>
              <td className="py-3">
                <p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              <td className="py-3 group relative">{Icons.star} <span className="hidden group-hover:flex absolute top-[50%] -translate-y-1/2 right-0 bg-[#008CFF]/20 text-[008CFF] text-sm rounded-full px-[10px] py-1">Supporter</span></td>
              </tr>
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3">1.</td>
              <td className="py-3">
                <p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              <td className="py-3 group relative">{Icons.star} <span className="hidden group-hover:flex absolute top-[50%] -translate-y-1/2 right-0 bg-[#008CFF]/20 text-[008CFF] text-sm rounded-full px-[10px] py-1">Supporter</span></td>
              </tr>
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3">1.</td>
              <td className="py-3">
                <p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              <td className="py-3 group relative">{Icons.star} <span className="hidden group-hover:flex absolute top-[50%] -translate-y-1/2 right-0 bg-[#008CFF]/20 text-[008CFF] text-sm rounded-full px-[10px] py-1">Supporter</span></td>
              </tr>
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3">1.</td>
              <td className="py-3">
                <p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              <td className="py-3 group relative">{Icons.star} <span className="hidden group-hover:flex absolute top-[50%] -translate-y-1/2 right-0 bg-[#008CFF]/20 text-[008CFF] text-sm rounded-full px-[10px] py-1">Supporter</span></td>
              </tr>
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3">1.</td>
              <td className="py-3">
                <p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              <td className="py-3 group relative">{Icons.star} <span className="hidden group-hover:flex absolute top-[50%] -translate-y-1/2 right-0 bg-[#008CFF]/20 text-[008CFF] text-sm rounded-full px-[10px] py-1">Supporter</span></td>
              </tr>
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3">1.</td>
              <td className="py-3">
                <p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              <td className="py-3 group relative">{Icons.star} <span className="hidden group-hover:flex absolute top-[50%] -translate-y-1/2 right-0 bg-[#008CFF]/20 text-[008CFF] text-sm rounded-full px-[10px] py-1">Supporter</span></td>
              </tr>
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3">1.</td>
              <td className="py-3">
                <p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              <td className="py-3 group relative">{Icons.star} <span className="hidden group-hover:flex absolute top-[50%] -translate-y-1/2 right-0 bg-[#008CFF]/20 text-[008CFF] text-sm rounded-full px-[10px] py-1">Supporter</span></td>
              </tr>
             </tbody>
          </table>
        </div>
        {/* Tipped devs  */}
        <div className="flex-1 bg-black h-fit rounded-[16px] p-[20px]">
          <h3 className=" font-bold py-2">TOP TIPPED</h3>
          <table className=" w-full text-left ">
            <thead className="border-b-[0.1px] border-[#008CFF]"> 
              <tr>
              <th className="py-2">#</th>
              <th className="py-2">Username</th>
              <th className="py-2">Address</th>
              <th className="py-2 sm:flex hidden">Tip</th>
              <th className="py-2">Total Tip</th>
              
              </tr>
             
              </thead>
            <tbody className="text-[12px]">
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3"><img src="/profile.webp" alt="" className="w-[20px] h-[20px] rounded-full object-cover border border-[#008CFF]" /></td>
              <td className="py-3">Batman
                </td>
              <td className="py-3"><p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              </tr>
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3"><img src="/profile.webp" alt="" className="w-[20px] h-[20px] rounded-full object-cover border border-[#008CFF]" /></td>
              <td className="py-3">Batman
                </td>
              <td className="py-3"><p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              </tr>
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3"><img src="/profile.webp" alt="" className="w-[20px] h-[20px] rounded-full object-cover border border-[#008CFF]" /></td>
              <td className="py-3">Batman
                </td>
              <td className="py-3"><p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              </tr>
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3"><img src="/profile.webp" alt="" className="w-[20px] h-[20px] rounded-full object-cover border border-[#008CFF]" /></td>
              <td className="py-3">Batman
                </td>
              <td className="py-3"><p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              </tr>
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3"><img src="/profile.webp" alt="" className="w-[20px] h-[20px] rounded-full object-cover border border-[#008CFF]" /></td>
              <td className="py-3">Batman
                </td>
              <td className="py-3"><p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              </tr>
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3"><img src="/profile.webp" alt="" className="w-[20px] h-[20px] rounded-full object-cover border border-[#008CFF]" /></td>
              <td className="py-3">Batman
                </td>
              <td className="py-3"><p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              </tr>
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3"><img src="/profile.webp" alt="" className="w-[20px] h-[20px] rounded-full object-cover border border-[#008CFF]" /></td>
              <td className="py-3">Batman
                </td>
              <td className="py-3"><p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              </tr>
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3"><img src="/profile.webp" alt="" className="w-[20px] h-[20px] rounded-full object-cover border border-[#008CFF]" /></td>
              <td className="py-3">Batman
                </td>
              <td className="py-3"><p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              </tr>
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3"><img src="/profile.webp" alt="" className="w-[20px] h-[20px] rounded-full object-cover border border-[#008CFF]" /></td>
              <td className="py-3">Batman
                </td>
              <td className="py-3"><p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              </tr>
              <tr className="  border-b-[0.1px] border-[#343841]  cursor-pointer">
              <td className="py-3"><img src="/profile.webp" alt="" className="w-[20px] h-[20px] rounded-full object-cover border border-[#008CFF]" /></td>
              <td className="py-3">Batman
                </td>
              <td className="py-3"><p className="bg-[#FFFFFF0A] w-fit px-[10px] py-[2px] border-[1px] shadow-sm  border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-[16px] rounded-full ">0xA34......56F8</p>
                </td>
              <td className="py-3 sm:flex hidden">2x</td>
              <td className="py-3">2.5 ETH</td>
              </tr>
             </tbody>
          </table>
        </div>
       </section>

       <section className="w-[90%] mx-auto py-[30px]">
         {/* Discover & Tip */}
          <div className="flex sm:flex-row flex-col gap-[20px] bg-[#141414] rounded-[24px] sm:h-full sm:max-h-[377px] h-[752px] overflow-hidden ">
           <div className="flex flex-col gap-[16px] sm:py-[61px] py-[30px] sm:pl-[70px] sm:pr-0 pr-[30px] pl-[30px] sm:flex-1 w-full" >
             <p className="bg-[#FFFFFF0A] px-[10px] py-[8px] border-[1px] shadow-sm  border-[#FFFFFF14] text-[#FFFFFF] text-[12px] font-extrabold leading-[16px] flex items-center justify-center gap-[10px] rounded-full uppercase w-[117px]">DevSpot</p>
             <h3 className=" text-[#CAD1E9] text-[32px] font-[400]">Discover & Tip Today</h3>
             <p className=" text-[#AFB3CA] text-[16px] font-[400] max-w-[750px]">Discover talented developers shaping the Web3 space. Explore their projects, tip your favorites, and connect directly to support innovation.</p>
              <Link to='/dev-spot'  className="w-[146px] h-[40px] bg-[#56565653] border-b border-[#008CFF] flex  items-center justify-center rounded-[13px]">View Devs</Link>
           </div>
           <div className="flex flex-1 items-center justify-center  w-full  ">
             {Svgs.tipbig}

           </div>
          </div>
       </section>
      </div>

      {/* footer  */}
      <Footer/>
    </div>
  )
}

export default Tipboard
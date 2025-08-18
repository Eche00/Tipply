import { Icons } from "../../lib/icons/Icons"

function LeaderBoard() {
  return (
  <div className="bg-[#141718]   h-[98%] rounded-[16px] overflow-hidden flex flex-col gap-[20px] p-[20px]">
    <section className="flex items-center justify-between gap-[20px]">
          <h2 className="text-[32px] font-extrabold  w-fit">History</h2>
          <div className="flex items-center gap-[20px]">
            <h2 className="text-[20px] font-[400] border-[1px] shadow-sm  border-[#FFFFFF14] w-fit py-[5px] px-[32px] rounded-[8px] bg-[#FFFFFF0A]">Total Tips:</h2>
            <h2 className="text-[20px] font-[400] border-[1px] shadow-sm  border-[#FFFFFF14] w-fit py-[5px] px-[32px] rounded-[8px] bg-[#034FE3]">Total Tips:</h2>
          </div>

      </section>
     <main className="flex-1 bg-[#0D0F10] shadow-md border border-gray-800/50 h-fit rounded-[16px] p-[20px]">
       {/* Tip board  */}
                          <table className=" w-full text-left ">
                            <thead className="border-b-[0.1px] border-[#008CFF]"> 
                              <tr>
                              <th className="py-2">#</th>
                              <th className="py-2">Address</th>
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
                              <td className="py-3">2.5 ETH</td>
                              <td className="py-3 group relative">{Icons.star} <span className="hidden group-hover:flex absolute top-[50%] -translate-y-1/2 right-0 bg-[#008CFF]/20 text-[008CFF] text-sm rounded-full px-[10px] py-1">Supporter</span></td>
                              </tr>
                             
                             </tbody>
                          </table>
     </main>
    </div>
  )
}

export default LeaderBoard
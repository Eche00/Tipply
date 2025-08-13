import { Icons } from "../../lib/icons/Icons";
import { Search } from "@mui/icons-material";
import { Svgs } from "../../lib/svg/Svg";

function Devs() {
  return (
    <div className="    bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px]  [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])]   h-fit  flex  items-center justify-center  w-full ">
      <section className="flex flex-col w-[90%] mx-auto py-[50px] relative z-30 sm:h-[100vh]">
        <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between gap-[20px]  relative z-30">
          <h2 className="flex-1  text-[40px]  leading-[55px] capitalize bg-gradient-to-r from-[#008CFF] to-[#FFFFFF69] font-extrabold bg-clip-text text-transparent">
            Developers
          </h2>
          <div className="flex flex-1 items-center gap-[10px] border-1 border-[#008CFF] px-[10px] py-[5px] rounded-[8px]"><Search fontSize="large"/> <input type="text" className=" w-full flex-1 outline-none border-none" placeholder="Search by username..."/></div>
              <div className="flex-1 flex justify-end ">
               <span>{Svgs.person}</span>
              </div>
        </div>

        <section className="flex  flex-wrap gap-[48px] sm:justify-start justify-center py-[48px] ">
          {/* profile  */}
          <section className=" bg-[#141414] rounded-[24px] flex flex-col gap-[5px] overflow-hidden w-[320px] h-fit group hover:scale-[102%] transition-all duration-300">
            <div className=" w-full h-fit ">
              <img
                src="/profile.webp"
                alt=""
                className=" w-full h-[150px] hover:scale-[105%]  object-cover duration-300"
              />
            </div>

            <div className="w-[90%] mx-auto pb-[10px] flex items-center justify-between gap-[5px]">
              <h3 className="text-[20px] text-[#FFFFFF] font-[400] italic">
                @username
              </h3>
              <p className="bg-[#FFFFFF0A] px-[10px] py-[5px] border-[1px] shadow-sm  border-[#FFFFFF14] text-[#FFFFFF] text-[10px] font-bold leading-[16px] flex items-center justify-center gap-[10px] rounded-full uppercase">
                Software Developer
              </p>
            </div>
            <div className="w-[90%] mx-auto flex gap-[15px] items-center pb-[20px]">
              <button className="flex-1 py-[8px] bg-[#56565653] rounded-[13px] flex items-center justify-center border-b border-[#008CFF] cursor-pointer hover:scale-[102%] transition-all duration-300 font-extrabold">
                View
              </button>
              <button className="flex-1 py-[8px] bg-[#008CFF] rounded-[13px] flex items-center justify-center border-b border-[#7346F1] text-white font-extrabold cursor-pointer hover:scale-[102%] transition-all duration-300">
                𝓣ip
              </button>
            </div>
          </section>
          {/* profile  */}
          <section className=" bg-[#141414] rounded-[24px] flex flex-col gap-[5px] overflow-hidden w-[320px] h-fit group hover:scale-[102%] transition-all duration-300">
            <div className=" w-full h-fit ">
              <img
                src="/profile.webp"
                alt=""
                className=" w-full h-[150px] hover:scale-[105%]  object-cover duration-300"
              />
            </div>

            <div className="w-[90%] mx-auto pb-[10px] flex items-center justify-between gap-[5px]">
              <h3 className="text-[20px] text-[#FFFFFF] font-[400] italic">
                @username
              </h3>
              <p className="bg-[#FFFFFF0A] px-[10px] py-[5px] border-[1px] shadow-sm  border-[#FFFFFF14] text-[#FFFFFF] text-[10px] font-bold leading-[16px] flex items-center justify-center gap-[10px] rounded-full uppercase">
                Software Developer
              </p>
            </div>
            <div className="w-[90%] mx-auto flex gap-[15px] items-center pb-[20px]">
              <button className="flex-1 py-[8px] bg-[#56565653] rounded-[13px] flex items-center justify-center border-b border-[#008CFF] cursor-pointer hover:scale-[102%] transition-all duration-300 font-extrabold">
                View
              </button>
              <button className="flex-1 py-[8px] bg-[#008CFF] rounded-[13px] flex items-center justify-center border-b border-[#7346F1] text-white font-extrabold cursor-pointer hover:scale-[102%] transition-all duration-300">
                𝓣ip
              </button>
            </div>
          </section>
          {/* profile  */}
          <section className=" bg-[#141414] rounded-[24px] flex flex-col gap-[5px] overflow-hidden w-[320px] h-fit group hover:scale-[102%] transition-all duration-300">
            <div className=" w-full h-fit ">
              <img
                src="/profile.webp"
                alt=""
                className=" w-full h-[150px] hover:scale-[105%]  object-cover duration-300"
              />
            </div>

            <div className="w-[90%] mx-auto pb-[10px] flex items-center justify-between gap-[5px]">
              <h3 className="text-[20px] text-[#FFFFFF] font-[400] italic">
                @username
              </h3>
              <p className="bg-[#FFFFFF0A] px-[10px] py-[5px] border-[1px] shadow-sm  border-[#FFFFFF14] text-[#FFFFFF] text-[10px] font-bold leading-[16px] flex items-center justify-center gap-[10px] rounded-full uppercase">
                Software Developer
              </p>
            </div>
            <div className="w-[90%] mx-auto flex gap-[15px] items-center pb-[20px]">
              <button className="flex-1 py-[8px] bg-[#56565653] rounded-[13px] flex items-center justify-center border-b border-[#008CFF] cursor-pointer hover:scale-[102%] transition-all duration-300 font-extrabold">
                View
              </button>
              <button className="flex-1 py-[8px] bg-[#008CFF] rounded-[13px] flex items-center justify-center border-b border-[#7346F1] text-white font-extrabold cursor-pointer hover:scale-[102%] transition-all duration-300">
                𝓣ip
              </button>
            </div>
          </section>
          {/* profile  */}
          <section className=" bg-[#141414] rounded-[24px] flex flex-col gap-[5px] overflow-hidden w-[320px] h-fit group hover:scale-[102%] transition-all duration-300">
            <div className=" w-full h-fit ">
              <img
                src="/profile.webp"
                alt=""
                className=" w-full h-[150px] hover:scale-[105%]  object-cover duration-300"
              />
            </div>

            <div className="w-[90%] mx-auto pb-[10px] flex items-center justify-between gap-[5px]">
              <h3 className="text-[20px] text-[#FFFFFF] font-[400] italic">
                @username
              </h3>
              <p className="bg-[#FFFFFF0A] px-[10px] py-[5px] border-[1px] shadow-sm  border-[#FFFFFF14] text-[#FFFFFF] text-[10px] font-bold leading-[16px] flex items-center justify-center gap-[10px] rounded-full uppercase">
                Software Developer
              </p>
            </div>
            <div className="w-[90%] mx-auto flex gap-[15px] items-center pb-[20px]">
              <button className="flex-1 py-[8px] bg-[#56565653] rounded-[13px] flex items-center justify-center border-b border-[#008CFF] cursor-pointer hover:scale-[102%] transition-all duration-300 font-extrabold">
                View
              </button>
              <button className="flex-1 py-[8px] bg-[#008CFF] rounded-[13px] flex items-center justify-center border-b border-[#7346F1] text-white font-extrabold cursor-pointer hover:scale-[102%] transition-all duration-300">
                𝓣ip
              </button>
            </div>
          </section>
        
         
        

          
        </section>

        {/* controller  */}
        <section className="flex flex-col gap-[5px] py-[50px]">
          <div className=" w-full flex items-center justify-center ">
           <div className="w-fit flex items-center gap-[10px] bg-[#56565633] rounded-[8px]">
             <p className=" px-[15px] py-[2px] rounded-[8px] bg-[#008CFF] cursor-pointer">1</p>
            <p className=" px-[15px] py-[2px] rounded-[8px] cursor-pointer">2</p>
            <p className=" px-[15px] py-[2px] rounded-[8px] cursor-pointer">3</p>
           </div>
          </div>
          <div className="flex items-center justify-between">
              <button className="w-[120px] sm:w-[300px] py-[16px] bg-[#56565653] rounded-[13px] flex items-center justify-center gap-[10px] border-b border-[#008CFF] cursor-pointer hover:scale-[102%] transition-all duration-300 ">
               {Icons.arrowleft}  Prev
              </button>
              <button className="w-[120px] sm:w-[300px] py-[16px] bg-[#56565653] rounded-[13px] flex items-center justify-center gap-[10px] border-b border-[#008CFF] cursor-pointer hover:scale-[102%] transition-all duration-300  f">
                Next {Icons.arrowright} 
              </button>
              </div>
        </section>
       
      </section>
    </div>
  );
}

export default Devs;

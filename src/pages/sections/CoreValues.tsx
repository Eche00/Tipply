import { Link } from "react-router"
import { Icons } from "../../lib/icons/Icons"

function CoreValues() {
  return (
      <div className="  relative overflow-hidden">
       {/* Hero left  background blur */}
          <div 
        className="absolute top-[-5%] left-[-3%] w-[180px] h-[180px] bg-[#FFFFFF]/40  rounded-[50%] blur-[50px]   z-10"
      />
     
    <img src="/stars.png" alt="" className="absolute top-[-20%] left-[0%] rotate-[43.54deg] w-[269px] h-[585px] object-cover opacity-[70%] z-10" />
      {/* Hero right  background blur */}
      <div 
        className="absolute top-[-5%] right-[-3%] w-[180px] h-[180px] bg-[#FFFFFF]/40  rounded-[50%] blur-[50px]   z-10"
      />
     
    <img src="/stars.png" alt="" className="absolute top-[-20%] right-[0%] rotate-[-43.54deg] w-[269px] h-[585px] object-cover opacity-[70%] z-10" />


     <section className="flex flex-col w-[90%] mx-auto py-[50px]">
      <div className="flex sm:flex-row flex-col sm:items-start items-center sm:justify-between justify-center">
         <h2 className="  text-[40px]  font-[400] leading-[55px] capitalize bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF69] bg-clip-text text-transparent text-center">Core Values</h2>

        <p className=" text-[#AFB3CA] text-[16px] font-[400] leading-[24px] sm:text-start text-center max-w-[400px]">We believe in transparency, innovation, and community-driven growth. Our commitment is to empower developers and supporters alike with privacy, security, and seamless interactions across the Web3 ecosystem.</p>
      </div>

      <section className="flex  flex-wrap gap-[48px] items-stretch justify-center py-[48px] ">
        {/* mission  */}
        <div className=" bg-[#141414] p-[24px] rounded-[24px] flex flex-col gap-[16px]">
          <span>{Icons.home}</span>
          <h3 className="text-[24px] text-[#FFFFFF] font-[400]">Mission</h3>
          <p className="max-w-[325px] text-[16px] text-[#AFB3CA] font-[400]">To connect tippers and developers worldwide by fostering early engagement and vibrant community growth. Tipply creates rewarding, seamless experiences that empower users to support and explore innovative Web3 projects while shaping the future of decentralized tipping.</p>
        </div>
        {/* vission  */}
        <div className=" bg-[#141414] p-[24px] rounded-[24px] flex flex-col gap-[16px]">
          <span>{Icons.vision}</span>
          <h3 className="text-[24px] text-[#FFFFFF] font-[400]">Vision</h3>
          <p className="max-w-[325px] text-[16px] text-[#AFB3CA] font-[400]">To become the leading decentralized tipping platform that empowers a global community of developers and supporters, driving widespread adoption of Web3 technologies through trust, transparency, and effortless interaction.</p>
        </div>
        {/* support  */}
        <div className=" bg-[#141414] p-[24px] rounded-[24px] flex flex-col gap-[16px]">
          <span>{Icons.people}</span>
          <h3 className="text-[24px] text-[#FFFFFF] font-[400]">Connect. Support. Grow.</h3>
          <p className="max-w-[325px] text-[16px] text-[#AFB3CA] font-[400]">At Tipply, we believe the power of Web3 comes from people coming together. Connect with talented developers, support innovative projects through seamless tipping, and grow a vibrant community that drives the future of decentralized collaboration. Together, we create more than just technology, we build lasting impact.</p>
        </div>
        
      </section>
       {/* Discover & Tip */}
          <div className="flex sm:flex-row flex-col gap-[20px] bg-[#141414] rounded-[24px] sm:h-full sm:max-h-[377px] h-[752px] overflow-hidden ">
           <div className="flex flex-col gap-[16px] sm:py-[61px] py-[30px] sm:pl-[70px] sm:pr-0 pr-[30px] pl-[30px] sm:flex-1 w-full" >
             <p className="bg-[#FFFFFF0A] px-[10px] py-[8px] border-[1px] shadow-sm  border-[#FFFFFF14] text-[#FFFFFF] text-[12px] font-extrabold leading-[16px] flex items-center justify-center gap-[10px] rounded-full uppercase w-[117px]">DevSpot</p>
             <h3 className=" text-[#CAD1E9] text-[32px] font-[400]">Discover & Tip</h3>
             <p className=" text-[#AFB3CA] text-[16px] font-[400] max-w-[750px]">Discover talented developers shaping the Web3 space. Explore their projects, tip your favorites, and connect directly to support innovation.</p>
              <Link to='/dev-spot'  className="w-[146px] h-[40px] bg-[#56565653] border-b border-[#008CFF] flex  items-center justify-center rounded-[13px]">View Devs</Link>
           </div>
           <div className="flex sm:items-end justify-baseline sm:w-[35%] w-full sm:pr-[70px] pr-[0px] relative ">
              <div className="absolute sm:top-1/5 top-[100px] sm:left-0 left-1/2 sm:-translate-x-0 -translate-x-1/2  sm:w-fit w-[90%]  h-fit  bg-black rounded-[34px] p-[27px]">
                <img src="/hey.png" alt="" className="w-[238px] h-[484px]  object-cover rounded-[20px] mx-auto" />
             </div>

           </div>
          </div>
    </section>
    </div>
  )
}

export default CoreValues
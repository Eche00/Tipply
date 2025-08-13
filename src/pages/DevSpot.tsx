import { Icons } from "../lib/icons/Icons"
import Devs from "./sections/Devs"
import Footer from "../components/Footer"

function DevSpot() {
  return (
     <div className="relative w-full h-[100vh]">
       {/* Hero left  background blur */}
          {/* <div 
        className="absolute top-[-10%] left-[-3%] w-[180px] h-[180px] bg-[#FFFFFF]/40  rounded-[50%] blur-[50px]   z-10"
      />
     
    <img src="/stars.png" alt="" className="absolute top-[-32%] left-[0%] rotate-[43.54deg] w-[269px] h-[585px] object-cover opacity-[70%] z-10" /> */}
      {/* Hero right  background blur */}
      {/* <div 
        className="absolute top-[-10%] right-[-3%] w-[180px] h-[180px] bg-[#FFFFFF]/40  rounded-[50%] blur-[50px]   z-10"
      />
     
    <img src="/stars.png" alt="" className="absolute top-[-32%] right-[0%] rotate-[-43.54deg] w-[269px] h-[585px] object-cover opacity-[70%] z-10" /> */}


    {/* background icons T */}
    <span className="absolute top-20 left-[10%]">{Icons.usdt}</span>
    <span className="absolute top-20 right-[10%]">{Icons.bnb}</span>

    {/* background icons T */}
    <span className="absolute top-[40%] sm:left-[25%] left-[20%]">{Icons.tron}</span>
    <span className="absolute top-[40%] sm:right-[25%] right-[20%]">{Icons.eth}</span>

    <span className="absolute sm:top-[70%] top-[18%] sm:left-[25%] left-[20%]">{Icons.solana}</span>
    <span className="absolute sm:top-[70%] top-[22%] sm:right-[25%] right-[10%]">{Icons.usdt}</span>

    {/* background icons T */}
    <span className="absolute bottom-[20%] left-[5%]">{Icons.bnb}</span>
    <span className="absolute bottom-[20%] right-[5%]">{Icons.solana}</span>

      <Devs/>
      <Footer/>
    </div>
  )
}

export default DevSpot
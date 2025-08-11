import Footer from "../components/Footer"
import { Icons } from "../lib/icons/Icons"
import CoreValues from "./sections/CoreValues"
import Faqs from "./sections/Faqs"
import Hero from "./sections/Hero"
import Process from "./sections/Process"
import WhatIs from "./sections/WhatIs"

function Home() {
  return (
    <div className="relative w-full h-[100vh] bg-black">
      {/* Hero center  background blur */}
      <div 
        className="absolute bottom-1/2 left-0 w-full h-[200%] bg-[#dfdfdf] opacity-40 blur-[393.85px] rounded-full z-0 translate-y-[-5%]"
      />
      {/* Hero left  background blur */}
      <div 
        className="absolute top-0 left-[-5%] w-[678px] h-[80px] bg-[#FFFFFF]/40  rounded-r-[50%] blur-[50px]  rotate-[43.54deg] z-10"
      />
      <div 
        className="absolute top-[20%] left-[-5%] w-[438px] h-[80px] bg-[#FFFFFF]/40  rounded-r-[50%] blur-[50px]  rotate-[43.54deg] z-10"
      />
    <img src="/stars.png" alt="" className="absolute top-[-20%] left-[-0%] rotate-[-43.54deg] w-[269px] h-[525px] object-cover opacity-[70%] z-10" />
      {/* Hero right  background blur */}
      <div 
        className="absolute top-0 right-[-5%] w-[678px] h-[80px] bg-[#FFFFFF]/40  rounded-l-[50%] blur-[50px]  rotate-[-43.54deg] z-10"
      />
      <div 
        className="absolute top-[20%] right-[-5%] w-[438px] h-[80px] bg-[#FFFFFF]/40  rounded-l-[50%] blur-[50px]  rotate-[-43.54deg] z-10"
      />
    <img src="/stars.png" alt="" className="absolute top-[-20%] right-[-0%] rotate-[43.54deg] w-[269px] h-[525px] object-cover opacity-[70%] z-10" />

    {/* background icons T */}
    <span className="absolute top-20 left-[10%]">{Icons.usdt}</span>
    <span className="absolute top-20 right-[10%]">{Icons.usdt}</span>

    {/* background icons T */}
    <span className="absolute top-[40%] sm:left-[25%] left-[20%]">{Icons.tron}</span>
    <span className="absolute top-[40%] sm:right-[25%] right-[20%]">{Icons.eth}</span>

    {/* background icons T */}
    <span className="absolute bottom-[20%] left-[5%]">{Icons.bnb}</span>
    <span className="absolute bottom-[20%] right-[5%]">{Icons.solana}</span>


      {/* container  */}
     <main>
      <Hero/>
      <WhatIs/>
      <CoreValues/>
      <Process/>
      <Faqs/>
      <Footer/>
     </main>
     
    </div>
  )
}

export default Home

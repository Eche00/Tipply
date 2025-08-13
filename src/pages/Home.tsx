import Footer from "../components/Footer"
import { Icons } from "../lib/icons/Icons"
import CoreValues from "./sections/CoreValues"
import Faqs from "./sections/Faqs"
import Hero from "./sections/Hero"
import Process from "./sections/Process"
import WhatIs from "./sections/WhatIs"

function Home() {
  return (
    <div className="relative w-full h-[100vh] ">
    
      {/* Hero left  background blur */}
          <div 
        className="absolute top-[-10%] left-[-3%] w-[180px] h-[180px] bg-[#FFFFFF]/40  rounded-[50%] blur-[50px]   z-10"
      />
     
    <img src="/stars.png" alt="" className="absolute top-[-32%] left-[0%] rotate-[43.54deg] w-[269px] h-[585px] object-cover opacity-[70%] z-10" />
      {/* Hero right  background blur */}
      <div 
        className="absolute top-[-10%] right-[-3%] w-[180px] h-[180px] bg-[#FFFFFF]/40  rounded-[50%] blur-[50px]   z-10"
      />
     
    <img src="/stars.png" alt="" className="absolute top-[-32%] right-[0%] rotate-[-43.54deg] w-[269px] h-[585px] object-cover opacity-[70%] z-10" />


    {/* background icons T */}
    <span className="absolute top-20 left-[10%]">{Icons.usdt}</span>
    <span className="absolute top-20 right-[10%]">{Icons.usdt}</span>

 
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

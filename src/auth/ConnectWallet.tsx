
function ConnectWallet() {
  return (
    <div className=" h-[100vh]  relative overflow-hidden flex items-center justify-center">
      
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

    <section className="flex flex-col items-center justify-center gap-[20px]">
       <div className="flex items-center justify-center gap-2">
          <img src="/logo.png" alt="Tipply-logo" className="sm:w-[54px] sm:h-[50px] w-[38px] h-[34px] rounded-full object-cover" />
          <h2 className="text-[#FFFFFF] sm:text-[36px] text-[24px] font-[400] leading-[30px]">ipply</h2>
       </div>
          <p className=" text-[#AFB3CA] sm:text-[24px] text-[16px] font-[400] sm:leading-[36px] sm:px-0 px-4 text-center">Experience secure wallet connections with our <br /> intuitive modal interface.</p>
     <button   className="sm:w-[284px] w-fit sm:px-0 px-[30px] h-[40px] bg-gradient-to-b from-[#FFFFFF45] to-[#FFFFFF21]   flex  items-center justify-center rounded-[13px] cursor-pointer">Connect Wallet</button>
    </section>

</div>
  )
}

export default ConnectWallet
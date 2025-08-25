import { Link, NavLink, useNavigate } from 'react-router'
import { useUserInfo } from '../lib/logics/profileLogic'
import { headerLogics } from '../lib/logics/headerLogic'
import { Logout } from '@mui/icons-material'



function GeneralNav() {
 const {user,handleLogOutUser} = useUserInfo()
   const {dropDown,setDropDown} = headerLogics()
const navigate = useNavigate()
 // HANDLE LOG OUT 
  const handleLogOut = async()=>{
    try {
      await handleLogOutUser()
       navigate('/auth')
    } catch (error) {
    console.error("Logout Failed:", error);
    }
  }
  return (
    <div>
      <section 
      
       className="fixed top-[70px] left-0 w-full h-[100vh] bg-[#050520] z-50 flex flex-col gap-[32px] md:hidden">
          <div className="flex flex-col  text-white text-[16px] font-[500]" 
          onClick={()=>setDropDown(!dropDown)}
          >
          <NavLink to='/' className={({isActive})=> isActive ? 'text-[#008CFF] font-bold text-sm cursor-pointer p-[10px]  border-b border-gray-500': ' text-white font-bold text-sm cursor-pointer p-[10px]  border-b border-gray-500'}>Home</NavLink>
          <NavLink to='/about-us' className={({isActive})=> isActive ? 'text-[#008CFF] font-bold text-sm cursor-pointer p-[10px]  border-b border-gray-500': ' text-white font-bold text-sm cursor-pointer p-[10px]  border-b border-gray-500'}>About Us</NavLink>
          <NavLink to='/dev-spot' className={({isActive})=> isActive ? 'text-[#008CFF] font-bold text-sm cursor-pointer p-[10px]  border-b border-gray-500': ' text-white font-bold text-sm cursor-pointer p-[10px]  border-b border-gray-500'}>DevSpot</NavLink>
          <NavLink to='/tip-board' className={({isActive})=> isActive ? 'text-[#008CFF] font-bold text-sm cursor-pointer p-[10px]  border-b border-gray-500': ' text-white font-bold text-sm cursor-pointer p-[10px]  border-b border-gray-500'}>Tipboard </NavLink>
           </div>
             {user?.username ? 
         <div className="flex  justify-between  gap-[10px] w-[90%] h-fit mx-auto border-b border-gray-500 pb-[10px]">
         <p className="w-[50px] h-[50px] rounded-full bg-black border-2 border-[#008CFF] flex items-center justify-center">{user?.username?.slice(0,1)}</p> 
         <div className="flex flex-col gap-1 items-end">
          <p className=" text-[14px] font-bold bg-gradient-to-r from-[#008CFF] to-[#FFFFFF69] bg-clip-text text-transparent">{user?.username}</p>
          <Link to='/dashboard/home'  className="bg-[#FFFFFF0A] px-[15px] py-[8px] border-[1px] shadow-sm  border-[#FFFFFF14] text-[#FFFFFF] text-[12px] font-bold leading-[16px] flex items-center justify-center gap-[10px] rounded-full ">Dashboard</Link>
         </div>
         </div>:
          <div className="flex sm:flex-row flex-col sm:items-center gap-[20px]">
             <Link to='/connect-wallet'  className=" px-[32px] py-[10px] text-[16px] mx-[20px] rounded-[8px] bg-[#56565653] text-white cursor-pointer hover:scale-[105%] transition-all duration-300 text-center flex-1">Connect Wallet</Link>
           <Link to='/auth'  className=" px-[32px] py-[10px] text-[16px] mx-[20px] rounded-[8px] bg-[#008CFF] text-white cursor-pointer hover:scale-[105%] transition-all duration-300 text-center flex-1">Register</Link>

          </div>
}
            {/* bg */}
         <span className=" circleBlurLH md:hidden inline-block"></span>
          {user?.username && 
          <div className=" flex items-center justify-center">
            <button className=" flex items-center sm:justify-center  gap-[5px] bg-[#034FE3]   py-[10px] px-[32px] rounded-[10px] text-white transition-all duration-300 cursor-pointer w-fit" onClick={handleLogOut}>
                  <Logout />
                   <span>Logout</span>
                </button>
          </div>}
        </section>
    </div>
  )
}

export default GeneralNav
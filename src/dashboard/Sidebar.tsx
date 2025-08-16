import {
  AdminPanelSettings,
  ArrowBackIos,
  ArrowForwardIos,
  Dashboard,
  Home,
  Leaderboard,
  Logout,
  Person,
  SpaceDashboard,
  SupportAgent,
} from "@mui/icons-material";
import { NavLink,Link } from "react-router-dom";

interface SidebarProp{
  compress: boolean,
  setCompress: React.Dispatch<React.SetStateAction<boolean>>,
}
function Sidebar({ compress, setCompress }: SidebarProp) {


  return (
    <div
      className={
        compress
          ? "w-fit   transition-all duration-500 rounded-[16px] overflow-hidden"
          : "w-[280px]    transition-all duration-500 rounded-[16px] overflow-hidden"
      }>
         {/* logo */}
         <img
              src='/logo.png'
              alt={"logo"}
                            className={compress ? "w-[40px] h-[30px] object-cover bg-white rounded-[8px] m-[10px] sm:flex hidden" : "w-[80px] h-[50px] object-cover bg-white rounded-[8px] m-[10px]"}

            />
            
          <section className=" flex flex-col  gap-[4px]   mb-[20px]  border-b-2 bg-[#034FE3] rounded-[16px] p-[10px] z-50">
            <Link to='/'>
            <img
              src='/profile.webp'
              alt={"logo"}
              className={compress ? "w-[40px] h-[30px] object-cover bg-white rounded-[8px] mx-auto" : "w-[80px] h-[50px] object-cover bg-white rounded-[8px] "}
            />
            </Link>
            {!compress &&<>
             <p className="font-bold text-white">Developer <SupportAgent fontSize="small"/></p>
             {/* <p className="font-bold text-white">Admin <AdminPanelSettings fontSize="small"/></p> */}

            <h1 className=" text-[24px] font-[600] text-white tracking-wider ">
              Welcome Back, <br /> @user 
            </h1>
             </>
            }
            {!compress ? (
              <button
          className="absolute right-5 text-white  py-[8px] px-[10px] rounded-[8px] transition-all duration-300 bg-[#141414] cursor-pointer"
          onClick={() => setCompress(!compress)}>
          <ArrowBackIos fontSize="small" />
        </button>
         ) : (
        <button
          className=" text-white  py-[8px] px-[10px] rounded-[8px] transition-all duration-300 bg-[#141414] cursor-pointer"
          onClick={() => setCompress(!compress)}>
          <ArrowForwardIos fontSize="small" />
        </button>
         )}
              
          </section>

      <nav className=" flex flex-col h-fit text-[14px] p-[10px] gap-[5px] bg-[#034FE3] rounded-[16px] z-50">
       
       
        <NavLink
          to="/dashboard/home"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#141414]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#14141438] scale-95 "
          }>
          {" "}
          <Dashboard />
          {!compress && <span>Dashboard</span>}
        </NavLink>

         
          <NavLink
            to="/dashboard/leaderboard"
            className={({ isActive }) =>
              isActive
                ? "flex items-center  gap-[5px] bg-[#141414]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
                : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#14141438] scale-95"
            }>
            {" "}
            <Leaderboard fontSize="small" />
            {!compress && <span>LeaderBoard</span>}
          </NavLink>
          <NavLink
            to="/dashboard/showroom"
            className={({ isActive }) =>
              isActive
                ? "flex items-center  gap-[5px] bg-[#141414]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
                : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#14141438] scale-95"
            }>
            {" "}
            <SpaceDashboard fontSize="small" />
            {!compress && <span>Showroom</span>}
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className="flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#14141438] scale-95"
            >
            <Person />
            {!compress && <span>Profile</span>}
          </NavLink>

  <NavLink
            to="/dashboard/admin"
            className={({ isActive }) =>
              isActive
                ? "flex items-center  gap-[5px] bg-[#141414]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
                : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#14141438] scale-95"
            }>
            {" "}
            <AdminPanelSettings />
            {!compress && <span>Admin</span>}
          </NavLink>
  <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "flex items-center  gap-[5px] bg-[#141414]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
                : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#14141438] scale-95"
            }>
            {" "}
            <Home />
            {!compress && <span>Home</span>}
          </NavLink>
      <button className="sm:hidden w-full flex items-center  gap-[5px] bg-[#14141438]   py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 cursor-pointer">
         <Logout />
          {!compress && <span>Logout</span>}
       </button>
      </nav>


     <div className=" absolute bottom-0 left-0 w-full hidden sm:flex">
       <button className="w-full flex items-center sm:justify-center  gap-[5px] bg-[#034FE3]   py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 cursor-pointer">
         <Logout />
          {!compress && <span>Logout</span>}
       </button>
     </div>
    </div>
  );
}

export default Sidebar;

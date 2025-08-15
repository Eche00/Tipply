import {
  ArrowBackIos,
  ArrowForwardIos,
  Home,
 
  Person,
} from "@mui/icons-material";
import { NavLink } from "react-router-dom";

interface SidebarProp{
  compress: boolean,
  setCompress: React.Dispatch<React.SetStateAction<boolean>>
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
                            className={compress ? "w-[40px] h-[30px] object-cover bg-white rounded-[8px] m-[10px]" : "w-[80px] h-[50px] object-cover bg-white rounded-[8px] m-[10px]"}

            />
          <section className=" flex flex-col items-center justify-center gap-[4px]   mb-[20px]  border-b-2 bg-[#034FE3] rounded-[16px] p-[10px]">
            <img
              src='/logo.png'
              alt={"logo"}
              className={compress ? "w-[40px] h-[30px] object-cover bg-white rounded-[8px] " : "w-[80px] h-[50px] object-cover bg-white rounded-[8px] "}
            />
            {!compress &&<>
            <h1 className=" text-[24px] font-[600] text-white tracking-wider ">
              Welcome Back, <br /> @user 
            </h1>
             <p className="font-bold text-white">@user</p>
             </>
            }
              <button
          className="absolute right-5 text-gray-500 font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 bg-[#141414]  "
          onClick={() => setCompress(!compress)}>
          {compress ? (
            <ArrowForwardIos fontSize="small" />
          ) : (
            <ArrowBackIos fontSize="small" />
          )}
        </button>
          </section>

      <nav className=" flex flex-col   text-[14px] px-[20px] py-[10px] gap-[5px] bg-[#034FE3] rounded-[16px]">
       
       
        <NavLink
          to="/dashboard/home"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#141414]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#14141438] scale-95 "
          }>
          {" "}
          <Home />
          {!compress && <span>Home</span>}
        </NavLink>

          <NavLink
            to="/dashboard/wallet"
            className={({ isActive }) =>
              isActive
                ? "flex items-center  gap-[5px] bg-[#141414]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
                : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#14141438] scale-95"
            }>
            {" "}
            <Person />
            {!compress && <span>Wallet</span>}
          </NavLink>
          <NavLink
            to="/dashboard/leaderboard"
            className={({ isActive }) =>
              isActive
                ? "flex items-center  gap-[5px] bg-[#141414]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
                : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#14141438] scale-95"
            }>
            {" "}
            <Person />
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
            <Person />
            {!compress && <span>Showroom</span>}
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              isActive
                ? "flex items-center  gap-[5px] bg-[#141414]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
                : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#14141438] scale-95"
            }>
            {" "}
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
            <Person />
            {!compress && <span>Admin</span>}
          </NavLink>
      
      </nav>
    </div>
  );
}

export default Sidebar;

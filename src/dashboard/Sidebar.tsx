import {
  ArrowBackIos,
  ArrowForwardIos,
  Home,
  Logout,
  Newspaper,
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
          ? "w-fit h-[100vh] bg-[#034FE3] transition-all duration-500"
          : "w-[300px] h-[100vh] bg-[#034FE3]  transition-all duration-500"
      }>
      <nav className=" flex flex-col   text-[14px] px-[20px] py-[10px] gap-[5px]">
        {/* logo */}
        {compress && (
          <section className=" flex flex-col items-center gap-[4px]  py-[20px] mb-[20px]  border-b-2 h-[256px]"></section>
        )}
        {!compress && (
          <section className=" flex flex-col items-center gap-[4px]  py-[20px] mb-[20px]  border-b-2">
            <img
              src='/logo.png'
              alt={"logo"}
              className="w-[150px] h-[150px] object-cover bg-white rounded-full "
            />
            <h1 className=" text-[24px] font-[600] text-white tracking-wider ">
              Zion Tech Hub
            </h1>
             <p className="font-bold text-white">@user</p>
          </section>
        )}

        <button
          className="absolute right-5 text-gray-500 font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 bg-[#1e222b]  "
          onClick={() => setCompress(!compress)}>
          {compress ? (
            <ArrowForwardIos fontSize="small" />
          ) : (
            <ArrowBackIos fontSize="small" />
          )}
        </button>
        <NavLink
          to="/dashboard/home"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
              : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95 "
          }>
          {" "}
          <Home />
          {!compress && <span>Home</span>}
        </NavLink>

          <NavLink
            to="/dashboard/wallet"
            className={({ isActive }) =>
              isActive
                ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
                : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
            }>
            {" "}
            <Person />
            {!compress && <span>Wallet</span>}
          </NavLink>
          <NavLink
            to="/dashboard/leaderboard"
            className={({ isActive }) =>
              isActive
                ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
                : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
            }>
            {" "}
            <Person />
            {!compress && <span>LeaderBoard</span>}
          </NavLink>
          <NavLink
            to="/dashboard/showroom"
            className={({ isActive }) =>
              isActive
                ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
                : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
            }>
            {" "}
            <Person />
            {!compress && <span>Showroom</span>}
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              isActive
                ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
                : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
            }>
            {" "}
            <Person />
            {!compress && <span>Profile</span>}
          </NavLink>

  <NavLink
            to="/dashboard/admin"
            className={({ isActive }) =>
              isActive
                ? "flex items-center  gap-[5px] bg-[#1e222b]  font-extrabold py-[10px] px-[12px] rounded-[10px] text-white transition-all duration-300 "
                : "flex items-center  text-gray-300 gap-[5px] font-bold py-[10px] px-[12px] rounded-[10px] transition-all duration-300 hover:bg-[#1e222b38] scale-95"
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

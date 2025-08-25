
import { NavLink } from "react-router";
import HouseIcon from "@mui/icons-material/House";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import { History, Message, Person, SpaceDashboard } from "@mui/icons-material";
import { useUserInfo } from "../lib/logics/profileLogic";

function BottomNav() {
      const {user} = useUserInfo()
  
  return (
    <div className=" w-[90%] mx-auto shadow-black shadow-2xl  rounded-[20px] bg-white dark:bg-[#1F1F1F] dark:border-[1px] dark:border-gray-600">
      {/* container  */}
      <nav className=" h-[55px] py-[10px] px-[20px] flex items-center justify-between w-full   text-[12px] ">
        {/* home  */}
        <NavLink
          to="/dashboard/home"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-[5px] bg-blue-600  font-extrabold py-[6px] px-[12px] rounded-[10px] text-white transition-all duration-300"
              : "flex items-center justify-center text-gray-400 font-bold transition-all duration-300"
          }>
          {" "}
          <HouseIcon />
        </NavLink>

        {/* news  */}
        <NavLink
          to="/dashboard/chat"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-[5px] bg-blue-600  font-extrabold py-[6px] px-[12px] rounded-[10px] text-white transition-all duration-300"
              : "flex items-center justify-center text-gray-400 font-bold transition-all duration-300"
          }>
          {" "}
          <Message /> 
        </NavLink>

        {/* matches  */}
        <NavLink
          to="/dashboard/history"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-[5px] bg-blue-600  font-extrabold py-[6px] px-[12px] rounded-[10px] text-white transition-all duration-300"
              : "flex items-center justify-center text-gray-400 font-bold transition-all duration-300"
          }>
          {" "}
          <History />{" "}
        </NavLink>

 {/* profile  */}
        <NavLink
          to="/dashboard/showroom"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-[5px] bg-blue-600  font-extrabold py-[6px] px-[12px] rounded-[10px] text-white transition-all duration-300"
              : "flex items-center justify-center text-gray-400 font-bold transition-all duration-300"
          }>
          {" "}
          <SpaceDashboard />{" "}
        </NavLink>
        {/* search */}
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-[5px] bg-blue-600  font-extrabold py-[6px] px-[12px] rounded-[10px] text-white transition-all duration-300"
              : "flex items-center justify-center text-gray-400 font-bold transition-all duration-300"
          }>
          {" "}
          <Person />{" "}
        </NavLink>

        {/* profile  */}
        {user?.role === 'admin' &&
        <NavLink
          to="/dashboard/admin"
          className={({ isActive }) =>
            isActive
              ? "flex items-center justify-center gap-[5px] bg-blue-600  font-extrabold py-[6px] px-[12px] rounded-[10px] text-white transition-all duration-300"
              : "flex items-center justify-center text-gray-400 font-bold transition-all duration-300"
          }>
          {" "}
          <ManageAccountsIcon />{" "}
        </NavLink>}
       
      </nav>
    </div>
  );
}

export default BottomNav;

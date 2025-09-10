import { Icons } from "../../lib/icons/Icons";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Circle, Close, NotificationsActive, OpenInFull} from "@mui/icons-material";
import { useUserInfo } from "../../lib/logics/profileLogic";
import { motion, AnimatePresence } from "framer-motion";
import { dashboardLogics } from "../../lib/logics/dashLogics";
import { useDevProjectDatas } from "../../lib/logics/showRoom";
import { Link } from "react-router";
import { useChatLogics } from "../../lib/logics/chatLogic";



function DashHome() {
const {user,notificationD, setNotificatioD,unseenNotification} = useUserInfo();
const {prices,coins} = dashboardLogics();
const { projects} = useDevProjectDatas();
const { messages } = useChatLogics();

 const lastTwo = messages.slice(-2);
  

  return (
    <div className="bg-[#141718] sm:h-[98%] rounded-2xl overflow-hidden flex flex-col gap-5 p-5 overflow-y-scroll">
      {/* Dashboard header */}
      <section className="flex sm:flex-row flex-col items-center justify-between gap-5">
        <h2 className="text-[32px] font-extrabold">Dashboard</h2>
        <div className="flex items-center gap-5">
          <h2 className="text-lg font-medium border border-[#FFFFFF14] py-1 px-6 rounded-lg bg-[#FFFFFF0A]">
            Notifications:
          </h2>
         <button
  onClick={() => setNotificatioD(!notificationD)}
  className="relative flex items-center justify-center gap-2 rounded-xl bg-[#034FE3] px-4 py-2 text-white font-medium text-lg shadow-md border border-[#FFFFFF14] hover:bg-[#0363ff] transition-colors duration-200"
>
  <NotificationsActive className="w-5 h-5" />
  
  {/* Notification Badge */}
  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow-md">
    {unseenNotification}
  </span>
</button>

        </div>
      </section>

      {/* First section */}
      <section className="flex sm:flex-row flex-col gap-5 flex-1 w-full">
        {/* Total Earning */}
        <div className="flex flex-col justify-between gap-5 bg-gradient-to-br from-[#0D0F10] via-[#050520] to-[#034FE3] rounded-2xl p-5 sm:w-[30%] w-full">
          <h2 className="text-2xl font-extrabold border border-[#FFFFFF14] w-fit px-8 py-1 rounded-lg bg-[#FFFFFF0A]">
            Total Earning
          </h2>
          <p className="text-[42px]  md:text-[24px] lg:text-[42px]  font-extrabold leading-tight">
            {user.balance} ETH{" "}
            <span className="ml-2 text-lg font-medium text-gray-400">
             ≈ ${user.balance}  {/*  would convert this later */}
            </span>{" "}
            <br />
            <span className="ml-2 text-base font-medium text-gray-400">
              (All-time tips received)
            </span>
          </p>
        </div>

        {/* Market Overview */}
        <div className="flex flex-col flex-1 bg-[#0D0F10] shadow-md border border-gray-800/50 rounded-2xl p-5">
          <h2 className="text-2xl font-extrabold mb-4">Market Overview</h2>
          {!prices ? (
            <p className="text-gray-400">Loading prices...</p>
          ) : (
            <div className="space-y-3">
              {coins.map((coin, i) => {
                const price = prices[coin.id]?.usd ?? 0;
                const change = prices[coin.id]?.usd_24h_change ?? 0;
                const isUp = change >= 0;

                return (
                  <div
                    key={coin.id}
                    className={`flex items-center justify-between ${
                      i !== coins.length - 1
                        ? "border-b border-gray-800 pb-1"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        src={coin.logo}
                        alt={coin.name}
                        className="w-6 h-6 object-cover rounded-full"
                      />
                      <span className="font-semibold text-white text-[12px]">
                        {coin.name}
                      </span>
                    </div>
                    <div className="text-right text-[12px]">
                      <p className="font-bold text-green-400">
                        ${price.toLocaleString()}
                      </p>
                      <span
                        className={`text-xs ${
                          isUp ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {isUp ? "+" : ""}
                        {change.toFixed(2)}%
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {/* 📊 Chart Section */}
          {prices && (
  <div
    className="mt-6 h-24 w-full cursor-pointer bg-transparent hover:bg-transparent"
  >
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={coins.map((coin) => ({
          name: coin.name,
          price: prices[coin.id]?.usd ?? 0,
        }))}
        barSize={100} // adjust bar thickness
      >
        <XAxis dataKey="name" stroke="#aaa" />
        <YAxis stroke="#aaa" />
        <Tooltip
        cursor={{ fill: "transparent" }}
          contentStyle={{
            
            backgroundColor: "#111",
            border: "1px solid #333",
            borderRadius: "8px",
          }}
          formatter={(value: number) => `$${value.toLocaleString()}`}
        />
        <Bar dataKey="price" fill="#3b82f6" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
)}

        </div>


      </section>

      {/* Second section (Tip board) */}
      <section className="flex flex-1 sm:flex-row flex-col gap-5 w-full h-full">
        {/* Tip board */}
          <div className="flex-1 bg-[#0D0F10] shadow-md border border-gray-800/50 rounded-2xl p-5 overflow-scroll">
            <h3 className="font-bold py-2">TOP TIPPERS</h3>
            <table className="w-full text-left">
              <thead className="border-b border-[#008CFF]">
                <tr>
                  <th className="py-2">#</th>
                  <th className="py-2">Address</th>
                  <th className="py-2 sm:flex hidden">Tip</th>
                  <th className="py-2">Tipped</th>
                  <th className="py-2">Badge</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {[1, 2, 3, 4, 5].map((i) => (
                  <tr
                    key={i}
                    className="border-b border-[#343841] cursor-pointer"
                  >
                    <td className="py-3">{i}.</td>
                    <td className="py-3">
                      <p className="bg-[#FFFFFF0A] w-fit px-2 py-0.5 border shadow-sm border-[#008CFF] text-[#008CFF] text-[10px] font-bold leading-4 rounded-full">
                        0xA34......56F8
                      </p>
                    </td>
                    <td className="py-3 sm:flex hidden">2x</td>
                    <td className="py-3">2.5 ETH</td>
                    <td className="py-3 group relative">
                      {Icons.star}
                      <span className="hidden group-hover:flex absolute top-1/2 -translate-y-1/2 right-0 bg-[#008CFF]/20 text-[#008CFF] text-sm rounded-full px-2 py-1">
                        Supporter
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>

        {/* Placeholder side card */}
       <div className="flex sm:w-[30%] w-full bg-[#0D0F10] shadow-md border border-gray-800/50 rounded-2xl p-5 flex-col gap-6">
  {/* Top Section: Last Project */}
  <div className="bg-gray-900 rounded-xl p-4 shadow-md">
    <h3 className="text-white text-lg font-bold mb-2">Last Project Added</h3>
    
   {projects.length > 0 && (
  <div className="bg-gray-800 rounded-lg p-3">
    <h4 className="text-white font-semibold">{projects[0].title}</h4>
    <p className="text-gray-400 text-sm line-clamp-1">{projects[0].description}</p>
    <a
      href={projects[0].link}
      target="_blank"
      rel="noreferrer"
      className="text-blue-400 text-sm mt-2 inline-block hover:underline"
    >
      View Project →
    </a>
  </div>
)}

  </div>

  {/* Bottom Section: Notifications */}
   <div className="bg-gray-900 rounded-xl p-4 shadow-md flex-1">
      <h3 className="text-white text-lg font-bold mb-3 flex items-center justify-between" >Live Chat Notifications <Link to="/dashboard/chat" className=" cursor-pointer border border-dashed rounded-[4px] w-[30px] py-1 hover:scale-[102%] flex items-center justify-center"><OpenInFull fontSize="small"/></Link></h3>
      <div className="flex flex-col gap-3 max-h-40 overflow-y-auto">
        {lastTwo.map((msg: any) => (
          <div key={msg.id} className="bg-gray-800 rounded-lg p-3">
            <p className="text-gray-300 text-sm">
              <span className="font-bold text-white">@{msg.username || msg.name }:</span>{" "}
              {msg.text}
            </p>
          </div>
        ))}

        {lastTwo.length === 0 && (
          <p className="text-gray-500 text-sm">No recent chats</p>
        )}
      </div>
    </div>
</div>



      </section>

      <AnimatePresence>
      {notificationD && (
        <motion.div
          className="fixed w-full left-0 top-0 h-[100vh] bg-black/60 flex justify-end "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          
        >
          <motion.section
            className="sm:w-[400px] w-full h-[100vh] bg-[#0D0F10] text-white p-4 overflow-y-auto relative md:mt-0 mt-12"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="absolute top-2 right-4 text-gray-400 cursor-pointer" onClick={() => setNotificatioD(!notificationD)}><Close/></button>
            <h2 className="text-[24px] font-bold my-5 flex items-center justify-between gap-[10px]">Notifications 
              <span  className="ml-2 px-2 py-0.5  text-sm font-semibold rounded-full bg-[#034FE3] text-white shadow">{user?.notifications?.length}
             </span>
            </h2>

            {user?.notifications?.length ? (
              <ul className="space-y-3">
                {user.notifications.map((notif: any, idx:number) => (
                 <motion.li
  key={idx}
  className={`p-4 rounded-2xl shadow-md flex flex-col gap-2 border transition-all duration-200 hover:scale-[1.01] ${
    notif.seen
      ? "border-gray-700 bg-gray-900/80"
      : "border-2 border-[#034FE3] bg-[#034FE3]/30"
  }`}
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: idx * 0.05 }}
>
  <div className="flex items-start justify-between">
    <p className="font-semibold text-sm sm:text-base text-white">
      {notif.message}
    </p>
    <span
      className={`wrounded-full ${
        notif.seen ? "text-gray-500" : "text-[#034FE3] animate-pulse"
      }`}
    ><Circle fontSize="small"/></span>
  </div>
  <span className="text-xs text-gray-400">
    {notif.timestamp?.toDate
    ? notif.timestamp.toDate().toLocaleString() // Firestore Timestamp object
    : new Date(notif.timestamp).toLocaleString() // fallback if already string/Date
  }
  </span>
</motion.li>

                ))}
              </ul>
            ) : (
              <p className="text-gray-400">No notifications yet.</p>
            )}
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  );
}

export default DashHome;

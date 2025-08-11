import {  Routes, Route } from "react-router"
import Container from "./components/Container"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import DevSpot from "./pages/DevSpot"
import ConnectWallet from "./auth/ConnectWallet"
import DashHome from "./dashboard/dashpages/DashHome"
import Wallet from "./dashboard/dashpages/Wallet"
import LeaderBoard from "./dashboard/dashpages/LeaderBoard"
import ShowRoom from "./dashboard/dashpages/ShowRoom"
import Profile from "./dashboard/dashpages/Profile"
import DashContainer from "./dashboard/DashContainer"
import NotFound from "./components/NotFound"

function App() {
  return (
    <div className=" bg-black text-white h-[100vh] relative w-full overflow-x-hidden">
        <Routes>
          {/* General Routes */}
           <Route element={<Container/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/dev-spot" element={<DevSpot/>}/>
           </Route>

           {/* Indipendent Route  */}
            <Route path="/connect-wallet" element={<ConnectWallet/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>

            {/* Dashboard Routes  */}
            <Route path="/dashboard"  element={<DashContainer/>}>
              <Route path="/dashboard/home" element={<DashHome/>}/>
              <Route path="/dashboard/wallet" element={<Wallet/>}/>
              <Route path="/dashboard/leaderboard" element={<LeaderBoard/>}/>
              <Route path="/dashboard/showroom" element={<ShowRoom/>}/>
              <Route path="/dashboard/profile" element={<Profile/>}/>
           </Route>
              
             {/* Handling !existing Route  */}
           <Route path="*" element={<NotFound/>}/>
         
        </Routes>
    </div>
  )
}

export default App
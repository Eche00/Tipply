import {  Routes, Route } from "react-router-dom"
import Container from "./components/Container"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import DevSpot from "./pages/DevSpot"
import ConnectWallet from "./auth/ConnectWallet"
import DashHome from "./dashboard/dashpages/DashHome"
import LeaderBoard from "./dashboard/dashpages/LeaderBoard"
import ShowRoom from "./dashboard/dashpages/ShowRoom"
import Profile from "./dashboard/dashpages/Profile"
import DashContainer from "./dashboard/DashContainer"
import NotFound from "./components/NotFound"
import Tipboard from "./pages/Tipboard"
import Authentication from "./auth/Authentication"
import GeneralChat from "./dashboard/dashpages/GeneralChat"
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/ScrollToTop"
import ProfilePreview from "./pages/ProfilePreview"
import AdminPage from "./dashboard/dashpages/AdminPage"


function App() {
    
  return (
    <div className=" bg-[#050520] text-white  relative w-full overflow-x-hidden" >
<ScrollToTop/>
   
<Toaster
  position="top-right"
  reverseOrder={false}
  toastOptions={{
    style: {
      background: "#1A1D1F", // dark background
      color: "#FFFFFF",        // white text
      fontWeight: "500",
      borderRadius: "8px",
      padding: "12px 16px",
    },
    success: {
      iconTheme: {
        primary: "#22C55E", // green icon
        secondary: "#1A1D1F",
      },
    },
    error: {
      iconTheme: {
        primary: "#EF4444", // red icon
        secondary: "#1A1D1F",
      },
    },
    loading: {
      iconTheme: {
        primary: "#034FE3", // blue icon
        secondary: "#1A1D1F",
      },
    },
  }}
/>
        <Routes>
          {/* General Routes */}
           <Route element={<Container/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about-us" element={<AboutUs/>}/>
            <Route path="/dev-spot" element={<DevSpot/>}/>
            <Route path="/tip-board" element={<Tipboard/>}/>
              <Route path="/dev/:username" element={<ProfilePreview/>}/>

           </Route>

           {/* Indipendent Route  */}
            <Route path="/connect-wallet" element={<ConnectWallet/>}/>
            <Route path="/auth" element={<Authentication/>}/>

            {/* Dashboard Routes  */}
            <Route path="/dashboard"  element={<DashContainer/>}>
              <Route path="/dashboard/home" element={<DashHome/>}/>
              <Route path="/dashboard/history" element={<LeaderBoard/>}/>
              <Route path="/dashboard/chatwithTipply" element={<GeneralChat/>}/>
              <Route path="/dashboard/showroom" element={<ShowRoom/>}/>
              <Route path="/dashboard/profile" element={<Profile/>}/>
              <Route path="/dashboard/admin" element={<AdminPage/>}/>
           </Route>
              
             {/* Handling !existing Route  */}
           <Route path="*" element={<NotFound/>}/>
         
        </Routes>
    </div>
  )
}

export default App
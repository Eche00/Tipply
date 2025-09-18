
import React, { useEffect, useState} from "react";
import {   SupportAgent, Email, Google, Password } from "@mui/icons-material";
import { Link,useNavigate } from "react-router";
import { HandleGoogleAuthentication, HandleLogin, HandleRegisteration, ResetPassword } from "../lib/logics/reglogic";
import Loader from "../components/Loader";
import { auth } from "../lib/firebase";

interface Project {
  title: string;
  description: string;
  link: string;
  createdAt?: number; // optional timestamp
}



// Transactions for tipping
interface Transaction {
  fromUserWallet: string;
  toUserWallet: string; // or userId
  amount: number;
  timestamp: Date;
}

// Notifications
interface Notification {
  type: string;       
  message: string;
  seen: boolean;
  timestamp: Date;
}

interface FormData {
  username: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  dob: string;
  gender: string;
  address: string;
  wallet: string;
  balance: number;                // Current wallet balance
  transactions: Transaction[];    // Track tips sent/received
  tipsReceived: number;           // Number of times user was tipped
  tippers: string[];              // User IDs who tipped this user
  devType: string;
  role: string;
  bio?: string;
  techStacks: string[];
  twitter?: string;
  github?: string;
  projects: Project[];
  status: string;                 // Online/offline or chat presence
  notifications: Notification[];  // Optional: notify when tipped or mentioned
}
interface FormDataLogin{
  email: string,
  password: string,
};
function Authentication() {
  // DISPLAY STATES 
  const [signIn, setSignIn] = useState<boolean>(true);
  const [createAccount, setCreateAccount] = useState<boolean>(false);
  const [resetPassword, setResetPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [resetEmail, setResetEmail] = useState<string>('');
  const navigate = useNavigate()
  // FORMDATA 
 const [formData, setFormData] = useState<FormData>({
  username: "",
  name: "",
  email: "",
  password: "",
  phone: "",
  dob: "",
  gender: "",
  address: "",
  wallet: "",              
  balance: 0,              
  transactions: [],        
  tipsReceived: 0,         
  tippers: [],             
  devType: "",
  role: "user",
  bio: "",                 
  techStacks: [],          
  twitter: "",             
  github: "",             
  projects: [],            
  status: "offline",       
  notifications: [],      
});

  const [formDataLogin, setFormDataLogin] = useState<FormDataLogin>({
  email: "",
  password: "",
 
});

// Handling if a user is logged in 
useEffect(()=>{
   const unsubscribe = auth.onAuthStateChanged(async(authUser)=>{
    if(authUser){
      navigate('/dashboard/home')
    }
   })
   return () => unsubscribe();
},[auth])

  // DISPLAY SWITCHES 
  const handleSwitch = (e: React.MouseEvent<HTMLButtonElement | HTMLParagraphElement>) => {
    e.preventDefault();
    const target = e.target as HTMLElement
    if (target.id === "signin") {
      setSignIn(true);
      setCreateAccount(false);
      setResetPassword(false);
    } else if (target.id === "createaccount") {
      setSignIn(false);
      setCreateAccount(true);
      setResetPassword(false);
    } else if (target.id === "resetpassword") {
      setSignIn(false);
      setCreateAccount(false);
      setResetPassword(true);
    } else {
      setSignIn(true);
      setCreateAccount(false);
      setResetPassword(false);
    }
  };

  //  HANDLE CHANGE 
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
   const {name,value} = e.target;
   setFormData((prev)=>({...prev, [name]: value}))
  }
  const handleChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
  const { name, value } = e.target;
  setFormDataLogin(prev => ({ ...prev, [name]: value }));
};
  // HANDLE SIGN UP 
  const handleSignUp = async(e: React.FormEvent)=>{
    e.preventDefault()
    setLoading(true)
    try {
      await HandleRegisteration(formData)
      navigate('/dashboard/home')
    } catch (error) {
      console.log("Error:", error);
    }finally{
      setLoading(false)
    }
  }

  // HANDLE SIGN IN 
  const handleSignIn = async(e: React.FormEvent)=>{
    e.preventDefault()
    setLoading(true)

   try {
    await HandleLogin(formDataLogin)
    navigate('/dashboard/home')
   } catch (error) {
   console.error('SignIn Failed',error);
   } finally{
    setLoading(false)
   }
  }

  // HANDLE  Google Sign Up
  const handleGoogleAuth = async(e: React.FormEvent)=>{
    e.preventDefault()
    try {
        const user = await HandleGoogleAuthentication(formData); // wait until done
    if (user) {
      navigate('/dashboard/home');
    }
    } catch (error) {
      console.error("Error signing in with Google",error);
    }
  }
  // HANDLE  RESET PASSWORD 
  const handleResetPassword = async(e: React.FormEvent)=>{
    e.preventDefault()
    setLoading(true);
    try {
      await ResetPassword(resetEmail);
      setSuccess(true);
      setResetEmail('')
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Error resetting password:", error);
    } finally{
      setLoading(false);
    }
  }

  return (
    <div className=" w-full relative">
      {loading && <Loader/>}
       {/* Hero left  background blur */}
          <div 
        className="absolute top-[-5%] left-[-3%] w-[180px] h-[180px] bg-[#FFFFFF]/40  rounded-[50%] blur-[50px]   z-10"
      />
     
    <img src="/stars.png" alt="" className="absolute top-[-20%] left-[0%] rotate-[43.54deg] w-[269px] h-[585px] object-cover opacity-[70%] z-10" />
      {/* Hero right  background blur */}
      <div 
        className="absolute top-[-5%] right-[-3%] w-[180px] h-[180px] bg-[#FFFFFF]/40  rounded-[50%] blur-[50px]   z-10"
      />
     
    <img src="/stars.png" alt="" className="absolute top-[-20%] right-[0%] rotate-[-43.54deg] w-[269px] h-[585px] object-cover opacity-[70%] z-10" />

      {/* Container  */}
      <main className=" flex relative z-30">
        {/* auth contents  */}
        <section className=" w-full flex flex-1 border-[1px] border-[#141718]  h-screen">
          <div className=" w-[90%] mx-auto   h-full sm:rounded-[20px] flex relative  items-center justify-center">
            {/* auth components  */}
            {resetPassword ? (
              
              <form className="flex flex-col gap-[16px] xl:w-[504px]  md:w-[447px] sm:w-[463px] w-[291px]  " onSubmit={handleResetPassword}>
                {/* input container  */}
                
                <section className=" flex flex-col gap-[16px]">
                  <p className=" text-[#141718] dark:text-[#FEFEFE] text-[24px] font-[600] leading-[40px] flex  items-center gap-[16px]">
                    <span
                      className=" -rotate-135 cursor-pointer"
                      onClick={handleSwitch}
                      id="exitreset">
                      &#8599;
                    </span>{" "}
                    Reset password
                  </p>
                   {success ? (
            <div className="flex flex-col items-center justify-center gap-4 w-full  p-6 rounded-2xl shadow-lg bg-[#1A1D1F]">
  <span className="flex items-center justify-center w-16 h-16 rounded-full bg-[#008CFF]/10 border-2 border-[#008CFF]">
    <Email fontSize="large" className="text-[#008CFF]" />
  </span>

  <p className="text-center text-lg font-bold text-gray-500">
    Password reset email sent!  <br />
    <span className="text-sm font-medium text-white">
      Please check your inbox/spams and follow the instructions.
    </span>
  </p>
</div>

                 ) : (
                  <div className=" bg-[#141718] rounded-[12px] flex items-center py-[14px] px-[16px] gap-[12px]">
                    <Email/>{" "}
                    <input
                      type="text"
                      className="flex flex-1 bg-transparent outline-none text-[14px] font-[500] leading-[24px]"
                      placeholder="Username or email"
                      value={resetEmail}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setResetEmail(e.target.value)}
                    />
                  </div>
                  )}
                </section>
          
                {/* button  */}
                {!success && <button className="bg-[#008CFF] cursor-pointer py-[14px] text-[16px] font-[600] leading-[24px] w-full rounded-[12px] text-white" type="submit">
                  Reset password
                </button>}
                
              </form>
            ) : (
              <div className=" flex flex-col gap-[8px]">
                {/* head section  */}
                 <div className="flex items-center gap-2">
          <Link to='/'><img src="/logo.png" alt="Tipply-logo" className="sm:w-[54px] sm:h-[50px] w-[38px] h-[34px] rounded-full object-cover" /></Link>
          <h2 className="text-[#FFFFFF] sm:text-[36px] text-[24px] font-[400] leading-[30px]">ipply</h2>
         </div>
                {/* bottons to swith  */}
                <section className="xl:w-[504px]  md:w-[447px] sm:w-[463px] w-[291px] flex items-center bg-[#F3F5F7] dark:bg-[#141718] p-[4px] rounded-[12px] mb-3">
                  <button
                    onClick={handleSwitch}
                    id="signin"
                    className={
                      signIn
                        ? "flex flex-1   bg-[#008CFF] py-[8px] rounded-[10px] text-[#E8ECEF] shadow-md text-[14px] leading-[24px] font-[600] items-center justify-center cursor-pointer"
                        : "flex flex-1  bg-transparent py-[8px] rounded-[10px] text-[#6C7275] text-[14px] leading-[24px] font-[600] items-center justify-center cursor-pointer"
                    }>
                    Sign in
                  </button>
                  <button
                    onClick={handleSwitch}
                    id="createaccount"
                    className={
                      createAccount
                        ? "flex flex-1   bg-[#008CFF] py-[8px] rounded-[10px] text-[#E8ECEF] shadow-md text-[14px] leading-[24px] font-[600] items-center justify-center cursor-pointer"
                        : "flex flex-1  bg-transparent py-[8px] rounded-[10px] text-[#6C7275] text-[14px] leading-[24px] font-[600] items-center justify-center cursor-pointer"
                    }>
                    Create account
                  </button>
                </section>
                 {/* sign in form  */}
                 
                {signIn && (
                  <form className="flex flex-col gap-[16px] xl:w-[504px]  md:w-[447px] sm:w-[463px] w-[291px]" onSubmit={handleSignIn}>
                    {/* input container  */}
                    <section className=" flex flex-col gap-[16px]">
                      <div className=" bg-[#141718] rounded-[12px] flex items-center py-[14px] px-[16px] gap-[12px]">
                        <Email/>{" "}
                        <input
                          type="text"
                          className="flex flex-1 bg-transparent outline-none text-[14px] font-[500] leading-[24px]"
                          placeholder="Username or email"
                          name="email"
                          value={formDataLogin.email}
                          onChange={handleChangeLogin}
                        />
                      </div>
                      <div className=" bg-[#141718] rounded-[12px] flex items-center py-[14px] px-[16px] gap-[12px]">
                        <Password/>{" "}
                        <input
                          type="password"
                          className="flex flex-1 bg-transparent outline-none text-[14px] font-[500] leading-[24px]"
                          placeholder="Password"
                          name="password"
                          value={formDataLogin.password}
                          onChange={handleChangeLogin}
                        />
                      </div>
                      <p
                        className="text-[14px] font-[500] leading-[24px] text-[#008CFF] cursor-pointer"
                        id="resetpassword"
                        onClick={handleSwitch}>
                        Forgot password?{" "}
                      </p>
                    </section>

                    {/* button  */}
                    <button className="bg-[#008CFF] cursor-pointer py-[14px] text-[16px] font-[600] leading-[24px] w-full rounded-[12px] text-white" type="submit">
                      {!loading ? 'Sign In' : 'Loading...' }
                    </button>
                  </form>
                )}

                {/* create account form  */}
                {createAccount && (
                  <form className="flex flex-col gap-[16px] xl:w-[504px]  md:w-[447px] sm:w-[463px] w-[291px]" onSubmit={handleSignUp}>
                    {/* input container  */}
                    <section className=" flex flex-col gap-[16px]">
                      <div className=" bg-[#141718] rounded-[12px] flex items-center py-[14px] px-[16px] gap-[12px]">
                        <SupportAgent/>{" "}
                        <input
                          type="text"
                          className="flex flex-1 bg-transparent outline-none text-[14px] font-[500] leading-[24px]"
                          placeholder="Username"
                          name="username"
                          value={formData.username}
                          onChange={handleChange}
                          min={4}
                        />
                      </div>
                      <div className=" bg-[#141718] rounded-[12px] flex items-center py-[14px] px-[16px] gap-[12px]">
                        <Email/>{" "}
                        <input
                          type="email"
                          className="flex flex-1 bg-transparent outline-none text-[14px] font-[500] leading-[24px]"
                          placeholder="Email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                      <div className=" bg-[#141718] rounded-[12px] flex items-center py-[14px] px-[16px] gap-[12px]">
                        <Password/>{" "}
                        <input
                          type="password"
                          className="flex flex-1 bg-transparent outline-none text-[14px] font-[500] leading-[24px]"
                          placeholder="Password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          min={8}

                        />
                      </div>
                    </section>

                    {/* button  */}
                    <button className="bg-[#008CFF] cursor-pointer py-[14px] text-[16px] font-[600] leading-[24px] w-full rounded-[12px] text-white" type="submit">
                      {!loading ? 'Sign Up' : 'Loading...' }
                    </button>
                    <p className=" text-[12px] font-[500] leading-[20px] w-full  text-[#6C7275]  text-center">
                      By creating an account, you agree to our{" "}
                      <span className=" text-[#343839]">
                        Terms of Service{" "}
                        <span className="text-[#6C7275]">and</span> Privacy &
                        Cookie Statement.
                      </span>
                    </p>
                  </form>
                )}
                
                {/* or  */}
                <section className="xl:w-[504px]  md:w-[447px] sm:w-[463px] w-[291px] flex items-center gap-[20px]">
                  <span className="flex flex-1 h-[1px] bg-[#6C727580]"></span>
                  <span className=" dark:text-[#6C727580] text-[#6C727580] text-[12px] font-[500] leading-[20px]">
                    OR
                  </span>
                  <span className="flex flex-1 h-[1px] bg-[#6C727580]"></span>
                </section>
                {/* easier auth methods  */}
                 <section className="flex flex-col gap-[12px]">
                  <button className=" flex items-center justify-center gap-[16px] border-[2px] border-[#008CFF] rounded-[12px] py-[14px] text-[16px] font-[600] leading-[24px] text-[#141718] dark:text-[#FEFEFE] hover:bg-[#008CFF] hover:scale-[103%] cursor-pointer transition-all duration-300" onClick={handleGoogleAuth}>
                    <Google/> Continue With Google
                  </button>
                </section>

               
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Authentication;

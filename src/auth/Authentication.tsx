
import { useState } from "react";
import {   Email, Google, Password } from "@mui/icons-material";
import { Link } from "react-router";

function Authentication() {
  const [signIn, setSignIn] = useState<boolean>(true);
  const [createAccount, setCreateAccount] = useState<boolean>(false);
  const [resetPassword, setResetPassword] = useState<boolean>(false);

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

  return (
    <div className=" w-full relative">

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
              <form className="flex flex-col gap-[16px] xl:w-[504px]  md:w-[447px] sm:w-[463px] w-[291px]  ">
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
                  <div className=" dark:bg-[#141718] bg-[#F3F5F7] rounded-[12px] flex items-center py-[14px] px-[16px] gap-[12px]">
                    <Email/>{" "}
                    <input
                      type="text"
                      className="flex flex-1 bg-transparent outline-none text-[14px] font-[500] leading-[24px]"
                      placeholder="Username or email"
                    />
                  </div>
                </section>

                {/* button  */}
                <button className="bg-[#008CFF] cursor-pointer py-[14px] text-[16px] font-[600] leading-[24px] w-full rounded-[12px] text-white">
                  Reset password
                </button>
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
                  <form className="flex flex-col gap-[16px] xl:w-[504px]  md:w-[447px] sm:w-[463px] w-[291px]">
                    {/* input container  */}
                    <section className=" flex flex-col gap-[16px]">
                      <div className=" dark:bg-[#141718] bg-[#F3F5F7] rounded-[12px] flex items-center py-[14px] px-[16px] gap-[12px]">
                        <Email/>{" "}
                        <input
                          type="text"
                          className="flex flex-1 bg-transparent outline-none text-[14px] font-[500] leading-[24px]"
                          placeholder="Username or email"
                        />
                      </div>
                      <div className=" dark:bg-[#141718] bg-[#F3F5F7] rounded-[12px] flex items-center py-[14px] px-[16px] gap-[12px]">
                        <Password/>{" "}
                        <input
                          type="password"
                          className="flex flex-1 bg-transparent outline-none text-[14px] font-[500] leading-[24px]"
                          placeholder="Password"
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
                    <button className="bg-[#008CFF] cursor-pointer py-[14px] text-[16px] font-[600] leading-[24px] w-full rounded-[12px] text-white">
                      Sign In
                    </button>
                  </form>
                )}

                {/* create account form  */}
                {createAccount && (
                  <form className="flex flex-col gap-[16px] xl:w-[504px]  md:w-[447px] sm:w-[463px] w-[291px]">
                    {/* input container  */}
                    <section className=" flex flex-col gap-[16px]">
                      <div className=" dark:bg-[#141718] bg-[#F3F5F7] rounded-[12px] flex items-center py-[14px] px-[16px] gap-[12px]">
                        <Email/>{" "}
                        <input
                          type="text"
                          className="flex flex-1 bg-transparent outline-none text-[14px] font-[500] leading-[24px]"
                          placeholder="Username or email"
                        />
                      </div>
                      <div className=" dark:bg-[#141718] bg-[#F3F5F7] rounded-[12px] flex items-center py-[14px] px-[16px] gap-[12px]">
                        <Password/>{" "}
                        <input
                          type="password"
                          className="flex flex-1 bg-transparent outline-none text-[14px] font-[500] leading-[24px]"
                          placeholder="Password"
                        />
                      </div>
                    </section>

                    {/* button  */}
                    <button className="bg-[#008CFF] cursor-pointer py-[14px] text-[16px] font-[600] leading-[24px] w-full rounded-[12px] text-white">
                      Sign Up 
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
                  <button className=" flex items-center justify-center gap-[16px] border-[2px] border-[#008CFF] rounded-[12px] py-[14px] text-[16px] font-[600] leading-[24px] text-[#141718] dark:text-[#FEFEFE]">
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

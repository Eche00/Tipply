import { ArrowBack, GitHub, Twitter } from "@mui/icons-material";
import { developerInfoLogics } from "../lib/logics/devLogics";
import Tip from "../components/Tip";
import Loader from "../components/Loader";
import { previewLogic } from "../lib/logics/previewLogic";
import { Link } from "react-router";



const ProfilePreview = () => {
  const { tip, setTip } = developerInfoLogics();
  const { user, loading } = previewLogic();

  if(loading) return <Loader/>
 
  return (
   <div className=" min-h-[100vh]">
     <div className="bg-[#141718] rounded-2xl flex flex-col gap-5 p-5 overflow-y-scroll sm:w-[80%] w-[90%] mx-auto my-5 ">
      
        {/* Hero left  background blur */}
          <div 
        className="absolute top-[-10%] left-[-3%] w-[180px] h-[180px] bg-[#FFFFFF]/40  rounded-[50%] blur-[50px]   z-10"
      />
     
    <img src="/stars.png" alt="" className="absolute top-[-32%] left-[0%] rotate-[43.54deg] w-[269px] h-[585px] object-cover opacity-[70%] z-10" />
      {/* Hero right  background blur */}
      <div 
        className="absolute top-[-10%] right-[-3%] w-[180px] h-[180px] bg-[#FFFFFF]/40  rounded-[50%] blur-[50px]   z-10"
      />
     
    <img src="/stars.png" alt="" className="absolute top-[-32%] right-[0%] rotate-[-43.54deg] w-[269px] h-[585px] object-cover opacity-[70%] z-10" />

      <div className="flex justify-between items-center">
        <h2 className="text-[24px] font-bold">@{user?.username}</h2>
        <Link to="/dev-spot"  className=""><ArrowBack/></Link>
      </div>

      <div className="flex sm:flex-row flex-col gap-6"  >
        {/* Left Sidebar */}
        <div className="sm:w-fit w-full sm:p-[80px] p-6 bg-[#0D0F10] rounded-xl flex flex-col items-center shadow-md border border-gray-800/50 h-fit">
          <img
            src="/profile.webp"
            alt="Profile"
            className="w-28 h-28 rounded-full border-2 border-gray-700 shadow-md mb-3 object-cover"
          />
          <h2 className="text-xl font-bold">{user?.name || "Guest"}</h2>
          <p className="text-gray-400 text-sm">@{user?.username || "Guest user"}</p>
          <p className="mt-2 text-sm bg-[#1A1D1F] px-3 py-1 rounded-full border border-gray-800/50">
            {user?.devType || "Developer"}
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Wallet:{" "}
            {user?.wallet
              ? `${user.wallet.slice(0, 6)}...${user.wallet.slice(-4)}`
              : "0x0000...0000"}
          </p>

          <div className="w-full mx-auto flex gap-[15px] items-center py-[20px]">
            <button
              className="flex-1 py-[8px] bg-[#008CFF] rounded-[13px] flex items-center justify-center border-b border-[#7346F1] text-white font-extrabold cursor-pointer hover:scale-[102%] transition-all duration-300"
              onClick={() => setTip(!tip)}
            >
              𝓣ip
            </button>
          </div>

          <div className="flex gap-5 mt-4">
            {user?.github && (
              <a href={user.github} target="_blank" rel="noreferrer">
                <GitHub className="text-2xl hover:text-gray-300" />
              </a>
            )}
            {user?.twitter && (
              <a href={user.twitter} target="_blank" rel="noreferrer">
                <Twitter className="text-2xl text-blue-400 hover:text-blue-300" />
              </a>
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Account Info */}
          <div className="bg-[#0D0F10] rounded-xl p-6 shadow-md border border-gray-800/50">
            <h3 className="text-lg font-semibold border-b border-gray-800/50 pb-2 mb-4">
              Account Information
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              {["username", "name", "email", "phone", "wallet"].map((field) => (
                <p key={field}>
                  <span className="font-semibold text-white">
                    {field[0].toUpperCase() + field.slice(1)}:
                  </span>{" "}
                  {user?.[field as any] || "N/A"}
                </p>
              ))}
            </div>
          </div>

          {/* Personal Info */}
          <div className="bg-[#0D0F10] rounded-xl p-6 shadow-md border border-gray-800/50">
            <h3 className="text-lg font-semibold border-b border-gray-800/50 pb-2 mb-4">
              Personal Information
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <p>
                <span className="font-semibold text-white">Date of Birth:</span>{" "}
                {user?.dob || "N/A"}
              </p>
              <p>
                <span className="font-semibold text-white">Gender:</span>{" "}
                {user?.gender || "N/A"}
              </p>
              <p className="col-span-2">
                <span className="font-semibold text-white">Address:</span>{" "}
                {user?.address || "N/A"}
              </p>
            </div>
          </div>

          {/* Developer Info */}
          <div className="bg-[#0D0F10] rounded-xl p-6 shadow-md border border-gray-800/50">
            <h3 className="text-lg font-semibold border-b border-gray-800/50 pb-2 mb-4">
              Developer Information
            </h3>
            <p className="text-gray-400 text-sm mb-4 italic">
              {user?.bio || "No bio available"}
            </p>
            {user?.techStacks?.length ? (
              user.techStacks.map((stack:string, idx:number) => (
                <span
                  key={idx}
                  className="bg-[#1A1D1F] px-3 py-1 rounded-lg text-xs font-medium text-gray-200 border border-gray-800/50"
                >
                  {stack}
                </span>
              ))
            ) : (
              <p className="text-gray-400 text-sm mb-4 italic">
                No tech stack added
              </p>
            )}
          </div>

          {/* Projects Section */}
          <div className="bg-[#0D0F10] rounded-xl p-6 mt-6 shadow-md border border-gray-800/50">
            <h3 className="text-xl font-bold mb-4">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
              {user?.projects?.length ? (
                user.projects.map((project:any, index:number) => (
                  <div
                    key={index}
                    className="bg-[#1A1D1F] rounded-xl p-4 shadow-md border border-gray-800/50 hover:border-blue-500/50 hover:shadow-blue-500/10 transition"
                  >
                    <h4 className="text-white font-semibold">{project.title}</h4>
                    <p className="text-gray-400 text-sm line-clamp-1">
                      {project.description}
                    </p>
                    <a
                      href={project.link}
                      className="text-blue-400 text-sm mt-2 inline-block hover:underline"
                    >
                      View Project →
                    </a>
                  </div>
                ))
              ) : (
                <p className="text-gray-400 text-sm italic">No projects added</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {tip && <Tip tip={tip} setTip={setTip} />}
      
    </div>
   </div>
  );
};

export default ProfilePreview;

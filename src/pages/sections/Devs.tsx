
import { Icons } from "../../lib/icons/Icons";
import { Search } from "@mui/icons-material";
import { Svgs } from "../../lib/svg/Svg";
import Tip from "../../components/Tip";
import Loader from "../../components/Loader";
import { developerInfoLogics } from "../../lib/logics/devLogics";

function Devs() {
const {tip, setTip,loading, searchTerm, setSearchTerm, currentPage,totalPages,currentUsers,goToPage,handleView} = developerInfoLogics()
  return (
    <div className="bg-[linear-gradient(to_right,#4f4f4f0e_0.8px,transparent_0.1px),linear-gradient(to_bottom,#4f4f4f0e_0.8px,transparent_0.1px)] md:bg-[size:104px_104px] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_100%_70%_at_50%_100%,#000_70%,transparent_[200%])] h-fit flex items-center justify-center w-full">
      
      {/* Hero background */}
      <div className="absolute top-[-10%] left-[-3%] w-[180px] h-[180px] bg-[#FFFFFF]/40 rounded-[50%] blur-[50px] z-10" />
      <img src="/stars.png" alt="" className="absolute top-[-32%] left-[0%] rotate-[43.54deg] w-[269px] h-[585px] object-cover opacity-[70%] z-10" />
      <div className="absolute top-[-10%] right-[-3%] w-[180px] h-[180px] bg-[#FFFFFF]/40 rounded-[50%] blur-[50px] z-10" />
      <img src="/stars.png" alt="" className="absolute top-[-32%] right-[0%] rotate-[-43.54deg] w-[269px] h-[585px] object-cover opacity-[70%] z-10" />

      <section className="flex flex-col w-[90%] mx-auto py-[50px] relative z-30 min-h-[100vh]">
        {/* Header */}
        <div className="flex sm:flex-row flex-col sm:items-center sm:justify-between gap-[20px] relative z-30">
          <h2 className="flex-1 text-[40px] leading-[55px] capitalize bg-gradient-to-r from-[#008CFF] to-[#FFFFFF69] font-extrabold bg-clip-text text-transparent">
            Developers
          </h2>
          <div className="flex flex-1 items-center gap-[10px] border-1 border-[#008CFF] px-[10px] py-[5px] rounded-[8px]">
            <Search fontSize="large" /> 
            <input 
              type="text" 
              className="w-full flex-1 outline-none border-none" 
              placeholder="Search by username..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex-1 flex justify-end ">
            <span>{Svgs.person}</span>
          </div>
        </div>

        {/* Profiles Grid */}
        <section className="flex flex-wrap gap-[48px] sm:justify-start justify-center py-[48px]">
          {loading ? (
            <p className="text-white"><Loader/></p>
          ) : currentUsers.length > 0 ? (
            currentUsers.map((user) => (
              <section key={user.id} className="bg-[#141414] rounded-[24px] flex flex-col gap-[5px] overflow-hidden w-[320px] h-fit group hover:scale-[102%] transition-all duration-300">
                <div className="w-full h-fit">
                  <img
                    src={user.photoURL || "/profile.webp"}
                    alt={user.username}
                    className="w-full h-[150px] hover:scale-[105%] object-cover duration-300"
                  />
                </div>

                <div className="w-[90%] mx-auto pb-[10px] flex items-center justify-between gap-[5px]">
                  <h3 className="text-[20px] text-[#FFFFFF] font-[400] italic">
                    @{user.username || "unknown"}
                  </h3>
                  <p className="bg-[#FFFFFF0A] px-[10px] py-[5px] border-[1px] shadow-sm border-[#FFFFFF14] text-[#FFFFFF] text-[10px] font-bold leading-[16px] flex items-center justify-center gap-[10px] rounded-full uppercase">
                    {user.role || "Developer"}
                  </p>
                </div>

                <div className="w-[90%] mx-auto flex gap-[15px] items-center pb-[20px]">
                  <button className="flex-1 py-[8px] bg-[#56565653] rounded-[13px] flex items-center justify-center border-b border-[#008CFF] cursor-pointer hover:scale-[102%] transition-all duration-300 font-extrabold" onClick={()=>handleView(user?.username)}>
                    View
                  </button>
                  <button
                    className="flex-1 py-[8px] bg-[#008CFF] rounded-[13px] flex items-center justify-center border-b border-[#7346F1] text-white font-extrabold cursor-pointer hover:scale-[102%] transition-all duration-300"
                    onClick={() => setTip(!tip)}
                  >
                    𝓣ip
                  </button>
                </div>
              </section>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center w-full">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0D0F10] border border-gray-800/50 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 14h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-gray-400 text-sm italic">No user found...</p>
            </div>
          )}
        </section>

        {/* Pagination Controls */}
        {!searchTerm && (
  <section className="flex flex-col gap-[5px] py-[50px]">
    <div className="w-full flex items-center justify-center">
      <div className="w-fit flex items-center gap-[10px] bg-[#56565633] rounded-[8px]">
        {Array.from({ length: totalPages }, (_, idx) => (
          <p
            key={idx}
            onClick={() => goToPage(idx + 1)}
            className={`px-[15px] py-[2px] rounded-[8px] cursor-pointer ${currentPage === idx + 1 ? "bg-[#008CFF]" : ""}`}
          >
            {idx + 1}
          </p>
        ))}
      </div>
    </div>
    <div className="flex items-center justify-between">
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-[120px] sm:w-[300px] py-[16px] bg-[#56565653] rounded-[13px] flex items-center justify-center gap-[10px] border-b border-[#008CFF] cursor-pointer hover:scale-[102%] transition-all duration-300"
      >
        {Icons.arrowleft} Prev
      </button>
      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="w-[120px] sm:w-[300px] py-[16px] bg-[#56565653] rounded-[13px] flex items-center justify-center gap-[10px] border-b border-[#008CFF] cursor-pointer hover:scale-[102%] transition-all duration-300"
      >
        Next {Icons.arrowright}
      </button>
    </div>
  </section>
)}

      </section>

      {tip && <Tip tip={tip} setTip={setTip} />}
    </div>
  );
}

export default Devs;

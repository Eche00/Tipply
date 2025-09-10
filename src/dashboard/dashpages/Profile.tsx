import { Add, Delete, GitHub, Twitter } from "@mui/icons-material";
import { useUserInfo } from "../../lib/logics/profileLogic";
import { adminLogics } from "../../lib/logics/adminLogic";

const Profile = () => {
  const {user,
    edit,
    setEdit,
    newProject,
    showModal,
    setShowModal,
    loading,
    handleChange,
    handleUpdateUser,
    handleChangeProject,
    handleAddProject
  } = useUserInfo();
  const {deleteProject} = adminLogics()  
  
 


  return (
     <div className="bg-[#141718] sm:h-[98%] rounded-2xl flex flex-col gap-5 p-5 overflow-y-scroll">
      <div className="flex justify-between items-center">
        <h2 className="text-[32px] font-extrabold">Profile </h2>
        <div className="flex items-center gap-[10px]">
          {edit &&
           <button
          onClick={() => setEdit(false)}
          className="text-lg font-medium border border-[#FFFFFF14] py-1 px-6 rounded-lg bg-[#FFFFFF0A] cursor-pointer">
          Cancel
        </button>}
         <button
          onClick={edit ? handleUpdateUser : () => setEdit(true)}
          className="text-lg font-medium border border-[#FFFFFF14] py-1 px-6 rounded-lg bg-[#034FE3] cursor-pointer"
          disabled={loading}
        >
          {edit ? "Save" : "Edit"}
        </button>
        </div>
      </div>

      <div className="flex sm:flex-row flex-col gap-6">
        {/* Left Sidebar */}
        <div className="sm:w-fit w-full sm:p-[80px] p-6 bg-[#0D0F10] rounded-xl flex flex-col items-center shadow-md border border-gray-800/50 h-fit">
          {/* <img
            src="/profile.webp"
            alt="Profile"
            className="w-28 h-28 rounded-full border-2 border-gray-700 shadow-md mb-3 object-cover"
          /> */}
         <p className="w-28 h-28 rounded-full text-[50px] bg-black border-2 border-gray-700 shadow-md flex items-center justify-center mb-3">{user?.username?.slice(0,1)}</p> 
          <h2 className="text-xl font-bold">{user?.name  || "Guest"}</h2>
          <p className="text-gray-400 text-sm">@{user?.username || "Guest user"}</p>
          <p className="mt-2 text-sm bg-[#1A1D1F] px-3 py-1 rounded-full border border-gray-800/50">
            {user?.devType || "Developer"}
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Wallet: {user?.wallet ?`${user?.wallet?.slice(0,6)}...${user?.wallet?.slice(-4)}`: '0x0000...0000'}
          </p>
          <div className="flex gap-5 mt-4">
            {user?.github && (
              <a href={user?.github} target="_blank" rel="noreferrer">
                <GitHub className="text-2xl hover:text-gray-300" />
              </a>
            )}
            {user?.twitter && (
              <a href={user?.twitter} target="_blank" rel="noreferrer">
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
             {["username", "name", "email", "phone", "wallet"].map((field) =>
  edit ? (
    field === "email" ? (
      <p key={field}>
        <span className="font-semibold text-white">
          {field[0].toUpperCase() + field.slice(1)}:
        </span>{" "}
        {user?.[field] || "N/A"}
      </p>
    ) : (
      <input
        key={field}
        className="bg-[#1A1D1F] p-2 rounded-lg"
        value={user?.[field] || ""}
        onChange={(e) => handleChange(field, e.target.value)}
        placeholder={field}
      />
    )
  ) : (
    <p key={field}>
      <span className="font-semibold text-white">
        {field[0].toUpperCase() + field.slice(1)}:
      </span>{" "}
      {user?.[field] || "N/A"}
    </p>
  )
)}

            </div>
          </div>

          {/* Personal Info */}
          <div className="bg-[#0D0F10] rounded-xl p-6 shadow-md border border-gray-800/50">
            <h3 className="text-lg font-semibold border-b border-gray-800/50 pb-2 mb-4">
              Personal Information
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              {edit ? (
                <>
                  <input
  type="date"
  className="bg-[#1A1D1F] p-2 rounded-lg"
  value={user?.dob || ""}
  onChange={(e) => handleChange("dob", e.target.value)}
/>

                  <select
  className="bg-[#1A1D1F] p-2 rounded-lg"
  value={user?.gender || ""}
  onChange={(e) => handleChange("gender", e.target.value)}
>
  <option value="">Select Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="others">Others</option>
</select>

                  <input
                    className="bg-[#1A1D1F] p-2 rounded-lg col-span-2"
                    value={user?.address || ""}
                    onChange={(e) => handleChange("address", e.target.value)}
                    placeholder="address"

                  />
                </>
              ) : (
                <>
                  <p>
                    <span className="font-semibold text-white">Date of Birth:</span> {user?.dob || "N/A"}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Gender:</span> {user?.gender || "N/A"}
                  </p>
                  <p className="col-span-2">
                    <span className="font-semibold text-white">Address:</span> {user?.address || "N/A"}
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Developer Info */}
           <div className="bg-[#0D0F10] rounded-xl p-6 shadow-md border border-gray-800/50">
  <h3 className="text-lg font-semibold border-b border-gray-800/50 pb-2 mb-4">
    Developer Information
  </h3>

  {edit ? (
    <>
      <textarea
        className="bg-[#1A1D1F] w-full p-3 rounded-lg mb-4"
        value={user?.bio || ""}
        onChange={(e) => handleChange("bio", e.target.value)}
        placeholder="bio..."
      />        
      <input
        className="bg-[#1A1D1F] w-full p-3 rounded-lg mb-4"
        value={user?.devType  || ""}
        onChange={(e) => handleChange("devType", e.target.value)}
        placeholder="Software Developer..."
      />        
        {/* Add new tech input */}
        
        <p className="text-gray-400 text-sm mb-4 italic">Tech stacks</p>
           <div className="flex gap-2 flex-wrap">
            
  {[0, 1, 2, 3, 4].map((idx) => (
    <input
      key={idx}
      type="text"
      className="bg-[#1A1D1F] px-3 py-1 rounded-lg text-xs text-gray-200 border border-gray-800/50"
      value={user?.techStacks?.[idx] || ""}
      onChange={(e) => {
        const newStacks = [...(user?.techStacks || [])];
        newStacks[idx] = e.target.value;
        handleChange("techStacks", newStacks);
      }}
    />
  ))}
</div>
{/* Social links */}
    <div className="flex flex-col gap-2 pt-5">
      <input
        type="text"
        className="bg-[#1A1D1F] px-3 py-2 rounded-lg text-sm text-gray-200 border border-gray-800/50"
        value={user?.github || ""}
        onChange={(e) => handleChange("github", e.target.value)}
        placeholder="GitHub link"
      />
      <input
        type="text"
        className="bg-[#1A1D1F] px-3 py-2 rounded-lg text-sm text-gray-200 border border-gray-800/50"
        value={user?.twitter || ""}
        onChange={(e) => handleChange("twitter", e.target.value)}
        placeholder="Twitter link"
      />
    </div>
    </>
  ) : (< >
    <p className="text-gray-400 text-sm mb-4 italic">{user?.bio || "No bio available"}</p>
   <div className="flex flex-wrap gap-2">
     {user?.techStacks?.length > 0 ? user?.techStacks?.map((stack: string, idx: number) => (
          <span
            key={idx}
            className="bg-[#1A1D1F] px-3 py-1 rounded-lg text-xs font-medium text-gray-200 border border-gray-800/50   w-fit "
          >
            {stack}
          </span>
        )) :  <p className="text-gray-400 text-sm mb-4 italic">No tech stack added</p>}
   </div>
        </>
  )}
</div>


          {/* Projects Section */}
       {!edit &&
         <div className="bg-[#0D0F10] rounded-xl p-6 mt-6 shadow-md border border-gray-800/50">
      <h3 className="text-xl font-bold mb-4">Projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
        {user?.projects?.map((project: any, index: number) => (
          <div
            key={index}
            className="bg-[#1A1D1F] rounded-xl p-4 shadow-md border border-gray-800/50 hover:border-blue-500/50 hover:shadow-blue-500/10 transition relative"
          >
            <p onClick={() => deleteProject(user?.uid, project.createdAt)} className=" absolute top-1 right-2 cursor-pointer text-red-600"><Delete/></p>
            <h4 className="text-white font-semibold">{project.title}</h4>
            <p className="text-gray-400 text-sm line-clamp-1">{project.description}</p>
            <a
              href={project.link}
              className="text-blue-400 text-sm mt-2 inline-block hover:underline"
            >
              View Project →
            </a>
          </div>
        ))}

        {/* Add Project Button */}
        <div
          className="bg-[#1A1D1F] rounded-xl p-8 shadow-md border border-blue-500/50 hover:shadow-blue-500/10 transition flex flex-col items-center justify-center cursor-pointer hover:scale-[102%]"
          onClick={() => setShowModal(true)}
        >
          <h4 className="text-white font-semibold">
            <Add />
          </h4>
          <p className="text-gray-400 text-sm">Add Project</p>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#0D0F10] p-6 rounded-xl w-[400px] flex flex-col gap-4 shadow-lg">
            <h3 className="text-lg font-bold text-white">Add New Project</h3>
            <input
              type="text"
              placeholder="Title"
              className="bg-[#1A1D1F] p-2 rounded-lg text-white"
              value={newProject.title}
              onChange={(e) => handleChangeProject("title", e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              className="bg-[#1A1D1F] p-2 rounded-lg text-white"
              value={newProject.description}
              onChange={(e) => handleChangeProject("description", e.target.value)}
            />
            <input
              type="text"
              placeholder="Link"
              className="bg-[#1A1D1F] p-2 rounded-lg text-white"
              value={newProject.link}
              onChange={(e) => handleChangeProject("link", e.target.value)}
            />
            <div className="flex gap-4 justify-end">
              <button
                className="bg-gray-700 px-4 py-2 rounded-lg text-white cursor-pointer"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button
                className="bg-blue-500 px-4 py-2 rounded-lg text-white cursor-pointer"
                onClick={handleAddProject}
                disabled={loading}
              >
                {loading ? "Saving..." : "Add Project"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div> }
        </div>
      </div>
    </div>
  );
};

export default Profile;

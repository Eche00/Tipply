import { useState } from "react";
import { GitHub, Twitter } from "@mui/icons-material";

const Profile = () => {
  const [edit, setEdit] = useState(false);

  const [profile, setProfile] = useState({
    username: "Eche_codes",
    name: "Big_X 🚀",
    email: "echeze00@gmail.com",
    phone: "07041729402",
    dob: "May 22, 2004",
    gender: "Male",
    address: "No 33 Akonam Eze Crescent",
    wallet: "0x1234...ABCD",
    devType: "Web2 / Web3 Developer",
    bio: "Passionate about building scalable web and blockchain applications. Always learning and exploring new technologies.",
    techStacks: ["React", "Tailwind", "Solidity", "Node.js", "Ether.js"],
    twitter: "https://twitter.com/username",
    github: "https://github.com/username",
    projects: [
      {
        title: "Crypto Dashboard",
        description: "A live crypto market overview app built with React & Tailwind.",
        link: "#",
      },
      {
        title: "NFT Marketplace",
        description: "A marketplace for NFTs using Solidity & Next.js.",
        link: "#",
      },
      {
        title: "Tipping dApp",
        description: "A decentralized tipping platform for developers.",
        link: "#",
      },
    ],
  });

  // handle updates for editable fields
  // const handleChange = (field, value) => {
  //   setProfile((prev) => ({ ...prev, [field]: value }));
  // };

  return (
    <div className="bg-[#141718] sm:h-[98%] rounded-2xl overflow-hidden flex flex-col gap-5 p-5 overflow-y-scroll">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-[32px] font-extrabold">Profile</h2>
        <button
          onClick={() => setEdit((prev) => !prev)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition"
        >
          {edit ? "Save" : "Edit"}
        </button>
      </div>

      <div className="flex sm:flex-row flex-col gap-6">
        {/* Left Sidebar - Profile Card (Unchanged) */}
        <div className="sm:w-fit w-full sm:p-[80px] p-6 bg-[#0D0F10] h-fit rounded-xl flex flex-col items-center shadow-md border border-gray-800/50">
          <img
            src="/profile.webp"
            alt="Profile"
            className="w-28 h-28 rounded-full border-2 border-gray-700 shadow-md mb-3 object-cover"
          />
          <h2 className="text-xl font-bold">{profile.name}</h2>
          <p className="text-gray-400 text-sm">@{profile.username}</p>
          <p className="mt-2 text-sm bg-[#1A1D1F] px-3 py-1 rounded-full border border-gray-800/50">
            {profile.devType}
          </p>

          {/* Wallet */}
          <p className="text-gray-500 text-xs mt-2">Wallet: {profile.wallet}</p>

          {/* Socials */}
          <div className="flex gap-5 mt-4">
            <a href={profile?.github} target="_blank" rel="noreferrer">
              <GitHub className="text-2xl hover:text-gray-300" />
            </a>
            <a href={profile.twitter} target="_blank" rel="noreferrer">
              <Twitter className="text-2xl text-blue-400 hover:text-blue-300" />
            </a>
          
          </div>
        </div>

        {/* Right Side - Info Sections */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Account Info */}
          <div className="bg-[#0D0F10] rounded-xl p-6 shadow-md border border-gray-800/50">
            <h3 className="text-lg font-semibold border-b border-gray-800/50 pb-2 mb-4">
              Account Information
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              {edit ? (
                <>
                  <input
                    className="bg-[#1A1D1F] p-2 rounded-lg"
                    value={profile.username}
                    // onChange={(e) => handleChange("username", e.target.value)}
                  />
                  <input
                    className="bg-[#1A1D1F] p-2 rounded-lg"
                    value={profile.name}
                    // onChange={(e) => handleChange("name", e.target.value)}
                  />
                  <input
                    className="bg-[#1A1D1F] p-2 rounded-lg"
                    value={profile.email}
                    // onChange={(e) => handleChange("email", e.target.value)}
                  />
                  <input
                    className="bg-[#1A1D1F] p-2 rounded-lg"
                    value={profile.phone}
                    // onChange={(e) => handleChange("phone", e.target.value)}
                  />
                </>
              ) : (
                <>
                  <p>
                    <span className="font-semibold text-white">Username:</span>{" "}
                    {profile.username}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Full Name:</span>{" "}
                    {profile.name}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Email:</span>{" "}
                    {profile.email}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Phone:</span>{" "}
                    {profile.phone}
                  </p>
                </>
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
                    className="bg-[#1A1D1F] p-2 rounded-lg"
                    value={profile.dob}
                    // onChange={(e) => handleChange("dob", e.target.value)}
                  />
                  <input
                    className="bg-[#1A1D1F] p-2 rounded-lg"
                    value={profile.gender}
                    // onChange={(e) => handleChange("gender", e.target.value)}
                  />
                  <input
                    className="bg-[#1A1D1F] p-2 rounded-lg col-span-2"
                    value={profile.address}
                    // onChange={(e) => handleChange("address", e.target.value)}
                  />
                </>
              ) : (
                <>
                  <p>
                    <span className="font-semibold text-white">Date of Birth:</span>{" "}
                    {profile.dob}
                  </p>
                  <p>
                    <span className="font-semibold text-white">Gender:</span>{" "}
                    {profile.gender}
                  </p>
                  <p className="col-span-2">
                    <span className="font-semibold text-white">Address:</span>{" "}
                    {profile.address}
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
              <textarea
                className="bg-[#1A1D1F] w-full p-3 rounded-lg mb-4"
                value={profile.bio}
                // onChange={(e) => handleChange("bio", e.target.value)}
              />
            ) : (
              <p className="text-gray-400 text-sm mb-4 italic">{profile.bio}</p>
            )}

            <div className="flex gap-2 flex-wrap">
              {profile.techStacks.map((stack, idx) =>
                edit ? (
                  <input
                    key={idx}
                    className="bg-[#1A1D1F] px-3 py-1 rounded-lg text-xs font-medium text-gray-200 border border-gray-800/50"
                    value={stack}
                    // onChange={(e) => {
                    //   const newStacks = [...profile.techStacks];
                    //   newStacks[idx] = e.target.value;
                    //   handleChange("techStacks", newStacks);
                    // }}
                  />
                ) : (
                  <span
                    key={idx}
                    className="bg-[#1A1D1F] px-3 py-1 rounded-lg text-xs font-medium text-gray-200 border border-gray-800/50"
                  >
                    {stack}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Projects Section */}
          <div className="bg-[#0D0F10] rounded-xl p-6 mt-6 shadow-md border border-gray-800/50">
            <h3 className="text-xl font-bold mb-4">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {profile.projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#1A1D1F] rounded-xl p-4 shadow-md border border-gray-800/50 hover:border-blue-500/50 hover:shadow-blue-500/10 transition"
                >
                  {edit ? (
                    <>
                      <input
                        className="bg-[#0D0F10] p-2 w-full mb-2 rounded"
                        value={project.title}
                        // onChange={(e) => {
                        //   const newProjects = [...profile.projects];
                        //   newProjects[index].title = e.target.value;
                        //   handleChange("projects", newProjects);
                        // }}
                      />
                      <textarea
                        className="bg-[#0D0F10] p-2 w-full mb-2 rounded"
                        value={project.description}
                        // onChange={(e) => {
                        //   const newProjects = [...profile.projects];
                        //   newProjects[index].description = e.target.value;
                        //   handleChange("projects", newProjects);
                        // }}
                      />
                      <input
                        className="bg-[#0D0F10] p-2 w-full rounded"
                        value={project.link}
                        // onChange={(e) => {
                        //   const newProjects = [...profile.projects];
                        //   newProjects[index].link = e.target.value;
                        //   handleChange("projects", newProjects);
                        // }}
                      />
                    </>
                  ) : (
                    <>
                      <h4 className="text-white font-semibold">{project.title}</h4>
                      <p className="text-gray-400 text-sm">{project.description}</p>
                      <a
                        href={project.link}
                        className="text-blue-400 text-sm mt-2 inline-block hover:underline"
                      >
                        View Project →
                      </a>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

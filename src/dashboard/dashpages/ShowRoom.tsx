
function ShowRoom() {
  const developers = [
  {
    username: "Eche_codes",
    name: "Big_X 🚀",
    profileImg: "/profile.webp",
    projects: [
      {
        title: "Crypto Dashboard",
        description: "A live crypto market overview app built with React & Tailwind.",
        link: "#",
      }
    ],
  },
  {
    username: "JaneDoe",
    name: "Jane Doe",
    profileImg: "/profile.webp",
    projects: [
      {
        title: "AI Assistant",
        description: "An AI-powered chatbot with voice recognition.",
        link: "#",
      },
    ],
  },
  {
    username: "Eche_codes",
    name: "Big_X 🚀",
    profileImg: "/profile.webp",
    projects: [
      {
        title: "Crypto Dashboard",
        description: "A live crypto market overview app built with React & Tailwind.",
        link: "#",
      }
    ],
  },
  {
    username: "JaneDoe",
    name: "Jane Doe",
    profileImg: "/profile.webp",
    projects: [
      {
        title: "AI Assistant",
        description: "An AI-powered chatbot with voice recognition.",
        link: "#",
      },
    ],
  },
  {
    username: "Eche_codes",
    name: "Big_X 🚀",
    profileImg: "/profile.webp",
    projects: [
      {
        title: "Crypto Dashboard",
        description: "A live crypto market overview app built with React & Tailwind.",
        link: "#",
      }
    ],
  },
  {
    username: "JaneDoe",
    name: "Jane Doe",
    profileImg: "/profile.webp",
    projects: [
      {
        title: "AI Assistant",
        description: "An AI-powered chatbot with voice recognition.",
        link: "#",
      },
    ],
  },
  {
    username: "Eche_codes",
    name: "Big_X 🚀",
    profileImg: "/profile.webp",
    projects: [
      {
        title: "Crypto Dashboard",
        description: "A live crypto market overview app built with React & Tailwind.",
        link: "#",
      }
    ],
  },
  {
    username: "JaneDoe",
    name: "Jane Doe",
    profileImg: "/profile.webp",
    projects: [
      {
        title: "AI Assistant",
        description: "An AI-powered chatbot with voice recognition.",
        link: "#",
      },
    ],
  },
  {
    username: "Eche_codes",
    name: "Big_X 🚀",
    profileImg: "/profile.webp",
    projects: [
      {
        title: "Crypto Dashboard",
        description: "A live crypto market overview app built with React & Tailwind.",
        link: "#",
      }
    ],
  },
  {
    username: "JaneDoe",
    name: "Jane Doe",
    profileImg: "/profile.webp",
    projects: [
      {
        title: "AI Assistant",
        description: "An AI-powered chatbot with voice recognition.",
        link: "#",
      },
    ],
  },
  {
    username: "Eche_codes",
    name: "Big_X 🚀",
    profileImg: "/profile.webp",
    projects: [
      {
        title: "Crypto Dashboard",
        description: "A live crypto market overview app built with React & Tailwind.",
        link: "#",
      }
    ],
  },
  {
    username: "JaneDoe",
    name: "Jane Doe",
    profileImg: "/profile.webp",
    projects: [
      {
        title: "AI Assistant",
        description: "An AI-powered chatbot with voice recognition.",
        link: "#",
      },
    ],
  },
];

  return (
     <div className="bg-[#141718] sm:h-[98%] rounded-2xl overflow-hidden flex flex-col gap-5 p-5 overflow-y-scroll">
     <div className="flex items-center justify-between gap-[12px]">
  <h2 className="text-[32px] font-extrabold mb-4">ShowRoom</h2>

  <input
    type="text"
    placeholder="Search..."
    className="sm:w-[500px] w-fit border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none "
  />
</div>


      {/* Loop through developers */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {developers.map((dev, idx) => (
          <div
            key={idx}
            className="bg-[#0D0F10] rounded-xl p-6 shadow-md border border-gray-800/50"
          >
            {/* Developer Header */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={dev.profileImg}
                alt={dev.name}
                className="w-14 h-14 rounded-full border border-gray-700 object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold">{dev.name}</h3>
                <p className="text-gray-400 text-sm">@{dev.username}</p>
              </div>
            </div>

            {/* Projects */}
            <div className="grid grid-cols-1 gap-4">
              {dev.projects.map((project, pIdx) => (
                <div
                  key={pIdx}
                  className="bg-[#1A1D1F] rounded-lg p-4 shadow-md border border-gray-800/50 hover:border-blue-500/50 hover:shadow-blue-500/10 transition"
                >
                  <h4 className="text-white font-semibold">{project.title}</h4>
                  <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 text-sm hover:underline"
                  >
                    View Project →
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShowRoom
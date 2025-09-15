import Loader from "../../components/Loader";
import { useDevProjectDatas } from "../../lib/logics/showRoom";

function ShowRoom() {
  const { loading, projects, searchTerm, setSearchTerm } = useDevProjectDatas();

  // Filter projects based on search term
  const filteredProjects = projects.filter((proj: any) =>
    proj.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if(loading) <Loader/>
  return (
    <div className="bg-[#141718] sm:h-[98%] rounded-2xl overflow-hidden flex flex-col gap-5 p-5 overflow-y-scroll">
      <div className="flex sm:flex-row flex-col sm:items-center justify-between gap-[12px]">
        <h2 className="text-[32px] font-extrabold mb-4">ShowRoom</h2>

        <input
          type="text"
          placeholder="Search projects by title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="sm:max-w-[400px] sm:w-full w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none "
        />
      </div>

      {/* Loop through filtered projects */}
      <div className="grid grid-cols-1  md:grid-cols-2 xxl:grid-cols-3  gap-6">
        {filteredProjects.map((proj: any, idx: number) => (
          <div
            key={idx}
            className="bg-[#0D0F10] rounded-xl p-6 shadow-md border border-gray-800/50"
          >
            {/* Developer Info */}
            <div className="flex items-center gap-4 mb-4">
              <p className="w-[50px] h-[50px] rounded-full bg-black border-2 border-[#008CFF] flex items-center justify-center uppercase">
                {proj?.username?.slice(0, 1)}
              </p>
              <div>
                <h3 className="text-lg font-semibold">{proj.name}</h3>
                <p className="text-gray-400 text-sm">@{proj.username}</p>
              </div>
            </div>

            {/* Project Info */}
            <div className="bg-[#1A1D1F] rounded-lg p-4 shadow-md border border-gray-800/50 hover:border-blue-500/50 hover:shadow-blue-500/10 transition">
              <h4 className="text-white font-semibold">{proj.title}</h4>
              <p className="text-gray-400 text-sm mb-2 line-clamp-1">{proj.description}</p>
              <a
                href={proj.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 text-sm hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>

      
     {loading ? (
  <Loader />
) : filteredProjects.length === 0 ? (
  <p className="text-gray-400 text-center">No projects found</p>
): ''}

    </div>
  );
}

export default ShowRoom;

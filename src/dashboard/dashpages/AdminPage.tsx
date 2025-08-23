
import { AccountBalance, CloudCircle, People } from "@mui/icons-material";
import { adminLogics } from "../../lib/logics/adminLogic";

function AdminPage() {
const {users,projects, loading, showUsersModal, setShowUsersModal,showProjectsModal, setShowProjectsModal,deleteProject,totalUsers,totalProjects,totalMoney} = adminLogics()  


  return (
    <div className="bg-[#141718] sm:min-h-[98%] rounded-2xl p-6 space-y-8 shadow-md border border-[#FFFFFF14]">
      {/* ---- SUMMARY CARDS ---- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-[#0D0F10] via-[#050520] to-[#034FE3] p-6 rounded-2xl shadow-md border border-[#FFFFFF14] relative">
          <h3 className="text-xs uppercase text-gray-300 tracking-wider">Total Users</h3>
          <p className="text-4xl font-extrabold text-white mt-2">{totalUsers}</p>
          <span className="absolute top-2 right-4"><People/></span>
        </div>
        <div className="bg-gradient-to-br from-[#0D0F10] via-[#050520] to-[#034FE3] p-6 rounded-2xl shadow-md border border-[#FFFFFF14] relative">
          <h3 className="text-xs uppercase text-gray-300 tracking-wider">Total Projects</h3>
          <p className="text-4xl font-extrabold text-white mt-2">{totalProjects}</p>
          <span className="absolute top-2 right-4"><CloudCircle/></span>
        </div>
        <div className="bg-gradient-to-br from-[#0D0F10] via-[#050520] to-[#034FE3] p-6 rounded-2xl shadow-md border border-[#FFFFFF14] relative">
          <h3 className="text-xs uppercase text-gray-300 tracking-wider">Wallet Balance</h3>
          <p className="text-4xl font-extrabold text-white mt-2">${totalMoney}</p>
          <span className="absolute top-2 right-4"><AccountBalance/></span>
        </div>
      </div>

      {/* ---- USERS TABLE ---- */}
      <div className="bg-[#0D0F10] rounded-2xl p-6 shadow-md border border-[#FFFFFF14]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-white">Users</h3>
          {users.length > 8 && (
            <button
              onClick={() => setShowUsersModal(true)}
              className="px-3 py-1.5 rounded-lg bg-[#034FE3] text-sm text-white font-medium shadow hover:bg-[#0363ff] transition cursor-pointer"
            >
              See More
            </button>
          )}
        </div>
        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm border border-[#FFFFFF14] rounded-lg overflow-hidden">
              <thead className="bg-[#FFFFFF0A] text-gray-300 uppercase text-xs tracking-wider">
                <tr>
                  <th className="px-4 py-3 text-left">Username</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Email</th>
                  <th className="px-4 py-3 text-left">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.slice(0, 8).map((u, idx) => (
                  <tr
                    key={u.id}
                    className={`${
                      idx % 2 === 0 ? "bg-[#141718]" : "bg-[#0D0F10]"
                    } border-t border-[#FFFFFF14]`}
                  >
                    <td className="px-4 py-3">{u.username || "No name"}</td>
                    <td className="px-4 py-3">{u.name || "N/A"}</td>
                    <td className="px-4 py-3">{u.email || "N/A"}</td>
                    <td className="px-4 py-3">{u.role || "N/A"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* ---- PROJECTS TABLE ---- */}
      <div className="bg-[#0D0F10] rounded-2xl p-6 shadow-md border border-[#FFFFFF14]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold text-white">Projects</h3>
          {projects.length > 8 && (
            <button
              onClick={() => setShowProjectsModal(true)}
              className="px-3 py-1.5 rounded-lg bg-[#034FE3] text-sm text-white font-medium shadow hover:bg-[#0363ff] transition cursor-pointer"
            >
              See More
            </button>
          )}
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm border border-[#FFFFFF14] rounded-lg overflow-hidden">
            <thead className="bg-[#FFFFFF0A] text-gray-300 uppercase text-xs tracking-wider">
              <tr>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Owner</th>
                <th className="px-4 py-3 text-left">Created At</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.slice(0, 8).map((p, idx) => (
                <tr
                  key={p.id}
                  className={`${
                    idx % 2 === 0 ? "bg-[#141718]" : "bg-[#0D0F10]"
                  } border-t border-[#FFFFFF14]`}
                >
                  <td className="px-4 py-3">{p.title || "Untitled"}</td>
                  <td className="px-4 py-3">{p.username || "Guest"}</td>
                  <td className="px-4 py-3">
                    {p.createdAt ? new Date(p.createdAt).toLocaleDateString() : "N/A"}
                  </td>
                  <td className="px-4 py-3">
                     <button
                        onClick={() => deleteProject(p.userId, p.createdAt)}
                        className="text-red-400 hover:underline cursor-pointer"
                      >
                        Delete
                      </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ---- USERS MODAL ---- */}
      {showUsersModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#1A1D1F] p-6 rounded-2xl w-[600px] max-h-[80vh] overflow-y-auto shadow-xl">
            <h3 className="text-xl font-semibold mb-4">All Users</h3>
            <table className="min-w-full border border-gray-700 rounded-lg overflow-hidden">
              <thead className="bg-gray-800 text-gray-300 text-sm">
                <tr>
                  <th className="px-4 py-2 text-left">Username</th>
                  <th className="px-4 py-2 text-left">Email</th>
                  <th className="px-4 py-2 text-left">Role</th>
                  {/* <th className="px-4 py-2 text-center">Action</th> */}
                </tr>
              </thead>
              <tbody>
                {users.map((u, idx) => (
                  <tr
                    key={u.id}
                    className={`${
                      idx % 2 === 0 ? "bg-[#141618]" : "bg-[#1A1D1F]"
                    } border-t border-gray-700`}
                  >
                    <td className="px-4 py-2">{u.username}</td>
                    <td className="px-4 py-2">{u.email}</td>
                    <td className="px-4 py-2">{u.role}</td>
                    {/* <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => deleteUser(u.id)}
                        className="text-red-400 hover:underline cursor-pointer"
                      >
                        Delete
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowUsersModal(false)}
                className="bg-gray-700 px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ---- PROJECTS MODAL ---- */}
      {showProjectsModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-[#1A1D1F] p-6 rounded-2xl w-[700px] max-h-[80vh] overflow-y-auto shadow-xl">
            <h3 className="text-xl font-semibold mb-4">All Projects</h3>
            <table className="min-w-full border border-gray-700 rounded-lg overflow-hidden">
              <thead className="bg-gray-800 text-gray-300 text-sm">
                <tr>
                  <th className="px-4 py-2 text-left">Title</th>
                  <th className="px-4 py-2 text-left">Owner</th>
                  <th className="px-4 py-2 text-left">Created At</th>
                  <th className="px-4 py-2 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p, idx) => (
                  <tr
                    key={p.id}
                    className={`${
                      idx % 2 === 0 ? "bg-[#141618]" : "bg-[#1A1D1F]"
                    } border-t border-gray-700`}
                  >
                    <td className="px-4 py-2">{p.title}</td>
                    <td className="px-4 py-2">{p.username}</td>
                    <td className="px-4 py-2">
                      {p.createdAt
                        ? new Date(p.createdAt).toLocaleDateString()
                        : "N/A"}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <button
                        onClick={() => deleteProject(p.userId, p.createdAt)}
                        className="text-red-400 hover:underline cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowProjectsModal(false)}
                className="bg-gray-700 px-4 py-2 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPage;

import  { useState } from "react";

function GeneralChat() {
  const [messages, setMessages] = useState([
    {
      username: "Eche_codes",
      name: "Big_X 🚀",
      profileImg: "/profile.webp",
      text: "Hey guys! Just finished my Crypto Dashboard project 🚀",
    },
    {
      username: "JaneDoe",
      name: "Jane Doe",
      profileImg: "/profile.webp",
      text: "That’s awesome, Eche! I just deployed my AI Assistant bot 🤖",
    },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;

    // Simulating logged-in dev (replace with real auth later)
    const dev = {
      username: "Eche_codes",
      name: "Big_X 🚀",
      profileImg: "/profile.webp",
    };

    const newMsg = {
      ...dev,
      text: newMessage,
    };

    setMessages([...messages, newMsg]);
    setNewMessage("");
  };

  return (
   <div className="bg-[#141718] sm:h-[98%] h-screen rounded-2xl overflow-hidden flex flex-col">
  {/* Header */}
  <div className="p-4 sm:p-5 border-b border-gray-800/50">
    <h2 className="text-xl sm:text-[28px] font-extrabold">General Chat</h2>
  </div>

  {/* Messages Area */}
  <div className="flex-1 overflow-y-auto p-3 sm:p-5 flex flex-col gap-4">
    {messages.map((msg, idx) => (
      <div key={idx} className="flex gap-2 sm:gap-3 items-start max-w-[90%] sm:max-w-[600px]">
        <img
          src={msg.profileImg}
          alt={msg.name}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-700 object-cover"
        />
        <div className="bg-[#0D0F10] rounded-xl p-2 sm:p-3 max-w-[85%] sm:max-w-[70%] border border-gray-800/50">
          <h4 className="text-xs sm:text-sm font-semibold text-white">{msg.name}</h4>
          <p className="text-gray-300 text-xs sm:text-sm">{msg.text}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Input Box */}
  <div className="p-3 sm:p-4 border-t border-gray-800/50">
    <div className="flex items-center bg-[#1A1D1F] border border-gray-700 rounded-full px-3 sm:px-4 py-2">
      <input
        type="text"
        placeholder="Type your message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        className="flex-1 bg-transparent text-white text-xs sm:text-sm focus:outline-none placeholder-gray-400"
      />
      <button
        onClick={handleSend}
        className="ml-2 bg-blue-600 hover:bg-blue-700 p-2 sm:p-2.5 rounded-full transition flex items-center justify-center cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-4 h-4 sm:w-5 sm:h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 12l16-8-7 8 7 8-16-8z"
          />
        </svg>
      </button>
    </div>
  </div>
</div>

  );
}

export default GeneralChat;

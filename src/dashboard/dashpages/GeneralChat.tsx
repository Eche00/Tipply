import { useEffect, useRef } from "react";
import { chatLogics } from "../../lib/logics/chatLogic";

function GeneralChat() {
  const {messages, newMessage, setNewMessage, handleSend, setSearchTerm, filteredMessages} = chatLogics()

  // Ref for bottom of chat
  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom whenever messages change
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
   <div className="bg-[#141718] sm:h-[98%] h-[85vh] rounded-2xl overflow-hidden flex flex-col">
  {/* Header */}
  <div className="p-4 sm:p-5 border-b border-gray-800/50 flex items-center gap-2 justify-between">
    <h2 className="text-xl sm:text-[28px] font-extrabold">General Chat</h2>
     <input
    type="text"
    placeholder="Search. message.."
    onChange={(e) => setSearchTerm(e.target.value)}
    className="sm:w-[400px] w-fit border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none "
  />
  </div>

  {/* Messages Area */}
  <div className="flex-1 overflow-y-auto p-3 sm:p-5 flex flex-col gap-4">
        {filteredMessages.length > 0 ? (
          filteredMessages.map((msg, idx) => (
            <div
              key={idx}
              className="flex gap-2 sm:gap-3 items-start max-w-[90%] sm:max-w-[600px]"
            >
              <p className="w-[50px] h-[50px] rounded-full bg-black border-2 border-[#008CFF] flex items-center justify-center uppercase">
                {msg?.username.slice(0, 1)}
              </p>
              <div className="flex flex-col gap-1">
                <h4 className="text-xs sm:text-sm font-semibold text-gray-400">
                  @{msg.username}
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm bg-[#0D0F10] rounded-xl p-2 sm:p-3 max-w-[85%] min-w-[200px] sm:max-w-[70%] border border-gray-800/50">
                  {msg.text}
                </p>
                <span className="text-xs text-gray-400 text-end">
                  {msg.createdAt?.toDate
                    ? msg.createdAt.toDate().toLocaleString([], {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })
                    : "sending..."}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-8 text-center">
  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#0D0F10] border border-gray-800/50 mb-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 14h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </div>
  <p className="text-gray-400 text-sm italic">No messages found...</p>
  <span className="text-xs text-gray-500">Start the conversation </span>
</div>

        )}
        <div ref={bottomRef} />
      </div>

  {/* Input Box */}
  <div className="p-3 sm:p-4 border-t border-gray-800/50">
    <div className="flex items-center bg-[#1A1D1F] border border-gray-700 rounded-full px-3 sm:px-4 py-2">
      <input
        type="text"
        placeholder="Type your message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyDown={(e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // prevent newline if textarea
      handleSend();
    }
  }}

        className="flex-1 bg-transparent text-white  sm:text-sm focus:outline-none placeholder-gray-400 text-base"
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

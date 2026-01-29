import React, { useState, useEffect, useRef } from "react";

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: "좋아요.", isMe: false },
    { id: 2, text: "테트트xxxx다", isMe: false },
    { id: 3, text: "이 디자인으로 만들어주세요!", isMe: true },
    { id: 4, text: "완성xxx?", isMe: false },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef();

  useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { id: Date.now(), text: input, isMe: true }]);
    setInput("");
  };

  return (
    <div className="min-h-screen w-full bg-gray-300 flex items-center justify-center p-4 font-sans text-gray-900">
      {/* 핸드폰 프레임 UI */}
      <div className="w-[375px] h-[750px] bg-white rounded-[3.5rem] shadow-2xl border-[12px] border-gray-900 overflow-hidden flex flex-col relative">
        {/* 상단 노치 디자인 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-20"></div>

        {/* 헤더 */}
        <div className="pt-10 pb-4 px-6 border-b flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
              👤
            </div>
            <h1 className="font-bold text-gray-800">Profile Chat</h1>
          </div>
          <div className="text-gray-400 text-xl cursor-pointer">⠿</div>
        </div>

        {/* 채팅 영역 */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F2F2F7] custom-scrollbar"
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${
                msg.isMe ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex shrink-0 items-center justify-center text-xs shadow-sm ${
                  msg.isMe ? "bg-gray-400" : "bg-purple-600 text-white"
                }`}
              >
                {msg.isMe ? "👤" : "💜"}
              </div>
              <div
                className={`max-w-[70%] px-4 py-2 text-sm shadow-sm leading-relaxed ${
                  msg.isMe
                    ? "bg-purple-600 text-white rounded-2xl rounded-br-none"
                    : "bg-white text-gray-800 rounded-2xl rounded-bl-none border border-gray-100"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* 하단 입력창 */}
        <div className="p-4 bg-white border-t pb-10 shrink-0">
          <form onSubmit={handleSend} className="relative">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="메시지를 입력하세요..."
              className="w-full bg-gray-100 rounded-full px-5 py-3 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
            <button
              type="submit"
              className="absolute right-1.5 top-1.5 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white shadow-md hover:bg-purple-700 transition-colors"
            >
              ➤
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaMicrophone, FaPaperPlane} from "react-icons/fa";
import axios from "axios";

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { text: "👋 Hello! How can I assist you today?", sender: "bot", type: "text" },
  ]);
  const [input, setInput] = useState("");
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      router.replace("/chat"); // Ensures an immediate redirect for mobile users
    }
  }, [router]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const userMessage = { text: input, sender: "user", type: "text" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await axios.post("/api/chat", { message: input });
      const botMessage = { text: response.data.reply, sender: "bot", type: "text" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error fetching bot response:", error);
      setMessages((prev) => [...prev, { text: "⚠️ Sorry, I couldn't fetch a response.", sender: "bot", type: "text" }]);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-gray-100 overflow-hidden">
      {/* Chat Messages */}
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-3 w-full">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.sender === "user" ? "justify-end" : ""} w-full`}>
            {msg.type === "text" ? (
              <div
                className={`p-3 rounded-lg max-w-xs ${
                  msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
              >
                {msg.text}
              </div>
            ) : (
              <div
                className={`p-3 rounded-lg max-w-xs flex items-center gap-2 ${
                  msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300"
                }`}
              >
                <FaMicrophone />
                <span>Audio message</span>
              </div>
            )}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input Field */}
      <div className="bg-white p-3 flex items-center border-t w-full fixed bottom-0">
        <input
          type="text"
          className="flex-1 p-3 border rounded-l-full focus:outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          className="bg-blue-500 text-white px-4 py-3 rounded-r-full"
          onClick={sendMessage}
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

export default ChatPage;

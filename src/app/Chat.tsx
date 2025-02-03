"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaRobot, FaUser, FaComments, FaTimes, FaPaperPlane } from "react-icons/fa";

type Message = {
  text: string;
  sender: "user" | "bot";
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { text: "👋 Hello! I'm your shopping assistant. How can I help you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // User message
    const userMessage: Message = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);

    try {
      // Post to your /api/chat endpoint
      const response = await axios.post("/api/chat", { message: input });
      // Bot message
      const botMessage: Message = { text: response.data.reply, sender: "bot" };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error sending message:", error);
      setMessages((prev) => [
        ...prev,
        { text: "⚠️ Sorry, I couldn't fetch a response.", sender: "bot" },
      ]);
    }

    setInput("");
  };

  // Detect mobile screen (simple check)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Open the chatbox or redirect on mobile
  const handleChatOpen = () => {
    if (isMobile) {
      router.push("/chat"); // Adjust path if you have a dedicated mobile page
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={handleChatOpen}
        // z-[9999] ensures the button stays on top of all other elements
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out z-[9999]"
      >
        {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
      </button>

      {/* Chat Box (visible on non-mobile screens) */}
      {!isMobile && isOpen && (
        <div
          // Add a high z-index to keep the chat on top
          className="fixed bottom-20 right-4 md:right-10 w-[95%] max-w-[400px] h-[80vh] md:h-[500px] bg-white shadow-xl rounded-lg border overflow-hidden flex flex-col transition-all duration-300 ease-in-out z-[9999]"
        >
          {/* Header */}
          <div className="bg-blue-500 text-white p-4 font-semibold flex justify-between items-center">
            <span>🧠 AI Shopping Assistant</span>
            <button onClick={() => setIsOpen(false)} className="text-sm">
              <FaTimes size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-100">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 ${
                  msg.sender === "user" ? "justify-end" : ""
                }`}
              >
                {msg.sender === "bot" && (
                  <FaRobot className="text-blue-500 mt-1" aria-hidden="true" />
                )}
                <div
                  className={`p-3 rounded-lg max-w-[75%] md:max-w-[60%] ${
                    msg.sender === "user"
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-gray-200 text-black rounded-bl-none"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === "user" && (
                  <FaUser className="text-gray-600 mt-1" aria-hidden="true" />
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Field */}
          <div className="border-t p-2 bg-white flex items-center">
            <input
              type="text"
              className="flex-1 p-3 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
              aria-label="Type your message"
            />
            <button
              onClick={sendMessage}
              className="bg-blue-500 text-white px-4 rounded-r-lg flex items-center justify-center hover:bg-blue-600 transition-all"
              aria-label="Send message"
            >
              <FaPaperPlane size={18} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

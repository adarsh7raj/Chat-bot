
import { useState, useRef, useEffect } from "react";
import { Avatar } from "../components/avatar";

interface Message {
  content: string;
  sender: "me" | "other";
  timestamp: string;
}

export const MessageBox = function({ name }: { name: string }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageInput, setMessageInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageInput.trim()) return;

    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const newMessage: Message = { content: messageInput, sender: "me", timestamp };
    setMessages([...messages, newMessage]);
    setMessageInput("");
    
    setTimeout(() => {
      const autoReply: Message = { content: "Got it!", sender: "other", timestamp };
      setMessages((prev) => [...prev, autoReply]);
    }, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen overflow-y-hidden min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="w-full max-w-md bg-white shadow-xl rounded-lg overflow-hidden w-[350px] sm:w-[500px] md:w-[700px] h-screen flex flex-col">
        <div className="flex items-center gap-3 bg-blue-500 text-white p-4 text-lg font-semibold">
          <Avatar name={name} />
          {name}
        </div>
        <div className="flex-1 p-4 space-y-2 overflow-y-auto h-96">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={` w-fit max-w-[75%] p-3 rounded-lg shadow-md text-white ${
                msg.sender === "me" ? "bg-green-500 self-end ml-auto" : "bg-gray-400 self-start"
              }`}
            >
              <p>{msg.content}</p>
              <span className="block text-xs mt-1 opacity-75">{msg.timestamp}</span>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <form onSubmit={handleSendMessage} className="flex p-3 bg-gray-100 border-t">
          <input
            type="text"
            className="flex-grow px-3 py-2 rounded-lg border focus:ring-2 focus:ring-blue-400"
            placeholder="Type a message..."
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          />
          <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

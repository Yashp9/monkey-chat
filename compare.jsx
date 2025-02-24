import React from 'react'
import { useState } from 'react';

const App = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Handle message sending logic here
      setMessages((prev) => [...prev, message]); // Simulate adding the message
      setMessage(""); // Clear input
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="w-full max-w-md bg-gray-800 p-4 rounded-lg shadow-md">
        {/* Message box */}
        <div className="h-60 overflow-y-auto border-b border-gray-600 mb-4 p-2">
          {messages.map((msg, index) => (
            <div key={index} className="mb-2 p-2 bg-gray-700 rounded">
              {msg}
            </div>
          ))}
        </div>

        {/* Input and send button */}
        <form onSubmit={sendMessage} className="flex">
          <input
            type="text"
            className="flex-1 p-2 bg-gray-700 text-white border border-gray-600 rounded-l-md outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <button
            type="submit"
            className="bg-blue-500 px-4 py-2 rounded-r-md hover:bg-blue-600"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default App




























































{/* <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-bubble">It was said that you would, destroy the Sith, not join them.</div>
</div>
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-bubble">It was you who would bring balance to the Force</div>
</div>
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-bubble">Not leave it in Darkness</div>
</div> */}
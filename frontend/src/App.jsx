import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

const App = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [room,setRoom] = useState('');

  useEffect(() => {
    socket.on('receive_message', (data) => {
      console.log("message data",data);
      setMessages((prev) => [...prev, { text: data, isOwnMessage: false }]);
    });

    return () => {
      socket.off('receive_message');
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      socket.emit('send_message', message,room);
      console.log("fsend")
      setMessages((prev) => [...prev, { text: message, isOwnMessage: true }]);
      setMessage("");
      setRoom(""); 
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="w-full max-w-md bg-gray-800 p-4 rounded-lg shadow-md">
        {/* Message box */}
        <div className="h-60 overflow-y-auto border-b border-gray-600 mb-4 p-2 chat chat-start">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded chat-bubble ${
                msg.isOwnMessage ? 'bg-blue-500 ml-auto text-white' : 'bg-gray-700 text-black'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input and send button */}
        <form onSubmit={sendMessage} className="flex flex-col">
          <input
            type="text"
            className="flex-1 p-2 mb-2 bg-gray-700 text-white border border-gray-600 rounded-l-md outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
          />
          <input
            type="text"
            className="flex-1 mb-2 p-2 bg-gray-700 text-white border border-gray-600 rounded-l-md outline-none"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            placeholder="Enter the room id"
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
};

export default App;

'use client';
import { useState } from 'react';

const ChatComp = ({ chatHistory, pdfId }) => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState(chatHistory);

  const sendMessage = async () => {
    const res = await fetch(`/api/chat/${pdfId}`, {
      method: 'POST',
      body: JSON.stringify({ message }),
    });

    if (res.ok) {
      const newChat = await res.json();
      setChat(newChat.messages);
      setMessage('');
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-1 overflow-auto p-4 space-y-2">
        {chat.map((msg, index) => (
          <div key={index} className={`p-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-500' : 'bg-gray-700'}`}>
            {msg.message}
          </div>
        ))}
      </div>

      <div className="p-4 flex items-center gap-2">
        <input 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          className="flex-1 p-2 border rounded-lg"
        />
        <button onClick={sendMessage} className="bg-green-500 p-2 rounded-lg">Send</button>
      </div>
    </div>
  );
};

export default ChatComp;

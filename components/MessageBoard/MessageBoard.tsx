"use client";

import { useEffect, useState } from "react";
import { addMessage, getMessages } from "@/lib/messageService";

type Message = {
  id: string;
  content: string;
  sender: string;
  created_at: string;
};

export default function MessageBoard() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [content, setContent] = useState("");
  const [sender, setSender] = useState("");

  // Fetch messages on load
  useEffect(() => {
    async function loadMessages() {
      try {
        const data = await getMessages();
        setMessages(data);
      } catch (error) {
        console.error("Could not load messages:", error);
      }
    }
    loadMessages();
  }, []);

  // Submit a new message
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    try {
      await addMessage({ content, sender });
      setContent("");
      setSender("");

      // Refresh message list
      const data = await getMessages();
      setMessages(data);
    } catch (error) {
      console.error("Could not send message:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-6 p-4 bg-pink-50 rounded-xl shadow-lg">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Your name (optional)"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Write a birthday message!"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-2 border rounded"
          rows={3}
          required
        />
        <button
          type="submit"
          className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition"
        >
          Send Message 🎉
        </button>
      </form>

      <div className="space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className="bg-white p-4 rounded-lg shadow-sm border border-pink-100"
          >
            <p className="text-gray-700">“{msg.content}”</p>
            <p className="text-sm text-gray-500 mt-2">
              — {msg.sender || "Anonymous"},{" "}
              {new Date(msg.created_at).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

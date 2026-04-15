import { useState } from "react";

const Assistant = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleAsk = async () => {
    if (!input) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    setInput("");

    try {
      const res = await fetch("http://localhost:5000/api/ai/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ question: userMsg.text })
      });

      const data = await res.json();

      const botMsg = { role: "bot", text: data.answer };

      setMessages((prev) => [...prev, botMsg]);

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6 text-center">
        AI Travel Assistant 🤖
      </h1>

      {/* CHAT BOX */}
      <div className="bg-white p-4 rounded-lg shadow h-96 overflow-y-auto mb-4">

        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 ${msg.role === "user" ? "text-right" : "text-left"
              }`}
          >
            <span
              className={`inline-block px-4 py-2 rounded-lg ${msg.role === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black"
                }`}
            >
              {msg.text}
            </span>
          </div>
        ))}

      </div>

      {/* INPUT */}
      <div className="flex gap-2">
        <input
          type="text"
          className="border p-2 flex-1 rounded"
          placeholder="Ask anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button
          onClick={handleAsk}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Send
        </button>
      </div>

    </div>
  );
};

export default Assistant;
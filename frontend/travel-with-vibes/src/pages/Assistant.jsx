import { useState } from "react";

const Assistant = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 I am your Travel Assistant. How can I help you?" }
  ]);

  const getBotResponse = (msg) => {
    const text = msg.toLowerCase();

    if (text.includes("hi") || text.includes("hello")) {
      return "Hello 👋 How can I help you with your trip?";
    }
    if (text.includes("book")) {
      return "Sure! ✈️ What do you want to book?\n- Flights\n- Hotels\n- Trains\n- Bus";
    }
    if (text.includes("flight")) {
      return "✈️ Flights:\nDelhi → Goa ₹3500\nMumbai → Dubai ₹12000";
    }
    if (text.includes("hotel")) {
      return "🏨 Hotels:\nGoa ₹2000/night\nManali ₹1500/night";
    }
    if (text.includes("train")) {
      return "🚆 Trains:\nNDLS → Manali ₹1200\nDelhi → Jaipur ₹800";
    }
    if (text.includes("bus")) {
      return "🚌 Bus:\nDelhi → Agra ₹500\nDelhi → Jaipur ₹700";
    }
    if (text.includes("budget")) {
      return "💰 Budget Trips:\nJaipur ₹3000\nRishikesh ₹2500\nGoa ₹4000";
    }
    if (text.includes("call") || text.includes("support")) {
      return "📞 Call: +91 9876543210";
    }
    if (text.includes("thanks")) {
      return "You're welcome 😊";
    }

    return "🤖 I can help with trips, booking, and budget!";
  };

  const handleAsk = () => {
    if (!input) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);

    const botReply = getBotResponse(input);

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: botReply }]);
    }, 500);

    setInput("");
  };

  return (
    <div className="container mx-auto p-6">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        AI Travel Assistant 🤖
      </h1>

      {/* CHAT BOX */}
      <div className="bg-white p-4 rounded-lg shadow h-96 overflow-y-auto mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 ${msg.role === "user" ? "text-right" : "text-left"}`}
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
      <div className="flex gap-2 mb-8">
        <input
          type="text"
          className="border p-2 flex-1 rounded"
          placeholder="Ask about trips..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAsk()}
        />
        <button
          onClick={handleAsk}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Send
        </button>
      </div>

      {/* 🌍 FLAG CAROUSEL */}
      <div className="overflow-hidden bg-white py-4 rounded-lg shadow">
        <div className="flex animate-scroll gap-10">
          {["in", "us", "gb", "fr", "de", "jp", "au", "ca", "ae",
            "in", "us", "gb", "fr", "de", "jp", "au", "ca", "ae"
          ].map((code, i) => (
            <img
              key={i}
              src={`https://flagcdn.com/w80/${code}.png`}
              className="h-12"
            />
          ))}
        </div>
      </div>

    </div>
  );
};

export default Assistant;
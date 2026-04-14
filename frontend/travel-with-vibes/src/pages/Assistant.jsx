import { useState } from "react";

const Assistant = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = () => {
    if (!input) return;

    const reply = `Tips for "${input}":
1. Travel in off-season
2. Book early
3. Check weather`;

    setResponse(reply);
  };

  return (
    <div className="p-10 text-center">

      <h1 className="text-3xl font-bold mb-6">AI Assistant 🤖</h1>

      <textarea
        className="border p-3 w-80"
        rows="4"
        placeholder="Ask something..."
        onChange={(e) => setInput(e.target.value)}
      />

      <br />

      <button
        onClick={handleAsk}
        className="bg-blue-600 text-white px-6 py-2 mt-4 rounded"
      >
        Ask
      </button>

      <p className="mt-6 whitespace-pre-line">{response}</p>

    </div>
  );
};

export default Assistant;
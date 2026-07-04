import { useState } from "react";
import { askGemini } from "../services/gemini";

function AIChat() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(
    "🌊 Welcome to OceanMind AI! Ask me anything about oceans, ARGO floats, salinity, temperature, marine ecosystems, or climate."
  );
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question.trim()) return;

    const oceanKeywords = [
      "ocean",
      "sea",
      "argo",
      "float",
      "marine",
      "salinity",
      "temperature",
      "climate",
      "current",
      "currents",
      "wave",
      "waves",
      "moes",
      "bay",
      "gulf",
      "coast",
      "water",
      "tsunami",
      "coral",
      "fish",
      "ecosystem",
      "oceanography",
      "seawater",
      "depth",
      "pressure",
      "buoy",
      "indian ocean",
      "pacific",
      "atlantic",
      "antarctic",
      "arabian sea",
      "bay of bengal"
    ];

    const userInput = question.toLowerCase();

    const isOceanQuestion = oceanKeywords.some((word) =>
      userInput.includes(word)
    );

    if (!isOceanQuestion) {
      setAnswer(
        "🌊 I'm OceanMind AI, developed for ARGO Ocean Data Discovery and Visualization.\n\nI specialize in:\n\n• Ocean Science\n• ARGO Floats\n• Marine Ecosystems\n• Ocean Temperature\n• Ocean Salinity\n• Climate & Oceans\n• MOES Ocean Data\n\nPlease ask me an ocean-related question."
      );
      return;
    }

    setLoading(true);

    try {
      const result = await askGemini(question);
      setAnswer(result);
    } catch (error) {
      setAnswer("⚠️ Unable to get a response. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-slate-800 rounded-2xl p-6 mt-8 shadow-lg">

      <h2 className="text-3xl font-bold text-cyan-400 mb-6">
        🤖 OceanMind AI Assistant
      </h2>

      <textarea
        rows="4"
        className="w-full p-4 rounded-xl bg-slate-900 text-white border border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        placeholder="Ask something about oceans..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        onClick={handleAsk}
        className="mt-5 bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold transition"
      >
        {loading ? "Thinking..." : "Ask OceanMind AI"}
      </button>

      <div className="mt-8 bg-slate-700 rounded-xl p-5 border border-cyan-500">
        <p className="text-white whitespace-pre-wrap leading-7">
          {answer}
        </p>
      </div>

    </div>
  );
}

export default AIChat;
import Navbar from "../components/Navbar";

function Chat() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="p-8">
        <h1 className="text-5xl font-bold text-cyan-400 mb-6">
          🤖 OceanMind AI Assistant
        </h1>

        <div className="bg-slate-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-2xl font-semibold text-cyan-400 mb-4">
            AI Assistant
          </h2>

          <p className="text-gray-300 leading-8">
            The AI Assistant is temporarily unavailable in the GitHub Pages
            version of this project.
          </p>

          <p className="mt-4 text-gray-300">
            OceanMind AI is designed to answer questions about:
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2">
            <li>ARGO Floats</li>
            <li>Ocean Temperature</li>
            <li>Ocean Salinity</li>
            <li>Marine Ecosystems</li>
            <li>Climate Change</li>
            <li>Ocean Data Visualization</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Chat;
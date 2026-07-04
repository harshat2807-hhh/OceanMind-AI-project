import Navbar from "../components/Navbar";
import AIChat from "../components/AIChat";

function Chat() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="p-8">
        <h1 className="text-5xl font-bold text-cyan-400 mb-6">
          AI Ocean Assistant
        </h1>

        <AIChat />
      </div>
    </div>
  );
}

export default Chat;
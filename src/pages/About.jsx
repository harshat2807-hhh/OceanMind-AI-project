import Navbar from "../components/Navbar";

function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-8 py-16">
        <h1 className="text-5xl font-bold text-cyan-400 mb-6">
          🌊 About OceanMind AI
        </h1>

        <p className="text-lg text-gray-300 leading-8">
          OceanMind AI is an AI-powered web application designed to explore and
          visualize ARGO ocean data. It helps users understand ocean
          observations through interactive maps, data visualization, and an
          intelligent AI chatbot. The platform aims to make ocean data more
          accessible for students, researchers, and ocean enthusiasts.
        </p>
      </div>
    </div>
  );
}

export default About;
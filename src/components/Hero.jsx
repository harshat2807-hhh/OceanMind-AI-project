import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="text-center mt-24 px-6">
      <h2 className="text-5xl font-bold">
        AI for Ocean Data Discovery
      </h2>

      <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
        Explore ARGO ocean data using AI-powered conversations,
        interactive maps, and beautiful visualizations.
      </p>

      <div className="mt-10 space-x-4">
        <Link
          to="/dashboard"
          className="inline-block px-8 py-4 bg-cyan-500 rounded-xl hover:bg-cyan-600 transition duration-300"
        >
          🚀 Get Started
        </Link>

        <Link
          to="/ocean-data"
          className="inline-block px-8 py-4 border border-cyan-400 rounded-xl hover:bg-cyan-400 hover:text-black transition duration-300"
        >
          📊 Explore Data
        </Link>
      </div>
    </section>
  );
}

export default Hero;
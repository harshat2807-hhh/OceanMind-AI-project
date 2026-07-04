function Features() {
  const features = [
    {
      icon: "🤖",
      title: "AI Chat Assistant",
      description: "Ask ocean-related questions in natural language.",
    },
    {
      icon: "🌊",
      title: "ARGO Ocean Data",
      description: "Access temperature, salinity and ocean observations.",
    },
    {
      icon: "🗺️",
      title: "Interactive Maps",
      description: "Visualize ARGO float locations around the world.",
    },
    {
      icon: "📊",
      title: "Data Visualization",
      description: "Understand trends with interactive charts and graphs.",
    },
  ];

  return (
    <section className="py-20 px-8">
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        Why OceanMind AI?
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300"
          >
            <div className="text-5xl">{feature.icon}</div>

            <h3 className="text-2xl font-semibold mt-4">
              {feature.title}
            </h3>

            <p className="text-gray-300 mt-3">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
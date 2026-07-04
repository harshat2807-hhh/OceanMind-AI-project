function StatCards() {
  const stats = [
    {
      title: "ARGO Floats",
      value: "3,900+",
      icon: "🌊",
    },
    {
      title: "Ocean Regions",
      value: "60+",
      icon: "🌍",
    },
    {
      title: "Temperature",
      value: "26.4°C",
      icon: "🌡️",
    },
    {
      title: "Salinity",
      value: "35 PSU",
      icon: "🧂",
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-slate-800 rounded-2xl p-6 shadow-lg hover:scale-105 transition duration-300"
        >
          <div className="text-5xl">{item.icon}</div>

          <h2 className="text-xl mt-4 font-semibold">
            {item.title}
          </h2>

          <p className="text-3xl font-bold text-cyan-400 mt-3">
            {item.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default StatCards;
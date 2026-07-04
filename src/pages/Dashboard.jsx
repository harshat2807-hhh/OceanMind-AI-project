import Navbar from "../components/Navbar";
import StatCards from "../components/StatCards";
import MapView from "../components/MapView";
import TemperatureChart from "../components/TemperatureChart";
import SalinityChart from "../components/SalinityChart";

const sampleData = [
  {
    platform: "ARGO-101",
    lat: 13.08,
    lng: 80.27,
    temp: 29.5,
    salinity: 34.5,
  },
  {
    platform: "ARGO-102",
    lat: 15.91,
    lng: 73.82,
    temp: 28.1,
    salinity: 35.1,
  },
  {
    platform: "ARGO-103",
    lat: 11.74,
    lng: 92.65,
    temp: 28.8,
    salinity: 34.3,
  },
];

function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="p-8">
        <h1 className="text-5xl font-bold text-cyan-400 mb-3">
          🌊 Ocean Dashboard
        </h1>

        <p className="text-gray-300 mb-8">
          Explore ARGO ocean observations, interactive maps and ocean analytics.
        </p>

        <StatCards />

        <div className="mt-10">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            🌍 ARGO Float Locations
          </h2>
          <MapView data={sampleData} />
        </div>

        <div className="mt-10">
          <TemperatureChart />
        </div>

        <div className="mt-10">
          <SalinityChart />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
import { useState } from "react";
import Navbar from "../components/Navbar";
import { fetchArgoData } from "../services/argoService";

function OceanData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    setLoading(true);

    const result = await fetchArgoData();

    console.log("ARGO DATA:", result);

    if (result && result.table && result.table.rows) {
      setData(result.table.rows);
    } else {
      console.log("No valid data received");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto p-8">

        <h1 className="text-5xl font-bold text-cyan-400">
          🌊 Ocean Data Explorer
        </h1>

        <button
          onClick={loadData}
          className="mt-6 bg-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-600"
        >
          {loading ? "Loading..." : "Load ARGO Data"}
        </button>

        <div className="overflow-x-auto mt-8">

          <table className="w-full text-center">

            <thead className="bg-cyan-600">
              <tr>
                <th className="p-3">Platform</th>
                <th className="p-3">Latitude</th>
                <th className="p-3">Longitude</th>
                <th className="p-3">Temperature (°C)</th>
                <th className="p-3">Salinity (PSU)</th>
              </tr>
            </thead>

            <tbody>
              {data.length === 0 ? (
                <tr>
                  <td colSpan="5" className="p-4 text-gray-400">
                    No data loaded
                  </td>
                </tr>
              ) : (
                data.map((row, index) => (
                  <tr
                    key={index}
                    className="bg-slate-800 border-b border-slate-700 hover:bg-slate-700"
                  >
                    <td className="p-3">{row[0]}</td>
                    <td className="p-3">{row[1]}</td>
                    <td className="p-3">{row[2]}</td>
                    <td className="p-3">{row[3]}</td>
                    <td className="p-3">{row[4]}</td>
                  </tr>
                ))
              )}
            </tbody>

          </table>

        </div>
      </div>
    </div>
  );
}

export default OceanData;
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

function TemperatureChart() {
  const data = {
    labels: [
      "Bay of Bengal",
      "Arabian Sea",
      "Indian Ocean",
      "Chennai Coast",
      "Andaman Sea",
    ],
    datasets: [
      {
        label: "Temperature (°C)",
        data: [29.5, 28.1, 27.4, 30.2, 28.8],
        borderColor: "#00E5FF",
        backgroundColor: "rgba(0,229,255,0.2)",
        pointBackgroundColor: "#00E5FF",
        pointBorderColor: "#ffffff",
        pointRadius: 5,
        borderWidth: 3,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
          font: {
            size: 14,
          },
        },
      },
      title: {
        display: true,
        text: "🌡️ Ocean Temperature Analysis",
        color: "#00E5FF",
        font: {
          size: 20,
          weight: "bold",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "rgba(255,255,255,0.15)",
        },
      },
      y: {
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "rgba(255,255,255,0.15)",
        },
      },
    },
  };

  return (
    <div className="bg-slate-800 rounded-2xl shadow-lg p-6 mt-10 h-[400px]">
      <Line data={data} options={options} />
    </div>
  );
}

export default TemperatureChart;
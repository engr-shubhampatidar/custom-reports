/* eslint-disable react/prop-types */

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ReportChart = ({ data }) => {
  const chartData = {
    labels: data.map((d) => d.metric),
    datasets: [
      {
        label: "Metric Values",
        data: data.map((d) => d.value),
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default ReportChart;

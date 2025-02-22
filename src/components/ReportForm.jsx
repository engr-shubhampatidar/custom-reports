import { useState } from "react";
import { metrics } from "../data/metrics"; // List of available metrics
import ReportChart from "./ReportChart";
import { CSVLink } from "react-csv";

const ReportForm = () => {
  const [selectedMetrics, setSelectedMetrics] = useState([]);
  const [reportData, setReportData] = useState([]);

  const handleMetricChange = (metric) => {
    setSelectedMetrics((prev) =>
      prev.includes(metric) ? prev.filter((m) => m !== metric) : [...prev, metric]
    );
  };

  const generateReport = () => {
    const data = selectedMetrics.map((metric) => ({
      metric,
      value: Math.floor(Math.random() * 100), // Dummy Data
    }));
    setReportData(data);
  };



  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Generate Custom Report</h2>
      <div className="grid grid-cols-2 gap-2 mb-4">
        {metrics.map((metric) => (
          <label key={metric} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="form-checkbox"
              checked={selectedMetrics.includes(metric)}
              onChange={() => handleMetricChange(metric)}
            />
            <span className="decoration-black" >{metric}</span>
          </label>
        ))}
      </div>

      <button onClick={generateReport} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
        Generate Report
      </button>

      {reportData.length > 0 && (
        <div className="mt-6">
          <ReportChart data={reportData} />
          <CSVLink data={reportData} filename="report.csv" className="mt-4 block text-blue-500">
            Download CSV
          </CSVLink>
        </div>
      )}
    </div>
  );
};

export default ReportForm;

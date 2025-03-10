import React, { useEffect, useState } from "react";
import "./MutualFundAnalysis.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";
import { getMutualFundDetails } from "../../api/mutualFundApi";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

const MutualFundAnalysis = ({ schemeCode, onClose }) => {
  const [fundData, setFundData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFundDetails = async () => {
      try {
        const data = await getMutualFundDetails(schemeCode);
        setFundData(data);
      } catch (error) {
        console.error("Error fetching mutual fund details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (schemeCode) {
      fetchFundDetails();
    }
  }, [schemeCode]);

  const generateChartData = () => {
    if (!fundData?.data) return null;
    const slicedData = fundData.data.slice(0, 30).reverse();
    return {
      labels: slicedData.map(entry => entry.date),
      datasets: [
        {
          label: "NAV Trend",
          data: slicedData.map(entry => parseFloat(entry.nav)),
          borderColor: "#3b82f6",
          fill: false,
          tension: 0.3,
          pointRadius: 3,
        }
      ]
    };
  };

  return (
    <div className="mutual-fund-analysis-container">
      <div className="header">
        <h2 className="title">Fund Analysis</h2>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
      {loading ? (
        <p>Loading fund data...</p>
      ) : fundData ? (
        <div className="fund-details">
          <h3 className="fund-name">{fundData.meta.scheme_name}</h3>
          <p><strong>Fund House:</strong> {fundData.meta.fund_house}</p>
          <p><strong>Category:</strong> {fundData.meta.scheme_category}</p>
          <p><strong>Type:</strong> {fundData.meta.scheme_type}</p>
          <p><strong>Launch Date:</strong> {fundData.meta.launch_date}</p>
          <p><strong>Net Asset Value (NAV):</strong> {fundData.data[0]?.nav}</p>

          {generateChartData() && (
            <div className="chart-wrapper">
              <h4>NAV Trend (Last Available Data)</h4>
              <Line data={generateChartData()} options={{ responsive: true, plugins: { legend: { display: false } } }} />
            </div>
          )}
        </div>
      ) : (
        <p>Unable to fetch fund details.</p>
      )}
    </div>
  );
};

export default MutualFundAnalysis;
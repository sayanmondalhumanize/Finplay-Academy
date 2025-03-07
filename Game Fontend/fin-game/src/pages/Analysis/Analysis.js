import React, { useState } from "react";
import InvestmentAnalysis from "./InvestmentAnalysis";
import "./Analysis.css";

const riskProfiles = ["Low", "Moderate", "High"];

const Analysis = () => {
  const [userAge, setUserAge] = useState("18");
  const [income, setIncome] = useState("50000");
  const [riskProfile, setRiskProfile] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!userAge || !income || !riskProfile) {
      setError("*All fields are required");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="analysis-container">
      {!submitted ? (
        <div className="user-input">
          <h2>Personalized Investment Analysis</h2>
          {error && <p className="error-message">{error}</p>}
          <div className="user-form">
            <label className="age-input">
              Enter Your Age:
              <input
                type="number"
                value={userAge}
                onChange={(e) => setUserAge(e.target.value)}
                min="18"
                required
              />
            </label>

            <label className="income-input">
              Enter Your Annual Income:
              <input
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                min="0"
                required
              />
            </label>

            <label className="risk-profile-input">
              Select Your Risk Profile:
              <select onChange={(e) => setRiskProfile(e.target.value)}>
                <option value="">Choose...</option>
                {riskProfiles.map((profile) => (
                  <option key={profile} value={profile}>{profile}</option>
                ))}
              </select>
            </label>
          </div>
          <div className="submit-container">
            <button className="submit-btn" onClick={handleSubmit}>Get Analysis</button>
          </div>
        </div>
      ) : (
        <InvestmentAnalysis age={userAge} income={income} riskProfile={riskProfile} />
      )}
    </div>
  );
};

export default Analysis;

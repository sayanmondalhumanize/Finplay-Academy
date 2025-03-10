import React, { useState, useEffect } from "react";
import { searchMutualFunds } from "../../api/mutualFundApi";
import MutualFundAnalysis from "./MutualFundAnalysis";
import "./MutualFundSuggesation.css";

const MutualFundSuggesation = ({ defaultQuery = "", onClose }) => {
  const [query, setQuery] = useState(defaultQuery);
  const [results, setResults] = useState([]);
  const [selectedSchemeCode, setSelectedSchemeCode] = useState(null);

  useEffect(() => {
    if (defaultQuery) {
      const filteredResults = searchMutualFunds(defaultQuery);
      setResults(filteredResults);
    }
  }, [defaultQuery]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        if (selectedSchemeCode) {
          setSelectedSchemeCode(null);
        } else {
          onClose();
        }
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose, selectedSchemeCode]);

  const handleSearch = () => {
    if (query.trim() === "") return;
    const filteredResults = searchMutualFunds(query);
    setResults(filteredResults);
  };

  return (
    <div className="mutual-fund-suggestion-container popup-modal">
      <div className="header">
        <h2>Suggested Mutual Funds</h2>
        <button className="close-btn" onClick={onClose}>✕</button>
      </div>
      <div className="search-box">
        <input
          type="text"
          placeholder="Enter mutual fund name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div className="results">
        {results.length > 0 ? (
          <ul>
            {results.map((fund, index) => (
              <li key={index} className="fund-card" onClick={() => setSelectedSchemeCode(fund.schemeCode)}>
                <p><strong>Scheme Code:</strong> {fund.schemeCode}</p>
                <p><strong>Scheme Name:</strong> {fund.schemeName}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="no-results">No results found.</p>
        )}
      </div>

      {selectedSchemeCode && (
        <div className="popup-modal nested-modal">
          <MutualFundAnalysis
            schemeCode={selectedSchemeCode}
            onClose={() => setSelectedSchemeCode(null)}
          />
        </div>
      )}
    </div>
  );
};

export default MutualFundSuggesation;
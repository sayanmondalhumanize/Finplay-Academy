import React, { useState, useEffect } from "react";
import { searchMutualFunds } from "../../api/mutualFundApi";
import "./FundDetails.css";

const FundDetails = ({ fundName, onClose }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState(fundName);

    useEffect(() => {
        setSearchResults(searchMutualFunds(fundName));
    }, [fundName]);

    const handleSearch = () => {
        setSearchResults(searchMutualFunds(query));
    };

    return (
        <div className="fund-details-container">
            <div className="fund-details-header">
                <h3>Search Results for: {fundName}</h3>
                <button onClick={onClose}>×</button>
            </div>
            <div className="search-box">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <div className="results">
                {searchResults.length > 0 ? (
                    <ul>
                        {searchResults.map((fund, index) => (
                            <li key={index}>{fund.schemeCode}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No matching funds found.</p>
                )}
            </div>
        </div>
    );
};

export default FundDetails;

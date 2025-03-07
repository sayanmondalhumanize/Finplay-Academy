import React, { useState, useEffect } from "react";
import "./InvestmentAnalysis.css";

export default function InvestmentAnalysis({ age, income, riskProfile }) {
    const [investmentRecommendations, setInvestmentRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getInvestmentRecommendations();
    }, []);
    
    const getInvestmentRecommendations = () => {
        setTimeout(() => {
            const recommendations = {
                Low: [
                    { type: "Bonds", description: "Invest in government bonds for stable returns." },
                    { type: "Fixed Deposits", description: "Low-risk fixed deposits with guaranteed returns." }
                ],
                Moderate: [
                    { type: "Index Funds", description: "Diversify your portfolio with low-cost index funds." },
                    { type: "ETFs", description: "Exchange-Traded Funds provide a balanced approach to investing." }
                ],
                High: [
                    { type: "Stocks", description: "Invest in technology stocks for high growth potential." },
                    { type: "Cryptocurrency", description: "High-risk, high-reward digital assets for long-term growth." }
                ]
            };

            let adjustedRecommendations = recommendations[riskProfile] || [];

            if (income < 30000) {
                adjustedRecommendations = adjustedRecommendations.filter(rec => rec.type !== "Stocks" && rec.type !== "Cryptocurrency");
            } else if (income > 100000) {
                adjustedRecommendations.push({ type: "Real Estate", description: "Consider investing in real estate for long-term growth." });
            }

            setInvestmentRecommendations(adjustedRecommendations);
            setLoading(false);
        }, 1000);
    };
    
    return (
        <div className="analysis-results">
            <h2>Investment Recommendations</h2>
            <p>
                Based on your age ({age}), income ({income}), and risk profile ({riskProfile}), here are your recommended investments:
            </p>
            {loading ? (
                <p>Loading recommendations...</p>
            ) : (
                <div className="recommendations">
                    <ul>
                        {investmentRecommendations.map((recommendation, index) => (
                            <li key={index}>
                                <strong>{recommendation.type}:</strong> {recommendation.description}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

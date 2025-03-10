import React, { useState, useEffect } from "react";
import "./InvestmentAnalysis.css";
import { getInvestmentAdvice } from "../../api/financeApi";
import MutualFundSuggesation from "./MutualFundSuggesation";

export default function InvestmentAnalysis({ age, income, riskProfile }) {
    const [investmentRecommendations, setInvestmentRecommendations] = useState(null);
    const [selectedFund, setSelectedFund] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInvestmentAdvice = async () => {
            console.log("Calling financial API with:", { age, income, riskProfile });
            let data = await getInvestmentAdvice(age, income, riskProfile);

            if (typeof data === "string") {
                try {
                    data = JSON.parse(data);
                } catch (error) {
                    console.error("Error parsing JSON response:", error);
                    setLoading(false);
                    return;
                }
            }

            if (data) {
                console.log("Received investment advice:", data);
                setInvestmentRecommendations(data);
            }
            setLoading(false);
        };

        fetchInvestmentAdvice();
    }, [age, income, riskProfile]);

    return (
        <div className="analysis-container">
            <div className="card">
                <h2>Investment Recommendations</h2>
                <p>
                    Based on your age ({age}), income ({income}), and risk profile ({riskProfile}), here are your recommended investments:
                </p>
                {loading ? (
                    <p className="loading">Loading recommendations...</p>
                ) : (
                    <div className="recommendations">
                        {investmentRecommendations ? (
                            <ul>
                                {investmentRecommendations.investment_recommendation?.asset_allocation &&
                                    Object.entries(investmentRecommendations.investment_recommendation.asset_allocation).map(([key, value], index) => (
                                        <li key={index}>
                                            <strong>{key}:</strong> {value.includes('%') ? value : `${value}%`}
                                        </li>
                                    ))}

                                {investmentRecommendations.investment_recommendation?.recommended_real_estate_options?.length > 0 && (
                                    <li><strong>Real Estate Options:</strong> {investmentRecommendations.investment_recommendation.recommended_real_estate_options.join(", ")}</li>
                                )}
                                {investmentRecommendations.investment_recommendation?.crypto_advice && (
                                    <li><strong>Crypto Advice:</strong> {investmentRecommendations.investment_recommendation.crypto_advice}</li>
                                )}
                                {investmentRecommendations.investment_recommendation?.long_term_goals && (
                                    <li><strong>Long Term Goals:</strong> {investmentRecommendations.investment_recommendation.long_term_goals}</li>
                                )}
                                {investmentRecommendations.investment_recommendation?.short_term_goals && (
                                    <li><strong>Short Term Goals:</strong> {investmentRecommendations.investment_recommendation.short_term_goals}</li>
                                )}
                                {investmentRecommendations.investment_recommendation?.risk_mitigation_strategies && (
                                    <li><strong>Risk Mitigation Strategies:</strong> {investmentRecommendations.investment_recommendation.risk_mitigation_strategies}</li>
                                )}

                                {investmentRecommendations.investment_recommendation?.recommended_funds?.length > 0 && (
                                    <>
                                        <h3>{investmentRecommendations.investment_recommendation.recommended_funds.length > 1 ? "Recommended Funds" : "Recommended Fund"}:</h3>
                                        <ul>
                                            {investmentRecommendations.investment_recommendation.recommended_funds.map((fund, index) => (
                                                <li key={index} className="clickable">
                                                    <span onClick={() => setSelectedFund(fund)}>{fund}</span>
                                                    {selectedFund === fund && (
                                                        <div className="popup">
                                                            <MutualFundSuggesation
                                                                defaultQuery={fund}
                                                                onClose={() => setSelectedFund(null)}
                                                            />
                                                        </div>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </ul>
                        ) : (
                            <p className="no-data">No recommendations available.</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

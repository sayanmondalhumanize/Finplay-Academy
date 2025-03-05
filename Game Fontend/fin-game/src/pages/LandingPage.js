import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleCTAClick = () => {
    // Navigate to the game page
    navigate("/game");
  };

  const handleLearnMoreClick = () => {
    // Navigate to the overview page
    navigate("/overview");
  };

  return (
    <div className="landing-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="game-title">Financial Mastery Quest</h1>
          <p className="tagline">Master Financial Literacy Through Play!</p>
          <button className="cta-button" onClick={handleCTAClick}>
            Play Now
          </button>
          <button className="learn-more-button" onClick={handleLearnMoreClick}>
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
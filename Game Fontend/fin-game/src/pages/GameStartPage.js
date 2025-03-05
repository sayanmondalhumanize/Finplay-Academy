import React, { useState } from "react";
import "./GameStartPage.css";
import backgroundImage from "../assets/game-baceground.webp";
import eggMascot from "../assets/eggMascot.jpg";
import { useNavigate } from "react-router-dom";

const GameStartPage = () => {
  const [showTransition, setShowTransition] = useState(false);
  const [showEgg, setShowEgg] = useState(false);
  const [showDialogue, setShowDialogue] = useState(false);
  const navigate = useNavigate();

  const handleStartJourney = () => {
    setShowTransition(true);
    setTimeout(() => {
      setShowEgg(true);
      setTimeout(() => {
        setShowDialogue(true);
        setTimeout(() => {
          navigate("/dashboard");
        }, 5000); // 5 seconds to show dialogue before redirecting
      }, 1500);
    }, 1000); // 1 second for transition effect
  };

  return (
    <div className="game-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {!showTransition && (
        <>
          <h1 className="game-title">Wealth Quest: The Financial Odyssey</h1>
          <p className="game-description">
            Embark on an exhilarating journey through the world of finance. Strategize, invest, and navigate economic challenges as you build your empire. 
            Make wise financial decisions, conquer the markets, and prove your mastery in the ultimate test of financial acumen.
          </p>
          <div className="button-group">
            <div className="custom-button play-button" onClick={handleStartJourney}>Start Your Journey</div>
            <div className="custom-button team-button">Manage Portfolio</div>
          </div>
        </>
      )}
      
      {showTransition && <div className="whiteout"></div>}
      
      {showEgg && (
        <div className="egg-container">
          <img src={eggMascot} alt="Egg Mascot" className="egg-mascot small-egg" style={{ width: "100px", height: "100px" }}  />
          {showDialogue && (
            <div className="dialogue-box">Welcome to Wealth Quest! Let's start your financial journey.</div>
          )}
        </div>
      )}
    </div>
  );
};

export default GameStartPage;

// App.js
import React , { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import LandingPage from "./pages/LandingPage";
import OverviewPage from "./pages/OverviewPage";
import GameStartPage from "./pages/GameStartPage"; 
import Dashboard from "./pages/Dashboard";
import FinancialQuiz from "./pages/FinancialQuiz/FinancialQuiz";
import ExternalLinkPage from "./pages/ExternalLink/ExternalLinkPage";
import LeaderBoardPage from "./pages/LeaderBoard/LeaderBoardPage";
import AnalysisPage from "./pages/Analysis/AnalysisPage";

function App() {

  useEffect(() => {
    fetch("http://localhost:5000/fetch-mutual-funds")
      .then(response => response.json())
      .then(data => console.log("Fetched Mutual Funds Data:", data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/overview" element={<OverviewPage />} />
        <Route path="/game" element={<GameStartPage />} />
        <Route path="/financialQuiz" element={<FinancialQuiz />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/externalLink" element={<ExternalLinkPage />} />
        <Route path="/leaderBoard" element={<LeaderBoardPage />} />
        <Route path="/analysis" element= {<AnalysisPage />} />

      </Routes>
    </Router>
  );
}

export default App;

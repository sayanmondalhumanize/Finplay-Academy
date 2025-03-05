import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import "./LeaderboardPage.css";
import LeaderBoard from "./LeaderBoard";

function LeaderboardPage() {
    
    return (
        <div className="App">
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className="financialQuiz">
                    <LeaderBoard />
                </div>
            </div>
        </div>
    );
}

export default LeaderboardPage;

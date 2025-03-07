import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import Analysis from "./Analysis";

function AnalysisPage() {
    
    return (
        <div className="App">
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className="financialQuiz">
                    <Analysis />
                </div>
            </div>
        </div>
    );
}

export default AnalysisPage;

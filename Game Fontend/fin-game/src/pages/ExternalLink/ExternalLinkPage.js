import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import "./ExternalLinkPage.css";
import ExternalLink from "./ExternalLink";

function ExternalLinkPage() {
    
    return (
        <div className="App">
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className="financialQuiz">
                    <ExternalLink />
                </div>
            </div>
        </div>
    );
}

export default ExternalLinkPage;

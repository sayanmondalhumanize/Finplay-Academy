import React, { useEffect, useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/sidebar";
import "./FinancialQuiz.css";
import QuizPage from "./QuizPage";

function FinancialQuiz() {
    const [showQuiz, setShowQuiz] = useState(false);
    const [timer, setTimer] = useState(30); // 1 minute timer

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer === 1) {
                    setShowQuiz(true);
                    clearInterval(countdown);
                    return 0;
                }
                return prevTimer - 1;
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    const startQuizImmediately = () => {
        setShowQuiz(true);
        setTimer(0);
    };

    return (
        <div className="App">
            <Topbar />
            <div className="container">
                <Sidebar />
                <div className="financialQuiz">
                    {showQuiz ? (
                        <QuizPage />
                    ) : (
                        <div className="quizIntro-container">
                            <p>Quiz will start in {timer} seconds. Please read the rules.</p>
                            <button onClick={startQuizImmediately} className="start-button">Start Quiz Now</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FinancialQuiz;

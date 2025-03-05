import React, { useState, useEffect } from "react";
import { quizData } from "../../dummyData";
import "./QuizPage.css";

export default function QuizPage() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [timer, setTimer] = useState(30);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer === 1) {
                    handleNext();
                    return 30;
                }
                return prevTimer - 1;
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [questionIndex]);

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const handleNext = () => {
        if (selectedOption) {
            if (selectedOption === quizData[questionIndex].correctAnswer) {
                setScore(score + 1);
            }
        }
        if (questionIndex < quizData.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setSelectedOption(null);
            setTimer(30);
        } else {
            setQuizCompleted(true);
        }
    };

    const handlePrevious = () => {
        if (questionIndex > 0) {
            setQuestionIndex(questionIndex - 1);
            setSelectedOption(null);
            setTimer(30);
        }
    };

    return (
        <div className="quiz-container">
            <div className="progress-bar">
                {[...Array(quizData.length)].map((_, i) => (
                    <div key={i} style={{ background: i <= questionIndex ? "#007BFF" : "#E0E0E0" }}></div>
                ))}
            </div>
            
            {quizCompleted ? (
                <div className="quiz-result">
                    <h1>Quiz Completed!</h1>
                    <p>Your Score: {score} / {quizData.length}</p>
                    <button onClick={() => window.location.reload()} className="restart-button">Restart Quiz</button>
                </div>
            ) : (
                <>
                    <div className="quiz-header">
                        <span onClick={handlePrevious} className="previous-button">← Previous</span>
                        <span>Question {questionIndex + 1} / {quizData.length}</span>
                    </div>
                    
                    <div className="quiz-content">
                        <h1 className="question">{quizData[questionIndex].question}</h1>
                        <p className="timer">Time left: {timer}s</p>
                        <div className="options">
                            {Object.entries(quizData[questionIndex].options).map(([key, value]) => (
                                <label key={key} className={selectedOption === key ? 'selected' : ''}>
                                    <input 
                                        type="radio" 
                                        name={`quiz-${questionIndex}`} 
                                        checked={selectedOption === key}
                                        onChange={() => handleOptionChange(key)} 
                                    />
                                    {key}. {value}
                                </label>
                            ))}
                        </div>
                        <div className="nav-buttons">
                            <button onClick={handleNext} className="next-button">
                                {questionIndex < quizData.length - 1 ? "Next Question →" : "Submit Quiz"}
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

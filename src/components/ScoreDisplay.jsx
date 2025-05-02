import React from 'react';

const ScoreDisplay = ({ score, totalQuestions }) => {
    const percentageScore = ((score / totalQuestions) * 100).toFixed(2);

    return (
        <div className="score-display">
            <h2>Your Score</h2>
            <p>Correct Answers: {score} out of {totalQuestions}</p>
            <p>Percentage: {percentageScore}%</p>
        </div>
    );
};

export default ScoreDisplay;
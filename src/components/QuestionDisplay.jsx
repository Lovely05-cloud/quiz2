import React from 'react';
import AnswerOptions from './AnswerOptions';

const QuestionDisplay = ({ question, answerOptions, onAnswerSelected, hasAnswered }) => {
    return (
        <div className="question-display">
            <h2 className="question">{question}</h2>
            <AnswerOptions
                options={answerOptions}
                onAnswerSelected={onAnswerSelected}
                disabled={hasAnswered} // Pass the disabled state
            />
        </div>
    );
};

export default QuestionDisplay;
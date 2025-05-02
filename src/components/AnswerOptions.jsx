import React from 'react';

const AnswerOptions = ({ options, onAnswerSelected, disabled }) => {
    if (!options || !Array.isArray(options)) {
        return <div>No options available</div>; // Handle undefined or invalid options
    }

    return (
        <div className="answer-options">
            {options.map((option, index) => (
                <button
                    key={index}
                    className="answer-option"
                    onClick={() => onAnswerSelected(option)}
                    disabled={disabled} // Disable the button if the question is answered
                >
                    {option}
                </button>
            ))}
        </div>
    );
};

export default AnswerOptions;
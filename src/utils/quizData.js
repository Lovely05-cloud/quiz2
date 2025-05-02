import React from 'react';

const QuestionDisplay = ({ question }) => {
    return (
        <div className="question-display">
            <h2>{question.text}</h2>
        </div>
    );
};

const quizData = [
    {
        text: "Which programming language is primarily used for web development?",
        answers: ["Python", "JavaScript", "C++", "Java"],
        correct: "JavaScript",
    },
    {
        text: "What does HTML stand for?",
        answers: [
            "HyperText Markup Language",
            "HighText Machine Language",
            "HyperTool Multi Language",
            "HyperText Machine Language",
        ],
        correct: "HyperText Markup Language",
    },
    {
        text: "Which company developed the React library?",
        answers: ["Google", "Facebook", "Microsoft", "Apple"],
        correct: "Facebook",
    },
    {
        text: "What is the purpose of CSS in web development?",
        answers: [
            "To structure the content",
            "To style the content",
            "To add interactivity",
            "To store data",
        ],
        correct: "To style the content",
    },
    {
        text: "Which of the following is a JavaScript framework?",
        answers: ["Django", "Laravel", "React", "Flask"],
        correct: "React",
    },
];

export default quizData;
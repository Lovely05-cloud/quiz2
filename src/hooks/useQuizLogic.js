import { useState } from 'react';
import quizData from '../utils/quizData';

const useQuizLogic = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState(null); // Feedback for correct/incorrect answers
    const [hasAnswered, setHasAnswered] = useState(false); // Track if the user has answered

    const currentQuestion = quizData[currentQuestionIndex];

    const handleAnswerSelection = (answer) => {
        if (hasAnswered) return; // Prevent multiple answers for the same question

        setUserAnswers([...userAnswers, answer]);
        setHasAnswered(true); // Mark the question as answered

        if (answer === currentQuestion.correct) {
            setScore(score + 1);
            setFeedback("Correct! 🎉");
        } else {
            setFeedback(`Wrong! The correct answer is "${currentQuestion.correct}". 😞`);
        }
    };

    const handleNextQuestion = () => {
        setFeedback(null); // Clear feedback
        setHasAnswered(false); // Reset answered state
        setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question
    };

    const resetQuiz = () => {
        setCurrentQuestionIndex(0);
        setUserAnswers([]);
        setScore(0);
        setFeedback(null);
        setHasAnswered(false);
    };

    return {
        currentQuestion,
        currentQuestionIndex,
        userAnswers,
        score,
        feedback,
        hasAnswered,
        handleAnswerSelection,
        handleNextQuestion,
        resetQuiz,
        isQuizFinished: currentQuestionIndex >= quizData.length,
    };
};

export default useQuizLogic;
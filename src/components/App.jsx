import React from 'react';
import QuestionDisplay from './QuestionDisplay';
import ScoreDisplay from './ScoreDisplay';
import useQuizLogic from '../hooks/useQuizLogic';

const App = () => {
    const {
        currentQuestion,
        currentQuestionIndex,
        score,
        handleAnswerSelection,
        handleNextQuestion,
        resetQuiz,
        isQuizFinished,
        feedback,
        hasAnswered,
    } = useQuizLogic();

    return (
        <div className="quiz-container">
            <h1>Interactive Quiz Game</h1>
            {!isQuizFinished ? (
                <>
                    <QuestionDisplay
                        question={currentQuestion.text}
                        answerOptions={currentQuestion.answers}
                        onAnswerSelected={handleAnswerSelection}
                        hasAnswered={hasAnswered}
                    />
                    {feedback && <p className="feedback">{feedback}</p>}
                    {hasAnswered && (
                        <button onClick={handleNextQuestion} className="next-button">
                            Next
                        </button>
                    )}
                </>
            ) : (
                <ScoreDisplay score={score} totalQuestions={currentQuestionIndex} onReset={resetQuiz} />
            )}
        </div>
    );
};

export default App;
// Demonstrates state-driven conditional rendering for a one-question-at-a-time quiz.
import { useState } from 'react';

const questions = [
  { id: 'component', prompt: 'What is a React component?', answers: ['A reusable piece of UI', 'A CSS selector', 'A browser event'], correct: 0 },
  { id: 'props', prompt: 'How does a parent usually pass data to a child?', answers: ['With props', 'With a reset', 'With a stylesheet'], correct: 0 },
  { id: 'state', prompt: 'Which hook adds local state to a function component?', answers: ['useMemo', 'useState', 'useRoute'], correct: 1 },
  { id: 'events', prompt: 'Which prop handles a button click in React?', answers: ['onClick', 'onPressing', 'clickEvent'], correct: 0 },
  { id: 'keys', prompt: 'Why do mapped elements need stable keys?', answers: ['To style list items', 'To help React identify items between renders', 'To make text bold'], correct: 1 },
];

function MiniQuizSection() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const isComplete = questionIndex === questions.length;
  const question = questions[questionIndex];

  function chooseAnswer(answerIndex) {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
    if (answerIndex === question.correct) setScore((currentScore) => currentScore + 1);
  }

  function nextQuestion() {
    setQuestionIndex((currentIndex) => currentIndex + 1);
    setSelectedAnswer(null);
  }

  function restartQuiz() {
    setQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
  }

  if (isComplete) {
    return (
      <div className="quiz-result" aria-live="polite">
        <span className="result-badge" aria-hidden="true">{score === questions.length ? '✦' : '✓'}</span>
        <p className="counter-label">QUIZ COMPLETE</p>
        <h4>You scored {score} out of {questions.length}</h4>
        <p>{score === questions.length ? 'Perfect score. You’ve got the React essentials down!' : 'Nice work! A little practice goes a long way.'}</p>
        <button className="button button-outline" type="button" onClick={restartQuiz}>Start again <span aria-hidden="true">↻</span></button>
      </div>
    );
  }

  return (
    <div className="quiz-demo">
      <div className="quiz-progress">
        <span>QUESTION {questionIndex + 1} <span className="muted">/ {questions.length}</span></span>
        <span>Score <strong>{score}</strong></span>
      </div>
      <div className="progress-track" role="progressbar" aria-label="Quiz progress" aria-valuemin="0" aria-valuemax={questions.length} aria-valuenow={questionIndex}>
        <span style={{ width: `${(questionIndex / questions.length) * 100}%` }} />
      </div>
      <h4 className="quiz-question">{question.prompt}</h4>
      <div className="answer-list">
        {question.answers.map((answer, answerIndex) => {
          let answerClass = 'answer-option';
          if (selectedAnswer !== null && answerIndex === question.correct) answerClass += ' is-correct';
          if (selectedAnswer === answerIndex && answerIndex !== question.correct) answerClass += ' is-incorrect';
          return (
            <button className={answerClass} key={`${question.id}-${answer}`} type="button" onClick={() => chooseAnswer(answerIndex)} disabled={selectedAnswer !== null}>
              <span className="answer-letter">{String.fromCharCode(65 + answerIndex)}</span>{answer}
              {selectedAnswer !== null && answerIndex === question.correct && <span className="answer-check" aria-label="Correct answer">✓</span>}
            </button>
          );
        })}
      </div>
      {selectedAnswer !== null && (
        <div className="quiz-feedback">
          <span aria-live="polite">{selectedAnswer === question.correct ? 'That’s right!' : 'Not quite—check the highlighted answer.'}</span>
          <button className="button button-primary" type="button" onClick={nextQuestion}>{questionIndex === questions.length - 1 ? 'See results' : 'Next question'} <span aria-hidden="true">→</span></button>
        </div>
      )}
    </div>
  );
}

export default MiniQuizSection;

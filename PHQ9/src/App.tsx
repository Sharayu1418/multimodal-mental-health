import React, { useState } from 'react';
import { ClipboardCheck } from 'lucide-react';
import { Question } from './components/Question';
import { Results } from './components/Results';
import { questions, options } from './constants';
import { calculateScore, getSeverity } from './utils/assessment';

function App() {
  const [answers, setAnswers] = useState<number[]>(new Array(9).fill(-1));
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (questionIndex: number, value: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    if (answers.some(a => a === -1)) {
      alert("Please answer all questions before submitting.");
      return;
    }
    setShowResults(true);
  };

  const handleRetake = () => {
    setAnswers(new Array(9).fill(-1));
    setShowResults(false);
  };

  const score = calculateScore(answers);
  const result = getSeverity(score);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg p-8">
          <div className="text-center mb-8">
            <ClipboardCheck className="mx-auto h-12 w-12 text-indigo-600" />
            <h2 className="mt-4 text-3xl font-bold text-gray-900">PHQ-9 Depression Screening</h2>
            <p className="mt-2 text-gray-600">
              Over the last 2 weeks, how often have you been bothered by any of the following problems?
            </p>
          </div>

          {!showResults ? (
            <div className="space-y-8">
              {questions.map((question, index) => (
                <Question
                  key={index}
                  question={question}
                  questionIndex={index}
                  selectedAnswer={answers[index]}
                  options={options}
                  onAnswer={handleAnswer}
                />
              ))}

              <div className="mt-8">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit Assessment
                </button>
              </div>
            </div>
          ) : (
            <Results
              score={score}
              result={result}
              onRetake={handleRetake}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
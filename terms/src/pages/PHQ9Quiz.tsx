import React, { useState } from 'react';
import { motion } from 'framer-motion';

const questions = [
  { id: 1, text: "Little interest or pleasure in doing things?" },
  { id: 2, text: "Feeling down, depressed, or hopeless?" },
  { id: 3, text: "Trouble falling/staying asleep, or sleeping too much?" },
  { id: 4, text: "Feeling tired or having little energy?" },
  { id: 5, text: "Poor appetite or overeating?" },
  { id: 6, text: "Feeling bad about yourself or that you're a failure?" },
  { id: 7, text: "Trouble concentrating on things?" },
  { id: 8, text: "Moving or speaking slowly, or being fidgety/restless?" },
  { id: 9, text: "Thoughts of self-harm?" }
];

function PHQ9Quiz() {
  const [answers, setAnswers] = useState<{[key: number]: number}>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({...prev, [questionId]: value}));
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, value) => sum + value, 0);
  };

  const getResult = () => {
    const score = calculateScore();
    if (score >= 20) return { severity: "Severe Depression", color: "red" };
    if (score >= 15) return { severity: "Moderately Severe Depression", color: "orange" };
    if (score >= 10) return { severity: "Moderate Depression", color: "yellow" };
    if (score >= 5) return { severity: "Mild Depression", color: "blue" };
    return { severity: "Minimal Depression", color: "green" };
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8"
    >
      <h1 className="text-3xl font-bold text-gray-800 mb-6">PHQ-9 Depression Screening</h1>
      
      {!showResult ? (
        <>
          <p className="text-gray-600 mb-8">
            Over the last 2 weeks, how often have you been bothered by the following problems?
          </p>
          
          {questions.map(question => (
            <div key={question.id} className="mb-6">
              <p className="text-gray-700 mb-3">{question.text}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { value: 0, label: "Not at all" },
                  { value: 1, label: "Several days" },
                  { value: 2, label: "More than half the days" },
                  { value: 3, label: "Nearly every day" }
                ].map(option => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(question.id, option.value)}
                    className={`p-3 rounded-lg border transition-colors ${
                      answers[question.id] === option.value 
                        ? 'bg-indigo-600 text-white border-indigo-600' 
                        : 'border-gray-300 hover:border-indigo-300'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>
          ))}

          <button
            onClick={() => setShowResult(true)}
            disabled={Object.keys(answers).length !== questions.length}
            className={`w-full py-3 rounded-lg font-semibold transition-colors ${
              Object.keys(answers).length === questions.length
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            View Results
          </button>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Results</h2>
          <div className={`text-${getResult().color}-600 text-xl font-semibold mb-4`}>
            {getResult().severity}
          </div>
          <p className="text-gray-600 mb-6">
            Total Score: {calculateScore()} out of 27
          </p>
          <button
            onClick={() => {
              setAnswers({});
              setShowResult(false);
            }}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Take Test Again
          </button>
        </motion.div>
      )}
    </motion.div>
  );
}

export default PHQ9Quiz;
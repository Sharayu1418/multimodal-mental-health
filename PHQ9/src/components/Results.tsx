import React from 'react';
import { AlertCircle } from 'lucide-react';
import { AssessmentResult } from '../types';

interface ResultsProps {
  score: number;
  result: AssessmentResult;
  onRetake: () => void;
}

export function Results({ score, result, onRetake }: ResultsProps) {
  return (
    <div className="text-center">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900">Assessment Results</h3>
        <div className="mt-4">
          <p className="text-lg">Total Score: {score}</p>
          <p className="text-lg mt-2">Severity Level: {result.level}</p>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <AlertCircle className="h-5 w-5 text-yellow-400" />
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">{result.recommendation}</p>
          </div>
        </div>
      </div>

      <button
        onClick={onRetake}
        className="mt-8 bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Take Assessment Again
      </button>
    </div>
  );
}
import React from 'react';
import { Option } from '../types';

interface QuestionProps {
  question: string;
  questionIndex: number;
  selectedAnswer: number;
  options: Option[];
  onAnswer: (index: number, value: number) => void;
}

export function Question({ question, questionIndex, selectedAnswer, options, onAnswer }: QuestionProps) {
  return (
    <div className="border-b border-gray-200 pb-6">
      <p className="text-lg font-medium text-gray-900 mb-4">{question}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onAnswer(questionIndex, option.value)}
            className={`p-4 rounded-lg border ${
              selectedAnswer === option.value
                ? 'bg-indigo-100 border-indigo-500 text-indigo-700'
                : 'border-gray-300 hover:border-indigo-500 hover:bg-indigo-50'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
}
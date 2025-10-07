import React from 'react';

interface ErrorMessageProps {
  message: string;
  details?: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, details }) => {
  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
      <h3 className="text-red-800 font-medium">{message}</h3>
      {details && (
        <p className="mt-2 text-sm text-red-600">{details}</p>
      )}
    </div>
  );
};
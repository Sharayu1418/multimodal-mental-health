import React from 'react';

function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">1. Service Overview</h2>
          <p className="text-gray-600 mt-4">
            Our depression detection application is designed to assist in the early identification
            of depression symptoms through advanced analysis techniques. This tool is meant to
            support, not replace, professional medical diagnosis and treatment.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">2. Medical Disclaimer</h2>
          <p className="text-gray-600 mt-4">
            This application is not a substitute for professional medical advice, diagnosis, or
            treatment. Always seek the advice of your physician or other qualified health provider
            with any questions you may have regarding a medical condition.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">3. User Responsibilities</h2>
          <p className="text-gray-600 mt-4">
            Users must provide accurate information and understand that the application's
            assessments are preliminary screening tools only. Users are responsible for seeking
            appropriate medical care when necessary.
          </p>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">4. Limitation of Liability</h2>
          <p className="text-gray-600 mt-4">
            We are not liable for any decisions made based on the application's assessments.
            The application is provided "as is" without any guarantees of accuracy or fitness
            for a particular purpose.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Terms;
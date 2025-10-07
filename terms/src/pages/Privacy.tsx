import React from 'react';

function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy & HIPAA Compliance</h1>
        
        <div className="prose prose-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">HIPAA Compliance</h2>
          <p className="text-gray-600 mt-4">
            Our application adheres to all HIPAA (Health Insurance Portability and Accountability Act)
            regulations regarding the protection of sensitive patient health information:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li>All data is encrypted at rest and in transit using industry-standard encryption</li>
            <li>Access controls and authentication measures protect against unauthorized access</li>
            <li>Regular security audits and monitoring ensure ongoing compliance</li>
            <li>Data backup and recovery procedures are in place</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Data Collection & Storage</h2>
          <p className="text-gray-600 mt-4">
            We collect and store the following types of information:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li>Basic demographic information</li>
            <li>Depression screening responses</li>
            <li>Usage patterns and interaction data</li>
            <li>Technical information necessary for service improvement</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Your Rights Under HIPAA</h2>
          <p className="text-gray-600 mt-4">
            As a user, you have the following rights:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li>Right to access your health information</li>
            <li>Right to request corrections to your information</li>
            <li>Right to receive a notice of privacy practices</li>
            <li>Right to know who has accessed your information</li>
            <li>Right to restrict the sharing of your information</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Data Security Measures</h2>
          <p className="text-gray-600 mt-4">
            We implement multiple layers of security including:
          </p>
          <ul className="list-disc pl-6 mt-4 text-gray-600">
            <li>End-to-end encryption for all data transmission</li>
            <li>Secure data centers with physical security measures</li>
            <li>Regular security updates and vulnerability assessments</li>
            <li>Employee training on HIPAA compliance and data security</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
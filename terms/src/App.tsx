import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/" className="text-xl font-bold text-gray-800">
                    Depression Detection
                  </Link>
                </div>
              </div>
              <div className="flex items-center">
                <Link to="/terms" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                  Terms
                </Link>
                <Link to="/privacy" className="text-gray-600 hover:text-gray-900 px-3 py-2">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/" element={
            <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
              <p>Welcome to Depression Detection App</p>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
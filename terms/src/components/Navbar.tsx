import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Heart, Image, Phone, BookOpen, Lotus, AlertCircle, MessageSquare, Home } from 'lucide-react';

function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">MindfulCare</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" icon={<Home />} text="Home" />
            <NavLink to="/phq9" icon={<MessageSquare />} text="PHQ-9" />
            <NavLink to="/hrv" icon={<Heart />} text="HRV Analysis" />
            <NavLink to="/image" icon={<Image />} text="Image Analysis" />
            <NavLink to="/meditation" icon={<Lotus />} text="Meditation" />
            <NavLink to="/resources" icon={<BookOpen />} text="Resources" />
            <NavLink to="/emergency" icon={<AlertCircle />} text="Emergency" />
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link 
      to={to} 
      className="flex items-center space-x-1 text-gray-600 hover:text-indigo-600 transition-colors"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

export default Navbar;
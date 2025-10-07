import React from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';

function Home() {
  const celebrities = [
    {
      name: "Dwayne Johnson",
      image: "https://images.unsplash.com/photo-1621784563330-caee0b138a00?w=500",
      quote: "Depression doesn't discriminate, and talking about it isn't a sign of weakness—it's a sign of strength."
    },
    {
      name: "Lady Gaga",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
      quote: "I've suffered through depression and anxiety my entire life. I still suffer with it every single day."
    }
  ];

  return (
    <div className="space-y-12">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Welcome to MindfulCare</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your comprehensive platform for mental health assessment and support using advanced technology and proven methods.
        </p>
      </motion.section>

      <section className="bg-white rounded-lg shadow-xl p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Understanding Depression</h2>
        <div className="aspect-w-16 aspect-h-9 mb-8">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=z-IR48Mb3W0"
            width="100%"
            height="400px"
            controls
          />
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        {celebrities.map((celebrity) => (
          <motion.div
            key={celebrity.name}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <img 
              src={celebrity.image} 
              alt={celebrity.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{celebrity.name}</h3>
              <p className="text-gray-600 italic">"{celebrity.quote}"</p>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

export default Home;
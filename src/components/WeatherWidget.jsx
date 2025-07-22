import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const WeatherWidget = () => {
  const [currentLocation, setCurrentLocation] = useState(0);

  const locations = [
    {
      name: 'Santorini',
      temperature: '24°C',
      condition: 'Sunny',
      icon: '☀️',
      color: 'from-orange-400 to-yellow-400'
    },
    {
      name: 'Kyoto',
      temperature: '18°C',
      condition: 'Cherry Blossoms',
      icon: '🌸',
      color: 'from-pink-400 to-rose-400'
    },
    {
      name: 'Maldives',
      temperature: '29°C',
      condition: 'Paradise',
      icon: '🌴',
      color: 'from-cyan-400 to-blue-400'
    },
    {
      name: 'Tuscany',
      temperature: '22°C',
      condition: 'Perfect',
      icon: '🍇',
      color: 'from-purple-400 to-indigo-400'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLocation((prev) => (prev + 1) % locations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const current = locations[currentLocation];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-32 right-8 z-40"
    >
      <motion.div
        key={currentLocation}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className={`bg-gradient-to-r ${current.color} text-white p-4 rounded-2xl shadow-lg min-w-[160px]`}
      >
        <div className="text-center">
          <div className="text-2xl mb-1">{current.icon}</div>
          <div className="text-lg font-light">{current.temperature}</div>
          <div className="text-sm opacity-90">{current.name}</div>
          <div className="text-xs opacity-75">{current.condition}</div>
        </div>
      </motion.div>
      
      {/* Location Indicators */}
      <div className="flex justify-center mt-2 space-x-1">
        {locations.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              currentLocation === index ? 'bg-white' : 'bg-white/30'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default WeatherWidget;
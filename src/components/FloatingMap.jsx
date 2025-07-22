import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiX, FiNavigation } = FiIcons;

const FloatingMap = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const destinations = [
    {
      id: 1,
      name: 'Santorini, Greece',
      coordinates: { x: 55, y: 45 },
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop',
      description: 'Luxury cliffside villas with infinity pools',
      temperature: '24°C',
      weather: '☀️'
    },
    {
      id: 2,
      name: 'Kyoto, Japan',
      coordinates: { x: 85, y: 35 },
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop',
      description: 'Traditional ryokans and zen gardens',
      temperature: '18°C',
      weather: '🌸'
    },
    {
      id: 3,
      name: 'Maldives',
      coordinates: { x: 70, y: 70 },
      image: 'https://images.unsplash.com/photo-1520637736862-4d197d17c13a?w=300&h=200&fit=crop',
      description: 'Overwater bungalows in paradise',
      temperature: '29°C',
      weather: '🌴'
    },
    {
      id: 4,
      name: 'Tuscany, Italy',
      coordinates: { x: 50, y: 40 },
      image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=300&h=200&fit=crop',
      description: 'Historic villas and wine estates',
      temperature: '22°C',
      weather: '🍇'
    },
    {
      id: 5,
      name: 'Marrakech, Morocco',
      coordinates: { x: 45, y: 55 },
      image: 'https://images.unsplash.com/photo-1539650116574-75c0c6d47d9d?w=300&h=200&fit=crop',
      description: 'Luxury riads and desert escapes',
      temperature: '26°C',
      weather: '🏜️'
    }
  ];

  return (
    <>
      {/* Floating Map Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsExpanded(true)}
        className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-amber-600 to-amber-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <SafeIcon icon={FiMapPin} className="text-xl" />
      </motion.button>

      {/* Expanded Map Modal */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="text-2xl font-light text-white mb-2">
                    Luxury Destinations
                  </h3>
                  <p className="text-slate-400">
                    Discover our handpicked escape locations
                  </p>
                </div>
                <button
                  onClick={() => setIsExpanded(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <SafeIcon icon={FiX} className="text-2xl" />
                </button>
              </div>

              {/* Map Container */}
              <div className="relative bg-slate-700/30 rounded-xl p-8 h-96 overflow-hidden">
                {/* World Map Background */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 100 60" className="w-full h-full">
                    <path
                      d="M10,20 Q15,15 25,18 Q35,22 45,20 Q55,18 65,22 Q75,25 85,23 Q90,21 95,25"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      fill="none"
                      className="text-amber-500"
                    />
                    <path
                      d="M5,35 Q20,30 35,35 Q50,40 65,35 Q80,30 95,35"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      fill="none"
                      className="text-amber-500"
                    />
                  </svg>
                </div>

                {/* Destination Pins */}
                {destinations.map((destination) => (
                  <motion.button
                    key={destination.id}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setSelectedLocation(destination)}
                    className="absolute transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      left: `${destination.coordinates.x}%`,
                      top: `${destination.coordinates.y}%`
                    }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(245, 158, 11, 0.7)',
                          '0 0 0 10px rgba(245, 158, 11, 0)',
                          '0 0 0 0 rgba(245, 158, 11, 0)'
                        ]
                      }}
                      transition={{ repeat: Infinity, duration: 2 }}
                      className="w-4 h-4 bg-amber-500 rounded-full"
                    />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-white text-xs whitespace-nowrap">
                      {destination.name}
                    </div>
                  </motion.button>
                ))}

                {/* Selected Location Details */}
                <AnimatePresence>
                  {selectedLocation && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      className="absolute bottom-4 left-4 right-4 bg-slate-800/90 backdrop-blur-sm rounded-xl p-4"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={selectedLocation.image}
                          alt={selectedLocation.name}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                          <h4 className="text-white font-medium mb-1">
                            {selectedLocation.name}
                          </h4>
                          <p className="text-slate-400 text-sm mb-2">
                            {selectedLocation.description}
                          </p>
                          <div className="flex items-center space-x-4 text-sm">
                            <span className="text-amber-400">
                              {selectedLocation.weather} {selectedLocation.temperature}
                            </span>
                            <button className="text-amber-400 hover:text-amber-300 transition-colors flex items-center space-x-1">
                              <SafeIcon icon={FiNavigation} className="text-xs" />
                              <span>Explore</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingMap;
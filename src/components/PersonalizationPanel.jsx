import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiX, FiChevronRight } = FiIcons;

const PersonalizationPanel = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const quizQuestions = [
    {
      question: "What defines your perfect escape?",
      options: [
        { id: 'wellness', text: 'Wellness & Rejuvenation', icon: '🧘‍♀️' },
        { id: 'adventure', text: 'Adventure & Exploration', icon: '🏔️' },
        { id: 'culture', text: 'Culture & Heritage', icon: '🏛️' },
        { id: 'luxury', text: 'Pure Luxury & Comfort', icon: '✨' }
      ]
    },
    {
      question: "Your ideal travel pace?",
      options: [
        { id: 'slow', text: 'Slow & Contemplative', icon: '🌅' },
        { id: 'balanced', text: 'Balanced & Flexible', icon: '⚖️' },
        { id: 'active', text: 'Active & Dynamic', icon: '⚡' },
        { id: 'spontaneous', text: 'Spontaneous & Free', icon: '🎭' }
      ]
    },
    {
      question: "What inspires you most?",
      options: [
        { id: 'nature', text: 'Pristine Nature', icon: '🌿' },
        { id: 'gastronomy', text: 'Culinary Excellence', icon: '🍷' },
        { id: 'art', text: 'Art & Design', icon: '🎨' },
        { id: 'people', text: 'Local Communities', icon: '👥' }
      ]
    }
  ];

  const handleAnswer = (questionIndex, answerId) => {
    setAnswers({ ...answers, [questionIndex]: answerId });
    if (questionIndex < quizQuestions.length - 1) {
      setCurrentStep(questionIndex + 1);
    } else {
      // Quiz completed - show recommendations
      setTimeout(() => {
        setIsQuizOpen(false);
        setCurrentStep(0);
        setAnswers({});
      }, 2000);
    }
  };

  return (
    <>
      {/* Quiz Trigger Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsQuizOpen(true)}
        className="fixed left-8 top-1/2 transform -translate-y-1/2 z-40 bg-gradient-to-r from-amber-600 to-amber-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all"
      >
        <SafeIcon icon={FiUser} className="text-xl" />
      </motion.button>

      {/* Quiz Modal */}
      <AnimatePresence>
        {isQuizOpen && (
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
              className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 max-w-2xl w-full shadow-2xl"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-light text-white mb-2">
                    Discover Your Travel Persona
                  </h3>
                  <p className="text-slate-400">
                    Step {currentStep + 1} of {quizQuestions.length}
                  </p>
                </div>
                <button
                  onClick={() => setIsQuizOpen(false)}
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <SafeIcon icon={FiX} className="text-2xl" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-700 rounded-full h-2 mb-8">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
                  className="bg-gradient-to-r from-amber-600 to-amber-500 h-2 rounded-full"
                />
              </div>

              {/* Question */}
              {currentStep < quizQuestions.length ? (
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-6"
                >
                  <h4 className="text-xl text-white font-light mb-6">
                    {quizQuestions[currentStep].question}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {quizQuestions[currentStep].options.map((option) => (
                      <motion.button
                        key={option.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswer(currentStep, option.id)}
                        className="bg-slate-700/50 hover:bg-slate-600/50 text-white p-4 rounded-xl transition-all flex items-center space-x-3 text-left"
                      >
                        <span className="text-2xl">{option.icon}</span>
                        <span className="font-light">{option.text}</span>
                        <SafeIcon icon={FiChevronRight} className="ml-auto text-amber-400" />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center"
                >
                  <div className="text-6xl mb-4">✨</div>
                  <h4 className="text-2xl text-white font-light mb-4">
                    Your Personalized Journey Awaits
                  </h4>
                  <p className="text-slate-400">
                    We're curating perfect recommendations for you...
                  </p>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PersonalizationPanel;
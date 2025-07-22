import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import BlogFeed from '../components/BlogFeed';
import PersonalizationPanel from '../components/PersonalizationPanel';
import StoryTiles from '../components/StoryTiles';
import SocialWall from '../components/SocialWall';
import WeatherWidget from '../components/WeatherWidget';
import FloatingMap from '../components/FloatingMap';
import VirtualConcierge from '../components/VirtualConcierge';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LandingPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning, dreamer!');
    else if (hour < 18) setGreeting('Good afternoon, explorer!');
    else setGreeting('Good evening, wanderer!');

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      {/* Personalized Greeting */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-20 right-8 z-50 bg-gradient-to-r from-amber-600 to-amber-500 text-white px-6 py-3 rounded-full shadow-lg"
      >
        <p className="text-sm font-light">{greeting}</p>
      </motion.div>

      <HeroSection />
      <PersonalizationPanel />
      <StoryTiles />
      <BlogFeed />
      <SocialWall />
      
      {/* Floating Elements */}
      <FloatingMap />
      <WeatherWidget />
      <VirtualConcierge />
      
      <Footer />
    </div>
  );
};

export default LandingPage;
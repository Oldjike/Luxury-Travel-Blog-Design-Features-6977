import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const StoryTiles = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);
  
  // Stories data
  const stories = [
    {
      id: 1,
      title: "Whispers of the Sahara",
      subtitle: "Where silence speaks volumes",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&h=800&fit=crop",
      description: "Journey into the heart of Morocco's golden dunes, where luxury meets mystique under starlit skies."
    },
    {
      id: 2,
      title: "Nordic Serenity",
      subtitle: "Aurora dancing overhead",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop",
      description: "Experience the ethereal beauty of Iceland's landscapes from glass igloos and thermal springs."
    },
    {
      id: 3,
      title: "Tuscan Dreams",
      subtitle: "Where time stands still",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&h=800&fit=crop",
      description: "Discover hidden vineyards and medieval villages in Italy's most romantic countryside."
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Calculate progress through section
      const scrollStart = sectionTop - windowHeight;
      const scrollEnd = sectionTop + sectionHeight;
      const scrollRange = scrollEnd - scrollStart;
      const scrollProgress = (scrollPosition - scrollStart) / scrollRange;
      
      // Determine active story based on scroll progress
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const index = Math.min(
          Math.floor(scrollProgress * stories.length),
          stories.length - 1
        );
        setActiveIndex(index);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [stories.length]);

  return (
    <section ref={sectionRef} className="relative h-[300vh] py-20">
      <div className="sticky top-0 h-screen overflow-hidden">
        {stories.map((story, index) => (
          <motion.div
            key={story.id}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: activeIndex === index ? 1 : 0,
              zIndex: activeIndex === index ? 10 : 0
            }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 h-screen flex items-center justify-center"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src={story.image}
                alt={story.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-white">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: activeIndex === index ? 1 : 0, x: activeIndex === index ? 0 : -50 }}
                transition={{ delay: 0.3 }}
                className="max-w-2xl"
              >
                <h3 className="text-6xl md:text-8xl font-light mb-4 font-serif">
                  {story.title}
                </h3>
                <p className="text-2xl text-amber-400 font-light italic mb-8">
                  {story.subtitle}
                </p>
                <p className="text-xl font-light leading-relaxed mb-8">
                  {story.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-amber-500 text-amber-500 px-8 py-4 rounded-full hover:bg-amber-500 hover:text-white transition-all"
                >
                  Explore This Journey
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        ))}
        
        {/* Story Progress Indicators */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 space-y-4 z-50">
          {stories.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-8 rounded-full transition-all ${
                index === activeIndex ? 'bg-amber-500' : 'bg-white/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoryTiles;
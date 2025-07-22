import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiFilter, FiChevronRight } = FiIcons;

const Experiences = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Experiences' },
    { id: 'wellness', name: 'Wellness & Spa' },
    { id: 'culinary', name: 'Culinary Journeys' },
    { id: 'adventure', name: 'Adventure & Sport' },
    { id: 'cultural', name: 'Cultural Immersion' },
    { id: 'romantic', name: 'Romantic Getaways' }
  ];
  
  const experiences = [
    {
      title: "Private Truffle Hunting & Tasting",
      location: "Tuscany, Italy",
      category: "culinary",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=500&fit=crop",
      description: "Join expert truffle hunters and their trained dogs for an exclusive forest excursion, followed by a gourmet meal featuring your discoveries.",
      duration: "Full Day",
      price: "$495 per person"
    },
    {
      title: "Himalayan Mountain Meditation Retreat",
      location: "Bhutan",
      category: "wellness",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
      description: "Find inner peace with guided meditation sessions led by Buddhist monks in ancient mountaintop monasteries.",
      duration: "3 Days",
      price: "$1,250 per person"
    },
    {
      title: "Québec Winter Adventure Package",
      location: "Charlevoix, Canada",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=500&fit=crop",
      description: "Experience the magic of Canadian winter with skiing, dog sledding, snowshoeing, and cozy evenings by the fire.",
      duration: "5 Days",
      price: "$2,750 per person"
    },
    {
      title: "Traditional Geisha Tea Ceremony",
      location: "Kyoto, Japan",
      category: "cultural",
      image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=500&fit=crop",
      description: "Participate in an authentic tea ceremony hosted by a maiko (apprentice geisha) in a private historic teahouse.",
      duration: "3 Hours",
      price: "$375 per person"
    },
    {
      title: "Private Island Overnight Experience",
      location: "Maldives",
      category: "romantic",
      image: "https://images.unsplash.com/photo-1520637736862-4d197d17c13a?w=800&h=500&fit=crop",
      description: "Escape to your own private island for 24 hours with a personal chef, butler, and customized experiences.",
      duration: "24 Hours",
      price: "$3,900 per couple"
    },
    {
      title: "Desert Stargazing & Astronomy",
      location: "Atacama Desert, Chile",
      category: "adventure",
      image: "https://images.unsplash.com/photo-1532798369041-b33eb576ef16?w=800&h=500&fit=crop",
      description: "Observe celestial wonders through high-powered telescopes with expert astronomers in one of the world's clearest skies.",
      duration: "Evening",
      price: "$325 per person"
    },
    {
      title: "Balinese Healing & Spa Journey",
      location: "Ubud, Bali",
      category: "wellness",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=500&fit=crop",
      description: "Experience traditional Balinese healing practices including massage, energy work, and herbal treatments.",
      duration: "Full Day",
      price: "$450 per person"
    },
    {
      title: "Vintage Champagne Vineyard Tour",
      location: "Reims, France",
      category: "culinary",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=500&fit=crop",
      description: "Private tours of prestigious champagne houses with exclusive tastings and a gourmet lunch among the vines.",
      duration: "Full Day",
      price: "$875 per person"
    }
  ];
  
  const filteredExperiences = selectedCategory === 'all' 
    ? experiences 
    : experiences.filter(exp => exp.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?w=1920&h=1080&fit=crop" 
            alt="Luxury experiences around the world" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/80" />
        </div>
        
        <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 font-serif">
              Signature <span className="text-amber-400">Experiences</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Curated moments that transform travel into unforgettable memories
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Filter Section */}
      <section className="bg-slate-800/50 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-3 mb-4">
            <SafeIcon icon={FiFilter} className="text-amber-400" />
            <h2 className="text-white text-lg font-light">Filter Experiences</h2>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {categories.map(category => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-5 py-2 rounded-full transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experiences Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredExperiences.map((experience, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-amber-500/50 transition-all"
              >
                {/* Experience Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={experience.image} 
                    alt={experience.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  
                  <div className="absolute top-4 left-4 bg-amber-500/90 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {categories.find(c => c.id === experience.category)?.name}
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl text-white font-light mb-1">{experience.title}</h3>
                    <p className="text-amber-400 text-sm">{experience.location}</p>
                  </div>
                </div>
                
                {/* Experience Content */}
                <div className="p-6">
                  <p className="text-slate-300 font-light mb-6 line-clamp-3">
                    {experience.description}
                  </p>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <span className="text-amber-400 text-sm font-medium block mb-1">Duration</span>
                      <p className="text-white text-sm">{experience.duration}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-amber-400 text-sm font-medium block mb-1">From</span>
                      <p className="text-white text-lg font-light">{experience.price}</p>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white py-3 rounded-lg flex items-center justify-center space-x-2"
                  >
                    <span>Book This Experience</span>
                    <SafeIcon icon={FiChevronRight} className="text-sm" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-slate-800/50 text-white border border-amber-500/30 px-8 py-4 rounded-full hover:bg-slate-700/50 transition-all"
            >
              Load More Experiences
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Experiences;
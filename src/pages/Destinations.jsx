import React from 'react';
import {motion} from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiMapPin, FiChevronRight, FiStar} = FiIcons;

const Destinations = () => {
  const destinations = [
    {
      name: "Jamaica",
      image: "https://images.unsplash.com/photo-1559719740-f34c7b6c2f1b?w=800&h=500&fit=crop",
      description: "Experience vibrant culture, reggae rhythms, and breathtaking beaches with lush mountain backdrops and world-class luxury resorts.",
      activities: ["Private Beach Escapes", "Waterfall Expeditions", "Rum Tastings"],
      rating: 4.9,
      season: "November to April"
    },
    {
      name: "St. Lucia",
      image: "https://images.unsplash.com/photo-1505881502353-a1986add3762?w=800&h=500&fit=crop",
      description: "Discover dramatic twin peaks of the Pitons rising from the sea, with secluded luxury resorts offering unparalleled views and experiences.",
      activities: ["Volcano Spa Treatments", "Sailing Expeditions", "Rainforest Adventures"],
      rating: 5.0,
      season: "December to April"
    },
    {
      name: "Mexico (Riviera Maya)",
      image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=800&h=500&fit=crop",
      description: "Immerse yourself in ancient Mayan culture, pristine white-sand beaches, and world-class luxury resorts along the Caribbean coastline.",
      activities: ["Cenote Diving", "Mayan Ruin Tours", "Luxury Beach Clubs"],
      rating: 4.8,
      season: "November to April"
    },
    {
      name: "Barbados",
      image: "https://images.unsplash.com/photo-1559475555-6f5a22e60b5a?w=800&h=500&fit=crop",
      description: "Savor world-class cuisine, explore pristine beaches, and experience British-influenced Caribbean culture in this refined island paradise.",
      activities: ["Catamaran Cruises", "Historic Estate Tours", "Fine Dining Experiences"],
      rating: 4.8,
      season: "December to April"
    },
    {
      name: "Dominican Republic",
      image: "https://images.unsplash.com/photo-1584555613483-3b107aa8ba42?w=800&h=500&fit=crop",
      description: "Experience the perfect blend of luxury resorts, championship golf courses, and pristine beaches in this diverse Caribbean destination.",
      activities: ["Golf Getaways", "Whale Watching", "Colonial Zone Tours"],
      rating: 4.7,
      season: "November to April"
    },
    {
      name: "Costa Rica",
      image: "https://images.unsplash.com/photo-1518533856089-7de3ceb18af1?w=800&h=500&fit=crop",
      description: "Find adventure and tranquility in this ecologically diverse paradise featuring rainforests, volcanoes, and pristine beaches.",
      activities: ["Cloud Forest Hikes", "Wildlife Safaris", "Hot Springs Retreats"],
      rating: 4.9,
      season: "December to April"
    },
    {
      name: "Cuba",
      image: "https://images.unsplash.com/photo-1500759285222-a95626b934cb?w=800&h=500&fit=crop",
      description: "Step back in time to explore colorful colonial architecture, vibrant music scenes, and pristine beaches in this unique Caribbean gem.",
      activities: ["Classic Car Tours", "Tobacco Farm Visits", "Salsa Dancing"],
      rating: 4.7,
      season: "November to April"
    },
    {
      name: "Colombia (Cartagena)",
      image: "https://images.unsplash.com/photo-1562601579-599dec564e06?w=800&h=500&fit=crop",
      description: "Wander through colorful colonial streets, relax on pristine Caribbean beaches, and experience the vibrant culture of this South American jewel.",
      activities: ["Old City Walking Tours", "Island Hopping", "Coffee Plantation Visits"],
      rating: 4.8,
      season: "December to April"
    },
    {
      name: "Bahamas",
      image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&h=500&fit=crop",
      description: "Discover crystal-clear waters, pink sand beaches, and exclusive private islands offering the ultimate luxury escape.",
      activities: ["Swimming with Pigs", "Private Island Experiences", "Deep Sea Fishing"],
      rating: 4.9,
      season: "November to April"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1545579133-99bb5ab189bd?w=1920&h=1080&fit=crop" 
            alt="Caribbean beach paradise" 
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
              Tropical <span className="text-amber-400">Paradises</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Discover handpicked luxury destinations across the Caribbean, Mexico, and Latin America
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Destinations Grid */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-white mb-6 font-serif">
              Our Signature <span className="text-amber-400">Destinations</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              Expertly curated luxury escapes in the world's most breathtaking tropical settings
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {destinations.map((destination, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-slate-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-amber-500/50 transition-all"
              >
                {/* Destination Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                    <SafeIcon icon={FiMapPin} className="text-amber-400" />
                    <h3 className="text-xl text-white font-light">{destination.name}</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm flex items-center space-x-1">
                    <SafeIcon icon={FiStar} className="text-amber-400 text-xs" />
                    <span>{destination.rating}</span>
                  </div>
                </div>
                
                {/* Destination Content */}
                <div className="p-6">
                  <p className="text-slate-300 font-light mb-4 line-clamp-3">
                    {destination.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-amber-400 text-sm font-medium block mb-2">Best Season</span>
                    <p className="text-white text-sm">{destination.season}</p>
                  </div>
                  
                  <div className="mb-6">
                    <span className="text-amber-400 text-sm font-medium block mb-2">Signature Experiences</span>
                    <ul className="text-slate-300 text-sm space-y-1">
                      {destination.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white py-3 rounded-lg flex items-center justify-center space-x-2"
                  >
                    <span>Explore Packages</span>
                    <SafeIcon icon={FiChevronRight} className="text-sm" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Contact CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 bg-gradient-to-r from-amber-600/20 to-amber-500/20 p-10 rounded-2xl text-center border border-amber-500/30"
          >
            <h3 className="text-3xl font-light text-white mb-4 font-serif">
              Ready to Plan Your Tropical Escape?
            </h3>
            <p className="text-xl text-slate-300 font-light mb-8 max-w-3xl mx-auto">
              Our luxury travel specialists are ready to craft your perfect Caribbean, Mexican, or Latin American adventure
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Destinations;
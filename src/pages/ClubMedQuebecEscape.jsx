import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const { FiArrowLeft, FiClock, FiUser, FiHeart, FiShare2, FiBookmark, FiMapPin, FiCalendar, FiStar } = FiIcons;

const ClubMedQuebecEscape = () => {
  const post = {
    id: 'club-med-quebec-escape',
    title: "Discover Your Year-Round Escape at Club Med Québec Charlevoix",
    subtitle: "Where adventure meets tranquility, culture blends with relaxation, and all-inclusive luxury is available all year long",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop",
    author: 'Seeta Luxury Travel Team',
    readTime: '12 min read',
    date: '2025-06-15',
    category: 'Luxury Escapes'
  };

  const sections = [
    {
      title: "Experience Every Season to the Fullest",
      content: "What makes Club Med Québec Charlevoix truly unique is how it celebrates the changing seasons. Picture yourself soaring down fresh, powdery ski slopes in winter, then envision hiking trails splashed with the fiery colors of autumn, or biking through sunlit forest paths in summer. From serene spring mornings with stunning river views to adrenaline-pumping winter sports, this is your ultimate four-season playground where nature amplifies every moment.",
      image: "https://images.unsplash.com/photo-1551524164-6cf2ac10b1c3?w=800&h=500&fit=crop",
      icon: "🏔️"
    },
    {
      title: "Dive into Nature and Culture",
      content: "As soon as you walk into the resort, you'll feel the magic of your surroundings. The beautiful mix of modern design and traditional Native American influences flows throughout the spaces, creating a soothing yet elegant ambiance. It's an experience that respects the local heritage, adding an even deeper meaning to your luxurious stay.",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=500&fit=crop",
      icon: "🏛️"
    },
    {
      title: "Savor the Flavors",
      content: "Get ready to kickstart your journey to relaxation with breathtaking views of the St. Lawrence, paired with soul-nourishing activities. Imagine practicing yoga by the river, indulging in the soothing warmth of a hammam, or treating yourself to a luxurious spa day. And let's not forget the food! Prepare for a culinary adventure that will delight your taste buds with farm-to-table dishes that highlight local favorites—including a gourmet twist on the iconic poutine—ensuring every meal is a celebration of flavor.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
      icon: "🍷"
    },
    {
      title: "Family Luxury, Perfected",
      content: "This is where SeetaLuxuryEscape clients uncover the true joy of a perfectly planned family vacation. Choose from a variety of plush accommodations—Superior, Deluxe, or Exclusive Collection suites—with many showcasing stunning river views and private balconies. If you're looking for something truly special, consider the Exclusive Collection Suites, which come with outdoor whirlpools, breakfast room service, and dedicated concierge support to take care of all your needs.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Endless Fun for Everyone",
      content: "Boredom? Not here! Club Med Québec Charlevoix is packed with activities for guests of all ages and interests. Dive into thrilling water sports, push your limits with land activities, hike scenic trails, or give mountain biking a shot. The kids won't miss out either—they can enjoy creative workshops, guided nature hikes, and family-friendly tournaments at the Children's Clubs, giving parents the perfect chance to unwind, reconnect, or explore solo.",
      image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&h=500&fit=crop",
      icon: "🎯"
    },
    {
      title: "Adventure Awaits Beyond the Resort",
      content: "While the resort will keep you entertained, don't miss the magic just outside its gates. Take time to explore the rich history of Québec City, a UNESCO World Heritage site that's just an hour away, where each cobblestone has its own story to tell. Join thrilling excursions like whale watching on the St. Lawrence or spotting black bears in their natural habitat. These adventures will create unforgettable memories that connect you with Canada's stunning landscapes and vibrant culture, all part of your luxurious getaway.",
      image: "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?w=800&h=500&fit=crop",
      icon: "🐋"
    }
  ];

  const highlights = [
    { icon: "🏔️", title: "Four-Season Activities", description: "Ski, hike, bike, and explore year-round" },
    { icon: "🏛️", title: "Cultural Heritage", description: "Native American influences throughout" },
    { icon: "🍷", title: "Farm-to-Table Cuisine", description: "Local flavors with gourmet twists" },
    { icon: "🏨", title: "Luxury Accommodations", description: "River views and private balconies" },
    { icon: "👨‍👩‍👧‍👦", title: "Family-Friendly", description: "Activities for all ages and interests" },
    { icon: "🌊", title: "St. Lawrence River", description: "Breathtaking waterfront location" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-screen pt-20">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-white hover:text-amber-400 transition-colors mb-6"
                >
                  <SafeIcon icon={FiArrowLeft} className="text-xl" />
                  <span>Back to Stories</span>
                </motion.button>
              </Link>
              
              <span className="inline-block bg-amber-500/90 text-white text-sm px-4 py-2 rounded-full font-medium mb-6">
                {post.category}
              </span>
              
              <h1 className="text-4xl md:text-6xl font-light text-white mb-4 font-serif leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-amber-400 font-light italic mb-8 max-w-3xl">
                {post.subtitle}
              </p>
              
              <div className="flex items-center text-white/80 space-x-6 mb-8">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiUser} className="text-sm" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiClock} className="text-sm" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCalendar} className="text-sm" />
                  <span>{post.date}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick Highlights */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-white mb-4 font-serif">
              Why Club Med Québec Charlevoix?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Discover what makes this destination truly exceptional
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-700/30 p-6 rounded-xl text-center hover:bg-slate-700/50 transition-all"
              >
                <div className="text-4xl mb-4">{highlight.icon}</div>
                <h3 className="text-white font-medium mb-2">{highlight.title}</h3>
                <p className="text-slate-400 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-16">
              When it comes to luxury getaways, why limit yourself to just one kind of experience? Imagine a place where adventure meets tranquility, culture blends with relaxation, and all-inclusive luxury is available all year long!
            </p>
            
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-16">
              Welcome to Club Med Québec Charlevoix! Set in the stunning Charlevoix region of Canada, just an hour away from the charming streets of Québec City, this isn't just a resort; it's a vibrant canvas that offers new experiences with each changing season. With the breathtaking St. Lawrence River and rolling mountains right at your doorstep, every visit promises to be memorable—no matter the time of year.
            </p>

            {sections.map((section, index) => (
              <div key={index} className="mb-16">
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{section.icon}</span>
                  <h2 className="text-3xl font-light text-white font-serif">
                    {section.title}
                  </h2>
                </div>
                
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-6`}>
                  <div className="md:w-1/2">
                    <p className="text-slate-300 font-light leading-relaxed text-lg">
                      {section.content}
                    </p>
                  </div>
                  
                  <div className="md:w-1/2">
                    <motion.img 
                      src={section.image} 
                      alt={section.title}
                      className="w-full h-64 object-cover rounded-xl shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-amber-600/20 to-amber-500/20 p-8 rounded-xl mb-16 border border-amber-500/30">
              <p className="text-xl text-amber-400 font-light italic text-center mb-4">
                "Imagine a single destination that beautifully blends luxury, adventure, and rich cultural experiences—all while keeping your comfort in mind."
              </p>
              <p className="text-slate-300 text-center">
                Club Med Québec Charlevoix isn't just for families; it's a romantic refuge for couples and an exciting spot for solo travelers seeking their next adventure. Here, stress simply melts away, and those blissful moments turn into cherished memories.
              </p>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-white mb-6 font-serif">
                Are You Ready for Your Next Adventure?
              </h2>
              <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
                Now's the time to swap the hassle of planning for moments filled with joy and connection. Are you ready to book your family's next unforgettable vacation, a romantic retreat, or an exhilarating adventure at this incredible Canadian gem?
              </p>
              <p className="text-lg text-amber-400 font-light italic">
                Your year-round escape to bliss is just around the corner!
              </p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-600 to-amber-500 p-8 rounded-2xl text-center text-white mb-12"
          >
            <h3 className="text-2xl font-light mb-4 font-serif">
              Ready to Book Your Dream Getaway?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Head over to SeetaLuxuryEscape.com today to get your personalized quote for Club Med Québec Charlevoix and see just how easy it is to book your dream getaway.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all"
            >
              Get Your Personalized Quote
            </motion.button>
          </motion.div>

          {/* Article Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-between pt-8 border-t border-slate-700"
          >
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-slate-800/50 text-white px-6 py-3 rounded-full hover:bg-slate-700/50 transition-all"
              >
                <SafeIcon icon={FiHeart} className="text-lg" />
                <span>45 Likes</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-slate-800/50 text-white px-6 py-3 rounded-full hover:bg-slate-700/50 transition-all"
              >
                <SafeIcon icon={FiShare2} className="text-lg" />
                <span>Share</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-slate-800/50 text-white px-6 py-3 rounded-full hover:bg-slate-700/50 transition-all"
              >
                <SafeIcon icon={FiBookmark} className="text-lg" />
                <span>Save</span>
              </motion.button>
            </div>
            
            <div className="flex items-center space-x-2 text-amber-400">
              <SafeIcon icon={FiStar} className="text-lg" />
              <SafeIcon icon={FiStar} className="text-lg" />
              <SafeIcon icon={FiStar} className="text-lg" />
              <SafeIcon icon={FiStar} className="text-lg" />
              <SafeIcon icon={FiStar} className="text-lg" />
              <span className="text-white ml-2">5.0 (127 reviews)</span>
            </div>
          </motion.div>

          {/* Related Articles */}
          <div className="mt-20">
            <h3 className="text-2xl font-light text-white mb-8 font-serif">
              More Canadian Escapes
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Whistler Mountain Luxury Lodge",
                  image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop",
                  category: "Mountain Retreats",
                  excerpt: "Experience world-class skiing and alpine luxury in British Columbia's premier mountain destination."
                },
                {
                  title: "Banff National Park Wilderness Resort",
                  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                  category: "Nature Escapes",
                  excerpt: "Discover the untamed beauty of the Canadian Rockies with exclusive wilderness experiences."
                }
              ].map((article, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-amber-500/50 transition-all"
                >
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-48 object-cover"
                  />
                  
                  <div className="p-6">
                    <span className="text-xs text-amber-400 mb-2 block">
                      {article.category}
                    </span>
                    
                    <h4 className="text-white text-xl font-light mb-3 hover:text-amber-400 transition-colors">
                      {article.title}
                    </h4>
                    
                    <p className="text-slate-400 text-sm mb-4">
                      {article.excerpt}
                    </p>
                    
                    <Link to="/">
                      <span className="text-sm text-amber-400 hover:text-amber-300 transition-colors flex items-center">
                        Read more 
                        <SafeIcon icon={FiArrowLeft} className="transform rotate-180 ml-1" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default ClubMedQuebecEscape;
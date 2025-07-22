import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const { FiArrowLeft, FiClock, FiUser, FiHeart, FiShare2, FiBookmark } = FiIcons;

const ClubMedArticle = () => {
  // Mock blog post data
  const post = {
    id: 'club-med-quebec',
    title: "Club Med Québec Charlevoix: Your Four-Season Canadian Escape to Pure Bliss",
    subtitle: "A luxury all-inclusive resort that transforms with every season, offering the perfect blend of adventure, relaxation, and cultural immersion",
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1200&h=800&fit=crop",
    author: 'Seeta Luxury Travel Team',
    readTime: '10 min read',
    date: '2025-06-11',
    category: 'Luxury Escapes'
  };

  const sections = [
    {
      title: "A Symphony of Seasons: Your Year-Round Playground",
      content: `Unlike any other luxury all-inclusive, Club Med Québec Charlevoix is a testament to the Symphony of Seasons. Imagine gliding down pristine ski slopes in winter, the crisp air invigorating your spirit. Then envision hiking vibrant trails alive with fall's fiery hues, or mountain biking through sun-dappled forests in summer. From crisp spring mornings perfect for river views to exhilarating winter sports, this resort offers a four-season Canadian escape where nature's beauty enhances every activity.`,
      image: "https://images.unsplash.com/photo-1610741083757-1ae88e1a17f7?w=800&h=500&fit=crop"
    },
    {
      title: "Where Indigenous Spirit Meets Modern Luxury",
      content: `Step inside and feel an immediate connection to something truly distinctive. The resort's design is a marvel, seamlessly blending contemporary architecture with traditional Native American culture. Every space resonates with a thoughtful aesthetic, inviting you into an atmosphere of grounded elegance. This isn't just about beautiful design; it's about celebrating the unique heritage of the land, adding a profound layer to your luxury experience.`,
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=500&fit=crop"
    },
    {
      title: "Indulge Your Senses: Culinary & Wellness Delights",
      content: `Your journey to Mountain Vitality begins with breathtaking views of the St. Lawrence, perfectly paired with rejuvenating activities. Find your flow with riverside yoga, melt away stress in the serene hammam, or surrender to blissful spa care. Then, Savour Charlevoix with an unforgettable culinary adventure. Indulge in exquisite farm-to-table cuisine, where local delicacies like the legendary poutine are elevated to gourmet heights, ensuring every meal is a celebration of taste and place.`,
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop"
    },
    {
      title: "Luxury Curated for Your Family's Joy",
      content: `This is where SeetaLuxuryEscape clients find The Seeta Signature Glow – that radiant happiness that comes from a perfectly tailored family vacation. Our Luxury Accommodation offers spacious Superior, Deluxe, or Exclusive Collection Spaces, many boasting mesmerizing river views and furnished balconies. For the ultimate pampering, the Exclusive Collection Suites provide unparalleled comfort with outdoor whirlpools, breakfast room service, and dedicated concierge – ensuring every need is anticipated.`,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop"
    },
    {
      title: "Adventures for Every Age & Spirit",
      content: `Boredom is simply not an option here. Club Med Québec Charlevoix is a hub for Engaging Activities for all ages and skill levels. Dive into invigorating water sports, challenge yourselves with land sports, conquer hiking trails, or master mountain biking. And for our younger travelers, Children's Clubs are vibrant worlds of discovery, offering creative workshops, guided nature hikes, and spirited family tournaments, giving parents the freedom to relax, reconnect, or embark on their own adventures.`,
      image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=800&h=500&fit=crop"
    },
    {
      title: "Beyond the Resort: Cultural Expeditions & Natural Wonders",
      content: `While the resort offers endless delight, the magic extends beyond its borders. Explore Québec City, a UNESCO World Heritage site, just an hour away, where cobblestone streets whisper tales of rich history. Embark on captivating Excursions like awe-inspiring whale watching on the St. Lawrence or thrilling black bear observation tours. These are not just excursions; they are unique, enriching encounters with Canada's majestic nature and vibrant culture, seamlessly integrated into your luxury escape.`,
      image: "https://images.unsplash.com/photo-1519181245277-cffeb31da2e3?w=800&h=500&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      {/* Hero Image */}
      <div className="relative h-screen pt-20">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Hero Content */}
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

              <h1 className="text-5xl md:text-7xl font-light text-white mb-4 font-serif">
                {post.title}
              </h1>

              <p className="text-2xl text-amber-400 font-light italic mb-8">
                {post.subtitle}
              </p>

              <div className="flex items-center text-white/80 space-x-6">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiUser} className="text-sm" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiClock} className="text-sm" />
                  <span>{post.readTime}</span>
                </div>
                <span>{post.date}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-10">
              Have you ever dreamed of a luxury escape that adapts to your desires, no matter the season? A place where every family member finds their joy, where romance flourishes amidst stunning vistas, and adventure meets unparalleled comfort? The challenge with many luxury getaways is they often offer just one facet of perfection. But what if you could have it all – the thrill of discovery, the serenity of nature, the richness of culture, and the ease of all-inclusive luxury – year-round?
            </p>

            <p className="text-xl text-slate-300 font-light leading-relaxed mb-16">
              Welcome to Club Med Québec Charlevoix, an experience so unique, it redefines the very essence of a luxury family escape. Nestled in the heart of Canada's breathtaking Charlevoix region, just over an hour from the historic charm of Québec City, this isn't just a resort; it's a living canvas of extraordinary moments, painted anew with every season. Here, the majestic St. Lawrence River unfolds before you, embraced by rolling mountains, promising an immersive journey for every soul.
            </p>

            {sections.map((section, index) => (
              <div key={index} className="mb-16">
                <h2 className="text-3xl font-light text-white mb-6 font-serif">
                  {section.title}
                </h2>
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
                      className="w-full h-64 object-cover rounded-xl"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            ))}

            <p className="text-xl text-amber-400 font-light italic text-center mt-16 mb-8">
              Imagine: A single destination that effortlessly combines luxury, adventure, and profound cultural exploration, all while prioritizing your comfort and connection.
            </p>
          </motion.div>

          {/* Article Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-between mt-12 pt-8 border-t border-slate-700"
          >
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-slate-800/50 text-white px-6 py-3 rounded-full hover:bg-slate-700/50 transition-all"
              >
                <SafeIcon icon={FiHeart} className="text-lg" />
                <span>32 Likes</span>
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all"
            >
              Plan Your Visit
            </motion.button>
          </motion.div>

          {/* Related Stories */}
          <div className="mt-20">
            <h3 className="text-2xl font-light text-white mb-8 font-serif">
              Related Luxury Escapes
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Maldives Overwater Villas",
                  image: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=400&h=300&fit=crop",
                  category: "Island Getaways"
                },
                {
                  title: "Tuscan Wine Country Retreat",
                  image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&h=300&fit=crop",
                  category: "Culinary Journeys"
                },
                {
                  title: "Swiss Alps Wellness Sanctuary",
                  image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&h=300&fit=crop",
                  category: "Wellness Retreats"
                }
              ].map((story, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-amber-500/50 transition-all"
                >
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-48 object-cover" 
                  />
                  
                  <div className="p-4">
                    <span className="text-xs text-amber-400 mb-2 block">
                      {story.category}
                    </span>
                    
                    <h4 className="text-white text-lg font-light mb-2 hover:text-amber-400 transition-colors">
                      {story.title}
                    </h4>
                    
                    <Link to="/">
                      <span className="text-sm text-slate-400 hover:text-amber-400 transition-colors flex items-center">
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

export default ClubMedArticle;
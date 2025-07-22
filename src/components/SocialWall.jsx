import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiInstagram, FiPlay, FiHeart, FiMessageCircle } = FiIcons;

const SocialWall = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const socialPosts = [
    {
      id: 1,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      caption: 'Sunset meditation in Bali 🌅 #Seetaluxuryescape',
      author: '@wanderlust_sarah',
      likes: 1247,
      platform: 'instagram'
    },
    {
      id: 2,
      type: 'video',
      url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop',
      caption: 'Private chef experience in Tuscany 👨‍🍳',
      author: '@foodie_travels',
      likes: 892,
      platform: 'tiktok'
    },
    {
      id: 3,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=400&h=400&fit=crop',
      caption: 'Venetian glass making workshop ✨',
      author: '@artisan_journeys',
      likes: 654,
      platform: 'instagram'
    },
    {
      id: 4,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1539650116574-75c0c6d47d9d?w=400&h=400&fit=crop',
      caption: 'Moroccan spice market adventure 🌶️',
      author: '@spice_explorer',
      likes: 1103,
      platform: 'instagram'
    },
    {
      id: 5,
      type: 'video',
      url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      caption: 'Northern lights from our glass igloo 🌌',
      author: '@arctic_luxury',
      likes: 2156,
      platform: 'youtube'
    },
    {
      id: 6,
      type: 'image',
      url: 'https://images.unsplash.com/photo-1520637736862-4d197d17c13a?w=400&h=400&fit=crop',
      caption: 'Himalayan sunrise yoga session 🧘‍♀️',
      author: '@mountain_soul',
      likes: 876,
      platform: 'instagram'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(socialPosts.length / 3));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 bg-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light text-white mb-6 font-serif">
            Live Travel Wall
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Real moments from our community of luxury travelers around the world
          </p>
        </motion.div>

        {/* Social Posts Grid */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{ x: -currentIndex * 100 + '%' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="flex"
          >
            {Array.from({ length: Math.ceil(socialPosts.length / 3) }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {socialPosts.slice(slideIndex * 3, slideIndex * 3 + 3).map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="bg-slate-700/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-slate-600/50 hover:border-amber-500/50 transition-all"
                    >
                      {/* Post Image/Video */}
                      <div className="relative aspect-square">
                        <img
                          src={post.url}
                          alt={post.caption}
                          className="w-full h-full object-cover"
                        />
                        
                        {/* Video Play Button */}
                        {post.type === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="bg-white/20 backdrop-blur-sm text-white p-4 rounded-full hover:bg-white/30 transition-all"
                            >
                              <SafeIcon icon={FiPlay} className="text-2xl" />
                            </motion.button>
                          </div>
                        )}

                        {/* Platform Badge */}
                        <div className="absolute top-3 right-3">
                          <div className="bg-black/50 backdrop-blur-sm text-white p-2 rounded-full">
                            <SafeIcon icon={FiInstagram} className="text-sm" />
                          </div>
                        </div>

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                      {/* Post Content */}
                      <div className="p-4">
                        <p className="text-white font-light mb-3 line-clamp-2">
                          {post.caption}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-amber-400 text-sm font-medium">
                            {post.author}
                          </span>
                          
                          <div className="flex items-center space-x-3 text-slate-400">
                            <div className="flex items-center space-x-1">
                              <SafeIcon icon={FiHeart} className="text-sm" />
                              <span className="text-sm">{post.likes}</span>
                            </div>
                            <SafeIcon icon={FiMessageCircle} className="text-sm" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: Math.ceil(socialPosts.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? 'bg-amber-500' : 'bg-slate-600'
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 mb-4">Share your luxury escape moments</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-6 py-3 rounded-full hover:shadow-xl transition-all"
          >
            #Seetaluxuryescape
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialWall;
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiClock, FiUser, FiHeart, FiBookmark, FiArrowRight } = FiIcons;

const BlogFeed = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredPost, setHoveredPost] = useState(null);

  const categories = [
    { id: 'all', name: 'All Stories', color: 'amber' },
    { id: 'wellness', name: 'Wellness Retreats', color: 'emerald' },
    { id: 'culinary', name: 'Epicurean Journeys', color: 'rose' },
    { id: 'culture', name: 'Local Culture', color: 'blue' },
    { id: 'luxury', name: 'Luxury Escapes', color: 'purple' }
  ];

  const blogPosts = [
    {
      id: 'club-med-quebec-escape',
      title: "Discover Your Year-Round Escape at Club Med Québec Charlevoix",
      excerpt: "Where adventure meets tranquility, culture blends with relaxation, and all-inclusive luxury is available all year long!",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      category: 'luxury',
      author: 'Seeta Luxury Travel Team',
      readTime: '12 min read',
      date: '2025-06-15',
      featured: true
    },
    {
      id: 'club-med-quebec',
      title: "Club Med Québec Charlevoix: Your Four-Season Canadian Escape to Pure Bliss",
      excerpt: "Experience a luxury all-inclusive resort that transforms with every season, offering the perfect blend of adventure, relaxation, and cultural immersion.",
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=600&fit=crop",
      category: 'luxury',
      author: 'Seeta Luxury Travel Team',
      readTime: '10 min read',
      date: '2025-06-11',
      featured: true
    },
    {
      id: 1,
      title: "Himalayan Wellness: A Journey to Inner Peace",
      excerpt: "Discover transformative wellness practices in the serene mountains of Bhutan, where ancient traditions meet modern luxury.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      category: 'wellness',
      author: 'Sophia Chen',
      readTime: '8 min read',
      date: '2025-01-15',
      featured: false
    },
    {
      id: 2,
      title: "The Art of Japanese Kaiseki",
      excerpt: "An intimate exploration of Japan's most refined culinary tradition in a hidden Kyoto restaurant.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop",
      category: 'culinary',
      author: 'James Morrison',
      readTime: '12 min read',
      date: '2025-01-12'
    },
    {
      id: 3,
      title: "Venetian Artisans: Guardians of Tradition",
      excerpt: "Meet the master craftspeople keeping Venice's artistic heritage alive in their hidden workshops.",
      image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&h=600&fit=crop",
      category: 'culture',
      author: 'Isabella Romano',
      readTime: '10 min read',
      date: '2025-01-10'
    },
    {
      id: 4,
      title: "Private Island Paradise in Maldives",
      excerpt: "Experience unparalleled luxury at an exclusive resort where every detail is crafted for perfection.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      category: 'luxury',
      author: 'Alexander Ross',
      readTime: '6 min read',
      date: '2025-01-08'
    },
    {
      id: 5,
      title: "Moroccan Medina: A Sensory Journey",
      excerpt: "Navigate the labyrinthine streets of Marrakech and uncover the secrets of traditional craftsmanship.",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d47d9d?w=800&h=600&fit=crop",
      category: 'culture',
      author: 'Amira Hassan',
      readTime: '9 min read',
      date: '2025-01-05'
    },
    {
      id: 6,
      title: "Alpine Gastronomy: Farm to Table Excellence",
      excerpt: "Discover how Swiss chefs are revolutionizing mountain cuisine with locally sourced ingredients.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      category: 'culinary',
      author: 'Henri Dubois',
      readTime: '7 min read',
      date: '2025-01-02'
    }
  ];

  const filteredPosts = activeFilter === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-light text-white mb-6 font-serif">
            Curated Stories
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Immerse yourself in handpicked narratives from the world's most extraordinary destinations
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full transition-all ${
                activeFilter === category.id
                  ? 'bg-gradient-to-r from-amber-600 to-amber-500 text-white'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredPost(post.id)}
              onHoverEnd={() => setHoveredPost(null)}
              className={`bg-slate-800/50 rounded-2xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-amber-500/50 transition-all duration-300 ${
                post.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Hover Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredPost === post.id ? 1 : 0 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: hoveredPost === post.id ? 1 : 0.8 }}
                    className="text-center text-white"
                  >
                    <p className="text-lg font-light mb-4">Read Story</p>
                    <SafeIcon icon={FiArrowRight} className="text-2xl mx-auto" />
                  </motion.div>
                </motion.div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-500/90 text-white text-xs px-3 py-1 rounded-full font-medium">
                    {categories.find(c => c.id === post.category)?.name}
                  </span>
                </div>

                {/* Bookmark Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all"
                >
                  <SafeIcon icon={FiBookmark} className="text-sm" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center text-slate-400 text-sm mb-3 space-x-4">
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiUser} className="text-xs" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiClock} className="text-xs" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <Link to={typeof post.id === 'string' ? `/blog/${post.id}` : `/blog/${post.id}`}>
                  <h3 className="text-xl font-light text-white mb-3 hover:text-amber-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>

                <p className="text-slate-400 font-light leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-sm">{post.date}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-1 text-slate-400 hover:text-amber-400 transition-colors"
                  >
                    <SafeIcon icon={FiHeart} className="text-sm" />
                    <span className="text-sm">
                      {post.id === 'club-med-quebec-escape' ? '45' : post.id === 'club-med-quebec' ? '32' : '24'}
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all"
          >
            Discover More Stories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogFeed;
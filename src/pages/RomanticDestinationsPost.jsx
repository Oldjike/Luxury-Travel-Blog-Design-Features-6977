import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const { FiArrowLeft, FiClock, FiUser, FiHeart, FiShare2, FiBookmark, FiMapPin, FiCalendar, FiStar, FiCompass, FiKey, FiGift, FiEye, FiDollarSign, FiUsers, FiHome, FiX, FiSend } = FiIcons;

const RomanticDestinationsPost = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [likes, setLikes] = useState(56);
  const [reviews, setReviews] = useState(38);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasReviewed, setHasReviewed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent('New Romantic Destination Inquiry');
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Preferred Destination: ${formData.destination}
Message: ${formData.message}

Source: Romantic Destinations Blog Post
      `);
      
      const mailtoLink = `mailto:johnchandra@rogers.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setFormSubmitted(true);
      
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          destination: '',
          message: '',
        });
        setIsContactFormOpen(false);
        setIsSubmitting(false);
      }, 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
    }
  };

  const handleLike = () => {
    if (!hasLiked) {
      setLikes(likes + 1);
      setHasLiked(true);
    }
  };

  const handleReview = () => {
    if (!hasReviewed) {
      setReviews(reviews + 1);
      setHasReviewed(true);
    }
  };

  const post = {
    id: 'romantic-destinations',
    title: "Stunning Destinations Built for Love and Affection",
    subtitle: "These captivating places inspire love and connection and invite travellers to immerse themselves in their beauty and magic",
    image: "https://images.unsplash.com/photo-1515859005217-8a1f08870f59?w=1200&h=800&fit=crop",
    author: 'SeetaLuxuryEscape Team',
    readTime: '10 min read',
    date: '2025-05-14',
    category: 'Romantic Travel'
  };

  const destinations = [
    {
      name: "Amalfi Coast, Italy",
      description: "Vibrant villages cling to dramatic cliffs, overlooking the azure waves of the Mediterranean. The scent of blooming lemon trees wafts through the air, setting the stage for intimate strolls along picturesque paths.",
      image: "https://images.unsplash.com/photo-1533676802871-eca1ae998cd5?w=800&h=500&fit=crop",
      highlights: [
        "Candlelit dinners on terraces overlooking the sea",
        "Sunset boat rides along the dramatic coastline",
        "Private wine tastings at local vineyards",
        "Intimate walks through charming villages"
      ]
    },
    {
      name: "Kyoto, Japan",
      description: "As cherry blossoms flutter down like confetti in spring, couples can lose themselves in tranquil gardens and ancient temples. The soft sound of water flowing in Zen gardens creates a soothing backdrop for whispered conversations and stolen glances.",
      image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=500&fit=crop",
      highlights: [
        "Cherry blossom viewing in private garden settings",
        "Traditional tea ceremonies for two",
        "Strolls through bamboo forests at dawn",
        "Staying in a traditional ryokan with private onsen"
      ]
    },
    {
      name: "Santorini, Greece",
      description: "White-washed buildings cascade down volcanic cliffs, creating the perfect backdrop for romance. Watch the sun set over the caldera from your private terrace, casting golden hues across the Aegean Sea.",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&h=500&fit=crop",
      highlights: [
        "Private plunge pools with panoramic views",
        "Sunset catamaran cruises with champagne",
        "Secluded black sand beaches",
        "Wine tasting at ancient vineyards"
      ]
    },
    {
      name: "Bora Bora, French Polynesia",
      description: "Crystal-clear turquoise waters and overwater bungalows create the ultimate romantic escape. Wake up to the gentle lapping of waves beneath your private villa and dive into a world of tropical splendor together.",
      image: "https://images.unsplash.com/photo-1500930287596-c1ecaa373bb2?w=800&h=500&fit=crop",
      highlights: [
        "Overwater bungalows with glass floor panels",
        "Private dinners on deserted motus (small islands)",
        "Couples' massages overlooking the lagoon",
        "Sunset outrigger canoe experiences"
      ]
    }
  ];

  const sections = [
    {
      title: "The Significance of Love in Travel",
      content: "Love really is a language we all understand, no matter where we are. It's such a great theme to celebrate, especially when visiting places that just ooze romance and warmth. Travel has a unique ability to deepen connections and create shared experiences that become treasured memories. When couples explore new destinations together, they often discover new dimensions to their relationship as they navigate unfamiliar territories, try new experiences, and create stories that will be told for years to come.",
      icon: "💕"
    },
    {
      title: "Types of Romantic Destinations",
      content: "The world is filled with picturesque coastal escapes and charming historic towns that serve as enchanting places designed for lovers. From the sun-drenched beaches of the Caribbean to the snow-capped peaks of the Alps, romance can blossom in diverse settings. Historic cities with cobblestone streets and centuries of stories embedded in their walls offer a different kind of romantic ambiance than tropical paradises, but both can create the perfect backdrop for love to flourish.",
      icon: "🌍"
    },
    {
      title: "Occasions for Romantic Getaways",
      content: "With so many beautiful destinations to choose from, it's easy to feel lost or unsure of where to go. You're looking for a place that really captures the feeling of love—somewhere that'll help you make unforgettable memories for special times like honeymoons or anniversaries. But honestly, finding that perfect spot can seem a bit overwhelming. That's where we come in, guiding you to destinations that match the significance of your special occasion, whether it's a milestone anniversary, a honeymoon, or simply a spontaneous expression of love.",
      icon: "🎁"
    }
  ];

  const tips = [
    {
      icon: "🌅",
      title: "Timing Matters",
      tip: "Consider visiting during shoulder seasons when destinations are less crowded but weather is still favorable for romantic experiences."
    },
    {
      icon: "🏨",
      title: "Accommodation Selection",
      tip: "Choose accommodations with romantic features like private balconies, stunning views, or special amenities for couples."
    },
    {
      icon: "📝",
      title: "Plan Surprises",
      tip: "Research in advance to arrange special moments—whether it's a private dinner on the beach or a secret excursion to a hidden gem."
    }
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

      {/* Introduction */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-xl text-slate-300 font-light leading-relaxed">
              Seetaluxuryescape is your go-to for finding amazing places that spark love and connection. 
              Let us help you explore breathtaking locations, each offering a unique backdrop for unforgettable adventures together. 
              From picturesque coastal escapes to charming historic towns, we've curated the best romantic getaways just for you!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-start mb-6">
                <span className="text-4xl mr-4 mt-2">{section.icon}</span>
                <h2 className="text-3xl font-light text-white font-serif mb-2">
                  {section.title}
                </h2>
              </div>
              <p className="text-slate-300 font-light leading-relaxed text-lg pl-12">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-light text-white mb-4 font-serif">
              Destinations Where Love Flourishes
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Explore these enchanting locations designed to inspire romance and create lasting memories
            </p>
          </motion.div>
          
          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mb-20"
            >
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-6`}>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-light text-white mb-4 font-serif">
                    {destination.name}
                  </h3>
                  <p className="text-slate-300 font-light leading-relaxed text-lg mb-6">
                    {destination.description}
                  </p>
                  
                  <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700/50">
                    <h4 className="text-amber-400 mb-3">Romantic Experiences:</h4>
                    <ul className="space-y-2">
                      {destination.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-amber-400 mr-2">•</span>
                          <span className="text-slate-300 font-light">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:w-1/2">
                  <motion.img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Romantic Travel Tips */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-white mb-4 font-serif">
              Essential Romantic Travel Tips
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Make the most of your romantic getaway with these expert recommendations
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-700/30 p-6 rounded-xl text-center hover:bg-slate-700/50 transition-all"
              >
                <div className="text-4xl mb-4">{tip.icon}</div>
                <h3 className="text-white font-medium mb-3">{tip.title}</h3>
                <p className="text-slate-400 text-sm">{tip.tip}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Thoughts */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-light text-white mb-6 font-serif">
              Your Journey to Romance Begins Here
            </h2>
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
              As we wrap up our little trip around some of the most charming places in the world, 
              we really hope you feel inspired to plan your next romantic adventure! Whether you're 
              going on a honeymoon, celebrating an anniversary, or just taking a last-minute getaway, 
              keep in mind that every place has its own special charm just waiting for you to explore.
            </p>
            <p className="text-lg text-amber-400 font-light italic mb-12">
              We'd love to hear from you! Which destination excites you the most, or what romantic 
              getaway are you dreaming of? Share your thoughts in the comments below, and let's spark 
              a conversation about love and travel. Until next time, happy travels from all of us at Seetaluxuryescape!
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactFormOpen(true)}
              className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all"
            >
              Plan Your Romantic Getaway
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Article Actions */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
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
                onClick={handleLike}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                  hasLiked 
                    ? 'bg-amber-500 text-white' 
                    : 'bg-slate-800/50 text-white hover:bg-slate-700/50'
                }`}
              >
                <SafeIcon icon={FiHeart} className="text-lg" />
                <span>{likes} Likes</span>
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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReview}
                className="flex items-center space-x-2"
              >
                <SafeIcon icon={FiStar} className="text-lg" />
                <SafeIcon icon={FiStar} className="text-lg" />
                <SafeIcon icon={FiStar} className="text-lg" />
                <SafeIcon icon={FiStar} className="text-lg" />
                <SafeIcon icon={FiStar} className="text-lg" />
                <span className="text-white ml-2">4.9 ({reviews} reviews)</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-light text-white mb-8 font-serif">
            More Romantic Travel Inspiration
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Planning the Perfect Honeymoon: A Complete Guide",
                image: "https://images.unsplash.com/photo-1520637736862-4d197d17c13a?w=400&h=300&fit=crop",
                category: "Honeymoon Planning",
                excerpt: "Expert tips and destination recommendations for creating the honeymoon of your dreams."
              },
              {
                title: "Anniversary Celebrations Around the World",
                image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                category: "Celebrations",
                excerpt: "Unique ways to celebrate your love milestones in stunning destinations worldwide."
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
      </section>

      {/* Compact Contact Form Modal */}
      <AnimatePresence>
        {isContactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-xl max-w-md w-full p-6 relative"
            >
              <button 
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
                onClick={() => setIsContactFormOpen(false)}
              >
                <SafeIcon icon={FiX} className="text-xl" />
              </button>

              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={FiSend} className="text-green-400 text-2xl" />
                  </div>
                  <h3 className="text-xl text-white font-light mb-2">Inquiry Sent!</h3>
                  <p className="text-slate-400 text-sm">
                    Thank you for contacting SeetaLuxuryEscape. We'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl text-white font-light mb-4 text-center">
                    Create Your Perfect Luxury Getaway
                  </h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    
                    <div>
                      <input
                        type="text"
                        name="destination"
                        placeholder="Preferred Destination"
                        value={formData.destination}
                        onChange={handleInputChange}
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    
                    <div>
                      <textarea
                        name="message"
                        placeholder="Tell us about your dream getaway..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      ></textarea>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white py-3 rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Submit'}
                    </motion.button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-600 to-amber-500 p-8 rounded-2xl text-center text-white mb-12"
          >
            <h3 className="text-2xl font-light mb-4 font-serif">
              Ready to Plan Your Romantic Escape?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let our travel experts help you design the perfect romantic getaway tailored to your desires and dreams.
            </p>
            <motion.a
              href="https://seetaluxuryescape.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all inline-block"
            >
              Schedule a Consultation
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RomanticDestinationsPost;
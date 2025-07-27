import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const { FiArrowLeft, FiClock, FiUser, FiHeart, FiShare2, FiBookmark, FiMapPin, FiCalendar, FiStar, FiCompass, FiKey, FiGift, FiEye, FiDollarSign, FiUsers, FiHome, FiX, FiSend } = FiIcons;

const LuxuryTravelSecretsPost = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [likes, setLikes] = useState(42);
  const [reviews, setReviews] = useState(73);
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
      const subject = encodeURIComponent('New Luxury Travel Inquiry - Travel Secrets');
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Preferred Destination: ${formData.destination}
Message: ${formData.message}

Source: Luxury Travel Secrets Blog Post
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
    id: 'luxury-travel-secrets-revealed',
    title: "Top Six Powerful Travel Secrets Revealed in the Revolutionary Walkthrough",
    subtitle: "Discover the ultimate travel secrets for luxurious getaways with this revolutionary walkthrough",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
    author: 'SeetaLuxuryEscape Team',
    readTime: '20 min read',
    date: '2025-01-26',
    category: 'Travel Secrets'
  };

  const secrets = [
    {
      title: "Unlocking Hidden Gems",
      content: "One of the key secrets revealed in the revolutionary walkthrough is the art of uncovering hidden gems in popular travel destinations. These hidden gems are often off the beaten path and provide a unique and authentic experience for travelers. By exploring these lesser-known spots, you can avoid crowds, discover local culture, and create unforgettable memories. A secluded beach only known to locals, an underground speakeasy bar with a fascinating history, or a traditional artisan workshop tucked away in narrow cobblestone streets – these discoveries transform ordinary trips into extraordinary adventures.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
      icon: "🔍",
      highlights: [
        "A secluded beach only known to locals",
        "An underground speakeasy bar with a fascinating history",
        "Hidden artisan workshops in historic districts",
        "Secret viewpoints with breathtaking panoramas"
      ]
    },
    {
      title: "Maximizing Travel Rewards",
      content: "The walkthrough also delves into the world of travel rewards programs and how to maximize their benefits. By strategically using credit cards, loyalty programs, and other reward systems, travelers can save money on flights, accommodations, and even activities during their trips. Understanding how to leverage these rewards can make luxury travel more accessible and affordable. Sign up for airline and hotel loyalty programs, use credit cards with travel perks and bonus points, and stay updated on promotions and deals from travel reward programs.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      icon: "💳",
      highlights: [
        "Sign up for airline and hotel loyalty programs",
        "Use credit cards with travel perks and bonus points",
        "Stay updated on promotions and deals from travel reward programs",
        "Strategic timing for maximum point accumulation"
      ]
    },
    {
      title: "Diving Deeper Into Local Culture",
      content: "Another powerful secret highlighted in the walkthrough is the importance of immersing yourself in local culture when traveling. Instead of sticking to touristy areas, take the time to explore neighborhoods, try authentic cuisine, participate in cultural activities, and interact with locals. This deeper connection with the destination can enrich your travel experience and provide a more meaningful journey. Attend a traditional festival or event, take a cooking class to learn local recipes, or visit museums and historical sites to learn about the region's heritage.",
      image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&h=500&fit=crop",
      icon: "🏛️",
      highlights: [
        "Attend a traditional festival or event",
        "Take a cooking class to learn local recipes",
        "Visit museums or historical sites to learn about the region's heritage",
        "Engage with local artisans and craftspeople"
      ]
    },
    {
      title: "Luxurious Accommodations",
      content: "When planning an opulent getaway, one of the key factors to consider is where you will be staying. Opt for luxurious accommodations such as five-star hotels, private villas, or exclusive resorts that offer top-notch amenities and personalized service. Indulge in spacious suites with breathtaking views, lavish furnishings, and state-of-the-art technology to truly elevate your travel experience. From staying in a private overwater bungalow in Bora Bora to booking a suite at the iconic Burj Al Arab in Dubai, or renting a luxury villa in Tuscany with a private pool and chef services.",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=500&fit=crop",
      icon: "🏨",
      highlights: [
        "Private overwater bungalows in tropical paradises",
        "Iconic luxury hotels with world-class service",
        "Private villas with personal chef services",
        "Exclusive resorts with premium amenities"
      ]
    },
    {
      title: "Fine Dining Experiences",
      content: "No opulent getaway is complete without indulging in fine dining experiences that tantalize your taste buds and leave you craving for more. Seek out Michelin-starred restaurants, celebrity chef establishments, or unique dining experiences such as rooftop dinners overlooking iconic city skylines or private beachfront meals under the stars. Treat yourself to exquisite culinary creations paired with premium wines and impeccable service for an unforgettable gastronomic journey. From dining at Eleven Madison Park in New York City to enjoying a sunset dinner at The Rock Restaurant in Zanzibar, or savoring traditional kaiseki cuisine at a ryokan in Kyoto.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
      icon: "🍷",
      highlights: [
        "Michelin-starred restaurants with celebrity chefs",
        "Private beachfront dining under the stars",
        "Rooftop dinners with panoramic city views",
        "Traditional cuisine in authentic settings"
      ]
    },
    {
      title: "Personalized Luxury Services",
      content: "The ultimate secret to opulent getaways lies in personalized luxury services that cater to your every need and desire. From 24-hour concierge assistance and private butler service to customized itineraries and exclusive access to VIP events, these services transform your journey into a seamless, indulgent experience. Enjoy luxury transportation services, wellness centers offering massages and spa treatments, and exclusive access to private tours and experiences that money can't usually buy. The value of luxury travel lies in the attention to detail, quality of service, and the ability to tailor the trip to meet individual preferences and desires.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=500&fit=crop",
      icon: "🛎️",
      highlights: [
        "24-hour concierge assistance for all needs",
        "Private butler service and personalized attention",
        "Customized itineraries tailored to preferences",
        "Exclusive access to VIP events and experiences"
      ]
    }
  ];

  const destinations = [
    {
      name: "The Maldives",
      description: "A dream destination for luxury and relaxation with crystal-clear waters, overwater bungalows, and pristine white sandy beaches.",
      image: "https://images.unsplash.com/photo-1520637736862-4d197d17c13a?w=400&h=300&fit=crop",
      activities: ["Snorkeling in vibrant coral reefs", "Sunset cruise on traditional dhoni", "Private beach picnic on secluded island"]
    },
    {
      name: "Santorini, Greece",
      description: "Known for stunning sunsets, picturesque white-washed buildings, and breathtaking views of the Aegean Sea.",
      image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&h=300&fit=crop",
      activities: ["Visit Oia for iconic blue-domed churches", "Wine tasting at local wineries", "Relax on unique black sand beaches"]
    },
    {
      name: "Dubai, UAE",
      description: "Synonymous with luxury and opulence, featuring extravagant hotels, shopping, and attractions.",
      image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400&h=300&fit=crop",
      activities: ["Burj Khalifa observation deck", "The Palm Jumeirah luxury resorts", "Dubai Marina waterfront dining"]
    }
  ];

  const luxuryTips = [
    {
      icon: "🏨",
      title: "Luxury Accommodations",
      tip: "Book rooms with views to enhance your experience. Waking up to stunning vistas creates lasting memories."
    },
    {
      icon: "🍽️",
      title: "Fine Dining",
      tip: "Make reservations at exclusive restaurants well in advance and try local specialties for authentic experiences."
    },
    {
      icon: "💆‍♀️",
      title: "Spa Treatments",
      tip: "Schedule spa appointments early in your trip and try signature treatments exclusive to your destination."
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
              Discover the ultimate travel secrets for luxurious getaways with this revolutionary walkthrough. 
              These powerful insights will transform your travel experiences and unlock new levels of luxury and sophistication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Six Secrets */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-light text-white mb-4 font-serif">
              Six Powerful Travel Secrets Revealed
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Unlock the insider knowledge that transforms ordinary trips into extraordinary luxury experiences
            </p>
          </motion.div>

          {secrets.map((secret, index) => (
            <div key={index} className="mb-20">
              <div className="flex items-start mb-6">
                <span className="text-4xl mr-4 mt-2">{secret.icon}</span>
                <div>
                  <h3 className="text-3xl font-light text-white font-serif mb-2">
                    {index + 1}. {secret.title}
                  </h3>
                </div>
              </div>
              
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-6`}>
                <div className="md:w-3/5">
                  <p className="text-slate-300 font-light leading-relaxed text-lg mb-6">
                    {secret.content}
                  </p>
                  
                  <div className="bg-slate-800/50 p-5 rounded-lg border border-slate-700/50">
                    <h4 className="text-amber-400 mb-3">Key Highlights:</h4>
                    <ul className="space-y-2">
                      {secret.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-amber-400 mr-2">•</span>
                          <span className="text-slate-300 font-light">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="md:w-2/5">
                  <motion.img
                    src={secret.image}
                    alt={secret.title}
                    className="w-full h-80 object-cover rounded-xl shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Luxury Tips */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-white mb-4 font-serif">
              Essential Luxury Travel Tips
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Practical advice to maximize your opulent getaway experience
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {luxuryTips.map((tip, index) => (
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

      {/* Destination Spotlight */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-light text-white mb-4 font-serif">
              Premier Luxury Destinations
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Discover the world's most opulent getaway destinations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="w-full h-full object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl text-white font-light">{destination.name}</h3>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-slate-300 font-light mb-4 text-sm">
                    {destination.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-amber-400 text-sm font-medium">Must-Do Activities:</h4>
                    {destination.activities.map((activity, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <span className="w-1 h-1 bg-amber-400 rounded-full"></span>
                        <span className="text-slate-300 text-xs">{activity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution of Luxury Travel */}
      <section className="py-16 px-6 bg-slate-800/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-white mb-4 font-serif">
              The Evolution of Luxury Travel
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Understanding how luxury travel has transformed throughout history
            </p>
          </motion.div>
          
          <div className="space-y-8">
            <div className="bg-slate-700/30 p-8 rounded-xl">
              <h3 className="text-xl text-white font-light mb-4">Ancient Origins</h3>
              <p className="text-slate-300 font-light leading-relaxed">
                Luxury travel has a long history that dates back to ancient times. The concept of opulent getaways can be traced back to the Roman Empire, where wealthy citizens would retreat to lavish villas in the countryside for relaxation and leisure. Over the centuries, luxury travel continued to evolve, with European aristocrats embarking on grand tours during the 17th and 18th centuries to experience different cultures and showcase their wealth.
              </p>
            </div>
            
            <div className="bg-slate-700/30 p-8 rounded-xl">
              <h3 className="text-xl text-white font-light mb-4">Modern Era</h3>
              <p className="text-slate-300 font-light leading-relaxed">
                In the modern era, luxury travel has become more accessible to a wider range of travelers, thanks to advancements in transportation and accommodations. High-end hotels, private jets, luxury cruises, and exclusive resorts now cater to affluent individuals seeking unique experiences and top-notch service. The rise of luxury travel agencies like SeetaLuxuryEscape has made it easier for travelers to plan bespoke trips tailored to their preferences and desires.
              </p>
            </div>
          </div>
        </div>
      </section>

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
              Ready to Apply These Luxury Travel Secrets?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Transform your next getaway into an opulent experience with SeetaLuxuryEscape. Our expert travel specialists will help you implement these powerful secrets for an unforgettable luxury journey.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactFormOpen(true)}
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all"
            >
              Start Planning Your Luxury Escape
            </motion.button>
          </motion.div>

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="prose prose-lg prose-invert max-w-none text-center"
          >
            <h2 className="text-3xl font-light text-white mb-6 font-serif">
              Your Journey to Opulent Adventures Begins Now
            </h2>
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
              In conclusion, the revolutionary walkthrough has unveiled six exclusive secrets for luxurious travel experiences. By unlocking hidden gems, maximizing travel rewards, and diving deeper into local culture, travelers can elevate their getaways to opulent levels. These powerful tips provide a roadmap to unforgettable and indulgent adventures around the world.
            </p>
            <p className="text-lg text-amber-400 font-light italic">
              With these exclusive secrets in mind, you can ensure that your next vacation is truly a luxurious and unforgettable experience from start to finish.
            </p>
          </motion.div>

          {/* Article Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-between pt-8 border-t border-slate-700 mt-12"
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

          {/* Related Articles */}
          <div className="mt-20">
            <h3 className="text-2xl font-light text-white mb-8 font-serif">
              More Luxury Travel Insights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "5 Exclusive Luxury Retreats To Transform Your Travel Experience",
                  image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop",
                  category: "Transformative Travel",
                  excerpt: "Discover extraordinary retreats that offer the sacred gift of transformation and spiritual awakening."
                },
                {
                  title: "Majestic Elegance Costa Mujeres: A Luxurious Mexican Escape",
                  image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&h=300&fit=crop",
                  category: "Mexican Riviera",
                  excerpt: "Experience luxury redefined at the brand-new all-suite resort with impressive pre-opening rates."
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

      <Footer />
    </div>
  );
};

export default LuxuryTravelSecretsPost;
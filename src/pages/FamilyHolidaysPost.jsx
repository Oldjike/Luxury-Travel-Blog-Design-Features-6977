import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const { FiArrowLeft, FiClock, FiUser, FiHeart, FiShare2, FiBookmark, FiCalendar, FiStar, FiX, FiSend } = FiIcons;

const FamilyHolidaysPost = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    familySize: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [likes, setLikes] = useState(29);
  const [hasLiked, setHasLiked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent('Family Holidays Contest Entry');
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Family Size: ${formData.familySize}
Message: ${formData.message}
Source: Win a Week of Bespoke Family Holidays Blog Post
      `);
      const mailtoLink = `mailto:johnchandra@rogers.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      setFormSubmitted(true);
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          familySize: '',
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

  const post = {
    id: 'family-holidays',
    title: "Win a Week of Bespoke Family Holidays — Keep the Memories",
    subtitle: "Create unforgettable moments with your loved ones that will last a lifetime",
    image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?w=1200&h=800&fit=crop",
    author: 'Seeta Luxury Travel Team',
    readTime: '12 min read',
    date: '2025-02-10',
    category: 'Family Travel'
  };

  const highlights = [
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Tailored Experiences",
      description: "Custom itineraries designed for your family's unique interests"
    },
    {
      icon: "🏖️",
      title: "Multiple Destinations",
      description: "Beach, mountain, or city adventures to choose from"
    },
    {
      icon: "🎓",
      title: "Educational Value",
      description: "Learning opportunities that create lasting impact"
    },
    {
      icon: "🧩",
      title: "All Ages Welcome",
      description: "Activities suitable for every family member"
    },
    {
      icon: "📸",
      title: "Memory Preservation",
      description: "Professional photos and keepsakes included"
    },
    {
      icon: "🎁",
      title: "Contest Entry",
      description: "Chance to win a fully customized family vacation"
    }
  ];

  const familyActivities = [
    {
      title: "Archaeological Digs",
      description: "Perfect for budding historians, these hands-on experiences let children and adults discover artifacts and learn about ancient civilizations together.",
      image: "https://images.unsplash.com/photo-1544550581-1bcabf842b77?w=800&h=500&fit=crop"
    },
    {
      title: "Wildlife Conservation",
      description: "Participate in meaningful conservation efforts that protect endangered species while learning about ecosystems and environmental stewardship.",
      image: "https://images.unsplash.com/photo-1503656142023-618e7d1f435a?w=800&h=500&fit=crop"
    },
    {
      title: "Cooking Classes",
      description: "Learn to prepare local specialties from expert chefs, then enjoy your creations together as a family - skills you can bring home and enjoy for years.",
      image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?w=800&h=500&fit=crop"
    },
    {
      title: "Art Workshops",
      description: "Express creativity in inspiring locations with guided art sessions tailored to all skill levels, creating keepsakes of your journey together.",
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=500&fit=crop"
    }
  ];

  const testimonials = [
    {
      quote: "Our customized family holiday to Costa Rica was perfect for everyone - from our 5-year-old who loved the wildlife sanctuary to our teenager who couldn't get enough of the ziplines!",
      family: "The Johnsons",
      location: "Toronto, Canada"
    },
    {
      quote: "Having every detail tailored to our needs made traveling with three generations so much easier. Grandma even tried paddleboarding!",
      family: "The Patel Family",
      location: "London, UK"
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

      {/* Highlights Section */}
      <section className="py-16 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-white mb-4 font-serif">
              What Makes Bespoke Family Holidays Special?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Discover the unique benefits of customized family travel experiences
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

      {/* Main Content */}
      <article className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
              Family time is precious, and the memories we create together become the stories we treasure for a lifetime. Imagine winning a week of completely customized family holidays, designed specifically around your family's unique interests, ages, and dreams. This isn't just a vacation—it's an opportunity to craft experiences that will be talked about for years to come.
            </p>

            <h2 className="text-3xl font-light text-white mb-6 font-serif">
              Why This Holiday is Different
            </h2>
            
            <p className="text-slate-300 font-light leading-relaxed mb-8">
              Imagine a holiday where every single detail—from the breakfast menu to the afternoon activities—is shaped around your family's unique tastes. This isn't your average package deal with fixed itineraries. This is about crafting a once-in-a-lifetime adventure where your family's preferences are at the heart of every choice.
            </p>

            <h2 className="text-3xl font-light text-white mb-6 font-serif">
              Tailored to Your Family's Needs
            </h2>
            
            <div className="bg-slate-800/50 p-6 rounded-xl mb-8 border border-slate-700/50">
              <h3 className="text-2xl font-light text-amber-400 mb-4">
                Customization Beyond the Brochure
              </h3>
              
              <p className="text-slate-300 font-light mb-4">
                Unlike those one-size-fits-all vacation packages, a custom family holiday is designed just for you and your loved ones. It's kind of like getting a suit made just for you—it fits your family just right! Instead of a set plan, you choose every aspect: the location, the activities, the pace.
              </p>
            </div>

            <h3 className="text-2xl font-light text-white mb-4">
              Catering to All Ages and Interests
            </h3>
            
            <p className="text-slate-300 font-light leading-relaxed mb-6">
              If your little one can't get enough of building sandcastles, your teenager is all about those adventure sports, or you just want some relaxing spa days, a custom vacation can make it all happen in one awesome trip.
            </p>
            
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Age-appropriate activities for every family member</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Flexible scheduling that accommodates different energy levels</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Personal interests woven into the itinerary</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Special dietary requirements and accessibility needs considered</span>
              </li>
            </ul>

            <h3 className="text-2xl font-light text-white mb-4">
              Unique Experiences You Can't Book Elsewhere
            </h3>
            
            <ul className="space-y-2 mb-12">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Private guided tours with local experts</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Exclusive access to attractions during off-peak hours</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Hands-on cultural workshops and learning experiences</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Adventure activities scaled to your family's comfort level</span>
              </li>
            </ul>

            <h2 className="text-3xl font-light text-white mb-6 font-serif">
              The Magic of Making Memories
            </h2>
            
            <div className="bg-slate-800/50 p-6 rounded-xl mb-8 border border-slate-700/50">
              <h3 className="text-2xl font-light text-amber-400 mb-4">
                Why Experiences Outlast Material Gifts
              </h3>
              
              <p className="text-slate-300 font-light italic">
                "Sure, the newest gadget could be old news in a year, but remember that awesome time we kayaked through those clear waters together? That's the kind of memory that sticks with you! That's forever."
              </p>
            </div>
          </motion.div>
          
          {/* Educational Adventures */}
          <section className="my-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl font-light text-white mb-6 font-serif text-center">
                Educational Adventures
              </h2>
              
              <p className="text-slate-300 font-light text-center mb-12">
                Transform learning into excitement with these enriching experiences
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {familyActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-amber-500/50 transition-all"
                >
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-white text-xl font-light mb-3">
                      {activity.title}
                    </h3>
                    <p className="text-slate-400 text-sm">
                      {activity.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* Creating Shared Family Stories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <h3 className="text-2xl font-light text-white mb-4">
              Creating Shared Family Stories
            </h3>
            
            <p className="text-slate-300 font-light leading-relaxed mb-6">
              Trips like these aren't just vacations — they're chapters in your family's history. Years from now, you'll still be laughing about the time Dad fell off the paddleboard.
            </p>
            
            <h3 className="text-2xl font-light text-white mb-4">
              Bonding Activities
            </h3>
            
            <p className="text-slate-300 font-light mb-3">
              Strengthen family connections through:
            </p>
            
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Multi-generational storytelling sessions</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Collaborative challenges and treasure hunts</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Shared creative projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Outdoor adventures that require teamwork</span>
              </li>
            </ul>
            
            <h3 className="text-2xl font-light text-white mb-4">
              Cultural Immersion
            </h3>
            
            <ul className="space-y-2 mb-12">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Stay with local families</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Participate in traditional festivals</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Learn local crafts and skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Explore hidden gems off the tourist trail</span>
              </li>
            </ul>

            <h2 className="text-3xl font-light text-white mb-6 font-serif">
              How to Preserve These Precious Memories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-light text-white mb-4">
                  Digital Documentation
                </h3>
                
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span className="text-slate-300 font-light">Professional family photoshoots in stunning locations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span className="text-slate-300 font-light">Video diaries of daily adventures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span className="text-slate-300 font-light">Digital scrapbooks with interactive elements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span className="text-slate-300 font-light">Social media content that tells your story</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-light text-white mb-4">
                  Physical Keepsakes
                </h3>
                
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span className="text-slate-300 font-light">Custom travel journals for each family member</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span className="text-slate-300 font-light">Locally made souvenirs with personal significance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span className="text-slate-300 font-light">Recipe collections from cooking experiences</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span className="text-slate-300 font-light">Art pieces created during workshops</span>
                  </li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-light text-white mb-4">
              Storytelling Traditions
            </h3>
            
            <ul className="space-y-2 mb-12">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Evening reflection sessions</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Family blog or newsletter</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Annual "remember when" gatherings</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Photo albums with handwritten stories</span>
              </li>
            </ul>
          </motion.div>
          
          {/* Testimonials */}
          <section className="my-16 bg-slate-800/50 p-8 rounded-xl">
            <h3 className="text-2xl font-light text-white mb-8 font-serif text-center">
              What Families Are Saying
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-700/30 p-6 rounded-xl"
                >
                  <p className="text-slate-300 font-light italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <div className="text-right">
                    <p className="text-amber-400 font-medium">
                      {testimonial.family}
                    </p>
                    <p className="text-slate-400 text-sm">
                      {testimonial.location}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
          
          {/* The Lasting Impact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <h2 className="text-3xl font-light text-white mb-6 font-serif">
              The Lasting Impact
            </h2>
            
            <h3 className="text-2xl font-light text-white mb-4">
              Strengthened Family Bonds
            </h3>
            
            <p className="text-slate-300 font-light leading-relaxed mb-8">
              Shared adventures create inside jokes, common references, and deeper understanding between family members. These experiences become the foundation for stronger relationships that last well beyond the holiday.
            </p>
            
            <h3 className="text-2xl font-light text-white mb-4">
              Expanded Worldviews
            </h3>
            
            <p className="text-slate-300 font-light leading-relaxed mb-8">
              Exposure to different cultures, environments, and ways of life broadens perspectives and creates more empathetic, curious family members.
            </p>
            
            <h3 className="text-2xl font-light text-white mb-4">
              Confidence Building
            </h3>
            
            <p className="text-slate-300 font-light leading-relaxed mb-12">
              Exploring new places and trying different activities together boosts confidence in kids and adults, fostering a family culture of adventure and openness to new experiences.
            </p>
            
            <h2 className="text-3xl font-light text-white mb-6 font-serif">
              Destinations You Could Explore
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">🏖️</div>
                <h3 className="text-white font-medium mb-2">Beach Bliss</h3>
                <p className="text-slate-400 text-sm">
                  Golden sands, turquoise waters, and endless sunshine — perfect for families who love the sea.
                </p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">🏔️</div>
                <h3 className="text-white font-medium mb-2">Mountain Adventures</h3>
                <p className="text-slate-400 text-sm">
                  Breathe in crisp air while hiking, biking, or enjoying cozy evenings by the fire.
                </p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-white font-medium mb-2">Cultural City Escapes</h3>
                <p className="text-slate-400 text-sm">
                  Explore bustling markets, museums, and historical sites together.
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl font-light text-white mb-6 font-serif">
              Making It Happen
            </h2>
            
            <h3 className="text-2xl font-light text-white mb-4">
              Contest Entry Tips
            </h3>
            
            <ul className="space-y-2 mb-8">
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Share what makes your family unique</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Explain why this experience would be meaningful</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Highlight any special circumstances or milestones</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Show your enthusiasm for creating memories together</span>
              </li>
              <li className="flex items-start">
                <span className="text-amber-400 mr-2">•</span>
                <span className="text-slate-300 font-light">Be genuine. Share your story. Let your family's personality shine through</span>
              </li>
            </ul>
            
            <div className="bg-gradient-to-r from-amber-600/20 to-amber-500/20 p-8 rounded-xl mb-12 border border-amber-500/30">
              <h3 className="text-2xl font-light text-white mb-4">
                Alternative Ways to Create Bespoke Experiences
              </h3>
              
              <p className="text-slate-300 mb-4">
                If you don't win, consider:
              </p>
              
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span className="text-slate-300 font-light">Working with specialized family travel planners</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span className="text-slate-300 font-light">Creating themed staycations with local experts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span className="text-slate-300 font-light">Organizing family experience days in your area</span>
                </li>
                <li className="flex items-start">
                  <span className="text-amber-400 mr-2">•</span>
                  <span className="text-slate-300 font-light">Planning progressive adventures that build over time</span>
                </li>
              </ul>
            </div>
            
            <h2 className="text-3xl font-light text-white mb-6 font-serif">
              The Gift That Keeps Giving
            </h2>
            
            <p className="text-slate-300 font-light leading-relaxed mb-8">
              A week of family vacations isn't just about the seven days you get to chill together in a new place. It's really about the bonds you strengthen, the laughs you share, and all the stories you'll be telling for years down the road. Whether you're on a tropical beach, a snowy peak, or exploring a new city, every moment is tailored to you.
            </p>
            
            <p className="text-slate-300 font-light leading-relaxed mb-8">
              It's really about the amazing memories you'll make that last a lifetime. These shared moments turn into the stories that shape your family, the fun adventures that spark ideas for future trips, and the connections that get even stronger every time you share them.
            </p>
            
            <p className="text-slate-300 font-light leading-relaxed mb-8">
              The memories you make together are the greatest inheritance you can leave your children. They'll hold onto these memories, share them with their families, and keep the tradition alive of spending quality time together and making special moments.
            </p>
            
            <p className="text-slate-300 font-light leading-relaxed mb-12">
              Whether you snag this amazing chance or whip up your own unique family adventure, just keep in mind that the key part is to really be there for each other. The destination may fade from memory, but the feeling of being loved, valued, and part of something special will last forever.
            </p>
          </motion.div>
          
          {/* Your Moment is Waiting */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-amber-600/20 to-amber-500/20 p-10 rounded-xl mb-12 border border-amber-500/30"
          >
            <h2 className="text-3xl font-light text-white mb-6 font-serif text-center">
              Your Moment Is Waiting
            </h2>
            
            <div className="space-y-6 text-center">
              <p className="text-slate-300 font-light leading-relaxed">
                Right now, somewhere out there, a villa is being prepared. Fresh linens are being smoothed over beds, local chefs are perfecting recipes, and a tour guide is thinking about the smile on your child's face when they see something extraordinary for the first time.
              </p>
              
              <p className="text-slate-300 font-light leading-relaxed">
                That holiday — your holiday — is waiting. All it needs is your name on the guest list.
              </p>
              
              <p className="text-slate-300 font-light leading-relaxed">
                Opportunities like this don't come often. Life has a way of filling our calendars with deadlines, errands, and obligations, but this? This is your chance to press pause and step into a week where joy is the only priority.
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsContactFormOpen(true)}
                className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-4 mt-4 rounded-full hover:shadow-xl transition-all"
              >
                Enter the Competition
              </motion.button>
              
              <p className="text-slate-300 font-light leading-relaxed mt-6">
                Picture your family laughing together in the golden light of a new place. Imagine the stories you'll tell. And then go make them real.
              </p>
              
              <p className="text-amber-400 font-light italic text-xl mt-4">
                Because memories don't just happen — we create them. And this one is yours for the taking.
              </p>
            </div>
          </motion.div>
          
          <div className="text-center mb-12">
            <p className="text-slate-300 font-light text-lg">
              Start planning your memory-making adventure today—because the best time to create tomorrow's favorite family stories is right now.
            </p>
          </div>

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
                onClick={handleLike}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
                  hasLiked ? 'bg-amber-500 text-white' : 'bg-slate-800/50 text-white hover:bg-slate-700/50'
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
              <SafeIcon icon={FiStar} className="text-lg" />
              <SafeIcon icon={FiStar} className="text-lg" />
              <SafeIcon icon={FiStar} className="text-lg" />
              <SafeIcon icon={FiStar} className="text-lg" />
              <SafeIcon icon={FiStar} className="text-lg" />
            </div>
          </motion.div>
          
          {/* Related Articles */}
          <div className="mt-20">
            <h3 className="text-2xl font-light text-white mb-8 font-serif">
              More Family Travel Inspiration
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Top Family-Friendly Resorts for 2025",
                  image: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?w=400&h=300&fit=crop",
                  category: "Family Travel",
                  excerpt: "Discover the ultimate family-friendly resorts offering exceptional amenities and activities for all ages."
                },
                {
                  title: "Creating Meaningful Family Travel Traditions",
                  image: "https://images.unsplash.com/photo-1541280910158-c4e14f9c94a3?w=400&h=300&fit=crop",
                  category: "Travel Tips",
                  excerpt: "Learn how to establish travel traditions that strengthen family bonds and create lasting memories."
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

      {/* Contact Form Modal */}
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
                  <h3 className="text-xl text-white font-light mb-2">Entry Submitted!</h3>
                  <p className="text-slate-400 text-sm">
                    Thank you for entering the family holiday competition. We'll be in touch shortly.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-xl text-white font-light mb-4 text-center">
                    Enter to Win a Bespoke Family Holiday
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
                        name="familySize"
                        placeholder="Family Size (including ages of children)"
                        value={formData.familySize}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500"
                      />
                    </div>
                    
                    <div>
                      <textarea
                        name="message"
                        placeholder="Tell us why your family deserves this bespoke holiday experience..."
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="3"
                        required
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
                      {isSubmitting ? 'Submitting...' : 'Enter Competition'}
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
              Ready to Create Unforgettable Family Memories?
            </h3>
            
            <p className="text-lg mb-6 opacity-90">
              Enter our competition for a chance to win a fully customized family holiday experience tailored to your family's unique preferences and interests.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsContactFormOpen(true)}
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all"
            >
              Enter Now
            </motion.button>
          </motion.div>
          
          <div className="text-center">
            <p className="text-slate-400 text-sm">
              Please don't forget to leave a review.
            </p>
            
            <p className="text-amber-400 mt-2">
              Explore more by joining me at Seetaluxuryescape.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FamilyHolidaysPost;
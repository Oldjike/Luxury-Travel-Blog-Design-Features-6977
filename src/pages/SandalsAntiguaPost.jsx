import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const {FiArrowLeft,FiClock,FiUser,FiHeart,FiShare2,FiBookmark,FiMapPin,FiCalendar,FiStar,FiAward} = FiIcons;

const SandalsAntiguaPost = () => {
  const post = {
    id: 'sandals-grande-antigua',
    title: "Sandals Grande Antigua: Your Ultimate Caribbean Paradise",
    subtitle: "Discover luxury, romance, and adventure on one of the Caribbean's most beautiful beaches",
    image: "https://images.unsplash.com/photo-1559475555-6f5a22e60b5a?w=1200&h=800&fit=crop",
    author: 'Seeta Luxury Travel Team',
    readTime: '15 min read',
    date: '2025-01-20',
    category: 'Caribbean Luxury'
  };

  const sections = [
    {
      title: "Location of Sandals Grande Antigua",
      content: "Nestled on the eastern coast of Antigua, Sandals Grande Antigua boasts a stunning location along Dickenson Bay. This beautiful stretch of beach, widely regarded as one of the best in the Caribbean, offers crystal-clear waters and soft, white sands that take your breath away. Imagine waking up to the sound of waves lapping at the shore and the warm sun shining through your window. It's truly paradise!",
      image: "https://images.unsplash.com/photo-1559475555-6f5a22e60b5a?w=800&h=500&fit=crop",
      icon: "🏖️"
    },
    {
      title: "History of Sandals Grande Antigua",
      content: "Established in 1996, Sandals Grande Antigua has a rich history of providing luxurious, all-inclusive experiences to couples seeking romance and adventure. This resort has undergone several renovations, evolving into a premier destination for honeymooners and vacationers alike. With its blend of Caribbean charm and contemporary design, it's no wonder guests keep returning to create unforgettable memories. Whether you are soaking in the sun or enjoying a night of fine dining, the legacy of Sandals Grande Antigua is sure to leave you enchanted.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop",
      icon: "🏛️"
    },
    {
      title: "Accommodation Options",
      content: "At Sandals Grande Antigua, you'll find a variety of accommodation options tailored to suit every couple's desire. From luxurious rooms to breathtaking suites and private villas, there's truly something for everyone. The luxury rooms are perfect retreats designed to evoke tranquility, showcasing tropical decor, plush bedding, and stunning views. For a more indulgent stay, the suites and villas offer unparalleled luxury with private plunge pools, butler service, and expansive terraces. Each accommodation comes equipped with high-definition smart TVs, fully stocked minibars, Wi-Fi access, luxurious bath products, and 24/7 room service.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop",
      icon: "🏨"
    },
    {
      title: "Dining Experience",
      content: "Prepare your taste buds for an unforgettable culinary journey at Sandals Grande Antigua. With multiple restaurants and bars on-site, you'll be spoiled for choice! From Caribbean cuisine to international favorites, each venue offers a unique dining experience. For special occasions, fine dining options like the Mediterranean-themed 'Casanova' offer elegant settings and gourmet dishes. Casual dining spots serve up delicious bites without the fuss, while special dining experiences include beachside candlelit dinners and unique Chef's Table experiences.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
      icon: "🍷"
    },
    {
      title: "Activities and Facilities",
      content: "Sandals Grande Antigua is a playground for adventure enthusiasts! The resort offers a range of water sports including scuba diving, snorkeling, paddleboarding, and kayaking. For those interested in exploring underwater life, scuba diving excursions with professional instructors reveal vibrant coral reefs and fascinating marine creatures. Land activities include beach volleyball, tennis, and leisurely strolls in serene gardens. Golf lovers will enjoy nearby courses with scenic views, while the state-of-the-art fitness center and rejuvenating spa options provide wellness-focused experiences.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop",
      icon: "🏄‍♂️"
    },
    {
      title: "Wedding and Event Packages",
      content: "If you're dreaming of a destination wedding, Sandals Grande Antigua offers an array of wedding packages designed to make your big day unforgettable! From intimate ceremonies to grand celebrations, each package is thoughtfully curated with various ceremony settings from picturesque beachfront to lush gardens. Wedding packages include floral arrangements, wedding cakes, and dedicated wedding planners, with options for enhanced decor and private receptions. Expert event planners ensure a seamless experience, guiding you through every detail to create your perfect celebration in paradise.",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=500&fit=crop",
      icon: "💒"
    },
    {
      title: "Sustainability and Community Initiatives",
      content: "At Sandals Grande Antigua, sustainability beautifully complements your paradise experience. The resort prioritizes environmental efforts including energy-efficient usage, water conservation, and reduction of single-use plastics. They participate in conservation programs focusing on marine life protection and coral reef restoration. The resort also supports community involvement through local initiatives and businesses, offering guests opportunities to engage in cultural experiences that benefit the local economy. It's a beautiful way to enjoy paradise while making a positive difference!",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop",
      icon: "🌱"
    }
  ];

  const highlights = [
    {
      icon: "🏖️",
      title: "Dickenson Bay Location",
      description: "One of the Caribbean's most beautiful beaches"
    },
    {
      icon: "🏨",
      title: "Luxury Accommodations",
      description: "Rooms, suites, and villas with stunning views"
    },
    {
      icon: "🍽️",
      title: "Multiple Dining Options",
      description: "Fine dining to casual beachside experiences"
    },
    {
      icon: "🏄‍♂️",
      title: "Water & Land Activities",
      description: "Scuba diving, golf, spa, and more"
    },
    {
      icon: "💒",
      title: "Wedding Packages",
      description: "Perfect destination wedding experiences"
    },
    {
      icon: "🌱",
      title: "Eco-Friendly Practices",
      description: "Sustainability and community support"
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
              Why Choose Sandals Grande Antigua?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Discover what makes this Caribbean paradise exceptional
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
              Welcome to your ultimate Caribbean escape! Sandals Grande Antigua stands as a beacon of luxury and romance in the heart of the Caribbean, offering couples an unparalleled all-inclusive experience on one of the region's most stunning beaches.
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

            {/* Awards and Recognition */}
            <div className="bg-gradient-to-r from-amber-600/20 to-amber-500/20 p-8 rounded-xl mb-16 border border-amber-500/30">
              <div className="flex items-center mb-4">
                <SafeIcon icon={FiAward} className="text-amber-400 text-2xl mr-3" />
                <h3 className="text-2xl font-light text-white font-serif">Awards and Recognition</h3>
              </div>
              <p className="text-slate-300 mb-4">
                The resort has garnered impressive ratings and numerous awards over the years, highlighting its commitment to excellence. Notably, Sandals Grande Antigua was named one of the "Top All-Inclusive Resorts" by various travel magazines, further solidifying its reputation.
              </p>
              <p className="text-amber-400 font-light italic">
                With exceptional testimonials and accolades, it's no wonder this resort is a favorite destination for couples seeking romance and adventure. Your dream getaway awaits!
              </p>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-white mb-6 font-serif">
                Ready for Your Caribbean Paradise?
              </h2>
              <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
                Experience the perfect blend of luxury, adventure, and romance at Sandals Grande Antigua. From pristine beaches to world-class amenities, every moment is designed to create unforgettable memories.
              </p>
              <p className="text-lg text-amber-400 font-light italic">
                Your ultimate Caribbean escape is just a booking away!
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
              Ready to Book Your Caribbean Dream?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contact SeetaLuxuryEscape today for personalized quotes and exclusive packages for Sandals Grande Antigua. Let us help you create your perfect romantic getaway.
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
                <span>28 Likes</span>
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
              <span className="text-white ml-2">4.9 (245 reviews)</span>
            </div>
          </motion.div>

          {/* Related Articles */}
          <div className="mt-20">
            <h3 className="text-2xl font-light text-white mb-8 font-serif">
              More Caribbean Luxury Destinations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Sandals Royal Caribbean - Jamaica",
                  image: "https://images.unsplash.com/photo-1559719740-f34c7b6c2f1b?w=400&h=300&fit=crop",
                  category: "Caribbean Luxury",
                  excerpt: "Experience the ultimate in Jamaican luxury with overwater bungalows and pristine beaches."
                },
                {
                  title: "Excellence Playa Mujeres - Mexico",
                  image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&h=300&fit=crop",
                  category: "Mexican Riviera",
                  excerpt: "Discover adults-only luxury on the pristine beaches of Mexico's Caribbean coast."
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

export default SandalsAntiguaPost;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const { FiArrowLeft, FiClock, FiUser, FiHeart, FiShare2, FiBookmark, FiMapPin, FiCalendar, FiStar, FiCompass } = FiIcons;

const MajesticElegancePost = () => {
  const post = {
    id: 'majestic-elegance-costa-mujeres',
    title: "A Luxurious Escape: Exploring Majestic Elegance Costa Mujeres",
    subtitle: "Experience luxury redefined at the brand-new Majestic Mirage Costa Mujeres – All-Suite Resort in Mexico",
    image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&h=800&fit=crop",
    author: 'Seeta Luxury Travel Team',
    readTime: '16 min read',
    date: '2025-01-25',
    category: 'Mexican Riviera'
  };

  const sections = [
    {
      title: "Arrival Experience at Majestic Elegance Resorts",
      content: "Upon arrival at Majestic Elegance Resorts, guests are greeted with a warm welcome reception that sets the tone for their entire stay. The staff is attentive and eager to assist with any needs or questions guests may have. Whether arriving by car or shuttle, guests will feel like VIPs from the moment they step foot on the property. The check-in process is seamless and efficient, allowing guests to start enjoying their vacation as soon as possible. Guests are provided with all necessary information about the resort amenities, dining options, and activities available during their stay. The staff is friendly and accommodating, ensuring that each guest feels valued and well taken care of from the moment they arrive.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop",
      icon: "🏨",
      highlights: [
        "Warm welcome reception with refreshing drinks",
        "Efficient check-in process with personalized attention",
        "Impressive lobby with elegant decor",
        "Attentive staff to assist with luggage and orientation"
      ]
    },
    {
      title: "Luxurious Accommodations",
      content: "The accommodations at Majestic Elegance Resorts are designed with luxury and comfort in mind. Each suite is elegantly appointed with modern furnishings, plush bedding, and upscale amenities. Guests can choose from a variety of room categories to suit their preferences, whether they prefer garden views or oceanfront panoramas. From spacious balconies or terraces to jacuzzi tubs and minibars stocked with premium beverages, every detail has been carefully considered to ensure maximum comfort and convenience for guests during their stay. The resort offers Junior Suites with Jacuzzi, Rooftop Suites with private plunge pools, and Oceanfront Villas with direct beach access.",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&h=500&fit=crop",
      icon: "🛏️",
      highlights: [
        "Elegantly appointed suites with modern furnishings",
        "Private balconies with stunning views",
        "Luxurious bathrooms with rainfall showers",
        "Complimentary Wi-Fi and flat-screen TVs"
      ]
    },
    {
      title: "Gourmet Dining Experiences",
      content: "Guests at Majestic Elegance Costa Mujeres can indulge in a culinary journey with the resort's gourmet dining options. The main buffet restaurant offers a wide variety of options for breakfast, lunch, and dinner with freshly prepared dishes from different cuisines, including local specialties and international favorites. For those seeking a more intimate experience, several a la carte restaurants feature unique menus and ambiance, allowing guests to sample a variety of flavors during their stay. From L'Essence Restaurant serving French fine dining to Himitsu Restaurant offering Asian fusion cuisine and El Asador Steakhouse with premium cuts of meat grilled to perfection, there's something to satisfy every palate. For added convenience, 24-hour room service ensures you can enjoy a meal anytime, whether it's a late-night snack or breakfast in bed.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=500&fit=crop",
      icon: "🍽️",
      highlights: [
        "Multiple dining venues including buffet and a la carte options",
        "International cuisines including Mexican, Italian, Asian, and steakhouse",
        "Themed dinner nights with special menus",
        "24-hour room service available"
      ]
    },
    {
      title: "Activities and Recreation",
      content: "Majestic Elegance Costa Mujeres is a playground for adventure enthusiasts! The resort offers a range of water sports including scuba diving, snorkeling, paddleboarding, and kayaking. For those interested in exploring underwater life, scuba diving excursions with professional instructors reveal vibrant coral reefs and fascinating marine creatures. Land activities include beach volleyball, tennis, and leisurely strolls in serene gardens. Guests can also participate in yoga classes, join guided nature hikes through the surrounding wilderness led by experienced naturalists, or enjoy river rafting adventures down nearby rapids. For those who prefer relaxation, multiple swimming pools, including an infinity pool overlooking the ocean and a pool with swim-up bar, provide the perfect setting to unwind.",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&h=500&fit=crop",
      icon: "🏄‍♂️",
      highlights: [
        "Water sports including snorkeling, scuba diving, and paddleboarding",
        "Land activities such as tennis and beach volleyball",
        "Daily fitness classes and yoga sessions",
        "Multiple swimming pools including infinity pool and swim-up bar"
      ]
    },
    {
      title: "Spa and Wellness",
      content: "For those seeking relaxation and rejuvenation, the resort's spa offers a range of treatments designed to pamper and revitalize. One of the most popular spa services is massage therapy, with options including Swedish, deep tissue, hot stone, and aromatherapy massages. The skilled massage therapists are trained to provide a customized experience based on each guest's needs and preferences. The spa also offers facial treatments to improve skin health and appearance, with options such as hydrating facials, anti-aging treatments, and brightening facials. Body treatments including exfoliating scrubs, mud wraps, and moisturizing body masks provide a full-body pampering experience. After your treatment, unwind in the relaxation lounge or take advantage of the sauna and steam room facilities.",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=500&fit=crop",
      icon: "💆‍♀️",
      highlights: [
        "Variety of massage therapies including Swedish and hot stone",
        "Facial treatments for all skin types",
        "Body treatments including scrubs and wraps",
        "Sauna and steam room facilities"
      ]
    },
    {
      title: "Entertainment and Nightlife",
      content: "The entertainment at Majestic Elegance Costa Mujeres ensures that the fun continues long after the sun sets. Guests can enjoy live music performances by local artists every evening at the outdoor patio, with talented musicians playing a variety of genres. The resort also hosts themed dinner nights, from Italian pasta nights to Mexican fiestas, each offering a unique dining experience with special menus inspired by the theme of the night. After dinner, head to one of the resort's bars or lounges for handcrafted cocktails and entertainment, or try your luck at the casino. The daily entertainment program includes activities for all ages, ensuring there's never a dull moment during your stay.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop",
      icon: "🎭",
      highlights: [
        "Live music performances featuring local artists",
        "Themed dinner nights with special menus",
        "Bars and lounges offering handcrafted cocktails",
        "Casino for gaming enthusiasts"
      ]
    },
    {
      title: "Exploring Beyond the Resort",
      content: "While the resort offers endless delight, the magic extends beyond its borders. Guests can venture out to explore local attractions such as the nearby ancient Mayan ruins at Chichen Itza, the colonial architecture of Valladolid, or the natural beauty of Cenote Ik Kil. For those who enjoy outdoor activities, options include snorkeling or scuba diving in the crystal-clear waters off the coast, zip-lining through the jungle canopy, horseback riding on the beach, or deep-sea fishing for marlin and sailfish. The resort's concierge can help arrange these excursions, ensuring a seamless and enjoyable experience as you discover the rich cultural heritage and natural wonders of the region.",
      image: "https://images.unsplash.com/photo-1562601579-599dec564e06?w=800&h=500&fit=crop",
      icon: "🗺️",
      highlights: [
        "Ancient Mayan ruins at Chichen Itza",
        "Snorkeling and scuba diving excursions",
        "Zip-lining through the jungle canopy",
        "Cenote diving adventures"
      ]
    }
  ];

  const amenities = [
    {
      icon: "🏖️",
      title: "Pristine Beachfront",
      description: "White sand beaches with crystal-clear waters"
    },
    {
      icon: "🏊‍♂️",
      title: "Multiple Pools",
      description: "Including infinity pools and swim-up bars"
    },
    {
      icon: "🍽️",
      title: "Gourmet Dining",
      description: "Multiple restaurants with international cuisine"
    },
    {
      icon: "🍸",
      title: "Premium Drinks",
      description: "Top-shelf spirits and signature cocktails"
    },
    {
      icon: "💆‍♀️",
      title: "Luxury Spa",
      description: "Full-service spa with premium treatments"
    },
    {
      icon: "🏋️‍♂️",
      title: "Fitness Center",
      description: "State-of-the-art equipment and classes"
    },
    {
      icon: "🎭",
      title: "Entertainment",
      description: "Daily activities and nightly shows"
    },
    {
      icon: "👨‍👩‍👧‍👦",
      title: "Family-Friendly",
      description: "Activities for all ages"
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
              Embark on a romantic getaway at Majestic Elegance Resorts Costa Mujeres and experience luxury redefined at the brand-new Majestic Mirage Costa Mujeres – All-Suite Resort in Mexico. Book now for impressive pre-opening rates starting January 15!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="py-12 px-6 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-light text-white mb-4 font-serif">
              Resort Amenities & Features
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Discover what makes Majestic Elegance Costa Mujeres an exceptional luxury destination
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-700/30 p-6 rounded-xl text-center hover:bg-slate-700/50 transition-all"
              >
                <div className="text-4xl mb-4">{amenity.icon}</div>
                <h3 className="text-white font-medium mb-2">{amenity.title}</h3>
                <p className="text-slate-400 text-sm">{amenity.description}</p>
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
            {sections.map((section, index) => (
              <div key={index} className="mb-20">
                <div className="flex items-start mb-6">
                  <span className="text-4xl mr-4 mt-2">{section.icon}</span>
                  <div>
                    <h2 className="text-3xl font-light text-white font-serif mb-2">
                      {section.title}
                    </h2>
                  </div>
                </div>
                
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-6`}>
                  <div className="md:w-3/5">
                    <p className="text-slate-300 font-light leading-relaxed text-lg">
                      {section.content}
                    </p>
                    
                    <div className="mt-6 bg-slate-800/50 p-5 rounded-lg border border-slate-700/50">
                      <h4 className="text-amber-400 mb-3">Highlights:</h4>
                      <ul className="space-y-2">
                        {section.highlights.map((highlight, i) => (
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
                      src={section.image}
                      alt={section.title}
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Special Offer */}
            <div className="bg-gradient-to-r from-amber-600/20 to-amber-500/20 p-10 rounded-xl mb-16 border border-amber-500/30">
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiCompass} className="text-amber-400 text-3xl mr-4" />
                <h3 className="text-2xl font-light text-white font-serif">Pre-Opening Special Offer</h3>
              </div>
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                Take advantage of our exclusive pre-opening rates for Majestic Mirage Costa Mujeres starting January 15. Book now and be among the first to experience this brand-new luxury all-suite resort at special introductory prices.
              </p>
              <p className="text-amber-400 font-light italic text-lg">
                Contact our luxury travel specialists today to secure your preferred dates and receive complimentary amenities exclusive to SeetaLuxuryEscape clients.
              </p>
            </div>

            {/* Conclusion */}
            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-white mb-6 font-serif">
                Your Mexican Riviera Paradise Awaits
              </h2>
              <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
                Majestic Elegance Costa Mujeres offers a luxurious and unforgettable escape for guests seeking a blend of relaxation, adventure, and top-notch hospitality. With a wide range of activities, exquisite accommodations, and impeccable service, this resort provides the perfect setting for a truly memorable vacation experience.
              </p>
              <p className="text-lg text-amber-400 font-light italic">
                Discover the ultimate romantic getaway at Majestic Mirage Costa Mujeres, a luxurious all-suite resort redefining luxury in Mexico.
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
              Ready to Experience Majestic Elegance?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Contact SeetaLuxuryEscape today for personalized quotes and exclusive packages for Majestic Elegance Costa Mujeres. Let us help you create your perfect Mexican getaway.
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
                <span>35 Likes</span>
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
              <span className="text-white ml-2">5.0 (58 reviews)</span>
            </div>
          </motion.div>

          {/* Related Articles */}
          <div className="mt-20">
            <h3 className="text-2xl font-light text-white mb-8 font-serif">
              More Mexican Riviera Experiences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Excellence Playa Mujeres - Adults-Only Luxury",
                  image: "https://images.unsplash.com/photo-1518638150340-f706e86654de?w=400&h=300&fit=crop",
                  category: "Mexican Riviera",
                  excerpt: "Discover adults-only luxury on the pristine beaches of Mexico's Caribbean coast."
                },
                {
                  title: "Secrets Maroma Beach - Romantic Getaway",
                  image: "https://images.unsplash.com/photo-1559475555-6f5a22e60b5a?w=400&h=300&fit=crop",
                  category: "Couples Retreats",
                  excerpt: "Experience romance and luxury on one of Mexico's most beautiful beaches."
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

export default MajesticElegancePost;
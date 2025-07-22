import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import Header from '../components/Header';
import Footer from '../components/Footer';

const { FiArrowLeft, FiClock, FiUser, FiHeart, FiShare2, FiBookmark, FiMapPin, FiCalendar, FiStar, FiCompass } = FiIcons;

const LuxuryRetreatsPost = () => {
  const post = {
    id: 'luxury-retreats-transformation',
    title: "5 Exclusive Luxury Retreats To Transform Your Travel Experience",
    subtitle: "Where every breath becomes a prayer and every experience writes itself into the very fabric of who you are",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=800&fit=crop",
    author: 'Seeta Luxury Travel Team',
    readTime: '18 min read',
    date: '2025-01-21',
    category: 'Transformative Travel'
  };

  const retreats = [
    {
      title: "Amanjiwo – Java, Indonesia",
      subtitle: "Where Ancient Whispers Meet Modern Souls",
      content: "Picture yourself awakening to the gentle chanting of Buddhist monks drifting across the misty valley, the magnificent Borobudur Temple rising like a spiritual beacon in the distance. At Amanjiwo, you're not just staying near one of the world's most sacred sites—you're becoming part of its living, breathing story. This isn't merely accommodation; it's a pilgrimage wrapped in silk and marble. The resort's architecture mirrors the temple's sacred geometry, creating a seamless flow between the earthly and the divine. As you participate in the mystical Ruwatan spiritual procession, feeling the weight of centuries-old traditions flowing through you, something profound shifts within your soul. The traditional Javanese healing rituals at the spa don't just pamper your body—they cleanse generations of stress and worry, leaving you feeling reborn. When you draw back the bow in Jemparingan archery, you're not just hitting targets; you're connecting with warrior traditions that have shaped the spirit of Java for centuries. Here, luxury isn't about thread count—it's about the threads that connect you to something infinitely greater than yourself.",
      image: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=800&h=500&fit=crop",
      icon: "🏯",
      location: "Java, Indonesia"
    },
    {
      title: "Euphoria Retreat – Greece",
      subtitle: "A Symphony of Ancient Wisdom and Modern Healing",
      content: "Nestled in the mystical Peloponnese mountains, where gods once walked and heroes were born, Euphoria Retreat beckons to those souls seeking to rediscover their own divine nature. This is where the ancient Greeks understood something we've almost forgotten—that true luxury lies in the harmony between mind, body, and spirit. The moment you step into the Byzantine Hammam, you're transported through time. The warm marble beneath your feet has witnessed the hopes and dreams of countless souls seeking purification. As the traditional cleansing rituals unfold, layers of modern stress dissolve like morning mist. The cold plunge that follows isn't just invigorating—it's baptismal, awakening every cell in your body to vibrant new life. In the Finnish sauna, surrounded by the therapeutic embrace of ancient wood and healing heat, you'll find yourself shedding not just toxins, but old versions of yourself that no longer serve your highest good. The Waterwell Kneipp Therapy becomes a dance with water itself—each temperature change a reminder that we, too, can adapt, flow, and emerge stronger. This isn't just wellness; it's a homecoming to the powerful, radiant being you were always meant to be.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=500&fit=crop",
      icon: "🏛️",
      location: "Peloponnese, Greece"
    },
    {
      title: "Ananda in the Himalayas – India",
      subtitle: "The Sacred Palace of Inner Awakening",
      content: "High in the foothills of the Himalayas, where the air itself seems to vibrate with ancient wisdom, stands a palace that has witnessed the rise and fall of empires. But Ananda offers something far more precious than royal heritage—it offers the possibility of discovering the royalty within your own soul. This former Maharaja's palace has been transformed into a sanctuary where every stone holds the intention of healing, every room whispers of transformation. As you practice yoga on terraces overlooking the sacred Ganges, feeling the mountain air fill your lungs and your heart, you realize this isn't just exercise—it's a conversation with the divine. The Ayurvedic treatments here don't just address symptoms; they heal the root causes that have been buried deep within your being for lifetimes. When the masters share their wisdom in intimate Vedanta talks, their words don't just reach your ears—they penetrate your soul, awakening truths you've always known but forgotten. In the meditation halls, surrounded by the powerful silence of the Himalayas, you'll discover that the greatest luxury of all is finding your way back home to yourself.",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop",
      icon: "🏔️",
      location: "Himalayas, India"
    },
    {
      title: "Kasbah Tamadot – Morocco",
      subtitle: "Sir Richard Branson's Portal to Berber Magic",
      content: "Perched in the Atlas Mountains like a jewel in the crown of Morocco, Kasbah Tamadot is more than Sir Richard Branson's personal retreat—it's a gateway to the soul of North Africa. Here, amidst the breathtaking beauty of Berber architecture and the intoxicating scent of orange blossoms, you'll discover that luxury isn't about what you possess, but about how deeply you can connect with the world around you. In the traditional cooking classes, as your hands work the dough for fresh bread and the aromatic spices dance in the tagine, you're not just learning recipes—you're participating in rituals that have nourished families for generations. Each technique passed down by local artisans carries with it stories of resilience, creativity, and the unbreakable human spirit. The Moroccan Hammam experience becomes a ritual of rebirth. As skilled hands work the traditional black soap into your skin, and the eucalyptus steam opens every pore, you feel layers of your old life melting away. The intensive massages that follow don't just release physical tension—they free emotional blocks you didn't even know existed. When you emerge from the aromatherapy session, surrounded by the scents of rose and argan, you're not the same person who entered. You're someone who has been touched by the magic of Morocco and will carry its warmth forever.",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6d47d9d?w=800&h=500&fit=crop",
      icon: "🕌",
      location: "Atlas Mountains, Morocco"
    },
    {
      title: "Six Senses Douro Valley – Portugal",
      subtitle: "Where Terroir Meets Soul",
      content: "In the rolling hills of Portugal's Douro Valley, where ancient vines cling to terraced slopes like prayers carved into the earth, Six Senses has created something extraordinary—a place where the art of winemaking becomes a metaphor for the art of living. This 19th-century manor doesn't just house guests; it embraces them with the warmth of Portuguese hospitality and the wisdom of generations who have worked this sacred land. As you walk through the vineyards at golden hour, feeling the ancient soil beneath your feet and watching the Douro River wind through the valley like liquid silver, you understand that you're witnessing something eternal—the marriage between human dedication and nature's generosity. The Portuguese cooking classes become poetry in motion as you learn to prepare traditional dishes that tell the story of this remarkable region. Each ingredient speaks of sun and soil, tradition and innovation. In the spa, the unique Alchemy Bar doesn't just serve rejuvenating beverages—it offers liquid wisdom, each sip designed to enhance your journey of self-discovery. The cryotherapy sessions shock your system into vivid awareness, while the various saunas and steam rooms provide sanctuaries for deep reflection. But perhaps the most transformative experience comes simply from sitting by the Vitality Pool at sunset, a glass of local wine in hand, realizing that this moment—this perfect, unrepeatable moment—is what true luxury has always been about.",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=500&fit=crop",
      icon: "🍷",
      location: "Douro Valley, Portugal"
    }
  ];

  const highlights = [
    {
      icon: "🧘‍♀️",
      title: "Spiritual Awakening",
      description: "Connect with ancient wisdom and sacred traditions"
    },
    {
      icon: "🌿",
      title: "Holistic Healing",
      description: "Transform mind, body, and spirit through authentic practices"
    },
    {
      icon: "🏛️",
      title: "Cultural Immersion",
      description: "Experience living traditions and local artisan crafts"
    },
    {
      icon: "🍃",
      title: "Natural Sanctuaries",
      description: "Find peace in breathtaking natural settings"
    },
    {
      icon: "✨",
      title: "Personal Transformation",
      description: "Return home fundamentally changed and renewed"
    },
    {
      icon: "🎨",
      title: "Authentic Luxury",
      description: "Experience luxury that nourishes the soul"
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
              The Elements of Transformation
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Discover what makes these retreats truly transformative
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
              There comes a moment in every traveller's journey when the soul yearns for something more profound than beautiful sunsets and Instagram-worthy moments. It's that deep, almost inexplicable longing to be touched, changed, and awakened by the places we visit. These five extraordinary luxury retreats don't just promise comfort—they offer the sacred gift of transformation, where every breath becomes a prayer and every experience writes itself into the very fabric of who you are.
            </p>

            {retreats.map((retreat, index) => (
              <div key={index} className="mb-20">
                <div className="flex items-start mb-6">
                  <span className="text-4xl mr-4 mt-2">{retreat.icon}</span>
                  <div>
                    <h2 className="text-3xl font-light text-white font-serif mb-2">
                      {retreat.title}
                    </h2>
                    <p className="text-amber-400 font-light italic text-lg">
                      {retreat.subtitle}
                    </p>
                    <div className="flex items-center text-slate-400 mt-2">
                      <SafeIcon icon={FiMapPin} className="text-sm mr-1" />
                      <span className="text-sm">{retreat.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 mb-6`}>
                  <div className="md:w-3/5">
                    <p className="text-slate-300 font-light leading-relaxed text-lg">
                      {retreat.content}
                    </p>
                  </div>
                  <div className="md:w-2/5">
                    <motion.img
                      src={retreat.image}
                      alt={retreat.title}
                      className="w-full h-80 object-cover rounded-xl shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            ))}

            {/* Transformative Message */}
            <div className="bg-gradient-to-r from-amber-600/20 to-amber-500/20 p-10 rounded-xl mb-16 border border-amber-500/30">
              <div className="flex items-center mb-6">
                <SafeIcon icon={FiCompass} className="text-amber-400 text-3xl mr-4" />
                <h3 className="text-2xl font-light text-white font-serif">The Sacred Gift of Transformative Travel</h3>
              </div>
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                These five retreats understand a truth that the hospitality industry is only beginning to grasp—that modern travelers aren't seeking escape from their lives; they're seeking a deeper connection to life itself. They offer the rarest luxury of all: the chance to return home not just rested, but transformed.
              </p>
              <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                In our hyperconnected, always-on world, these sacred spaces provide something our souls desperately crave—the permission to pause, to breathe, to remember who we really are beneath all the roles we play and masks we wear. They remind us that we are not human beings having a spiritual experience, but spiritual beings having a gloriously human adventure.
              </p>
              <p className="text-amber-400 font-light italic text-lg">
                When you invest in experiences like these, you're not just booking a vacation—you're investing in your own evolution. You're choosing to be brave enough to let travel change you, to return home carrying new wisdom, deeper compassion, and an unshakeable knowing that you are capable of far more beauty, joy, and connection than you ever imagined.
              </p>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl font-light text-white mb-6 font-serif">
                The Journey Home to Yourself
              </h2>
              <p className="text-xl text-slate-300 font-light leading-relaxed mb-8">
                The question isn't whether you can afford to experience such transformative luxury. The question is: can you afford not to? Your soul has been waiting patiently for you to say yes to the journey that will finally bring you home to yourself.
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
              Ready to Transform Your Travel Experience?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let SeetaLuxuryEscape guide you to the transformative retreat that will awaken your soul and change your life forever.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-amber-600 px-8 py-4 rounded-full font-medium hover:shadow-xl transition-all"
            >
              Begin Your Transformation
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
                <span>67 Likes</span>
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
              <span className="text-white ml-2">5.0 (89 reviews)</span>
            </div>
          </motion.div>

          {/* Related Articles */}
          <div className="mt-20">
            <h3 className="text-2xl font-light text-white mb-8 font-serif">
              More Transformative Journeys
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "Sacred Spaces: Spiritual Retreats Around the World",
                  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
                  category: "Spiritual Travel",
                  excerpt: "Discover ancient temples, meditation centers, and sacred sites that offer profound spiritual awakening."
                },
                {
                  title: "Wellness Sanctuaries: Healing Retreats for Mind & Body",
                  image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop",
                  category: "Wellness Travel",
                  excerpt: "Experience holistic healing through Ayurveda, traditional medicine, and modern wellness practices."
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

export default LuxuryRetreatsPost;
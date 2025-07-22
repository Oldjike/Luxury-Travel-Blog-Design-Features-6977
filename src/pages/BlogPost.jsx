import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiArrowLeft, FiClock, FiUser, FiHeart, FiShare2, FiBookmark } = FiIcons;

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog post data
  const post = {
    id: parseInt(id),
    title: "Himalayan Wellness: A Journey to Inner Peace",
    subtitle: "Discover transformative wellness practices in the serene mountains of Bhutan",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
    author: 'Sophia Chen',
    readTime: '8 min read',
    date: '2024-01-15',
    category: 'Wellness Retreats',
    content: `
      In the heart of the Himalayas, where ancient wisdom meets modern luxury, lies a transformative experience that redefines the concept of wellness travel. Our journey to Bhutan's most exclusive wellness retreat offers more than just relaxation—it provides a gateway to profound inner transformation.

      The morning mist clings to the mountain peaks as you step onto the private terrace of your luxury suite. The silence is profound, broken only by the gentle chanting of monks from a nearby monastery. This is where your wellness journey begins—not with a schedule or agenda, but with a moment of pure presence.

      ## The Art of Mindful Luxury

      At this exclusive retreat, luxury isn't measured in thread counts or marble finishes, though both are exquisite. Instead, it's found in the thoughtful curation of experiences that honor both comfort and consciousness. Each element, from the organic architecture that seems to grow from the mountainside to the locally sourced, plant-based cuisine, reflects a deep respect for the land and its spiritual heritage.

      The spa treatments here go beyond traditional wellness offerings. Master practitioners, trained in ancient Bhutanese healing arts, work with guests to create personalized healing journeys. Whether it's a hot stone therapy using stones blessed by local monks or a meditation session guided by a spiritual teacher who has spent decades in mountain caves, every experience is designed to create lasting transformation.

      ## A Day in Paradise

      Dawn breaks with a gentle invitation to join the sunrise meditation on the monastery grounds. The optional nature of all activities reflects the retreat's philosophy—healing happens when we're ready, not when we're forced. Some guests prefer to practice yoga on their private terraces, while others find peace in the infinity pool that seems to merge with the valley below.

      Breakfast is a celebration of local flavors and nutritional wisdom. Himalayan barley porridge topped with wild honey, yak butter tea, and fresh fruits grown in the retreat's organic gardens provide sustenance for both body and soul. The dining experience itself becomes a meditation on gratitude and mindful consumption.

      ## The Transformation

      What sets this experience apart is its integration of luxury and authenticity. This isn't wellness as a trend or temporary escape—it's an invitation to remember what it means to be fully alive. Guests often speak of returning home with more than just relaxation; they carry with them a new understanding of what truly nourishes the human spirit.

      The retreat's commitment to sustainability and community support means that your presence here contributes to the preservation of local traditions and the economic wellbeing of the surrounding villages. Luxury, in this context, becomes an act of conscious contribution rather than mere consumption.

      As your journey concludes, the mountains seem to whisper their final teaching: true luxury lies not in what we acquire, but in what we remember about our essential nature. The Himalayas, with their timeless wisdom and breathtaking beauty, provide the perfect backdrop for this most important of all discoveries.
    `
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-900/95 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-white hover:text-amber-400 transition-colors"
            >
              <SafeIcon icon={FiArrowLeft} className="text-xl" />
              <span>Back to Stories</span>
            </motion.button>
          </Link>
          
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-amber-400 transition-colors"
            >
              <SafeIcon icon={FiShare2} className="text-xl" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="text-white hover:text-amber-400 transition-colors"
            >
              <SafeIcon icon={FiBookmark} className="text-xl" />
            </motion.button>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-screen">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
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
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('##')) {
                return (
                  <h2 key={index} className="text-3xl font-light text-white mt-12 mb-6 font-serif">
                    {paragraph.replace('## ', '')}
                  </h2>
                );
              }
              return (
                <p key={index} className="text-slate-300 font-light leading-relaxed mb-6 text-lg">
                  {paragraph}
                </p>
              );
            })}
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
                <span>24 Likes</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-slate-800/50 text-white px-6 py-3 rounded-full hover:bg-slate-700/50 transition-all"
              >
                <SafeIcon icon={FiShare2} className="text-lg" />
                <span>Share</span>
              </motion.button>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all"
            >
              Plan Similar Journey
            </motion.button>
          </motion.div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
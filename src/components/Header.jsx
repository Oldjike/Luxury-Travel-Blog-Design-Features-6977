import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiGlobe, FiSend } = FiIcons;

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    destination: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      const subject = encodeURIComponent('New Luxury Travel Inquiry');
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Preferred Destination: ${formData.destination}
Message: ${formData.message}
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-xl' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiGlobe} className="text-white text-xl" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white tracking-tight">
                    SeetaLuxuryEscape
                  </h1>
                  <p className="text-amber-400 text-xs font-light">Luxury Travel Experiences</p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/destinations" className="text-white hover:text-amber-400 transition-colors font-light">
                Destinations
              </Link>
              <Link to="/experiences" className="text-white hover:text-amber-400 transition-colors font-light">
                Experiences
              </Link>
              <Link to="/blog/club-med-quebec-escape" className="text-white hover:text-amber-400 transition-colors font-light">
                Blog
              </Link>
              <Link to="/about" className="text-white hover:text-amber-400 transition-colors font-light">
                About
              </Link>
              <motion.button
                onClick={() => setIsContactFormOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
              >
                Plan Your Escape
              </motion.button>
            </nav>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
              <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="text-2xl" />
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-4 bg-slate-800/95 rounded-lg p-4"
            >
              <Link to="/destinations" className="block text-white hover:text-amber-400 transition-colors">
                Destinations
              </Link>
              <Link to="/experiences" className="block text-white hover:text-amber-400 transition-colors">
                Experiences
              </Link>
              <Link to="/blog/club-med-quebec-escape" className="block text-white hover:text-amber-400 transition-colors">
                Blog
              </Link>
              <Link to="/about" className="block text-white hover:text-amber-400 transition-colors">
                About
              </Link>
              <button
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsContactFormOpen(true);
                }}
                className="block w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white py-2 rounded-full text-center"
              >
                Plan Your Escape
              </button>
            </motion.div>
          )}
        </div>
      </motion.header>

      {/* Compact Contact Form Modal */}
      {isContactFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="bg-slate-800 rounded-xl max-w-md w-full p-6 relative">
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
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
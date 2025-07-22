import React,{useState,useEffect} from 'react';
import {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiMenu,FiX,FiGlobe,FiHeart,FiUser}=FiIcons;

const Header=()=> {
  const [isMenuOpen,setIsMenuOpen]=useState(false);
  const [scrolled,setScrolled]=useState(false);

  useEffect(()=> {
    const handleScroll=()=> {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll',handleScroll);
    return ()=> window.removeEventListener('scroll',handleScroll);
  },[]);

  return (
    <motion.header
      initial={{opacity: 0,y: -20}}
      animate={{opacity: 1,y: 0}}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{scale: 1.05}}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiGlobe} className="text-white text-xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">
                  <a href="https://seetaluxuryescape.com" target="_blank" rel="noopener noreferrer">
                    Seetaluxuryescape
                  </a>
                </h1>
                <p className="text-amber-400 text-xs font-light">Luxury Travel Experiences</p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/destinations"
              className="text-white hover:text-amber-400 transition-colors font-light"
            >
              Destinations
            </Link>
            <Link
              to="/experiences"
              className="text-white hover:text-amber-400 transition-colors font-light"
            >
              Experiences
            </Link>
            <Link
              to="/blog/club-med-quebec-escape"
              className="text-white hover:text-amber-400 transition-colors font-light"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-amber-400 transition-colors font-light"
            >
              About
            </Link>
            <a
              href="https://seetaluxuryescape.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-amber-400 transition-colors font-light"
            >
              Home
            </a>
            <motion.a
              href="https://seetaluxuryescape.pathfndr.io/search/trips#travel"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
            >
              Plan Your Escape
            </motion.a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={()=> setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="text-2xl" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{opacity: 0,height: 0}}
            animate={{opacity: 1,height: 'auto'}}
            exit={{opacity: 0,height: 0}}
            className="md:hidden mt-4 space-y-4 bg-slate-800/95 rounded-lg p-4"
          >
            <Link
              to="/destinations"
              className="block text-white hover:text-amber-400 transition-colors"
            >
              Destinations
            </Link>
            <Link
              to="/experiences"
              className="block text-white hover:text-amber-400 transition-colors"
            >
              Experiences
            </Link>
            <Link
              to="/blog/club-med-quebec-escape"
              className="block text-white hover:text-amber-400 transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="block text-white hover:text-amber-400 transition-colors"
            >
              About
            </Link>
            <a
              href="https://seetaluxuryescape.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white hover:text-amber-400 transition-colors"
            >
              Home
            </a>
            <a
              href="https://seetaluxuryescape.pathfndr.io/search/trips#travel"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-amber-600 to-amber-500 text-white py-2 rounded-full text-center"
            >
              Plan Your Escape
            </a>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
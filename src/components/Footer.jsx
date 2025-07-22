import React from 'react';
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiInstagram,FiTwitter,FiFacebook,FiYoutube,FiMail,FiPhone,FiMapPin,FiGlobe}=FiIcons;

const Footer=()=> {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiGlobe} className="text-white text-xl" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">
                    <a href="https://seetaluxuryescape.com" target="_blank" rel="noopener noreferrer">Seetaluxuryescape</a>
                  </h3>
                  <p className="text-amber-400 text-xs font-light">Luxury Travel Experiences</p>
                </div>
              </div>
            </Link>
            <p className="text-slate-400 font-light leading-relaxed">
              Crafting extraordinary luxury travel experiences that transform journeys into transcendent moments of discovery and wonder.
            </p>
            <div className="flex space-x-4">
              {[FiInstagram,FiTwitter,FiFacebook,FiYoutube].map((Icon,index)=> (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{scale: 1.1,y: -2}}
                  className="bg-slate-800/50 p-3 rounded-full hover:bg-amber-500/20 transition-all"
                >
                  <SafeIcon icon={Icon} className="text-lg" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-medium mb-6">Destinations</h4>
            <ul className="space-y-3">
              {['Jamaica','St. Lucia','Mexico (Riviera Maya)','Barbados','Dominican Republic','Costa Rica'].map((destination)=> (
                <li key={destination}>
                  <Link
                    to="/destinations"
                    className="text-slate-400 hover:text-amber-400 transition-colors font-light"
                  >
                    {destination}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences */}
          <div>
            <h4 className="text-lg font-medium mb-6">Experiences</h4>
            <ul className="space-y-3">
              {['Wellness Retreats','Culinary Journeys','Cultural Immersion','Adventure Escapes','Romantic Getaways','Family Luxury'].map((experience)=> (
                <li key={experience}>
                  <Link
                    to="/experiences"
                    className="text-slate-400 hover:text-amber-400 transition-colors font-light"
                  >
                    {experience}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiMail} className="text-amber-400" />
                <span className="text-slate-400 font-light">john@seetaluxuryescape.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <SafeIcon icon={FiPhone} className="text-amber-400" />
                <span className="text-slate-400 font-light">905-886-6262</span>
              </div>
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiMapPin} className="text-amber-400 mt-1" />
                <div className="text-slate-400 font-light">
                  <p>Direct Travel New Wave</p>
                  <p>1075 Bay Street</p>
                  <p>Toronto,Ontario,M5S 2B1</p>
                  <p className="mt-2 text-xs">TICO: 50023509</p>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-8">
              <h5 className="text-sm font-medium mb-3">Luxury Travel Insights</h5>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-slate-800/50 text-white placeholder-slate-500 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <motion.button
                  whileHover={{scale: 1.05}}
                  whileTap={{scale: 0.95}}
                  className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-500 text-sm font-light">
              © 2025 <a href="https://seetaluxuryescape.com" target="_blank" rel="noopener noreferrer">Seetaluxuryescape</a>. All rights reserved. Crafted with passion for luxury travel.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-slate-500 hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-500 hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-500 hover:text-amber-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
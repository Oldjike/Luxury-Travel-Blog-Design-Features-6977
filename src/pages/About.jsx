import React from 'react';
import {motion} from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const {FiUsers,FiStar,FiGlobe,FiHeart}=FiIcons;

const About=()=> {
  const team=[
    {
      name: "Seeta Chandra",
      role: "Founder & CEO",
      image: "https://seetaluxuryescape.com/wp-content/uploads/2023/03/About-Us-Seeta-300x300.png",
      bio: "With over 30 years in luxury hospitality,Seeta founded SeetaLuxuryEscape to deliver transformative travel experiences that exceed expectations."
    },
    {
      name: "John Chandra",
      role: "Co-Founder",
      image: "https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1753206623601-blob",
      bio: "Working alongside Seeta since the beginning,John helps shape our company vision and ensures every client receives exceptional service."
    }
  ];

  const values=[
    {
      icon: FiStar,
      title: "Uncompromising Excellence",
      description: "We maintain the highest standards in every aspect of our service,from the first consultation to the final journey home."
    },
    {
      icon: FiHeart,
      title: "Genuine Passion",
      description: "Our team brings authentic enthusiasm to creating experiences that resonate on a deeply personal level."
    },
    {
      icon: FiGlobe,
      title: "Responsible Luxury",
      description: "We believe luxury and sustainability can coexist,partnering with properties and experiences that share our commitment to the planet."
    },
    {
      icon: FiUsers,
      title: "Personal Connection",
      description: "We build lasting relationships with our clients,understanding their evolving preferences and dreams."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[60vh] pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1920&h=1080&fit=crop"
            alt="Luxury travel planning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/30 to-slate-900/80" />
        </div>
        <div className="relative h-full flex flex-col justify-center items-center text-center px-6">
          <motion.div
            initial={{opacity: 0,y: 30}}
            animate={{opacity: 1,y: 0}}
            transition={{delay: 0.3}}
          >
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6 font-serif">
              Our <span className="text-amber-400">Story</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Crafting extraordinary journeys since 1988
            </p>
          </motion.div>
        </div>
      </div>

      {/* About Us Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              initial={{opacity: 0,x: -30}}
              whileInView={{opacity: 1,x: 0}}
              viewport={{once: true}}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl font-light text-white mb-6 font-serif">
                Transforming Travel into <span className="text-amber-400">Art</span>
              </h2>
              <div className="space-y-6 text-slate-300 font-light leading-relaxed">
                <p>
                  SeetaLuxuryEscape was born from a simple yet profound belief: that travel,at its best,has the power to transform lives. Founded in June 1988 by Seeta and John Chandra after decades in luxury hospitality,our company has grown from a boutique agency into a respected name in luxury travel,while maintaining our commitment to personalized service.
                </p>
                <p>
                  Our approach transcends the ordinary booking experience. We see ourselves as architects of memory,carefully crafting journeys that resonate with each client's unique aspirations. Whether arranging private access to cultural treasures,orchestrating surprise celebrations in extraordinary settings,or simply ensuring every logistical detail is flawless,our work is defined by attention to the finest details.
                </p>
                <p>
                  What truly sets us apart is our network of relationships cultivated over years with the world's finest hotels,local experts,and experience creators. These connections allow us to offer the exceptional—experiences that go beyond exclusivity to create genuine moments of wonder and joy.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{opacity: 0,x: 30}}
              whileInView={{opacity: 1,x: 0}}
              viewport={{once: true}}
              className="lg:w-1/2 grid grid-cols-2 gap-4"
            >
              {[
                "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=600&fit=crop",
                "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&h=300&fit=crop",
                "https://images.unsplash.com/photo-1520637736862-4d197d17c13a?w=400&h=600&fit=crop"
              ].map((image,index)=> (
                <motion.div
                  key={index}
                  whileHover={{y: -5}}
                  className={`rounded-xl overflow-hidden shadow-lg ${
                    index===0 || index===3 ? "row-span-2" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt="Luxury travel moments"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{opacity: 0,y: 20}}
            whileInView={{opacity: 1,y: 0}}
            viewport={{once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-white mb-6 font-serif">
              Our Values
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
              The principles that guide every journey we create
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value,index)=> (
              <motion.div
                key={index}
                initial={{opacity: 0,y: 30}}
                whileInView={{opacity: 1,y: 0}}
                viewport={{once: true}}
                transition={{delay: index * 0.1}}
                className="bg-slate-800/50 p-8 rounded-xl text-center hover:bg-slate-700/50 transition-all"
              >
                <div className="bg-gradient-to-r from-amber-600 to-amber-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SafeIcon icon={value.icon} className="text-white text-2xl" />
                </div>
                <h3 className="text-white text-xl font-light mb-4">{value.title}</h3>
                <p className="text-slate-400 font-light">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{opacity: 0,y: 20}}
            whileInView={{opacity: 1,y: 0}}
            viewport={{once: true}}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-light text-white mb-6 font-serif">
              Meet Our Team
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light">
              Passionate travel experts dedicated to creating your perfect escape
            </p>
          </motion.div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {team.map((member,index)=> (
                <motion.div
                  key={index}
                  initial={{opacity: 0,y: 30}}
                  whileInView={{opacity: 1,y: 0}}
                  viewport={{once: true}}
                  transition={{delay: index * 0.1}}
                  whileHover={{y: -10}}
                  className="bg-slate-800/50 rounded-xl overflow-hidden backdrop-blur-sm border border-slate-700/50 hover:border-amber-500/50 transition-all"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-white text-xl font-light mb-1">{member.name}</h3>
                    <p className="text-amber-400 text-sm mb-4">{member.role}</p>
                    <p className="text-slate-400 font-light text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{opacity: 0,y: 20}}
            whileInView={{opacity: 1,y: 0}}
            viewport={{once: true}}
            className="bg-gradient-to-r from-amber-600/20 to-amber-500/20 p-12 rounded-2xl text-center border border-amber-500/30"
          >
            <h2 className="text-3xl font-light text-white mb-6 font-serif">
              Begin Your Journey With Us
            </h2>
            <p className="text-xl text-slate-300 font-light mb-8 max-w-2xl mx-auto">
              Ready to transform your travel dreams into reality? Our team of luxury travel experts is ready to craft your perfect escape.
            </p>
            <motion.a
              href="https://seetaluxuryescape.pathfndr.io/search/trips#travel"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all inline-block"
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

export default About;
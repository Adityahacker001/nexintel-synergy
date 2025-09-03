"use client";

import React from "react";
import { motion } from "framer-motion";
import { Landmark, Award, Leaf, ArrowRight } from "lucide-react";

// Animation variants for the main container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

// Animation variants for individual items
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const AboutSection = () => {
  const keyPillars = [
    {
      icon: Landmark,
      title: "Government Partnerships",
      description: "We deliver secure, scalable systems trusted by institutions.",
    },
    {
      icon: Award,
      title: "Professional Excellence",
      description: "Our certified experts bring enterprise-grade engineering.",
    },
    {
      icon: Leaf,
      title: "Sustainable Innovation",
      description: "Solutions that reduce carbon footprint and improve efficiency.",
    },
  ];

  return (
    // UPDATED: Background is now a gradient from black to a soft, near-white green.
    <section 
      id="about" 
      className="py-20 md:py-28 text-gray-300 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #050a06 30%, #f0fdf4 100%)'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* LEFT COLUMN: Narrative & Core Tenets */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <p className="text-sm font-semibold tracking-widest text-green-400 uppercase mb-3">About NexIntel Synergy</p>
              <h2 className="text-4xl md:text-[2.5rem] leading-tight font-extrabold mb-5 tracking-tight bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent drop-shadow-lg">
                Leading the Future of Intelligent Technology
              </h2>
              <p className="text-base text-gray-400 leading-relaxed mb-6">
                NexIntel Synergy specializes in software development with a strong emphasis on sustainability and innovation. By leveraging artificial intelligence, data analytics, and crowd-sourcing mobility, we deliver transformative solutions that address global environmental challenges.
              </p>
               <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(57, 255, 20, 0.3)"}}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg shadow-sm text-black bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 transition-all"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4"/>
                </motion.button>
            </div>
            
            <div className="space-y-4">
                <div className="p-5 rounded-xl bg-gray-900/50 border border-white/10 backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
                        Our Mission
                    </h3>
                    <p className="text-sm text-gray-400">
                        To empower businesses with intelligent technology solutions that transform operations and create sustainable competitive advantages.
                    </p>
                </div>
                <div className="p-5 rounded-xl bg-gray-900/50 border border-white/10 backdrop-blur-sm">
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
                        Our Vision
                    </h3>
                    <p className="text-sm text-gray-400">
                        To be the global leader in intelligent technology consulting, recognized for innovation and exceptional client value.
                    </p>
                </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Key Pillars */}
          <motion.div variants={itemVariants} className="space-y-6">
              {keyPillars.map((item, index) => (
                <motion.div 
                    key={index}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-gray-900/50 border border-white/10"
                >
                  <div className="flex-shrink-0 p-3 bg-gray-800 rounded-full border border-white/10 mt-1">
                    <item.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;


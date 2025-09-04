"use client";

import React from "react";
import { motion, easeOut } from "framer-motion";
import { Landmark, Award, Leaf, ArrowRight } from "lucide-react";

// --- UNCHANGED: Animation variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easeOut } },
};

const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 100,
    }
  }
};


const AboutSection = () => {
  const keyPillars = [
    { icon: Landmark, title: "Government Partnerships", description: "We deliver secure, scalable systems trusted by institutions." },
    { icon: Award, title: "Professional Excellence", description: "Our certified experts bring enterprise-grade engineering." },
    { icon: Leaf, title: "Sustainable Innovation", description: "Solutions that reduce carbon footprint and improve efficiency." },
  ];

  const headingText = "Leading the Future of Intelligent Technology";
  const paragraphText = "NexIntel Synergy specializes in software development with a strong emphasis on sustainability and innovation. By leveraging artificial intelligence, data analytics, and crowd-sourcing mobility, we deliver transformative solutions that address global environmental challenges.";

  const [animationKey, setAnimationKey] = React.useState(0);

  return (
    <section 
      id="about" 
      className="py-20 md:py-28 text-gray-300 relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #000000 0%, #050a06 30%, #f0fdf4 100%)'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="flex flex-col items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* TOP SECTION: Full-width text content */}
          <motion.div 
            variants={itemVariants} 
            className="w-full max-w-5xl mx-auto text-center mb-16"
            onMouseEnter={() => setAnimationKey(prevKey => prevKey + 1)}
          >
            <div>
              <p className="text-sm font-semibold tracking-widest text-green-400 uppercase mb-3">About NexIntel Synergy</p>
              
              {/* UPDATED: Adjusted line-height and padding to prevent clipping */}
              <motion.h2 
                key={`h2-${animationKey}`}
                className="text-5xl md:text-6xl font-extrabold mb-5 tracking-tight bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent drop-shadow-lg py-2"
                variants={textContainerVariants}
                initial="hidden"
                animate="visible"
              >
                {headingText.split(" ").map((word, index) => (
                    <motion.span key={index} variants={wordVariants} className="inline-block mr-[0.25em]">
                        {word}
                    </motion.span>
                ))}
              </motion.h2>

              <motion.p 
                key={`p-${animationKey}`}
                className="text-lg text-gray-400 leading-relaxed mb-8 max-w-3xl mx-auto"
                variants={textContainerVariants}
                initial="hidden"
                animate="visible"
              >
                 {paragraphText.split(" ").map((word, index) => (
                    <motion.span key={index} variants={wordVariants} className="inline-block mr-[0.2em]">
                        {word}
                    </motion.span>
                ))}
              </motion.p>
              
               <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(57, 255, 20, 0.3)"}}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold rounded-lg shadow-sm text-black bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 transition-all"
                >
                  Learn More About Us
                  <ArrowRight className="w-5 h-5"/>
                </motion.button>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
              
              <div className="flex flex-col gap-8">
                <div className="p-6 rounded-xl bg-gray-900/50 border border-white/10 backdrop-blur-sm text-left h-full">
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
                        Our Mission
                    </h3>
                    <p className="text-base text-gray-400">
                        To empower businesses with intelligent technology solutions that transform operations and create sustainable competitive advantages.
                    </p>
                </div>
                <div className="p-6 rounded-xl bg-gray-900/50 border border-white/10 backdrop-blur-sm text-left h-full">
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text text-transparent">
                        Our Vision
                    </h3>
                    <p className="text-base text-gray-400">
                        To be the global leader in intelligent technology consulting, recognized for innovation and exceptional client value.
                    </p>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                {keyPillars.map((item, index) => (
                  <motion.div 
                      key={index}
                      whileHover={{ y: -8, transition: { duration: 0.3 } }}
                      className="flex items-start gap-5 p-6 rounded-2xl bg-gray-900/50 border border-white/10"
                  >
                    <div className="flex-shrink-0 p-4 bg-gray-800 rounded-full border border-white/10 mt-1">
                      <item.icon className="w-7 h-7 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-base text-gray-400 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;


"use client";

import React, { useEffect } from "react";
import {
  Brain,
  Shield,
  Users,
  Target,
  TrendingUp,
  ChevronRight,
  QrCode,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesSection() {
  const services = [
    {
      icon: Brain,
      title: "Cognitive Governance & Compliance",
      description:
        "Navigate the complexities of modern regulation with confidence.",
    },
    {
      icon: Shield,
      title: "Digital Ecosystems for Public Impact",
      description:
        "We partner with public sector organizations and NGOs to build the digital infrastructure for a better tomorrow.",
    },
    {
      icon: Users,
      title: "Technology Consulting",
      subtitle: "Strategic Advisory",
      description:
        "Align technology initiatives with business objectives through expert strategic consulting and planning.",
    },
    {
      icon: QrCode,
      title: "Intelligent Product Serialization",
      description: "Transform your products into digital assets.",
    },
    {
      icon: Target,
      title: "Custom Development",
      subtitle: "Bespoke Solutions",
      description:
        "Build tailored software solutions that perfectly align with your unique business requirements and goals.",
    },
    {
      icon: TrendingUp,
      title: "Sustainable Enterprise Suite (SES)",
      description:
        "Go beyond reporting. We empower your business to become a leader in sustainability with AI-driven intelligence.",
    },
  ];

  // Split heading + description text into spans
  useEffect(() => {
    const splitText = (selector: string) => {
      const el = document.querySelector(selector);
      if (!el) return;
      const text = el.textContent || "";
      el.innerHTML = text
        .split("")
        .map((char, i) => `<span style="animation-delay:${i * 0.1}s">${char}</span>`)
        .join("");
    };

    splitText(".animated-heading");
    splitText(".animated-desc");
  }, []);

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Subtle Animated Background */}
      <motion.div
        aria-hidden="true"
        initial={{ scale: 1, opacity: 0.85, y: 0 }}
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.85, 1, 0.85],
          y: [0, -18, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-green-50 animate-gradient-slow will-change-transform"
        style={{ zIndex: 0 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        {/* Section Header */}
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
              <div className="text-black-900 text-2xl font-extrabold tracking-[1.2em] uppercase mb-10" style={{letterSpacing: '0.25em'}}>
                <span className="text-black-900 dark:text-white">Our Services</span>
              </div>
            <h2 className="text-5xl md:text-7xl font-light mb-8 text-black leading-tight">
              NexIntel Synergy <br></br>
              <span className="block text-green-400">Solutions</span>
            </h2>
            <p className="text-xl text-black-300 max-w-4xl mx-auto leading-relaxed">
              From AI implementation to digital transformation, we provide end-to-end technology services tailored to
              your business objectives and industry requirements.
            </p>
          </div>
        </div>
        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              style={{ perspective: "1000px" }}
              className="relative group cursor-pointer rounded-2xl"
            >
              <motion.div
                className="relative"
                whileHover={{ rotateX: 6, rotateY: -6, z: 12 }}
                transition={{ type: "spring", stiffness: 160, damping: 20 }}
              >
                <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-green-400 via-green-600 to-green-400 opacity-50 blur-md group-hover:opacity-80 animate-glow"></div>
                <div className="relative z-10 p-8 bg-green-50 backdrop-blur-sm rounded-2xl shadow-md group-hover:shadow-2xl min-h-[320px] transition-all duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-14 h-14 rounded-xl flex items-center justify-center bg-green-100 group-hover:bg-green-500 transition duration-500"
                    >
                      {React.createElement(service.icon, {
                        className:
                          "w-8 h-8 text-green-600 group-hover:text-white transition duration-500",
                      })}
                    </motion.div>
                    <ChevronRight className="w-6 h-6 text-gray-500 group-hover:text-green-600 transition-all duration-300" />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-green-600 transition">
                    {service.title}
                  </h3>
                  {service.subtitle && (
                    <div className="text-xs font-semibold text-green-500 mb-2 uppercase tracking-wide">
                      {service.subtitle}
                    </div>
                  )}
                  <p className="text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Custom Animations & CSS Effects */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Montserrat&display=swap");

        .animated-heading,
        .animated-desc {
          font-family: "Montserrat Medium";
          display: inline-block;
          text-align: center;
        }

        .scale-anim {
          transform: scale(0.94);
          animation: scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1);
        }

        @keyframes scale {
          100% {
            transform: scale(1);
          }
        }

        span {
          display: inline-block;
          opacity: 0;
          filter: blur(4px);
          animation: fade-in 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
        }

        @keyframes fade-in {
          100% {
            opacity: 1;
            filter: blur(0);
          }
        }

        @keyframes gradient-slow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradient-slow 12s ease infinite;
        }
        @keyframes glow {
          0%,
          100% {
            opacity: 0.35;
          }
          50% {
            opacity: 0.55;
          }
        }
        .animate-glow {
          animation: glow 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
// make the heading and discription look like that but dont make chnage in animation 
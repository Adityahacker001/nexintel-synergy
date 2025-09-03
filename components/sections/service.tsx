"use client";

import React, { useEffect, useState } from "react";
import {
  Brain,
  Shield,
  Users,
  Target,
  TrendingUp,
  ChevronRight,
  QrCode,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// UNCHANGED: Service data remains the same
const services = [
    { icon: Brain, title: "Cognitive Governance & Compliance", description: "Navigate the complexities of modern regulation with confidence." },
    { icon: Shield, title: "Digital Ecosystems for Public Impact", description: "We partner with public sector organizations and NGOs to build the digital infrastructure for a better tomorrow." },
    { icon: Users, title: "Technology Consulting", subtitle: "Strategic Advisory", description: "Align technology initiatives with business objectives through expert strategic consulting and planning." },
    { icon: QrCode, title: "Intelligent Product Serialization", description: "Transform your products into digital assets." },
    { icon: Target, title: "Custom Development", subtitle: "Bespoke Solutions", description: "Build tailored software solutions that perfectly align with your unique business requirements and goals." },
    { icon: TrendingUp, title: "Sustainable Enterprise Suite (SES)", description: "Go beyond reporting. We empower your business to become a leader in sustainability with AI-driven intelligence." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number): any => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  }),
};


// UNCHANGED: The 3D mouse-tracking card component
interface Service {
  icon: React.ElementType;
  title: string;
  subtitle?: string;
  description: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      variants={cardVariants as any}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="group"
    >
      <div style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }} className="relative p-8 rounded-2xl h-full bg-white/60 backdrop-blur-lg border border-green-200/80 shadow-2xl shadow-green-500/20 transition-all duration-300 group-hover:border-green-400">
        <div style={{ transform: "translateZ(50px)" }} className="absolute inset-0 bg-gradient-to-r from-green-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div style={{ transform: "translateZ(50px)" }} className="relative flex flex-col h-full">
          <div className="flex justify-between items-start mb-6">
            <div className="relative w-14 h-14 rounded-xl flex items-center justify-center bg-green-100 border border-green-200">
              {React.createElement(service.icon, { className: "w-8 h-8 text-green-600" })}
            </div>
            <ChevronRight style={{ transform: "translateZ(20px)" }} className="w-6 h-6 text-gray-400 group-hover:text-green-600 transition-colors" />
          </div>
          <h3 style={{ transform: "translateZ(30px)" }} className="text-xl font-bold mb-2 text-gray-900 group-hover:text-green-700 transition-colors">{service.title}</h3>
          {service.subtitle && (<div style={{ transform: "translateZ(20px)" }} className="text-xs font-semibold text-green-600 mb-2 uppercase tracking-wider">{service.subtitle}</div>)}
          <p className="text-base text-gray-600 leading-relaxed mt-2 flex-grow">{service.description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// NEW: The animated header is now its own component to allow for re-animation
const AnimatedHeader = () => {
    // This useEffect will run every time this component is mounted (due to the key change)
    useEffect(() => {
        const splitText = (selector: string) => {
            const el = document.querySelector(selector);
            if (!el) return;
            const text = el.textContent || "";
            // Faster animation: reduce delay per character
            el.innerHTML = text
              .split("")
              .map((char: string, i: number) => `<span style="animation-delay:${i * 0.025}s">${char === ' ' ? '&nbsp;' : char}</span>`)
              .join("");
        };

        // These selectors are now local to this component's render
        splitText(".animated-heading");
        splitText(".animated-desc");
    }, []); // The empty array ensures it runs on mount

    return (
        <div className="text-center mb-20">
            <div className="text-gray-900 text-sm font-semibold tracking-[0.25em] uppercase mb-10">
                <span className="animated-heading">Our Services</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light mb-8 text-black leading-tight">
                <span className="animated-heading">
                    NexIntel Synergy <br />
                    <span className="block text-green-500 font-medium">Solutions</span>
                </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                <span className="animated-desc">
                    From AI implementation to digital transformation, we provide end-to-end technology services tailored to your business objectives and industry requirements.
                </span>
            </p>
        </div>
    );
};


export default function ServicesSection() {
  // State to manage re-triggering the animation by changing the component's key
  const [headerAnimationKey, setHeaderAnimationKey] = useState(0);

  return (
    <section className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #F0FFF4 0%, #FFFFFF 100%)' }}>
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0.85 }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-green-50 animate-gradient-slow"
        style={{ zIndex: 0 }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* UPDATED: Wrapper div with onMouseEnter to trigger animation */}
        <div onMouseEnter={() => setHeaderAnimationKey(prevKey => prevKey + 1)}>
            <AnimatedHeader key={headerAnimationKey} />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        .animated-heading span,
        .animated-desc span {
          display: inline-block;
          opacity: 0;
          filter: blur(4px);
          animation: fade-in 0.8s forwards cubic-bezier(0.11, 0, 0.5, 0);
        }
        @keyframes fade-in {
          100% { opacity: 1; filter: blur(0); }
        }
        @keyframes gradient-slow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-slow {
          background-size: 200% 200%;
          animation: gradient-slow 12s ease infinite;
        }
      `}</style>
    </section>
  );
}


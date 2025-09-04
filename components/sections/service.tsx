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
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";

// UNCHANGED: Service data
const services = [
    { icon: Brain, title: "Cognitive Governance & Compliance", description: "Navigate the complexities of modern regulation with confidence." },
    { icon: Shield, title: "Digital Ecosystems for Public Impact", description: "We partner with public sector organizations and NGOs to build the digital infrastructure for a better tomorrow." },
    { icon: Users, title: "Technology Consulting", subtitle: "Strategic Advisory", description: "Align technology initiatives with business objectives through expert strategic consulting and planning." },
    { icon: QrCode, title: "Intelligent Product Serialization", description: "Transform your products into digital assets." },
    { icon: Target, title: "Custom Development", subtitle: "Bespoke Solutions", description: "Build tailored software solutions that perfectly align with your unique business requirements and goals." },
    { icon: TrendingUp, title: "Sustainable Enterprise Suite (SES)", description: "Go beyond reporting. We empower your business to become a leader in sustainability with AI-driven intelligence." },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.42, 0, 0.58, 1] },
  }),
};

// --- UPDATED: The ultimate premium, amazing, and stylish Service Card ---
type ServiceType = {
  icon: React.ElementType;
  title: string;
  description: string;
  subtitle?: string;
};
interface ServiceCardProps {
  service: ServiceType;
  index: number;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  
  // For the 3D tilt effect (unchanged)
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  // NEW: For the interactive holographic glow
  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowXSpring = useSpring(glowX, { stiffness: 150, damping: 20 });
  const glowYSpring = useSpring(glowY, { stiffness: 150, damping: 20 });


  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // For 3D Tilt
    const tiltX = (e.clientX - rect.left) / rect.width - 0.5;
    const tiltY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(tiltX);
    y.set(tiltY);

    // For Holographic Glow
    glowX.set(e.nativeEvent.offsetX);
    glowY.set(e.nativeEvent.offsetY);
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
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="group"
    >
      <div 
        style={{ transform: "translateZ(75px)", transformStyle: "preserve-3d" }} 
        className="relative p-1 rounded-2xl h-full bg-gray-900/80"
      >
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-green-400 via-emerald-500 to-lime-400 opacity-50 group-hover:opacity-100 transition-opacity duration-300 animate-aurora"></div>
        
        <div className="relative z-10 p-5 rounded-[12px] h-full bg-gray-950/90 backdrop-blur-xl overflow-hidden"
            // NEW: Subtle noise texture for a frosted glass feel
            style={{backgroundImage: `url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.04\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`}}
        >
             {/* NEW: Interactive Holographic Glow */}
             <motion.div
                className="absolute w-64 h-64 bg-[radial-gradient(circle_at_center,_rgba(52,211,153,0.2),transparent_70%)] opacity-0 group-hover:opacity-100"
                style={{
                    x: glowXSpring,
                    y: glowYSpring,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
             />

             <div style={{ transform: "translateZ(50px)" }} className="relative flex flex-col h-full">
              <div className="flex justify-between items-start mb-4">
                <div 
                    className="relative w-11 h-11 rounded-lg flex items-center justify-center bg-gray-800 border border-white/10 group-hover:bg-green-500/10 transition-colors duration-300"
                    // NEW: Floating Icon with Drop Shadow
                    style={{filter: "drop-shadow(0 4px 8px rgba(0, 255, 150, 0.3))"}}
                >
                  {React.createElement(service.icon, { className: "w-6 h-6 text-green-400" })}
                   <div className="absolute inset-0 bg-green-400/30 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <ChevronRight style={{ transform: "translateZ(20px)" }} className="w-5 h-5 text-gray-500 group-hover:text-green-500 transition-colors" />
              </div>
              <h3 style={{ transform: "translateZ(30px)" }} className="text-lg font-bold mb-1 text-white">{service.title}</h3>
              {service.subtitle && (<div style={{ transform: "translateZ(20px)" }} className="text-xs font-semibold text-green-400 mb-1 uppercase tracking-wider">{service.subtitle}</div>)}
              <p className="text-sm text-gray-400 leading-relaxed mt-1 flex-grow">{service.description}</p>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

// UNCHANGED: Animated Header Component
const AnimatedHeader = () => {
 useEffect(() => {
    const splitText = (selector: string) => {
      const el = document.querySelector(selector);
      if (!el) return;
      const text = el.textContent || "";
      el.innerHTML = text
        .split("")
        .map((char: string, i: number) => `<span style="animation-delay:${i * 0.025}s">${char === ' ' ? '&nbsp;' : char}</span>`)
        .join("");
    };
    splitText(".animated-heading");
    splitText(".animated-desc");
 }, []);

 return (
    <div className="text-center mb-20">
      <div className="text-gray-800 dark:text-gray-400 text-sm font-semibold tracking-[0.25em] uppercase mb-10">
        <span className="animated-heading">Our Services</span>
      </div>
      <h2 className="text-5xl md:text-7xl font-light mb-8 text-gray-900 dark:text-white leading-tight drop-shadow-sm">
        <span className="animated-heading">
          NexIntel Synergy <br />
          <span className="block text-green-500 font-medium">Solutions</span>
        </span>
      </h2>
      <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
        <span className="animated-desc">
          From AI implementation to digital transformation, we provide end-to-end technology services tailored to your business objectives and industry requirements.
        </span>
      </p>
    </div>
 );
};

export default function ServicesSection() {
  const [headerAnimationKey, setHeaderAnimationKey] = useState(0);

  return (
    <section 
        id="service"
        className="py-32 relative overflow-hidden" 
        style={{ background: 'linear-gradient(180deg, #F0FFF4 0%, #0a0f0c 100%)' }}
    >
      <div className="container mx-auto px-6 relative z-10">
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
        
        @keyframes aurora {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-aurora {
          background-size: 200% 200%;
          animation: aurora 8s ease infinite;
        }
      `}</style>
    </section>
  )
}


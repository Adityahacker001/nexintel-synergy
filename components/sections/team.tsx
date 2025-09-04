"use client";

import { motion, useAnimation, useMotionValue, useAnimationFrame, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const team = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    description:
      "Sarah sets the vision, steering our company toward a sustainable and innovative future. Her leadership is the cornerstone of our success.",
    // UPDATED: Now an array of images for the carousel
    images: ["Disha.jpg", "Disha1.jpg", "Disha2.jpg"],
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    description:
      "Expert in cloud infrastructure and cybersecurity.",
  image: "/vishal.png",
  },
  {
    name: "David Lee",
    role: "Head of Operations",
    description: "Manages global logistics with a focus on sustainability.",
    image: "https://placehold.co/400x400/a7f3d0/ffffff?text=DL",
  },
  {
    name: "Emily White",
    role: "Director of Marketing",
    description: "Drives our brand's mission to promote a greener future.",
    image: "https://placehold.co/400x400/d1fae5/000000?text=EW",
  },
  {
    name: "Ben Carter",
    role: "Principal Engineer",
    description: "Leads our renewable energy hardware division.",
    image: "https://placehold.co/400x400/10b981/ffffff?text=BC",
  },
];

const featuredMember = team[0];
const scrollingMembers = team.slice(1);
const duplicatedScrollingMembers = [...scrollingMembers, ...scrollingMembers, ...scrollingMembers];

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image?: string; // Optional for scrolling members
  images?: string[]; // Optional for featured member
};

function ScrollingTeamCard({ member }: { member: TeamMember }) {
    return (
        <div className="group relative flex-shrink-0 w-[65vw] sm:w-[35vw] md:w-[30vw] lg:w-[22vw]">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-400 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
            <Card className="relative overflow-hidden rounded-2xl bg-white/60 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl shadow-black/5 dark:shadow-green-500/10 border border-white/20 dark:border-white/10 h-full flex flex-col w-full">
              <div className="relative w-full h-40 md:h-48 overflow-hidden">
                <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 bg-white dark:bg-gray-900" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/cccccc/ffffff?text=Error'; }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              </div>
              <CardHeader className="text-center p-4 pb-2">
                <CardTitle className="text-gray-900 dark:text-gray-100 text-lg font-bold tracking-tight">{member.name}</CardTitle>
                <CardDescription className="text-green-600 dark:text-green-400 font-semibold text-xs">{member.role}</CardDescription>
              </CardHeader>
              <CardContent className="text-center p-4 pt-2 flex-1">
                <p className="text-sm text-gray-700 dark:text-gray-400 leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
        </div>
    );
}

export default function TeamSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const CARD_WIDTH = 320;
  const TOTAL_CARDS = duplicatedScrollingMembers.length;
  const LOOP_WIDTH = CARD_WIDTH * TOTAL_CARDS;

  // NEW: State for the featured image carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // NEW: Effect to handle the automatic image transition
  useEffect(() => {
    if(!featuredMember.images || featuredMember.images.length <= 1) return;

    const imageTimer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % (featuredMember.images?.length || 1));
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(imageTimer);
  }, []);

  useAnimationFrame(() => {
    if (!isDragging && isInView) {
      x.set(x.get() - 1.2);
      if (x.get() <= -LOOP_WIDTH / 3) {
        x.set(0);
      }
    }
  });

  return (
    <section id="team" className="py-12 md:py-16 bg-slate-100 dark:bg-black" ref={sectionRef}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.5 }}>
          <h2 className="text-5xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-green-500 via-emerald-400 to-lime-400 bg-clip-text text-transparent drop-shadow-lg">Our Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Meet the experienced professionals driving sustainability and innovation.</p>
        </motion.div>

        <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch">
          
          <motion.div 
            className="w-full max-w-md lg:w-1/3 flex-shrink-0 z-20 mb-8 lg:mb-0 lg:mr-[-32px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="group relative h-full">
               <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-400 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
              <Card className="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-gray-900/80 backdrop-blur-2xl shadow-2xl shadow-black/10 dark:shadow-green-500/10 border border-white/20 dark:border-white/10 h-full flex flex-col w-full">
                <div className="relative w-full h-[24rem] md:h-[30rem] overflow-hidden group flex items-center justify-center bg-gray-200 dark:bg-gray-800">
                  <span className="pointer-events-none absolute left-[-40%] top-0 h-full w-1/12 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-lg opacity-50 animate-shine z-10" />
                  
                  {/* UPDATED: Image carousel with slow fade transition */}
                  <AnimatePresence>
                    <motion.img
                      key={currentImageIndex}
                      src={featuredMember.images?.[currentImageIndex]}
                      alt={featuredMember.name}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1.5 }}
                      className="w-full h-full object-cover absolute inset-0 z-0"
                      style={{ objectPosition: 'center' }}
                      onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x600/cccccc/ffffff?text=Error'; }}
                    />
                  </AnimatePresence>
                  
                  <div className="w-full absolute bottom-0 left-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 pt-12 pb-6 flex flex-col items-center opacity-0 group-hover:opacity-100 translate-y-8 group-hover:translate-y-0 transition-all duration-300 z-20">
                    <CardHeader className="text-center p-2 pb-1 bg-transparent">
                      <CardTitle className="text-white text-2xl font-bold tracking-tight drop-shadow-lg">{featuredMember.name}</CardTitle>
                      <CardDescription className="text-green-300 font-bold text-md drop-shadow-lg">{featuredMember.role}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center p-2 pt-1 flex-1 bg-transparent">
                      <p className="text-md text-gray-100 leading-relaxed drop-shadow-lg">{featuredMember.description}</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          <div className="relative w-full self-center overflow-hidden cursor-grab active:cursor-grabbing z-10 lg:pl-20">
            <div className="absolute top-0 bottom-0 left-0 w-24 z-30 bg-gradient-to-r from-slate-100 dark:from-black to-transparent"></div>
            <motion.div
              className="flex gap-4 lg:gap-8 items-stretch py-4"
              style={{ x }}
              drag="x"
              dragElastic={0.1}
              dragConstraints={{ left: -LOOP_WIDTH / 3, right: 0 }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => {
                setIsDragging(false);
                if (x.get() <= -LOOP_WIDTH / 3) {
                  x.set(0);
                } else if (x.get() > 0) {
                  x.set(-LOOP_WIDTH / 3);
                }
              }}
            >
              {duplicatedScrollingMembers.map((member, index) => (
                <ScrollingTeamCard key={index} member={member} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(0) skewX(-25deg);
          }
          100% {
            transform: translateX(900%) skewX(-25deg);
          }
        }
        .animate-shine {
          animation: shine 5s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
}


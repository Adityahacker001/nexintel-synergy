"use client";

import { motion, useAnimation } from "framer-motion";
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
    image: "https://placehold.co/600x600/22c55e/ffffff?text=SJ",
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    description:
      "Expert in cloud infrastructure and cybersecurity.",
    image: "https://placehold.co/400x400/34d399/ffffff?text=MC",
  },
  {
      name: "Jessica Rodriguez",
      role: "Lead Environmental Scientist",
      description: "Ph.D. in Climate Science, leading carbon capture research.",
      image: "https://placehold.co/400x400/6ee7b7/ffffff?text=JR",
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

// The first person is featured, the rest are in the scrolling carousel.
const featuredMember = team[0];
const scrollingMembers = team.slice(1);
const duplicatedScrollingMembers = [...scrollingMembers, ...scrollingMembers, ...scrollingMembers];

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
};

function ScrollingTeamCard({ member }: { member: TeamMember }) {
    return (
        <div className="group relative flex-shrink-0 w-[65vw] sm:w-[35vw] md:w-[30vw] lg:w-[22vw]">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-400 rounded-2xl blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
            <Card className="relative overflow-hidden rounded-2xl bg-white/60 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl shadow-black/5 dark:shadow-green-500/10 border border-white/20 dark:border-white/10 h-full flex flex-col w-full">
              <div className="relative w-full h-48 md:h-56 overflow-hidden">
                <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x400/cccccc/ffffff?text=Error'; }} />
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
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);

  const animation = {
    x: `-${100 * (scrollingMembers.length / (scrollingMembers.length * 0.7))}%`,
  transition: { ease: (t: number) => t, duration: 16, repeat: Infinity },
  };
  
  useEffect(() => {
    if (isInView && !isDragging) controls.start(animation);
    else controls.stop();
  }, [isInView, isDragging, controls, animation]);

  return (
    <section id="team" className="py-12 md:py-16 bg-slate-100 dark:bg-black" ref={sectionRef}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.5 }}>
          <h2 className="text-5xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-green-500 via-emerald-400 to-lime-400 bg-clip-text text-transparent drop-shadow-lg">Our Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">Meet the experienced professionals driving sustainability and innovation.</p>
        </motion.div>

        {/* --- MAIN LAYOUT: Single Row with Fixed Card --- */}
        <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch">
          
          {/* --- LEFT: Featured & Fixed Card --- */}
          {/* This card has a higher z-index to stay on top */}
          <motion.div 
            className="w-full max-w-md lg:w-1/3 flex-shrink-0 z-20 mb-8 lg:mb-0 lg:mr-[-32px]" // Negative margin pulls the scrolling cards slightly underneath
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="group relative h-full">
               <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-400 rounded-3xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
              <Card className="relative overflow-hidden rounded-3xl bg-white/70 dark:bg-gray-900/80 backdrop-blur-2xl shadow-2xl shadow-black/10 dark:shadow-green-500/10 border border-white/20 dark:border-white/10 h-full flex flex-col w-full">
                <div className="relative w-full h-64 md:h-80 overflow-hidden">
                  <img src={featuredMember.image} alt={featuredMember.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x600/cccccc/ffffff?text=Error'; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                </div>
                <CardHeader className="text-center p-6 pb-2">
                  <CardTitle className="text-gray-900 dark:text-gray-100 text-2xl font-bold tracking-tight">{featuredMember.name}</CardTitle>
                  <CardDescription className="text-green-600 dark:text-green-400 font-bold text-md">{featuredMember.role}</CardDescription>
                </CardHeader>
                <CardContent className="text-center p-6 pt-2 flex-1">
                  <p className="text-md text-gray-700 dark:text-gray-400 leading-relaxed">{featuredMember.description}</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* --- RIGHT: Scrolling Carousel --- */}
          {/* This container has a lower z-index and padding to start where the first card ends */}
          <div className="relative w-full self-center overflow-hidden cursor-grab active:cursor-grabbing z-10 lg:pl-20">
            {/* This mask fades the cards on the left as they go "under" the main card */}
            <div className="absolute top-0 bottom-0 left-0 w-24 z-30 bg-gradient-to-r from-slate-100 dark:from-black to-transparent"></div>
            <motion.div
              className="flex gap-4 lg:gap-8 items-stretch py-4"
              drag="x"
              dragConstraints={(() => {
                // Default constraint for SSR
                if (typeof window === 'undefined') return { right: 0, left: 0 };
                return { right: 0, left: -((scrollingMembers.length / 2) * (window.innerWidth * 0.66)) };
              })()}
              dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
              animate={controls}
            >
              {duplicatedScrollingMembers.map((member, index) => (
                <ScrollingTeamCard key={index} member={member} />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


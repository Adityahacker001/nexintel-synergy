"use client";
import React, { useRef, useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation, useInView } from "framer-motion";

// --- SVG Icons (No changes) ---
const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);
const QuoteIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width="150" height="150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" {...props}>
        <path d="M10.29 17.29c-1.88 0-3.29-1.41-3.29-3.29s1.41-3.29 3.29-3.29c1.41 0 2.59 1.12 2.59 2.53 0 .5-.13.99-.38 1.41l1.79 1.79c.75-1.06 1.2-2.35 1.2-3.73 0-3.31-2.69-6-6-6s-6 2.69-6 6 2.69 6 6 6c1.12 0 2.18-.31 3.09-.85l-1.79-1.79c-.58.33-1.22.55-1.91.55zM17.29 17.29c-1.88 0-3.29-1.41-3.29-3.29s1.41-3.29 3.29-3.29c1.41 0 2.59 1.12 2.59 2.53 0 .5-.13.99-.38 1.41l1.79 1.79c.75-1.06 1.2-2.35 1.2-3.73 0-3.31-2.69-6-6-6s-6 2.69-6 6 2.69 6 6 6c1.12 0 2.18-.31 3.09-.85l-1.79-1.79c-.58.33-1.22.55-1.91.55z"/>
    </svg>
);

const testimonials = [
  { quote: "EcoTech Solutions transformed our infrastructure. The efficiency gains are remarkable and their team is world-class.", author: "John Smith", position: "CTO, Tech Corp", avatar: "https://placehold.co/100x100/34d399/ffffff?text=JS" },
  { quote: "Outstanding service and professional expertise. They delivered beyond our expectations and were true partners in our success.", author: "Jane Doe", position: "Director, Gov Agency", avatar: "https://placehold.co/100x100/6ee7b7/000000?text=JD" },
  { quote: "Their sustainable approach is exactly what we needed. They helped us achieve our green initiatives without compromising performance.", author: "Mike Wilson", position: "CEO, Green Energy Co", avatar: "https://placehold.co/100x100/a7f3d0/000000?text=MW" },
  { quote: "A truly innovative partner. Their solutions are not just effective, but also forward-thinking and scalable for the future.", author: "Sarah Lee", position: "Head of Innovation, Future Solutions", avatar: "https://placehold.co/100x100/10b981/ffffff?text=SL" }
];
const duplicatedTestimonials = [...testimonials, ...testimonials];

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  avatar: string;
}

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <motion.div
      className="group relative w-[80vw] md:w-[45vw] lg:w-[30vw] flex-shrink-0"
    >
      <Card
        className="relative overflow-hidden rounded-2xl bg-gray-950/60 backdrop-blur-xl shadow-2xl shadow-black/20 border border-white/10 h-full flex flex-col transition-colors duration-300 group-hover:border-green-500/30"
      >
        <QuoteIcon className="absolute top-4 right-4 text-white/5" />
        <CardContent className="p-8 relative z-10 flex flex-col flex-grow text-left">
          <div className="flex mb-4">
            {[...Array(5)].map((_, i) => (<StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />))}
          </div>
          <p className="text-gray-300 italic mb-8 text-lg leading-relaxed flex-grow">"{testimonial.quote}"</p>
          <div className="flex items-center gap-4">
            <img src={testimonial.avatar} alt={testimonial.author} className="w-14 h-14 rounded-full border-2 border-green-500/50 object-cover" onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100/cccccc/ffffff?text=Error'; }}/>
            <div>
              <div className="font-bold text-white text-lg">{testimonial.author}</div>
              <div className="text-sm text-green-400">{testimonial.position}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function TestimonialsSection() {
  const scrollContainerRef = useRef(null);
  const isInView = useInView(scrollContainerRef, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const duration = 15; // fast everywhere
    const animation = {
      x: `-${100 * (testimonials.length / (testimonials.length * 2 / 2.1))}%`,
      transition: { ease: (t: number) => t, duration, repeat: Infinity as number },
    };
    if (isInView && !isDragging) {
      controls.start(animation);
    } else {
      controls.stop();
    }
  }, [isInView, isDragging, controls]);

  const headerText = "What Our Clients Say".split(" ");
  const headerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const wordVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

  return (
    // UPDATED: Background is now a dark gray with a more subtle grid pattern for a techy feel
    <section id="testimonials" className="relative overflow-hidden py-20 md:py-28 bg-gray-900 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:3rem_3rem]">
      {/* UPDATED: Radial glow is softer to complement the new background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.5),rgba(0,0,0,0)_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
           <h2 className="text-5xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-green-500 via-emerald-400 to-lime-400 bg-clip-text text-transparent drop-shadow-lg">
            {headerText.map((word, index) => (
              <motion.span key={index} variants={wordVariants} className="inline-block mr-[0.25em]">{word}</motion.span>
            ))}
          </h2>
          <motion.p 
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.5, delay: 0.5}}
            viewport={{ once: true, amount: 0.5 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Real feedback from partners who have experienced our impact firsthand.
          </motion.p>
        </motion.div>

        <div ref={scrollContainerRef} className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing">
          {/* UPDATED: Masks now fade to the new gray background color */}
          <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>

          <motion.div
            className="flex gap-8 items-stretch py-4"
            drag="x"
            dragConstraints={typeof window !== 'undefined' ? { right: 0, left: -((testimonials.length) * (window.innerWidth * 0.4)) } : { right: 0, left: 0 }}
            dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
            onHoverStart={() => setIsDragging(true)}
            onHoverEnd={() => setIsDragging(false)}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            animate={controls}
          >
            {duplicatedTestimonials.map((t, index) => (
              <TestimonialCard key={index} testimonial={t} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


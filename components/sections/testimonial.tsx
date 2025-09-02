"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "EcoTech Solutions transformed our infrastructure with their innovative cloud solutions.",
    author: "John Smith",
    position: "CTO, Tech Corp",
  },
  {
    quote: "Outstanding service and professional expertise. Highly recommended for any organization.",
    author: "Jane Doe",
    position: "Director, Gov Agency",
  },
  {
    quote: "Their sustainable approach to technology is exactly what we needed for our green initiatives.",
    author: "Mike Wilson",
    position: "CEO, Green Energy Co",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-green-50 via-white to-green-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-extrabold text-green-800 mb-4">Testimonials</h2>
        <p className="text-gray-600 mb-12 text-lg">
          What our partners and clients say about us
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="relative overflow-hidden rounded-3xl border border-green-100 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-2xl hover:border-green-200 transition-all duration-300">
                {/* Decorative gradient accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600" />

                <CardContent className="pt-8 pb-6 px-6 relative z-10">
                  {/* Stars */}
                  <div className="flex mb-4 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current drop-shadow-sm"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-700 italic mb-6 text-lg leading-relaxed relative">
                    <span className="text-4xl text-green-400 absolute -left-3 -top-2">“</span>
                    {t.quote}
                    <span className="text-4xl text-green-400 absolute -right-3 -bottom-4">”</span>
                  </p>

                  {/* Author Info */}
                  <div className="mt-4">
                    <div className="font-semibold text-green-900 text-lg">{t.author}</div>
                    <div className="text-sm text-gray-500">{t.position}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

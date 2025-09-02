"use client";

import {
  Users,
  Briefcase,
  Globe,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const clients = [
  {
    icon: Users,
    name: "Startups",
    detail: "Helping early-stage companies scale fast with design and tech.",
  },
  {
    icon: Briefcase,
    name: "Enterprises",
    detail: "Partnering with corporations for digital transformation.",
  },
  {
    icon: Globe,
    name: "NGOs",
    detail: "Empowering impact-driven organizations with digital tools.",
  },
  {
    icon: Building2,
    name: "Agencies",
    detail: "Collaborating with agencies to deliver white-label solutions.",
  },
];

export default function OurServices() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring" as const, stiffness: 120, damping: 18 },
    },
  };

  return (
    <section className="w-full bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.18 },
            },
          }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold mb-6 text-center bg-gradient-to-r from-lime-400 to-green-600 bg-clip-text text-transparent"
            variants={{
              hidden: { opacity: 0, y: -30 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.7, type: "spring", stiffness: 80 },
              },
            }}
          >
            Our Clients
          </motion.h2>
          <motion.p
            className="text-gray-300 text-center max-w-2xl mx-auto mb-14 text-lg leading-relaxed"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
          >
            We collaborate with diverse clients across industries, tailoring our
            approach to their unique needs.
          </motion.p>
        </motion.div>

        {/* Client Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.08,
                rotate: -2,
                boxShadow: "0 8px 32px 0 rgba(163, 230, 53, 0.25)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring" as const, stiffness: 200, damping: 15 }}
            >
              <Card className="relative group overflow-hidden border border-lime-400/20 bg-gradient-to-br from-gray-900 via-black to-gray-950 text-white rounded-3xl shadow-lg hover:shadow-2xl transition-all">
                {/* Top bar animation */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-green-600"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.7, delay: 0.2 * index }}
                />

                <CardHeader className="flex items-center gap-4 mb-3">
                  <motion.div
                    className="p-3 rounded-xl bg-gradient-to-tr from-lime-400 to-green-600 shadow-md"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{
                      type: "spring" as const,
                      stiffness: 180,
                      delay: 0.2 * index,
                    }}
                  >
                    <client.icon className="w-6 h-6 text-black" />
                  </motion.div>

                  {/* Title with hover animation */}
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                      color: "#a3e635", // lime-400
                      textShadow: "0px 0px 12px rgba(163,230,53,0.8)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardTitle className="text-xl font-semibold transition-colors duration-300">
                      {client.name}
                    </CardTitle>
                  </motion.div>
                </CardHeader>

                <CardContent>
                  {/* Description with hover animation */}
                  <motion.p
                    className="text-sm text-gray-300 leading-relaxed group-hover:text-gray-100"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.7,
                      delay: 0.3 + 0.1 * index,
                    }}
                    whileHover={{
                      scale: 1.05,
                      color: "#d9f99d", // lighter lime
                    }}
                  >
                    {client.detail}
                  </motion.p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

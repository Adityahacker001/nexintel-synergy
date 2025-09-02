"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
      "Former Deputy CTO at the Department of Energy with 15+ years of experience.",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    description:
      "Award-winning architect with expertise in cloud infrastructure and cybersecurity.",
    image: "/placeholder.svg?height=200&width=200",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-extrabold text-green-800 mb-4 tracking-tight">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the experienced professionals driving sustainability and
            innovation.
          </p>
        </motion.div>

        {/* Team Cards */}
  <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 max-w-6xl mx-auto px-4 md:px-8 items-stretch justify-center" style={{paddingLeft: '150px'}}>
          {team.map((member, index) => {
            const isTeamCard = member.role !== "Chief Executive Officer";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="flex"
              >
                <Card
                  className="overflow-hidden rounded-2xl border-0 bg-white/70 dark:bg-black/40 backdrop-blur-lg shadow-xl 
                             hover:shadow-emerald-200/40 transition-all duration-300 relative ring-1 
                             ring-green-200/40 hover:ring-2 hover:ring-green-400/60 h-full flex flex-col"
                >
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`relative w-full ${
                      isTeamCard ? "h-64" : "h-48"
                    } overflow-hidden`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />
                  </motion.div>

                  {/* Header */}
                  <CardHeader className="relative z-10 text-center p-4 pb-2">
                    <CardTitle className="text-green-900 group-hover:text-green-700 transition-colors duration-300 text-lg font-bold tracking-tight">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-green-600 font-semibold group-hover:text-green-700 text-sm">
                      {member.role}
                    </CardDescription>
                  </CardHeader>

                  {/* Content */}
                  <CardContent className="relative z-10 text-center p-4 pt-2 flex-1 flex flex-col justify-center">
                    <p
                      className={`text-gray-700 mb-4 group-hover:text-gray-900 transition-colors duration-300 leading-relaxed ${
                        isTeamCard ? "text-base" : "text-sm"
                      }`}
                    >
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

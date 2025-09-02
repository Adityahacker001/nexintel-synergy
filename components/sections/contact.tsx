"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const contactInfoVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay: 0.3 } },
};

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "your@email.com",
      href: "mailto:your@email.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9876543210",
      href: "tel:+919876543210",
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Kolkata, West Bengal, India",
      href: "https://maps.google.com?q=Kolkata",
    },
  ];

  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-6xl px-4 md:px-6 mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left Side: Contact Info */}
          <motion.div className="space-y-6">
            <motion.h2
              className="text-3xl font-bold text-gray-900"
              variants={contactInfoVariants}
            >
              Get in touch
            </motion.h2>
            <motion.p
              className="text-gray-600"
              variants={contactInfoVariants}
            >
              We'd love to hear from you. Whether you have a question about
              features, pricing, or anything else, our team is ready to answer
              all your questions.
            </motion.p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  variants={contactInfoVariants}
                >
                  <a
                    href={item.href}
                    className="flex items-start gap-4 p-4 rounded-xl border border-gray-100 bg-white/50 backdrop-blur-sm hover:bg-white hover:shadow-lg transition-all duration-300 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-shrink-0 w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center group-hover:bg-gray-800 transition-colors"
                    >
                      <item.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">
                        {item.label}
                      </p>
                      <p className="text-gray-600 leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg space-y-6"
            variants={formVariants}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your name
              </label>
              <input
                id="name"
                type="text"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm px-4 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm px-4 py-2"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500 sm:text-sm px-4 py-2"
              />
            </div>
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full inline-flex justify-center items-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gray-900 hover:bg-gray-800 transition-all disabled:opacity-50"
            >
              {isLoading ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 rounded-full border-2 border-white border-t-transparent"
                ></motion.div>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

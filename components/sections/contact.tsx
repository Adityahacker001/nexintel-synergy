"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: (t: number) => t } },
};

const ContactSection = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(isLoading) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
        setIsSubmitted(false);
        const form = e.target as HTMLFormElement;
        form.reset();
    }, 4000);
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "contact@nexintel.com", href: "mailto:contact@nexintel.com" },
    { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: MapPin, label: "Address", value: "Kolkata, West Bengal, India", href: "https://maps.google.com?q=Kolkata" },
  ];

  return (
    <motion.section 
      id="contact"
      className="w-full py-12 md:py-16 bg-black relative overflow-hidden text-gray-300"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(57,250,20,0.1)_0%,_rgba(0,0,0,0)_70%)]" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>

      {/* UPDATED: Reduced max-width from 7xl to 6xl for a more compact layout */}
      <div className="max-w-6xl px-4 md:px-6 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Form */}
          <motion.div variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-green-400 via-emerald-400 to-lime-400 bg-clip-text text-transparent drop-shadow-lg">
              Let's Build Together
            </h2>
            <p className="text-lg text-gray-400 max-w-lg mb-8">
              Have a project in mind or just want to learn more? Send us a message and we'll get back to you shortly.
            </p>
            
            <motion.form
                onSubmit={handleSubmit}
                className="relative bg-black p-8 rounded-2xl border border-white/10 space-y-6"
            >
              {['Your name', 'Email address', 'Message'].map((label, index) => (
                  <div key={index}>
                      <label htmlFor={label.split(' ')[0].toLowerCase()} className="block text-sm font-medium text-gray-400 mb-2">{label}</label>
                      {label === 'Message' ? (
                          <textarea id="message" rows={4} required className="mt-1 block w-full bg-gray-900/50 border border-white/10 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm px-4 py-3 text-white transition-all"/>
                      ) : (
                          <input id={label.split(' ')[0].toLowerCase()} type={index === 1 ? 'email' : 'text'} required className="mt-1 block w-full bg-gray-900/50 border border-white/10 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm px-4 py-3 text-white transition-all"/>
                      )}
                  </div>
              ))}

              <motion.button
                type="submit"
                disabled={isLoading || isSubmitted}
                whileHover={{ scale: 1.02, boxShadow: "0px 0px 20px rgba(57, 255, 20, 0.3)"}}
                whileTap={{ scale: 0.98 }}
                className="w-full inline-flex justify-center items-center gap-3 px-6 py-4 border border-transparent text-base font-medium rounded-lg shadow-sm text-black bg-gradient-to-r from-green-400 to-emerald-500 hover:from-green-500 hover:to-emerald-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-5 h-5 rounded-full border-2 border-black border-t-transparent"></motion.div>
                ) : isSubmitted ? "Message Sent!" : ( <><Send className="h-5 w-5"/> Send Message</> )}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Right Side: Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8 lg:pt-4">
              <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Contact Information
                  </h3>
                  <p className="text-gray-400">
                      Reach out to us directly through any of the channels below.
                  </p>
              </div>

              <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -5, transition: { duration: 0.3 } }}
                      className="flex items-center gap-6 p-6 rounded-2xl bg-gray-900/80 backdrop-blur-sm border border-white/10 group transition-all duration-300 hover:border-green-500/50 hover:bg-gray-900"
                    >
                      <div className="flex-shrink-0 w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-green-500/10 group-hover:border-green-500/30 transition-colors">
                          <item.icon className="h-7 w-7 text-green-400" />
                      </div>
                      <div>
                          <p className="font-semibold text-white text-lg mb-1">{item.label}</p>
                          <p className="text-gray-400 leading-relaxed group-hover:text-green-300 transition-colors">{item.value}</p>
                      </div>
                    </motion.a>
                  ))}
              </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection;


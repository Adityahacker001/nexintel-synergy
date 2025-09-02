"use client";

import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-950 via-green-900 to-green-950 text-white py-16 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,rgba(34,197,94,0.4),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg bg-white/90">
                <img
                  src="/logo-3.png"
                  alt="Nexintel synergy logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-2xl font-extrabold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
                Nexintel Synergy
              </span>
            </div>
            <p className="text-green-100 leading-relaxed mb-6 text-sm">
              Pioneering sustainable technology solutions for a smarter,
              greener future.
            </p>
            <div className="flex space-x-5">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-2 rounded-full bg-white/10 hover:bg-green-500/80 hover:text-white transition-all"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-green-300 uppercase tracking-wide">
              Services
            </h4>
            <ul className="space-y-3 text-green-100 text-sm">
              {[
                "Cloud Solutions",
                "Digital Transformation",
                "Cybersecurity",
                "Data Analytics",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-green-300 hover:translate-x-1 transition-all cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-green-300 uppercase tracking-wide">
              Company
            </h4>
            <ul className="space-y-3 text-green-100 text-sm">
              {["About Us", "Our Team", "Careers", "Contact"].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-green-300 hover:translate-x-1 transition-all cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-green-300 uppercase tracking-wide">
              Legal
            </h4>
            <ul className="space-y-3 text-green-100 text-sm">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Security",
                "Compliance",
              ].map((item, i) => (
                <li
                  key={i}
                  className="hover:text-green-300 hover:translate-x-1 transition-all cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-800 mt-12 pt-6 text-center text-green-300/80 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Nexintel Synergy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

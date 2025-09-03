"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { FlipText } from "@/components/magicui/flip-text"
// import Navbar from "./navbar"

export default function HeroSection() {
  const [showNavbar, setShowNavbar] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setShowNavbar(scrollTop > window.innerHeight * 0.8)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "service", label: "Services", href: "#service" },
    { id: "about", label: "About", href: "#about" },
    { id: "clients", label: "Our Clients", href: "#clients" },
    { id: "team", label: "Our Team", href: "#team" },
    { id: "testimonials", label: "Testimonials", href: "#testimonials" },
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          src="/hero1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          poster="/placeholder.jpg"
        >
          Sorry, your browser does not support embedded videos.
        </video>
  {/* Removed overlay to show real video quality */}
      </div>

      {/* Flip Text Hero Title */}
      <div className="relative z-10 text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold ">
         

        </h1>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-8 z-10 flex justify-center w-full">
        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
      </div>

      {/* Fading Navbar Placeholder */}
      <div
        className={`fixed top-0 left-0 w-full transition-opacity duration-700 ${showNavbar ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        {/* <Navbar /> */}
        {/* You can import your navbar component and place it here */}
        {/* <Navbar navItems={navItems} /> */}
      </div>
    </section>
  )
}

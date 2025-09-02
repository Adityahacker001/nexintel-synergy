"use client"


import { useEffect, useState } from "react"

// import Navbar from "@/components/sections/navbar"
import Hero from "@/components/sections/hero"
import OurServices from "@/components/sections/service"
// import ClientsSection from "@/components/sections/client"
// import AboutSection from "@/components/sections/about"
import ClientsSection from "@/components/sections/client"
import TeamSection from "@/components/sections/team"
import TestimonialsSection from "@/components/sections/testimonial"
import ContactSection from "@/components/sections/contact"
import Footer from "@/components/sections/footer"

export default function HomePage() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      // Update active section based on scroll position
      const sections = ["home", "service", "about", "clients", "team", "testimonials"]
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (currentSection) setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Enhanced Professional Navigation */}
       {/* <Navbar navItems={navItems} activeSection={activeSection} /> */}

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      {/* <AboutSection/> */}

       {/* Services Section */}
      <OurServices />

      {/* Our Clients Section */}
      <ClientsSection/>

      {/* Our Team Section */}
      <TeamSection/>

      {/* Testimonials Section */}
      <TestimonialsSection/>

      {/* Contact Section */}
      <ContactSection/>

      {/* Footer */}
     <Footer/>
    </div>
  )
}

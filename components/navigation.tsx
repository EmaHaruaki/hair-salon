"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#home" className="text-2xl font-serif tracking-wider">
              ABC HAIR
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#concept" className="text-lg font-serif hover:opacity-70">
                Concept
              </a>
              <a href="#menu" className="text-lg font-serif hover:opacity-70">
                Menu
              </a>
              <a href="#staff" className="text-lg font-serif hover:opacity-70">
                Staff
              </a>
              <a href="#access" className="text-lg font-serif hover:opacity-70">
                Access
              </a>
              <Button variant="outline" size="lg" className="text-lg font-serif">
                予約する
              </Button>
            </nav>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background md:hidden fade-in">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#concept" className="text-2xl font-serif" onClick={() => setIsMenuOpen(false)}>
              Concept
            </a>
            <a href="#menu" className="text-2xl font-serif" onClick={() => setIsMenuOpen(false)}>
              Menu
            </a>
            <a href="#staff" className="text-2xl font-serif" onClick={() => setIsMenuOpen(false)}>
              Staff
            </a>
            <a href="#access" className="text-2xl font-serif" onClick={() => setIsMenuOpen(false)}>
              Access
            </a>
            <Button size="lg" onClick={() => setIsMenuOpen(false)} className="text-xl font-serif">
              予約する
            </Button>
          </div>
        </div>
      )}
    </>
  )
}


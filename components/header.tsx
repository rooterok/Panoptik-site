"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Eye, Phone } from "lucide-react"
import { getSiteContent } from "@/lib/admin-data"
import EngineerModal from "./engineer-modal"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [content, setContent] = useState(getSiteContent())

  useEffect(() => {
    // Обновляем контент при изменении localStorage
    const handleStorageChange = () => {
      setContent(getSiteContent())
    }

    window.addEventListener("storage", handleStorageChange)
    // Также проверяем изменения каждые 1000ms для случаев изменения в той же вкладке
    const interval = setInterval(handleStorageChange, 1000)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      clearInterval(interval)
    }
  }, [])

  const scrollToQuickCalculator = () => {
    const element = document.getElementById("quick-calculator")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    } else {
      // Если мы не на главной странице, переходим на главную и затем скроллим
      window.location.href = "/#quick-calculator"
    }
  }

  const handleEngineerCall = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <Eye className="h-8 w-8 text-blue-500" />
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-sm"></div>
              </div>
              <span className="text-xl font-bold text-white">{content.header.companyName}</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {content.header.navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-300 hover:text-blue-400 transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href={`tel:${content.header.phone}`}
                className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">{content.header.phone}</span>
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleEngineerCall}>
                {content.header.ctaButtonText}
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="lg:hidden text-slate-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-slate-800">
              <nav className="flex flex-col space-y-4">
                {content.header.navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-slate-300 hover:text-blue-400 transition-colors px-4 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-4 border-t border-slate-800">
                  <a
                    href={`tel:${content.header.phone}`}
                    className="flex items-center space-x-2 text-slate-300 hover:text-blue-400 transition-colors mb-4"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">{content.header.phone}</span>
                  </a>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleEngineerCall}>
                    {content.header.ctaButtonText}
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <EngineerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

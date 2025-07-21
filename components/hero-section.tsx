"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Eye } from "lucide-react"
import { getSiteContent } from "@/lib/admin-data"
import EngineerModal from "./engineer-modal"

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [content, setContent] = useState(getSiteContent())

  useEffect(() => {
    const handleStorageChange = () => {
      setContent(getSiteContent())
    }

    window.addEventListener("storage", handleStorageChange)
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
    }
  }

  return (
    <>
      <section className="relative bg-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, #2563eb 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, #0ea5e9 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900/50 to-slate-900"></div>

        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Heading */}
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Eye className="h-16 w-16 text-blue-500" />
                  <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl"></div>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {content.hero.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">{content.hero.description}</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                onClick={scrollToQuickCalculator}
              >
                Подобрать решение
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Key Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              {content.hero.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{stat.number}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <EngineerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

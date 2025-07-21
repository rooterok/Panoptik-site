"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Camera, Home, Shield } from "lucide-react"
import Image from "next/image"
import { getSiteContent } from "@/lib/admin-data"

export default function PopularSolutions() {
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

  const iconMap = {
    Видеонаблюдение: Camera,
    СКУД: Home,
    Сигнализации: Shield,
  }

  return (
    <section className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Популярные решения</h2>
            <p className="text-xl text-slate-300">Готовые комплексы для различных задач безопасности</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.solutions.map((solution, index) => {
            const IconComponent = iconMap[solution.category as keyof typeof iconMap] || Camera

            return (
              <div
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="aspect-square bg-slate-700 p-4 relative">
                  <div className="absolute top-4 left-4">
                    <IconComponent className="h-8 w-8 text-blue-400" />
                  </div>
                  <Image
                    src={solution.image || "/placeholder.svg"}
                    alt={solution.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-blue-400 font-medium">{solution.category}</span>
                  </div>

                  <h3 className="text-white font-semibold mb-2 text-sm leading-tight">{solution.name}</h3>

                  <p className="text-slate-400 text-xs mb-3">{solution.description}</p>

                  <ul className="space-y-1 mb-4">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-slate-400 text-xs flex items-center">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-400">{solution.price}</span>
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs"
                      onClick={scrollToQuickCalculator}
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Camera, Home, Shield, Settings } from "lucide-react"
import Link from "next/link"
import { getSiteContent } from "@/lib/admin-data"

export default function ServicesSection() {
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

  const iconMap = {
    Видеонаблюдение: Camera,
    СКУД: Home,
    "Охранные сигнализации": Shield,
    "Монтаж & Сервис": Settings,
  }

  return (
    <section className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Наши услуги</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Комплексные решения безопасности для любых задач</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.services.map((service, index) => {
            const IconComponent = iconMap[service.title as keyof typeof iconMap] || Settings

            return (
              <Link key={index} href={`/service-${index + 1}`} className="group">
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 h-full hover:border-blue-500 transition-all duration-300 hover:bg-slate-700/50">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4 group-hover:bg-blue-600/30 transition-colors">
                    <IconComponent className="h-6 w-6 text-blue-400" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 mb-4 text-sm leading-relaxed">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-slate-400 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { getSiteContent } from "@/lib/admin-data"

export default function PartnersSection() {
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

  if (content.partners.length === 0) {
    return null
  }

  return (
    <section className="py-16 bg-slate-800/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Наши партнеры</h2>
          <p className="text-slate-300">Работаем только с проверенными производителями оборудования</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-8 items-center">
          {content.partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={120}
                height={60}
                className="opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

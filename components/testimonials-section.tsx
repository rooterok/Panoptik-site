"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"
import Image from "next/image"
import { getSiteContent } from "@/lib/admin-data"

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % content.testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + content.testimonials.length) % content.testimonials.length)
  }

  if (content.testimonials.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Отзывы клиентов</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Более 500 довольных клиентов доверили нам безопасность своих объектов
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 md:p-12">
              <div className="flex justify-center mb-6">
                <Quote className="h-12 w-12 text-blue-400 opacity-50" />
              </div>

              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(content.testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-6 italic">
                  "{content.testimonials[currentSlide].text}"
                </p>

                <div className="text-sm text-blue-400 mb-4">{content.testimonials[currentSlide].project}</div>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <Image
                  src={content.testimonials[currentSlide].avatar || "/placeholder.svg"}
                  alt={content.testimonials[currentSlide].name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="text-left">
                  <div className="text-white font-semibold">{content.testimonials[currentSlide].name}</div>
                  <div className="text-slate-400 text-sm">{content.testimonials[currentSlide].position}</div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={prevSlide}
                className="border-slate-600 text-white hover:bg-slate-700 bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex space-x-2">
                {content.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentSlide ? "bg-blue-400" : "bg-slate-600"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={nextSlide}
                className="border-slate-600 text-white hover:bg-slate-700 bg-transparent"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

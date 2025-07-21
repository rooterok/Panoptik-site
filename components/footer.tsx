"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Eye, Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getSiteContent } from "@/lib/admin-data"
import EngineerModal from "./engineer-modal"

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [content, setContent] = useState(getSiteContent())

  useEffect(() => {
    // Обновляем контент при изменении localStorage
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
    } else {
      window.location.href = "/#quick-calculator"
    }
  }

  const handleEngineerCall = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6">
                <div className="relative">
                  <Eye className="h-8 w-8 text-blue-500" />
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-sm"></div>
                </div>
                <span className="text-xl font-bold text-white">{content.footer.companyName}</span>
              </Link>

              <p className="text-slate-300 mb-6 leading-relaxed">{content.footer.description}</p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-slate-300">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span>{content.footer.contact.phone}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>{content.footer.contact.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>{content.footer.contact.address}</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <span>{content.footer.contact.workingHours}</span>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white" onClick={handleEngineerCall}>
                {content.footer.ctaButtonText}
              </Button>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4">Услуги</h3>
              <ul className="space-y-3">
                {content.footer.services.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-slate-300 hover:text-blue-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-white font-semibold mb-4">Компания</h3>
              <ul className="space-y-3">
                {content.footer.company.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-slate-300 hover:text-blue-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-3">
                {content.footer.support.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="text-slate-300 hover:text-blue-400 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-slate-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} {content.footer.companyName}. Все права защищены.
              </div>

              <div className="flex space-x-6 text-sm">
                <Link href="/privacy" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Политика конфиденциальности
                </Link>
                <Link href="/terms" className="text-slate-400 hover:text-blue-400 transition-colors">
                  Пользовательское соглашение
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Eye Symbol */}
        <div className="absolute bottom-4 right-4 opacity-10">
          <Eye className="h-24 w-24 text-blue-500" />
        </div>
      </footer>

      <EngineerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

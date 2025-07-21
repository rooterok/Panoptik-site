"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Home, CreditCard, Fingerprint, Eye, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import EngineerModal from "@/components/engineer-modal"

export default function AccessControlPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const solutions = [
    {
      icon: Home,
      title: "Видеодомофоны",
      description: "Современные системы видеосвязи для жилых и коммерческих объектов",
      features: ["HD видео", "Мобильное приложение", "Облачное хранение", "Многоквартирные дома"],
    },
    {
      icon: CreditCard,
      title: "Карточные системы",
      description: "Контроль доступа по картам и брелокам различных форматов",
      features: ["RFID/Mifare карты", "Многоуровневый доступ", "Учет рабочего времени", "Интеграция с 1С"],
    },
    {
      icon: Fingerprint,
      title: "Биометрический доступ",
      description: "Системы распознавания по отпечаткам пальцев и лицу",
      features: ["Отпечатки пальцев", "Распознавание лиц", "Высокая точность", "Антиспуфинг защита"],
    },
    {
      icon: Eye,
      title: "Интеграция с видеонаблюдением",
      description: "Комплексные решения с привязкой к системам видеонаблюдения",
      features: ["Видеоверификация", "Поиск по событиям", "Автоматические отчеты", "Удаленный мониторинг"],
    },
  ]

  const intercomTypes = [
    {
      name: "Аналоговые домофоны",
      image: "/placeholder.svg?height=200&width=300",
      description: "Надежные решения для небольших объектов",
      specs: ["Простота установки", "Низкая стоимость", "Высокая надежность"],
      price: "от 8 000 ₽",
    },
    {
      name: "IP видеодомофоны",
      image: "/placeholder.svg?height=200&width=300",
      description: "Современные цифровые системы с расширенным функционалом",
      specs: ["HD качество", "Удаленный доступ", "Интеграция с умным домом"],
      price: "от 25 000 ₽",
    },
    {
      name: "Облачные домофоны",
      image: "/placeholder.svg?height=200&width=300",
      description: "Инновационные решения с облачным управлением",
      specs: ["Мобильное приложение", "Облачное хранение", "Многопользовательский доступ"],
      price: "от 35 000 ₽",
    },
  ]

  const scrollToQuickCalculator = () => {
    window.location.href = "/#quick-calculator"
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">СКУД</h1>
              <p className="text-xl text-slate-300 mb-8">
                Системы контроля и управления доступом. Видеодомофоны, карточные системы, биометрия - комплексные
                решения для любых объектов.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setIsModalOpen(true)}
                >
                  Получить консультацию
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Наши решения СКУД</h2>
              <p className="text-xl text-slate-300">От простых домофонов до сложных биометрических систем</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {solutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4">
                    <solution.icon className="h-6 w-6 text-blue-400" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>

                  <p className="text-slate-300 mb-4 text-sm">{solution.description}</p>

                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-slate-400 text-sm flex items-center">
                        <CheckCircle className="h-3 w-3 text-blue-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intercom Types */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Типы видеодомофонов</h2>
              <p className="text-xl text-slate-300">Выберите оптимальное решение для вашего объекта</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {intercomTypes.map((intercom, index) => (
                <div
                  key={index}
                  className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors"
                >
                  <div className="aspect-video bg-slate-700">
                    <Image
                      src={intercom.image || "/placeholder.svg"}
                      alt={intercom.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">{intercom.name}</h3>
                      <span className="text-blue-400 font-semibold">{intercom.price}</span>
                    </div>

                    <p className="text-slate-300 mb-4 text-sm">{intercom.description}</p>

                    <ul className="space-y-2">
                      {intercom.specs.map((spec, specIndex) => (
                        <li key={specIndex} className="text-slate-400 text-sm flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Готовы установить СКУД?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Получите бесплатную консультацию и расчет стоимости системы контроля доступа
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setIsModalOpen(true)}
                >
                  Получить консультацию
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <EngineerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}

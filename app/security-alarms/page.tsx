"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Shield, Smartphone, Wifi, Siren, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import EngineerModal from "@/components/engineer-modal"

export default function SecurityAlarmsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const solutions = [
    {
      icon: Smartphone,
      title: "GSM сигнализации",
      description: "Беспроводные системы с уведомлениями на мобильный телефон",
      features: ["SMS/звонки", "Мобильное приложение", "Автономная работа", "Простая установка"],
    },
    {
      icon: Shield,
      title: "Пультовая охрана",
      description: "Подключение к центральной станции мониторинга 24/7",
      features: ["Круглосуточный мониторинг", "Быстрое реагирование", "Профессиональная охрана", "Договор с ЧОП"],
    },
    {
      icon: Wifi,
      title: "Беспроводные системы",
      description: "Современные радиоканальные системы безопасности",
      features: ["Без проводов", "Защита от помех", "Дальность до 2км", "Простое расширение"],
    },
    {
      icon: Siren,
      title: "Проводные системы",
      description: "Надежные проводные системы для максимальной защиты",
      features: ["Высокая надежность", "Защита от саботажа", "Низкая стоимость", "Долговечность"],
    },
  ]

  const alarmTypes = [
    {
      name: "GSM сигнализация для дома",
      image: "/placeholder.svg?height=200&width=300",
      description: "Базовый комплект для защиты квартиры или дома",
      specs: ["2-4 датчика движения", "Датчики на двери/окна", "GSM модуль", "Мобильное приложение"],
      price: "от 15 000 ₽",
    },
    {
      name: "Система для дачи",
      image: "/placeholder.svg?height=200&width=300",
      description: "Автономная система для загородных объектов",
      specs: ["Уличные датчики", "Длительная автономность", "Защита от животных", "Температурный контроль"],
      price: "от 25 000 ₽",
    },
    {
      name: "Коммерческая система",
      image: "/placeholder.svg?height=200&width=300",
      description: "Профессиональные решения для бизнеса",
      specs: ["До 100 датчиков", "Интеграция с видео", "Контроль доступа", "Центральный мониторинг"],
      price: "от 50 000 ₽",
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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Охранные сигнализации</h1>
              <p className="text-xl text-slate-300 mb-8">
                GSM сигнализации для дома и дачи, пультовая охрана 24/7, беспроводные и проводные системы безопасности.
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Типы охранных систем</h2>
              <p className="text-xl text-slate-300">Выберите оптимальное решение для вашего объекта</p>
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

        {/* Alarm Types */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Готовые решения</h2>
              <p className="text-xl text-slate-300">Комплекты сигнализаций для различных объектов</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {alarmTypes.map((alarm, index) => (
                <div
                  key={index}
                  className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors"
                >
                  <div className="aspect-video bg-slate-700">
                    <Image
                      src={alarm.image || "/placeholder.svg"}
                      alt={alarm.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-white">{alarm.name}</h3>
                      <span className="text-blue-400 font-semibold">{alarm.price}</span>
                    </div>

                    <p className="text-slate-300 mb-4 text-sm">{alarm.description}</p>

                    <ul className="space-y-2">
                      {alarm.specs.map((spec, specIndex) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Защитите свой объект уже сегодня</h2>
              <p className="text-xl text-slate-300 mb-8">
                Получите бесплатную консультацию и расчет стоимости охранной сигнализации
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

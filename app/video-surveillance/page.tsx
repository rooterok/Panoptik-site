"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Camera, Monitor, Cloud, Shield, CheckCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import EngineerModal from "@/components/engineer-modal"

export default function VideoSurveillancePage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const solutions = [
    {
      icon: Camera,
      title: "HD/4K Камеры",
      description: "Высокое разрешение для детального наблюдения",
      features: ["До 8MP разрешение", "Ночное видение до 50м", "Защита IP67", "Детекция движения"],
    },
    {
      icon: Monitor,
      title: "IP и Аналоговые системы",
      description: "Современные IP решения и модернизация аналоговых систем",
      features: ["Передача по сети", "AHD технология", "Удаленный доступ", "Масштабируемость"],
    },
    {
      icon: Cloud,
      title: "Облачное хранение",
      description: "Безопасное хранение записей в облаке",
      features: ["Доступ из любой точки", "Автоматическое резервирование", "Шифрование данных", "Гибкие тарифы"],
    },
    {
      icon: Shield,
      title: "Локальные регистраторы",
      description: "Надежное локальное хранение видеоархива",
      features: ["До 32 каналов", "RAID массивы", "Резервное питание", "AI аналитика"],
    },
  ]

  const cameraTypes = [
    {
      name: "Уличные камеры",
      image: "/placeholder.svg?height=200&width=300",
      description: "Защищенные корпуса для наружного наблюдения",
      specs: ["IP67 защита", "Рабочая температура -40°C до +60°C", "ИК подсветка до 100м"],
    },
    {
      name: "Купольные камеры",
      image: "/placeholder.svg?height=200&width=300",
      description: "Дискретное наблюдение для помещений",
      specs: ["Антивандальный корпус", "Широкий угол обзора", "Скрытая направленность"],
    },
    {
      name: "PTZ камеры",
      image: "/placeholder.svg?height=200&width=300",
      description: "Поворотные камеры с зумом",
      specs: ["360° поворот", "Оптический зум до 30x", "Автоследование объектов"],
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
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Видеонаблюдение</h1>
              <p className="text-xl text-slate-300 mb-8">
                Профессиональные системы видеонаблюдения для дома и бизнеса. HD/4K качество, облачное и локальное
                хранение, удаленный доступ 24/7.
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Наши решения</h2>
              <p className="text-xl text-slate-300">Комплексные системы видеонаблюдения под любые задачи</p>
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

        {/* Camera Types */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Типы камер</h2>
              <p className="text-xl text-slate-300">Подберем оптимальное оборудование для вашего объекта</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {cameraTypes.map((camera, index) => (
                <div
                  key={index}
                  className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors"
                >
                  <div className="aspect-video bg-slate-700">
                    <Image
                      src={camera.image || "/placeholder.svg"}
                      alt={camera.name}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{camera.name}</h3>

                    <p className="text-slate-300 mb-4 text-sm">{camera.description}</p>

                    <ul className="space-y-2">
                      {camera.specs.map((spec, specIndex) => (
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Готовы обеспечить безопасность?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Получите бесплатную консультацию и расчет стоимости системы видеонаблюдения
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

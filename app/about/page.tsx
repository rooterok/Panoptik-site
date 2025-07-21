"use client"
import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Eye, Shield, Users, Award, Phone } from "lucide-react"
import Image from "next/image"
import EngineerModal from "@/components/engineer-modal"

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const values = [
    {
      icon: Eye,
      title: "Всевидящая защита",
      description:
        "Мы создаем системы, которые видят все, но не нарушают приватность. Технологии на службе безопасности, а не слежки.",
    },
    {
      icon: Shield,
      title: "Надежность",
      description:
        "Используем только проверенное оборудование от ведущих производителей. Каждая система проходит тщательное тестирование.",
    },
    {
      icon: Users,
      title: "100+ реализованных проектов",
      description:
        "За время работы мы успешно реализовали более 100 проектов различной сложности для частных и корпоративных клиентов.",
    },
    {
      icon: Award,
      title: "99% довольных клиентов",
      description:
        "Высокое качество работ и индивидуальный подход к каждому проекту обеспечивают максимальную удовлетворенность наших клиентов.",
    },
  ]

  const team = [
    {
      name: "Мария Петрова",
      position: "Руководитель проектов",
      experience: "8 лет управления проектами",
      image: "/placeholder.svg?height=200&width=200",
      description: "Специалист по комплексным решениям безопасности",
    },
    {
      name: "Дмитрий Сидоров",
      position: "Ведущий инженер",
      experience: "10 лет монтажа и настройки",
      image: "/placeholder.svg?height=200&width=200",
      description: "Сертифицированный инженер Hikvision и Dahua",
    },
  ]

  const achievements = [
    { number: "500+", label: "Реализованных проектов" },
    { number: "10", label: "Лет на рынке" },
    { number: "24/7", label: "Техническая поддержка" },
    { number: "99%", label: "Довольных клиентов" },
  ]

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Eye className="h-16 w-16 text-blue-500" />
                  <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-xl"></div>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">О компании Паноптикум</h1>
              <p className="text-xl text-slate-300 mb-8">
                Мы создаем системы безопасности, которые защищают, не нарушая приватность. Философия разумной
                безопасности в каждом проекте.
              </p>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Наша философия</h2>
                <div className="w-24 h-1 bg-blue-500 mx-auto mb-8"></div>
              </div>

              <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 md:p-12">
                <blockquote className="text-xl md:text-2xl text-slate-300 leading-relaxed text-center italic mb-8">
                  "Паноптикум - это не о слежке, а о защите. Мы создаем системы, которые видят угрозы, но уважают
                  приватность. Технологии должны служить безопасности, а не контролю."
                </blockquote>
                <div className="text-center">
                  <div className="text-blue-400 font-semibold">Основатель и технический директор</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Наши ценности</h2>
              <p className="text-xl text-slate-300">Принципы, которыми мы руководствуемся в работе</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-blue-400" />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>

                  <p className="text-slate-300 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-16 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-blue-400 mb-2">{achievement.number}</div>
                  <div className="text-slate-300">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Наша команда</h2>
              <p className="text-xl text-slate-300">Профессионалы с многолетним опытом в сфере безопасности</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:border-blue-500/50 transition-colors"
                >
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-slate-700">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>

                  <div className="text-blue-400 font-medium mb-2">{member.position}</div>

                  <div className="text-slate-400 text-sm mb-4">{member.experience}</div>

                  <p className="text-slate-300 text-sm">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Готовы работать с профессионалами?</h2>
              <p className="text-xl text-slate-300 mb-8">
                Доверьте безопасность вашего объекта команде экспертов с 10-летним опытом
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Связаться с нами
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

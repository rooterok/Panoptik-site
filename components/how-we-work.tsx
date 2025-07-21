import { MessageCircle, FileText, Wrench, Settings, Shield } from "lucide-react"

export default function HowWeWork() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Консультация",
      description: "Обсуждаем ваши потребности и особенности объекта",
      details: "Бесплатный выезд инженера для оценки объекта",
    },
    {
      icon: FileText,
      title: "Проектирование",
      description: "Разрабатываем техническое решение и смету",
      details: "Подбор оптимального оборудования под бюджет",
    },
    {
      icon: Wrench,
      title: "Монтаж",
      description: "Профессиональная установка оборудования",
      details: "Скрытая прокладка кабелей, аккуратная работа",
    },
    {
      icon: Settings,
      title: "Настройка",
      description: "Конфигурация системы и обучение пользователей",
      details: "Настройка мобильных приложений и уведомлений",
    },
    {
      icon: Shield,
      title: "Гарантия",
      description: "Гарантийное и постгарантийное обслуживание",
      details: "Круглосуточная техническая поддержка",
    },
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Как мы работаем</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Пошаговый процесс от консультации до запуска системы
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-slate-700 z-0">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-transparent w-1/2"></div>
                  </div>
                )}

                <div className="relative z-10 text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mx-auto mb-4">
                    <step.icon className="h-6 w-6 text-white" />
                  </div>

                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 transition-colors h-full">
                    <h3 className="text-white font-semibold mb-2 text-sm">{step.title}</h3>
                    <p className="text-slate-300 text-xs mb-2 leading-relaxed">{step.description}</p>
                    <p className="text-blue-400 text-xs">{step.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

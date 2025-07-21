import { CheckCircle, Users, Wrench, Cloud, Headphones, Award } from "lucide-react"

export default function AdvantagesSection() {
  const advantages = [
    {
      icon: Users,
      title: "Экспертный подбор",
      description: "Индивидуальный подход к каждому объекту с учетом специфики и бюджета",
    },
    {
      icon: Wrench,
      title: "Скрытый монтаж",
      description: "Профессиональная установка с минимальным вмешательством в интерьер",
    },
    {
      icon: Cloud,
      title: "Облачный контроль",
      description: "Удаленный доступ к системам через мобильное приложение 24/7",
    },
    {
      icon: Headphones,
      title: "Круглосуточная поддержка",
      description: "Техническая поддержка и экстренное реагирование в любое время",
    },
    {
      icon: Award,
      title: "Гарантия 3 года",
      description: "Расширенная гарантия на все оборудование и выполненные работы",
    },
    {
      icon: CheckCircle,
      title: "Лицензированная деятельность",
      description: "Все необходимые лицензии и сертификаты для работы с системами безопасности",
    },
  ]

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Почему выбирают нас</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">Профессиональный подход и качество на каждом этапе</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="group">
              <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 h-full hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg mb-4 group-hover:bg-blue-600/30 transition-colors">
                  <advantage.icon className="h-6 w-6 text-blue-400" />
                </div>

                <h3 className="text-xl font-semibold text-white mb-3">{advantage.title}</h3>

                <p className="text-slate-300 text-sm leading-relaxed">{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

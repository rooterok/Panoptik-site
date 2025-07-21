import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Пользовательское соглашение</h1>

              <div className="prose prose-invert max-w-none">
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 mb-8">
                  <p className="text-slate-300 mb-6">
                    Настоящее Пользовательское соглашение определяет условия использования сайта и услуг компании
                    "Паноптикум".
                  </p>
                  <p className="text-slate-400 text-sm">
                    Дата последнего обновления: {new Date().toLocaleDateString("ru-RU")}
                  </p>
                </div>

                <div className="space-y-8">
                  <section className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-white mb-4">1. Общие условия</h2>
                    <div className="text-slate-300 space-y-4">
                      <p>
                        Использование сайта panopticum.ru означает полное согласие с условиями настоящего Соглашения.
                        Если вы не согласны с какими-либо условиями, прекратите использование сайта.
                      </p>
                      <p>
                        Компания "Паноптикум" оставляет за собой право изменять условия Соглашения без предварительного
                        уведомления пользователей.
                      </p>
                    </div>
                  </section>

                  <section className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-white mb-4">2. Услуги компании</h2>
                    <div className="text-slate-300 space-y-4">
                      <p>Компания "Паноптикум" предоставляет следующие услуги:</p>
                      <ul className="list-disc list-inside space-y-2 text-slate-300">
                        <li>Проектирование и монтаж систем видеонаблюдения</li>
                        <li>Установка систем контроля и управления доступом (СКУД)</li>
                        <li>Монтаж охранных сигнализаций</li>
                        <li>Техническое обслуживание систем безопасности</li>
                        <li>Консультации по вопросам безопасности</li>
                      </ul>
                    </div>
                  </section>

                  <section className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-white mb-4">3. Обязательства сторон</h2>
                    <div className="text-slate-300 space-y-4">
                      <h3 className="text-lg font-semibold text-white">Обязательства Компании:</h3>
                      <ul className="list-disc list-inside space-y-2 text-slate-300">
                        <li>Предоставлять качественные услуги в соответствии с договором</li>
                        <li>Соблюдать сроки выполнения работ</li>
                        <li>Обеспечивать гарантийное обслуживание</li>
                        <li>Защищать конфиденциальность клиентов</li>
                      </ul>

                      <h3 className="text-lg font-semibold text-white mt-6">Обязательства Клиента:</h3>
                      <ul className="list-disc list-inside space-y-2 text-slate-300">
                        <li>Предоставлять достоверную информацию</li>
                        <li>Обеспечивать доступ к объекту для выполнения работ</li>
                        <li>Своевременно оплачивать услуги</li>
                        <li>Соблюдать правила эксплуатации оборудования</li>
                      </ul>
                    </div>
                  </section>

                  <section className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-white mb-4">4. Гарантии</h2>
                    <div className="text-slate-300 space-y-4">
                      <p>
                        Компания предоставляет гарантию на выполненные работы и установленное оборудование сроком до 3
                        лет в зависимости от типа системы.
                      </p>
                      <p>
                        Гарантия не распространяется на повреждения, вызванные неправильной эксплуатацией, стихийными
                        бедствиями или действиями третьих лиц.
                      </p>
                    </div>
                  </section>

                  <section className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-white mb-4">5. Ответственность</h2>
                    <div className="text-slate-300 space-y-4">
                      <p>
                        Компания несет ответственность за качество выполненных работ в пределах, установленных
                        действующим законодательством РФ.
                      </p>
                      <p>
                        Компания не несет ответственности за ущерб, причиненный в результате неправильного использования
                        оборудования или несоблюдения рекомендаций по эксплуатации.
                      </p>
                    </div>
                  </section>

                  <section className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-white mb-4">6. Разрешение споров</h2>
                    <div className="text-slate-300 space-y-4">
                      <p>
                        Все споры и разногласия, возникающие между сторонами, решаются путем переговоров. При
                        невозможности достижения соглашения споры подлежат рассмотрению в судебном порядке по месту
                        нахождения Компании.
                      </p>
                      <p>Настоящее Соглашение регулируется законодательством Российской Федерации.</p>
                    </div>
                  </section>

                  <section className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-white mb-4">7. Контактная информация</h2>
                    <div className="text-slate-300 space-y-4">
                      <p>По всем вопросам, связанным с настоящим Соглашением, обращайтесь:</p>
                      <ul className="space-y-2 text-slate-300">
                        <li>ООО "Паноптикум"</li>
                        <li>Email: info@panopticum.ru</li>
                        <li>Телефон: +7 (495) 123-45-67</li>
                        <li>Адрес: Москва, ул. Примерная, д. 123</li>
                      </ul>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

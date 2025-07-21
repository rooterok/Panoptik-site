import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Политика конфиденциальности</h1>

              <div className="prose prose-invert max-w-none">
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-8 mb-8">
                  <p className="text-slate-300 mb-6">
                    Настоящая Политика конфиденциальности определяет порядок обработки персональных данных пользователей
                    сайта компании "Паноптикум".
                  </p>
                  <p className="text-slate-400 text-sm">
                    Дата последнего обновления: {new Date().toLocaleDateString("ru-RU")}
                  </p>
                </div>

                <div className="space-y-8">
                  <section className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-white mb-4">1. Общие положения</h2>
                    <div className="text-slate-300 space-y-4">
                      <p>
                        Компания "Паноптикум" (далее - Компания) обязуется защищать конфиденциальность персональных
                        данных пользователей в соответствии с требованиями Федерального закона "О персональных данных" №
                        152-ФЗ.
                      </p>
                      <p>
                        Настоящая Политика применяется к персональным данным, получаемым через официальный сайт
                        Компании, формы обратной связи, телефонные звонки и иные способы взаимодействия.
                      </p>
                    </div>
                  </section>

                  <section className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-white mb-4">2. Собираемые данные</h2>
                    <div className="text-slate-300 space-y-4">
                      <p>Мы можем собирать следующие персональные данные:</p>
                      <ul className="list-disc list-inside space-y-2 text-slate-300">
                        <li>Фамилия, имя, отчество</li>
                        <li>Контактный телефон</li>
                        <li>Адрес электронной почты</li>
                        <li>Адрес объекта для установки оборудования</li>
                        <li>Техническая информация о посещении сайта</li>
                      </ul>
                    </div>
                  </section>

                  <section className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-white mb-4">3. Цели обработки данных</h2>
                    <div className="text-slate-300 space-y-4">
                      <p>Персональные данные используются для:</p>
                      <ul className="list-disc list-inside space-y-2 text-slate-300">
                        <li>Предоставления консультаций по системам безопасности</li>
                        <li>Расчета стоимости оборудования и услуг</li>
                        <li>Организации выезда инженера на объект</li>
                        <li>Выполнения договорных обязательств</li>
                        <li>Информирования о новых услугах и акциях</li>
                      </ul>
                    </div>
                  </section>

                  <section className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-white mb-4">4. Защита данных</h2>
                    <div className="text-slate-300 space-y-4">
                      <p>
                        Компания принимает необходимые технические и организационные меры для защиты персональных данных
                        от неправомерного доступа, изменения, раскрытия или уничтожения.
                      </p>
                      <p>
                        Доступ к персональным данным имеют только уполномоченные сотрудники Компании, которые обязаны
                        соблюдать конфиденциальность.
                      </p>
                    </div>
                  </section>

                  <section className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-white mb-4">5. Права субъектов данных</h2>
                    <div className="text-slate-300 space-y-4">
                      <p>Вы имеете право:</p>
                      <ul className="list-disc list-inside space-y-2 text-slate-300">
                        <li>Получать информацию об обработке ваших персональных данных</li>
                        <li>Требовать уточнения, блокирования или уничтожения данных</li>
                        <li>Отзывать согласие на обработку персональных данных</li>
                        <li>Обращаться в уполномоченный орган по защите прав субъектов персональных данных</li>
                      </ul>
                    </div>
                  </section>

                  <section className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold text-white mb-4">6. Контактная информация</h2>
                    <div className="text-slate-300 space-y-4">
                      <p>По вопросам обработки персональных данных обращайтесь:</p>
                      <ul className="space-y-2 text-slate-300">
                        <li>Email: privacy@panopticum.ru</li>
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

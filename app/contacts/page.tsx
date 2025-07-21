"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { useState } from "react"

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Новое сообщение с сайта:
Имя: ${formData.name}
Телефон: ${formData.phone}
Email: ${formData.email}
Сообщение: ${formData.message}`

    const telegramUrl = `https://t.me/panopticum_bot?start=${encodeURIComponent(message)}`
    window.open(telegramUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Контакты</h1>
              <p className="text-xl text-slate-300 mb-8">
                Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь с вопросами безопасности.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Как с нами связаться</h2>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg flex-shrink-0">
                      <Phone className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Телефон</h3>
                      <p className="text-slate-300">+7 (495) 123-45-67</p>
                      <p className="text-slate-400 text-sm">Звонки принимаем с 9:00 до 18:00</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg flex-shrink-0">
                      <Mail className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Email</h3>
                      <p className="text-slate-300">info@panopticum.ru</p>
                      <p className="text-slate-400 text-sm">Отвечаем в течение 2 часов</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg flex-shrink-0">
                      <MapPin className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Адрес</h3>
                      <p className="text-slate-300">Москва, ул. Примерная, д. 123, офис 45</p>
                      <p className="text-slate-400 text-sm">Метро "Технопарк", 5 минут пешком</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-600/20 rounded-lg flex-shrink-0">
                      <Clock className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Режим работы</h3>
                      <p className="text-slate-300">Пн-Пт: 9:00-18:00</p>
                      <p className="text-slate-300">Сб: 10:00-16:00</p>
                      <p className="text-slate-300">Вс: выходной</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Написать нам</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white">
                          Ваше имя *
                        </Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Введите имя"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white">
                          Телефон *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white">
                        Сообщение *
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="Опишите ваш вопрос или задачу..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 min-h-[120px]"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                      <Send className="mr-2 h-4 w-4" />
                      Отправить сообщение
                    </Button>

                    <p className="text-slate-400 text-sm text-center">
                      Нажимая кнопку, вы соглашаетесь с{" "}
                      <a href="/privacy" className="text-blue-400 hover:underline">
                        политикой конфиденциальности
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-slate-800/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Как нас найти</h2>

              <div className="bg-slate-800 border border-slate-700 rounded-xl p-4">
                <div className="aspect-video bg-slate-700 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                    <p className="text-white font-semibold mb-2">Интерактивная карта</p>
                    <p className="text-slate-400 text-sm">Москва, ул. Примерная, д. 123</p>
                  </div>
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

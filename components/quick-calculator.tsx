"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator } from "lucide-react"
import { sendToTelegram } from "@/lib/telegram"

export default function QuickCalculator() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const result = await sendToTelegram(formData)
      if (result.success) {
        alert("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.")
        setFormData({ name: "", phone: "", service: "", message: "" })
      } else {
        alert("Произошла ошибка при отправке заявки. Попробуйте еще раз.")
      }
    } catch (error) {
      alert("Произошла ошибка при отправке заявки. Попробуйте еще раз.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="quick-calculator" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center w-16 h-16 bg-blue-600/20 rounded-full">
                <Calculator className="h-8 w-8 text-blue-400" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Быстрый расчет стоимости</h2>
            <p className="text-xl text-slate-300">Получите предварительную стоимость за 5 минут</p>
          </div>

          <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
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
                <Label className="text-white">Интересующая услуга *</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                  required
                >
                  <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                    <SelectValue placeholder="Выберите услугу" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-700 border-slate-600">
                    <SelectItem value="video-surveillance">Видеонаблюдение</SelectItem>
                    <SelectItem value="video-intercoms">Видеодомофоны</SelectItem>
                    <SelectItem value="security-alarms">Охранная сигнализация</SelectItem>
                    <SelectItem value="access-control">Контроль доступа</SelectItem>
                    <SelectItem value="complex-solution">Комплексное решение</SelectItem>
                    <SelectItem value="other">Другое</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">
                  Сообщение
                </Label>
                <Textarea
                  id="message"
                  placeholder="Дополнительная информация о вашем проекте (необязательно)"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 min-h-[100px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Отправляем..." : "Узнать стоимость"}
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
    </section>
  )
}

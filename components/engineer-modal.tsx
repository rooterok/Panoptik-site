"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Phone } from "lucide-react"
import { sendToTelegram } from "@/lib/telegram"

interface EngineerModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EngineerModal({ isOpen, onClose }: EngineerModalProps) {
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
      const result = await sendToTelegram({
        ...formData,
        service: formData.service || "Вызов инженера",
      })
      if (result.success) {
        alert("Заявка успешно отправлена! Наш инженер свяжется с вами в ближайшее время.")
        setFormData({ name: "", phone: "", service: "", message: "" })
        onClose()
      } else {
        alert("Произошла ошибка при отправке заявки. Попробуйте еще раз.")
      }
    } catch (error) {
      alert("Произошла ошибка при отправке заявки. Попробуйте еще раз.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleClose = () => {
    setFormData({ name: "", phone: "", service: "", message: "" })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-slate-800 border-slate-700 text-white max-w-md">
        <DialogHeader>
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-600/20 rounded-full">
              <Phone className="h-5 w-5 text-blue-400" />
            </div>
            <div>
              <DialogTitle className="text-xl text-white">Вызвать инженера</DialogTitle>
              <DialogDescription className="text-slate-400">Оставьте заявку и мы свяжемся с вами</DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="modal-name" className="text-white">
              Ваше имя *
            </Label>
            <Input
              id="modal-name"
              type="text"
              placeholder="Введите имя"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="modal-phone" className="text-white">
              Телефон *
            </Label>
            <Input
              id="modal-phone"
              type="tel"
              placeholder="+7 (___) ___-__-__"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="text-white">Тип услуги</Label>
            <Select value={formData.service} onValueChange={(value) => setFormData({ ...formData, service: value })}>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Выберите услугу (необязательно)" />
              </SelectTrigger>
              <SelectContent className="bg-slate-700 border-slate-600">
                <SelectItem value="video-surveillance">Видеонаблюдение</SelectItem>
                <SelectItem value="video-intercoms">Видеодомофоны</SelectItem>
                <SelectItem value="security-alarms">Охранная сигнализация</SelectItem>
                <SelectItem value="access-control">Контроль доступа</SelectItem>
                <SelectItem value="complex-solution">Комплексное решение</SelectItem>
                <SelectItem value="consultation">Консультация</SelectItem>
                <SelectItem value="other">Другое</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="modal-message" className="text-white">
              Сообщение
            </Label>
            <Textarea
              id="modal-message"
              placeholder="Опишите вашу задачу (необязательно)"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400 min-h-[80px]"
            />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white" disabled={isSubmitting}>
            {isSubmitting ? "Отправляем..." : "Вызвать инженера"}
          </Button>

          <p className="text-slate-400 text-xs text-center">
            Нажимая кнопку, вы соглашаетесь с{" "}
            <a href="/privacy" className="text-blue-400 hover:underline">
              политикой конфиденциальности
            </a>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}

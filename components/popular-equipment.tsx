"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"
import EngineerModal from "./engineer-modal"

export default function PopularEquipment() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const products = [
    {
      id: 1,
      name: "IP-камера Hikvision DS-2CD2143G0-IS",
      category: "Видеонаблюдение",
      price: "12 500 ₽",
      image: "/placeholder.svg?height=200&width=200",
      features: ["4MP разрешение", "ИК подсветка 30м", "Детекция лиц"],
      rating: 4.8,
    },
    {
      id: 2,
      name: "Видеодомофон Slinex SQ-07MT",
      category: "Домофоны",
      price: "8 900 ₽",
      image: "/placeholder.svg?height=200&width=200",
      features: ['7" TFT дисплей', "Запись видео", "Подключение до 2 камер"],
      rating: 4.7,
    },
    {
      id: 3,
      name: "GSM сигнализация Ajax StarterKit",
      category: "Сигнализации",
      price: "15 200 ₽",
      image: "/placeholder.svg?height=200&width=200",
      features: ["Беспроводная связь", "Мобильное приложение", "До 100 устройств"],
      rating: 4.9,
    },
    {
      id: 4,
      name: "Регистратор Dahua XVR5108HS-4KL-X",
      category: "Регистраторы",
      price: "18 700 ₽",
      image: "/placeholder.svg?height=200&width=200",
      features: ["8 каналов", "4K запись", "AI функции"],
      rating: 4.6,
    },
  ]

  return (
    <>
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Популярное оборудование</h2>
              <p className="text-xl text-slate-300">Проверенные решения от ведущих производителей</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="aspect-square bg-slate-700 p-4">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-blue-400 font-medium">{product.category}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-3 w-3 text-yellow-400 fill-current" />
                      <span className="text-xs text-slate-400">{product.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-white font-semibold mb-3 text-sm leading-tight">{product.name}</h3>

                  <ul className="space-y-1 mb-4">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-slate-400 text-xs flex items-center">
                        <div className="w-1 h-1 bg-blue-400 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-blue-400">{product.price}</span>
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EngineerModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

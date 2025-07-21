"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, Link, ImageIcon } from "lucide-react"

interface ImageUploadProps {
  currentImage: string
  onImageChange: (url: string) => void
  label: string
}

export default function ImageUpload({ currentImage, onImageChange, label }: ImageUploadProps) {
  const [imageUrl, setImageUrl] = useState(currentImage)
  const [isUploading, setIsUploading] = useState(false)

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setIsUploading(true)

    try {
      // Создаем URL для локального файла
      const url = URL.createObjectURL(file)
      setImageUrl(url)
      onImageChange(url)
    } catch (error) {
      console.error("Error uploading file:", error)
    } finally {
      setIsUploading(false)
    }
  }

  const handleUrlSubmit = () => {
    if (imageUrl) {
      onImageChange(imageUrl)
    }
  }

  return (
    <div className="space-y-4">
      <Label className="text-white">{label}</Label>

      <Tabs defaultValue="url" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-slate-700">
          <TabsTrigger value="url" className="text-white data-[state=active]:bg-slate-600">
            <Link className="h-4 w-4 mr-2" />
            По ссылке
          </TabsTrigger>
          <TabsTrigger value="upload" className="text-white data-[state=active]:bg-slate-600">
            <Upload className="h-4 w-4 mr-2" />
            Загрузить
          </TabsTrigger>
        </TabsList>

        <TabsContent value="url" className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="url"
              placeholder="https://example.com/image.jpg"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="bg-slate-700 border-slate-600 text-white"
            />
            <Button onClick={handleUrlSubmit} className="bg-blue-600 hover:bg-blue-700">
              Применить
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="upload" className="space-y-4">
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-slate-600 border-dashed rounded-lg cursor-pointer bg-slate-700 hover:bg-slate-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-4 text-slate-400" />
                <p className="mb-2 text-sm text-slate-400">
                  <span className="font-semibold">Нажмите для загрузки</span> или перетащите файл
                </p>
                <p className="text-xs text-slate-500">PNG, JPG, GIF до 10MB</p>
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileUpload}
                disabled={isUploading}
              />
            </label>
          </div>
          {isUploading && <div className="text-center text-slate-400">Загрузка...</div>}
        </TabsContent>
      </Tabs>

      {currentImage && (
        <div className="mt-4">
          <Label className="text-white text-sm">Текущее изображение:</Label>
          <div className="mt-2 p-2 bg-slate-700 rounded border border-slate-600">
            <div className="flex items-center gap-2">
              <ImageIcon className="h-4 w-4 text-slate-400" />
              <span className="text-slate-300 text-sm truncate">{currentImage}</span>
            </div>
            {currentImage.startsWith("http") && (
              <img
                src={currentImage || "/placeholder.svg"}
                alt="Preview"
                className="mt-2 max-w-full h-20 object-cover rounded"
                onError={(e) => {
                  e.currentTarget.style.display = "none"
                }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

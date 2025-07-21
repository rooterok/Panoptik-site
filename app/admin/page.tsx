"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Settings, Save, LogOut, Home, Users, Star, Building, Phone, Plus, Trash2 } from "lucide-react"
import { isAuthenticated, setAuthenticated } from "@/lib/admin-auth"
import { getSiteContent, setSiteContent, type SiteContent } from "@/lib/admin-data"
import LoginForm from "@/components/admin/login-form"
import ImageUpload from "@/components/admin/image-upload"

export default function AdminPage() {
  const [authenticated, setAuthenticatedState] = useState(false)
  const [content, setContent] = useState<SiteContent>(getSiteContent())
  const [hasChanges, setHasChanges] = useState(false)

  useEffect(() => {
    setAuthenticatedState(isAuthenticated())
  }, [])

  const handleLogin = () => {
    setAuthenticatedState(true)
  }

  const handleLogout = () => {
    setAuthenticated(false)
    setAuthenticatedState(false)
  }

  const handleSave = () => {
    setSiteContent(content)
    setHasChanges(false)
    alert("Изменения сохранены!")
  }

  const updateContent = (path: string[], value: any) => {
    const newContent = { ...content }
    let current: any = newContent

    for (let i = 0; i < path.length - 1; i++) {
      current = current[path[i]]
    }

    current[path[path.length - 1]] = value
    setContent(newContent)
    setHasChanges(true)
  }

  const addArrayItem = (path: string[], item: any) => {
    const newContent = { ...content }
    let current: any = newContent

    for (const key of path) {
      current = current[key]
    }

    current.push(item)
    setContent(newContent)
    setHasChanges(true)
  }

  const removeArrayItem = (path: string[], index: number) => {
    const newContent = { ...content }
    let current: any = newContent

    for (const key of path) {
      current = current[key]
    }

    current.splice(index, 1)
    setContent(newContent)
    setHasChanges(true)
  }

  if (!authenticated) {
    return <LoginForm onLogin={handleLogin} />
  }

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Settings className="h-6 w-6 text-blue-500" />
            <h1 className="text-xl font-bold text-white">Панель администрирования</h1>
          </div>
          <div className="flex items-center space-x-4">
            {hasChanges && (
              <Button onClick={handleSave} className="bg-green-600 hover:bg-green-700">
                <Save className="h-4 w-4 mr-2" />
                Сохранить изменения
              </Button>
            )}
            <Button onClick={handleLogout} variant="outline" className="border-slate-600 text-white bg-transparent">
              <LogOut className="h-4 w-4 mr-2" />
              Выйти
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto p-6">
        <Tabs defaultValue="hero" className="space-y-6">
          <TabsList className="grid w-full grid-cols-9 bg-slate-800">
            <TabsTrigger value="hero" className="text-white data-[state=active]:bg-slate-600">
              <Home className="h-4 w-4 mr-2" />
              Главная
            </TabsTrigger>
            <TabsTrigger value="header" className="text-white data-[state=active]:bg-slate-600">
              <Settings className="h-4 w-4 mr-2" />
              Шапка
            </TabsTrigger>
            <TabsTrigger value="footer" className="text-white data-[state=active]:bg-slate-600">
              <Settings className="h-4 w-4 mr-2" />
              Подвал
            </TabsTrigger>
            <TabsTrigger value="services" className="text-white data-[state=active]:bg-slate-600">
              <Settings className="h-4 w-4 mr-2" />
              Услуги
            </TabsTrigger>
            <TabsTrigger value="solutions" className="text-white data-[state=active]:bg-slate-600">
              <Star className="h-4 w-4 mr-2" />
              Решения
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="text-white data-[state=active]:bg-slate-600">
              <Users className="h-4 w-4 mr-2" />
              Отзывы
            </TabsTrigger>
            <TabsTrigger value="company" className="text-white data-[state=active]:bg-slate-600">
              <Building className="h-4 w-4 mr-2" />О компании
            </TabsTrigger>
            <TabsTrigger value="contact" className="text-white data-[state=active]:bg-slate-600">
              <Phone className="h-4 w-4 mr-2" />
              Контакты
            </TabsTrigger>
            <TabsTrigger value="partners" className="text-white data-[state=active]:bg-slate-600">
              <Building className="h-4 w-4 mr-2" />
              Партнеры
            </TabsTrigger>
          </TabsList>

          {/* Hero Section */}
          <TabsContent value="hero">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Главная страница</CardTitle>
                <CardDescription className="text-slate-400">
                  Редактирование героической секции и статистики
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-white">Заголовок</Label>
                    <Input
                      value={content.hero.title}
                      onChange={(e) => updateContent(["hero", "title"], e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>

                  <div>
                    <Label className="text-white">Подзаголовок</Label>
                    <Input
                      value={content.hero.subtitle}
                      onChange={(e) => updateContent(["hero", "subtitle"], e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>

                  <div>
                    <Label className="text-white">Описание</Label>
                    <Textarea
                      value={content.hero.description}
                      onChange={(e) => updateContent(["hero", "description"], e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                      rows={3}
                    />
                  </div>
                </div>

                <Separator className="bg-slate-600" />

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Статистика</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {content.hero.stats.map((stat, index) => (
                      <div key={index} className="space-y-2 p-4 bg-slate-700 rounded">
                        <div className="flex justify-between items-center">
                          <Label className="text-white">Статистика {index + 1}</Label>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => removeArrayItem(["hero", "stats"], index)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                        <Input
                          placeholder="Число"
                          value={stat.number}
                          onChange={(e) => {
                            const newStats = [...content.hero.stats]
                            newStats[index].number = e.target.value
                            updateContent(["hero", "stats"], newStats)
                          }}
                          className="bg-slate-600 border-slate-500 text-white"
                        />
                        <Input
                          placeholder="Описание"
                          value={stat.label}
                          onChange={(e) => {
                            const newStats = [...content.hero.stats]
                            newStats[index].label = e.target.value
                            updateContent(["hero", "stats"], newStats)
                          }}
                          className="bg-slate-600 border-slate-500 text-white"
                        />
                      </div>
                    ))}
                  </div>
                  <Button
                    className="mt-4 bg-blue-600 hover:bg-blue-700"
                    onClick={() => addArrayItem(["hero", "stats"], { number: "", label: "" })}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Добавить статистику
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Header Section */}
          <TabsContent value="header">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Шапка сайта</CardTitle>
                <CardDescription className="text-slate-400">Редактирование шапки и навигации</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-white">Название компании</Label>
                    <Input
                      value={content.header.companyName}
                      onChange={(e) => updateContent(["header", "companyName"], e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>

                  <div>
                    <Label className="text-white">Телефон</Label>
                    <Input
                      value={content.header.phone}
                      onChange={(e) => updateContent(["header", "phone"], e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>

                  <div>
                    <Label className="text-white">Текст кнопки</Label>
                    <Input
                      value={content.header.ctaButtonText}
                      onChange={(e) => updateContent(["header", "ctaButtonText"], e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>

                <Separator className="bg-slate-600" />

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Навигация</h3>
                  {content.header.navigation.map((item, index) => (
                    <div key={index} className="space-y-2 p-4 bg-slate-700 rounded mb-4">
                      <div className="flex justify-between items-center">
                        <Label className="text-white">Пункт меню {index + 1}</Label>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => removeArrayItem(["header", "navigation"], index)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          placeholder="Название"
                          value={item.name}
                          onChange={(e) => {
                            const newNav = [...content.header.navigation]
                            newNav[index].name = e.target.value
                            updateContent(["header", "navigation"], newNav)
                          }}
                          className="bg-slate-600 border-slate-500 text-white"
                        />
                        <Input
                          placeholder="Ссылка"
                          value={item.href}
                          onChange={(e) => {
                            const newNav = [...content.header.navigation]
                            newNav[index].href = e.target.value
                            updateContent(["header", "navigation"], newNav)
                          }}
                          className="bg-slate-600 border-slate-500 text-white"
                        />
                      </div>
                    </div>
                  ))}
                  <Button
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => addArrayItem(["header", "navigation"], { name: "", href: "" })}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Добавить пункт меню
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Footer Section */}
          <TabsContent value="footer">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Подвал сайта</CardTitle>
                <CardDescription className="text-slate-400">Редактирование подвала и ссылок</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-white">Название компании</Label>
                    <Input
                      value={content.footer.companyName}
                      onChange={(e) => updateContent(["footer", "companyName"], e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>

                  <div>
                    <Label className="text-white">Описание компании</Label>
                    <Textarea
                      value={content.footer.description}
                      onChange={(e) => updateContent(["footer", "description"], e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label className="text-white">Текст кнопки</Label>
                    <Input
                      value={content.footer.ctaButtonText}
                      onChange={(e) => updateContent(["footer", "ctaButtonText"], e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                </div>

                <Separator className="bg-slate-600" />

                <div className="grid md:grid-cols-3 gap-6">
                  {/* Services Links */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Услуги</h3>
                    {content.footer.services.map((item, index) => (
                      <div key={index} className="space-y-2 p-3 bg-slate-700 rounded mb-3">
                        <div className="flex justify-between items-center">
                          <Label className="text-white text-sm">Услуга {index + 1}</Label>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => removeArrayItem(["footer", "services"], index)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                        <Input
                          placeholder="Название"
                          value={item.name}
                          onChange={(e) => {
                            const newServices = [...content.footer.services]
                            newServices[index].name = e.target.value
                            updateContent(["footer", "services"], newServices)
                          }}
                          className="bg-slate-600 border-slate-500 text-white text-sm"
                        />
                        <Input
                          placeholder="Ссылка"
                          value={item.href}
                          onChange={(e) => {
                            const newServices = [...content.footer.services]
                            newServices[index].href = e.target.value
                            updateContent(["footer", "services"], newServices)
                          }}
                          className="bg-slate-600 border-slate-500 text-white text-sm"
                        />
                      </div>
                    ))}
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => addArrayItem(["footer", "services"], { name: "", href: "" })}
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Добавить
                    </Button>
                  </div>

                  {/* Company Links */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Компания</h3>
                    {content.footer.company.map((item, index) => (
                      <div key={index} className="space-y-2 p-3 bg-slate-700 rounded mb-3">
                        <div className="flex justify-between items-center">
                          <Label className="text-white text-sm">Ссылка {index + 1}</Label>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => removeArrayItem(["footer", "company"], index)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                        <Input
                          placeholder="Название"
                          value={item.name}
                          onChange={(e) => {
                            const newCompany = [...content.footer.company]
                            newCompany[index].name = e.target.value
                            updateContent(["footer", "company"], newCompany)
                          }}
                          className="bg-slate-600 border-slate-500 text-white text-sm"
                        />
                        <Input
                          placeholder="Ссылка"
                          value={item.href}
                          onChange={(e) => {
                            const newCompany = [...content.footer.company]
                            newCompany[index].href = e.target.value
                            updateContent(["footer", "company"], newCompany)
                          }}
                          className="bg-slate-600 border-slate-500 text-white text-sm"
                        />
                      </div>
                    ))}
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => addArrayItem(["footer", "company"], { name: "", href: "" })}
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Добавить
                    </Button>
                  </div>

                  {/* Support Links */}
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Поддержка</h3>
                    {content.footer.support.map((item, index) => (
                      <div key={index} className="space-y-2 p-3 bg-slate-700 rounded mb-3">
                        <div className="flex justify-between items-center">
                          <Label className="text-white text-sm">Ссылка {index + 1}</Label>
                          <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => removeArrayItem(["footer", "support"], index)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                        <Input
                          placeholder="Название"
                          value={item.name}
                          onChange={(e) => {
                            const newSupport = [...content.footer.support]
                            newSupport[index].name = e.target.value
                            updateContent(["footer", "support"], newSupport)
                          }}
                          className="bg-slate-600 border-slate-500 text-white text-sm"
                        />
                        <Input
                          placeholder="Ссылка"
                          value={item.href}
                          onChange={(e) => {
                            const newSupport = [...content.footer.support]
                            newSupport[index].href = e.target.value
                            updateContent(["footer", "support"], newSupport)
                          }}
                          className="bg-slate-600 border-slate-500 text-white text-sm"
                        />
                      </div>
                    ))}
                    <Button
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => addArrayItem(["footer", "support"], { name: "", href: "" })}
                    >
                      <Plus className="h-3 w-3 mr-1" />
                      Добавить
                    </Button>
                  </div>
                </div>

                <Separator className="bg-slate-600" />

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Контактная информация</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-white">Телефон</Label>
                      <Input
                        value={content.footer.contact.phone}
                        onChange={(e) => updateContent(["footer", "contact", "phone"], e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white">Email</Label>
                      <Input
                        value={content.footer.contact.email}
                        onChange={(e) => updateContent(["footer", "contact", "email"], e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white">Адрес</Label>
                      <Input
                        value={content.footer.contact.address}
                        onChange={(e) => updateContent(["footer", "contact", "address"], e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                    <div>
                      <Label className="text-white">Режим работы</Label>
                      <Input
                        value={content.footer.contact.workingHours}
                        onChange={(e) => updateContent(["footer", "contact", "workingHours"], e.target.value)}
                        className="bg-slate-700 border-slate-600 text-white"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Services Section */}
          <TabsContent value="services">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Услуги</CardTitle>
                <CardDescription className="text-slate-400">Управление разделом услуг</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {content.services.map((service, index) => (
                  <div key={index} className="p-4 bg-slate-700 rounded space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-white">Услуга {index + 1}</h3>
                      <Button size="sm" variant="destructive" onClick={() => removeArrayItem(["services"], index)}>
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>

                    <Input
                      placeholder="Название услуги"
                      value={service.title}
                      onChange={(e) => {
                        const newServices = [...content.services]
                        newServices[index].title = e.target.value
                        updateContent(["services"], newServices)
                      }}
                      className="bg-slate-600 border-slate-500 text-white"
                    />

                    <Textarea
                      placeholder="Описание услуги"
                      value={service.description}
                      onChange={(e) => {
                        const newServices = [...content.services]
                        newServices[index].description = e.target.value
                        updateContent(["services"], newServices)
                      }}
                      className="bg-slate-600 border-slate-500 text-white"
                      rows={2}
                    />

                    <div>
                      <Label className="text-white">Особенности (по одной на строку)</Label>
                      <Textarea
                        value={service.features.join("\n")}
                        onChange={(e) => {
                          const newServices = [...content.services]
                          newServices[index].features = e.target.value.split("\n").filter((f) => f.trim())
                          updateContent(["services"], newServices)
                        }}
                        className="bg-slate-600 border-slate-500 text-white"
                        rows={3}
                      />
                    </div>
                  </div>
                ))}

                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() =>
                    addArrayItem(["services"], {
                      title: "",
                      description: "",
                      features: [],
                    })
                  }
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Добавить услугу
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Solutions Section */}
          <TabsContent value="solutions">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Популярные решения</CardTitle>
                <CardDescription className="text-slate-400">Управление каталогом решений</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {content.solutions.map((solution, index) => (
                  <div key={index} className="p-4 bg-slate-700 rounded space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-white">Решение {index + 1}</h3>
                      <Button size="sm" variant="destructive" onClick={() => removeArrayItem(["solutions"], index)}>
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Название"
                        value={solution.name}
                        onChange={(e) => {
                          const newSolutions = [...content.solutions]
                          newSolutions[index].name = e.target.value
                          updateContent(["solutions"], newSolutions)
                        }}
                        className="bg-slate-600 border-slate-500 text-white"
                      />

                      <Input
                        placeholder="Категория"
                        value={solution.category}
                        onChange={(e) => {
                          const newSolutions = [...content.solutions]
                          newSolutions[index].category = e.target.value
                          updateContent(["solutions"], newSolutions)
                        }}
                        className="bg-slate-600 border-slate-500 text-white"
                      />
                    </div>

                    <Input
                      placeholder="Цена"
                      value={solution.price}
                      onChange={(e) => {
                        const newSolutions = [...content.solutions]
                        newSolutions[index].price = e.target.value
                        updateContent(["solutions"], newSolutions)
                      }}
                      className="bg-slate-600 border-slate-500 text-white"
                    />

                    <Textarea
                      placeholder="Описание"
                      value={solution.description}
                      onChange={(e) => {
                        const newSolutions = [...content.solutions]
                        newSolutions[index].description = e.target.value
                        updateContent(["solutions"], newSolutions)
                      }}
                      className="bg-slate-600 border-slate-500 text-white"
                      rows={2}
                    />

                    <div>
                      <Label className="text-white">Особенности (по одной на строку)</Label>
                      <Textarea
                        value={solution.features.join("\n")}
                        onChange={(e) => {
                          const newSolutions = [...content.solutions]
                          newSolutions[index].features = e.target.value.split("\n").filter((f) => f.trim())
                          updateContent(["solutions"], newSolutions)
                        }}
                        className="bg-slate-600 border-slate-500 text-white"
                        rows={3}
                      />
                    </div>

                    <ImageUpload
                      currentImage={solution.image}
                      onImageChange={(url) => {
                        const newSolutions = [...content.solutions]
                        newSolutions[index].image = url
                        updateContent(["solutions"], newSolutions)
                      }}
                      label="Изображение решения"
                    />
                  </div>
                ))}

                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() =>
                    addArrayItem(["solutions"], {
                      name: "",
                      category: "",
                      price: "",
                      description: "",
                      features: [],
                      image: "/placeholder.svg?height=200&width=200",
                    })
                  }
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Добавить решение
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Testimonials Section */}
          <TabsContent value="testimonials">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Отзывы клиентов</CardTitle>
                <CardDescription className="text-slate-400">Управление отзывами и рекомендациями</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {content.testimonials.map((testimonial, index) => (
                  <div key={index} className="p-4 bg-slate-700 rounded space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-white">Отзыв {index + 1}</h3>
                      <Button size="sm" variant="destructive" onClick={() => removeArrayItem(["testimonials"], index)}>
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Имя клиента"
                        value={testimonial.name}
                        onChange={(e) => {
                          const newTestimonials = [...content.testimonials]
                          newTestimonials[index].name = e.target.value
                          updateContent(["testimonials"], newTestimonials)
                        }}
                        className="bg-slate-600 border-slate-500 text-white"
                      />

                      <Input
                        placeholder="Должность"
                        value={testimonial.position}
                        onChange={(e) => {
                          const newTestimonials = [...content.testimonials]
                          newTestimonials[index].position = e.target.value
                          updateContent(["testimonials"], newTestimonials)
                        }}
                        className="bg-slate-600 border-slate-500 text-white"
                      />
                    </div>

                    <Textarea
                      placeholder="Текст отзыва"
                      value={testimonial.text}
                      onChange={(e) => {
                        const newTestimonials = [...content.testimonials]
                        newTestimonials[index].text = e.target.value
                        updateContent(["testimonials"], newTestimonials)
                      }}
                      className="bg-slate-600 border-slate-500 text-white"
                      rows={3}
                    />

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Описание проекта"
                        value={testimonial.project}
                        onChange={(e) => {
                          const newTestimonials = [...content.testimonials]
                          newTestimonials[index].project = e.target.value
                          updateContent(["testimonials"], newTestimonials)
                        }}
                        className="bg-slate-600 border-slate-500 text-white"
                      />

                      <Input
                        type="number"
                        min="1"
                        max="5"
                        placeholder="Рейтинг (1-5)"
                        value={testimonial.rating}
                        onChange={(e) => {
                          const newTestimonials = [...content.testimonials]
                          newTestimonials[index].rating = Number.parseInt(e.target.value) || 5
                          updateContent(["testimonials"], newTestimonials)
                        }}
                        className="bg-slate-600 border-slate-500 text-white"
                      />
                    </div>

                    <ImageUpload
                      currentImage={testimonial.avatar}
                      onImageChange={(url) => {
                        const newTestimonials = [...content.testimonials]
                        newTestimonials[index].avatar = url
                        updateContent(["testimonials"], newTestimonials)
                      }}
                      label="Аватар клиента"
                    />
                  </div>
                ))}

                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() =>
                    addArrayItem(["testimonials"], {
                      name: "",
                      position: "",
                      text: "",
                      project: "",
                      rating: 5,
                      avatar: "/placeholder.svg?height=60&width=60",
                    })
                  }
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Добавить отзыв
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Company Section */}
          <TabsContent value="company">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">О компании</CardTitle>
                <CardDescription className="text-slate-400">Информация о компании, команде и ценностях</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <Input
                    placeholder="Название компании"
                    value={content.company.name}
                    onChange={(e) => updateContent(["company", "name"], e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />

                  <Textarea
                    placeholder="Описание компании"
                    value={content.company.description}
                    onChange={(e) => updateContent(["company", "description"], e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    rows={3}
                  />

                  <Textarea
                    placeholder="Философия компании"
                    value={content.company.philosophy}
                    onChange={(e) => updateContent(["company", "philosophy"], e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                    rows={4}
                  />
                </div>

                <Separator className="bg-slate-600" />

                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Ценности</h3>
                  {content.company.values.map((value, index) => (
                    <div key={index} className="p-4 bg-slate-700 rounded space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <Label className="text-white">Ценность {index + 1}</Label>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => removeArrayItem(["company", "values"], index)}
                        >
                          <Trash2 className="h-3 w-3" />
                        </Button>
                      </div>
                      <Input
                        placeholder="Название ценности"
                        value={value.title}
                        onChange={(e) => {
                          const newValues = [...content.company.values]
                          newValues[index].title = e.target.value
                          updateContent(["company", "values"], newValues)
                        }}
                        className="bg-slate-600 border-slate-500 text-white"
                      />
                      <Textarea
                        placeholder="Описание ценности"
                        value={value.description}
                        onChange={(e) => {
                          const newValues = [...content.company.values]
                          newValues[index].description = e.target.value
                          updateContent(["company", "values"], newValues)
                        }}
                        className="bg-slate-600 border-slate-500 text-white"
                        rows={2}
                      />
                    </div>
                  ))}
                  <Button
                    className="bg-blue-600 hover:bg-blue-700"
                    onClick={() => addArrayItem(["company", "values"], { title: "", description: "" })}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Добавить ценность
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Partners Section */}
          <TabsContent value="partners">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Партнеры</CardTitle>
                <CardDescription className="text-slate-400">Управление логотипами партнеров</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {content.partners.map((partner, index) => (
                  <div key={index} className="p-4 bg-slate-700 rounded space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-white">Партнер {index + 1}</h3>
                      <Button size="sm" variant="destructive" onClick={() => removeArrayItem(["partners"], index)}>
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <Input
                        placeholder="Название партнера"
                        value={partner.name}
                        onChange={(e) => {
                          const newPartners = [...content.partners]
                          newPartners[index].name = e.target.value
                          updateContent(["partners"], newPartners)
                        }}
                        className="bg-slate-600 border-slate-500 text-white"
                      />

                      <Input
                        placeholder="Категория"
                        value={partner.category}
                        onChange={(e) => {
                          const newPartners = [...content.partners]
                          newPartners[index].category = e.target.value
                          updateContent(["partners"], newPartners)
                        }}
                        className="bg-slate-600 border-slate-500 text-white"
                      />
                    </div>

                    <ImageUpload
                      currentImage={partner.logo}
                      onImageChange={(url) => {
                        const newPartners = [...content.partners]
                        newPartners[index].logo = url
                        updateContent(["partners"], newPartners)
                      }}
                      label="Логотип партнера"
                    />
                  </div>
                ))}

                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() =>
                    addArrayItem(["partners"], {
                      name: "",
                      logo: "/placeholder.svg?height=60&width=120",
                      category: "",
                    })
                  }
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Добавить партнера
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Section */}
          <TabsContent value="contact">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Контактная информация</CardTitle>
                <CardDescription className="text-slate-400">Управление контактными данными</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label className="text-white">Телефон</Label>
                  <Input
                    value={content.contact.phone}
                    onChange={(e) => updateContent(["contact", "phone"], e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div>
                  <Label className="text-white">Email</Label>
                  <Input
                    type="email"
                    value={content.contact.email}
                    onChange={(e) => updateContent(["contact", "email"], e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div>
                  <Label className="text-white">Адрес</Label>
                  <Input
                    value={content.contact.address}
                    onChange={(e) => updateContent(["contact", "address"], e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>

                <div>
                  <Label className="text-white">Режим работы</Label>
                  <Input
                    value={content.contact.workingHours}
                    onChange={(e) => updateContent(["contact", "workingHours"], e.target.value)}
                    className="bg-slate-700 border-slate-600 text-white"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

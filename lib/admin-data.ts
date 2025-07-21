export interface SiteContent {
  header: {
    companyName: string
    navigation: Array<{
      name: string
      href: string
    }>
    phone: string
    ctaButtonText: string
  }
  footer: {
    companyName: string
    description: string
    services: Array<{
      name: string
      href: string
    }>
    company: Array<{
      name: string
      href: string
    }>
    support: Array<{
      name: string
      href: string
    }>
    contact: {
      phone: string
      email: string
      address: string
      workingHours: string
    }
    ctaButtonText: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    stats: Array<{ number: string; label: string }>
  }
  services: Array<{
    title: string
    description: string
    features: string[]
  }>
  solutions: Array<{
    name: string
    category: string
    price: string
    description: string
    features: string[]
    image: string
  }>
  testimonials: Array<{
    name: string
    position: string
    text: string
    project: string
    rating: number
    avatar: string
  }>
  partners: Array<{
    name: string
    logo: string
    category: string
  }>
  company: {
    name: string
    description: string
    philosophy: string
    values: Array<{
      title: string
      description: string
    }>
    team: Array<{
      name: string
      position: string
      experience: string
      description: string
      image: string
    }>
    achievements: Array<{
      number: string
      label: string
    }>
  }
  contact: {
    phone: string
    email: string
    address: string
    workingHours: string
  }
}

export const defaultSiteContent: SiteContent = {
  header: {
    companyName: "Паноптикум",
    navigation: [
      { name: "Видеонаблюдение", href: "/video-surveillance" },
      { name: "СКУД", href: "/access-control" },
      { name: "Сигнализации", href: "/security-alarms" },
      { name: "О компании", href: "/about" },
      { name: "Контакты", href: "/contacts" },
    ],
    phone: "+7 (495) 123-45-67",
    ctaButtonText: "Вызвать инженера",
  },
  footer: {
    companyName: "Паноптикум",
    description:
      "Профессиональные системы безопасности для дома и бизнеса. Всевидящая защита без вторжения в приватность.",
    services: [
      { name: "Видеонаблюдение", href: "/video-surveillance" },
      { name: "Видеодомофоны", href: "/video-intercoms" },
      { name: "Охранные сигнализации", href: "/security-alarms" },
      { name: "Контроль доступа", href: "/access-control" },
    ],
    company: [
      { name: "О компании", href: "/about" },
      { name: "Контакты", href: "/contacts" },
    ],
    support: [
      { name: "Техподдержка", href: "/contacts" },
      { name: "Гарантия", href: "/about" },
    ],
    contact: {
      phone: "+7 (495) 123-45-67",
      email: "info@panopticum.ru",
      address: "Москва, ул. Примерная, д. 123",
      workingHours: "Пн-Пт: 9:00-18:00, Сб: 10:00-16:00",
    },
    ctaButtonText: "Вызвать инженера",
  },
  hero: {
    title: "Паноптикум: Видеть все, чтобы защитить вас",
    subtitle: "Всевидящая защита без вторжения в приватность",
    description:
      "Профессиональные системы безопасности для дома и бизнеса. Всевидящая защита без вторжения в приватность.",
    stats: [
      { number: "500+", label: "Объектов под защитой" },
      { number: "24/7", label: "Круглосуточная поддержка" },
      { number: "3 года", label: "Гарантия на оборудование" },
      { number: "10 лет", label: "Опыт на рынке" },
    ],
  },
  services: [
    {
      title: "Видеонаблюдение",
      description: "HD/4K камеры, IP и аналоговые системы, облачное и локальное хранение",
      features: ["Уличные и купольные камеры", "Ночное видение", "Детекция движения"],
    },
    {
      title: "СКУД",
      description: "Системы контроля и управления доступом, включая видеодомофоны",
      features: ["Видеодомофоны", "Карточные системы", "Биометрический доступ"],
    },
    {
      title: "Охранные сигнализации",
      description: "GSM сигнализации, пультовая охрана 24/7, датчики движения",
      features: ["GSM уведомления", "Пультовая охрана", "Беспроводные датчики"],
    },
    {
      title: "Монтаж & Сервис",
      description: "Профессиональный монтаж, настройка и круглосуточная поддержка",
      features: ["Скрытая прокладка", "Настройка ПО", "Гарантийное обслуживание"],
    },
  ],
  solutions: [
    {
      name: "Видеонаблюдение на 2 камеры",
      category: "Видеонаблюдение",
      price: "от 35 000 ₽",
      description: "Базовый комплект для дома или небольшого офиса",
      features: ["2 HD камеры", "Регистратор 4 канала", "Удаленный доступ"],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Видеонаблюдение на 8 камер",
      category: "Видеонаблюдение",
      price: "от 120 000 ₽",
      description: "Профессиональное решение для бизнеса",
      features: ["8 4K камер", "Регистратор 16 каналов", "AI аналитика"],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Система видеодомофона",
      category: "СКУД",
      price: "от 25 000 ₽",
      description: "Современные решения для жилых комплексов",
      features: ["Мобильное приложение", "Облачное хранение", "Многоквартирные дома"],
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "GSM сигнализация",
      category: "Сигнализации",
      price: "от 18 000 ₽",
      description: "Надежная защита дома и дачи",
      features: ["Беспроводная связь", "Мобильные уведомления", "До 50 датчиков"],
      image: "/placeholder.svg?height=200&width=200",
    },
  ],
  testimonials: [
    {
      name: "Александр Петров",
      position: 'Директор ООО "Техносервис"',
      text: "Установили систему видеонаблюдения в офисе. Работа выполнена качественно, в срок. Особенно понравился подход к скрытой прокладке кабелей - интерьер не пострадал.",
      project: "Офисное здание, 12 камер",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Мария Сидорова",
      position: 'Управляющая ТСЖ "Комфорт"',
      text: "Модернизировали домофонную систему в многоквартирном доме. Жители довольны возможностью видеть гостей через мобильное приложение. Техподдержка работает отлично.",
      project: "9-этажный дом, 108 квартир",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Игорь Волков",
      position: "Владелец загородного дома",
      text: "Поставили комплексную систему безопасности на даче: видеонаблюдение + GSM сигнализация. Теперь спокойно оставляем дом на зиму. Все работает стабильно уже 2 года.",
      project: "Загородный дом, периметр 200м",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ],
  partners: [
    { name: "Hikvision", logo: "/placeholder.svg?height=60&width=120", category: "Видеонаблюдение" },
    { name: "Dahua", logo: "/placeholder.svg?height=60&width=120", category: "Видеонаблюдение" },
    { name: "Ajax Systems", logo: "/placeholder.svg?height=60&width=120", category: "GSM сигнализации" },
    { name: "Slinex", logo: "/placeholder.svg?height=60&width=120", category: "Домофоны" },
    { name: "Bolid", logo: "/placeholder.svg?height=60&width=120", category: "СКУД" },
    { name: "Beward", logo: "/placeholder.svg?height=60&width=120", category: "Видеонаблюдение" },
    { name: "FORT", logo: "/placeholder.svg?height=60&width=120", category: "GSM сигнализации" },
  ],
  company: {
    name: "Паноптикум",
    description:
      "Профессиональные системы безопасности для дома и бизнеса. Всевидящая защита без вторжения в приватность.",
    philosophy:
      "Паноптикум - это не о слежке, а о защите. Мы создаем системы, которые видят угрозы, но уважают приватность. Технологии должны служить безопасности, а не контролю.",
    values: [
      {
        title: "Всевидящая защита",
        description:
          "Мы создаем системы, которые видят все, но не нарушают приватность. Технологии на службе безопасности, а не слежки.",
      },
      {
        title: "Надежность",
        description:
          "Используем только проверенное оборудование от ведущих производителей. Каждая система проходит тщательное тестирование.",
      },
      {
        title: "100+ реализованных проектов",
        description:
          "За время работы мы успешно реализовали более 100 проектов различной сложности для частных и корпоративных клиентов.",
      },
      {
        title: "99% довольных клиентов",
        description:
          "Высокое качество работ и индивидуальный подход к каждому проекту обеспечивают максимальную удовлетворенность наших клиентов.",
      },
    ],
    team: [
      {
        name: "Мария Петрова",
        position: "Руководитель проектов",
        experience: "8 лет управления проектами",
        description: "Специалист по комплексным решениям безопасности",
        image: "/placeholder.svg?height=200&width=200",
      },
      {
        name: "Дмитрий Сидоров",
        position: "Ведущий инженер",
        experience: "10 лет монтажа и настройки",
        description: "Сертифицированный инженер Hikvision и Dahua",
        image: "/placeholder.svg?height=200&width=200",
      },
    ],
    achievements: [
      { number: "500+", label: "Реализованных проектов" },
      { number: "10", label: "Лет на рынке" },
      { number: "24/7", label: "Техническая поддержка" },
      { number: "99%", label: "Довольных клиентов" },
    ],
  },
  contact: {
    phone: "+7 (495) 123-45-67",
    email: "info@panopticum.ru",
    address: "Москва, ул. Примерная, д. 123",
    workingHours: "Пн-Пт: 9:00-18:00, Сб: 10:00-16:00",
  },
}

export function getSiteContent(): SiteContent {
  if (typeof window === "undefined") return defaultSiteContent

  const stored = localStorage.getItem("site_content")
  if (stored) {
    try {
      return JSON.parse(stored)
    } catch {
      return defaultSiteContent
    }
  }
  return defaultSiteContent
}

export function setSiteContent(content: SiteContent): void {
  if (typeof window === "undefined") return
  localStorage.setItem("site_content", JSON.stringify(content))
}

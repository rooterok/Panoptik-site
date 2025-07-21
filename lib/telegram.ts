export async function sendToTelegram(data: {
  name: string
  phone: string
  service: string
  message?: string
}) {
  const botToken = "8109018556:AAHOBsJGtaSk2QCLshWCDFaSgbXGVfv-wVU"
  const chatIds = ["-1002720951101", "283386845"]

  const messageText = `🔔 Новая заявка с сайта Паноптикум

👤 Имя: ${data.name}
📞 Телефон: ${data.phone}
🔧 Услуга: ${data.service}${data.message ? `\n💬 Сообщение: ${data.message}` : ""}

⏰ Время: ${new Date().toLocaleString("ru-RU")}`

  try {
    const promises = chatIds.map((chatId) =>
      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: messageText,
          parse_mode: "HTML",
        }),
      }),
    )

    await Promise.all(promises)
    return { success: true }
  } catch (error) {
    console.error("Error sending to Telegram:", error)
    return { success: false, error }
  }
}

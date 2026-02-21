import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, telegram, amount, direction, location, network } = body;

    if (!name || !email || !amount || !direction) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      console.error("Telegram credentials not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const message = [
      `📩 *New Exchange Request*`,
      ``,
      `👤 *Name:* ${escapeMarkdown(name)}`,
      `📧 *Email:* ${escapeMarkdown(email)}`,
      telegram ? `💬 *Telegram:* ${escapeMarkdown(telegram)}` : "",
      `💰 *Amount:* ${escapeMarkdown(amount)}`,
      `🔄 *Direction:* ${escapeMarkdown(direction)}`,
      location ? `📍 *Location:* ${escapeMarkdown(location)}` : "",
      network ? `🌐 *Network:* ${escapeMarkdown(network)}` : "",
      ``,
      `🕐 *Time:* ${new Date().toLocaleString("en-GB", { timeZone: "UTC" })} UTC`,
    ]
      .filter(Boolean)
      .join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!telegramResponse.ok) {
      const errorData = await telegramResponse.json();
      console.error("Telegram API error:", errorData);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function escapeMarkdown(text: string): string {
  return text.replace(/[_*[\]()~`>#+\-=|{}.!]/g, "\\$&");
}

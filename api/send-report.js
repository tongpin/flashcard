export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { student, category, page, questionNumber, description, timestamp } = req.body;

  // 🔒 ទាញយក Token និង Chat ID ពី Environment Variables របស់ Vercel ដោយសុវត្ថិភាព
  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    return res.status(500).json({ error: 'Server environment variables not configured' });
  }

  const messageText = `🚨 *របាយការណ៍បញ្ហា - ជីវវិទ្យា ២០២៦* 🚨\n\n` +
                      `👤 *សិស្ស:* ${student}\n` +
                      `📌 *ប្រភេទ:* ${category}\n` +
                      `📍 *ទំព័រ:* ${page} (សំណួរទី #${questionNumber})\n` +
                      `📝 *ការរៀបរាប់:* ${description}\n` +
                      `⏰ *កាលបរិច្ឆេទ:* ${new Date(timestamp).toLocaleString('km-KH')}`;

  try {
    const tgResponse = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: messageText,
        parse_mode: 'Markdown'
      })
    });

    const tgResult = await tgResponse.json();

    if (tgResult.ok) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ success: false, error: tgResult.description });
    }
  } catch (err) {
    return res.status(500).json({ error: 'Failed to connect to Telegram API' });
  }
}
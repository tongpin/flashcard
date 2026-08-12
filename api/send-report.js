// កន្លែងសម្រាប់ទប់ស្កាត់ IP ដែល Spam ក្នុងរយៈពេលខ្លី (Simple In-Memory Rate Limiter)
const ipRequestLog = new Map();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // ១. ទាញយក IP របស់អ្នកប្រើប្រាស់
  const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown';
  const now = Date.now();

  // ពិនិត្យថាតើ IP នេះធ្លាប់ផ្ញើសារក្នុងរយៈពេល ៣០ វិនាទីចុងក្រោយនេះដែរឬទេ?
  if (ipRequestLog.has(clientIp)) {
    const lastRequestTime = ipRequestLog.get(clientIp);
    if (now - lastRequestTime < 30000) { // 30 វិនាទី
      return res.status(429).json({ 
        success: false, 
        error: 'អ្នកបានផ្ញើច្រើនដងពេកហើយ។ សូមរង់ចាំបន្តិចសិនមុនពេលផ្ញើម្តងទៀត!' 
      });
    }
  }

  const { student, category, page, questionNumber, description, timestamp } = req.body;

  // ២. ការពារការផ្ញើសារទទេរ ឬសារដែលមានលក្ខណៈជា Spam ខ្លីពេក
  if (!description || description.trim().length < 5) {
    return res.status(400).json({ success: false, error: 'សូមសរសេរការពណ៌នាឱ្យបានច្បាស់លាស់បន្តិច។' });
  }

  // កត់ត្រាเวลาដែល IP នេះបានផ្ញើចុងក្រោយ
  ipRequestLog.set(clientIp, now);

  const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

  if (!BOT_TOKEN || !CHAT_ID) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const messageText = `🚨 *របាយការណ៍បញ្ហា - ជីវវិទ្យា ២០២៦* 🚨\n\n` +
                      `👤 *សិស្ស:* ${student}\n` +
                      `📌 *ប្រភេទ:* ${category}\n` +
                      `📍 *ទំព័រ:* ${page} (សំណួរទី #${questionNumber})\n` +
                      `📝 *ការរៀបរាប់:* ${description}\n` +
                      `🌐 *IP:* ${clientIp}\n` +
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
    return res.status(500).json({ error: 'Failed to connect to Telegram' });
  }
}

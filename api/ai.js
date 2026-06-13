export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { query = '', lang = 'fa' } = req.body || {};
  const apiKey = process.env.ANTHROPIC_API_KEY;

  if (apiKey) {
    try {
      const upstream = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: 'claude-3-5-sonnet-20241022',
          max_tokens: 900,
          messages: [{ role: 'user', content: `Reply in ${lang === 'fa' ? 'Persian' : 'English'} as TripNest AI planner: ${query}` }]
        })
      });
      const data = await upstream.json();
      const text = data.content?.map(c => c.text || '').join('\n') || 'No response.';
      return res.status(200).json({ text });
    } catch {}
  }

  const text = lang === 'fa'
    ? `پیشنهاد TripNest برای «${query || 'سفر بعدی'}»:\n\nروز ۱: ورود، چک‌این هتل، گشت سبک شهری و شام محلی.\nروز ۲: بازدید از جاذبه‌های اصلی + مسیر پیشنهادی عکاسی و غذا.\nروز ۳: تجربه محلی، بازارگردی، خرید سوغاتی و برگشت.\n\nبرای پاسخ واقعی AI، در Vercel مقدار ANTHROPIC_API_KEY را اضافه کن.`
    : `TripNest plan for “${query || 'your next trip'}”:\n\nDay 1: Arrival, hotel check-in, light city walk and local dinner.\nDay 2: Main attractions, curated food stops and photo route.\nDay 3: Local experience, market visit, souvenirs and departure.\n\nAdd ANTHROPIC_API_KEY in Vercel to enable real AI responses.`;
  return res.status(200).json({ text });
}

import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const destinations = [
  { name: 'Isfahan', fa: 'اصفهان', tag: 'Culture', img: 'linear-gradient(135deg,#5b7fa6,#c8956c)', nights: '3–5 nights', score: '4.9' },
  { name: 'Shiraz', fa: 'شیراز', tag: 'Gardens', img: 'linear-gradient(135deg,#7c9e8f,#e5b567)', nights: '2–4 nights', score: '4.8' },
  { name: 'Yazd', fa: 'یزد', tag: 'Desert', img: 'linear-gradient(135deg,#c4a882,#8a5d3b)', nights: '2–3 nights', score: '4.9' },
  { name: 'Tehran', fa: 'تهران', tag: 'Urban', img: 'linear-gradient(135deg,#2f3b52,#7aa6ff)', nights: '1–3 nights', score: '4.6' }
];

const modules = [
  ['AI Planner', 'برنامه‌ریز هوشمند', 'Build multi-day trips with budget, city flow and hotel suggestions.'],
  ['Hotel Booking', 'رزرو هتل', 'Search, compare, filter and prepare booking flows for hotels.'],
  ['Local Guides', 'راهنماهای محلی', 'Verified guides, experiences, reviews and partner profiles.'],
  ['Admin CMS', 'مدیریت محتوا', 'Manage destinations, hotels, guides, bookings and landing pages.']
];

function App() {
  const [lang, setLang] = useState('fa');
  const [theme, setTheme] = useState('dark');
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const rtl = lang === 'fa';
  const t = (en, fa) => (rtl ? fa : en);

  const stats = useMemo(() => [
    ['120+', t('Destinations', 'مقصد')],
    ['850+', t('Hotels Ready', 'هتل آماده')],
    ['24/7', t('AI Assistant', 'دستیار هوشمند')],
    ['2', t('Languages', 'زبان')]
  ], [lang]);

  const askAi = async () => {
    setLoading(true);
    setAnswer('');
    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, lang })
      });
      const data = await res.json();
      setAnswer(data.text);
    } catch {
      setAnswer(t('Demo AI response: connect ANTHROPIC_API_KEY in Vercel later.', 'پاسخ دمو: بعداً ANTHROPIC_API_KEY را در Vercel اضافه کن.'));
    }
    setLoading(false);
  };

  return (
    <main className={`shell ${theme}`} dir={rtl ? 'rtl' : 'ltr'}>
      <nav className="nav glass">
        <div className="brand"><span>✦</span> TripNest Pro</div>
        <div className="navLinks">
          <a href="#discover">{t('Discover','کشف')}</a><a href="#plan">{t('Plan','برنامه‌ریزی')}</a><a href="#book">{t('Book','رزرو')}</a><a href="#admin">{t('Admin','ادمین')}</a>
        </div>
        <div className="actions"><button onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}>{lang === 'fa' ? 'EN' : 'FA'}</button><button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>{theme === 'dark' ? '☀' : '☾'}</button></div>
      </nav>
      <section className="hero"><div className="heroText"><div className="badge">{t('AI Travel Super App', 'سوپر اپ سفر با هوش مصنوعی')}</div><h1>{t('Plan, discover and book unforgettable trips.', 'سفر را کشف کن، برنامه‌ریزی کن و حرفه‌ای رزرو کن.')}</h1><p>{t('A premium bilingual platform for travel planning, hotel booking, guides, experiences and content commerce.', 'یک پلتفرم دو زبانه و حرفه‌ای برای برنامه‌ریزی سفر، رزرو هتل، راهنماهای محلی، تجربه‌ها و مدیریت محتوا.')}</p><div className="heroCta"><a className="primary" href="#plan">{t('Start planning', 'شروع برنامه‌ریزی')}</a><a className="secondary" href="#admin">{t('View admin scope', 'مشاهده پنل مدیریت')}</a></div><div className="stats">{stats.map(([n,l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}</div></div><div className="heroCard glass"><div className="mapGlow"/><h3>{t('Smart itinerary preview', 'پیش‌نمایش سفر هوشمند')}</h3><div className="timeline">{['Tehran','Isfahan','Yazd','Shiraz'].map((city,i) => <div key={city}><b>{t('Day','روز')} {i+1}</b><span>{city}</span></div>)}</div><div className="miniSearch">{t('Budget • Hotels • Attractions • Guides', 'بودجه • هتل • جاذبه • راهنما')}</div></div></section>
      <section id="discover" className="section"><div className="sectionHead"><h2>{t('Featured destinations','مقصدهای ویژه')}</h2><p>{t('Initial Iran-first content model, ready for CMS expansion.', 'مدل محتوایی اولیه با تمرکز بر ایران و آماده توسعه در CMS.')}</p></div><div className="grid cards4">{destinations.map(d => <article className="dest glass" key={d.name}><div className="cover" style={{background:d.img}}/><div><span>{d.tag}</span><h3>{rtl ? d.fa : d.name}</h3><p>{d.nights} · ★ {d.score}</p></div></article>)}</div></section>
      <section id="plan" className="section split"><div><h2>{t('AI Planner','برنامه‌ریز هوشمند')}</h2><p>{t('Ask TripNest to create a route. It works in demo mode now and can connect to Claude via API key.', 'از TripNest بخواه مسیر سفر بسازد. فعلاً حالت دمو دارد و با API Key به Claude وصل می‌شود.')}</p></div><div className="ai glass"><textarea value={query} onChange={e=>setQuery(e.target.value)} placeholder={t('Plan a 5-day cultural trip to Isfahan and Shiraz...', 'یک سفر ۵ روزه فرهنگی به اصفهان و شیراز بچین...')} /><button onClick={askAi} disabled={loading}>{loading ? t('Planning...','در حال برنامه‌ریزی...') : t('Generate plan','ساخت برنامه')}</button>{answer && <pre>{answer}</pre>}</div></section>
      <section id="book" className="section"><div className="sectionHead"><h2>{t('Product modules','ماژول‌های محصول')}</h2><p>{t('Built as a modular monolith for V1; ready to grow into services later.', 'برای نسخه اول به‌صورت مونولیت ماژولار؛ آماده رشد به سرویس‌های جدا در آینده.')}</p></div><div className="grid cards4">{modules.map(([en,fa,desc], i) => <div className="module glass" key={en}><span>0{i+1}</span><h3>{t(en,fa)}</h3><p>{desc}</p></div>)}</div></section>
      <section id="admin" className="section admin glass"><div><h2>{t('Admin & Partner ready structure','ساختار آماده ادمین و پارتنر')}</h2><p>{t('The included Prisma schema covers users, trips, destinations, hotels, bookings, guides, experiences, reviews and CMS pages.', 'اسکیما آماده Prisma شامل کاربران، سفرها، مقصدها، هتل‌ها، رزروها، راهنماها، تجربه‌ها، نظرات و صفحات CMS است.')}</p></div><div className="adminGrid">{['Dashboard','Users','Destinations','Hotels','Bookings','CMS','Guides','Reports'].map(x => <span key={x}>{x}</span>)}</div></section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);

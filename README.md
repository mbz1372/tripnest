# TripNest Enterprise Offline V26 Pro

این نسخه دیگر یک HTML ساده نیست؛ یک اسکلت محصولی کامل برای سوپر اپ سفر است که می‌توانی مستقیم در GitHub آپلود کنی و روی Vercel بالا بیاوری.

## شامل چه چیزهایی است؟
- Next.js 14 App Router + TypeScript + Tailwind
- مسیرهای دو زبانه `/fa` و `/en` با RTL/LTR
- صفحه اصلی Product-grade با Hero، جستجو، KPI، مقصدها، ماژول‌ها و Roadmap
- Marketplace هتل با فیلتر، کارت رزرو، پروایدر، وضعیت Liveability و Checkout
- پرواز، تور، برنامه‌ساز سفر، راهنمای محلی، همسفر، بلاگ/SEO
- پروفایل، کیف پول، علاقه‌مندی، ووچر و Checkout
- Admin Operating System شامل Supply OS، Booking Ops، CMS، Growth، Finance، Guide Hub
- دیتای دمو Offline و قابل اجرا بدون دیتابیس
- آماده اتصال بعدی به Auth، DB، Payment، Provider Connector و BI

## اجرا
```bash
npm install
npm run dev
```

آدرس‌ها:
```txt
http://localhost:3000/fa
http://localhost:3000/en
http://localhost:3000/fa/admin
```

## تست Build قبل از Vercel
```bash
npm run build
```

## GitHub
```bash
git init
git add .
git commit -m "TripNest Enterprise Offline V26 Pro"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

## Vercel
- New Project
- Import GitHub repository
- Framework: Next.js
- Build Command: `npm run build`
- Output: پیش‌فرض Next.js

## مرحله بعد برای Production واقعی
1. PostgreSQL + Prisma
2. NextAuth یا OTP موبایل
3. Payment Gateway
4. Hotel/Flight provider connectors
5. فایل آپلود CMS
6. BI dashboard و event tracking
7. Role/Permission واقعی پنل ادمین

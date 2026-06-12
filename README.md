# TripNest Enterprise Offline V26

نسخه کامل‌تر سوپر اپ سفر، آماده Upload در GitHub و Deploy روی Vercel.

## ماژول‌ها
- صفحه خانه حرفه‌ای دو زبانه FA/EN
- Hotel Marketplace با فیلتر و کارت رزرو
- Flight Search دمو
- Tours & Experiences
- AI Itinerary Builder
- Local Guides
- Travel Mate
- Blog & SEO CMS
- User Profile
- Checkout
- Voucher
- Admin Control Center
- PWA manifest
- RTL/LTR و طراحی Responsive

## اجرا روی سیستم
```bash
npm install
npm run dev
```
سپس:
```bash
http://localhost:3000/fa
http://localhost:3000/en
http://localhost:3000/fa/admin
```

## Build تست قبل از آپلود
```bash
npm run build
```

## آپلود در GitHub
```bash
git init
git add .
git commit -m "Initial TripNest Enterprise Offline V26"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```

## Deploy روی Vercel
1. وارد Vercel شو.
2. Add New Project را بزن.
3. همین Repository را Import کن.
4. Framework باید Next.js باشد.
5. Build Command: `npm run build`
6. Output Directory را خالی بگذار.
7. Deploy را بزن.

## نکته مهم
این نسخه بدون دیتابیس خارجی هم بالا می‌آید و تمام دیتاها داخل `src/lib/data.ts` هستند. برای نسخه واقعی بعدی می‌توانی PostgreSQL/Supabase/Neon، Auth، پرداخت، Provider API و CMS واقعی اضافه کنی.

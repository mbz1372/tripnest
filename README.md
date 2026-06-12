# TripNest Enterprise

سوپر اپ سفر دو زبانه برای برنامه‌ریزی سفر، هتل، پرواز، راهنمای محلی، همسفر، بلاگ و پنل ادمین.

## اجرا
```bash
npm install
cp .env.example .env
npx prisma generate
npm run dev
```

## دیپلوی روی Vercel
1. پروژه را در GitHub آپلود کن.
2. در Vercel گزینه Import Project را بزن.
3. Framework: Next.js.
4. برای نسخه دمو نیاز به دیتابیس خارجی نیست. برای نسخه Production، `DATABASE_URL` را به PostgreSQL تغییر بده.
5. Build Command: `npm run build`.

## صفحات اصلی
- `/fa` خانه فارسی
- `/en` خانه انگلیسی
- `/fa/hotels` هتل‌ها
- `/fa/itinerary` برنامه‌ساز سفر
- `/fa/guides` راهنمای محلی
- `/fa/travel-mate` همسفر
- `/fa/blog` بلاگ
- `/fa/admin` پنل مدیریت دمو

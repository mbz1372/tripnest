# TripNest Pro — Vercel Ready

نسخه قابل اجرا روی Vercel از TripNest Pro.

## اجرا روی سیستم

```bash
npm install
npm run dev
```

سپس باز کن:

```text
http://localhost:3000
```

## دیپلوی روی Vercel

1. پروژه را در GitHub آپلود کن.
2. در Vercel گزینه New Project را بزن.
3. همین ریپو را Import کن.
4. Framework باید Next.js باشد.
5. Deploy را بزن.

## AI واقعی

فعلاً AI در حالت Demo/Fallback کار می‌کند تا پروژه بدون ارور روی Vercel بالا بیاید.
برای فعال‌سازی AI واقعی در Vercel این Environment Variable را اضافه کن:

```text
ANTHROPIC_API_KEY=your_key_here
```

## دیتابیس

پروژه بدون دیتابیس هم Build می‌شود. برای مرحله بعد، Neon یا Supabase PostgreSQL بساز و این مقدار را در Vercel قرار بده:

```text
DATABASE_URL=postgresql://...
```

برای اتصال واقعی دیتابیس، در مرحله بعد Prisma را نصب می‌کنیم و همین schema آماده را push می‌کنیم.

## شامل چه چیزهایی است؟

- Next.js 15
- React 19
- TypeScript
- Vercel Ready
- Home / Discover / Plan / Book / Guides / Trips در یک تجربه واحد
- دو زبانه FA/EN در UI
- Dark/Light mode
- AI Assistant API Route
- Prisma schema برای فاز بعد
- ساختار قابل توسعه برای Admin، CMS، Booking، Hotels و Guides

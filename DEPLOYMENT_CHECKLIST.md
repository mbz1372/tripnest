# چک‌لیست دیپلوی

1. داخل پوشه پروژه:
```bash
npm install
cp .env.example .env
npx prisma generate
npm run dev
```
2. GitHub:
```bash
git init
git add .
git commit -m "Initial TripNest Enterprise"
git branch -M main
git remote add origin YOUR_REPO_URL
git push -u origin main
```
3. Vercel:
- Import GitHub Repository
- Framework: Next.js
- Build Command: npm run build
- Output: پیش‌فرض Next.js
- Environment Variables: فعلاً `DATABASE_URL=file:./dev.db` برای تست؛ برای production بهتر است PostgreSQL قرار بدهی.

4. بعد از Deploy:
- مسیر `/fa` را تست کن.
- مسیر `/en` را تست کن.
- مسیر `/fa/admin` را تست کن.

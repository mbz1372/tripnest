# Deployment Checklist

- [ ] `npm install`
- [ ] `npm run dev`
- [ ] بررسی `/fa`
- [ ] بررسی `/en`
- [ ] بررسی `/fa/admin`
- [ ] `npm run build`
- [ ] Push to GitHub
- [ ] Import in Vercel
- [ ] Deploy

## خطاهای رایج
اگر پورت 3000 اشغال بود:
```bash
npm run dev -- -p 3001
```

اگر PowerShell اجازه اجرای script نداد:
```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

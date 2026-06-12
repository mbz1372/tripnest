# Deployment Checklist

- [ ] `npm install`
- [ ] `npm run dev`
- [ ] Check `/fa`
- [ ] Check `/en`
- [ ] Check `/fa/admin`
- [ ] `npm run build`
- [ ] Push to GitHub
- [ ] Import in Vercel
- [ ] Build command: `npm run build`
- [ ] Deploy

## Common fixes
If port 3000 is busy:
```bash
npm run dev -- -p 3001
```

If PowerShell blocks scripts:
```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

If install is slow, delete `node_modules` and `package-lock.json`, then run:
```bash
npm install
```

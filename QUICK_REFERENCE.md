# 🚀 ChurnPredict - Quick Reference

## URLs

| Page | URL |
|------|-----|
| Landing Page | http://localhost:3000 |
| Login | http://localhost:3000/login |
| Signup | http://localhost:3000/signup |
| API Login | http://localhost:3000/api/auth/login |
| API Signup | http://localhost:3000/api/auth/signup |

## Commands

```bash
# Start Next.js Dev Server
cd /home/sanjeetraj/Desktop/SEProject/frontned
npm run dev

# Start Flask App
cd /home/sanjeetraj/Desktop/SEProject/Telecom-Churn-SE
source venvSE/bin/activate
python app.py
```

## Important Files

### Next.js Frontend
```
frontned/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Landing page
│   │   ├── login/page.tsx           # Login page
│   │   ├── signup/page.tsx          # Signup page
│   │   └── api/auth/
│   │       ├── login/route.ts       # Login API
│   │       └── signup/route.ts      # Signup API
│   ├── components/
│   │   └── Navbar.tsx               # Navigation bar
│   └── lib/
│       └── db.ts                    # Database utility
└── users.db                         # SQLite database
```

### ⚠️ MUST CONFIGURE

**File**: `src/app/login/page.tsx` (line ~30)

**Current**:
```typescript
window.location.href = 'http://localhost:5000/predict';
```

**Update to your Flask URL**:
```typescript
window.location.href = 'http://localhost:YOUR_PORT/predict';
```

## Test Flow

1. ✅ Visit http://localhost:3000
2. ✅ Click "Sign Up"
3. ✅ Create account (name, email, password)
4. ✅ Click "Login"
5. ✅ Enter credentials
6. ✅ Should redirect to Flask app

## Features

- ✨ Modern, responsive design
- 🔐 Secure authentication with bcrypt
- 📱 Mobile-friendly
- 🎨 Gradient blue-purple theme
- ⚡ Fast page loads
- 🔄 Smooth transitions

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- SQLite
- bcryptjs

## Colors

- Primary Blue: `#2563eb` (blue-600)
- Primary Purple: `#9333ea` (purple-600)
- Background: Gradient from blue-50 to purple-50

## Status

✅ Next.js running on port 3000
⏳ Flask app - needs to be started
📝 Flask URL - needs configuration

## Quick Fixes

**Build errors?**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

**Database issues?**
```bash
rm users.db
# Restart server - will auto-recreate
```

**Port 3000 in use?**
```bash
# Edit package.json dev script:
"dev": "next dev -p 3001"
```

## Support Docs

- 📄 README_FRONTEND.md - Full documentation
- 📄 SETUP_COMPLETE.md - What was created
- 📄 FLASK_INTEGRATION.md - Integration guide

---

**Version**: 1.0.0  
**Created**: November 13, 2025  
**Framework**: Next.js 16 + React 19

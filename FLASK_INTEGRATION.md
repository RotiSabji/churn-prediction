# Flask Integration Guide

## Overview

This Next.js frontend is designed to work seamlessly with your Flask telecom churn prediction app located at `/home/sanjeetraj/Desktop/SEProject/Telecom-Churn-SE/`.

## Integration Steps

### 1. Update Flask App URL

**File to edit**: `/home/sanjeetraj/Desktop/SEProject/frontned/src/app/login/page.tsx`

**Find this line** (around line 30):
```typescript
window.location.href = 'http://localhost:5000/predict';
```

**Replace with your actual Flask URL**:
```typescript
// If Flask runs on port 5000 (default)
window.location.href = 'http://localhost:5000/predict';

// OR if Flask runs on a different port (e.g., 8080)
window.location.href = 'http://localhost:8080/predict';

// OR if deployed
window.location.href = 'https://your-domain.com/predict';
```

### 2. Check Flask App Routes

Based on your Flask app structure, verify these endpoints exist:

**Expected Flask Routes**:
- `/` - Home page with form
- `/predict` - Prediction results page

**Your Flask app files**:
- `app.py` - Main Flask application
- `templates/index.html` - Home template
- `templates/result.html` - Results template

### 3. Start Flask App

```bash
# Navigate to Flask directory
cd /home/sanjeetraj/Desktop/SEProject/Telecom-Churn-SE

# Activate virtual environment
source venvSE/bin/activate

# Run Flask app
python app.py
```

### 4. Test Full Flow

1. **Start Next.js** (already running):
   - Visit: http://localhost:3000

2. **Start Flask**:
   - Should run on: http://localhost:5000 (or your configured port)

3. **Test Authentication**:
   - Sign up at: http://localhost:3000/signup
   - Login at: http://localhost:3000/login
   - Verify redirect to Flask app

### 5. Optional: Add CORS (if needed)

If you encounter CORS issues when Next.js tries to communicate with Flask, add CORS to your Flask app:

**Install Flask-CORS**:
```bash
pip install flask-cors
```

**Update app.py**:
```python
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# ... rest of your Flask code
```

### 6. Session Management (Optional Enhancement)

For production, consider implementing proper session management:

**Option A: JWT Tokens**
- Next.js generates JWT on login
- Flask validates JWT before serving predictions
- Tokens stored in localStorage/cookies

**Option B: Shared Session Store**
- Use Redis or similar
- Both Next.js and Flask access same session data

**Option C: next-auth**
- Implement next-auth in Next.js
- Create custom provider for your authentication

## Current Setup

### Next.js (Frontend)
- **Port**: 3000
- **Routes**:
  - `/` - Landing page
  - `/login` - Login page
  - `/signup` - Signup page
  - `/api/auth/login` - Login API
  - `/api/auth/signup` - Signup API

### Flask (Backend)
- **Port**: 5000 (default, verify in your app.py)
- **Routes**:
  - `/` - Home/input form
  - `/predict` - Prediction results

## Authentication Flow

```
┌─────────────┐     Signup      ┌──────────────┐
│   User      │ ──────────────> │   Next.js    │
│             │                 │   /signup    │
└─────────────┘                 └──────────────┘
                                       │
                                       │ Store in
                                       │ SQLite
                                       ▼
                                ┌──────────────┐
                                │  users.db    │
                                └──────────────┘

┌─────────────┐      Login      ┌──────────────┐
│   User      │ ──────────────> │   Next.js    │
│             │                 │   /login     │
└─────────────┘                 └──────────────┘
                                       │
                                       │ Verify
                                       │ credentials
                                       ▼
                                ┌──────────────┐
                                │  users.db    │
                                └──────────────┘
                                       │
                                       │ Success?
                                       ▼
                                ┌──────────────┐
                                │   Redirect   │
                                │   to Flask   │
                                └──────────────┘
                                       │
                                       ▼
                                ┌──────────────┐
                                │   Flask App  │
                                │   /predict   │
                                └──────────────┘
```

## Flask App Checklist

Verify these in your `app.py`:

- [ ] Flask app is configured correctly
- [ ] Routes `/` and `/predict` exist
- [ ] Port is set (default 5000)
- [ ] Templates folder contains `index.html` and `result.html`
- [ ] Model is loaded correctly
- [ ] All dependencies are installed in venvSE

## Testing Checklist

- [ ] Next.js runs on http://localhost:3000
- [ ] Flask runs on http://localhost:5000 (or your port)
- [ ] Can sign up a new user
- [ ] Can login with correct credentials
- [ ] Login fails with wrong credentials
- [ ] Redirects to Flask app after successful login
- [ ] Flask app loads correctly after redirect
- [ ] Can make predictions in Flask app

## Troubleshooting

### Issue: Redirect doesn't work
- Check Flask app is running
- Verify URL in login/page.tsx matches Flask URL
- Check browser console for errors

### Issue: CORS errors
- Install and configure Flask-CORS (see step 5)
- Ensure Flask app allows requests from Next.js origin

### Issue: Database not created
- Check permissions in frontned directory
- Verify better-sqlite3 is installed correctly
- Look for errors in terminal

### Issue: Login fails
- Verify user exists in database
- Check password is being hashed correctly
- Look at API response in browser Network tab

## Production Deployment

When deploying to production:

1. **Update Flask URL** in login page to production URL
2. **Use environment variables** for URLs:
   ```typescript
   const FLASK_URL = process.env.NEXT_PUBLIC_FLASK_URL || 'http://localhost:5000';
   window.location.href = `${FLASK_URL}/predict`;
   ```

3. **Switch to production database** (PostgreSQL/MySQL instead of SQLite)

4. **Implement proper session management**

5. **Add HTTPS** for both Next.js and Flask

6. **Set up proper CORS** configuration

## Support

For issues:
1. Check browser console for errors
2. Check Next.js terminal for errors
3. Check Flask terminal for errors
4. Verify all services are running
5. Test each component independently

Good luck with your integration! 🚀

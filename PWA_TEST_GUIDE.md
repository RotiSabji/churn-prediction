# PWA Quick Test Guide

## ✅ Files Created

Your Progressive Web App setup is complete! Here's what was added:

### Files:
- ✅ `/public/manifest.json` - PWA manifest configuration
- ✅ `/public/sw.js` - Service worker for offline support
- ✅ `/public/icon-192x192.png` - App icon (small)
- ✅ `/public/icon-256x256.png` - App icon (medium)
- ✅ `/public/icon-384x384.png` - App icon (large)
- ✅ `/public/icon-512x512.png` - App icon (extra large)
- ✅ `/src/components/PWARegister.tsx` - Service worker registration
- ✅ Updated `/src/app/layout.tsx` - Added PWA metadata

## 🧪 Quick Test

### 1. **Restart Dev Server** (if running)
```bash
npm run dev
```

### 2. **Open in Chrome**
Visit: http://localhost:3000

### 3. **Check Installation**
- Look for the install icon (⊕ or computer icon) in the address bar
- Click it to install the app

### 4. **Test Service Worker**
1. Open DevTools (F12)
2. Go to **Application** tab
3. Click **Service Workers** on left
4. You should see "sw.js" registered and activated

### 5. **Test Manifest**
1. In DevTools → **Application** tab
2. Click **Manifest** on left
3. Verify all details are correct
4. Icons should be visible

### 6. **Test Offline**
1. In DevTools → **Application** → **Service Workers**
2. Check "Offline" checkbox
3. Refresh the page
4. The app should still load!

### 7. **Install on Desktop**
- Click the install icon in address bar
- The app opens in its own window
- Close browser - app still works independently

### 8. **Install on Mobile**
1. Open http://YOUR_IP:3000 on your phone
2. On Chrome: Menu → "Add to Home Screen"
3. On Safari: Share → "Add to Home Screen"
4. App icon appears on your home screen

## 🎯 Expected Results

✅ Service worker registered successfully  
✅ Manifest loads without errors  
✅ All 4 icons visible in manifest  
✅ Install prompt appears  
✅ App works offline after first visit  
✅ Theme color matches (#2563eb - blue)  
✅ App shortcuts visible (Login, Sign Up)  

## 🔍 Troubleshooting

**Service Worker not registering?**
- Make sure you're on http://localhost (not 127.0.0.1)
- Check browser console for errors
- Try hard refresh (Ctrl+Shift+R)

**Icons not showing?**
- Verify files exist in /public directory
- Check file sizes are reasonable (5-25KB)
- Clear browser cache

**Can't install app?**
- PWA requires HTTPS in production
- On localhost, HTTP is allowed for testing
- Check Lighthouse report for issues

**Offline mode not working?**
- Wait for service worker to activate
- Visit pages while online first
- Check cache in DevTools → Application → Cache Storage

## 📱 Production Deployment

When deploying to production:

1. **Use HTTPS** - Required for PWA
2. **Test on real device** - Better than emulator
3. **Run Lighthouse audit** - Get PWA score
4. **Update cache version** - When making changes

## 🚀 Next Steps

1. ✅ Test installation on desktop
2. ✅ Test installation on mobile device
3. ✅ Test offline functionality
4. ✅ Run Lighthouse PWA audit
5. Optional: Add push notifications
6. Optional: Add update notification when new version available

## 📊 Lighthouse Test

Run this in DevTools:
1. F12 → Lighthouse tab
2. Select "Progressive Web App"
3. Click "Generate report"
4. Aim for 90+ score!

---

**Your ChurnPredict app is now a fully functional PWA!** 🎉

Users can install it like a native app with offline support and fast loading!

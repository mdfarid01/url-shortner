# 🚀 Free Deployment Checklist

## Prerequisites
- [ ] GitHub account
- [ ] MongoDB Atlas account  
- [ ] Vercel account
- [ ] Railway account

---

## Phase 1: Setup MongoDB (Database) - 5 mins

### Step 1.1: Create MongoDB Atlas Account
- [ ] Go to https://www.mongodb.com/cloud/atlas
- [ ] Click "Sign Up" → Create account with email or GitHub
- [ ] Verify email address

### Step 1.2: Create Free Cluster
- [ ] Click "Create" → Select "Free" tier (M0)
- [ ] Choose region closest to you
- [ ] Click "Create Cluster" (takes ~3 mins)

### Step 1.3: Setup Database Access
- [ ] Go to "Security" → "Database Access"
- [ ] Click "Add New Database User"
- [ ] Username: `urlshortener`
- [ ] Password: Create strong password (save it!)
- [ ] Click "Add User"

### Step 1.4: Setup Network Access
- [ ] Go to "Security" → "Network Access"
- [ ] Click "Add IP Address"
- [ ] Select "Allow Access from Anywhere" (0.0.0.0/0)
- [ ] Click "Confirm"

### Step 1.5: Get Connection String
- [ ] Go to "Clusters" → Click "Connect" button
- [ ] Select "Connect your application"
- [ ] Copy connection string
- [ ] Replace `<password>` with your actual password
- [ ] Save it for later: `MONGO_URI=mongodb+srv://urlshortener:YOUR_PASSWORD@cluster0.mongodb.net/url-shortener?retryWrites=true&w=majority`

---

## Phase 2: Deploy Backend (Railway) - 10 mins

### Step 2.1: Create GitHub Repository
- [ ] Go to https://github.com/new
- [ ] Repository name: `url-shortener`
- [ ] Click "Create repository"
- [ ] Run these commands in terminal:
```bash
cd /Users/test/url-shortner
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/url-shortener.git
git push -u origin main
```

### Step 2.2: Deploy on Railway
- [ ] Go to https://railway.app
- [ ] Sign up with GitHub
- [ ] Click "New Project" → "Deploy from GitHub"
- [ ] Select your `url-shortener` repository
- [ ] Railway auto-detects it's a Node.js project ✓

### Step 2.3: Add Environment Variables
- [ ] In Railway dashboard, click your project
- [ ] Go to "Variables"
- [ ] Add these variables:
```
MONGO_URI=mongodb+srv://urlshortener:PASSWORD@cluster0.mongodb.net/url-shortener?retryWrites=true&w=majority
APP_URL=https://[railway-url]/
JWT_SECRET=your-random-secret-key-12345
NODE_ENV=production
FRONTEND_URL=https://[vercel-url]
```

### Step 2.4: Wait for Deployment
- [ ] Railway automatically builds and deploys
- [ ] Takes ~2-3 minutes
- [ ] You'll see "Deployment Successful" ✓
- [ ] Copy your Railway URL (e.g., `https://url-shortener-prod.up.railway.app`)

---

## Phase 3: Deploy Frontend (Vercel) - 10 mins

### Step 3.1: Deploy on Vercel
- [ ] Go to https://vercel.com
- [ ] Sign up with GitHub
- [ ] Click "Import Project"
- [ ] Select your `url-shortener` repository
- [ ] Set "Root Directory" to `FRONTEND`
- [ ] Click "Deploy"

### Step 3.2: Add Environment Variables
- [ ] In Vercel dashboard, go to "Settings" → "Environment Variables"
- [ ] Add:
```
VITE_API_URL=https://[your-railway-url]
```
- [ ] Redeploy (go to "Deployments" → Click "Redeploy")

### Step 3.3: Test Deployment
- [ ] Click on your Vercel deployment URL
- [ ] Try to register a new user
- [ ] Try to create a shortened URL
- [ ] Try to access the dashboard

---

## Phase 4: Update Backend CORS (1 min)

### Step 4.1: Update Backend
- [ ] Go back to your repository
- [ ] In `BACKEND/app.js`, update CORS origins if needed
- [ ] Git push changes
- [ ] Railway auto-redeploys ✓

---

## 🎯 Final Testing Checklist

- [ ] Frontend loads at https://your-app.vercel.app
- [ ] Can register new account
- [ ] Can login successfully
- [ ] Can create a short URL
- [ ] Short URL redirects properly
- [ ] Can view all user URLs in dashboard

---

## 💾 Cost Breakdown

| Service | Free Tier | Cost |
|---------|-----------|------|
| MongoDB Atlas | 512MB storage | FREE |
| Railway | $5/month credit | FREE (covers this app) |
| Vercel | 100GB bandwidth | FREE |
| **TOTAL** | - | **$0/month** |

---

## ⚠️ Important Notes

1. **Railway Credit**: Gets renewed monthly ($5). Your app usage is minimal, so you'll stay within free tier
2. **MongoDB Atlas**: Free tier limited to 512MB. Plenty for URL shortener
3. **CORS**: Make sure both Vercel and Railway URLs are in the allowed origins
4. **Secrets**: Never commit `.env` file. Always use platform-specific secret management
5. **Domain**: You can add custom domain later (optional)

---

## 🆘 Troubleshooting

### "Network Error" on Login
- Check CORS origins in `BACKEND/app.js`
- Verify Railway URL is correct
- Check MongoDB connection string

### "Cannot connect to MongoDB"
- Verify IP is whitelisted in MongoDB Atlas
- Check `MONGO_URI` contains correct password
- Ensure database name is `url-shortener`

### Frontend shows blank page
- Check `VITE_API_URL` environment variable
- Run `npm run build` locally to test
- Check browser console for errors

---

## 📚 Useful Links

- [Railway Docs](https://docs.railway.app)
- [Vercel Docs](https://vercel.com/docs)
- [MongoDB Atlas Docs](https://docs.atlas.mongodb.com)
- [Express CORS](https://expressjs.com/en/resources/middleware/cors.html)

# Free Deployment Guide for URL Shortener

## 🚀 Deployment Steps

### Step 1: MongoDB Atlas (Free Database)
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a free M0 cluster
4. Click "Connect" and copy the connection string
5. Replace `<password>` with your password
6. Format: `mongodb+srv://username:password@cluster.mongodb.net/url-shortener?retryWrites=true&w=majority`

### Step 2: Deploy Frontend (Vercel - Completely Free)
1. Go to https://vercel.com
2. Sign up with GitHub
3. Click "New Project"
4. Select this repository
5. Set project root to `FRONTEND`
6. Add environment variable:
   ```
   VITE_API_URL=https://your-backend.railway.app
   ```
7. Deploy!

### Step 3: Deploy Backend (Railway - Free tier)
1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub"
4. Select your repository
5. Add environment variables:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/url-shortener?retryWrites=true&w=majority
   APP_URL=https://your-backend.railway.app/
   JWT_SECRET=your-secret-key-here-change-this
   NODE_ENV=production
   ```
6. Railway will auto-detect and deploy!

### Step 4: Update Frontend API URL
Update `FRONTEND/src/utils/axiosInstance.js`:
```javascript
const axiosInstance = axios.create({
    baseURL: process.env.VITE_API_URL || "http://localhost:3000",
    timeout: 10000,
    withCredentials: true
})
```

## 📊 Cost Breakdown
- **MongoDB Atlas**: FREE (512MB)
- **Vercel**: FREE (10 projects, 100GB bandwidth)
- **Railway**: FREE ($5/month credit - enough for hobby project)
- **Total**: $0/month (with Railway credit covering usage)

## 🔗 Important
- MongoDB Atlas: Whitelist your IP in security settings
- Railway: Automatically generates public URL for your backend
- Vercel: Shows deployment URL after build completes

## ✅ Testing After Deployment
1. Visit your Vercel frontend URL
2. Register a new account
3. Create a shortened URL
4. Test the redirect functionality

# 🚀 Deployment Guide - Senti-Trade.ai

Quick deployment instructions for Vercel (Frontend) and Railway/Heroku (Backend)

---

## Option 1: Deploy to Vercel + Railway (Recommended)

### Step 1: Deploy Backend to Railway (5 minutes)

1. **Create Railway Account**
   - Visit: https://railway.app
   - Sign up with GitHub

2. **Connect Your Repository**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Connect your Senti-Trade.ai repo

3. **Configure Backend**

   ```bash
   # Railway automatically detects Node.js project
   # Select Server/ as the root
   ```

4. **Add Environment Variables**
   - Go to Variables
   - Add these:

   ```env
   PORT=3001
   NEWS_API=https://newsapi.org/v2/everything?q=
   NEWS_API_KEY=your_newsapi_key_here
   GEMINI_API_KEY=your_gemini_api_key_here
   FRONTEND_URL=https://your-frontend-domain.vercel.app
   ```

5. **Deploy**
   - Click "Deploy"
   - Wait for ✅ Deployment Success
   - Your backend URL will be: `https://your-project-name.up.railway.app`

---

### Step 2: Deploy Frontend to Vercel (5 minutes)

1. **Create Vercel Account**
   - Visit: https://vercel.com
   - Sign up with GitHub

2. **Import Project**
   - Click "New Project"
   - Select your Senti-Trade.ai repository
   - Select "Client" as root directory

3. **Configure Environment Variables**
   - Add Environment Variables:

   ```env
   VITE_SERVER_URL=https://your-project-name.up.railway.app/api/
   ```

4. **Deploy**
   - Click "Deploy"
   - Wait for ✅ Deployment Success
   - Your frontend URL will be: `https://your-project-name.vercel.app`

---

### Step 3: Update Backend CORS

1. Go to Railway Dashboard
2. Go to Variables
3. Update `FRONTEND_URL`:
   ```env
   FRONTEND_URL=https://your-project-name.vercel.app
   ```
4. Redeploy (Railway auto-redeploys on env change)

---

### Step 4: Update README

Edit `README.md` and replace:

```markdown
[🚀 Live Demo - Coming Soon](https://senti-trade-ai.com)
```

With:

```markdown
[🚀 Live Demo](https://your-project-name.vercel.app)
```

---

## Option 2: Deploy to Heroku + Netlify

### Backend: Heroku (Free tier discontinued - use Railway instead)

If you must use Heroku:

```bash
# Create Procfile in Server/:
echo "web: node server.js" > Server/Procfile

# Push to Heroku
git push heroku main
```

### Frontend: Netlify

1. **Build Locally**

   ```bash
   cd Client
   npm run build
   ```

2. **Connect to Netlify**
   - Drag & drop the `dist/` folder OR
   - Connect GitHub repo

3. **Add Environment Variables**
   - Site settings → Build & deploy → Environment
   ```env
   VITE_SERVER_URL=your-backend-url/api/
   ```

---

## Option 3: Manual VPS Deployment

### Backend Setup

```bash
# SSH into your server
ssh user@your-server-ip

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Clone project
git clone https://github.com/yourusername/senti-trade-ai.git
cd senti-trade-ai/Server

# Install dependencies
npm install

# Create .env file
nano .env
# Add your environment variables

# Install PM2 for process management
npm install -g pm2

# Start application
pm2 start server.js --name "senti-trade-api"
pm2 startup
pm2 save
```

### Frontend Setup

```bash
# On your server
cd /var/www/html

# Clone project
git clone https://github.com/yourusername/senti-trade-ai.git
cd senti-trade-ai/Client

# Build
npm install
npm run build

# Create nginx config
sudo nano /etc/nginx/sites-available/senti-trade

# Add:
server {
    listen 80;
    server_name your-domain.com;

    root /var/www/html/senti-trade-ai/Client/dist;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /api/ {
        proxy_pass http://localhost:3001;
    }
}

# Enable site
sudo ln -s /etc/nginx/sites-available/senti-trade /etc/nginx/sites-enabled/
sudo systemctl restart nginx
```

---

## ✅ Post-Deployment Checklist

### Test Backend API

```bash
curl -X POST https://your-backend-url/api/sentiment/getData \
  -H "Content-Type: application/json" \
  -d '{"topic":"apple"}'

# Should return:
{
  "status": true,
  "newsData": [...],
  "rawData": {...}
}
```

### Test Frontend

1. Open https://your-frontend-domain.com
2. Type "Apple" in search
3. Wait 2-3 seconds
4. Should see news + gauge + chart

### Monitor Errors

```bash
# Railway: Deployments → View Logs
# Vercel: Deployments → Function Logs
# Heroku: heroku logs --tail
```

---

## 🔒 Security Checklist

- [ ] API keys not exposed in GitHub (use .env)
- [ ] HTTPS enabled on both frontend & backend
- [ ] CORS properly configured for your domain
- [ ] Environment variables set on deployment platform
- [ ] Error logs don't expose sensitive data

---

## 🎬 Share Your Live Demo

Once deployed:

1. **Update README**
   - Replace placeholder with live URL
   - Add screenshot links

2. **Create Social Posts**

   ```
   🚀 Just launched Senti-Trade.ai!

   Analyze market sentiment in real-time powered by Google Gemini AI.

   Check it out: https://your-domain.com

   #FinTech #AI #Trading #React #Node
   ```

3. **Share Demo Video**
   - Upload to YouTube
   - Share on Twitter, LinkedIn
   - Pin to GitHub readme

---

## 📞 Support

### Common Issues

| Issue              | Solution                                        |
| ------------------ | ----------------------------------------------- |
| CORS Error         | Check FRONTEND_URL in backend env vars          |
| 502 Bad Gateway    | Backend API not responding - check Railway logs |
| Blank page         | Check VITE_SERVER_URL in frontend env vars      |
| No news data       | Check API keys are valid                        |
| AI sentiment fails | Fallback to local should work                   |

### Get Help

- Railway Support: https://railway.app/support
- Vercel Support: https://vercel.com/support
- GitHub Issues: Create issue in your repo

---

**Happy Deploying! 🎉**

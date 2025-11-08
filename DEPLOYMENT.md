# Vriddhi Website - Deployment Guide

## 🌐 Deployment Options

### Option 1: Netlify (Recommended - Easiest)

#### Method A: Drag & Drop
1. Build your project:
   ```bash
   npm run build
   ```

2. Go to [Netlify](https://www.netlify.com/)
3. Sign up or log in
4. Drag the `build` folder to Netlify
5. Done! Your site is live

#### Method B: Git Integration
1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Connect your GitHub repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Deploy!

**Custom Domain**: 
- Go to Domain settings
- Add your custom domain
- Update DNS records as instructed

---

### Option 2: Vercel (Great for React)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Vercel auto-detects React settings
5. Deploy!

**Automatic deployments**: Every push to main branch deploys automatically

---

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save gh-pages
   ```

2. Add to `package.json`:
   ```json
   {
     "homepage": "https://yourusername.github.io/vriddhi",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

4. Enable GitHub Pages in repository settings

---

### Option 4: Traditional Web Hosting (cPanel)

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload contents of `build` folder to:
   - `public_html/` (for main domain)
   - `public_html/subdomain/` (for subdomain)

3. Configure `.htaccess`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 🔧 Pre-Deployment Checklist

### 1. Update All Links
- [ ] Booking URL in `BookingPage.js`
- [ ] Email in `Footer.js`
- [ ] Phone number in `Footer.js`
- [ ] Social media links in `Footer.js`

### 2. Add Images
- [ ] Logo: `public/logo.png`
- [ ] Founder photo: `public/founder.jpg`
- [ ] Gallery images: `public/images/gallery1-8.jpg`

### 3. Test Locally
```bash
npm run build
npm install -g serve
serve -s build
```
Visit: http://localhost:3000

### 4. Check Functionality
- [ ] All navigation links work
- [ ] Smooth scrolling works
- [ ] Booking button redirects correctly
- [ ] Gallery auto-scrolls
- [ ] Contact links work (email, phone)
- [ ] Social media links open in new tabs
- [ ] Mobile responsive design
- [ ] All animations work

### 5. SEO Optimization
Update `public/index.html`:
```html
<meta name="description" content="Your custom description">
<meta name="keywords" content="therapy, counseling, Chennai, psychological services">
<meta property="og:title" content="Vriddhi Psychological Services">
<meta property="og:description" content="Your description">
<meta property="og:image" content="URL to your logo">
```

---

## 📊 Post-Deployment

### Add Google Analytics
1. Get tracking ID from [Google Analytics](https://analytics.google.com/)
2. Add to `public/index.html` before `</head>`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'GA_TRACKING_ID');
   </script>
   ```

### Set Up Contact Form (Optional)
Consider using:
- **Formspree**: https://formspree.io/
- **EmailJS**: https://www.emailjs.com/
- **Netlify Forms**: Built into Netlify

### SSL Certificate
- **Netlify/Vercel**: Automatic HTTPS
- **cPanel**: Use Let's Encrypt (free)

---

## 🔄 Updates & Maintenance

### Making Updates
1. Make changes locally
2. Test with `npm start`
3. Build with `npm run build`
4. Deploy:
   - **Netlify/Vercel**: Git push (auto-deploys)
   - **GitHub Pages**: `npm run deploy`
   - **cPanel**: Upload new build folder

### Backup Strategy
- Keep source code on GitHub
- Export database if you add one later
- Backup images regularly

---

## 🐛 Common Deployment Issues

### Issue: Blank page after deployment
**Solution**: Check browser console, verify `homepage` in `package.json`

### Issue: 404 on page refresh
**Solution**: Configure server for SPA routing (see platform-specific guides above)

### Issue: Images not loading
**Solution**: 
- Check image paths (use relative paths)
- Ensure images are in `public` folder
- Verify case-sensitive filenames

### Issue: Slow loading
**Solution**:
- Optimize images (use TinyPNG or similar)
- Enable caching
- Use CDN for static assets

---

## 📱 Testing URLs

After deployment, test on:
- Desktop (Chrome, Firefox, Safari, Edge)
- Mobile (iOS Safari, Android Chrome)
- Tablet

Use tools:
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

---

## 🎉 You're Live!

Once deployed, share your website:
- Add to Google Business Profile
- Share on social media
- Add to email signatures
- Submit to psychology directories

---

**Need help?** Check the README.md or SETUP_GUIDE.md for additional information.


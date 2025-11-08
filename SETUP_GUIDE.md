# Vriddhi Website - Quick Setup Guide

## 🚀 Quick Start (5 Minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Add Images

Create the images folder:
```bash
mkdir public/images
```

Add these files to the `public` folder:
1. **Logo**: `public/logo.png` 
   - The logo image you provided (tree of life with fingerprint)
   
2. **Founder Photo**: `public/founder.jpg`
   - Professional photo of Sangeetha Dilipkumar

3. **Gallery Images**: `public/images/gallery1.jpg` through `gallery8.jpg`
   - 8 images showcasing therapy sessions, workshops, etc.
   - Can use placeholder images initially

### Step 3: Update Booking Link

Edit `src/components/BookingPage/BookingPage.js` (line 7):
```javascript
const [bookingUrl, setBookingUrl] = useState('YOUR_ACTUAL_BOOKING_URL');
```

Replace with your actual booking platform URL (Calendly, Acuity, etc.)

### Step 4: Update Contact Details

Edit `src/components/Footer/Footer.js`:

**Email** (line 63):
```javascript
<a href="mailto:YOUR_EMAIL">
```

**Phone** (line 67):
```javascript
<a href="tel:YOUR_PHONE_NUMBER">
```

**Location** (line 71):
```javascript
<span>Your actual address</span>
```

**Social Media** (lines 75-83):
```javascript
<a href="YOUR_INSTAGRAM_URL">
<a href="YOUR_LINKEDIN_URL">
<a href="YOUR_FACEBOOK_URL">
```

### Step 5: Run the Website
```bash
npm start
```

Visit: http://localhost:3000

## 📝 Important Notes

### If Images Don't Load
The website will show placeholder images with the Vriddhi branding. This is intentional and won't break the site.

### Booking URL Options
Popular booking platforms you can use:
- **Calendly**: https://calendly.com/
- **Acuity Scheduling**: https://acuityscheduling.com/
- **Zoho Bookings**: https://www.zoho.com/bookings/
- **SimplyBook.me**: https://simplybook.me/

### Color Customization
To adjust colors, edit `src/index.css` (lines 10-17):
```css
:root {
  --olive-green: #556B2F;
  --mustard-yellow: #D4AF37;
  /* etc. */
}
```

## 🎨 Brand Colors Reference

- **Olive Green**: #556B2F (Primary)
- **Dark Olive**: #3d4d21 (Hover states)
- **Mustard Yellow**: #D4AF37 (Accent)
- **Light Mustard**: #E5C158 (Hover states)
- **Black**: #1a1a1a (Text)
- **White**: #ffffff (Background)

## 🔧 Common Customizations

### Change Section Order
Edit `src/App.js` and reorder the components in the `HomePage` function.

### Add/Remove Services
Edit `src/components/Services/Services.js` and add/remove service cards.

### Modify Navigation
Edit `src/components/Navbar/Navbar.js` to add/remove menu items.

## 📱 Testing Checklist

- [ ] Desktop view (1920px)
- [ ] Tablet view (768px)
- [ ] Mobile view (375px)
- [ ] All navigation links work
- [ ] Booking button redirects correctly
- [ ] Contact information is correct
- [ ] Images load properly
- [ ] Animations work smoothly
- [ ] Social media links open in new tabs

## 🚀 Deployment

### Deploy to Netlify (Recommended)
1. Create account at https://netlify.com
2. Drag & drop the `build` folder
3. Done!

### Deploy to Vercel
1. Create account at https://vercel.com
2. Import your GitHub repository
3. Deploy automatically

### Deploy to GitHub Pages
```bash
npm install --save gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/vriddhi",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Run:
```bash
npm run deploy
```

## 🆘 Troubleshooting

### "Module not found" errors
```bash
npm install
```

### Port 3000 already in use
```bash
npm start -- --port 3001
```

### Build fails
1. Delete `node_modules` and `package-lock.json`
2. Run `npm install` again
3. Run `npm run build`

## 📞 Need Help?

If you encounter any issues:
1. Check the console for error messages
2. Verify all files are in the correct locations
3. Ensure all dependencies are installed
4. Check that image paths are correct

---

**You're all set!** 🎉

The website is now ready to customize and deploy. All components are modular and easy to update.


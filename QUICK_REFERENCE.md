# Vriddhi Website - Quick Reference

## 🚀 Common Commands

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Test production build locally
npm install -g serve
serve -s build
```

## 📁 File Locations

### Images
- **Logo**: `public/logo.png`
- **Founder**: `public/founder.jpg`
- **Gallery**: `public/images/gallery1.jpg` to `gallery8.jpg`

### Content Files
- **Home/Hero**: `src/components/Hero/Hero.js`
- **About Vriddhi**: `src/components/AboutVriddhi/AboutVriddhi.js`
- **Founder**: `src/components/AboutFounder/AboutFounder.js`
- **Services**: `src/components/Services/Services.js`
- **Group Therapy**: `src/components/GroupTherapy/GroupTherapy.js`
- **Training**: `src/components/Training/Training.js`
- **Gallery**: `src/components/Gallery/Gallery.js`
- **Booking**: `src/components/BookingPage/BookingPage.js`
- **Footer**: `src/components/Footer/Footer.js`

### Styling
- **Global Styles**: `src/index.css`
- **Component Styles**: Each component has its own `.css` file

## 🎨 Colors (Edit in `src/index.css`)

```css
--olive-green: #556B2F;     /* Primary color */
--dark-olive: #3d4d21;       /* Hover states */
--mustard-yellow: #D4AF37;   /* Accent color */
--light-mustard: #E5C158;    /* Hover states */
--black: #1a1a1a;            /* Text */
--white: #ffffff;            /* Background */
```

## 🔗 Update Links

### Booking URL
**File**: `src/components/BookingPage/BookingPage.js` (Line 7)
```javascript
const [bookingUrl, setBookingUrl] = useState('YOUR_URL_HERE');
```

### Contact Email
**File**: `src/components/Footer/Footer.js` (Line 63)
```javascript
<a href="mailto:YOUR_EMAIL">
```

### Phone Number
**File**: `src/components/Footer/Footer.js` (Line 67)
```javascript
<a href="tel:YOUR_PHONE">
```

### Social Media
**File**: `src/components/Footer/Footer.js` (Lines 75-83)
```javascript
<a href="YOUR_INSTAGRAM_URL">
<a href="YOUR_LINKEDIN_URL">
<a href="YOUR_FACEBOOK_URL">
```

## 📝 Content Updates

### Update Service Descriptions
**File**: `src/components/Services/Services.js`
- Lines 25-45: Individual Psychotherapy
- Lines 47-63: Somatic Therapy
- Lines 65-81: Expressive Arts Therapy

### Update Training Programs
**File**: `src/components/Training/Training.js`
- Lines 25-45: Mental Health Professionals
- Lines 47-65: Educators
- Lines 67-85: Corporate Wellbeing
- Lines 87-105: Mental Health Workshops

### Update Founder Info
**File**: `src/components/AboutFounder/AboutFounder.js`
- Lines 20-28: Name and title card
- Lines 32-36: Intro paragraph
- Lines 40-48: Qualifications
- Lines 52-62: Expertise areas
- Lines 66-74: Training certifications

## 🎯 Navigation Links

### Add New Menu Item
**File**: `src/components/Navbar/Navbar.js`

1. Add to menu (around line 47):
```javascript
<li>
  <a onClick={() => scrollToSection('YOUR_SECTION_ID')}>
    Your Link Text
  </a>
</li>
```

2. Add corresponding section ID to your component:
```javascript
<section id="YOUR_SECTION_ID">
```

## 📱 Responsive Breakpoints

```css
/* Desktop */
@media (min-width: 969px) { }

/* Tablet */
@media (max-width: 968px) { }

/* Mobile */
@media (max-width: 768px) { }

/* Small Mobile */
@media (max-width: 480px) { }
```

## 🔧 Common Customizations

### Change Font
**File**: `public/index.html` (Line 13-14)
```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT">
```

Then update in `src/index.css`:
```css
body {
  font-family: 'YOUR_FONT', sans-serif;
}
```

### Add New Section
1. Create component folder: `src/components/NewSection/`
2. Create files: `NewSection.js` and `NewSection.css`
3. Import in `src/App.js`:
   ```javascript
   import NewSection from './components/NewSection/NewSection';
   ```
4. Add to HomePage function:
   ```javascript
   <NewSection />
   ```

### Change Gallery Speed
**File**: `src/components/Gallery/Gallery.js` (Line 26)
```javascript
const scrollSpeed = 0.5; // Adjust value (higher = faster)
```

## 🐛 Troubleshooting

### Clear Cache
```bash
rm -rf node_modules package-lock.json
npm install
```

### Check for Errors
```bash
npm start
```
Open browser console (F12) and check for errors

### Images Not Showing
1. Verify file exists in correct location
2. Check filename matches exactly (case-sensitive)
3. Check file format (jpg, png, etc.)
4. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)

### Build Fails
1. Check for console errors
2. Verify all imports are correct
3. Ensure no missing dependencies
4. Try clearing cache and reinstalling

## 📊 Performance Tips

### Optimize Images
- Use JPG for photos
- Use PNG for logos/graphics with transparency
- Compress images before uploading
- Recommended tools: TinyPNG, ImageOptim

### Speed Up Load Time
1. Optimize images (compress)
2. Enable caching
3. Use lazy loading for images
4. Minify CSS/JS (automatic in production build)

## 🔒 Security Checklist

- [ ] Use HTTPS (SSL certificate)
- [ ] Update dependencies regularly: `npm audit fix`
- [ ] Don't commit sensitive data
- [ ] Use environment variables for secrets
- [ ] Enable CORS if needed
- [ ] Add security headers

## 📞 Quick Support

**Documentation Files:**
- `README.md` - Full documentation
- `SETUP_GUIDE.md` - Step-by-step setup
- `DEPLOYMENT.md` - Deployment instructions
- `QUICK_REFERENCE.md` - This file

**Project Structure:**
```
vriddhi/
├── public/          # Static files (images, index.html)
├── src/
│   ├── components/  # All React components
│   ├── hooks/       # Custom React hooks
│   └── App.js       # Main app component
└── package.json     # Dependencies and scripts
```

---

**💡 Tip**: Bookmark this file for quick access to common tasks!


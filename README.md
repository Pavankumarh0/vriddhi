# Vriddhi Psychological Services Website

A modern, responsive React website for Vriddhi Psychological Services, inspired by professional therapy service websites with a focus on healing, growth, and transformation.

## 🌿 About

Vriddhi (Sanskrit for "growth and transformation") is a psychological services website featuring:
- Individual Psychotherapy
- Somatic Therapy
- Expressive Arts Therapy
- Group & Couples Therapy
- Professional Training & Workshops

## 🎨 Design Theme

The website uses a carefully selected color palette:
- **Olive Green** (#556B2F): Primary brand color
- **Mustard Yellow** (#D4AF37): Accent color
- **Black** (#1a1a1a): Text color
- **White** (#ffffff): Background color

## ✨ Features

- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Scroll-based animations for enhanced UX
- **Auto-scrolling Gallery**: Horizontal auto-scrolling image gallery
- **Modern UI/UX**: Clean, professional design with beautiful transitions
- **Booking System**: Integrated booking page with external redirect
- **SEO Friendly**: Semantic HTML and optimized structure

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd vriddhi
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The website will open at [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
vriddhi/
├── public/
│   ├── index.html
│   ├── logo.png (add your logo here)
│   ├── founder.jpg (add founder photo here)
│   └── images/
│       └── gallery1-8.jpg (add gallery images here)
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── AboutVriddhi/
│   │   ├── AboutFounder/
│   │   ├── Services/
│   │   ├── GroupTherapy/
│   │   ├── Training/
│   │   ├── Gallery/
│   │   ├── Closing/
│   │   ├── BookingPage/
│   │   └── Footer/
│   ├── hooks/
│   │   └── useScrollAnimation.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🖼️ Adding Images

### Logo
- Add your logo as `public/logo.png`
- Recommended size: 500x500px or larger
- Format: PNG with transparent background

### Founder Photo
- Add founder photo as `public/founder.jpg`
- Recommended size: 800x1000px (portrait orientation)
- Format: JPG or PNG

### Gallery Images
- Add 8 images to `public/images/` folder
- Name them: `gallery1.jpg`, `gallery2.jpg`, etc.
- Recommended size: 800x600px (landscape orientation)
- Format: JPG or PNG

## 🔧 Customization

### Update Booking URL

In `src/components/BookingPage/BookingPage.js`, update the booking URL:

```javascript
const [bookingUrl, setBookingUrl] = useState('YOUR_BOOKING_URL_HERE');
```

### Update Contact Information

In `src/components/Footer/Footer.js`, update:
- Email address
- Phone number
- Location
- Social media links

### Update Content

All content can be easily modified in the respective component files:
- `Hero.js` - Welcome message
- `AboutVriddhi.js` - About section
- `AboutFounder.js` - Founder information
- `Services.js` - Service descriptions
- etc.

## 🎯 Key Sections

1. **Hero Section**: Welcome message with call-to-action
2. **About Vriddhi**: Organization philosophy and approach
3. **About Founder**: Founder's qualifications and expertise
4. **Services**: Three main therapy modalities
5. **Group Therapy**: Relational group work and couples therapy
6. **Training**: Four types of professional training programs
7. **Gallery**: Auto-scrolling image gallery
8. **Closing**: Final message and booking CTA
9. **Footer**: Contact information and quick links

## 📱 Responsive Breakpoints

- Desktop: > 968px
- Tablet: 768px - 968px
- Mobile: < 768px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🎨 Fonts

The website uses Google Fonts:
- **Cormorant Garamond**: Headings and titles
- **Lato**: Body text

## 📝 License

This project is proprietary and confidential.

## 🤝 Support

For support or questions, contact:
- Email: [email protected]
- Phone: +91 98765 43210

## 🙏 Acknowledgments

- Design inspired by [outaloud.com](http://www.outaloud.com)
- Built with React.js
- Icons from React Icons library

---

**Vriddhi Psychological Services**  
*Teaching • Training • Therapy*  
Chennai, Tamil Nadu, India

"As above, so below — interconnected in healing"


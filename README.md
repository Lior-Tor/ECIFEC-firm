# Cabinet ECIFEC - Professional Accounting Firm Website

A modern, professional showcase website for Cabinet ECIFEC, an accounting firm based in Sarcelles, France, specializing in construction (BTP), liberal professions, and restaurant sectors.

## Features

### Core Functionality
- **Comprehensive Service Presentation** - Detailed information about accounting, tax, social, legal, and advisory services
- **Contact & Lead Generation** - Multi-purpose contact form with quote requests and appointment scheduling
- **Team & Expertise Display** - Showcase of specialized professionals and their areas of expertise
- **Sector Specialization Pages** - Dedicated content for BTP, liberal professions, and restaurant industries
- **Resource Center** - URSSAF tax simulators and FAQ section
- **Legal Compliance** - GDPR-compliant privacy policy and complete legal notices

### Design & UX
- **Professional Visual Hierarchy** - Multiple section divider styles (geometric, minimal, slant)
- **Scroll Progress Indicator** - Fixed left-side progress bar with gradient
- **Enhanced Card Interactions** - Multi-layer shadows with hover effects and gradient accents
- **Gradient Backgrounds** - Hero sections with radial overlays
- **Pattern Backgrounds** - Subtle texture overlays for secondary sections
- **Responsive Design** - Mobile-first approach with optimized layouts across all devices
- **Smooth Animations** - Cubic-bezier transitions and fade-in effects

## Tech Stack

### Framework & Core
- **Next.js 15.5.7** - React framework with App Router (CVE-2025-55182 patched)
- **React 19.2.1** - UI library (security updated)
- **JavaScript (ES6+)** - Modern JavaScript without TypeScript

### UI & Styling
- **Material-UI (MUI) v6** - Component library
  - `@mui/material` - UI components
  - `@mui/icons-material` - Integrated icon library
  - `@emotion/react` & `@emotion/styled` - CSS-in-JS dependencies
- **Custom Theme** - Brand colors and typography
- **CSS-in-JS** - Styling with sx prop and emotion
- **Custom Components** - WaveDivider, ScrollProgress, enhanced cards
- **WebP Images** - All images optimized in WebP format with lazy loading

### Forms & Validation
- **React Hook Form 7.68.0** - Form state management
- **Zod 3.23.8** - Schema validation
- **@emailjs/nodejs 5.0.2** - Server-side email service (secure API)
- **isomorphic-dompurify 2.33.0** - XSS sanitization

### Security
- **CSRF Protection** - httpOnly cookies with token validation
- **Content Security Policy (CSP)** - Strict security headers
- **Server-Side API** - EmailJS credentials never exposed to client
- **Rate Limiting** - Client-side (1 req/min) and server-side IP tracking
- **Input Sanitization** - DOMPurify + Zod validation

### Analytics & Monitoring
- **@vercel/analytics 1.6.1** - User analytics
- **@vercel/speed-insights 1.3.1** - Performance monitoring

### Development & Deployment
- **Vercel** - Hosting and continuous deployment
- **ESLint** - Code linting
- **Git** - Version control with .gitattributes for line endings

## Project Structure

```
ECIFEC/
├── app/                              # Next.js App Router pages
│   ├── layout.js                     # Root layout (Header, Footer, Analytics, Speed Insights)
│   ├── page.js                       # Home page
│   ├── api/
│   │   ├── contact/route.js          # Secure server-side email API (CSRF protected)
│   │   └── README.md                 # API documentation
│   ├── services/page.js              # Detailed services with accordion
│   ├── pourquoi-nous-choisir/page.js # Why choose us page
│   ├── equipe/page.js                # Team presentation
│   ├── secteurs/page.js              # Sector specializations
│   ├── contact/page.js               # Contact form with map
│   ├── faq/page.js                   # Frequently asked questions
│   ├── ressources/                   # Resources section
│   │   ├── page.js                   # Resources hub
│   │   ├── calendrier/page.js        # Tax calendar
│   │   └── simulateurs/page.js       # URSSAF simulators
│   ├── mentions-legales/page.js      # Legal notices
│   ├── politique-confidentialite/page.js # Privacy policy
│   ├── error.js                      # Error boundary
│   ├── not-found.js                  # 404 page
│   ├── robots.js                     # Dynamic robots.txt
│   └── sitemap.js                    # Dynamic sitemap
├── components/
│   ├── layout/
│   │   ├── Header.jsx                # Main navigation
│   │   └── Footer.jsx                # Footer with links
│   ├── home/
│   │   ├── Hero.jsx                  # Hero section
│   │   ├── StatsSection.jsx          # Key statistics
│   │   ├── OurProcess.jsx            # Process explanation
│   │   ├── ServicesPreview.jsx       # Services preview cards
│   │   ├── WhyChooseUsPreview.jsx    # Why choose us preview
│   │   ├── SectorsPreview.jsx        # Sectors preview
│   │   └── Certifications.jsx        # Certifications display
│   ├── services/
│   │   ├── OurMethodology.jsx        # Methodology explanation
│   │   ├── DigitalTools.jsx          # Digital tools showcase
│   │   ├── FirstYearTimeline.jsx     # First year timeline
│   │   └── ServicesFAQ.jsx           # Services FAQ
│   ├── contact/
│   │   ├── ContactForm.jsx           # Contact form with validation
│   │   └── ContactInfo.jsx           # Contact information
│   └── shared/
│       ├── CTASection.jsx            # Reusable call-to-action
│       ├── SectionTitle.jsx          # Standardized section titles
│       ├── FadeInSection.jsx         # Fade-in animation wrapper
│       ├── WaveDivider.jsx           # Section dividers (4 variants)
│       └── ScrollProgress.jsx        # Scroll progress indicator
├── lib/
│   ├── theme/
│   │   ├── index.js                  # MUI theme configuration
│   │   └── sectionStyles.js          # Reusable style patterns
│   ├── data/
│   │   ├── services.js               # Services data
│   │   ├── secteurs.js               # Sectors data
│   │   ├── faq.js                    # FAQ data
│   │   ├── team.js                   # Team data
│   │   └── navigation.js             # Navigation menu data
│   └── metadata.js                   # SEO metadata helpers
├── styles/
│   └── globals.css                   # Global CSS styles
├── public/
│   ├── images/                       # WebP optimized images and logos
│   └── favicon.ico                   # Favicon
├── middleware.js                     # CSRF token generation middleware
├── package.json
├── next.config.js                    # Next.js configuration (CSP headers)
├── jsconfig.json                     # JavaScript configuration
├── .gitattributes                    # Git line ending configuration
├── .env.example                      # Environment variables template
└── README.md                         # This file
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ECIFEC
```

2. Install dependencies:
```bash
npm install
```

3. Create environment variables file:
```bash
# Create .env.local file with (see .env.example):
NEXT_PUBLIC_SITE_URL=https://ecifec.com

# EmailJS - Server-side only (DO NOT use NEXT_PUBLIC_ prefix)
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_PRIVATE_KEY=your_private_key
EMAILJS_AUTORESPONSE_TEMPLATE_ID=your_autoresponse_template_id
```

**Important:** EmailJS credentials are server-side only for security. Never expose them with `NEXT_PUBLIC_` prefix.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality

## Security Features

### CSRF Protection
- Middleware generates unique CSRF tokens stored in secure cookies
- All POST requests to `/api/contact` require valid CSRF token in `X-CSRF-Token` header
- Token validation prevents Cross-Site Request Forgery attacks
- Cookies use SameSite=Strict and Secure flags in production

### Content Security Policy (CSP)
Strict CSP headers configured in [next.config.js](next.config.js):
- Restricts script sources to self, EmailJS CDN, and Vercel Analytics
- Blocks inline scripts except with nonce or marked as safe
- Prevents XSS attacks and code injection

### Server-Side Email API
- EmailJS credentials stored server-side only (never exposed to client)
- Secure API endpoint at `/api/contact` with validation
- Rate limiting: 1 request per minute per IP
- Input sanitization with DOMPurify and Zod schema validation

### Data Protection
- GDPR-compliant contact form with explicit consent
- Privacy policy page
- No third-party tracking except Vercel Analytics
- User IP logged for security purposes only

## Key Components

### WaveDivider
Professional section dividers with 4 variants:
- **geometric** - Diagonal gold lines for precise, professional transitions
- **minimal** - Simple 2px gradient line
- **slant** - Subtle angular transitions with decorative lines
- **wave** - Refined wave pattern (default)

Usage:
```jsx
<WaveDivider variant="geometric" flip color="#f5f5f5" opacity={1} />
```

### ScrollProgress
Fixed left-side scroll progress indicator with gradient (6px width).

### SectionTitle
Standardized section titles with optional accent bar, subtitle, and description.

Usage:
```jsx
<SectionTitle
  subtitle="Our Services"
  title="Complete Support at Every Stage"
  description="From creation to growth..."
  light={false}
  showAccent={true}
/>
```

### Enhanced Cards
Cards with multi-layer shadows, hover effects, and gradient top bar reveal on hover.

## Design System

### Color Palette
- **Primary:** `#043033` - Dark green (main brand color)
- **Secondary:** `#C7B376` - Gold/beige (accent color)
- **Background:** `#FFFFFF` - White
- **Background Paper:** `#F5F5F5` - Light gray for alternating sections
- **Text Primary:** `#212121` - Near black
- **Text Secondary:** `#757575` - Gray

### Typography
- **Font Family:** Roboto (MUI default)
- **Responsive Sizing:** Mobile-first with MUI breakpoints
- **Hierarchy:** Clear h1-h6 structure

### Spacing
- **Header Sections:** `py: { xs: 6, md: 8 }`
- **Content Sections:** `py: { xs: 6, md: 10 }`
- **Section Margins:** `mb: 6` (standard), `mb: 4` (compact)

### Reusable Styles
Located in [lib/theme/sectionStyles.js](lib/theme/sectionStyles.js):
- `heroGradient` - Hero section gradient with radial overlay
- `patternBg` - Subtle pattern background
- `enhancedCard` - Professional card styling with hover effects
- `glassmorphism` - Glass effect for special elements

## Deployment

### Vercel (Recommended)

1. Push code to GitHub repository
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SITE_URL=https://ecifec.com`
   - `EMAILJS_SERVICE_ID=your_service_id`
   - `EMAILJS_TEMPLATE_ID=your_template_id`
   - `EMAILJS_PUBLIC_KEY=your_public_key`
   - `EMAILJS_PRIVATE_KEY=your_private_key`
   - `EMAILJS_AUTORESPONSE_TEMPLATE_ID=your_autoresponse_template_id`
4. Deploy automatically on every push to main branch

### Custom Domain
- Custom domain: **ecifec.com**
- Configured in Vercel settings
- Automatic HTTPS with Let's Encrypt

### Environment Variables
See [.env.example](.env.example) for complete list and descriptions.
For API documentation, see [app/api/README.md](app/api/README.md).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Contributing

This is a private project developed for Cabinet ECIFEC. For any inquiries, please contact the client or development team.

## License

Proprietary - All rights reserved to Cabinet ECIFEC (client/owner)

## Contact

**Cabinet ECIFEC**
Sarcelles, France
Website: [https://ecifec.com](https://ecifec.com)

---

## Security Updates

- **2024-12** - Patched CVE-2025-55182 (React Server Components vulnerability)
- **2024-12** - Implemented CSRF protection and CSP headers
- **2024-12** - Migrated EmailJS to secure server-side API
- **2024-12** - Added XSS sanitization with DOMPurify

Built with Next.js 15 and Material-UI v6

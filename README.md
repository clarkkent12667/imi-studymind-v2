# Study Mind Work Experience Landing Page

A pixel-perfect recreation of the Study Mind Work Experience landing page built with Next.js 16+, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 **Modern Design System** - Custom color palette, typography, and spacing
- 📱 **Fully Responsive** - Mobile-first approach with breakpoints for all devices
- ✨ **Smooth Animations** - Framer Motion animations throughout
- ♿ **Accessible** - WCAG AA compliant with proper ARIA labels
- 🚀 **Performance Optimized** - Fast page loads with optimized assets
- 🎯 **SEO Ready** - Complete meta tags and semantic HTML

## Tech Stack

- **Next.js 16+** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Shadcn/ui** - UI component patterns

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── HeroSection.tsx     # Hero section
│   ├── WhyChooseSection.tsx # Why choose section
│   ├── OurCoursesSection.tsx # Courses grid
│   ├── ProgrammeCard.tsx   # Individual programme card
│   ├── PerfectForAllSection.tsx
│   ├── WhereStudentsStudySection.tsx
│   ├── WhyStudentsLoveUsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── HearFromStudentsSection.tsx
│   ├── PricingSection.tsx
│   ├── FAQSection.tsx
│   ├── FinalCTASection.tsx
│   ├── Footer.tsx
│   └── StatsCounter.tsx    # Animated counter component
├── lib/
│   └── utils.ts            # Utility functions
└── public/                 # Static assets
```

## Design System

### Colors
- Primary Purple: `#6B46C1`
- Secondary Purple: `#8B5CF6`
- Background Cream: `#FFF8F0`
- Background White: `#FFFFFF`
- Text Dark: `#1F2937`
- Text Gray: `#6B7280`
- Accent Orange: `#F97316`

### Typography
- Font Family: Inter (system fallback)
- Hero Heading: 48-64px, bold
- Section Headings: 36-48px, bold
- Card Titles: 20-24px, semibold
- Body Text: 16-18px, regular

## Components

### Navigation
- Sticky top navigation
- Desktop dropdown menus
- Mobile hamburger menu
- Download brochure button

### Hero Section
- Gradient background
- Main CTA button
- Trustpilot badge
- Student photo grid

### Programme Cards
- 18 different programmes
- Filter by In-person/Virtual
- Load more functionality
- Hover animations

### Testimonials
- Auto-playing carousel
- Manual navigation
- Pause on hover
- Dot indicators

### Pricing
- Three pricing tiers
- Popular badge
- Feature lists
- CTA buttons

### FAQ
- Accordion style
- Smooth expand/collapse
- Single open at a time

## Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 641px - 1024px
- **Desktop**: > 1025px

## Performance

- Image lazy loading
- Code splitting
- Optimized bundle size
- Fast page loads (<2s target)

## Accessibility

- ARIA labels on interactive elements
- Keyboard navigation support
- Alt text for images
- WCAG AA color contrast
- Focus indicators
- Screen reader friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Study Mind.

## Contact

For questions or support, please contact Study Mind.





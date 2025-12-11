# Quick Start Guide

## Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Overview

This is a complete Next.js 16+ application with:
- ✅ 13 fully functional sections
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Smooth animations with Framer Motion
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Accessibility features
- ✅ SEO optimization

## Key Features Implemented

### Navigation
- Sticky navbar with dropdowns
- Mobile hamburger menu
- Download brochure button
- UK Government Partner badge

### Hero Section
- Gradient background
- Animated image grid
- CTA button with hover effects
- Trustpilot rating display

### Programme Cards
- 18 different programmes
- In-person/Virtual filter toggle
- Load more functionality
- Hover animations

### Interactive Elements
- Testimonial carousel (auto-play with pause)
- Video gallery with modal
- FAQ accordion
- Animated stats counter
- Pricing cards with popular badge

### All Sections
1. Navigation Bar
2. Hero Section
3. Why Choose Study Mind
4. Our Courses
5. Perfect for All Students
6. Where Students Study
7. Why Students Love Us
8. Testimonials
9. Hear from Students
10. Pricing
11. FAQ
12. Final CTA
13. Footer

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme.

### Content
All content is in the component files. Edit the respective component to update text, images, or data.

### Images
Currently using Unsplash placeholder images. Replace with your own images by updating the `src` attributes in Image components.

## Build for Production

```bash
npm run build
npm start
```

## Notes

- Images are currently using Unsplash placeholders - replace with actual images
- Video modal is a placeholder - integrate with your video player
- Forms need backend integration
- Analytics tracking can be added in `app/layout.tsx`





# Customization Guide

This guide will help you customize the Study Mind landing page to match your specific requirements.

## 🎨 Updating Brand Colors

### Method 1: Update Tailwind Config

Edit `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#1E3A8A', // Change this to your primary color
    50: '#EFF6FF',
    // ... update all shades
  },
  secondary: {
    DEFAULT: '#F59E0B', // Change this to your accent color
    // ... update all shades
  },
}
```

### Method 2: Using Study Mind's Brand Colors

Visit the Canva brand pack: https://www.canva.com/design/DAGylMRsFUA/n2Q0ygC5SvLR8uVUHtrX6A/edit

Extract the exact hex codes and update the config file.

## 📝 Updating Content

### Hero Section

File: `components/sections/Hero.tsx`

```typescript
// Change main headline
<h1>Transform Your Future at UCL London</h1>

// Change subheadline
<p>Elite Summer Career Camps for Ambitious Students | Ages 12-18</p>

// Update trust badges
<span>UCL Hosted</span>
<span>50+ Nations</span>
<span>99% Recommended</span>
```

### Benefits Section

File: `components/sections/Benefits.tsx`

Update the `benefits` array:

```typescript
const benefits = [
  {
    icon: Briefcase,
    title: 'Your Title',
    description: 'Your description',
  },
  // Add more...
]
```

### Career Pathways

File: `components/sections/CareerPathways.tsx`

Add or modify career options:

```typescript
const pathways = [
  {
    icon: Stethoscope,
    title: 'Medicine',
    description: 'Your custom description',
    gradient: 'from-red-500 to-pink-500',
  },
  // Add more pathways...
]
```

### Testimonials

File: `components/sections/Testimonials.tsx`

Add real student testimonials:

```typescript
const testimonials = [
  {
    name: 'Student Name',
    age: 17,
    camp: 'Camp Name',
    quote: 'Their testimonial...',
    image: '👩‍🎓', // Can be emoji or image URL
    rating: 5,
  },
]
```

## 🖼️ Adding Images

### Step 1: Add Images to Public Folder

Place your images in the `public` folder:

```
public/
├── images/
│   ├── hero-bg.jpg
│   ├── ucl-campus.jpg
│   ├── student-1.jpg
│   └── ...
```

### Step 2: Use Next.js Image Component

Replace placeholders with real images:

```typescript
import Image from 'next/image'

<Image
  src="/images/hero-bg.jpg"
  alt="UCL Campus"
  width={1920}
  height={1080}
  priority
/>
```

### For Background Images

```typescript
<div 
  className="bg-cover bg-center"
  style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
>
  {/* Content */}
</div>
```

## 🎥 Adding the Video

File: `components/sections/Video.tsx`

### For YouTube Videos

```typescript
<iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/VIDEO_ID"
  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
/>
```

### For Google Drive Videos

1. Get the video file ID from the Google Drive link
2. Use the embed URL format:

```typescript
<iframe
  src="https://drive.google.com/file/d/FILE_ID/preview"
  className="w-full h-full"
  allow="autoplay"
/>
```

## 🔗 Updating Links

### Update Application Link

Search for `https://studymind.co.uk/work-experience/` and replace with your actual application URL.

Files to update:
- `components/sections/Header.tsx`
- `components/sections/Hero.tsx`
- `components/sections/CareerPathways.tsx`
- `components/sections/SpecialOfferBanner.tsx`
- `components/sections/FinalCTA.tsx`
- `components/sections/Footer.tsx`

### Update Social Media Links

File: `components/sections/Footer.tsx`

```typescript
<a href="https://facebook.com/yourpage">
  <Facebook className="w-5 h-5" />
</a>
```

## 📊 Updating Statistics

File: `components/sections/Stats.tsx`

```typescript
const stats = [
  { value: 50, suffix: '+', label: 'Nations Represented' },
  { value: 99, suffix: '%', label: 'Recommendation Rate' },
  { value: 200, suffix: '+', label: 'Partner Schools' },
  { value: 20, suffix: '+', label: 'Career Pathways' },
]
```

## 💰 Updating Pricing/Offers

### Special Offer Banner

File: `components/sections/SpecialOfferBanner.tsx`

```typescript
<p>Save £120</p>
<span>IMPROVEME120</span>
```

### Hero Section Offer

File: `components/sections/Hero.tsx`

```typescript
<Button>Apply Now (Save £120)</Button>
```

## 🏢 Updating Partner Logos

File: `components/sections/TrustBar.tsx`

```typescript
const partners = [
  'UCL',
  'EY',
  'Lloyds Banking Group',
  // Add your partners...
]
```

For image logos instead of text:

```typescript
<Image src="/logos/partner-name.png" alt="Partner" width={120} height={40} />
```

## 📧 Updating Contact Information

File: `components/sections/Footer.tsx`

```typescript
<span>info@studymind.co.uk</span>
<span>+44 20 1234 5678</span>
<span>UCL Ramsay Hall, London, UK</span>
```

## 🎭 Customizing Animations

### Adjust Animation Speed

In any component using Framer Motion:

```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }} // Change duration
>
```

### Disable Animations

Set `transition={{ duration: 0 }}` or remove motion components.

## 📱 Mobile Responsiveness

### Adjust Breakpoints

The site uses Tailwind's default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px

Example:

```typescript
className="text-base md:text-lg lg:text-xl"
```

## 🔍 SEO Customization

File: `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Custom Title',
  description: 'Your custom description',
  keywords: 'your, keywords, here',
  openGraph: {
    title: 'Your OG Title',
    description: 'Your OG Description',
    images: ['/og-image.jpg'],
  },
}
```

## 🍪 Cookie Consent Customization

File: `components/CookieConsent.tsx`

Update the text and styling to match your privacy policy.

## 🎯 Call-to-Action Buttons

### Primary CTA Style

File: `components/ui/button.tsx`

```typescript
variant === 'default': 'bg-primary-700 text-white hover:bg-primary-800'
```

### Change Button Text

Search for button text like "Apply Now" and update throughout the site.

## 📋 Form Customization

File: `components/sections/FinalCTA.tsx`

Add/remove form fields:

```typescript
<input
  type="text"
  placeholder="Your New Field"
  className="w-full px-4 py-3 rounded-lg..."
/>
```

## 🌐 Adding Multiple Languages

To add language support:

1. Install `next-intl` or similar
2. Create translation files
3. Wrap content with translation functions

## 🚀 Performance Tips

### Optimize Images
- Use WebP format
- Compress images before uploading
- Use appropriate sizes for different devices

### Lazy Load Components

```typescript
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
})
```

## 📦 Adding New Sections

1. Create new file in `components/sections/`
2. Copy structure from existing section
3. Import in `app/page.tsx`
4. Add to the page flow

Example:

```typescript
// components/sections/NewSection.tsx
export default function NewSection() {
  return (
    <section className="py-20">
      {/* Your content */}
    </section>
  )
}

// app/page.tsx
import NewSection from '@/components/sections/NewSection'

<NewSection />
```

## 🎨 Typography Customization

### Change Fonts

1. Import font in `app/layout.tsx`:

```typescript
import { Poppins } from 'next/font/google'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700']
})
```

2. Apply to body:

```typescript
<body className={poppins.className}>
```

## 💡 Tips

1. **Test on Mobile**: Always test changes on mobile devices
2. **Keep Backups**: Backup files before major changes
3. **Use Version Control**: Commit changes regularly with Git
4. **Check Performance**: Use Lighthouse to check performance scores
5. **Browser Testing**: Test on multiple browsers

## 🆘 Need Help?

- Check component comments for guidance
- Refer to Tailwind CSS documentation for styling
- Use browser DevTools to inspect elements
- Check console for error messages

Happy customizing! 🎨


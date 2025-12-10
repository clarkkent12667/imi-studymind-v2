# Installation & Setup Guide

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** version 18.0 or higher
- **npm** (comes with Node.js) or **yarn**
- A modern web browser
- A code editor (VS Code recommended)

## Step-by-Step Installation

### 1. Navigate to Project Directory

```bash
cd "studymind x imi"
```

### 2. Install Dependencies

Run one of the following commands to install all required packages:

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (icons)
- And all other dependencies

### 3. Start Development Server

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

### 4. Open in Browser

Once the server starts, open your browser and navigate to:

```
http://localhost:3000
```

You should see the Study Mind landing page!

## Building for Production

### 1. Create Production Build

```bash
npm run build
```

This command:
- Optimizes all components
- Minifies CSS and JavaScript
- Generates static pages where possible
- Optimizes images

### 2. Start Production Server

```bash
npm start
```

The production server will run on `http://localhost:3000`

## Project Structure

```
studymind-x-imi/
├── app/                      # Next.js App Router
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Main page
├── components/
│   ├── sections/            # Page sections
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Benefits.tsx
│   │   └── ...
│   ├── ui/                  # UI components
│   │   └── button.tsx
│   └── CookieConsent.tsx
├── lib/
│   └── utils.ts             # Utility functions
├── public/                  # Static assets
├── package.json             # Dependencies
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## Common Issues & Solutions

### Issue: Port 3000 already in use

**Solution**: Either stop the other process or use a different port:
```bash
npm run dev -- -p 3001
```

### Issue: Module not found errors

**Solution**: Delete node_modules and reinstall:
```bash
rm -rf node_modules
npm install
```

### Issue: TypeScript errors

**Solution**: Ensure TypeScript is properly installed:
```bash
npm install -D typescript @types/react @types/node
```

## Development Tips

### Hot Reload
The development server supports hot module replacement. Changes to files will automatically refresh in the browser.

### Code Formatting
Install Prettier extension in VS Code for automatic code formatting.

### Debugging
Use Chrome DevTools or React Developer Tools for debugging.

## Environment Variables (Optional)

Create a `.env.local` file in the root directory for any environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Deployment Options

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- Digital Ocean
- Traditional hosting with Node.js support

## Performance Optimization

The landing page is already optimized with:
- ✅ Next.js Image optimization
- ✅ Lazy loading for below-fold content
- ✅ Code splitting
- ✅ Minified CSS/JS in production
- ✅ Optimized fonts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Getting Help

If you encounter any issues:
1. Check the console for error messages
2. Ensure all dependencies are installed
3. Try clearing the `.next` cache: `rm -rf .next`
4. Restart the development server

## Next Steps

1. **Customize Content**: Edit section components in `components/sections/`
2. **Update Colors**: Modify `tailwind.config.ts` for brand colors
3. **Add Images**: Place images in `public/` folder
4. **Update Links**: Change URLs in components to match your requirements
5. **SEO**: Update metadata in `app/layout.tsx`

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

Happy coding! 🚀


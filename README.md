<div align="center">

# 🌟 Young Changemakers Bootcamp (YCB) Website

<img src="https://img.shields.io/badge/Next.js-15.5.0-black?style=for-the-badge&logo=next.js&logoColor=white" />
<img src="https://img.shields.io/badge/React-19.0.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
<img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
<img src="https://img.shields.io/badge/TailwindCSS-4.1.12-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/Turbo-Monorepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white" />

*Empowering young minds to become tomorrow's changemakers*

[🌐 Visit Website](https://ycb-website.vercel.app) • [📝 Apply Now](https://ycb-website.vercel.app/apply) • [📚 Learn More](https://ycb-website.vercel.app/about)

</div>

---

## 🚀 About YCB

The **Young Changemakers Bootcamp (YCB)** is a transformative 7-day residential program that empowers young minds (aged 13-18) to become innovative problem-solvers and leaders. Organized by Tale of Humankind at prestigious IIT campuses, YCB has reached over **1000+ students** across **25+ states** in India.

### 🎯 Key Highlights

- **🏛️ Venue**: IIT Delhi Campus (Season 6: Dec 17-23, 2025)
- **🎓 Age Group**: 13-18 years
- **🌍 Reach**: 25+ states across India
- **👥 Alumni Network**: 1000+ young changemakers
- **🏆 Success Rate**: 95+ project completion rate

---

## ✨ Features

### 🎨 **Modern Design & UX**
- **Responsive Design**: Optimized for all devices and screen sizes
- **Dark/Light Mode**: Seamless theme switching with next-themes
- **Animations**: Smooth transitions with Framer Motion
- **Interactive Maps**: India & World maps showing YCB's reach
- **Accessibility**: WCAG 2.1 AA compliant interface

### 🛠️ **Technical Excellence**
- **Performance**: Lightning-fast loading with Next.js 15 and Turbopack
- **Type Safety**: Full TypeScript implementation
- **Code Quality**: Enforced with Biome and Ultracite
- **Monorepo**: Turborepo for scalable development
- **SEO Optimized**: Meta tags, structured data, and sitemap

### 📱 **Interactive Components**
- **Dynamic Testimonials**: Auto-rotating feedback carousel
- **Image Galleries**: Past seasons photo galleries
- **Application Portal**: Streamlined application process
- **Newsletter**: Email subscription with validation
- **Alumni Stories**: Featured success stories

---

## 🏗️ Tech Stack

<div align="center">

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js 15, React 19, TypeScript |
| **Styling** | TailwindCSS 4, CSS Modules, Framer Motion |
| **UI Components** | Radix UI, Lucide Icons, Custom Components |
| **Development** | Turbo (Monorepo), PNPM, Biome (Linting) |
| **Deployment** | Vercel, Edge Functions |
| **Performance** | Next.js Image Optimization, Turbopack |

</div>

---

## 📁 Project Structure

```
ycb-website/
├── 📁 apps/
│   └── 📁 web/                         # Main Next.js application
│       ├── 📁 src/
│       │   ├── 📁 app/                 # App Router pages
│       │   │   ├── 📄 layout.tsx       # Root layout
│       │   │   ├── 📄 page.tsx         # Homepage
│       │   │   ├── 📁 about/           # About YCB
│       │   │   ├── 📁 apply/           # Application portal
│       │   │   ├── 📁 contact/         # Contact information
│       │   │   ├── 📁 featured/        # Alumni stories
│       │   │   ├── 📁 network/         # YCB network
│       │   │   ├── 📁 editions/        # Past seasons
│       │   │   └── 📁 ...              # Policy pages
│       │   ├── 📁 components/          # Reusable components
│       │   │   ├── 📁 ui/              # shadcn/ui components
│       │   │   ├── 📄 header.tsx       # Navigation
│       │   │   ├── 📄 footer.tsx       # Footer
│       │   │   ├── 📄 newsletter.tsx   # Email subscription
│       │   │   └── 📄 ...              # Other components
│       │   ├── 📁 assets/              # Images & media
│       │   ├── 📁 fonts/               # Custom fonts (Satoshi, Newsreader)
│       │   ├── 📁 lib/                 # Utility functions
│       │   └── 📄 index.css            # Global styles
│       ├── 📄 components.json          # shadcn/ui config
│       ├── 📄 next.config.ts           # Next.js configuration
│       ├── 📄 postcss.config.mjs       # PostCSS config
│       └── 📄 tsconfig.json            # TypeScript config
├── 📄 package.json                     # Workspace dependencies
├── 📄 turbo.json                       # Turborepo config
├── 📄 biome.json                       # Code quality config
├── 📄 vercel.json                      # Deployment config
├── 📄 pnpm-workspace.yaml             # PNPM workspace
└── 📄 README.md                        # This file
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **PNPM** 8+ (recommended package manager)
- **Git** for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/tejasj228/IP_TOHK.git
cd ycb-website

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### 🌐 Available Scripts

```bash
# Development
pnpm dev              # Start dev server (all apps)
pnpm dev:web          # Start web app only (port 3001)

# Building
pnpm build            # Build all apps for production
pnpm check-types      # TypeScript type checking

# Code Quality
pnpm check            # Format & lint with Biome
npx ultracite check   # Advanced code quality checks
npx ultracite fix     # Auto-fix code issues

# Testing & Deployment
pnpm start            # Start production server
```

---

## 🎨 Design System

### 🎨 **Color Palette**
```css
/* Primary Colors */
--primary: #1a56db;      /* YCB Blue */
--secondary: #f59e0b;    /* Accent Orange */
--background: #ffffff;   /* Light background */
--foreground: #1f2937;   /* Dark text */

/* Dark Mode */
--dark-background: #0f172a;
--dark-foreground: #f8fafc;
```

### 📝 **Typography**
- **Headings**: Newsreader (Serif)
- **Body**: Satoshi (Sans-serif)
- **Code**: JetBrains Mono

### 🎭 **Components**
- **shadcn/ui**: Base component library
- **Custom Components**: YCB-specific UI elements
- **Responsive**: Mobile-first design approach

---

## 📊 Key Pages & Features

| Page | Route | Description |
|------|-------|-------------|
| **Homepage** | `/` | Hero section, program overview, testimonials |
| **About YCB** | `/about` | Program details, methodology, past seasons |
| **Apply** | `/apply` | Application form and requirements |
| **Network** | `/network` | Alumni network and speakers |
| **Featured** | `/featured` | Success stories and alumni blogs |
| **Editions** | `/editions` | Photo galleries from past seasons |
| **Contact** | `/contact` | Contact information and support |

### 🔥 **Interactive Features**
- **🎯 Dynamic Maps**: India/World maps showing YCB reach
- **📸 Photo Galleries**: Season-wise image carousels
- **💬 Testimonials**: Auto-rotating feedback slider
- **📧 Newsletter**: Email subscription with validation
- **🌙 Theme Toggle**: Dark/Light mode switching
- **📱 Mobile Menu**: Responsive navigation

---

## 🔧 Configuration

### 📦 **Package Management**
```json
{
  "packageManager": "pnpm@10.14.0",
  "workspaces": ["apps/*", "packages/*"]
}
```

### ⚡ **Turbo Configuration**
```json
{
  "tasks": {
    "build": { "dependsOn": ["^build"] },
    "dev": { "cache": false, "persistent": true },
    "check-types": { "dependsOn": ["^check-types"] }
  }
}
```

### 🎯 **Next.js Features**
- **App Router**: Latest routing system
- **Turbopack**: Ultra-fast bundler
- **Image Optimization**: Automatic WebP conversion
- **Font Optimization**: Google Fonts & local fonts

---

## 🚀 Deployment

### 🌐 **Vercel (Recommended)**
```bash
# Deploy to Vercel
vercel --prod

# Or connect GitHub repository for auto-deployments
```

### 🔧 **Manual Deployment**
```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

### 📋 **Environment Variables**
```env
# Example .env.local
NEXT_PUBLIC_SITE_URL=https://ycb-website.vercel.app
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

---

## 👥 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### 📋 **Development Guidelines**
- Follow TypeScript best practices
- Use Biome for code formatting
- Test responsive design on multiple devices
- Ensure accessibility compliance
- Add proper error handling

---

## 📈 Performance & SEO

### ⚡ **Performance Metrics**
- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for speed
- **Bundle Size**: Minimized with tree-shaking
- **Image Optimization**: WebP format with lazy loading

### 🔍 **SEO Features**
- **Meta Tags**: Dynamic meta descriptions
- **Structured Data**: Schema.org markup
- **Sitemap**: Auto-generated XML sitemap
- **Open Graph**: Social media previews

---

## 📚 Resources

### 🔗 **Useful Links**
- [📖 Next.js Documentation](https://nextjs.org/docs)
- [🎨 TailwindCSS Docs](https://tailwindcss.com/docs)
- [🧩 shadcn/ui Components](https://ui.shadcn.com)
- [⚡ Turbo Documentation](https://turbo.build/repo/docs)
- [🌐 YCB Official Website](https://ycb-website.vercel.app)

### 📞 **Support & Contact**
- **Email**: ycbootcamp@taleofhumankind.org
- **Website**: [taleofhumankind.org](https://taleofhumankind.org)
- **GitHub Issues**: [Report bugs or request features](https://github.com/tejasj228/IP_TOHK/issues)

---

## 📄 License

This project is developed for the Young Changemakers Bootcamp by Tale of Humankind. All rights reserved.

---

<div align="center">

**🌟 Star this repo if you found it helpful! 🌟**

*Made with ❤️ for young changemakers everywhere*

**[🚀 Join YCB Season 6](https://ycb-website.vercel.app/apply) | [📚 Learn More](https://ycb-website.vercel.app/about) | [🤝 Get Involved](https://ycb-website.vercel.app/contact)**

</div>

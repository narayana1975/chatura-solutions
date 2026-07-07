# Project Structure - Chatura Solutions

## Directory Overview

```
chatura-solutions/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with header/footer
│   ├── page.tsx                 # Homepage
│   ├── blogs/                   # Blog system
│   │   ├── page.tsx            # Blog listing with search & pagination
│   │   ├── layout.tsx          # Blog layout
│   │   └── [slug]/             # Dynamic blog post routes
│   │       ├── page.tsx        # Individual blog post
│   │       └── layout.tsx      # Blog detail layout
│   ├── courses/                 # Courses page
│   ├── mock-interview/          # Mock interview service
│   ├── educational-consultation/ # Consultation service
│   ├── contact/                 # Contact page
│   ├── faq/                     # FAQ page
│   ├── privacy-policy/          # Privacy policy page
│   └── api/                     # API routes
│       └── blogs/               # Blog API endpoints
│           ├── route.ts        # Get/search blogs
│           └── update/         # Blog update endpoint
│
├── components/                   # Reusable UI Components
│   ├── header.tsx              # Navigation header
│   ├── footer.tsx              # Footer with links
│   ├── banner.tsx              # Hero banner
│   ├── gallery*.tsx            # Gallery components
│   ├── stacking-card.tsx       # Card component
│   └── bounce-card-features.tsx # Feature cards
│
├── lib/                          # Utility Functions
│   ├── utils.ts                # Helper functions (formatDate, etc)
│   ├── blog-loader.ts          # Blog loading utilities
│   ├── blog-utils.ts           # Blog-specific utilities
│   └── constants.ts            # App constants
│
├── public/                       # Static Assets
│   ├── images/                 # Image assets
│   │   ├── services/          # Service images
│   │   └── favicon.ico
│   ├── data/                   # JSON data files
│   │   ├── courses.json       # Courses data
│   │   ├── blogs/             # Blog post JSON files
│   │   │   ├── choosing-right-university.json
│   │   │   ├── top-10-interview-questions.json
│   │   │   └── ... (other blogs)
│   │   └── banner.json        # Banner configuration
│   ├── sitemap.xml            # XML sitemap for SEO
│   └── robots.txt             # Robots.txt for crawlers
│
├── docs/                        # Documentation (this folder)
│   ├── README.md              # Documentation index
│   ├── GETTING_STARTED.md    # Setup guide
│   ├── PROJECT_STRUCTURE.md  # This file
│   ├── FEATURES.md           # Feature list
│   ├── BLOG_SYSTEM.md        # Blog documentation
│   ├── COURSES_SYSTEM.md     # Courses documentation
│   ├── FORMS_AND_CONTACT.md  # Form handling
│   ├── SEO_AND_ANALYTICS.md  # SEO setup
│   ├── STYLING_AND_THEME.md  # Design system
│   ├── DEPLOYMENT.md         # Deployment guide
│   └── TROUBLESHOOTING.md    # Common issues
│
├── next.config.js             # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
├── package.json               # Dependencies
├── .env.local                 # Local environment variables (not committed)
├── .gitignore                 # Git ignore rules
└── README.md                  # Project README (root)
```

## Key Files

### Configuration
- `next.config.js` - Next.js settings and build configuration
- `tailwind.config.js` - Tailwind CSS theme configuration
- `tsconfig.json` - TypeScript compiler options
- `package.json` - Project dependencies and scripts

### Pages & Routes
- `app/page.tsx` - Homepage with hero, services, FAQs, testimonials
- `app/blogs/page.tsx` - Blog listing with search and pagination
- `app/courses/page.tsx` - Courses listing and filtering
- `app/api/blogs/route.ts` - Blog API with dynamic loading

### Data Files
- `public/data/courses.json` - All courses data
- `public/data/blogs/*.json` - Individual blog posts
- `public/data/banner.json` - Homepage banner configuration

## Component Hierarchy

```
RootLayout
├── Header
├── [Pages]
│   ├── HomePage
│   │   ├── Banner (with countdown)
│   │   ├── Services Section
│   │   ├── Galleries
│   │   ├── FAQ Section
│   │   └── Testimonials
│   ├── BlogsPage
│   │   ├── SearchBar
│   │   └── BlogCard (multiple)
│   ├── BlogDetailPage
│   │   ├── BlogImage
│   │   ├── BlogContent
│   │   └── SuggestedBlogs
│   ├── CoursesPage
│   │   └── CourseCard (multiple)
│   └── [Other Pages]
└── Footer
```

## Data Flow

### Blog System
1. User navigates to `/blogs`
2. Page fetches data via `/api/blogs` 
3. Blog loader reads JSON files from `/public/data/blogs/`
4. Results displayed with search, filter, and pagination
5. Clicking blog navigates to `/blogs/[slug]`
6. Individual blog fetches via API with slug parameter

### Contact Forms
1. User submits form on `/contact` or `/educational-consultation`
2. Form data sent to API endpoint
3. Data processed and stored/sent as needed

## Environment Variables

Located in `.env.local`:
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- Custom API keys and configuration as needed

## Styling System

- **Colors**: Defined in Tailwind theme
- **Typography**: Fonts via Next.js font imports
- **Layout**: Flexbox and CSS Grid with Tailwind
- **Components**: shadcn/ui components with customization

## Building & Deployment

The project uses:
- **Build**: `npm run build` - Creates optimized production build
- **Output**: Static and server files for deployment
- **Hosting**: Optimized for Vercel deployment

## Adding New Features

When adding new features:
1. Create components in `/components`
2. Add pages in `/app` following Next.js structure
3. Create utility functions in `/lib`
4. Add documentation in `/docs`
5. Update this structure guide if needed

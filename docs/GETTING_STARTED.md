# Getting Started - Chatura Solutions

This guide will help you set up and run the Chatura Solutions website locally.

## Prerequisites

Before you begin, ensure you have:
- Node.js version 18 or higher
- npm, yarn, pnpm, or bun package manager
- Git installed on your machine
- A code editor (VS Code recommended)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/narayana1975/chatura-solutions.git
cd chatura-solutions
```

### 2. Install Dependencies

Using npm:
```bash
npm install
```

Using pnpm:
```bash
pnpm install
```

Using yarn:
```bash
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the project root with the following variables:

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-HKD24SXDR4

# Other environment variables as needed
```

### 4. Run Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Project Commands

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

### Blog Management

Update all blogs and regenerate sitemap:
```bash
curl http://localhost:3000/api/blogs/update
```

## File Structure

Key directories:
- `/app` - Next.js app router pages and routes
- `/components` - Reusable React components
- `/lib` - Utility functions and helpers
- `/public` - Static files (images, data)
- `/public/data/blogs` - Blog content in JSON format
- `/public/data/courses.json` - Courses data

## First Steps

1. **Explore the Homepage** - Visit `http://localhost:3000`
2. **Check Blogs** - Navigate to `/blogs` to see the blog listing
3. **View Services** - Explore `/courses`, `/mock-interview`, `/educational-consultation`
4. **Check Contact Form** - Visit `/contact` to test the form

## Adding Your First Blog

1. Create a new JSON file in `/public/data/blogs/` with slug as filename:
   ```json
   {
     "id": "your-id",
     "title": "Your Blog Title",
     "slug": "your-blog-slug",
     "excerpt": "Short description",
     "content": "Full blog content",
     "author": "Author Name",
     "date": "2026-01-15",
     "category": "Category",
     "readTime": 5,
     "featuredImage": "image-url-or-null"
   }
   ```

2. Update the sitemap in `/public/sitemap.xml`

3. Blog will automatically appear in the listing

## Next Steps

- Read [Project Structure](./PROJECT_STRUCTURE.md) to understand the codebase
- Check [Features Overview](./FEATURES.md) for all capabilities
- Review [Blog System](./BLOG_SYSTEM.md) for content management
- See [Deployment Guide](./DEPLOYMENT.md) for production setup

## Troubleshooting

- **Port already in use**: Change port with `npm run dev -- -p 3001`
- **Dependencies issues**: Delete `node_modules` and `package-lock.json`, then reinstall
- **Blog not loading**: Check JSON format and file path in `/public/data/blogs/`

For more help, see [Troubleshooting Guide](./TROUBLESHOOTING.md)

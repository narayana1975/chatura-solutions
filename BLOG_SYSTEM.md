# Blog System Documentation

## Overview

The Chatura Solutions blog system provides a flexible way to manage blog posts with automatic indexing, search capabilities, pagination, and sitemap generation.

## File Structure

```
public/
  data/
    blogs/
      choosing-right-university.json
      essential-skills-2024.json
      star-method-behavioral-interviews.json
      top-10-interview-questions.json
  sitemap.xml

app/
  blogs/
    page.tsx                 # Blog listing page with search & pagination
    layout.tsx              # Blog layout with SEO metadata
    [slug]/
      page.tsx              # Individual blog post page
      layout.tsx            # Blog detail page layout
  api/
    blogs/
      update/
        route.ts            # API endpoint to trigger blog updates

lib/
  blog-utils.ts            # Utility functions for blog operations
```

## Blog Data Format

Each blog post is stored as a JSON file:

```json
{
  "id": "1",
  "title": "Blog Title",
  "slug": "blog-slug",
  "excerpt": "Short summary of the blog",
  "content": "Full blog content in markdown or plain text",
  "author": "Author Name",
  "date": "2024-01-10",
  "category": "Category Name",
  "readTime": 5,
  "image": "bg-gradient-to-br from-blue-500 to-blue-600",
  "featuredImage": null
}
```

## Core Functions

### `loadAllBlogs()`
Loads all blog posts from the `public/data/blogs` directory, sorted by date (newest first).

**Usage:**
```typescript
import { loadAllBlogs } from '@/lib/blog-utils'

const blogs = await loadAllBlogs()
```

### `loadBlogBySlug(slug)`
Loads a single blog post by its slug.

**Usage:**
```typescript
import { loadBlogBySlug } from '@/lib/blog-utils'

const blog = await loadBlogBySlug('choosing-right-university')
```

### `generateBlogSitemapEntries()`
Generates XML sitemap entries for all blogs.

**Usage:**
```typescript
import { generateBlogSitemapEntries } from '@/lib/blog-utils'

const entries = await generateBlogSitemapEntries()
```

### `validateBlog(blog)`
Validates that a blog post has all required fields.

**Usage:**
```typescript
import { validateBlog } from '@/lib/blog-utils'

if (validateBlog(blogData)) {
  // Blog is valid
}
```

### `getBlogStats()`
Returns statistics about all blogs (count, categories, authors, last updated).

**Usage:**
```typescript
import { getBlogStats } from '@/lib/blog-utils'

const stats = await getBlogStats()
```

## Blog Update API

### Endpoint

**GET/POST** `/api/blogs/update`

### Purpose

Triggers a refresh of all blog entries and returns updated statistics.

### Authorization

Optional token-based authorization via environment variable:
```
BLOG_UPDATE_TOKEN=your-secure-token
```

### Usage Examples

**Without Authorization:**
```bash
curl https://chaturasolutions.com/api/blogs/update
```

**With Authorization:**
```bash
curl -H "Authorization: Bearer your-secure-token" \
  https://chaturasolutions.com/api/blogs/update
```

### Response

```json
{
  "success": true,
  "message": "Blogs updated successfully",
  "stats": {
    "totalBlogs": 4,
    "categories": ["Education", "Career", "Interview Tips"],
    "authors": ["Dr. Michael Chen", "Sarah Johnson", "Emily Rodriguez", "James Wilson"],
    "lastUpdated": "2024-01-15"
  },
  "blogsUpdated": 4
}
```

## Features

### 1. Blog Listing Page (`/blogs`)
- Search functionality to filter blogs by title, excerpt, or category
- Pagination with 5 blogs per page
- Category badges and reading time estimates
- Author and publication date display

### 2. Blog Detail Page (`/blogs/[slug]`)
- Full blog content display
- Author information and publication date
- Reading time estimate
- Related/suggested blogs section (2 recommendations)
- Gradient background support for visual variety

### 3. SEO Support
- Meta tags for each blog page
- Open Graph and Twitter Card metadata
- Proper heading hierarchy
- Image support (gradient backgrounds and featured images)

### 4. Sitemap Integration
- All blog routes included in `public/sitemap.xml`
- Blog listing page prioritized at 0.8
- Individual blog posts at priority 0.6
- Automatic date-based last modified tracking

## Adding New Blog Posts

1. Create a new JSON file in `public/data/blogs/` with the blog slug as filename (e.g., `new-blog-post.json`)

2. Fill in the blog data:
```json
{
  "id": "5",
  "title": "Your Blog Title",
  "slug": "new-blog-post",
  "excerpt": "Your blog excerpt",
  "content": "Your full blog content",
  "author": "Your Name",
  "date": "2024-05-24",
  "category": "Category",
  "readTime": 5,
  "image": "bg-gradient-to-br from-color-500 to-color-600",
  "featuredImage": null
}
```

3. Trigger a blog update:
```bash
curl /api/blogs/update
```

4. Update `public/sitemap.xml` with the new blog entry

## Triggering Blog Updates

### Automatic Updates
The `/api/blogs/update` endpoint can be called from:
- Cron jobs (scheduled updates)
- CI/CD pipelines after content changes
- Admin dashboard actions
- Webhooks from content management systems

### Manual Trigger
```bash
# Without token
curl https://chaturasolutions.com/api/blogs/update

# With token (if BLOG_UPDATE_TOKEN is set)
curl -H "Authorization: Bearer your-token" \
  https://chaturasolutions.com/api/blogs/update
```

## Search and Filtering

The blog listing page supports real-time search filtering across:
- Blog titles
- Blog excerpts
- Blog categories

Search results automatically update with match count.

## Pagination

- 5 blogs displayed per page
- Numbered pagination controls
- Previous/Next navigation buttons
- Automatic reset to page 1 when search query changes

## Performance Considerations

1. **Blog Loading**: Blogs are loaded from JSON files at request time
2. **Caching**: Consider implementing caching for frequently accessed blog lists
3. **Sitemap Updates**: Update `public/sitemap.xml` when adding new blogs
4. **Search Index**: Search is performed client-side; for large blog counts, consider server-side search

## Future Enhancements

- Server-side search indexing for better performance
- Blog commenting system
- Related posts algorithm enhancement
- Blog reading statistics
- Author profiles
- Blog series grouping
- Newsletter subscription integration

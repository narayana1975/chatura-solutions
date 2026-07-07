# Blog System Documentation

Complete guide to managing and working with the Chatura Solutions blog system.

## Overview

The blog system dynamically loads blog posts from JSON files, providing search, filtering, pagination, and SEO capabilities without requiring database configuration.

## Directory Structure

```
public/
  data/
    blogs/
      choosing-right-university.json
      essential-skills-2024.json
      star-method-behavioral-interviews.json
      top-10-interview-questions.json
      (and other blog files)

app/
  blogs/
    page.tsx                    # Blog listing with search & pagination
    layout.tsx                 # Blog layout with SEO
    [slug]/
      page.tsx                # Individual blog post
      layout.tsx             # Blog detail layout
  api/
    blogs/
      route.ts               # API for loading blogs
      update/
        route.ts            # Update blogs endpoint

lib/
  blog-loader.ts             # Blog loading utilities
  blog-utils.ts              # Blog-specific utilities
```

## Blog Data Format

Each blog post must be a JSON file in `/public/data/blogs/` with the filename matching the slug:

```json
{
  "id": "unique-id-1",
  "title": "Blog Title",
  "slug": "blog-slug",
  "excerpt": "Short summary of the blog post",
  "content": "Full blog content with ## headings and - bullets",
  "author": "Author Name",
  "date": "2026-01-15",
  "category": "Category Name",
  "readTime": 5,
  "featuredImage": "https://example.com/image.jpg"
}
```

### Field Descriptions

- **id**: Unique identifier (string)
- **title**: Display title of the blog post
- **slug**: URL-friendly identifier (used in filename and URL)
- **excerpt**: Short summary displayed in listings
- **content**: Full blog content (supports markdown-style formatting)
- **author**: Author name or pseudonym
- **date**: Publication date (YYYY-MM-DD format)
- **category**: Blog category for filtering
- **readTime**: Estimated read time in minutes
- **featuredImage**: URL to featured image (null for placeholder)

## Adding a New Blog

### Step 1: Create JSON File

Create a new file in `/public/data/blogs/` named `your-blog-slug.json`:

```json
{
  "id": "blog-5",
  "title": "How to Prepare for Technical Interviews",
  "slug": "how-to-prepare-technical-interviews",
  "excerpt": "A comprehensive guide to preparing for technical interviews.",
  "content": "## Introduction\nTechnical interviews can be challenging...\n\n## Key Tips\n- Practice coding problems\n- Review data structures\n- Mock interview practice",
  "author": "John Doe",
  "date": "2026-07-01",
  "category": "Interview Preparation",
  "readTime": 8,
  "featuredImage": null
}
```

### Step 2: Update Sitemap

Add entry to `/public/sitemap.xml`:

```xml
<url>
  <loc>https://chaturasolutions.com/blogs/how-to-prepare-technical-interviews</loc>
  <lastmod>2026-07-01</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.6</priority>
</url>
```

### Step 3: Verify

The blog will automatically:
- Appear in the blog listing at `/blogs`
- Be searchable
- Have a dedicated page at `/blogs/your-blog-slug`
- Show in suggested blogs on related articles

## Content Formatting

### Headings

Use markdown-style heading syntax:

```
## Main Section Heading
### Subsection Heading
```

### Lists

Use dash syntax for bullet points:

```
- First item
- Second item
- Third item
```

### Text

Regular paragraphs are separated by blank lines:

```
First paragraph text here.

Second paragraph text here.
```

## Blog API Endpoints

### Get All Blogs

```bash
GET /api/blogs
```

Returns JSON array of all blogs sorted by date (newest first).

### Get Single Blog

```bash
GET /api/blogs?slug=blog-slug
```

Returns single blog object matching the slug.

### Update Blogs

```bash
GET /api/blogs/update
POST /api/blogs/update
```

Triggers blog refresh and regeneration. Useful for batch updates.

## Features

### Search Functionality

- Full-text search across blog titles and excerpts
- Real-time filtering as user types
- Highlights matching results

### Pagination

- 5 blogs per page on listing page
- Previous/Next navigation
- Page indicators

### Suggested Posts

- Shows 3-4 related blogs on detail page
- Based on category matching
- Excludes current blog

### Featured Images

- Supports custom images via URL
- Automatic placeholder if image null
- Lazy loading for performance
- Responsive sizing

## SEO Implementation

### Metadata

Each blog page includes:
- Dynamic title tags
- Meta descriptions from excerpt
- Open Graph tags for social sharing
- Structured data for search engines

### Sitemap

- Automatically included in `/public/sitemap.xml`
- Priority: 0.6 for blog posts
- Change frequency: monthly

### URL Structure

- SEO-friendly URLs using slug
- Consistent format: `/blogs/blog-slug`
- Lower-case, hyphen-separated slugs

## Image Handling

### Adding Featured Images

1. Host image externally or use placeholder
2. Update `featuredImage` field in JSON
3. Image displays on:
   - Blog listing page
   - Blog detail page header
   - Social sharing preview

### Placeholder Images

- Automatic placeholder if `featuredImage` is null
- Generic blog placeholder from Unsplash
- Ensures consistent visual layout

## Management Tasks

### Regular Updates

1. **Add new blog**: Create JSON file in `/public/data/blogs/`
2. **Update existing**: Edit JSON file directly
3. **Delete blog**: Remove JSON file
4. **Update sitemap**: Edit `/public/sitemap.xml`

### Batch Operations

To update all blogs at once:

```bash
curl http://localhost:3000/api/blogs/update
```

This endpoint:
- Loads all blog JSON files
- Validates data structure
- Regenerates statistics
- Returns blog count

## Troubleshooting

### Blog Not Showing

- Verify JSON file is in `/public/data/blogs/`
- Check slug in JSON matches filename (without .json)
- Validate JSON syntax
- Ensure date format is YYYY-MM-DD

### Search Not Working

- Check blog title and excerpt have content
- Verify no console errors in browser
- Clear browser cache
- Try searching different terms

### Image Not Displaying

- Verify image URL is accessible
- Check URL in JSON file is correct
- Image will use placeholder if URL fails
- Use external image hosting service

## Best Practices

1. **Naming**: Use descriptive, SEO-friendly slugs
2. **Dates**: Keep publication dates accurate for sorting
3. **Content**: Write clear, well-structured content
4. **Images**: Use high-quality images for better engagement
5. **Categories**: Use consistent category names
6. **Updates**: Keep content fresh and relevant

## File Examples

For more examples, check existing blog files in `/public/data/blogs/` directory. Each provides a reference for proper formatting and structure.

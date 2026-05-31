# HTML Meta Tags Reference

This document shows the exact meta tags that will be rendered in the HTML head for each page.

---

## Root Layout Meta Tags (All Pages)

```html
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />

<!-- Primary Meta Tags -->
<title>Chatura Solutions | Upskilling Courses, Mock Interviews & Educational Consultation</title>
<meta name="title" content="Chatura Solutions | Upskilling Courses, Mock Interviews & Educational Consultation" />
<meta name="description" content="Expert upskilling courses, mock interviews, and educational consultation services for students and professionals. Get career guidance from industry experts and transform your future." />
<meta name="keywords" content="upskilling courses, mock interviews, educational consultation, career guidance, interview preparation, university selection, professional development" />
<meta name="author" content="Chatura Solutions" />
<meta name="creator" content="Chatura Solutions" />
<meta name="publisher" content="Chatura Solutions" />
<meta name="generator" content="Next.js" />

<!-- Robots & Crawlers -->
<meta name="robots" content="index, follow, nocache" />
<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://chaturasolutions.com" />
<meta property="og:title" content="Chatura Solutions | Upskilling Courses, Mock Interviews & Educational Consultation" />
<meta property="og:description" content="Expert upskilling courses, mock interviews, and educational consultation services for students and professionals seeking career advancement." />
<meta property="og:site_name" content="Chatura Solutions" />
<meta property="og:locale" content="en_US" />
<meta property="og:image" content="/logo.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="Chatura Solutions Logo" />
<meta property="og:image:type" content="image/png" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://chaturasolutions.com" />
<meta name="twitter:title" content="Chatura Solutions | Upskilling Courses, Mock Interviews & Educational Consultation" />
<meta name="twitter:description" content="Expert upskilling courses, mock interviews, and educational consultation services for students and professionals seeking career advancement." />
<meta name="twitter:image" content="/logo.png" />
<meta name="twitter:creator" content="@chaturasolutions" />

<!-- Favicon & Icons -->
<link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
<link rel="icon" href="/icon.svg" type="image/svg+xml" />
<link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
```

---

## Page-Specific Meta Tags

### Home Page (`/`)

**Additional Title:** (Inherits from root)

**Additional Description:** (Inherits from root, OpenGraph customized)

```html
<meta property="og:title" content="Chatura Solutions - Career Transformation Platform" />
<meta property="og:description" content="Transform your career with expert upskilling courses, real mock interviews, and personalized educational consultation. Join 10,000+ successful students." />
<meta name="twitter:title" content="Chatura Solutions" />
<meta name="twitter:description" content="Career transformation through expert courses and guidance" />
```

---

### Courses Page (`/courses`)

```html
<title>Upskilling Courses | Chatura Solutions</title>
<meta name="description" content="Expert-led upskilling courses designed to enhance your professional skills and expertise in your field. Master new technologies and advanced techniques with industry experts." />
<meta name="keywords" content="upskilling courses, technical courses, interview preparation, data structures, career development" />

<meta property="og:title" content="Upskilling Courses | Chatura Solutions" />
<meta property="og:description" content="Transform your skills with expert-led courses from Chatura Solutions" />
<meta name="twitter:title" content="Upskilling Courses | Chatura Solutions" />
<meta name="twitter:description" content="Expert courses for professional development" />
```

---

### Contact Page (`/contact`)

```html
<title>Contact Us | Chatura Solutions</title>
<meta name="description" content="Get in touch with Chatura Solutions. Contact our team for inquiries about upskilling courses, mock interviews, and educational consultation services." />
<meta name="keywords" content="contact Chatura Solutions, get in touch, customer support, inquiry form" />

<meta property="og:title" content="Contact Us | Chatura Solutions" />
<meta property="og:description" content="Reach out to our team for career guidance and consultation" />
<meta name="twitter:title" content="Contact Us | Chatura Solutions" />
<meta name="twitter:description" content="Get in touch with our expert team" />
```

---

### Mock Interview Page (`/mock-interview`)

```html
<title>Mock Interview Practice | Chatura Solutions</title>
<meta name="description" content="Practice real interview questions with industry experts. Get live feedback from experts and personalized coaching to ace your next interview." />
<meta name="keywords" content="mock interviews, interview practice, technical interviews, interview preparation, job interview coaching" />

<meta property="og:title" content="Mock Interview Practice | Chatura Solutions" />
<meta property="og:description" content="Real interview practice with expert feedback and coaching" />
<meta name="twitter:title" content="Mock Interview Practice | Chatura Solutions" />
<meta name="twitter:description" content="Interview preparation with expert guidance" />
```

---

### Educational Consultation Page (`/educational-consultation`)

```html
<title>Educational Consultation | Chatura Solutions</title>
<meta name="description" content="Get expert guidance for university selection, application support, and career path planning. Choose the right university and achieve your educational goals." />
<meta name="keywords" content="educational consultation, university selection, application help, career guidance, higher education planning" />

<meta property="og:title" content="Educational Consultation | Chatura Solutions" />
<meta property="og:description" content="Expert guidance for your educational journey and university selection" />
<meta name="twitter:title" content="Educational Consultation | Chatura Solutions" />
<meta name="twitter:description" content="University selection and career path guidance" />
```

---

## Files Served (Non-HTML)

### `/public/robots.txt`
```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/
Disallow: /private/

Sitemap: https://chaturasolutions.com/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: CCBot
Allow: /

Crawl-delay: 1
```

### `/public/agentic.json`
JSON metadata for LLM crawlers with:
- Organization information
- Page descriptions
- Service details
- Contact information
- Success statistics

---

## Verification Tools

To verify these meta tags are properly implemented:

1. **View Page Source:** Right-click page → View Page Source → Search for `<meta`
2. **Meta Tags Inspector:** Use browser DevTools → Elements → Head section
3. **SEO Checker Tools:**
   - https://www.seobility.net/en/seochecker/
   - https://www.seomatrics.com/meta-tags-analyzer/
   - https://www.seocentro.com/meta-tag-analyzer/
4. **Open Graph Debugger:**
   - https://developers.facebook.com/tools/debug/og/object
5. **Twitter Card Validator:**
   - https://cards-dev.twitter.com/validator

---

## Mobile Meta Tags

All pages include mobile optimization:
```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="default" />
```

---

## Search Engine Visibility

With this configuration:
- ✅ Pages are indexable by all major search engines
- ✅ Search engines can follow links on the site
- ✅ Pages won't be cached improperly
- ✅ Image previews allowed in search results
- ✅ Video previews allowed in search results
- ✅ OpenGraph enables proper social sharing
- ✅ Twitter Cards ensure proper Twitter display
- ✅ LLM crawlers can index the site via robots.txt

---

## Implementation Notes

1. **Dynamic Pages:** These meta tags are generated server-side by Next.js at build/request time
2. **Open Graph Images:** All use `/logo.png` which should be a high-quality 1200x630px image
3. **Crawl Delay:** Set to 1 second to avoid server overload from crawlers
4. **LLM Allowance:** GPTBot and CCBot are explicitly allowed for AI training
5. **Sitemap:** Reference included but file needs to be created at `/public/sitemap.xml`

---

## Custom Favicon Notes

- **favicon-32x32.png:** Browser tab icon, generated from Chatura Solutions logo
- **apple-touch-icon.png:** iOS home screen icon (180x180), generated from Chatura Solutions logo
- **icon.svg:** Scalable vector icon for theme-aware displays

All icons maintain the company's cyan/turquoise branding and 'S' logo symbol.

# SEO & Analytics Documentation

Complete guide to SEO optimization and analytics setup for Chatura Solutions.

## SEO Implementation

### Meta Tags

All pages include proper meta tags in their layout files:

```jsx
export const metadata: Metadata = {
  title: 'Page Title - Chatura Solutions',
  description: 'Page description for search engines',
  keywords: ['keyword1', 'keyword2'],
  openGraph: {
    title: 'Page Title',
    description: 'Description',
    url: 'https://chaturasolutions.com/page',
    image: 'image-url',
  },
}
```

### Sitemap

**Location**: `/public/sitemap.xml`

The sitemap includes:
- Homepage
- All blog posts
- Service pages
- Static pages (FAQ, Privacy Policy)
- Update frequency and priority for each

**Update Frequency Values**:
- `weekly` - Homepage, blogs
- `monthly` - Service pages
- `yearly` - Privacy policy

**Priority Values**:
- 1.0 - Homepage
- 0.8 - Service pages
- 0.6 - Blog posts
- 0.5 - Static pages

### Robots.txt

**Location**: `/public/robots.txt`

Controls search engine crawler access:

```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /.env*

Sitemap: https://chaturasolutions.com/sitemap.xml
```

### URL Structure

SEO-friendly URLs:

- Homepage: `/`
- Services: `/courses`, `/mock-interview`, `/educational-consultation`
- Blog listing: `/blogs`
- Blog post: `/blogs/blog-slug`
- FAQ: `/faq`
- Contact: `/contact`
- Privacy: `/privacy-policy`

### Canonical Tags

Implemented to prevent duplicate content issues:

```jsx
<link rel="canonical" href="https://chaturasolutions.com/page-url" />
```

### Open Graph Tags

For social media sharing:

```jsx
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="Page description" />
<meta property="og:image" content="image-url" />
<meta property="og:url" content="page-url" />
```

### Schema Markup

Structured data for search engines:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Chatura Solutions",
  "url": "https://chaturasolutions.com",
  "email": "info@chaturasolutions.com",
  "address": "Vellore, Tamil Nadu, India"
}
```

## Analytics Setup

### Google Analytics Integration

**Tracking ID**: G-HKD24SXDR4

#### Implementation

Google Analytics script included in root layout:

```jsx
<Script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-HKD24SXDR4"
  strategy="afterInteractive"
/>
<Script
  id="google-analytics"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-HKD24SXDR4');
    `,
  }}
/>
```

### Analytics Dashboard

Access analytics at: https://analytics.google.com

**View Reports**:
1. Go to Google Analytics
2. Select Chatura Solutions property
3. Navigate to desired report

### Key Metrics to Track

#### Traffic Metrics

- **Users**: Total unique visitors
- **Sessions**: Number of visits
- **Pageviews**: Total page views
- **Bounce Rate**: Percentage of single-page sessions
- **Session Duration**: Average time on site

#### Conversion Metrics

- **Goal Completions**: Form submissions, signups
- **Conversion Rate**: Goal completions / sessions
- **Revenue**: If applicable, transaction data

#### Content Metrics

- **Top Pages**: Most visited pages
- **Exit Pages**: Where users leave
- **Time on Page**: Average engagement time
- **Scroll Depth**: How far users scroll

#### Audience Metrics

- **Geographic Location**: Where users come from
- **Device Type**: Desktop, mobile, tablet
- **Browser/OS**: Technology used
- **Traffic Source**: Organic, direct, referral, paid

### Setting Up Goals

#### Goal: Contact Form Submission

1. In Google Analytics → Admin → Goals
2. Create new goal
3. Goal type: Destination
4. Destination: `/thank-you` (or success page URL)
5. Name: "Contact Form Submission"

#### Goal: Blog Post View

1. Goal type: Pages/Screens per session
2. Condition: Page contains `/blogs/`
3. Name: "Blog Post Viewed"

#### Goal: Service Page View

1. Goal type: Event
2. Event name: "service_view"
3. Name: "Service Viewed"

### Custom Events

Track specific user actions:

```jsx
// Track blog read
gtag('event', 'blog_read', {
  'blog_title': 'Blog Title',
  'blog_category': 'Category',
  'read_time': 5
})

// Track form submission
gtag('event', 'form_submit', {
  'form_type': 'contact',
  'form_location': 'contact_page'
})

// Track service interest
gtag('event', 'service_interest', {
  'service_name': 'Mock Interview',
  'source': 'homepage'
})
```

## Performance Optimization for SEO

### Page Speed

Optimize for Core Web Vitals:

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### Image Optimization

- Use Next.js Image component
- Implement lazy loading
- Compress images
- Use appropriate formats (WebP)

### Code Splitting

- Lazy load components when possible
- Split code bundles
- Remove unused dependencies

### Caching

- Implement browser caching
- Use CDN for static assets
- Cache API responses

## Search Console Setup

### Google Search Console

1. Go to https://search.google.com/search-console
2. Add property (your domain)
3. Verify ownership
4. Monitor search performance

### Monitoring

Track in Search Console:

- **Impressions**: How often site appears in search
- **Clicks**: Users who clicked from search
- **Average Position**: Average ranking position
- **CTR**: Click-through rate

### Indexing Issues

1. Check "Coverage" report
2. Fix excluded pages
3. Submit sitemap if needed
4. Request indexing for new pages

## Local SEO (Optional)

### Google Business Profile

1. Create profile at: https://business.google.com
2. Add business information:
   - Name: Chatura Solutions LLP
   - Address: Vellore, Tamil Nadu
   - Phone: +91-416-4055743
   - Website: chaturasolutions.com

### Local Keywords

Include in content:
- "Vellore"
- "Tamil Nadu"
- "Educational consulting Vellore"
- "Mock interviews Vellore"

## Mobile SEO

### Mobile Optimization

- Responsive design (implemented)
- Mobile-friendly navigation
- Fast mobile load times
- Thumb-friendly buttons

### Mobile-First Indexing

- Ensure all content on mobile
- Mobile should mirror desktop
- Optimize for mobile performance

## Content SEO

### Keyword Research

For each page:
1. Research target keywords
2. Include in title and meta description
3. Use naturally in content
4. Avoid keyword stuffing

### Blog SEO

Each blog should include:

- SEO-friendly title
- Meta description
- Internal links to related content
- High-quality, unique content
- Proper heading structure (H1, H2, H3)

### Link Building

- Internal linking between related pages
- Link to high-authority sources
- Get backlinks from relevant sites
- Avoid low-quality link exchanges

## Monitoring & Reporting

### Weekly Checks

- Analytics traffic overview
- Top performing pages
- Blog performance
- User behavior changes

### Monthly Reports

- Overall traffic trends
- Conversion performance
- SEO ranking changes
- Goals achieved

### Quarterly Reviews

- Content performance analysis
- User acquisition sources
- Retention metrics
- Areas for improvement

## Tools & Resources

### SEO Tools

- Google Search Console
- Google Analytics
- Google PageSpeed Insights
- Mobile-Friendly Test
- Schema Markup Validator

### Links

- Analytics: https://analytics.google.com
- Search Console: https://search.google.com/search-console
- PageSpeed: https://pagespeed.web.dev
- Schema: https://schema.org

## Troubleshooting

### Pages Not Indexed

- Submit in Search Console
- Check robots.txt allows indexing
- Verify no noindex meta tag
- Check sitemap is valid

### Low Rankings

- Improve content quality
- Build more backlinks
- Optimize for target keywords
- Improve page speed

### Traffic Decline

- Check for algorithm updates
- Review content freshness
- Verify no security issues
- Monitor technical SEO

For more information, see the main documentation at `/docs/README.md`

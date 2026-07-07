# Troubleshooting Guide - Chatura Solutions

Common issues and solutions for Chatura Solutions development and deployment.

## Development Issues

### Installation & Setup

#### Problem: npm install fails

**Solution**:
```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and package lock
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

#### Problem: Port 3000 already in use

**Solution**:
```bash
# Use different port
npm run dev -- -p 3001

# Or find and kill process using port 3000
# On macOS/Linux:
lsof -ti:3000 | xargs kill -9

# On Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

#### Problem: Module not found errors

**Solution**:
```bash
# Verify file exists and path is correct
# Check import path case-sensitivity (important on Linux)
# Rebuild node_modules
rm -rf node_modules
npm install
```

### Development Server

#### Problem: Changes not reflecting in browser

**Solution**:
1. Hard refresh browser: `Ctrl+Shift+R` or `Cmd+Shift+R`
2. Clear Next.js cache: `rm -rf .next`
3. Restart dev server: `npm run dev`
4. Check for build errors in terminal

#### Problem: TypeScript errors in IDE

**Solution**:
```bash
# Rebuild TypeScript cache
npx tsc --noEmit

# Reload IDE/VS Code
```

#### Problem: CSS not loading

**Solution**:
1. Verify `import './globals.css'` in root layout
2. Check Tailwind CSS configuration
3. Restart dev server
4. Clear browser cache

## Blog System Issues

### Blog Not Showing

**Problem**: Blog exists but doesn't appear in listing

**Solutions**:
1. **Check file location**: Verify JSON file is in `/public/data/blogs/`
2. **Validate JSON**: Use JSON validator to check syntax
3. **Check slug match**: Ensure filename matches slug (without .json)
4. **Verify structure**: All required fields present:
   ```json
   {
     "id": "...",
     "title": "...",
     "slug": "...",
     "excerpt": "...",
     "content": "...",
     "author": "...",
     "date": "YYYY-MM-DD",
     "category": "...",
     "readTime": 5,
     "featuredImage": null
   }
   ```

### Individual Blog Post Returns 404

**Problem**: Blog listing shows blog, but `/blogs/slug` returns 404

**Solutions**:
1. **Check slug format**: Slugs must be lowercase with hyphens only
2. **Verify filename**: Filename must exactly match slug (e.g., `blog-title.json`)
3. **Clear cache**: Navigate to `/blogs` first, then click blog link
4. **Check date format**: Ensure date is valid (YYYY-MM-DD)

### Blog Images Not Displaying

**Problem**: Featured images show as placeholder

**Solutions**:
1. **Verify URL**: Check `featuredImage` URL is accessible
2. **Test URL**: Open URL in browser to confirm image exists
3. **Use HTTPS**: Ensure URL uses HTTPS if on HTTPS site
4. **Check CORS**: External images may have CORS restrictions

### Search Not Working

**Problem**: Blog search returns no results

**Solutions**:
1. **Check search box**: Verify search input is focused
2. **Clear filters**: Ensure no active filters hiding results
3. **Check browser console**: Look for JavaScript errors
4. **Try different keywords**: Search targets title and excerpt

### Blog API Errors

**Problem**: Error loading blogs from API

**Solutions**:
1. **Check API endpoint**: Visit `/api/blogs` in browser
2. **Verify JSON files**: Ensure `/public/data/blogs/` has valid JSON files
3. **Check file permissions**: Files should be readable
4. **Review server logs**: Check for parsing errors

## Course System Issues

### Courses Not Displaying

**Problem**: Courses page shows empty or limited courses

**Solutions**:
1. **Verify courses.json exists**: Check `/public/data/courses.json`
2. **Validate JSON syntax**: Ensure valid JSON structure
3. **Check courses array**: Verify has course objects with required fields
4. **Verify file encoding**: Should be UTF-8

### Course Filtering Not Working

**Problem**: Filters don't filter courses

**Solutions**:
1. **Check filter values**: Ensure they match course data exactly
2. **Check category names**: Must match exactly (case-sensitive)
3. **Try basic filters**: Test with simple values first
4. **Clear browser cache**: Old data may be cached

## Forms & Contact Issues

### Contact Form Not Submitting

**Problem**: Form submission fails or hangs

**Solutions**:
1. **Check required fields**: All marked fields must be filled
2. **Validate input**: 
   - Email format: `email@example.com`
   - Phone format: `+91-9876543210` or similar
3. **Check API**: Verify contact form API endpoint exists
4. **Browser console**: Check for JavaScript errors

### Email Notifications Not Received

**Problem**: Form submitted but no email received

**Solutions**:
1. **Check spam folder**: Emails may be filtered
2. **Verify email service**: Ensure configured correctly
3. **Check email address**: Verify recipient address is correct
4. **Review email template**: Check formatting
5. **Check server logs**: Look for sending errors

### Form Validation Errors

**Problem**: Incorrect validation messages

**Solutions**:
1. **Check field requirements**: Review validation rules
2. **Verify input format**:
   - Email must include @
   - Phone must be valid format
   - Names must not be empty
3. **Test with valid data**: Try known valid values

## Performance Issues

### Slow Page Load

**Problem**: Website loads slowly

**Solutions**:
```bash
# Check build size
npm run build

# Analyze bundle
npm run build -- --analyze

# Optimize images
# - Use Next.js Image component
# - Compress images before upload
# - Use WebP format
```

**In code**:
```jsx
// Use Image component for optimization
import Image from 'next/image'

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
  priority={false}  // lazy load
/>
```

### High Server Resource Usage

**Solutions**:
1. **Check for memory leaks**: Monitor process with `pm2 monit`
2. **Optimize database queries**: Reduce unnecessary API calls
3. **Enable caching**: Implement proper cache headers
4. **Reduce bundle size**: Remove unused dependencies
5. **Use CDN**: Serve static assets from CDN

### API Timeouts

**Problem**: API calls timeout

**Solutions**:
1. **Check network**: Verify internet connection
2. **Check API status**: Ensure API endpoint is running
3. **Increase timeout**: Adjust fetch timeout if needed
4. **Monitor server**: Check server CPU and memory

## Deployment Issues

### Build Fails on Vercel

**Problem**: Vercel build fails but works locally

**Solutions**:
1. **Check environment variables**: Verify set on Vercel
2. **Review build logs**: Click "View Logs" in Vercel dashboard
3. **Clear cache**: In Settings → Advanced → Clear build cache
4. **Check Node version**: Ensure compatible version
5. **Commit package-lock.json**: Include lock file in git

### Deployment Stuck

**Problem**: Deployment appears to hang

**Solutions**:
1. **Wait 15 minutes**: Builds can take time
2. **Check for errors**: Look at deployment logs
3. **Cancel and retry**: Delete deployment and try again
4. **Check logs**: Click through to build logs
5. **Contact Vercel support**: If issue persists

### 404 Errors After Deploy

**Problem**: Pages work locally but return 404 after deploy

**Solutions**:
1. **Clear Vercel cache**: In Project Settings
2. **Verify file paths**: Case-sensitive on Linux
3. **Check public files**: Ensure in `/public` folder
4. **Verify build output**: Check `.next` folder created

### Environment Variables Not Working

**Problem**: Environment variables undefined in production

**Solutions**:
1. **Add NEXT_PUBLIC_ prefix**: For client-side variables
2. **Set on Vercel**: Go to Settings → Environment Variables
3. **Redeploy after setting**: Changes require redeployment
4. **Verify names**: Exact match between code and settings
5. **Check syntax**: No spaces around = sign

## Browser & Client Issues

### Page Shows Correctly on Mobile But Not Desktop

**Problem**: Responsive design breaking on desktop

**Solutions**:
1. **Check media queries**: Review Tailwind responsive prefixes
2. **Test browser**: Try different browsers
3. **Check zoom level**: Reset browser zoom to 100%
4. **Clear cache**: Hard refresh `Ctrl+Shift+R`
5. **Check viewport**: Open DevTools to verify correct size

### JavaScript Errors in Console

**Problem**: Errors appear in browser console

**Solutions**:
1. **Note error message**: Identify which code fails
2. **Check network tab**: Look for failed requests
3. **Review code**: Find corresponding line
4. **Check imports**: Verify all imports exist
5. **Clear cache**: Delete browser cache and cookies

### Styling Issues

**Problem**: Colors or fonts not displaying correctly

**Solutions**:
1. **Verify Tailwind CSS loaded**: Check `<style>` in source
2. **Check class names**: Verify Tailwind classes are correct
3. **Verify fonts imported**: Check layout.tsx imports
4. **Clear cache**: Full page reload `Ctrl+Shift+R`
5. **Check specificity**: CSS rules conflicting

## Analytics Issues

### Google Analytics Not Tracking

**Problem**: Events not appearing in Analytics

**Solutions**:
1. **Verify tracking ID**: Check correct ID in script tag
2. **Allow time**: New events may take 24-48 hours
3. **Check filters**: Verify not filtering out traffic
4. **Check console**: No JavaScript errors
5. **Verify gtag.js loads**: Check Network tab in DevTools

### Low Traffic in Analytics

**Problem**: Analytics showing lower traffic than expected

**Solutions**:
1. **Check tracking ID**: Correct ID configured?
2. **Check filters**: Analytics filters hiding traffic?
3. **Check realtime**: Real-time report shows current traffic
4. **Wait for processing**: Can take hours for reports
5. **Check date range**: Verify correct dates selected

## SEO Issues

### Pages Not Indexed

**Problem**: Pages not appearing in Google search

**Solutions**:
1. **Submit to Search Console**: https://search.google.com/search-console
2. **Request indexing**: Submit URL for indexing
3. **Verify sitemap**: Check `/public/sitemap.xml` is valid
4. **Check robots.txt**: Ensure not disallowing indexing
5. **Check noindex**: Verify no `<meta name="robots" content="noindex">`

### Poor Search Rankings

**Problem**: Page ranks but very low position

**Solutions**:
1. **Improve content**: Add more relevant content
2. **Check keywords**: Target less competitive keywords
3. **Build backlinks**: Link from reputable sites
4. **Improve speed**: Optimize page load time
5. **Mobile optimization**: Ensure mobile-friendly

## Getting Help

### Before Asking for Help

1. **Check logs**: Review browser console and server logs
2. **Search documentation**: Check `/docs` folder
3. **Google error**: Search exact error message
4. **Recreate issue**: Minimal reproducible example
5. **Check recent changes**: What changed when it broke?

### Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Vercel Docs**: https://vercel.com/docs
- **React Docs**: https://react.dev
- **MDN Docs**: https://developer.mozilla.org

### Reporting Issues

Include:
- Description of problem
- Steps to reproduce
- Expected vs actual behavior
- Browser/OS version
- Error messages
- Code snippets if relevant

---

For more information, see the main documentation at `/docs/README.md`

# Deployment Guide - Chatura Solutions

Complete guide to deploying Chatura Solutions to production.

## Deployment Options

### 1. Vercel (Recommended)

Vercel is the recommended platform for Next.js applications.

**Advantages**:
- Zero-configuration deployment
- Automatic SSL certificates
- Global CDN
- Serverless functions
- Git integration
- Environment variables management

**Steps**:

1. **Connect Repository**
   - Go to vercel.com
   - Click "New Project"
   - Select your GitHub repository
   - Grant permissions

2. **Configure Project**
   - Verify build settings
   - Add environment variables
   - Configure domain

3. **Deploy**
   - Click "Deploy"
   - Vercel builds and deploys automatically

4. **Monitor**
   - Check deployment status
   - View analytics
   - Monitor performance

### 2. Self-Hosted (AWS, GCP, DigitalOcean)

For complete control:

**Requirements**:
- Node.js 18+ server
- PM2 or similar process manager
- Nginx as reverse proxy
- SSL certificate

**Deployment Steps**:

```bash
# 1. Connect to server
ssh user@your-server.com

# 2. Clone repository
git clone https://github.com/narayana1975/chatura-solutions.git
cd chatura-solutions

# 3. Install dependencies
npm install

# 4. Build project
npm run build

# 5. Start with PM2
pm2 start npm --name "chatura" -- start
pm2 save

# 6. Configure Nginx (see below)
```

**Nginx Configuration**:

Create `/etc/nginx/sites-available/chatura`:

```nginx
server {
    listen 80;
    server_name chaturasolutions.com www.chaturasolutions.com;
    
    # Redirect HTTP to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name chaturasolutions.com www.chaturasolutions.com;
    
    # SSL certificate
    ssl_certificate /path/to/certificate.crt;
    ssl_certificate_key /path/to/private.key;
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    # Proxy to Next.js
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
    
    # Cache static files
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/chatura /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## Environment Variables

### Required Variables

Create `.env.production` or set in deployment platform:

```bash
# Google Analytics
NEXT_PUBLIC_GA_ID=G-HKD24SXDR4

# API URLs (if using external APIs)
NEXT_PUBLIC_API_URL=https://chaturasolutions.com/api
```

### Setting Variables on Vercel

1. Go to Project Settings
2. Navigate to "Environment Variables"
3. Add variables for production
4. Redeploy after adding variables

## Build Configuration

### Vercel Build Settings

In `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "env": {
    "NEXT_PUBLIC_GA_ID": "@ga_id"
  }
}
```

### Build Optimization

In `next.config.js`:

```js
module.exports = {
  // Enable React compiler for better performance
  reactCompiler: true,
  
  // Image optimization
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
  
  // Headers for caching
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600'
          }
        ]
      }
    ]
  }
}
```

## Domain Setup

### Custom Domain

1. **On Vercel**:
   - Go to Project Settings → Domains
   - Add your domain
   - Follow DNS configuration

2. **DNS Configuration**:
   - Update your domain registrar's DNS settings
   - Point to Vercel nameservers or A records
   - Wait for propagation (up to 24 hours)

### SSL Certificate

- Vercel provides automatic SSL
- Certificates auto-renew
- HTTPS enforced by default

## Pre-Deployment Checklist

### Code Quality

- [ ] Run `npm run lint` - No errors
- [ ] All tests passing (if applicable)
- [ ] No console errors or warnings
- [ ] Code reviewed and approved

### Content

- [ ] All blog posts published
- [ ] Courses information current
- [ ] Contact information verified
- [ ] Images optimized
- [ ] Links tested

### Configuration

- [ ] Environment variables set
- [ ] Database connections configured
- [ ] API endpoints tested
- [ ] Email service configured (if applicable)
- [ ] Analytics ID verified

### SEO & Analytics

- [ ] Sitemap updated
- [ ] Meta tags verified
- [ ] Google Search Console set up
- [ ] Google Analytics configured
- [ ] Robots.txt correct

### Security

- [ ] No sensitive data in code
- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Rate limiting enabled
- [ ] Form validation in place

## Deployment Process

### Step 1: Prepare

```bash
# Pull latest changes
git pull origin main

# Install dependencies
npm install

# Run tests
npm run lint

# Build locally to verify
npm run build
```

### Step 2: Deploy on Vercel

```bash
# If using Vercel CLI
vercel
```

Or use GitHub integration for automatic deployments.

### Step 3: Verify

1. Visit https://chaturasolutions.com
2. Test all main pages:
   - Homepage
   - Blog listing and posts
   - Services pages
   - Contact form
3. Check Analytics
4. Verify email notifications

### Step 4: Monitor

- Watch error logs
- Monitor performance metrics
- Check user feedback
- Monitor server resources

## Post-Deployment

### Monitoring

**Key Metrics to Monitor**:

- Page load time
- Error rate
- User traffic
- Form submissions
- Analytics events

### Updating Content

1. **Update Blogs**:
   ```bash
   # Edit blog JSON files
   git add public/data/blogs/*.json
   git commit -m "Update blog content"
   git push origin main
   ```

2. **Update Courses**:
   ```bash
   # Edit courses.json
   git add public/data/courses.json
   git commit -m "Update courses"
   git push origin main
   ```

3. **Automatic Deployment**:
   - Changes to main branch auto-deploy on Vercel
   - View deployment history in Vercel dashboard

### Rollback Process

If issues occur:

1. Identify problematic deployment in Vercel
2. Click "Rollback" on that deployment
3. Vercel redeploys previous stable version
4. Fix issues locally
5. Push corrected code
6. Redeploy

## Performance Optimization

### Caching Strategy

```js
// Cache static content
cache-control: public, max-age=31536000

// Cache HTML (shorter)
cache-control: public, max-age=3600

// Don't cache API responses
cache-control: no-store
```

### Image Optimization

- Use Next.js Image component
- Implement lazy loading
- Use WebP format
- Compress before uploading

### Code Splitting

- Already handled by Next.js
- Verify in bundle analysis
- Remove unused dependencies

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
npm cache clean --force
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Slow Performance

- Check Core Web Vitals in Google Analytics
- Optimize images
- Reduce JavaScript bundle size
- Enable compression

### 404 Errors

- Verify routes are correct
- Check file paths
- Verify build output includes files
- Clear Vercel cache

### Form Not Working

- Verify API endpoint is accessible
- Check environment variables
- Review server logs
- Test API directly

## Scheduled Tasks

### Regular Maintenance

- **Daily**: Check error logs
- **Weekly**: Review analytics
- **Monthly**: Update content, check security updates
- **Quarterly**: Performance audit, SEO review

### Backup Strategy

- Enable automatic backups
- Export data regularly
- Store backup in secure location
- Test restore process

## Support & Resources

### Vercel Documentation

- https://vercel.com/docs
- https://nextjs.org/docs/deployment

### Monitoring Tools

- Vercel Analytics Dashboard
- Google Search Console
- Google Analytics
- Uptime monitoring service

### Common Issues

See [Troubleshooting Guide](./TROUBLESHOOTING.md) for common problems and solutions.

## Deployment Checklist

```
□ Code reviewed and tested
□ Environment variables set
□ Build passes locally
□ Database migrations done
□ Content updated
□ SEO metadata verified
□ Analytics configured
□ Security headers added
□ Performance optimized
□ Email service configured
□ Domain configured
□ SSL certificate valid
□ Post-deployment tests passed
□ Team notified of deployment
□ Monitoring enabled
□ Rollback plan ready
```

For more help, see the main documentation at `/docs/README.md`

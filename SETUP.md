# Setup & Deployment Guide

## Quick Start

1. **Open in Browser**: Simply open `index.html` in any modern web browser
2. **No Installation Needed**: No dependencies, no build process required
3. **Production Ready**: All files are minified and optimized

## Before Going Live

### 1. Update Contact Information

**Edit `index.html`:**
- Line 80: Update WhatsApp phone number
  ```html
  <a href="https://wa.me/917891919191" target="_blank" class="btn btn-whatsapp">
  ```
  Replace `917891919191` with your actual WhatsApp number (country code + number, no spaces or special characters)

**Footer (around line 155):**
- Update phone number: `Phone: +91 XXXXX XXXXX`
- Update location if needed

### 2. Update JavaScript (Optional)

**Edit `script.js`:**
- Line 32: Update WhatsApp number in form submission
  ```javascript
  window.open(`https://wa.me/917891919191?text=${whatsappMessage}`, '_blank');
  ```

## Deployment Options

### Option 1: GitHub Pages (Free)
1. Push files to GitHub repository
2. Go to Settings → Pages
3. Select "main" branch as source
4. Your site will be live at `https://yourusername.github.io/repo-name`

### Option 2: Netlify (Free & Easy)
1. Connect your GitHub repo to Netlify
2. Deploy automatically with every push
3. Custom domain support

### Option 3: Traditional Web Hosting
1. Upload all files via FTP/SFTP
2. Ensure proper file permissions (644 for files, 755 for folders)
3. Access via your domain

### Option 4: Local Server (Development)
```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (with http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

## Testing Checklist

- [ ] Hero section displays correctly
- [ ] All navigation links work
- [ ] Contact form validates input
- [ ] WhatsApp button opens in new window
- [ ] Sticky contact button appears and hides appropriately
- [ ] Website is responsive on mobile/tablet
- [ ] Images load correctly (if added)
- [ ] Colors match brand guidelines
- [ ] Text is readable and properly formatted
- [ ] Forms submit successfully

## Desktop Testing

### Chrome DevTools
1. Press `F12` or `Ctrl+Shift+I`
2. Click device toggle (Ctrl+Shift+M)
3. Test various device sizes
4. Check console for errors

### Responsive Sizes to Test
- Desktop: 1366x768
- Tablet: 768x1024
- Mobile: 375x667
- Small Mobile: 320x568

## Performance Tips

1. **Minify CSS & JS** (optional for production):
   - Use online minifiers or build tools
   - Reduces file sizes

2. **Add Image Optimization**:
   - Use optimized images (WebP format)
   - Compress JPGs/PNGs
   - Lazy load if adding many images

3. **Enable Caching**:
   - Add `.htaccess` for Apache
   - Configure cache headers

4. **SEO Optimization**:
   - Add Open Graph meta tags
   - Add meta description
   - Submit sitemap to Google Search Console
   - Add structured data (Schema.org)

## SEO Setup (.htaccess for Apache)

Create `.htaccess` file in root:
```apache
# Enable compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Caching
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/html "access plus 1 day"
  ExpiresByType text/css "access plus 30 days"
  ExpiresByType image/gif "access plus 30 days"
  ExpiresByType image/jpeg "access plus 30 days"
  ExpiresByType image/png "access plus 30 days"
  ExpiresByType application/javascript "access plus 30 days"
</IfModule>

# Remove extensions
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^(.*)$ index.html [L]
</IfModule>
```

## Analytics Setup (Google Analytics)

Add before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## SSL Certificate

For production websites, always use HTTPS:
1. Use free SSL via Let's Encrypt
2. Configure HTTPS redirection
3. Update all internal links to `https://`

## Troubleshooting

### WhatsApp Link Not Working
- Verify phone number format (country code + number, no spaces)
- Test in different browser
- Check if WhatsApp is installed on test device

### Form Not Submitting
- Open browser console (F12)
- Check for JavaScript errors
- Verify form IDs match in HTML and JS

### Styling Issues
- Check browser cache (Ctrl+Shift+Delete)
- Verify CSS file is loading (Network tab in DevTools)
- Test in different browser

### Mobile Not Responsive
- Check viewport meta tag in HTML
- Test with actual mobile device
- Use Chrome DevTools device emulation

## Maintenance

Regular tasks:
- Update content as needed
- Monitor contact inquiries
- Check analytics monthly
- Update WhatsApp number if it changes
- Monitor for broken links
- Update copyright year in footer

## Support

For issues or customization:
1. Check the README.md file
2. Review code comments
3. Consult CSS custom properties for styling
4. Test in multiple browsers

---

**Ready to Deploy?** ✅  
All files are production-ready. Simply update contact information and deploy!

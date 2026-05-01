# New North Bengal Fruits - Premium Website

A premium, modern, and mobile-first website for **New North Bengal Fruits**, a seasonal pineapple supplier serving bulk buyers, traders, and local markets.

## Project Overview

**Brand Name:** New North Bengal Fruits  
**Tagline:** "Harvested Fresh. Delivered Right."  
**Business Type:** Farm-based seasonal pineapple supplier

## Features

✅ **Premium Design**: Clean, minimal, and professional appearance  
✅ **Mobile-First**: Fully responsive design optimized for all devices  
✅ **Modern UI**: Smooth scrolling, soft shadows, rounded corners  
✅ **Brand Colors**: Carefully selected color palette reflecting natural freshness  
✅ **Accessibility**: Semantic HTML, keyboard navigation, proper contrast  
✅ **Performance**: Optimized for fast loading and smooth interactions  
✅ **WhatsApp Integration**: Direct chat button for quick customer inquiries  
✅ **Contact Form**: Simple, effective form with WhatsApp integration  
✅ **Sticky Navigation**: Easy access to contact section from anywhere  

## Color Palette

| Purpose | Color | Hex Code |
|---------|-------|----------|
| Background | Off-white | #FFFDF5 |
| Primary Accent | Corn Yellow | #F4C430 |
| Secondary Accent | Fresh Light Green | #8BC34A |
| Premium Contrast | Deep Forest Green | #2E7D32 |

## Typography

- **Headings**: Poppins / Montserrat (semi-bold, 600-700 weight)
- **Body**: Lato / Open Sans (regular, 400 weight)
- **Font Family**: Google Fonts (web-safe and optimized)

## Website Sections

### 1. Header & Navigation
- Sticky header with logo and navigation menu
- Links to Home, About, Why Us, and Contact sections
- Smooth navigation with active state highlighting

### 2. Hero Section
- Full-height hero with messaging
- Brand title and tagline
- Call-to-action button
- Gradient background with geometric accents

### 3. About Us
- Company mission and values
- Focus on freshness and reliability
- Target customer segment

### 4. Supply & Pricing
- Service highlights
- Quality assurance messaging
- Pricing note with contact call-to-action

### 5. Why Choose Us
- Four feature cards highlighting key benefits
- Farm direct supply
- Reliable availability
- Competitive pricing
- Easy communication

### 6. Contact Section
- Contact form (Name, Phone, Message)
- Integration with WhatsApp
- Card-style layout with green accents
- Clear call-to-action

### 7. Footer
- Company information
- Contact details
- Location information
- Copyright notice

## File Structure

```
new-north-bengal-fruits/
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete styling with responsive design
├── script.js           # JavaScript for interactivity
└── README.md           # This file
```

## How to Use

### Local Setup
1. Clone or download the project files
2. Open `index.html` in your web browser
3. No build process or dependencies required

### Hosting
1. Upload all files to your web server
2. Ensure `.htaccess` or server configuration properly serves files
3. Update WhatsApp phone number in `script.js` and `index.html`

## Customization Guide

### Update Phone Number
Replace `7891919191` with your actual WhatsApp phone number in:
- `index.html` (line in WhatsApp button href)
- `script.js` (WhatsApp message sending)

### Update Contact Information
Edit the following in `index.html`:
- Phone number in footer
- Location information
- Any other contact details

### Modify Colors
Update CSS variables in `styles.css`:
```css
:root {
    --off-white: #FFFDF5;
    --primary-yellow: #F4C430;
    --secondary-green: #8BC34A;
    --dark-forest-green: #2E7D32;
    /* ... more colors */
}
```

### Add Images
You can add a hero background image by modifying the `.hero` selector in `styles.css`:
```css
.hero {
    background-image: url('your-image.jpg');
    background-size: cover;
    background-position: center;
    /* ... other properties */
}
```

### Adjust Typography
Modify font families and sizes in the CSS custom properties:
```css
--font-heading: 'Poppins', 'Montserrat', sans-serif;
--font-body: 'Lato', 'Open Sans', sans-serif;
```

## Features in Detail

### Responsive Design Breakpoints
- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

### Sticky Contact Button
- Appears on the right side of the screen
- Fades when contact section is in view
- Smooth animations and transitions

### Form Validation
- Checks for empty fields
- Validates phone number format
- Submits inquiry via WhatsApp with pre-filled message

### Smooth Scrolling
- All navigation links use smooth scroll behavior
- Intersection observer for fade-in animations
- Keyboard navigation support

## Browser Support

✅ Chrome (latest)  
✅ Firefox (latest)  
✅ Safari (latest)  
✅ Edge (latest)  
✅ Mobile browsers (iOS Safari, Chrome Mobile)  

## Performance

- **No external dependencies** (except Google Fonts)
- **Optimized CSS** with minimal file size
- **Vanilla JavaScript** with no framework overhead
- **Mobile-first approach** for faster mobile loading

## SEO Features

- Semantic HTML structure
- Meta description and keywords
- Proper heading hierarchy
- Mobile viewport configuration
- Open Graph ready (can be added)

## Accessibility

- Semantic HTML elements
- Proper heading hierarchy (H1, H2, H3)
- Color contrast compliance
- Keyboard navigation support
- Form labels and ARIA attributes ready

## Future Enhancements

- Add product gallery/carousel
- Integrate email backend
- Add testimonials section
- Portfolio/case studies section
- Blog integration
- Analytics tracking
- Multi-language support

## Support & Customization

For any customization needs or issues:
1. Check the code comments in each file
2. Refer to CSS variables for easy styling changes
3. Review the HTML structure for content updates
4. Test on multiple devices before deployment

## License

This website template is created for New North Bengal Fruits. All rights reserved.

---

**Last Updated:** May 2024  
**Version:** 1.0  
**Tagline:** Harvested Fresh. Delivered Right.

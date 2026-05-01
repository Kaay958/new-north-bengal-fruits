# Design Specifications & Brand Guidelines

## Brand Identity

**Business Name:** New North Bengal Fruits  
**Tagline:** "Harvested Fresh. Delivered Right."  
**Industry:** Seasonal Fruit Supply (Pineapples)  
**Target Audience:** Bulk buyers, traders, local markets, small retailers  

---

## Color Palette

### Primary Colors

#### Off-white Background
- **Hex Code:** #FFFDF5
- **RGB:** rgb(255, 253, 245)
- **Usage:** Overall page background, card backgrounds
- **Purpose:** Premium, clean aesthetic

#### Deep Forest Green
- **Hex Code:** #2E7D32
- **RGB:** rgb(46, 125, 50)
- **Usage:** Headings, buttons, primary CTA, footer
- **Purpose:** Trust, nature, premium feel

### Accent Colors

#### Corn Yellow
- **Hex Code:** #F4C430
- **RGB:** rgb(244, 196, 48)
- **Usage:** Highlights, accents, subtle emphasis
- **Usage Rule:** Use sparingly (max 10% of design)
- **Purpose:** Fresh, natural, energetic

#### Fresh Light Green
- **Hex Code:** #8BC34A
- **RGB:** rgb(139, 195, 74)
- **Usage:** Contact section, secondary buttons, accents
- **Usage Rule:** Use for important sections
- **Purpose:** Growth, freshness, seasonal aspect

### Neutral Colors

#### Light Gray
- **Hex Code:** #F5F5F5
- **RGB:** rgb(245, 245, 245)
- **Usage:** Section dividers, subtle backgrounds

#### Medium Gray
- **Hex Code:** #CCCCCC
- **RGB:** rgb(204, 204, 204)
- **Usage:** Borders, dividers

#### Dark Gray
- **Hex Code:** #333333
- **RGB:** rgb(51, 51, 51)
- **Usage:** Body text, secondary content

---

## Typography System

### Font Families

#### Headings
- **Primary:** Poppins (Weight: 600-700)
- **Secondary:** Montserrat (Weight: 600-700)
- **Characteristics:** Semi-bold, clean, well-spaced, modern
- **Usage:** H1, H2, H3, section titles, logo

#### Body Text
- **Primary:** Lato (Weight: 400-700)
- **Secondary:** Open Sans (Weight: 400-700)
- **Characteristics:** Simple, readable, professional
- **Usage:** Paragraphs, descriptions, form text

### Font Sizes & Hierarchy

| Element | Font Size | Font Weight | Line Height | Usage |
|---------|-----------|-------------|-------------|-------|
| H1 (Hero) | 3.5rem (clamp 2.5rem-3.5rem) | 700 | 1.2 | Main brand heading |
| Hero Subtitle | 1.8rem (clamp 1.2rem-1.8rem) | 600 | 1.4 | Tagline |
| H2 (Section) | 2.8rem (clamp 2rem-2.8rem) | 700 | 1.3 | Section titles |
| H3 (Card) | 1.3rem | 700 | 1.4 | Feature card titles |
| Body | 1rem | 400 | 1.6 | Standard text |
| Small | 0.9rem | 400 | 1.5 | Footer, meta info |

### Letter Spacing

- **Headings:** -0.5px (slightly tight for premium feel)
- **Tagline:** 0.5px (slightly loose for elegance)
- **Body:** 0px (normal)

---

## Spacing System

### Spacing Scale (CSS Variables)

```css
--spacing-xs:  0.5rem  (8px)
--spacing-sm:  1rem    (16px)
--spacing-md:  1.5rem  (24px)
--spacing-lg:  2rem    (32px)
--spacing-xl:  3rem    (48px)
--spacing-xxl: 4rem    (64px)
```

### Section Padding
- **Desktop:** 64px vertical, 32px horizontal
- **Tablet:** 48px vertical, 24px horizontal
- **Mobile:** 32px vertical, 16px horizontal

### Component Spacing
- **Button padding:** 14px 32px
- **Card padding:** 32px
- **Form input:** 16px padding
- **Feature card gap:** 24px

---

## Visual Elements

### Border Radius

```css
--radius-sm:  4px   /* Subtle, minimal */
--radius-md:  8px   /* Buttons, inputs */
--radius-lg:  12px  /* Cards, containers */
```

**Usage Rules:**
- Buttons: 8px
- Form inputs: 8px
- Feature cards: 12px
- Callout boxes: 10px

### Shadows

#### Soft Shadow
```css
box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
```
**Usage:** Default shadow for cards, subtle layers

#### Medium Shadow
```css
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
```
**Usage:** Hover states, elevated elements

#### No Hard Shadows
**Rule:** Never use sharp or dark shadows (avoid `0 0 10px rgba(0,0,0,0.5)`)

### Transitions

- **Default duration:** 0.3s ease
- **Hover interactions:** 0.3s ease-out
- **Page transitions:** 0.6s ease-out
- **Easing:** ease, ease-out (no linear for smoothness)

---

## Layout Specifications

### Hero Section

**Desktop:**
- Height: 100vh (minimum 600px)
- Content alignment: Centered
- Overlay opacity: Subtle

**Mobile:**
- Height: 80vh (minimum 500px)
- Padding: 48px 16px
- Text size: Scaled down via clamp()

**Background:**
- Color gradient: #2E7D32 to #1b5e20 (135deg)
- Overlay: Radial gradients with brand colors (10% opacity)

### Section Layout

**Container Width:** 1200px max-width
**Padding:** Responsive (32px desktop, 16px mobile)
**Grid System:** CSS Grid for cards/features

### Form Layout

**Contact Form:**
- 2-column grid (desktop) → 1-column (mobile)
- Input gap: 24px
- Submit button: Full width
- Form width: 550px max

### Footer

**Grid:** 3-column (auto-fit on mobile)
**Alignment:** Left-aligned text
**Background:** #2E7D32
**Text color:** White (90% opacity on secondary text)

---

## Component Specifications

### Buttons

#### Primary Button (CTA)
- **Background:** #F4C430 (Corn Yellow)
- **Text Color:** #2E7D32 (Forest Green)
- **Padding:** 14px 32px
- **Border-radius:** 8px
- **Font-weight:** 600

**Hover State:**
- Background: #f4d166
- Transform: translateY(-2px)
- Shadow: Medium shadow

#### WhatsApp Button
- **Background:** #25D366
- **Text Color:** White
- **Icon:** 💬
- **Full width:** Responsive
- **Icon spacing:** 8px
- **Display:** Flex with center alignment

### Forms

#### Input Fields
- **Padding:** 16px
- **Border:** 1px solid #E8E8E8
- **Border-radius:** 8px
- **Focus:** Green accent + subtle glow
- **Font-size:** 1rem (16px on mobile for zoom prevention)

#### Textarea
- **Min-height:** 120px
- **Resize:** Vertical only
- **Font family:** Body font

### Cards

#### Feature Card
- **Padding:** 32px
- **Radius:** 12px
- **Shadow:** Soft shadow
- **Hover:** Lift up 8px, medium shadow
- **Accent bar:** 4px height, gradient yellow-to-green

#### Highlight Item
- **Padding:** 24px
- **Icon size:** 2.5rem
- **Background:** White
- **Box-shadow:** Soft shadow

---

## Navigation

### Header
- **Height:** 60-70px (responsive)
- **Background:** Off-white with light border
- **Position:** Sticky to top
- **Z-index:** 100

**Logo:**
- **Font:** Poppins, 1.5rem, weight 700
- **Color:** #2E7D32
- **Letter-spacing:** -0.5px

**Navigation Links:**
- **Font-size:** 0.95rem responsive
- **Weight:** 500
- **Hover:** Color change to #2E7D32
- **Active:** Bold indicator (optional)

### Sticky Contact Button
- **Position:** Fixed, bottom-right
- **Background:** #2E7D32
- **Padding:** 12px 24px
- **Border-radius:** 8px
- **Shadow:** Medium shadow
- **Animation:** Slide in from right, fade on contact section

---

## Mobile Optimization

### Viewport
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

### Touch Targets
- Minimum size: 44px × 44px
- Spacing: 8px between targets

### Font Sizes
- **Minimum:** 14px
- **Buttons:** 1rem (16px)
- **Form inputs:** 16px (prevents zoom on iOS)

### Responsive Breakpoints

```css
/* Mobile */
@media (max-width: 480px) {
  --font-size-base: 14px;
  Sections stack layout
  Single column grids
}

/* Small Tablet */
@media (max-width: 768px) {
  2-column grids
  Reduced padding
  Logo font-size: 1.2rem
}

/* Desktop */
@media (min-width: 769px) {
  Multi-column grids
  Full spacing
  Navigation visible
}
```

---

## Animation & Micro-interactions

### Entrance Animations
- **Fade In Up:** 1s ease-out (hero content)
- **Fade In Up:** 0.6s ease-out (cards on scroll)
- **Slide In Right:** 0.5s ease-out (sticky button)
- **Intersection Observer:** Trigger on scroll

### Hover Effects
- **Buttons:** Lift 2px + shadow increase + color shift
- **Cards:** Lift 4-8px + shadow increase
- **Links:** Color change to brand green

### Duration & Easing
- **Quick interactions:** 0.2-0.3s
- **Page transitions:** 0.6s
- **Easing:** ease, ease-out (no linear)

---

## Image Guidelines

### Hero Image
- **Size:** Minimum 1920px width
- **Format:** JPG (optimized <100KB)
- **Aspect-ratio:** 16:9
- **Content:** Pineapple farm, natural lighting
- **Overlay:** 40% dark gradient for text readability

### Feature Icons/Images
- **Size:** SVG preferred (scalable)
- **Or:** PNG with transparency (2x/3x for retina)
- **Dimensions:** Square format
- **Colors:** Brand colors or neutral

### Optimization Rules
- Use WebP format with JPG fallback
- Compress: TinyPNG or equivalent
- Lazy load large images
- Responsive images with srcset

---

## Accessibility Specifications

### Color Contrast
- **WCAG AA:** Minimum 4.5:1 for text
- **Current:** Text on #2E7D32 meets requirement ✓
- **Current:** Text on white meets requirement ✓

### Focus States
- All interactive elements must have visible focus state
- Focus outline: 2-3px solid #2E7D32

### Semantic HTML
- Use proper heading hierarchy (H1, H2, H3)
- Use semantic tags (nav, main, section, footer)
- Form labels properly associated with inputs
- ARIA labels where needed

### Keyboard Navigation
- Tab order follows visual flow
- Sticky button tab-accessible
- Form fields in logical order
- Skip links not required but good to add

---

## File Size Targets

| File | Current | Target | Status |
|------|---------|--------|--------|
| HTML | 7.6KB | <10KB | ✓ |
| CSS | 15KB | <15KB | ✓ |
| JS | 6KB | <10KB | ✓ |
| Total | 28.6KB | <35KB | ✓ |
| + Google Fonts | ~30KB | <50KB | ✓ |
| **Total Page** | ~58KB | <80KB | ✓ |

---

## Production Checklist

- [ ] All colors verified in browsers
- [ ] Typography renders correctly
- [ ] Spacing consistent across sections
- [ ] Animations smooth on target devices
- [ ] Mobile viewport optimized
- [ ] Touch targets adequate size
- [ ] Contrast ratios meet WCAG AA
- [ ] Images optimized
- [ ] No hard breakpoints (use clamp)
- [ ] Forms accessible
- [ ] Sticky button positioned correctly
- [ ] WhatsApp link formatted properly

---

## Brand DO's & DON'Ts

### ✅ DO:
- Use generous spacing for premium feel
- Maintain clean, minimal aesthetic
- Use brand colors consistently
- Emphasize natural, fresh messaging
- Keep typography hierarchy clear
- Use soft shadows and rounded corners
- Optimize for mobile first

### ❌ DON'T:
- Don't use hard shadows or drop shadows
- Don't clutter the design
- Don't use more than 3 fonts
- Don't use harsh colors or neon
- Don't make buttons too big
- Don't use auto-play videos
- Don't add unnecessary animations
- Don't forget mobile optimization

---

## References

- **Brand Colors:** Derived from nature (pineapple, forest, earth)
- **Typography:** Premium, modern, readable
- **Spacing:** Golden ratio principles
- **Animations:** Smooth, purposeful, not distracting
- **Overall:** Balance modern design with natural farming aesthetic

---

**Document Version:** 1.0  
**Last Updated:** May 2024  
**Design System Status:** Complete ✅

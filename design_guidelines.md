# Design Guidelines for Crossroads Restaurant Service Website

## Design Approach: Reference-Based (Service Industry Leaders)
Drawing inspiration from professional service companies like ServiceTitan, FieldEdge, and Toast - emphasizing trust, reliability, and technical expertise through clean, professional design.

## Core Design Elements

### A. Color Palette
**Primary Brand Colors:**
- Crossroads Teal: 180 65% 45% (from logo) - primary actions, headers
- Deep Navy: 210 85% 25% - secondary elements, text
- Professional Gray: 220 10% 55% - supporting text, borders

**Light Mode:**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Text Primary: 210 85% 15%

**Dark Mode:**
- Background: 210 25% 8%
- Surface: 210 20% 12%
- Text Primary: 0 0% 95%

### B. Typography
**Primary Font:** Inter (Google Fonts) - clean, professional
**Headings:** Font weights 600-700, sizes from text-2xl to text-5xl
**Body Text:** Font weight 400-500, sizes text-sm to text-lg
**Technical Specs:** Monospace font for equipment model numbers

### C. Layout System
**Spacing Units:** Consistent use of Tailwind units 4, 6, 8, 12, 16
- Component spacing: p-6, p-8
- Section spacing: py-12, py-16
- Element gaps: gap-4, gap-6, gap-8

### D. Component Library

**Navigation:**
- Fixed header with transparent background over hero
- Mobile hamburger menu with slide-in drawer
- Click-to-call button prominently displayed on mobile

**Hero Section:**
- Full-viewport height with professional kitchen background
- Crossroads logo prominently displayed
- Clear value proposition headline
- Primary CTA button (Request Service)
- Secondary CTA button (Call Now) with phone icon

**Service Cards:**
- Grid layout (3 columns desktop, 1-2 mobile)
- Equipment icons, service titles, brief descriptions
- Hover effects with subtle shadows

**Forms:**
- Contact form with fields: Name, Business, Phone, Email, Service Type, Message
- Service request form with equipment selection dropdown
- Real-time validation with clear error states
- Success confirmation with next steps

**Testimonials:**
- Carousel layout with customer photos/logos
- Star ratings prominently displayed
- Restaurant name and location
- Quote format with proper typography

**Trust Indicators:**
- Years of experience badge
- Certifications and licenses
- Service response time guarantee
- Emergency service availability

### E. Animations
Minimal, professional animations:
- Subtle fade-in on scroll for sections
- Smooth transitions for form interactions
- Gentle hover effects on service cards
- No distracting or playful animations

## Images Section

**Hero Image:** Large professional kitchen background showing commercial cooking equipment in use - should convey cleanliness, efficiency, and professional operation

**Service Section Images:** 
- Commercial fryer maintenance
- Industrial oven repair
- Professional griddle cleaning
- Restaurant kitchen equipment lineup

**About Section Image:** Team photo of technicians with tools and uniforms, conveying professionalism and expertise

**Testimonial Images:** Restaurant logos or professional headshots of satisfied customers

**Trust Indicators:** Certification badges, license displays, equipment manufacturer logos

## Key UX Principles
- Mobile-first responsive design
- Clear visual hierarchy with generous whitespace
- Immediate access to contact methods
- Trust-building elements prominently featured
- Fast loading with optimized images
- Accessibility compliance with proper contrast ratios
- No mention of refrigeration or HVAC services anywhere
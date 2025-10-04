# Jackson Dwellings - Luxury Custom Home Builder Design Guidelines

## Design Approach: Reference-Based (Piquemod.com.au + Luxury Portfolio Sites)

**Inspiration Sources:**
- Primary: Piquemod.com.au's asymmetric, broken-grid editorial layout
- Secondary: High-end architectural portfolio sites with scrapbook aesthetics
- Tertiary: Luxury real estate showcases with diagonal/overlapping elements

**Core Design Principle:** Sophisticated asymmetry - break traditional grid patterns while maintaining visual balance and luxury positioning.

---

## Color Palette

### Primary Colors (Dark Mode Optimized)
- **Deep Black**: 0 0% 8% (primary background)
- **Pure White**: 0 0% 98% (primary text, section backgrounds)
- **Charcoal**: 0 0% 15% (secondary backgrounds, cards)

### Gold Accents (Use Sparingly)
- **Champagne Gold**: 45 65% 62% (primary CTA backgrounds, borders, hover states)
- **Dark Gold**: 45 55% 45% (text accents, active states)
- **Gold Shimmer**: 45 75% 75% (highlights, micro-interactions)

### Neutral Greys
- **Soft Grey**: 0 0% 85% (dividers, inactive states)
- **Medium Grey**: 0 0% 50% (secondary text)
- **Deep Grey**: 0 0% 25% (tertiary backgrounds)

**IMPORTANT**: All backgrounds maintain dark sophistication - white sections float on dark canvas, creating depth.

---

## Typography

### Font Families
- **Headings**: Cormorant Garamond (serif) - luxury, refined elegance
- **Body Text**: Inter (sans-serif) - clean, readable, modern
- **Accents**: Montserrat (sans-serif) - uppercase labels, stats

### Type Scale
- **Hero H1**: text-6xl (60px) md:text-7xl (72px) font-light tracking-tight
- **Section H2**: text-4xl (36px) md:text-5xl (48px) font-light
- **Subsection H3**: text-2xl (24px) md:text-3xl (30px) font-normal
- **Body Large**: text-lg (18px) leading-relaxed
- **Body Regular**: text-base (16px) leading-relaxed
- **Labels/Chips**: text-xs (12px) uppercase tracking-wider

### Typography Treatment
- Generous line-height (1.6-1.8) for luxury feel
- Max-width prose (65ch) for body text readability
- Gold color on select keywords in headings for emphasis

---

## Layout System: Asymmetric Broken Grid

### Spacing Primitives
Use Tailwind units: **4, 8, 12, 16, 20, 24** (focus on 8, 16, 24 for primary rhythm)
- Component padding: p-8 md:p-16
- Section spacing: py-20 md:py-32
- Element gaps: gap-8 md:gap-12

### Grid Structure (Unique, Non-Traditional)
**NOT using standard 3-column feature grids**

Instead, implement:
1. **Diagonal Split Sections**: Hero and featured project use 60/40 diagonal image-to-text splits
2. **Overlapping Cards**: Project gallery cards overlap edges, creating depth with shadows
3. **Bento Box Resources**: Modular blocks of varying sizes (1x1, 2x1, 1x2 proportions)
4. **Floating Elements**: Stats chips and testimonials appear to break out of containers
5. **Asymmetric Two-Column**: Guide section uses 1fr/2fr split, not 50/50

### Container Strategy
- Full-width dark backgrounds with inner max-w-7xl containers
- White content sections "float" on dark canvas with subtle shadows
- Deliberate use of negative space on left/right to create asymmetry

---

## Component Library

### Navigation
- **Black background** with white text
- Logo (gold JD icon + black text) left-aligned
- Horizontal menu center (Home, Custom Homes, Process, Projects, Videos, About, Resources Hub, Connect)
- Gold "Book a Consult" button right-aligned
- Sticky on scroll with blur backdrop

### Buttons
- **Primary CTA**: Gold background (45 65% 62%), black text, rounded-lg, px-8 py-4
- **Secondary CTA**: Black outline, white background, hover:gold border glow
- **Tertiary Links**: Underline on hover with gold accent color
- Minimum touch target: 44px height

### Cards
- **Project Cards**: Asymmetric with dual-image reveal on hover (image shifts/crossfades)
- White background floating on dark with shadow-2xl
- Gold border-l-4 accent on hover
- Rounded-2xl corners for luxury softness

### Form Elements
- Black background inputs with white text
- Gold focus ring (ring-2 ring-gold-500)
- Floating labels with smooth transitions
- Single-column layout for simplicity

### Trust Chips
- Small pills with gold border, white background
- Subtle gold glow on hover
- Icons (checkmark, star) in gold + black text

### Data Displays
- Stats in large serif numbers (text-5xl) with small labels
- Gold dividers between stat groups
- Asymmetric alignment (not centered)

---

## Section-Specific Design

### Hero Section
- **Full-screen viewport (100vh)** with diagonal split
- Left 40%: Black overlay with gold logo watermark, H1 + subhead + dual CTAs
- Right 60%: Silent 6-8s looping video of luxury home exterior (natural light, material close-ups)
- Trust chips float at bottom in horizontal row
- Parallax scroll effect on background

### The Plan (3 Steps)
- **Horizontal timeline** with diagonal connectors (not vertical cards)
- Each step: Icon in gold circle → Title → 1 sentence → subtle gold underline
- "See the Process" link anchored bottom-right with arrow →

### The Guide (Emma & Cameron)
- **Asymmetric 1fr/2fr layout**
- Left: Portrait photo with subtle gold border frame
- Right: Empathetic copy + 3 micro-proof chips in vertical stack
- Background: Soft grey section on dark canvas

### Stakes Comparison
- **Two-column split** with central gold vertical divider
- Left column (red/dark accents): Without a plan - bullet list with × icons
- Right column (green/gold accents): With Jackson Dwellings - bullet list with ✓ icons in gold
- Scrapbook aesthetic with tilted text blocks

### Featured Project
- **Diagonal hero image** (55% screen, angled 5° right)
- Overlapping white card with project details (45% screen, slight shadow)
- Stats in bento-style grid (4 boxes, varied sizes)
- Client quote in gold quotation marks, serif italic
- "View case study" link with gold underline

### Projects Grid
- **Masonry-style asymmetric grid** (NOT standard 3-column)
- Varied heights based on image aspect ratios
- Filters (Location, Style, Budget) as gold pills above grid
- Hover: Second image crossfades in, gold border glow appears

### Place Expertise
- Dark background section with gold map outline illustration
- Location pills arranged in organic cluster (not rigid grid)
- Hover: Pills glow gold and slightly enlarge

### Videos Strip
- **Three cards in asymmetric arrangement** (first card larger, overlaps second slightly)
- Custom thumbnails with play button overlay in gold
- Titles in white serif below each

### Resources Hub (Bento Box)
- **Modular grid with varying block sizes**
- FAQs (2x1), Articles (1x2), PDFs (1x1), Knockdown Rebuild (1x1)
- Each card has gold icon, title, description, and subtle hover lift effect

### Testimonials
- **Scrapbook-style overlapping cards** tilted ±3°
- White cards with gold quotation marks
- Client names in small serif below
- Google Reviews logo + link anchored bottom

### Final CTA Band
- **Full-width black background**
- Gold heading centered
- Dual CTAs (primary + secondary) horizontally aligned
- Subtle gold particle animation in background

### Footer
- **Three-column asymmetric layout** (1fr/2fr/1fr)
- Left: Logo + tagline "Dwell well"
- Center: Navigation links in vertical columns
- Right: Contact info + social icons in gold
- Bottom bar: Privacy, T&Cs, Service area

---

## Images

### Required Images:
1. **Hero**: 6-8 second silent loop video - modern luxury home exterior, natural light, warm tones (MP4/WebM format)
2. **Guide Section**: Portrait photo of Emma & Cameron - professional, warm, approachable (PNG)
3. **Featured Project (Casa Lauren)**: Large hero shot - interior with craftsmanship details visible (JPG)
4. **Projects Grid**: 6+ project thumbnails - varied styles, high-quality architectural photography (JPG)
5. **Place Expertise**: 3-image strip - Macedon Ranges landscapes, bushfire safety features, site views (JPG)
6. **Video Thumbnails**: 3 custom stills - process overview, client interview, site walkthrough (JPG)
7. **Background Textures**: Subtle parchment/linen patterns for white sections (optional overlay PNG)

All images should emphasize natural materials, craftsmanship close-ups, and warm natural lighting.

---

## Animations & Interactions

**Micro-Interactions (Subtle, Luxury):**
- Button hover: Gentle gold glow (shadow-lg shadow-gold/30)
- Card hover: Slight lift (translateY(-4px)) with shadow increase
- Image parallax: Background images move 0.3x scroll speed
- Stats counter: Numbers animate on scroll into view
- Smooth scrolling: Polished, eased transitions between sections

**Avoid:** Heavy animations, spinning elements, flashy effects

---

## Accessibility & Performance

- WCAG AA contrast ratios maintained (gold on black = 4.8:1)
- Keyboard navigation with visible focus states (gold ring-2)
- Screen reader labels on all interactive elements
- Lazy loading for images below fold
- Optimized video with poster frame
- Mobile: Asymmetric grids stack gracefully to single column

---

## Unique Layout Mandate

**Explicitly Forbidden:**
- Standard centered hero with gradient background
- Three-column icon-title-description feature grids
- Cookie-cutter testimonial carousels
- Generic footer newsletter signups

**Required Uniqueness:**
- Diagonal splits and angled elements throughout
- Overlapping sections that break container boundaries
- Bento box modular layouts for content blocks
- Scrapbook-style tilted cards and layered elements
- Asymmetric column widths (never 50/50 splits)

This design combines Piquemod's editorial sophistication with Jackson Dwellings' luxury craftsmanship positioning, creating a memorable, high-converting experience.
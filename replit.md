# Jackson Dwellings - Luxury Custom Home Builder

## Overview

Jackson Dwellings is a luxury custom home builder website showcasing high-end residential construction services in the Macedon Ranges, Victoria, Australia. The application presents a sophisticated marketing presence with an asymmetric, editorial-style design inspired by high-end architectural portfolios. The site follows the StoryBrand framework to guide potential clients through understanding the value proposition, building process, and portfolio of completed work.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18+ with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- TanStack Query (React Query) for server state management

**UI Component System**
- Shadcn/ui component library (New York style variant) for consistent, accessible UI primitives
- Radix UI primitives for headless, accessible component foundations
- Tailwind CSS for utility-first styling with custom design tokens
- Class Variance Authority (CVA) for managing component variants

**Design System**
- Dark mode optimized color palette with champagne gold accents
- Typography system using Cormorant Garamond (serif) for headings and Inter (sans-serif) for body text
- Asymmetric, broken-grid layout philosophy inspired by luxury portfolio sites
- Mobile-first responsive design with minimum 44px touch targets

**State Management**
- React Query for asynchronous server state
- React hooks for local component state
- No global state management library (intentionally lightweight)

### Backend Architecture

**Server Framework**
- Express.js REST API server
- TypeScript for type safety across the stack
- Development middleware for hot module replacement via Vite integration

**API Design**
- RESTful conventions with `/api` prefix for all endpoints
- JSON request/response format
- Session-based authentication structure (currently placeholder)
- Request/response logging middleware for debugging

**Storage Layer**
- Drizzle ORM for type-safe database queries
- PostgreSQL as the database (via Neon serverless driver)
- In-memory storage implementation for development (MemStorage class)
- Migration management via Drizzle Kit

**Database Schema**
- Simple user authentication schema (users table with username/password)
- Prepared for expansion with project, testimonial, and resource data models
- UUID-based primary keys for scalability

### Design Philosophy Integration

The application implements principles from established UX design authorities:

**Don Norman's Design of Everyday Things**
- Clear visual affordances for all interactive elements
- Immediate feedback for user actions
- Constrained design patterns guiding correct user behavior

**Steve Krug's "Don't Make Me Think"**
- Optimized content scannability with clear visual hierarchy
- Consistent navigation patterns throughout
- Minimal cognitive load through convention adherence

**Luke Wroblewski's Mobile First**
- Mobile-first responsive design approach
- Simplified form patterns with single-column layouts
- Touch-friendly interaction targets

**Aaron Walter's Designing for Emotion**
- Personality-driven design creating emotional connection
- Functional → Reliable → Usable → Pleasurable hierarchy
- Micro-interactions and delightful details

### Project Structure

```
client/               # Frontend React application
  src/
    components/       # Reusable React components
      ui/            # Shadcn/ui component primitives
      examples/      # Component usage examples
    pages/           # Route-level page components
    hooks/           # Custom React hooks
    lib/             # Utility functions and query client
server/              # Backend Express application
  routes.ts          # API route definitions
  storage.ts         # Data persistence layer
  index.ts           # Server entry point
  vite.ts            # Vite integration for development
shared/              # Code shared between client and server
  schema.ts          # Database schemas and types
```

## External Dependencies

### Core Framework Dependencies
- **React** (^18.3.1): UI framework
- **Express** (^4.19.2): Backend web server
- **TypeScript** (^5.x): Type system for JavaScript
- **Vite** (^6.0.3): Build tool and dev server

### Database & ORM
- **Drizzle ORM** (^0.39.1): Type-safe database toolkit
- **@neondatabase/serverless** (^0.10.4): Serverless PostgreSQL driver
- **drizzle-kit**: Database migration management tool
- **postgres**: PostgreSQL client library

### UI Component Libraries
- **@radix-ui/react-***: Comprehensive set of headless accessible components (accordion, dialog, dropdown-menu, navigation-menu, popover, select, tabs, toast, tooltip, etc.)
- **shadcn/ui**: Pre-built accessible components built on Radix UI
- **lucide-react** (^0.468.0): Icon library

### Styling
- **Tailwind CSS** (^3.4.17): Utility-first CSS framework
- **class-variance-authority** (^0.7.1): Component variant management
- **tailwind-merge** & **clsx**: Class name utilities
- **tailwindcss-animate**: Animation utilities

### State Management & Data Fetching
- **@tanstack/react-query** (^5.60.5): Async state management
- **wouter** (^3.3.5): Lightweight routing library

### Form Management
- **react-hook-form** (^7.54.2): Form state management
- **@hookform/resolvers** (^3.10.0): Form validation resolvers
- **zod** (^3.24.1): TypeScript-first schema validation
- **drizzle-zod** (^0.7.0): Zod schema generation from Drizzle schemas

### Development Tools
- **@replit/vite-plugin-***: Replit-specific development plugins
- **esbuild**: JavaScript bundler for production builds
- **tsx**: TypeScript execution for development

### Typography
The application uses Google Fonts:
- Cormorant Garamond: Luxury serif for headings
- Inter: Clean sans-serif for body text
- Montserrat: Uppercase labels and accent text

### Asset Management
Images are stored in `attached_assets/generated_images/` directory and imported via Vite's asset handling with `@assets` alias.

### Session Management
- **express-session** (^1.18.1): Session middleware
- **connect-pg-simple** (^10.0.0): PostgreSQL session store

### Date Utilities
- **date-fns** (^3.6.0): Modern date utility library

### UI Enhancement Libraries
- **embla-carousel-react** (^8.6.0): Carousel/slider component
- **cmdk** (^1.1.1): Command menu component
- **vaul**: Drawer component primitive
- **recharts** (^2.15.0): Charting library (if needed for future analytics)
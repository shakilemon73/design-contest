# Crossroads Restaurant Service Website

## Overview

Crossroads Restaurant Service is a professional commercial kitchen equipment maintenance and repair company serving restaurants in the Chicago/Milwaukee region. This is a modern, responsive marketing website built to showcase their services, establish trust with potential customers, and generate service requests. The site emphasizes reliability, technical expertise, and 24/7 emergency service availability to appeal to commercial kitchen operators who depend on functioning equipment for their business operations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The application uses a modern React-based single-page application (SPA) architecture:

- **React 18** with TypeScript for type safety and modern React features
- **Vite** as the build tool for fast development and optimized production builds
- **Wouter** for lightweight client-side routing instead of React Router
- **Component-driven design** with reusable UI components organized in a clear hierarchy

### UI/UX Design System
The design follows service industry best practices inspired by professional service companies:

- **Shadcn/ui component library** for consistent, accessible UI components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **Radix UI primitives** for accessible, unstyled component foundations
- **Professional color palette** with Crossroads Teal (primary), Deep Navy (secondary), and neutral grays
- **Mobile-first responsive design** optimized for both desktop and mobile users
- **Dark/light theme support** with automatic system preference detection

### State Management
- **TanStack Query (React Query)** for server state management and caching
- **React hooks** for local component state
- **Custom hooks** for reusable stateful logic (mobile detection, toast notifications)

### Form Handling
- **React Hook Form** with **Zod** schema validation for type-safe form processing
- **Hookform/resolvers** for integrating Zod validation with React Hook Form
- Custom form components with real-time validation feedback

### Backend Architecture
The backend follows a minimal Express.js API pattern:

- **Express.js** server with TypeScript for API endpoints
- **Modular route registration** system for organizing API endpoints
- **Storage abstraction layer** with interfaces for easy database swapping
- **In-memory storage** implementation for development (ready for database integration)
- **Request/response logging** middleware for debugging and monitoring

### Database Design
Uses Drizzle ORM with PostgreSQL schema definitions:

- **Drizzle ORM** for type-safe database operations and migrations
- **PostgreSQL** as the target database (configurable via DATABASE_URL)
- **Zod integration** for runtime schema validation
- **Migration system** for database version control

### Development Workflow
- **Hot module replacement** in development via Vite
- **TypeScript strict mode** for compile-time error checking
- **Path aliases** for clean import statements
- **Monorepo structure** with shared schemas between client and server

### Performance Optimizations
- **Code splitting** and lazy loading via Vite
- **Asset optimization** with automatic image processing
- **Font preloading** for Google Fonts (Inter, Architects Daughter, etc.)
- **Responsive images** with proper aspect ratios

### Accessibility Features
- **Semantic HTML** structure throughout
- **ARIA labels and descriptions** for screen readers
- **Keyboard navigation** support for all interactive elements
- **Skip links** for main content navigation
- **Focus management** in modal dialogs and mobile menus

## External Dependencies

### Frontend Dependencies
- **@tanstack/react-query** - Server state management and caching
- **wouter** - Lightweight client-side routing
- **@radix-ui/* components** - Accessible UI primitive components
- **class-variance-authority** - Type-safe CSS class variants
- **clsx & tailwind-merge** - Conditional CSS class handling
- **react-hook-form & @hookform/resolvers** - Form handling and validation
- **date-fns** - Date manipulation utilities
- **lucide-react** - Icon library

### Backend Dependencies
- **express** - Web application framework
- **@neondatabase/serverless** - PostgreSQL database driver
- **drizzle-orm & drizzle-kit** - Database ORM and migration tools
- **drizzle-zod** - Zod integration for schema validation
- **connect-pg-simple** - PostgreSQL session store (for future authentication)

### Development Tools
- **vite** - Build tool and development server
- **typescript** - Type checking and compilation
- **tailwindcss** - CSS framework
- **postcss & autoprefixer** - CSS processing
- **@replit/* plugins** - Replit-specific development enhancements

### Database Integration
- **PostgreSQL** via Neon Database serverless driver
- **Drizzle migrations** in `/migrations` directory
- **Environment-based configuration** via DATABASE_URL

### Asset Management
- **Static assets** in `/attached_assets` directory
- **Generated images** for service showcases and hero backgrounds
- **Logo assets** with transparent backgrounds for various uses
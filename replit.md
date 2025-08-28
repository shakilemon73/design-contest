# Overview

This is a full-stack bedtime story application built with React (TypeScript) on the frontend and Express.js on the backend. The application allows users to view, play, and manage bedtime stories with features like a featured story spotlight, story library, and user management. The app is designed with a children-friendly interface using warm, neutral color themes and includes comprehensive UI components for an engaging user experience.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite as the build tool
- **UI Components**: Radix UI primitives with shadcn/ui component library for consistent, accessible design
- **Styling**: Tailwind CSS with custom CSS variables for theming, configured with warm neutral colors suitable for children
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod resolvers for validation
- **Build Configuration**: Custom scaling applied (50% transform) suggesting this is designed for high-resolution displays

## Backend Architecture
- **Framework**: Express.js with TypeScript running on Node.js
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Schema Management**: Drizzle Kit for migrations and schema management
- **API Structure**: RESTful APIs with proper error handling and request logging middleware
- **Storage Layer**: Abstracted storage interface with in-memory implementation for development, designed to easily swap for database implementation

## Data Storage Solutions
- **ORM**: Drizzle ORM chosen for type safety and performance with PostgreSQL
- **Database Schema**: Two main entities - Users and Stories with foreign key relationships
- **Migration System**: Drizzle Kit handles schema migrations in the `/migrations` directory
- **Development Mode**: Uses in-memory storage with default seed data for quick development setup

## Authentication and Authorization
- **Session Management**: Express sessions with PostgreSQL session store (connect-pg-simple)
- **User Model**: Simple user system with username, name, and avatar fields
- **Default User**: Ships with a default user "emma" for immediate functionality

## External Dependencies
- **Database**: Neon Database (serverless PostgreSQL) for production data storage
- **UI Framework**: Radix UI for accessible, unstyled UI primitives
- **Icons**: Lucide React for consistent iconography
- **Development Tools**: Replit-specific plugins for development environment integration
- **Fonts**: Google Fonts integration (Fredoka One, Inter, DM Sans, Fira Code, Geist Mono, Architects Daughter)
- **Image Assets**: Unsplash and Pixabay for story thumbnails and user avatars

## Key Design Decisions
- **Monorepo Structure**: Shared schema between client and server in `/shared` directory for type consistency
- **Component Library**: shadcn/ui chosen for rapid development with customizable, accessible components
- **Type Safety**: Full TypeScript implementation across frontend, backend, and shared schema
- **Development Experience**: Hot reloading, error overlays, and development-specific tooling for smooth development workflow
- **Responsive Design**: Mobile-first approach with responsive breakpoints and mobile-specific considerations
- **Performance**: Query caching with TanStack Query and optimized build process with Vite
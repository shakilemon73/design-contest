# Overview

This is a quantum computing dashboard application built with React, TypeScript, and Node.js. The application provides an intuitive interface for managing quantum systems, including qubits, quantum circuits, and educational content. It features a modern mobile-first design with dark/light theme support and comprehensive quantum computing tools for both learning and practical quantum operations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built with **React 18** using TypeScript and follows a component-based architecture:

- **Routing**: Uses Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management with React hooks for local state
- **Styling**: Tailwind CSS with a custom design system based on shadcn/ui components
- **Theme System**: Custom theme provider supporting dark/light modes with CSS variables
- **Component Library**: Radix UI primitives wrapped in custom components following quantum computing design guidelines

The application structure follows a mobile-first approach with:
- Bottom navigation for primary routes
- Responsive design optimized for mobile quantum computing interfaces
- Progressive disclosure of complex quantum concepts
- Visual hierarchy emphasizing clarity over complexity

## Backend Architecture

The backend uses **Express.js** with TypeScript in ESM format:

- **Server Framework**: Express.js with middleware for JSON parsing and request logging
- **Development Setup**: Vite integration for hot module replacement and development tooling
- **Storage Interface**: Abstracted storage layer with in-memory implementation (MemStorage class)
- **Route Structure**: Modular route registration system with API prefix convention

The backend follows a layered architecture pattern:
- Route handlers for HTTP request processing
- Storage interface for data persistence abstraction
- Type-safe schemas shared between frontend and backend

## Database Design

**Drizzle ORM** with PostgreSQL schema definition:

- **Schema Management**: Type-safe schema definitions using Drizzle with Zod validation
- **Database Provider**: Configured for PostgreSQL with Neon Database serverless integration
- **Migration Strategy**: Drizzle Kit for schema migrations and database management
- **Type Safety**: Full TypeScript integration with inferred types from schema

Current schema includes user management with plans for quantum circuit and qubit state persistence.

## Design System

**Quantum Computing UI Framework**:

- **Color Palette**: Quantum-themed colors (purple, blue gradients) with dark mode priority
- **Typography**: Inter for UI text, JetBrains Mono for quantum notation
- **Component Variants**: Custom button, card, and input variants optimized for quantum data visualization
- **Spacing System**: Consistent Tailwind-based spacing units
- **Accessibility**: Focus management and ARIA compliance for complex quantum interfaces

The design system draws inspiration from modern productivity tools like Linear and Notion while addressing the unique challenges of quantum computing interfaces.

# External Dependencies

## Core Technologies
- **React 18**: Frontend framework with hooks and concurrent features
- **TypeScript**: Type safety across the full stack
- **Node.js**: Runtime environment with ESM module support
- **Vite**: Build tool and development server with hot reload

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Radix UI**: Accessible component primitives for complex UI patterns
- **Lucide React**: Icon library with quantum computing relevant icons
- **shadcn/ui**: Component library foundation with custom quantum theme

## Backend Services
- **Express.js**: Web framework for API routes and middleware
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database provider
- **TanStack Query**: Server state management with caching and synchronization

## Development Tools
- **Replit Integration**: Development environment with live preview and collaboration
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS integration
- **TSX**: TypeScript execution for development server

## Quantum Computing Features
The application includes specialized components for:
- Quantum circuit visualization and manipulation
- Qubit state management and monitoring
- Educational quantum algorithm walkthroughs
- Real-time quantum system connection management
- Quantum gate operations and measurement tools
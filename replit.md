# Portfolio Website

## Overview

This is a modern portfolio website built as a personal showcase for Pathu T, featuring a full-stack architecture with React frontend and Express.js backend. The application includes a contact form, professional portfolio sections, and demonstrates expertise in AI, project management, and full-stack development.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a monorepo structure with clear separation between client, server, and shared components:

- **Frontend**: React 18 with TypeScript, using Vite as the build tool
- **Backend**: Express.js server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but currently using in-memory storage)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing

## Key Components

### Frontend Architecture
- **Component Structure**: Uses shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode support)
- **State Management**: React Query for API calls and caching
- **Routing**: Single page application with smooth scrolling navigation
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **API Layer**: Express.js with TypeScript
- **Data Storage**: Currently using in-memory storage (MemStorage class) with interface for database integration
- **Validation**: Zod schemas for request validation
- **Error Handling**: Centralized error handling middleware
- **Development**: Hot reload with Vite integration for seamless development

### Portfolio Sections
- **Hero Section**: Professional introduction with contact information
- **About Section**: Professional summary and technical skills
- **Projects Section**: Featured project showcases
- **Experience Section**: Professional timeline
- **Education Section**: Academic background and certifications
- **Contact Section**: Functional contact form with API integration

## Data Flow

1. **Client Requests**: React components make API calls using TanStack Query
2. **API Processing**: Express server validates requests with Zod schemas
3. **Data Storage**: Currently stored in memory, designed for easy database migration
4. **Response**: JSON responses with proper error handling and status codes
5. **UI Updates**: React Query manages cache and UI state updates

## External Dependencies

### Core Framework Dependencies
- **React 18**: Frontend framework with modern hooks
- **Express.js**: Backend web framework
- **TypeScript**: Type safety across the entire stack
- **Vite**: Build tool and development server

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI primitives for accessibility
- **Lucide React**: Icon library
- **shadcn/ui**: Pre-built component library

### Database and Validation
- **Drizzle ORM**: Type-safe database toolkit
- **Zod**: Runtime type validation
- **Neon Database**: PostgreSQL hosting (configured but not actively used)

### Development Tools
- **TSX**: TypeScript execution for development
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer

## Deployment Strategy

### Development Environment
- **Local Development**: Uses Vite dev server with HMR (Hot Module Replacement)
- **API Integration**: Express server runs alongside Vite in development
- **Database**: Currently using in-memory storage for rapid development

### Production Build
- **Frontend**: Vite builds optimized static assets to `dist/public`
- **Backend**: ESBuild bundles server code to `dist/index.js`
- **Static Serving**: Express serves built frontend assets in production
- **Environment Variables**: Database URL and other config via environment variables

### Database Migration Path
The application is architected for easy migration from in-memory storage to PostgreSQL:
- Drizzle configuration is complete in `drizzle.config.ts`
- Database schemas are defined in `shared/schema.ts`
- Storage interface allows swapping implementations without code changes
- Migration scripts ready via `npm run db:push`

The current in-memory storage serves as a functional prototype while maintaining the same interface as the planned database integration, making the transition seamless when database hosting is established.
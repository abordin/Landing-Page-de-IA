# ChatBot IA - Lead Generation Landing Page

## Overview

This is a modern lead generation landing page for an AI chatbot service, built with a full-stack TypeScript architecture. The application promotes AI chatbot solutions for businesses, emphasizing automation, cost reduction, and improved customer service. The landing page is designed to capture lead information and integrate with WhatsApp for immediate customer engagement.

## System Architecture

**Frontend**: React with TypeScript, Vite as build tool, Tailwind CSS for styling
**Backend**: Express.js server with TypeScript
**Database**: PostgreSQL with Drizzle ORM (configured but currently using in-memory storage)
**UI Components**: Shadcn/UI component library with Radix UI primitives
**Routing**: Wouter for client-side routing
**State Management**: TanStack Query for server state management
**Deployment**: Configured for Replit hosting environment

## Key Components

### Frontend Architecture
- **Component-based React architecture** using TypeScript for type safety
- **Landing page sections**: Hero, Benefits, How It Works, Use Cases, Statistics, Testimonials, CTA
- **Form handling**: React Hook Form with Zod validation for lead capture
- **Responsive design**: Mobile-first approach with Tailwind CSS
- **Animations**: Intersection Observer for scroll animations and smooth transitions

### Backend Architecture
- **RESTful API** using Express.js with TypeScript
- **Middleware chain**: JSON parsing, URL encoding, logging, and error handling
- **Route structure**: Centralized route registration with type-safe handlers
- **Storage abstraction**: Interface-based storage layer allowing easy database switching

### Database Design
- **Users table**: Basic user authentication structure (id, username, password)
- **Leads table**: Comprehensive lead capture (nome, email, telefone, empresa, segmento, createdAt)
- **Schema validation**: Drizzle-Zod integration for runtime type checking

## Data Flow

1. **Lead Capture**: User fills form on landing page → Client-side validation with Zod
2. **API Request**: Form submission → POST /api/leads with validated data
3. **Server Processing**: Express handler validates against schema → Stores in database
4. **Response Handling**: Success confirmation → Optional WhatsApp redirect
5. **Error Management**: Comprehensive error handling with user-friendly messages

## External Dependencies

### UI and Styling
- **Shadcn/UI**: Complete component library with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom brand colors
- **Lucide React**: Icon library for consistent iconography

### Development Tools
- **Vite**: Fast build tool with HMR and development server
- **TypeScript**: Type safety across entire application
- **Drizzle**: Type-safe ORM with PostgreSQL dialect
- **Zod**: Schema validation for forms and API endpoints

### Communication
- **WhatsApp Integration**: Direct link generation for customer engagement
- **Form validation**: Real-time validation with user feedback

## Deployment Strategy

**Development Environment**:
- Vite dev server with HMR for frontend development
- Express server with tsx for TypeScript execution
- Memory storage for rapid development iteration

**Production Build**:
- Vite builds static assets to dist/public
- ESBuild bundles server code for Node.js execution
- PostgreSQL database with environment-based configuration

**Replit Integration**:
- Custom Vite plugins for Replit-specific features
- Environment detection for development vs production
- Automated banner injection for development preview

The application follows a monorepo structure with shared TypeScript types and schemas, enabling type safety across the entire stack while maintaining clean separation of concerns between frontend and backend layers.

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- June 28, 2025. Initial setup
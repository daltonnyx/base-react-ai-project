# React + Tailwind CSS v4 + shadcn/ui Base Setup

A modern React application setup with TypeScript, Tailwind CSS v4, and shadcn/ui components.

## 🚀 Features

- ⚡ **Vite** - Lightning fast development server
- ⚛️ **React 18** with TypeScript
- 🎨 **Tailwind CSS v4** - Latest version with CSS-first configuration
- 🧩 **shadcn/ui** - Beautiful, accessible components
- 🔧 **TypeScript** - Type-safe development
- 📱 **Responsive Design** - Mobile-first approach
- 🌙 **Dark Mode Support** - Comprehensive theme system

## 📦 Included Dependencies

### Core
- React 18 with TypeScript
- Vite for build tooling
- Tailwind CSS v4 with @tailwindcss/vite plugin

### UI & Styling
- shadcn/ui components (Button, Card, Input, Label, Dialog, Table)
- Lucide React icons
- clsx and tailwind-merge for conditional styling

### State & Forms
- Zustand for state management
- React Hook Form with Zod validation
- @hookform/resolvers

### Data Fetching
- TanStack Query (React Query)
- Axios for HTTP requests

### Utilities
- date-fns for date manipulation
- Path aliases configured (@/components, @/lib, etc.)

## 🏗️ Project Structure

```
/src
├── /components/
│   ├── /ui/                                       # shadcn/ui components (CLI generated)
│   └── /[section]/custom_component                # Custom components
├── /features/                                     # Feature modules
├── /hooks/                                        # Custom hooks  
├── /lib/                                          # Utils and configurations
│   └── utils.ts                                   # cn() utility function
├── /pages/                                        # Page components
├── /services/                                     # API services
├── /types/                                        # TypeScript types
├── App.tsx
├── main.tsx
└── index.css                                      # Tailwind CSS v4 imports & theme
```

## 🎨 Theme System

The project includes a comprehensive CSS variables theme system with:

- Light and dark mode support
- Complete color palette (background, foreground, primary, secondary, etc.)
- Accessible color contrast ratios
- Customizable border radius
- Chart colors for data visualization
- Sidebar/navigation specific colors

## 🧩 Available Components

The following shadcn/ui components are pre-installed:

- `Button` - Interactive buttons with variants
- `Card` - Content containers with header, content, and footer
- `Input` - Form input fields
- `Label` - Accessible form labels
- `Dialog` - Modal dialogs and overlays
- `Table` - Data tables with proper semantics

## 🚦 Getting Started

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## 📖 Adding More Components

To add additional shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

Popular components to consider:
- `form` - Advanced form handling
- `select` - Dropdown selections
- `textarea` - Multi-line text input
- `checkbox` - Boolean selections
- `switch` - Toggle switches
- `toast` - Notification system

## 🎯 Usage Examples

The main App.tsx file demonstrates:

- Interactive state management with React hooks
- Form handling with controlled inputs
- Modal dialogs with shadcn/ui Dialog component
- Data tables with proper accessibility
- Responsive grid layouts
- Gradient text effects
- Component composition patterns

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration with Tailwind plugin and path aliases
- `components.json` - shadcn/ui configuration
- `tsconfig.json` & `tsconfig.app.json` - TypeScript configuration with path mapping
- `src/index.css` - Tailwind CSS v4 imports and complete theme system

## 💡 Tips

1. **Path Aliases**: Use `@/` imports for cleaner code organization
2. **Dark Mode**: Add the `dark` class to the HTML element to enable dark theme
3. **Styling**: Use the `cn()` utility for conditional Tailwind classes
4. **Components**: Always use the shadcn CLI instead of manual component creation
5. **Themes**: Customize colors through CSS variables in `src/index.css`

## 🌐 Deployment Ready

The project is configured for production deployment with:
- Optimized build output
- Proper base path configuration
- Tree-shaking enabled
- Asset optimization

---

Built with ❤️ using modern React development practices.


# ElectroTech - Electronic Solutions Company Website

A modern, responsive marketing website for ElectroTech, a company specializing in innovative electronic solutions for industries worldwide.

![ElectroTech Website](https://github.com/Mohammed-Ateeq-nova/electron-pulse-marketing-hub/blob/main/Screenshot%202025-05-11%20211539.png?raw=true)

## Project Overview

This website showcases ElectroTech's products, services, company information, and provides various ways for potential clients to connect with the business. The site is designed to highlight the company's technological expertise while maintaining a clean, professional aesthetic.

## Key Features

- Responsive design optimized for all devices
- Interactive global location map
- Comprehensive company information and team profiles
- Career opportunities section
- Contact form with validation
- News, references, events, and blog sections
- Modern UI with intuitive navigation

## Technologies Used

- **React 18**: Frontend library for building the user interface
- **TypeScript**: For type-safe code
- **Vite**: Build tool and development server
- **React Router**: For navigation and routing
- **TanStack Query**: For data fetching and state management
- **Tailwind CSS**: For styling and responsive design
- **Shadcn UI**: Component library for consistent UI elements
- **Mapbox GL**: For interactive maps
- **Lucide React**: For icon components
- **React Hook Form**: For form handling and validation
- **Zod**: For schema validation
- **Recharts**: For data visualization

## Getting Started

### Prerequisites

- Node.js 16.x or later
- npm or yarn package manager

### Installation

1. Clone the repository
```sh
git clone <repository-url>
cd electrotech-website
```

2. Install dependencies
```sh
npm install
# or
yarn
```

3. Start the development server
```sh
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Building for Production

```sh
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── about/      # About page components
│   ├── careers/    # Career page components
│   ├── contact/    # Contact page components
│   ├── home/       # Home page components
│   ├── layout/     # Layout components (Navbar, Footer)
│   └── ui/         # UI component library
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Page components
│   └── updates/    # News, Blog, Events pages
└── main.tsx        # Application entry point
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

[MIT](LICENSE)

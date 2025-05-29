
# Sri Datta Electronics - Defense & Aerospace Solutions

A modern, responsive corporate website for Sri Datta Electronics Pvt. Ltd., a leading company specializing in defense and aerospace electronic solutions, telemetry systems, and industrial-grade components.



## About Sri Datta Electronics

Sri Datta Electronics Pvt. Ltd. is a premier manufacturer and supplier of cutting-edge electronic solutions for defense and aerospace applications. Based in Hyderabad, India, we specialize in telemetry systems, data link systems, RF components, and custom defense software solutions.

**Company Details:**
- **GSTIN:** 36ABGCS2174P1ZR
- **Location:** Hyderabad, Telangana, India
- **Contact:** +91 9492430198 | sales@sridattaelectronics.com

## Key Features

### 🌐 Modern Web Experience
- Fully responsive design optimized for all devices
- Interactive product showcase with carousel animations
- Professional corporate branding and design
- Fast loading and optimized performance

### 📱 User-Friendly Interface
- Intuitive navigation with organized product categories
- Comprehensive product pages with detailed specifications
- Contact form with Firebase integration for real-time submissions
- Interactive location map with Google Maps integration

### 🔧 Business Features
- Complete product catalog across multiple categories
- Career opportunities section
- Company information and team profiles
- Contact management system
- Professional corporate presentation

## Product Categories

### 🛰️ Telemetry Systems
- Ground Telemetry Tracking Systems
- Airborne Telemetry Systems
- Dual Channel Telemetry Systems
- Telemetry Data Monitoring Systems
- Drone-Based Telemetry Receiving Stations

### 📡 Data Link Systems
- UHF Data Link Systems
- L-Band Data Link Systems
- S-Band Data Link Systems
- Single Channel Decommutator Systems

### ⚙️ Industrial Grade Systems
- Industrial IPCs and Panel PCs
- Network Adapters & Switches
- Automation Cards & Modules

### 🔌 Components & RF Accessories
- MIL-Grade RF & Circular Connectors
- DC-DC Converters
- Telemetry Antennas
- Low Noise Amplifiers
- Custom RF Cable Assemblies

### 💻 Services
- Custom Defense Software Solutions
- Drone-Based Sortie Services

## Technologies Used

### Frontend Framework
- **React 18** with TypeScript for type-safe development
- **Vite** for fast build tooling and development server
- **React Router** for seamless navigation

### UI & Styling
- **Tailwind CSS** for responsive and modern styling
- **Shadcn UI** component library for consistent design
- **Lucide React** for professional iconography
- **Recharts** for data visualization

### Backend Integration
- **Firebase** for contact form submissions and data storage
- **TanStack Query** for efficient data fetching and state management

### Additional Features
- **Mapbox GL** for interactive location mapping
- **React Hook Form** with **Zod** validation for form handling
- **Class Variance Authority** for component styling variants

## Getting Started

### Prerequisites
- Node.js 16.x or later
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd electron-pulse-marketing-hub
```

2. Install dependencies
```bash
npm install
```

3. Set up Firebase (if using contact form)
   - Create a Firebase project
   - Add your Firebase configuration to the contact form
   - Enable Firestore database

4. Start the development server
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:8080`

### Building for Production

```bash
npm run build
```

The production build will be generated in the `dist/` directory.

## Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── about/           # About page specific components
│   ├── careers/         # Career page components
│   ├── contact/         # Contact page components (with Firebase)
│   ├── home/            # Home page components & product carousel
│   ├── layout/          # Layout components (Navbar, Footer)
│   └── ui/              # Shadcn UI component library
├── pages/               # Main page components
│   ├── products/        # Individual product pages
│   └── updates/         # Updates and news pages
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and configurations
└── main.tsx             # Application entry point
```

## Key Pages

- **Home (/)** - Company overview with product carousel
- **About (/about)** - Detailed company information and team
- **Products (/updates)** - Complete product catalog
- **Contact (/contact)** - Contact form and location details
- **Careers (/careers)** - Job opportunities and company culture

## Firebase Integration

The contact form is integrated with Firebase Firestore for real-time message storage:
- Form submissions are automatically saved to Firestore
- Real-time validation and error handling
- Professional contact management system

## Deployment

This project can be deployed to any static hosting service:
- **Vercel** (recommended for React projects)
- **Netlify**
- **GitHub Pages**
- **Firebase Hosting**

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Company Information

**Sri Datta Electronics Pvt. Ltd.**
- F. NO: 201, CHAITANYA CHAMBERS
- SAI NAGAR, CHAITANYAPURI
- HYDERABAD-500060 (TS), INDIA
- Tel: 040-35868174
- Mobile: +91 9492430198
- Email: sales@sridattaelectronics.com
- GSTIN: 36ABGCS2174P1ZR

## License

© 2024 Sri Datta Electronics Pvt. Ltd. All rights reserved.

---

*Empowering Defense & Aerospace with Innovative Electronic Solutions*

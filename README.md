# AI24 Web

A modern, animated, and responsive corporate website built with React and Vite. 

## 🚀 Features

- **Modern Tech Stack**: Bootstrapped with React 19 and Vite for lightning-fast development and optimized production builds.
- **Smooth Animations**: Integrated with `framer-motion` for page transitions and `gsap` for complex UI animations.
- **Smooth Scrolling**: Implements `lenis` for a seamless and premium scrolling experience across all devices.
- **Dynamic Routing**: Uses `react-router-dom` for client-side routing, featuring smooth `AnimatePresence` transitions between pages.
- **Engaging UI Elements**: Features custom cursors, interactive background layers, and beautiful SVG icons via `lucide-react`.
- **Responsive Design**: Fully responsive layout ensuring a consistent experience on desktop, tablet, and mobile.
- **Multiple Pages**: Includes sections for Home, About, Capabilities, Industries, Case Studies, Insights, Careers, Contact, Global Presence, and Automation Solutions.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) & [GSAP](https://gsap.com/)
- **Smooth Scroll**: [Lenis](https://lenis.studiofreight.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 📂 Project Structure

```text
src/
├── components/       # Reusable UI components (Navbar, Footer, CustomCursor, etc.)
├── pages/            # Page components for each route (Home, About, Contact, etc.)
├── App.jsx           # Main application component with routing and smooth scroll setup
├── main.jsx          # Application entry point
└── index.css         # Global styles and tailwind/custom CSS variables
```

## 🏃‍♂️ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository and navigate to the project directory:

```bash
cd ai24web
```

2. Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Running Locally

To start the development server with Hot Module Replacement (HMR):

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open your browser and navigate to the URL provided in the terminal (usually `http://localhost:5173`).

### Building for Production

To create an optimized production build:

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The build output will be generated in the `dist` directory, ready to be deployed.

## 📝 Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the app for production.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Locally previews the production build.

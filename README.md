# Landing Page Demo

A modern, responsive landing page built with React featuring a beautiful blue color scheme and Helvetica font family.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Blue Color Scheme**: Consistent blue palette throughout the application
- **Helvetica Font**: Professional typography using Helvetica font family
- **Component-Based**: Modular React components for easy maintenance

## Components

- **Navbar**: Fixed navigation with smooth scrolling links
- **Hero Section**: Full-screen hero with animated floating cards
- **Bento Grid**: Feature showcase in an attractive grid layout
- **Pricing Cards**: Interactive pricing with monthly/annual toggle
- **Testimonials**: Customer reviews with star ratings
- **Footer**: Comprehensive footer with links and contact information

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation component
│   ├── Hero.jsx        # Hero section
│   ├── BentoGrid.jsx   # Feature grid
│   ├── PricingCards.jsx # Pricing section
│   ├── Testimonials.jsx # Customer reviews
│   ├── Footer.jsx      # Footer component
│   └── *.css           # Component-specific styles
├── pages/              # Page components
│   └── Landing.jsx     # Main landing page
├── App.jsx             # Main app component
├── App.css             # App-specific styles
├── global.css          # Global styles and variables
└── index.js            # Entry point
```

## Customization

### Colors
The color scheme is defined in CSS variables in `src/global.css`:
- `--primary-blue`: #2563eb
- `--secondary-blue`: #1d4ed8
- `--light-blue`: #3b82f6
- `--lighter-blue`: #60a5fa
- `--dark-blue`: #1e40af
- `--accent-blue`: #dbeafe

### Font
The application uses Helvetica font family as specified in the global CSS.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE). 
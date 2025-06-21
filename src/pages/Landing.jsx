import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import PricingCards from '../components/PricingCards';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Landing = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <Hero />
      <BentoGrid />
      <PricingCards />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Landing; 
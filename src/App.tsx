import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { ServicesSection } from './components/ServicesSection';
import { CostCalculator } from './components/CostCalculator';
import { TestimonialsSlider } from './components/TestimonialsSlider';
import { WorksGallery } from './components/WorksGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-amber-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <HeroSlider />
        <ServicesSection />
        <CostCalculator />
        <TestimonialsSlider />
        <WorksGallery />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BrandStrip from './components/BrandStrip';
import SignatureRows from './components/SignatureRows';
import FramesCollection from './components/FramesCollection';
import CustomCommissionStudio from './components/CustomCommissionStudio';
import AtelierStory from './components/AtelierStory';
import Craftsmanship from './components/Craftsmanship';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import ContactFooter from './components/ContactFooter';
import FloatingAction from './components/FloatingAction';

export default function App() {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('frames');
  const [customStudioCategory, setCustomStudioCategory] = useState('frames');

  // Open custom commission configurator
  const handleOpenCommission = (catId = 'frames') => {
    setCustomStudioCategory(catId);
    const element = document.getElementById('custom-studio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Select category from 3-row showcase
  const handleSelectCategory = (catId) => {
    setActiveCategoryFilter(catId);
    const element = document.getElementById('frames-showcase');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-parchment-100 selection:bg-amberGold-100 selection:text-cabin-900">
      
      {/* Navigation */}
      <Navbar onOpenCommission={() => handleOpenCommission('frames')} />

      {/* Main Content */}
      <main className="flex-1">
        
        {/* Hero Section (Welcome Statement & Brand Showcase from Image 1) */}
        <Hero
          onOpenCommission={() => handleOpenCommission('frames')}
        />

        {/* Artisanal Heritage Strip */}
        <BrandStrip />

        {/* Wireframe Image 2: Exact 3 Featured Rows (Frames, Crochet action figures, painting postcards) */}
        <SignatureRows
          onSelectCategory={handleSelectCategory}
        />

        {/* Wireframe Image 3: Exact Sub-collection Grid for "Frames" (Crochet flowers frames, Himachal flower frames, Painting frames) */}
        <FramesCollection
          activeCategoryFilter={activeCategoryFilter}
          setActiveCategoryFilter={setActiveCategoryFilter}
          onOpenCommission={handleOpenCommission}
        />

        {/* Custom Commission Studio: Interactive Configurator */}
        <CustomCommissionStudio defaultCategory={customStudioCategory} />

        {/* Atelier Story: Himachal Origin & Original Brand Card */}
        <AtelierStory />

        {/* Craftsmanship & Materials */}
        <Craftsmanship />

        {/* Social Proof & Reviews */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FaqSection />

      </main>

      {/* Footer & Direct Atelier Contacts */}
      <ContactFooter onOpenCommission={() => handleOpenCommission('frames')} />

      {/* Floating Action WhatsApp Button */}
      <FloatingAction onOpenCommission={() => handleOpenCommission('frames')} />

    </div>
  );
}

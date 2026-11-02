/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { PortfolioImageProvider } from './context/PortfolioImageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectSection } from './components/ProjectSection';
import { SkillsSection } from './components/SkillsSection';
import { InterestsSection } from './components/InterestsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';
import { DeveloperGuideModal } from './components/DeveloperGuideModal';
import { ImageManagerModal } from './components/ImageManagerModal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isGuideModalOpen, setIsGuideModalOpen] = useState(false);

  return (
    <PortfolioImageProvider>
      <div className="min-h-screen bg-[#080c15] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
        {/* Top Navbar */}
        <Navbar onOpenCvModal={() => setIsCvModalOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1">
          <HeroSection 
            onOpenCvModal={() => setIsCvModalOpen(true)} 
            onOpenGuideModal={() => setIsGuideModalOpen(true)}
          />
          <AboutSection />
          <ExperienceSection />
          <ProjectSection 
            onOpenGuideModal={() => setIsGuideModalOpen(true)} 
          />
          <SkillsSection />
          <InterestsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer 
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onOpenGuideModal={() => setIsGuideModalOpen(true)}
        />

        {/* Interactive Modals */}
        <CVModal 
          isOpen={isCvModalOpen} 
          onClose={() => setIsCvModalOpen(false)} 
        />

        <DeveloperGuideModal 
          isOpen={isGuideModalOpen} 
          onClose={() => setIsGuideModalOpen(false)} 
        />

        {/* In-Browser Live Photo & Screenshot Manager */}
        <ImageManagerModal />
      </div>
    </PortfolioImageProvider>
  );
}

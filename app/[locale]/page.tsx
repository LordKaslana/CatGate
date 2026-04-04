'use client';

import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FeaturesSection } from '@/components/FeaturesSection';
import { HowItWorks } from '@/components/HowItWorks';
import { CallToAction } from '@/components/CallToAction'; 
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import '../styles/animations.css';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <Hero />
      <FeaturesSection />
      <HowItWorks />
      <CallToAction />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ImpactTracker from './components/ImpactTracker';
import InstitutionalOrders from './components/InstitutionalOrders';
import Testimonials from './components/Testimonials';
import DonationCTA from './components/DonationCTA';
import Footer from './components/Footer';
import React, { useState } from 'react';
import { CartProvider } from './context/CartContext';
import CartSidebar from './components/CartSidebar';
import CheckoutModal from './components/CheckoutModal';
import LegalModal from './components/LegalModal';

export default function App() {
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | 'our-story' | null>(null);

  return (
    <CartProvider>
      <div className="min-h-screen bg-sand-100 font-body text-denim-900 selection:bg-denim-600 selection:text-sand-50">
        <Navbar />
        <CartSidebar />
        <CheckoutModal />
        <LegalModal
          type={activeLegalModal}
          isOpen={activeLegalModal !== null}
          onClose={() => setActiveLegalModal(null)}
        />
        <main>
          <Hero onOpenOurStory={() => setActiveLegalModal('our-story')} />
          <ProductGrid />
          <ImpactTracker />
          <InstitutionalOrders />
          <Testimonials />
          <DonationCTA />
        </main>
        <Footer onOpenLegalModal={setActiveLegalModal} />
      </div>
    </CartProvider>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import ImpactTracker from './components/ImpactTracker';
import InstitutionalOrders from './components/InstitutionalOrders';
import DonationCTA from './components/DonationCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-sand-100 font-body text-denim-900 selection:bg-denim-600 selection:text-sand-50">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <ImpactTracker />
        <InstitutionalOrders />
        <DonationCTA />
      </main>
      <Footer />
    </div>
  );
}

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/pages/HomePage';
import { AcupuncturePage } from '@/app/pages/AcupuncturePage';
import { HowItWorksPage } from '@/app/pages/HowItWorksPage';
import { PricingPage } from '@/app/pages/PricingPage';
import { FAQsPage } from '@/app/pages/FAQsPage';
import { ForVetsPage } from '@/app/pages/ForVetsPage';
import { ContactPage } from '@/app/pages/ContactPage';
import { PrivacyPage } from '@/app/pages/PrivacyPage';
import { TermsPage } from '@/app/pages/TermsPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-primary">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/acupuncture" element={<AcupuncturePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/for-vets" element={<ForVetsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

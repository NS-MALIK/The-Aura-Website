import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, ExternalLink } from 'lucide-react';
import { useState } from 'react';

import Home from './pages/Home';
import ArticleView from './pages/ArticleView';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import AboutContact from './pages/AboutContact';
import CategoryView from './pages/CategoryView';
export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-[#FDFBF7] text-stone-900 font-sans">
        
        {/* Global Site-Wide Header */}
        <header className="sticky top-0 z-50 bg-[#FDFBF7]/95 backdrop-blur-md border-b border-stone-200">
          
          {/* FTC / Amazon Affiliate Disclosure Top Banner */}
          <div className="bg-stone-900 text-stone-300 text-[11px] py-1.5 px-4 text-center tracking-wide font-light">
            <span>Affiliate Disclosure: We earn a commission through Amazon qualifying purchases at no extra cost to you.</span>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-20 flex items-center justify-between">
              
              {/* Logo / Primary Brand Keyword */}
              <Link to="/" className="text-3xl font-serif font-bold tracking-tight text-stone-900">
                The <span className="text-amber-800 font-normal">Aura</span>
              </Link>

              {/* Main Crawler-Friendly Navigation Menu */}
              <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-stone-700">
                <Link to="" className="hover:text-amber-800 transition">Home</Link>
                <Link to="category/Skincare" className="hover:text-amber-800 transition">Skincare</Link>
                <Link to="category/Tech" className="hover:text-amber-800 transition">Tech</Link>
                <Link to="category/Home-Decor" className="hover:text-amber-800 transition">Home Decor</Link>
                <Link to="/about-contact" className="hover:text-amber-800 transition">About & Contact</Link>
                <a 
                  href="https://a.co/d/04enBydA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center space-x-1 text-amber-800 font-semibold hover:underline"
                >
                  <span>Amazon Storefront</span>
                  <ExternalLink size={12} />
                </a>
              </nav>

              {/* Mobile Menu Toggle Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-stone-700 hover:text-stone-900 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>

          {/* Responsive Mobile Drawer Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white border-b border-stone-200 px-6 py-6 space-y-4 shadow-xl">
              <Link 
                to="/" 
                onClick={() => setMobileMenuOpen(false)} 
                className="block text-stone-800 font-medium text-base hover:text-amber-800"
              >
                Home
              </Link>
              <Link 
                to="category/Skincare" 
                onClick={() => setMobileMenuOpen(false)} 
                className="block text-stone-800 font-medium text-base hover:text-amber-800"
              >
                Skincare
              </Link>
              <Link 
                to="category/Tech" 
                onClick={() => setMobileMenuOpen(false)} 
                className="block text-stone-800 font-medium text-base hover:text-amber-800"
              >
                Tech
              </Link>
              <Link 
                to="category/Home-Decor" 
                onClick={() => setMobileMenuOpen(false)} 
                className="block text-stone-800 font-medium text-base hover:text-amber-800"
              >
                Home Decor
              </Link>
              <Link 
                to="/about-contact" 
                onClick={() => setMobileMenuOpen(false)} 
                className="block text-stone-800 font-medium text-base hover:text-amber-800"
              >
                About Us & Contact
              </Link>
              <a 
                href="https://a.co/d/04enBydA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-between pt-4 border-t border-stone-100 text-amber-800 font-semibold"
              >
                <span>Amazon Storefront</span>
                <ExternalLink size={16} />
              </a>
            </div>
          )}
        </header>

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:slug" element={<ArticleView />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/about-contact" element={<AboutContact />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/category/:categoryName" element={<CategoryView />} />
          </Routes>
        </main>

        {/* Publication Footer with E-E-A-T Disclosures */}
        <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
            <div className="md:col-span-2">
              <h3 className="text-white font-serif text-2xl mb-3">The Aura</h3>
              <p className="leading-relaxed text-stone-400 font-light max-w-md">
                Your trusted digital publication for curated skincare routines, tech essentials, and home design guides optimized for authentic product research.
              </p>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Pillars</h4>
              <ul className="space-y-2">
                <li><Link to="/category/Skincare" className="hover:text-white transition">Skincare</Link></li>
                <li><Link to="/category/Tech" className="hover:text-white transition">Tech Essentials</Link></li>
                <li><Link to="/category/Home-Decor" className="hover:text-white transition">Home Decor</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3">Trust & Legal</h4>
              <ul className="space-y-2">
                <li><Link to="/about-contact" className="hover:text-white transition">About Us & Contact</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-white transition">Privacy Policy & Disclosure</Link></li>
                <li><Link to="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-stone-800 text-center text-xs text-stone-500">
            &copy; {new Date().getFullYear()} The Aura Publication. All rights reserved. Designated Amazon Associate affiliate site.
          </div>
        </footer>
      </div>
    </Router>
  );
}
// src/pages/PrivacyPolicy.jsx
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-xs text-stone-500 hover:text-stone-900 mb-8 transition">
          <ArrowLeft size={14} className="mr-1" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-3xl font-serif text-stone-900 mb-6">Privacy Policy</h1>
        <div className="prose prose-stone text-stone-700 space-y-4 font-light text-base">
          <p>Effective date: August 3, 2026</p>
          <p>At Aura & Object, accessible from our website, the privacy of our visitors is a top priority. This document outlines information collected and recorded and how we use it.</p>
          <h2 className="text-xl font-serif text-stone-900 pt-4">Google AdSense & Cookies</h2>
          <p>Google uses cookies to serve ads based on prior visits to our website. Users may opt out of personalized advertising by visiting Google Ads Settings.</p>
        </div>
      </div>
    </div>
  );
}
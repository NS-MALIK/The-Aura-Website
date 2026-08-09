// src/pages/Terms.jsx
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-xs text-stone-500 hover:text-stone-900 mb-8 transition">
          <ArrowLeft size={14} className="mr-1" />
          <span>Back to Home</span>
        </Link>
        <h1 className="text-3xl font-serif text-stone-900 mb-6">Terms and Conditions</h1>
        <div className="prose prose-stone text-stone-700 space-y-4 font-light text-base">
          <p>Welcome to Aura & Object!</p>
          <p>Some links on this website are affiliate links, meaning we earn a commission if you make a purchase through them at no extra cost to you.</p>
        </div>
      </div>
    </div>
  );
}
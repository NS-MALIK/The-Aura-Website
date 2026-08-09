import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink, Sparkles, Filter, Mail, CheckCircle2 } from 'lucide-react';
import postsData from '../data/posts.json';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const categories = ['All', 'Skincare', 'Tech', 'Home Decor'];

  const filteredPosts = selectedCategory === 'All' 
    ? postsData 
    : postsData.filter(post => post.category.toLowerCase() === selectedCategory.toLowerCase());

  // Editor's Choice 3-grid items
  const editorsChoicePosts = postsData.slice(0, 3);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setIsSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="bg-[#FDFBF7] py-8 space-y-20">
      
      {/* 1. 3D-Style Soft Colored Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#F4EFEB] via-[#EFECE6] to-[#E9E4DC] rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden border border-stone-300/60 shadow-xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Value Proposition Content */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur border border-amber-900/10 text-amber-900 px-4 py-1.5 rounded-full text-xs font-medium mb-6 shadow-sm">
                <Sparkles size={14} className="text-amber-800" />
                <span>Verified Skincare, Tech & Home Decor Guides</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-stone-900 mb-6 leading-[1.15]">
                Curating soft spaces and trusted daily essentials.
              </h1>
              
              <p className="text-stone-700 text-lg font-light max-w-xl mb-8 leading-relaxed">
                Your premier digital publication for high-converting product roundups, aesthetic home decor ideas, and reliable tech reviews tailored for US buyers.
              </p>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://amazon.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-medium transition flex items-center space-x-2 shadow-md"
                >
                  <span>Amazon Storefront</span>
                  <ExternalLink size={16} />
                </a>
                <a 
                  href="#editors-choice"
                  className="px-8 py-4 bg-white/90 hover:bg-white text-stone-900 border border-stone-300 rounded-xl font-medium transition shadow-sm"
                >
                  Explore Top Picks
                </a>
              </div>
            </div>

            {/* 3D Perspective Visual Stack */}
            <div className="lg:col-span-5 relative perspective-1000 hidden sm:block">
              <div className="relative w-full h-[360px] transform rotate-y-[-6deg] rotate-x-[6deg]">
                <div className="absolute top-0 right-0 w-72 bg-white/95 backdrop-blur border border-stone-200 rounded-2xl p-6 shadow-2xl z-20">
                  <span className="text-[10px] uppercase tracking-widest text-amber-800 font-bold">Skincare Review</span>
                  <h3 className="font-serif text-lg text-stone-900 mt-1 mb-1">Glass Skin Device</h3>
                  <p className="text-stone-500 text-xs font-light">At-home light therapy performance tested.</p>
                </div>
                <div className="absolute top-24 right-12 w-72 bg-stone-900 text-white rounded-2xl p-6 shadow-2xl z-10">
                  <span className="text-[10px] uppercase tracking-widest text-amber-400 font-bold">Quiet Luxury</span>
                  <h3 className="font-serif text-lg mt-1 mb-1">Decor Under $50</h3>
                  <p className="text-stone-300 text-xs font-light">Subtle textures for well-lived spaces.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Featured / Editor's Choice Posts (3-Grid Layout) */}
      <section id="editors-choice" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-bold">Hand-Picked Selections</span>
          <h2 className="text-3xl font-serif text-stone-900 mt-1">Editor's Choice Roundups</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {editorsChoicePosts.map((post) => (
            <article key={post.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-200/80 hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-amber-800 text-white text-[10px] uppercase tracking-wider px-3 py-1 rounded-full font-bold shadow-sm">
                  Top Rated
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs text-stone-400 mb-2">{post.date} &bull; {post.readTime}</div>
                  <h3 className="font-serif text-xl text-stone-900 group-hover:text-amber-800 transition mb-3 leading-snug">
                    <Link to={`/article/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-stone-600 text-sm font-light leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>
                <Link 
                  to={`/article/${post.slug}`}
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-amber-800 transition"
                >
                  <span>Read Full Review</span>
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Latest Articles Feed with Categories & Crawler-Friendly Links */}
      <section id="feed" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-stone-200 pt-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold">Chronological Archive</span>
            <h2 className="text-3xl font-serif text-stone-900 mt-1">Latest Publications</h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center space-x-2 bg-stone-200/50 p-1.5 rounded-lg border border-stone-200">
            <Filter size={14} className="ml-2 text-stone-500" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 text-xs font-medium rounded-md transition ${
                  selectedCategory === cat 
                    ? 'bg-white text-stone-900 shadow-sm' 
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-stone-200/80 hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="object-cover w-full h-full group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-stone-900 text-xs px-3 py-1 rounded-full font-medium shadow-sm">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="text-xs text-stone-400 mb-2">{post.date} &bull; {post.readTime}</div>
                  <h3 className="font-serif text-xl text-stone-900 group-hover:text-amber-800 transition mb-3 leading-snug">
                    <Link to={`/article/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-stone-600 text-sm font-light leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>
                <Link 
                  to={`/article/${post.slug}`}
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-stone-900 group-hover:text-amber-800 transition"
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Standard HTML Pagination Anchor Tags for Google Crawler Link Juice */}
        <div className="mt-12 flex justify-center items-center space-x-2">
          <span className="px-4 py-2 bg-stone-900 text-white text-xs font-semibold rounded-lg">1</span>
          <a href="#feed" className="px-4 py-2 bg-white border border-stone-300 text-stone-700 text-xs font-semibold rounded-lg hover:bg-stone-50 transition">2</a>
          <a href="#feed" className="px-4 py-2 bg-white border border-stone-300 text-stone-700 text-xs font-semibold rounded-lg hover:bg-stone-50 transition">Next &rarr;</a>
        </div>
      </section>

      {/* 4. Newsletter Signup / Lead Magnet */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFECE6] rounded-3xl p-8 sm:p-14 border border-stone-300/60 shadow-md flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-2 text-amber-800 text-xs font-bold uppercase tracking-wider mb-2">
              <Mail size={16} />
              <span>Join Our Weekly Curation</span>
            </div>
            <h2 className="text-3xl font-serif text-stone-900 mb-3">Get the Quiet Luxury Shopping Guide</h2>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Subscribe to receive our exclusive list of top-rated Amazon finds, skincare routines, and minimalist decor checklists straight to your inbox. No spam.
            </p>
          </div>

          <div className="w-full lg:w-auto">
            {isSubscribed ? (
              <div className="bg-white border border-emerald-200 text-emerald-800 px-6 py-4 rounded-2xl flex items-center space-x-3 shadow-sm">
                <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                <span className="text-sm font-medium">Thank you for subscribing! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <input 
                  type="email" 
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address" 
                  className="px-5 py-3.5 rounded-xl border border-stone-300 focus:outline-none focus:border-stone-900 text-sm bg-white min-w-[280px]"
                />
                <button 
                  type="submit"
                  className="px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-medium text-sm transition shadow-md whitespace-nowrap"
                >
                  Get the Guide
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Google AdSense Banner Slot */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-stone-100 border border-dashed border-stone-300 rounded-2xl p-8 text-center text-stone-400 text-xs">
          [Google AdSense Responsive In-Feed Ad Slot]
        </div>
      </section>

    </div>
  );
}

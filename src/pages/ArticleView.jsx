import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ChevronRight, Calendar, Clock, ExternalLink, 
  CheckCircle, XCircle, ChevronDown, ChevronUp, MessageSquare 
} from 'lucide-react';
import postsData from '../data/posts.json';
import favicon from '/assets/favicon.svg';

export default function ArticleView() {
  const { slug } = useParams();
  
  // Find current post based on URL slug, fallback to first if not found[cite: 1]
  const post = postsData.find(p => p.slug === slug) || postsData[0];

  // State for FAQ accordions and user comments[cite: 1]
  const [openFaq, setOpenFaq] = useState(null);
  const [comments, setComments] = useState([
    { id: 1, name: "Sarah M.", text: "This guide was extremely helpful! Decided to try out the product mentioned.", date: "Yesterday" }
  ]);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newCommentName && newCommentText) {
      setComments([...comments, { id: Date.now(), name: newCommentName, text: newCommentText, date: "Just now" }]);
      setNewCommentName('');
      setNewCommentText('');
    }
  };

  // Filter out current post for the "Related Articles" section automatically[cite: 1]
  const relatedPosts = postsData.filter(p => p.slug !== post.slug).slice(0, 2);

  // Dynamic SEO variables
  const pageTitle = `${post.title} | Curated Shopping Guide`;
  const metaDescription = `${post.excerpt.slice(0, 140)}... Check prices and availability on Amazon today!`;
  const canonicalUrl = window.location.href;

  return (
    <>
      {/* Dynamic SEO & Open Graph Meta Tags Header */}
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook / Pinterest / LinkedIn Meta Tags */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={post.image} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="Naila Curates" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={post.image} />
      </Helmet>

      <article className="bg-[#FDFBF7] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Breadcrumb Navigation (Home > Category > Post Title) */}
          <nav className="flex items-center space-x-2 text-xs text-stone-500 font-medium" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-stone-900 transition">Home</Link>
            <ChevronRight size={14} className="text-stone-400" />
            <Link to={`/category/${post.category}`} className="hover:text-stone-900 transition">{post.category}</Link>
            <ChevronRight size={14} className="text-stone-400" />
            <span className="text-stone-900 truncate max-w-xs">{post.title}</span>
          </nav>

          {/* Article Header & E-E-A-T Metadata */}
          <header className="space-y-6 border-b border-stone-200 pb-8">
            <span className="bg-amber-800 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
              {post.category}
            </span>
            
            {/* H1: Main Keyword + Power Word/Modifier (Strictly 1 per page) */}
            <h1 className="text-3xl sm:text-5xl font-serif text-stone-900 leading-tight">
              {post.title}
            </h1>

            {/* Author E-E-A-T Meta: Author Name, Last Updated Date, & Read Time */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-stone-500 pt-2">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-amber-900 text-white flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                  <img src={favicon} alt="Naila" className="w-full h-full object-cover" />
                </div>
                <span className="font-semibold text-stone-800">Naila (Curated by Naila)</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </header>

          {/* Table of Contents (TOC) with Jump Links matching fragment IDs */}
          <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm">
            <h3 className="font-serif font-bold text-stone-900 text-base mb-3">Table of Contents</h3>
            <ul className="space-y-2 text-sm text-stone-600">
              <li><a href="#introduction" className="hover:text-amber-800 transition">1. Introduction & Overview</a></li>
              <li><a href="#quick-comparison" className="hover:text-amber-800 transition">2. Featured Product Quick Comparison</a></li>
              <li><a href="#in-depth-review" className="hover:text-amber-800 transition">3. In-Depth Product Breakdown & Pros/Cons</a></li>
              <li><a href="#faq" className="hover:text-amber-800 transition">4. Frequently Asked Questions (FAQ)</a></li>
              <li><a href="#conclusion" className="hover:text-amber-800 transition">5. Final Recommendation Summary</a></li>
            </ul>
          </div>

          {/* Introduction Section: Hook user, state search intent, LSI keywords, FTC Disclosure */}
          <section id="introduction" className="prose prose-stone max-w-none text-stone-700 font-light leading-relaxed space-y-4">
            <p className="text-lg font-normal text-stone-900">
              {post.excerpt}
            </p>
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }} 
              className="space-y-4 [&>a]:text-amber-800 [&>a]:underline [&>a]:font-medium hover:[&>a]:text-stone-900"
            />
            <div className="bg-stone-900 text-stone-300 text-xs p-4 rounded-xl font-light">
              <strong>FTC / Amazon Disclosure:</strong> This post contains affiliate links. If you use these links to buy something we may earn an affiliate commission at no additional cost to you.
            </div>
          </section>

          {/* Featured Image */}
          <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-stone-100 shadow-md">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>

          {/* Featured Product Quick Comparison Box / Grid */}
          <section id="quick-comparison" className="bg-[#F4EFEB] border border-stone-300/60 rounded-3xl p-8 space-y-6">
            <div className="text-center max-w-lg mx-auto">
              <span className="text-xs uppercase tracking-widest text-amber-800 font-bold">Top Recommendation</span>
              <h2 className="text-2xl font-serif text-stone-900 mt-1">Editor's Choice Top Pick</h2>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
              <div className="flex items-center space-x-4">
                <img src={post.image} alt={post.topPick ? post.topPick.name : post.title} className="w-20 h-20 rounded-xl object-cover bg-stone-100 shrink-0" />
                <div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2.5 py-1 rounded">Best Overall</span>
                  <h3 className="font-serif text-lg text-stone-900 mt-1">
                    {post.topPick ? post.topPick.name : post.title}
                  </h3>
                  <p className="text-xs text-stone-500 font-light">
                    {post.topPick ? post.topPick.rating : "Rated 4.8 / 5 Stars by US Shoppers"}
                  </p>
                </div>
              </div>

              <a 
                href={post.topPick ? post.topPick.affiliateUrl : "https://a.co/d/00Q3O7SB"} 
                target="_blank" 
                rel="sponsored noopener noreferrer"
                className="px-6 py-3.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-medium text-xs transition flex items-center space-x-2 shrink-0 shadow"
              >
                <span>Check Price on Amazon</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </section>

          {/* Main Section Heading & In-Depth Pros/Cons Breakdown */}
          <section id="in-depth-review" className="space-y-6">
            <h2 className="text-2xl font-serif text-stone-900">What to Look For & Performance Breakdown</h2>
            <p className="text-stone-600 text-sm font-light leading-relaxed">
              Evaluating craftsmanship, functionality, and overall user experience is essential when making your purchase decision. Here is a detailed breakdown of the pros and cons for this selection.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Pros */}
              <div className="bg-emerald-50/60 border border-emerald-200 rounded-2xl p-6 space-y-3">
                <h3 className="font-serif font-bold text-emerald-900 text-base flex items-center space-x-2">
                  <CheckCircle size={18} className="text-emerald-700" />
                  <span>The Pros</span>
                </h3>
                <ul className="space-y-2 text-xs text-stone-700">
                  {(post.pros || [
                    "Sleek ergonomic design fitting easily into travel bags or vanities.",
                    "Noticeable performance improvements with regular usage.",
                    "High quality manufacturing standards backed by solid durability."
                  ]).map((pro, idx) => (
                    <li key={idx} className="flex items-start space-x-2"><span>&bull;</span><span>{pro}</span></li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="bg-rose-50/60 border border-rose-200 rounded-2xl p-6 space-y-3">
                <h3 className="font-serif font-bold text-rose-900 text-base flex items-center space-x-2">
                  <XCircle size={18} className="text-rose-700" />
                  <span>Things to Consider</span>
                </h3>
                <ul className="space-y-2 text-xs text-stone-700">
                  {(post.cons || [
                    "High demand frequently causes temporary inventory shortages.",
                    "Requires routine application or care for optimal longevity."
                  ]).map((con, idx) => (
                    <li key={idx} className="flex items-start space-x-2"><span>&bull;</span><span>{con}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ Section (Accordion HTML structure) */}
          <section id="faq" className="space-y-6 pt-6 border-t border-stone-200">
            <h2 className="text-2xl font-serif text-stone-900">Frequently Asked Questions</h2>
            
            <div className="space-y-3">
              {(post.faqs || [
                { q: "How often should I use this item or product?", a: "For optimal results, follow standard recommended schedules integrated into your daily routine." },
                { q: "Are these items covered by standard Amazon returns?", a: "Yes, all recommended items fulfilled via Amazon qualify for standard 30-day return policies." }
              ]).map((faq, index) => (
                <div key={index} className="bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm">
                  <button 
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center font-medium text-stone-900 text-sm hover:bg-stone-50 transition"
                  >
                    <span>{faq.q}</span>
                    {openFaq === index ? <ChevronUp size={18} className="text-stone-500" /> : <ChevronDown size={18} className="text-stone-500" />}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 text-xs text-stone-600 font-light leading-relaxed border-t border-stone-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Conclusion & Final Buying Guide Recommendation Summary */}
          <section id="conclusion" className="bg-white border border-stone-200 rounded-3xl p-8 space-y-4 shadow-sm">
            <h2 className="text-2xl font-serif text-stone-900">Conclusion & Final Buying Guide Recommendation Summary</h2>
            <div 
              dangerouslySetInnerHTML={{ 
                __html: post.conclusion || `To wrap up our review on ${post.title}, choosing this solution provides exceptional everyday utility and long-term value. Be sure to check active availability and secure your order directly through our verified storefront link below.` 
              }} 
              className="text-stone-600 text-sm font-light leading-relaxed space-y-3 [&>a]:text-amber-800 [&>a]:underline [&>a]:font-medium hover:[&>a]:text-stone-900"
            />
            <div className="pt-2">
              <a 
                href={post.topPick ? post.topPick.affiliateUrl : "https://a.co/d/00Q3O7SB"} 
                target="_blank" 
                rel="sponsored noopener noreferrer"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-medium text-xs transition shadow"
              >
                <span>View Availability on Amazon Storefront</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </section>

          {/* Author Bio Box */}
          <div className="bg-[#EFECE6] border border-stone-300/60 rounded-3xl p-8 flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-stone-900 text-white flex items-center justify-center shrink-0 shadow-md overflow-hidden">
              <img src={favicon} alt="Naila Avatar" className="w-20 h-20 object-contain" />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <h3 className="font-serif font-bold text-stone-900 text-lg">About Naila</h3>
              <p className="text-xs text-stone-600 font-light leading-relaxed">
                Naila is an expert curator and Amazon affiliate marketer specializing in US lifestyle trends, quiet luxury home decor, and skincare innovations. Dedicated to providing transparent, high-integrity product guides and honest evaluations.
              </p>
            </div>
          </div>

          {/* Related Posts Grid (Internal Contextual Linking) */}
          {relatedPosts.length > 0 && (
            <section className="space-y-6 pt-6 border-t border-stone-200">
              <h2 className="text-2xl font-serif text-stone-900">Related Posts</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((related) => (
                  <div key={related.id} className="bg-white rounded-2xl p-4 border border-stone-200 flex gap-4 items-center group shadow-sm">
                    <img src={related.image} alt={related.title} className="w-20 h-20 object-cover rounded-xl bg-stone-100 shrink-0" />
                    <div>
                      <span className="text-[10px] text-amber-800 font-bold uppercase">{related.category}</span>
                      <h4 className="font-serif text-sm text-stone-900 group-hover:text-amber-800 transition line-clamp-2 leading-snug mt-0.5">
                        <Link to={`/article/${related.slug}`}>
                          {related.title}
                        </Link>
                      </h4>
                      <span className="text-[11px] text-stone-400 mt-1 block">{related.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Comments Section */}
          <section className="space-y-8 pt-6 border-t border-stone-200">
            <div className="flex items-center space-x-2">
              <MessageSquare size={20} className="text-stone-800" />
              <h2 className="text-2xl font-serif text-stone-900">Comments Section ({comments.length})</h2>
            </div>

            <div className="space-y-4">
              {comments.map((c) => (
                <div key={c.id} className="bg-white p-6 rounded-2xl border border-stone-200 space-y-1 shadow-sm">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-stone-900">{c.name}</span>
                    <span className="text-stone-400">{c.date}</span>
                  </div>
                  <p className="text-xs text-stone-600 font-light">{c.text}</p>
                </div>
              ))}
            </div>

            <form onSubmit={handleCommentSubmit} className="bg-white p-6 rounded-2xl border border-stone-200 space-y-4 shadow-sm">
              <h3 className="font-serif font-bold text-stone-900 text-sm">Leave a Comment</h3>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  value={newCommentName}
                  onChange={(e) => setNewCommentName(e.target.value)}
                  placeholder="Jane Smith" 
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-stone-900 text-xs bg-stone-50"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">Your Review / Comment</label>
                <textarea 
                  rows="3" 
                  required
                  value={newCommentText}
                  onChange={(e) => setNewCommentText(e.target.value)}
                  placeholder="Share your thoughts..." 
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-stone-900 text-xs bg-stone-50 resize-none"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="px-6 py-3 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-medium text-xs transition shadow"
              >
                Post Comment
              </button>
            </form>
          </section>

        </div>
      </article>
    </>
  );
}
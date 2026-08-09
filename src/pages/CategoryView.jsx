import { useParams, Link } from 'react-router-dom';
import { ArrowRight, Filter } from 'lucide-react';
import postsData from '../data/posts.json';

export default function CategoryView() {
  const { categoryName } = useParams();

  // Filter posts that match the URL category parameter (case-insensitive)
  const filteredPosts = postsData.filter(
    post => post.category.toLowerCase() === categoryName?.toLowerCase()
  );

  return (
    <div className="bg-[#FDFBF7] py-12 lg:py-16 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Category Header */}
        <div className="mb-12 border-b border-stone-200 pb-6">
          <span className="text-xs uppercase tracking-widest text-amber-800 font-bold">Curated Archive</span>
          <h1 className="text-3xl sm:text-4xl font-serif text-stone-900 mt-1 capitalize">
            {categoryName} Guides & Beauty Blogs
          </h1>
          <p className="text-stone-600 text-sm font-light mt-2">
            Explore our hand-picked reviews, routines, and essential recommendations for {categoryName.toLowerCase()}.
          </p>
        </div>

        {/* Posts Grid */}
        {filteredPosts.length > 0 ? (
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
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl border border-stone-200">
            <p className="text-stone-500 text-sm">No articles found in this category yet. Check back soon!</p>
            <Link to="/" className="inline-block mt-4 text-xs font-semibold uppercase tracking-wider text-amber-800 hover:underline">
              &larr; Return to Home
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
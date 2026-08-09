import { Mail, MapPin, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export default function AboutContact() {
  return (
    <div className="bg-[#FDFBF7] py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* About Section */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-8">
          <div className="border-b border-stone-100 pb-6">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold">About Curated by Naila</span>
            <h1 className="text-3xl sm:text-4xl font-serif text-stone-900 mt-2">
              Designing thoughtful spaces, beauty routines, and lifestyle curation.
            </h1>
          </div>

          <div className="prose prose-stone max-w-none text-stone-600 font-light space-y-6 leading-relaxed">
            <p>
              Welcome! <strong>Curated by Naila</strong> is an editorial digital space born from a passion for aesthetic product curation, home styling, beauty essentials, and modern lifestyle routines. 
            </p>
            <p>
              Through carefully organized visual collections and in-depth reviews, this platform serves as your destination for discovering quiet luxury items, skin health devices, minimalist home decor, and everyday essentials tailored for discerning US shoppers.
            </p>
            
            <div className="bg-amber-50/60 border border-amber-200/60 rounded-2xl p-6 my-6 flex items-start space-x-4">
              <Heart className="text-amber-800 shrink-0 mt-1" size={20} />
              <div>
                <h3 className="font-serif font-bold text-stone-900 text-base mb-1">Affiliate & Curation Standard</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Every product highlighted across our boards and articles is hand-picked for quality and design integrity. We participate in the Amazon Services LLC Associates Program, meaning we may earn a small commission on qualifying purchases at no additional cost to you.
                </p>
              </div>
            </div>

            <p>
              Explore our visual boards directly on Pinterest or browse our latest published guides right here on the site.
            </p>

            <div className="pt-2">
              <a 
                href="https://www.pinterest.com/curatedbynaila/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-stone-900 text-white rounded-xl font-medium text-sm hover:bg-stone-800 transition shadow-md"
              >
                <span>Visit Pinterest Profile (@curatedbynaila)</span>
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm space-y-8">
          <div className="border-b border-stone-100 pb-6">
            <span className="text-xs uppercase tracking-widest text-amber-800 font-bold">Get In Touch</span>
            <h2 className="text-3xl font-serif text-stone-900 mt-2">
              Collaborations, Inquiries & Support
            </h2>
            <p className="text-stone-600 text-sm font-light mt-2">
              Have questions regarding our product curation, brand partnerships, or general inquiries? Reach out below.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-50 rounded-xl text-amber-800">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-stone-900">Direct Email</h3>
                  <p className="text-stone-600 text-sm font-light mt-0.5">contact@curatedbynaila.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-50 rounded-xl text-amber-800">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-stone-900">Audience Focus</h3>
                  <p className="text-stone-600 text-sm font-light mt-0.5">United States & Global Curation</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-amber-50 rounded-xl text-amber-800">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-stone-900">Transparency</h3>
                  <p className="text-stone-600 text-sm font-light mt-0.5">Committed to FTC guidelines and honest reviews.</p>
                </div>
              </div>
            </div>

            {/* Simple Contact Form */}
            <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message! We will get back to you soon.'); }} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Jane Doe" 
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-stone-900 text-sm bg-stone-50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">Your Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="jane@example.com" 
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-stone-900 text-sm bg-stone-50"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-1">Message</label>
                <textarea 
                  rows="4" 
                  required
                  placeholder="Write your message or collaboration inquiry here..." 
                  className="w-full px-4 py-3 rounded-xl border border-stone-200 focus:outline-none focus:border-stone-900 text-sm bg-stone-50 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl font-medium text-sm transition shadow-md"
              >
                Send Message
              </button>
            </form>

          </div>
        </section>

      </div>
    </div>
  );
}
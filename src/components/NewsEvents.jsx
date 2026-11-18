import React, { useState } from 'react';
import { newsCategories, newsEventsData } from '../data/newsData';
import { 
  Calendar, Newspaper, ArrowRight, X, ExternalLink, 
  MapPin, Clock, Tag 
} from 'lucide-react';

const NewsEvents = () => {
  const [activeCategory, setActiveCategory] = useState("All Updates");
  const [selectedNews, setSelectedNews] = useState(null);
  const [showAllModal, setShowAllModal] = useState(false);

  const filteredNews = activeCategory === "All Updates"
    ? newsEventsData
    : newsEventsData.filter(item => item.category === activeCategory);

  return (
    <section id="news-events" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-bit-navy-soft text-bit-navy text-xs font-bold uppercase tracking-wider mb-3">
              Campus Highlights
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-bit-navy tracking-tight">
              News & Department Events
            </h2>
            <div className="w-16 h-1 bg-bit-gold my-3 rounded-full" />
            <p className="text-slate-600 text-xs sm:text-sm max-w-xl">
              Stay informed on upcoming workshops, distinguished guest lectures, industrial immersion visits, 
              hackathons, and international research symposiums.
            </p>
          </div>

          {/* View All Button */}
          <div className="mt-4 md:mt-0">
            <button
              onClick={() => setShowAllModal(true)}
              className="px-5 py-2.5 rounded-lg bg-bit-navy hover:bg-bit-navy-light text-white text-xs font-bold transition-colors flex items-center group shadow-sm"
            >
              <span>View All News & Archives</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-slate-100">
          {newsCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'bg-bit-navy text-white shadow-xs'
                  : 'text-slate-600 hover:text-bit-navy hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.slice(0, 6).map((item) => (
            <article 
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1"
            >
              <div>
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img
                    src={item.image}
                    onError={(e) => { e.currentTarget.src = '/images/hero-lab.svg'; }}
                    alt={item.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-bit-navy/90 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-md">
                    {item.category}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-slate-800 text-[10px] font-bold px-2 py-0.5 rounded shadow-xs flex items-center">
                    <Calendar className="w-3 h-3 mr-1 text-bit-gold" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="text-[10px] font-bold text-bit-gold-dark uppercase tracking-wider mb-1">
                    {item.badge}
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold text-bit-navy leading-snug mb-3 group-hover:text-bit-navy-light transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>
              </div>

              {/* Read Full Detail Button */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedNews(item)}
                  className="w-full py-2 px-3 rounded-lg bg-slate-50 hover:bg-bit-navy text-bit-navy hover:text-white border border-slate-200 text-xs font-bold transition-colors flex items-center justify-center group"
                >
                  <span>Read Event Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Single News Detail Modal */}
      {selectedNews && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-bit-navy-soft text-bit-navy text-xs font-bold uppercase tracking-wider">
                {selectedNews.category}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                {selectedNews.date}
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-bit-navy mb-4 leading-snug">
              {selectedNews.title}
            </h3>

            <div className="rounded-xl overflow-hidden h-56 w-full mb-6 bg-slate-900">
              <img
                src={selectedNews.image}
                onError={(e) => { e.currentTarget.src = '/images/hero-lab.svg'; }}
                alt={selectedNews.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-4">
              {selectedNews.summary}
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
              {selectedNews.details}
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setSelectedNews(null)}
                className="px-6 py-2 bg-bit-navy text-white text-xs sm:text-sm font-bold rounded-lg hover:bg-bit-navy-light transition-colors"
              >
                Close Update
              </button>
            </div>
          </div>
        </div>
      )}

      {/* View All News Modal */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setShowAllModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-extrabold text-bit-navy mb-1">
              Complete News, Workshops & Events Archive
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              All published departmental announcements and academic proceedings.
            </p>

            <div className="space-y-4">
              {newsEventsData.map((item) => (
                <div 
                  key={item.id}
                  className="p-4 rounded-xl border border-slate-200 hover:border-bit-navy/30 bg-slate-50/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 text-[11px] text-slate-500 mb-1">
                      <span className="font-bold text-bit-navy uppercase">{item.category}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                    <h4 className="text-sm font-bold text-bit-navy mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {item.summary}
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setShowAllModal(false);
                      setSelectedNews(item);
                    }}
                    className="px-3 py-1.5 rounded bg-bit-navy text-white text-xs font-bold hover:bg-bit-navy-light whitespace-nowrap"
                  >
                    View Details
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default NewsEvents;


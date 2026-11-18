import React, { useState } from 'react';
import { faqCategories, faqsData } from '../data/faqData';
import { 
  ChevronDown, HelpCircle, Search, MessageSquare, 
  Sparkles, CheckCircle2 
} from 'lucide-react';

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState("All FAQs");
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = faqsData.filter(faq => {
    const matchesCat = activeCategory === "All FAQs" || faq.category === activeCategory;
    const matchesQuery = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  const toggleAccordion = (idx) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center px-3.5 py-1 rounded-full bg-bit-navy-soft text-bit-navy text-xs font-bold uppercase tracking-wider mb-3">
            Admissions & Academic Enquiries
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-bit-navy tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-bit-gold mx-auto my-4 rounded-full" />
          <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
            Clear, transparent insights into admissions, laboratories, personalised competency mentoring, 
            placement tracks, and undergraduate research opportunities.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Category Dropdown / Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {faqCategories.slice(0, 4).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  activeCategory === cat
                    ? 'bg-bit-navy text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search FAQ keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-bit-navy"
            />
          </div>

        </div>

        {/* Accordion Container */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;

            return (
              <div 
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between focus:outline-none focus:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3 pr-4">
                    <span className="w-6 h-6 rounded-full bg-bit-navy-soft text-bit-navy flex items-center justify-center font-bold text-xs flex-shrink-0">
                      {idx + 1}
                    </span>
                    <span className="font-extrabold text-sm sm:text-base text-bit-navy">
                      {faq.question}
                    </span>
                  </div>

                  <div className={`p-1 rounded-full text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-bit-navy' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                    <div className="pl-9 pr-4">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions support prompt */}
        <div className="mt-12 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-bit-navy">Have specific admissions or curriculum queries?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Our faculty counselors and student ambassadors are ready to help you.</p>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 bg-bit-navy hover:bg-bit-navy-light text-white text-xs font-bold rounded-lg transition-colors shadow-xs"
          >
            Submit an Enquiry Below
          </a>
        </div>

      </div>
    </section>
  );
};

export default Faq;


import React, { useState } from 'react';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/faqs';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-parchment-50 border-b border-parchment-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-parchment-200 border border-amberGold-600/30 text-amberGold-800 text-xs font-cinzel font-semibold tracking-widest uppercase">
            <HelpCircle className="w-3.5 h-3.5 text-amberGold-600" />
            <span>Common Inquiries</span>
          </div>

          <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.12em] text-cabin-900">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-cabin-700">
            Everything you need to know about commissions, framing, and Himalayan shipping.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-parchment-300 overflow-hidden shadow-artisan transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-parchment-50 transition-colors"
                >
                  <span className="font-cinzel text-sm sm:text-base font-bold text-cabin-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amberGold-700 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-cabin-800 leading-relaxed border-t border-parchment-200/80 pt-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

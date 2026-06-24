'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Section, SectionItem } from '@/content/type';
import { fadeInUp, staggerContainer } from '../services/Shared/animation';

interface FAQSecProps {
  section: Section;
}

export default function FAQSec({ section }: FAQSecProps) {
  const faqItems = section.items || [];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 border-t border-gray-200 bg-white">
      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24">
        {section.heading && (
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInUp}
            className="display mb-12 text-3xl font-bold md:text-4xl text-black text-left"
          >
            {section.heading}
          </motion.h2>
        )}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="max-w-3xl space-y-4"
        >
          {faqItems.map((item: SectionItem, idx: number) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group rounded-2xl border border-gray-200 bg-gray-50/50 transition-all duration-300 hover:border-brand/30 hover:bg-gray-50 hover:shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleQuestion(idx)}
                  className="w-full text-left p-6 flex items-start gap-4 focus:outline-none"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-black flex items-start gap-3">
                      <span className="text-brand mt-1">Q:</span>
                      {item.title}
                    </h3>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    {isOpen ? (
                      <Minus className="h-5 w-5 text-brand transition-colors" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-400 group-hover:text-brand transition-colors" />
                    )}
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-600 pl-7 leading-relaxed group-hover:text-gray-700 transition-colors text-justify">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
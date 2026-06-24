'use client';

import { motion } from 'framer-motion';
import { Section } from '@/content/type';
import { fadeInUp, fadeInLeft, staggerContainer } from '../services/Shared/animation';
import { Quote } from 'lucide-react';

export default function TextSec({ section }: { section: Section }) {
  const content = section.content;
  const isStandalone = !section.heading && 
                       content && 
                       (typeof content === 'string' || 
                        (Array.isArray(content) && content.length === 1));

  if (isStandalone) {
    const text = typeof content === 'string' ? content : content[0];

    return (
      <section className="py-16 md:py-20 border-t border-gray-200 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(249,115,22,0.03),rgba(0,0,0,0))]" />
        <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.p
              variants={fadeInUp}
              whileHover={{
                color: 'var(--brand)',
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="text-xl md:text-2xl text-gray-700 leading-relaxed font-serif font-medium italic tracking-wide transition-all duration-300 cursor-default text-justify"
            >
              {text}
            </motion.p>
          </motion.div>
        </div>
      </section>
    );
  }

  // Default: left-aligned with heading and quote
  return (
    <section className="py-20 md:py-28 border-t border-gray-200 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(249,115,22,0.03),rgba(0,0,0,0))]" />
      
      <div className="container mx-auto px-6 md:px-10 lg:px-16 xl:px-20 2xl:px-24 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="max-w-4xl"
        >
          {section.heading && (
            <motion.h2 
              variants={fadeInLeft}
              className="display mb-6 text-3xl font-bold md:text-4xl text-black flex items-start gap-4 text-left"
            >
              <Quote className="h-8 w-8 text-brand flex-shrink-0 mt-1" />
              <span>
                {section.heading.split(' ').map((word, idx) => {
                  const highlightWords = ['Agency', 'Work', 'Automation', 'Clickmasters', 'Actually'];
                  const isHighlighted = highlightWords.some(hw => 
                    word.toLowerCase().includes(hw.toLowerCase())
                  );
                  return (
                    <span key={idx}>
                      <span className={isHighlighted ? 'text-brand' : ''}>
                        {word}
                      </span>
                      {idx < section.heading!.split(' ').length - 1 && ' '}
                    </span>
                  );
                })}
              </span>
            </motion.h2>
          )}
          
          <motion.div 
            variants={fadeInUp}
            className="space-y-4 text-gray-700 leading-relaxed text-lg pl-12 text-justify"
          >
            {content && (
              Array.isArray(content) 
                ? content.map((p, idx) => <p key={idx} className="text-justify">{p}</p>)
                : <p className="text-justify">{content}</p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
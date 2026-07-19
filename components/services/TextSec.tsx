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

  // Determine section type for styling
  const isWhatWeBuild = section.heading?.includes('What We Build') || section.heading?.includes('What Our AI Consulting Covers');
  const isHowWeWork = section.heading?.includes('How We Work') || section.heading?.includes('How Engagements Work');
  const isWhatItCosts = section.heading?.includes('What It Costs') || section.heading?.includes('What This Replaces');
  const isWhyClickmasters = section.heading?.includes('Why Clickmasters');
  const isWhereReturn = section.heading?.includes('Where the Return Shows Up');

  // Helper to render content with formatting
  const renderFormattedContent = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim());
    
    return lines.map((line, index) => {
      const numberMatch = line.match(/^[\s]*(\d+)\.\s+(.+)/);
      const bulletMatch = line.match(/^[\s]*[•\-*]\s+(.+)/);
      const boldMatch = line.match(/^\*\*(.+)\*\*/);
      
      if (numberMatch) {
        const num = numberMatch[1];
        const numText = numberMatch[2];
        const parts = numText.split('**');
        const hasBold = parts.length > 1;
        
        return (
          <motion.div 
            key={index} 
            className="flex items-start gap-3 py-2 group"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="text-brand font-bold min-w-[28px] text-base">{num}.</span>
            <span className="text-gray-700 dark:text-gray-300">
              {hasBold ? (
                parts.map((part, i) => {
                  if (i % 2 === 1) {
                    return <strong key={i} className="text-gray-900 dark:text-white hover-text-brand transition-colors">{part}</strong>;
                  }
                  return <span key={i}>{part}</span>;
                })
              ) : (
                numText
              )}
            </span>
          </motion.div>
        );
      }
      
      if (bulletMatch) {
        const bulletText = bulletMatch[1];
        const parts = bulletText.split('**');
        const hasBold = parts.length > 1;
        
        return (
          <motion.div 
            key={index} 
            className="flex items-start gap-3 py-2 group"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.06, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.span 
              className="text-brand text-lg leading-6 flex-shrink-0 bullet-pulse"
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.2 }}
            >
              •
            </motion.span>
            <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {hasBold ? (
                parts.map((part, i) => {
                  if (i % 2 === 1) {
                    return <strong key={i} className="text-gray-900 dark:text-white hover-text-brand transition-colors">{part}</strong>;
                  }
                  return <span key={i}>{part}</span>;
                })
              ) : (
                bulletText
              )}
            </span>
          </motion.div>
        );
      }
      
      if (boldMatch) {
        const boldText = boldMatch[1];
        return (
          <motion.div 
            key={index} 
            className="py-2"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <strong className="text-gray-900 dark:text-white text-base hover-text-glow transition-all">{boldText}</strong>
          </motion.div>
        );
      }
      
      if (line.includes('**')) {
        const parts = line.split('**');
        return (
          <motion.p 
            key={index} 
            className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
          >
            {parts.map((part, i) => {
              if (i % 2 === 1) {
                return <strong key={i} className="text-gray-900 dark:text-white hover-text-brand transition-colors">{part}</strong>;
              }
              return <span key={i}>{part}</span>;
            })}
          </motion.p>
        );
      }
      
      if (line.trim()) {
        return (
          <motion.p 
            key={index} 
            className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 text-justify hover-text-glow transition-all"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            viewport={{ once: true }}
          >
            {line}
          </motion.p>
        );
      }
      
      return null;
    });
  };

  // ── Standalone ──
  if (isStandalone) {
    const text = typeof content === 'string' ? content : content[0];
    return (
      <section className="py-20 sm:py-24 lg:py-32 border-t border-gray-200/50 bg-gray-50/80 relative overflow-hidden">
        {/* Light grey with minimal orange accents */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-orange-400/5 via-orange-300/3 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-48 h-48 bg-orange-400/8 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gray-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:60px_60px]" />
        <div className="mx-auto max-w-[92vw] sm:max-w-[84vw] px-4 sm:px-6 relative">
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
              className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed font-serif font-medium italic tracking-wide transition-all duration-300 cursor-default text-justify"
            >
              {text}
            </motion.p>
          </motion.div>
        </div>
      </section>
    );
  }

  // ── Default ──
  let imageSrc: string | undefined;
  let imageAlt: string | undefined;

  if (section.image) {
    if (typeof section.image === 'string') {
      imageSrc = section.image;
    } else {
      imageSrc = section.image.src;
      imageAlt = section.image.alt;
    }
  }

  const hasImage = !!imageSrc;
  const contentArray = Array.isArray(content) ? content : (typeof content === 'string' ? [content] : []);
  const hasListContent = contentArray.some(p => 
    p.includes('\n') || p.includes('•') || p.includes('-') || p.match(/^\d+\./)
  );

  // Light grey with minimal orange accents - consistent for all sections
  const bgClasses = 'bg-gray-50/80';
  const borderClasses = 'border-t border-gray-200/50';
  const patternClasses = 'bg-grid-gray-900/[0.02] bg-[size:60px_60px]';
  const headingColor = 'text-gray-900 dark:text-white';
  const textColor = 'text-gray-600 dark:text-gray-400';
  const iconColor = 'text-brand';

  return (
    <section className={`py-20 sm:py-24 lg:py-32 ${borderClasses} ${bgClasses} relative overflow-hidden ${patternClasses}`}>
      {/* Light grey with minimal orange accents */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-orange-400/5 via-orange-300/3 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-48 h-48 bg-orange-400/8 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gray-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-[10%] w-36 h-36 bg-orange-200/5 rounded-full blur-2xl pointer-events-none" />
      
      {/* Grey pattern overlay */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:60px_60px]" />
      
      {/* Subtle warm glow for text sections */}
      <div className="absolute inset-0 bg-warm-glow/20 pointer-events-none" />
      
      {/* Orange accent glow for specific sections - minimal */}
      {isWhyClickmasters && (
        <>
          <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-orange-400/8 via-orange-300/3 to-transparent pointer-events-none" />
          <div className="absolute top-1/2 right-0 w-56 h-56 bg-orange-400/10 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
        </>
      )}
      
      {isHowWeWork && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_20%_50%,rgba(249,115,22,0.03),transparent)] pointer-events-none" />
      )}
      
      {isWhatWeBuild && (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_50%,rgba(249,115,22,0.03),transparent)] pointer-events-none" />
      )}

      <div className="mx-auto max-w-[84vw] px-6 relative">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className={hasImage ? 'grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center' : ''}
        >
          <div className={hasImage ? 'order-1' : ''}>
            {section.heading && (
              <motion.h2 
                variants={fadeInLeft}
                className={`display mb-6 text-2xl sm:text-3xl font-bold md:text-4xl ${headingColor} flex items-start gap-4 text-left relative`}
              >
                <Quote className={`h-8 w-8 ${iconColor} flex-shrink-0 mt-1`} />
                <span className="relative">
                  {section.heading.split(' ').map((word, idx) => {
                    const highlightWords = ['Agency', 'Work', 'Automation', 'Clickmasters', 'Actually', 'Build', 'We', 'How', 'Costs', 'Replaces', 'Return', 'Shows', 'Up'];
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
                  <motion.span 
                    className="absolute -bottom-2 left-0 h-0.5 bg-gradient-to-r from-brand/50 to-brand/10 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    viewport={{ once: true }}
                  />
                </span>
              </motion.h2>
            )}
            
            <motion.div 
              variants={fadeInUp}
              className={`space-y-4 ${textColor} leading-relaxed text-base sm:text-lg pl-0 sm:pl-12 text-justify`}
            >
              {contentArray.map((paragraph, idx) => {
                if (paragraph.includes('\n') || paragraph.includes('•') || paragraph.includes('-') || paragraph.match(/^\d+\./)) {
                  return (
                    <div key={idx} className="space-y-1">
                      {renderFormattedContent(paragraph)}
                    </div>
                  );
                }
                
                if (paragraph.includes('**')) {
                  const parts = paragraph.split('**');
                  return (
                    <motion.p 
                      key={idx} 
                      className={`${textColor} leading-relaxed mb-4 text-justify`}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {parts.map((part, i) => {
                        if (i % 2 === 1) {
                          return <strong key={i} className="text-gray-900 dark:text-white hover-text-brand transition-colors">{part}</strong>;
                        }
                        return <span key={i}>{part}</span>;
                      })}
                    </motion.p>
                  );
                }
                
                return (
                  <motion.p 
                    key={idx} 
                    className={`${textColor} leading-relaxed mb-4 text-justify hover-text-glow transition-all`}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05, duration: 0.4 }}
                    viewport={{ once: true }}
                  >
                    {paragraph}
                  </motion.p>
                );
              })}
            </motion.div>
          </div>

          {hasImage && (
            <motion.div
              variants={fadeInUp}
              className="order-2 flex justify-center lg:justify-end"
              transition={{ delay: 0.2 }}
            >
              <img
                src={imageSrc}
                alt={imageAlt || section.heading || 'Image'}
                className="w-full h-auto object-contain max-w-full"
              />
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
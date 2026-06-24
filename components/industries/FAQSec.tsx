'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import type { Section } from '@/content/type';

interface FaqSecProps {
  section: Section;
  bg?: string;
}

export default function FaqSec({
  section,
  bg = 'bg-white',
}: FaqSecProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const items = section.items || [];
  const isBlack = bg === 'bg-black';

  if (!items.length) {
    return (
      <section className={`py-24 md:py-32 ${bg}`}>
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">No FAQ items to display.</p>
        </div>
      </section>
    );
  }

  const toggleFaq = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section
      className={`relative overflow-hidden py-24 md:py-32 ${bg}`}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_40%_60%_at_90%_50%,rgba(249,115,22,0.05),transparent)]" />

      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left Side */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-brand" />
              <span className="text-brand text-sm font-semibold tracking-widest uppercase">
                FAQ
              </span>
            </div>

            {section.heading && (
              <h2
                className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${
                  isBlack ? 'text-white' : 'text-gray-900'
                }`}
              >
                {section.heading}
              </h2>
            )}

            <p
              className={`text-sm leading-relaxed ${
                isBlack ? 'text-gray-400' : 'text-gray-500'
              }`}
            >
              Can't find the answer? Book a free 30-minute audit and we'll
              answer directly.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, idx) => {
              const isOpen = openIdx === idx;

              return (
                <div
                  key={idx}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isBlack
                      ? isOpen
                        ? 'border-brand/40 bg-gray-900'
                        : 'border-gray-800 bg-gray-900/50 hover:border-gray-700'
                      : isOpen
                        ? 'border-brand/30 bg-brand/10 shadow-sm'
                        : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  {/* Question Row */}
                  <div className="flex items-center justify-between gap-4 p-6">
                    <h3
                      className={`flex-1 font-semibold text-base leading-snug ${
                        isBlack
                          ? 'text-white'
                          : 'text-gray-900'
                      }`}
                    >
                      {item.title}
                    </h3>

                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                      className={`cursor-pointer flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? 'bg-brand'
                          : isBlack
                          ? 'bg-gray-800'
                          : 'bg-gray-200'
                      }`}
                    >
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.25 }}
                      >
                        {isOpen ? (
                          <Minus className="h-4 w-4 text-white" />
                        ) : (
                          <Plus
                            className={`h-4 w-4 ${
                              isBlack
                                ? 'text-gray-400'
                                : 'text-gray-600'
                            }`}
                          />
                        )}
                      </motion.div>
                    </button>
                  </div>

                  {/* Answer */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: 'auto',
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease: 'easeInOut',
                        }}
                        className="overflow-hidden"
                      >
                        <div
                          className={`border-t px-6 pb-6 pt-4 text-sm leading-relaxed ${
                            isBlack
                              ? 'border-gray-800 text-gray-400'
                              : 'border-brand/20 text-gray-600'
                          }`}
                        >
                          {item.description}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
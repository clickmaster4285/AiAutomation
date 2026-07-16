// components/sections/TestimonialSection.tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Section, SectionHeading } from '@/components/solutions/layout/Section';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: string | number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
  image?: string;
}

interface TestimonialSectionProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  testimonials: Testimonial[];
  variant?: 'default' | 'grid' | 'carousel' | 'cards';
  columns?: 2 | 3;
  autoplay?: boolean;
  autoplaySpeed?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  background?: 'paper' | 'muted' | 'ink';
  className?: string;
}

export function TestimonialSection({
  title = 'What Our Clients Say',
  subtitle = 'Real results from real clients',
  eyebrow = 'Testimonials',
  testimonials,
  variant = 'default',
  columns = 3,
  autoplay = true,
  autoplaySpeed = 5000,
  showControls = true,
  showIndicators = true,
  background = 'muted',
}: TestimonialSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalSlides = testimonials.length;

  useEffect(() => {
    if (!autoplay || isPaused || variant === 'grid' || variant === 'cards') return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, autoplaySpeed);
    return () => clearInterval(interval);
  }, [autoplay, autoplaySpeed, isPaused, totalSlides, variant]);

  const handlePrevious = () => setCurrentIndex((p) => (p - 1 + totalSlides) % totalSlides);
  const handleNext = () => setCurrentIndex((p) => (p + 1) % totalSlides);

  const renderTestimonials = () => {
    switch (variant) {
      case 'grid':
      case 'cards':
        return (
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`grid grid-cols-1 md:grid-cols-${columns} gap-6`}
          >
            {testimonials.map((t) => (
              <motion.div
                key={t.id}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              >
                <TestimonialCard testimonial={t} flip={variant === 'cards'} />
              </motion.div>
            ))}
          </motion.div>
        );

      case 'carousel':
      default:
        return (
          <div className="relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center"
                >
                  <div className="w-full max-w-4xl">
                    <TestimonialCard testimonial={testimonials[currentIndex]} large />
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {showControls && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 p-3 rounded-full bg-paper shadow-lg border border-border hover:bg-brand hover:text-white transition-colors z-10"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 p-3 rounded-full bg-paper shadow-lg border border-border hover:bg-brand hover:text-white transition-colors z-10"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            {showIndicators && (
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={cn(
                      'h-2 rounded-full transition-all duration-300',
                      index === currentIndex ? 'w-8 bg-brand' : 'w-2 bg-border hover:bg-muted-foreground'
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <Section bg={background} pattern="blob">
      <SectionHeading title={title} subtitle={subtitle} eyebrow={eyebrow} />
      {renderTestimonials()}
    </Section>
  );
}

function TestimonialCard({
  testimonial,
  large = false,
  flip = false,
}: {
  testimonial: Testimonial;
  large?: boolean;
  flip?: boolean;
}) {
  const { name, role, company, content, avatar, rating = 5, image } = testimonial;

  const body = (
    <div className={cn('bg-paper rounded-2xl border border-border', large ? 'p-8 md:p-12 shadow-xl' : 'p-6 shadow-sm')}>
      <Quote className="h-8 w-8 text-brand/30 mb-4" />
      <p className="text-ink/85 leading-relaxed text-base md:text-lg mb-6">{content}</p>
      {rating > 0 && (
        <div className="flex gap-0.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className={cn('h-4 w-4', i < rating ? 'fill-brand text-brand' : 'text-border')} />
          ))}
        </div>
      )}
      <div className="flex items-center gap-4">
        {(avatar || image) ? (
          <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
            <Image src={(avatar || image)!} alt={name} fill className="object-cover" />
          </div>
        ) : (
          <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
            <span className="font-serif font-bold text-brand">{name.charAt(0)}</span>
          </div>
        )}
        <div>
          <p className="font-semibold text-ink">{name}</p>
          <p className="text-sm text-muted-foreground">{role}{role && company && ', '}{company}</p>
        </div>
      </div>
    </div>
  );

  if (!flip) {
    return <div className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-2xl">{body}</div>;
  }

  return (
    <div className="flip-card h-72" tabIndex={0}>
      <div className="flip-card-inner">
        <div className="flip-card-face">{body}</div>
        <div className="flip-card-face flip-card-back bg-ink text-paper rounded-2xl p-8 flex flex-col justify-center items-center text-center">
          <div className="flex gap-0.5 mb-3">
            {[...Array(5)].map((_, i) => <Star key={i} className={cn('h-4 w-4', i < rating ? 'fill-brand text-brand' : 'text-paper/20')} />)}
          </div>
          <p className="font-serif text-lg font-bold">{name}</p>
          <p className="text-sm text-paper/70">{role}{role && company && ', '}{company}</p>
        </div>
      </div>
    </div>
  );
}
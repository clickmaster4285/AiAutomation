// components/solutions/sections/FeatureGrid.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Brain, Users, Calendar, GitBranch, Shield, Sparkles, Database, Cloud, Zap,
  MessageSquare, Workflow, RefreshCw, Bot, PhoneCall, TrendingUp, Headphones,
  FileText, GitMerge, Layers, Settings, Target, BarChart3, Lightbulb,
  Briefcase, Link2, Award, Layout, CheckCircle, ArrowRight,
} from 'lucide-react';
import { Section } from '@/components/solutions/layout/Section';

const iconMap: Record<string, any> = {
  Brain, Users, Calendar, GitBranch, Shield, Sparkles, Database, Cloud, Zap,
  MessageSquare, Workflow, RefreshCw, Bot, PhoneCall, TrendingUp, Headphones,
  FileText, GitMerge, Layers, Settings, Target, BarChart3, Lightbulb,
  Briefcase, Link2, Award, Layout, CheckCircle, ArrowRight,
};

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface FeatureGridProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  features: Feature[];
  columns?: 2 | 3;
  background?: 'paper' | 'muted' | 'dark' | 'black';
}

// Generate particles once on the client
const generateParticles = () => {
  return Array.from({ length: 8 }, () => ({
    x: 5 + Math.random() * 90,
    y: 5 + Math.random() * 90,
    size: 2 + Math.random() * 4,
    duration: 5 + Math.random() * 8,
    delay: Math.random() * 5,
  }));
};

export function FeatureGrid({
  title,
  subtitle,
  eyebrow = 'Capabilities',
  features,
  columns = 3,
  background = 'dark',
}: FeatureGridProps) {
  const cols = { 2: 'md:grid-cols-2', 3: 'md:grid-cols-3' };
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, duration: number, delay: number}>>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setParticles(generateParticles());
    setIsMounted(true);
  }, []);

  // If not mounted, render static version without animations
  if (!isMounted) {
    return (
      <Section bg="black" pattern="dots" className="py-20 relative overflow-hidden">
        <div className="relative z-10">
          <div className="text-center mb-12">
            {eyebrow && (
              <span className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4">
                <span className="w-8 h-px bg-brand" />
                {eyebrow}
                <span className="w-8 h-px bg-brand" />
              </span>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.1] tracking-tight">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          <div className={`grid grid-cols-1 ${cols[columns]} gap-6`}>
            {features.map((feature, index) => {
              const Icon = iconMap[feature.icon] || Sparkles;
              return (
                <div
                  key={index}
                  className="flip-card h-56 group"
                  tabIndex={0}
                >
                  <div className="flip-card-inner">
                    <div className="flip-card-face flex flex-col justify-between p-6 rounded-2xl bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-lg">
                      <div className="w-12 h-12 rounded-xl bg-brand/20 text-brand flex items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-serif text-lg font-bold text-white mb-1">{feature.title}</h3>
                        <p className="text-xs text-gray-400">Hover to read more</p>
                      </div>
                    </div>
                    
                    <div className="flip-card-face flip-card-back flex flex-col justify-center p-6 rounded-2xl bg-gray-800/90 border border-gray-700/50 shadow-2xl relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-brand/30 via-brand/10 to-transparent" />
                      <div className="absolute -inset-1 bg-brand/20 blur-2xl rounded-2xl" />
                      <div className="absolute inset-0 rounded-2xl border border-brand/20 shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)]" />
                      
                      <div className="relative z-10">
                        <Icon className="h-6 w-6 text-brand mb-3" />
                        <h3 className="font-serif text-base font-bold mb-2 text-white">{feature.title}</h3>
                        <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style jsx>{`
          .flip-card {
            perspective: 800px;
          }
          .flip-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            transform-style: preserve-3d;
          }
          .flip-card:hover .flip-card-inner {
            transform: rotateY(180deg);
          }
          .flip-card-face {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
          }
          .flip-card-back {
            transform: rotateY(180deg);
          }
        `}</style>
      </Section>
    );
  }

  return (
    <Section bg="black" pattern="dots" className="py-20 relative overflow-hidden">
      {/* ── Animated Background Patterns ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Gradient orbs with parallax */}
        <motion.div
          className="absolute -top-40 -right-20 w-[600px] h-[600px] rounded-full bg-brand/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <motion.div
          className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-orange-400/10 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand/5 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Animated grid pattern */}
        <motion.div 
          className="absolute inset-0 opacity-[0.03]"
          animate={{
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </motion.div>

        {/* Floating lines */}
        <motion.div
          className="absolute top-1/4 right-0 w-1/3 h-px bg-gradient-to-l from-brand/30 to-transparent"
          animate={{
            x: [100, 0, 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/3 left-0 w-1/4 h-px bg-gradient-to-r from-brand/30 to-transparent"
          animate={{
            x: [-100, 0, -100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Floating particles - using stable data */}
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-brand/40"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, 30, 0],
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated ring shapes */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full border border-brand/10"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full border-2 border-dashed border-brand/10"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, -180, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Diagonal light sweep */}
        <motion.div
          className="absolute -right-1/4 top-0 h-full w-1/2 bg-gradient-to-l from-brand/5 via-brand/0 to-transparent skew-x-[-12deg]"
          animate={{
            x: ['20%', '-140%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 1,
          }}
        />
      </div>
      
      <div className="relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          {eyebrow && (
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4"
            >
              <span className="w-8 h-px bg-brand" />
              {eyebrow}
              <span className="w-8 h-px bg-brand" />
            </motion.span>
          )}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-[1.1] tracking-tight"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
            >
              {subtitle}
            </motion.p>
          )}
        </div>

        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className={`grid grid-cols-1 ${cols[columns]} gap-6`}
        >
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                }}
                className="flip-card h-56 group"
                tabIndex={0}
              >
                <div className="flip-card-inner">
                  {/* Front */}
                  <div className="flip-card-face flex flex-col justify-between p-6 rounded-2xl bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 shadow-lg hover:border-brand/30 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-brand/20 text-brand flex items-center justify-center transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-xs text-gray-400">Hover to read more</p>
                    </div>
                  </div>
                  
                  {/* Back */}
                  <div className="flip-card-face flip-card-back flex flex-col justify-center p-6 rounded-2xl bg-gray-800/90 border border-gray-700/50 shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-brand/30 via-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute -inset-1 bg-brand/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                    <div className="absolute inset-0 rounded-2xl border border-brand/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_40px_-10px_rgba(249,115,22,0.3)]" />
                    
                    <div className="relative z-10">
                      <Icon className="h-6 w-6 text-brand mb-3" />
                      <h3 className="font-serif text-base font-bold mb-2 text-white">{feature.title}</h3>
                      <p className="text-sm text-gray-300 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <style jsx>{`
        .flip-card {
          perspective: 800px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-face {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </Section>
  );
}
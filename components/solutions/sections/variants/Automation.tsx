// components/solutions/sections/variants/AutomationSectio// components/solutions/sections/variants/AutomationSection.tsx
'use client';

import { motion } from 'framer-motion';
import { Bot, Workflow, Database, Shield, BarChart3, Sparkles, Target, Users, Clock, Zap, ArrowRight } from 'lucide-react';

interface AutomationSectionProps {
  title: string;
  content: string[];
}

export function AutomationSection({ title, content }: AutomationSectionProps) {
  const normalizedContent = (content || []).filter(
    (line): line is string => typeof line === 'string' && line.trim().length > 0
  );
  const automationItems = normalizedContent.filter((line) => line.includes('**'));
  const introText = normalizedContent.find((line) => !line.includes('**') && line.trim());

  const iconMap = {
    'Custom goal-driven agents': Bot,
    'Multi-step task execution': Workflow,
    'Grounding in your data': Database,
    'Guardrails and human-in-the-loop': Shield,
    'Monitoring and logging': BarChart3,
    'Lead intake and estimate follow-up': Target,
    'Bid request handling': Workflow,
    'Project document collection': Database,
    'Invoice tracking': Shield,
    'Client status updates': Users,
    'Customer support': Users,
    'Abandoned cart recovery': Target,
    'Order processing': Workflow,
    'Returns handling': Shield,
    'Review requests': Sparkles,
    'Inquiry response': Target,
    'Application collection': Database,
    'FAQ handling': Users,
    'Scheduling with reminders': Clock,
    'Progress reporting': BarChart3,
  };

  // Animated cards data for right side
  const animatedCards = [
    { 
      icon: Bot, 
      label: 'AI Agents', 
      value: '24/7',
      desc: 'Always on, always learning',
      color: 'from-brand/20 to-orange-400/20',
      delay: 0.2
    },
    { 
      icon: Zap, 
      label: 'Automation Rate', 
      value: '85%',
      desc: 'Of tasks automated',
      color: 'from-brand/20 to-orange-400/20',
      delay: 0.4
    },
    { 
      icon: Users, 
      label: 'Team Efficiency', 
      value: '3x',
      desc: 'More productive',
      color: 'from-brand/20 to-orange-400/20',
      delay: 0.6
    },
    { 
      icon: BarChart3, 
      label: 'ROI', 
      value: '500%',
      desc: 'Average return',
      color: 'from-brand/20 to-orange-400/20',
      delay: 0.8
    },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-gray-50">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-brand/5 to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-400/5 to-transparent" />
        
        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        {/* Floating orbs */}
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-brand/10 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-orange-400/10 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="mx-auto max-w-[84vw] px-6 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 text-brand text-xs font-semibold uppercase tracking-[0.15em] mb-4">
                <span className="w-8 h-px bg-brand" />
                What We Build
              </div>
              
              <h2 className="display text-3xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-[1.05]">
                {title}
              </h2>
              
              {introText && (
                <p className="text-lg md:text-xl lg:text-2xl text-gray-500 max-w-xl leading-relaxed">
                  {introText}
                </p>
              )}
            </motion.div>

            {/* Automation Items - Left side */}
            <div className="space-y-4">
              {automationItems.slice(0, 4).map((item, idx) => {
                const cleanItem = item.replace(/\*\*/g, '').trim();
                const parts = cleanItem.split('—');
                const title = parts[0]?.trim() || '';
                const description = parts[1]?.trim() || '';

                const IconKey = Object.keys(iconMap).find(key => 
                  title.toLowerCase().includes(key.toLowerCase())
                ) as keyof typeof iconMap;
                const Icon = IconKey ? iconMap[IconKey] : Sparkles;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 hover:shadow-md transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand/10 to-orange-400/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-brand" />
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold text-gray-900">{title}</h4>
                      <p className="text-sm md:text-base text-gray-500 leading-relaxed">{description}</p>
                    </div>
                  </motion.div>
                );
              })}
              
              {automationItems.length > 4 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="pt-2"
                >
                  <span className="text-sm text-brand font-medium">
                    +{automationItems.length - 4} more automations
                  </span>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Content - Animated Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {animatedCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: card.delay }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand/20 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="h-6 w-6 text-brand" />
                    </div>
                    
                    <div className="text-2xl md:text-3xl font-bold text-brand mb-1">
                      {card.value}
                    </div>
                    
                    <div className="text-sm font-semibold text-gray-900">
                      {card.label}
                    </div>
                    
                    <div className="text-xs text-gray-400">
                      {card.desc}
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Animated progress bar card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="col-span-2 p-6 rounded-2xl bg-white border border-gray-100 hover:border-brand/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">Automation Progress</span>
                <span className="text-sm font-bold text-brand">78%</span>
              </div>
              <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '78%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full bg-gradient-to-r from-brand to-orange-400 rounded-full"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
                <span>Phase 1: Discovery</span>
                <span>Phase 3: Optimization</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AutomationSection;
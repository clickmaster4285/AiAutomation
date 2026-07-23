// components/Nav.tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Workflow,
  RefreshCw,
  Bot,
  MessageSquare,
  PhoneCall,
  Brain,
  TrendingUp,
  Users,
  Headphones,
  Database,
  GitMerge,
  Zap,
  Layers,
  Settings,
  FileText,
  Plug,
  GitBranch,
  Mail,
  Rocket,
  DollarSign,
  Heart,
  Scale,
  ShoppingBag,
  Cloud,
  Briefcase,
  BarChart3,
  Lightbulb,
  Target,
  Sparkles,
  BookOpen,
  Rocket as RocketIcon,
  CheckCircle,
  Calendar,
  Receipt,
} from 'lucide-react';
import {
  serviceCategories,
  platformCategories,
  industryCategories,
  PlatformCategory,
  PlatformItem,
  IndustryCategory,
  IndustryItem,
} from '@/content/index';

// ── Service icons by title (for right panel) ──
const serviceIconMap: Record<string, React.ElementType> = {
  // Core Automation
  'AI Workflow Automation': Workflow,
  'Business Process Automation': RefreshCw,
  'Robotic Process Automation (RPA)': Bot,
  
  // AI Agents & Assistants
  'AI Agent Development': Brain,
  'AI Chatbot Automation': MessageSquare,
  'AI Voice Agents': PhoneCall,
  'AI Knowledge Assistants': Brain,
  
  // Automation by Function
  'AI Sales Automation': TrendingUp,
  'AI Marketing Automation': Users,
  'AI Customer Support Automation': Headphones,
  'AI Data & Document Automation': FileText,
  'AI Integration Services': GitMerge,
  
  // Standalone Services (new pages - no category)
  'AI Consulting Services': Lightbulb,
  'Custom AI Development': Briefcase,
  'AI Reporting Automation': BarChart3,
  'AI Lead Generation': Target,
};

// ── Category icons (left panel) ──
const categoryIconMap: Record<string, React.ElementType> = {
  'Core Automation': Settings,
  'AI Agents & Assistants': Bot,
  'Automation by Function': Layers,
};

// ── Platform icons ──
const platformIconMap: Record<string, React.ElementType> = {
  'Zapier': Zap,
  'Make (Integromat)': Workflow,
  'n8n': GitBranch,
  'HubSpot': Mail,
  'GoHighLevel': Rocket,
  'Airtable': Database,
  'Salesforce': Cloud,
};

// ── Industry icons ──
const industryIconMap: Record<string, React.ElementType> = {
  'Finance & Accounting': DollarSign,
  'Healthcare': Heart,
  'Law Firms': Scale,
  'E-commerce': ShoppingBag,
  'SaaS': Cloud,
};

// ── Solutions data ──
const solutionsData = [
  {
    title: 'AI Chatbot Solutions',
    slug: 'ai-chatbots',
    description: 'Intelligent chatbots that answer, qualify, and book automatically.',
    icon: MessageSquare,
  },
  {
    title: 'AI Voice Agents',
    slug: 'ai-voice-agents',
    description: 'Intelligent voice conversations that answer, book, and route automaticallynever miss a call.',
    icon: PhoneCall,
  },
  {
    title: 'AI Workflow Automation',
    slug: 'ai-workflow-automation',
    description: 'Multi-step processes that run automatically across your tools.',
    icon: Workflow,
  },
  {
    title: 'Appointment & Booking Automation',
    slug: 'appointment-booking-automation',
    description: 'Automation that books, confirms, and remindsnever miss a booking again.',
    icon: Calendar,
  },
  {
    title: 'Business Process Automation',
    slug: 'bussiness-process-automation',
    description: 'Automation that runs, coordinates, and completesend-to-end processes that eliminate manual hand-offs.',
    icon: RefreshCw,
  },
  {
    title: 'CRM Automation',
    slug: 'crm-automation',
    description: 'Keep your CRM accurate and active without manual data entry.',
    icon: Database,
  },
  {
    title: 'Document & Data Automation',
    slug: 'document-automation',
    description: 'Extract, validate, and route data from documents automatically.',
    icon: FileText,
  },
  {
    title: 'Invoice & Finance Automation',
    slug: 'invoice-automation',
    description: 'Capture, validate, and post invoices automaticallycut days from the close.',
    icon: Receipt,
  },
  {
    title: 'Lead Generation Automation',
    slug: 'lead-generation-automation',
    description: 'Capture, qualify, and route leads instantly with AI.',
    icon: Target,
  },
  {
    title: 'Customer Support Automation',
    slug: 'customer-support-automation',
    description: 'AI agents that resolve tickets and escalate complex cases.',
    icon: Headphones,
  },
  {
    title: 'Marketing Automation',
    slug: 'marketing-automation',
    description: 'AI-driven content, nurture sequences, and campaign management.',
    icon: TrendingUp,
  },
  {
    title: 'Reporting Automation',
    slug: 'reporting-automation',
    description: 'Automated reports and dashboards with AI summaries.',
    icon: BarChart3,
  },
  {
    title: 'Sales Automation',
    slug: 'sales-automation',
    description: 'Enrich, follow up, and log automatically so reps can sell.',
    icon: Briefcase,
  },
  {
    title: 'AI Agent Development',
    slug: 'ai-agents',
    description: 'Custom AI agents that reason, act, and complete tasks automatically for your industry.',
    icon: Brain,
  },
];

// ── Standalone services ──
const standaloneServices = [
  { title: 'AI Consulting Services', slug: 'ai-consulting', description: 'Strategy that shipsopportunity audits, roadmaps, and implementation.' },
  { title: 'Custom AI Development', slug: 'custom-ai-development', description: 'Custom AI solutions on proven models with honest scoping.' },
  { title: 'AI Reporting Automation', slug: 'ai-reporting-automation', description: 'Automated reports and dashboards with AI summaries.' },
  { title: 'AI Lead Generation', slug: 'ai-lead-generation', description: 'AI-powered lead generation and qualification systems.' },
];

const FallbackIcon = Plug;

export default function Nav() {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isPlatformsOpen, setIsPlatformsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isMobilePlatformsOpen, setIsMobilePlatformsOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const solutionsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const platformTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industryTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isServicesOpen && serviceCategories.length > 0 && !activeCategory) {
      setActiveCategory(serviceCategories[0].title);
    }
  }, [isServicesOpen, activeCategory]);

  // Handle hash navigation after page load
  useEffect(() => {
    if (pathname === '/') {
      const hash = window.location.hash;
      if (hash) {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          setTimeout(() => {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    }
  }, [pathname]);

  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };
  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
      setActiveCategory(null);
    }, 200);
  };
  const handleServicesDropdownMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsServicesOpen(true);
  };
  const handleServicesDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
      setActiveCategory(null);
    }, 200);
  };

  const handleSolutionsMouseEnter = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    setIsSolutionsOpen(true);
  };
  const handleSolutionsMouseLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => setIsSolutionsOpen(false), 200);
  };
  const handleSolutionsDropdownMouseEnter = () => {
    if (solutionsTimeoutRef.current) clearTimeout(solutionsTimeoutRef.current);
    setIsSolutionsOpen(true);
  };
  const handleSolutionsDropdownMouseLeave = () => {
    solutionsTimeoutRef.current = setTimeout(() => setIsSolutionsOpen(false), 200);
  };

  const handlePlatformsMouseEnter = () => {
    if (platformTimeoutRef.current) clearTimeout(platformTimeoutRef.current);
    setIsPlatformsOpen(true);
  };
  const handlePlatformsMouseLeave = () => {
    platformTimeoutRef.current = setTimeout(() => setIsPlatformsOpen(false), 200);
  };
  const handlePlatformsDropdownMouseEnter = () => {
    if (platformTimeoutRef.current) clearTimeout(platformTimeoutRef.current);
    setIsPlatformsOpen(true);
  };
  const handlePlatformsDropdownMouseLeave = () => {
    platformTimeoutRef.current = setTimeout(() => setIsPlatformsOpen(false), 200);
  };

  const handleIndustriesMouseEnter = () => {
    if (industryTimeoutRef.current) clearTimeout(industryTimeoutRef.current);
    setIsIndustriesOpen(true);
  };
  const handleIndustriesMouseLeave = () => {
    industryTimeoutRef.current = setTimeout(() => setIsIndustriesOpen(false), 200);
  };
  const handleIndustriesDropdownMouseEnter = () => {
    if (industryTimeoutRef.current) clearTimeout(industryTimeoutRef.current);
    setIsIndustriesOpen(true);
  };
  const handleIndustriesDropdownMouseLeave = () => {
    industryTimeoutRef.current = setTimeout(() => setIsIndustriesOpen(false), 200);
  };

  const handleCategoryHover = (title: string) => setActiveCategory(title);

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: -12, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.97,
      transition: { duration: 0.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const serviceItemVariants: Variants = {
    hidden: { opacity: 0, x: -8 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.04, duration: 0.2, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const activeCat = serviceCategories.find(cat => cat.title === activeCategory);
  const activeServices = activeCat?.services ?? [];

  const getServiceIcon = (title: string) => {
    const Icon = serviceIconMap[title] || FallbackIcon;
    return <Icon className="h-4 w-4 text-brand flex-shrink-0" />;
  };

  const getCategoryIcon = (title: string) => {
    const Icon = categoryIconMap[title] || FallbackIcon;
    return <Icon className="h-4 w-4 flex-shrink-0" />;
  };

  const getPlatformIcon = (title: string) => {
    const Icon = platformIconMap[title] || FallbackIcon;
    return <Icon className="h-4 w-4 text-brand flex-shrink-0" />;
  };

  const getIndustryIcon = (title: string) => {
    const Icon = industryIconMap[title] || FallbackIcon;
    return <Icon className="h-4 w-4 text-brand flex-shrink-0" />;
  };

  const getSolutionIcon = (title: string) => {
    const solution = solutionsData.find(s => s.title === title);
    const Icon = solution?.icon || Sparkles;
    return <Icon className="h-4 w-4 text-brand flex-shrink-0" />;
  };

  // Close all dropdowns
  const closeAllDropdowns = () => {
    setIsServicesOpen(false);
    setIsSolutionsOpen(false);
    setIsPlatformsOpen(false);
    setIsIndustriesOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-black/5'
          : 'bg-white/80 backdrop-blur-md border-b border-gray-200/30'
      }`}
    >
      <div className="mx-auto max-w-[84vw] px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center py-2 md:py-3">
          <Image
            src="/images/clickmasters-logo.png"
            alt="ClickMasters"
            width={180}
            height={24}
            className="h-4 w-auto md:h-5"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {/* ── SERVICES DROPDOWN ── */}
          <div
            className="relative"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isServicesOpen ? 'rotate-180 text-brand' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {isServicesOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 top-full mt-3 w-[780px] rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-black/10 overflow-hidden"
                  onMouseEnter={handleServicesDropdownMouseEnter}
                  onMouseLeave={handleServicesDropdownMouseLeave}
                >
                  <div className="flex" style={{ minHeight: '360px' }}>
                    {/* LEFT PANEL: Categories */}
                    <div className="w-[220px] flex-shrink-0 bg-gray-50 border-r border-gray-200 flex flex-col">
                      <div className="px-5 pt-5 pb-3 border-b border-gray-200">
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.12em]">
                          What we do
                        </p>
                      </div>

                      <div className="flex-1 py-2">
                        {serviceCategories.map((category, idx) => {
                          const isActive = activeCategory === category.title;
                          return (
                            <Link
                              key={idx}
                              href={category.slug === 'ai-strategy-development' ? '/services/ai-strategy-development' : `/services/${category.slug}`}
                              className={`w-full text-left px-5 py-3 flex items-center gap-3 transition-all duration-150 relative group ${
                                isActive ? 'bg-white' : 'hover:bg-white/70'
                              }`}
                              style={{
                                borderRight: isActive
                                  ? '2px solid var(--brand, #f97316)'
                                  : '2px solid transparent',
                              }}
                              onMouseEnter={() => handleCategoryHover(category.title)}
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <span
                                className={`w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold flex-shrink-0 transition-colors ${
                                  isActive
                                    ? 'bg-brand text-white'
                                    : 'bg-gray-200 text-gray-500 hover:bg-gray-300 hover:text-gray-700'
                                }`}
                              >
                                {getCategoryIcon(category.title)}
                              </span>
                              <span
                                className={`text-sm font-medium leading-tight transition-all duration-200 ${
                                  isActive
                                    ? 'text-gray-900 font-bold'
                                    : 'text-gray-500 group-hover:text-gray-900 group-hover:font-bold'
                                }`}
                              >
                                {category.title}
                              </span>
                              {isActive && (
                                <ArrowRight className="ml-auto h-3.5 w-3.5 text-brand flex-shrink-0" />
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                    {/* RIGHT PANEL: Sub-services with icons */}
                    <div className="flex-1 flex flex-col">
                      <div className="px-6 pt-5 pb-3 border-b border-gray-200 flex items-center justify-between">
                        <div>
                          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.12em]">
                            Solutions
                          </p>
                          <p className="text-sm font-semibold text-gray-900 mt-0.5">
                            {activeCategory}
                          </p>
                        </div>
                        <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-2.5 py-1 rounded-full border border-gray-200">
                          {activeServices.length} services
                        </span>
                      </div>

                      <div className="flex-1 p-4 grid grid-cols-2 gap-2 content-start overflow-y-auto">
                        {activeServices.map((service, idx) => (
                          <motion.div
                            key={`${activeCategory}-${idx}`}
                            custom={idx}
                            variants={serviceItemVariants}
                            initial="hidden"
                            animate="visible"
                          >
                            <Link
                              href={`/services/${activeCat?.slug}/${service.slug}`}
                              className="group flex items-start gap-3 p-3 rounded-xl border border-transparent hover:border-gray-200 hover:bg-gray-50 transition-all duration-200"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <div className="mt-0.5 w-5 h-5 flex items-center justify-center flex-shrink-0">
                                {getServiceIcon(service.title)}
                              </div>
                              <div className="min-w-0">
                                <span className="text-sm font-medium text-gray-700 group-hover:text-brand transition-colors block leading-tight">
                                  {service.title}
                                </span>
                                {service.description && (
                                  <p className="text-xs text-gray-400 mt-0.5 leading-snug line-clamp-2">
                                    {service.description}
                                  </p>
                                )}
                              </div>
                              <ArrowRight className="ml-auto h-3.5 w-3.5 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-brand flex-shrink-0 mt-0.5 transition-all" />
                            </Link>
                          </motion.div>
                        ))}
                      </div>

                      <div className="px-6 py-3 border-t border-gray-200 bg-gray-50/50 flex items-center justify-between">
                        <p className="text-xs text-gray-400">Not sure what you need?</p>
                        <Link
                          href="/contact"
                          className="text-xs font-semibold text-brand hover:underline flex items-center gap-1"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          Talk to us <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── SOLUTIONS DROPDOWN ── */}
          <div
            className="relative"
            onMouseEnter={handleSolutionsMouseEnter}
            onMouseLeave={handleSolutionsMouseLeave}
          >
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors"
              onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
            >
              Solutions
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isSolutionsOpen ? 'rotate-180 text-brand' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {isSolutionsOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 top-full mt-3 w-[780px] rounded-2xl border border-gray-200 bg-white shadow-2xl shadow-black/10 overflow-hidden"
                  onMouseEnter={handleSolutionsDropdownMouseEnter}
                  onMouseLeave={handleSolutionsDropdownMouseLeave}
                >
                  <div className="p-4 max-h-[80vh] overflow-y-auto">
                    <div className="flex items-center gap-2 px-3 pb-3 border-b border-gray-100">
                      <Sparkles className="h-4 w-4 text-brand" />
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.12em]">
                        AI Automation Solutions
                      </p>
                      <span className="text-[10px] font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full ml-auto">
                        {solutionsData.length}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 pt-3">
                      {solutionsData.map((solution, idx) => {
                        const Icon = solution.icon || Sparkles;
                        return (
                          <Link
                            key={idx}
                            href={`/solutions/${solution.slug}`}
                            className="flex items-start gap-3 px-3 py-3 rounded-xl hover:bg-brand/10 transition-all duration-200 group"
                            onClick={() => setIsSolutionsOpen(false)}
                          >
                            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand text-sm mt-0.5">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div className="min-w-0">
                              <span className="text-sm font-medium text-gray-800 group-hover:text-brand transition-colors block leading-tight">
                                {solution.title}
                              </span>
                              <p className="text-xs text-gray-400 group-hover:text-gray-500 transition-colors leading-snug mt-0.5 line-clamp-2">
                                {solution.description}
                              </p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>

                    <div className="mt-3 pt-3 border-t border-gray-100 px-3 flex items-center justify-between">
                      <p className="text-xs text-gray-400">Need a custom solution?</p>
                      <Link
                        href="/contact"
                        className="text-xs font-semibold text-brand hover:underline flex items-center gap-1"
                        onClick={() => setIsSolutionsOpen(false)}
                      >
                        Contact us <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Platforms Dropdown ── */}
          <div
            className="relative"
            onMouseEnter={handlePlatformsMouseEnter}
            onMouseLeave={handlePlatformsMouseLeave}
          >
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors"
              onClick={() => setIsPlatformsOpen(!isPlatformsOpen)}
            >
              Platforms
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isPlatformsOpen ? 'rotate-180 text-brand' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {isPlatformsOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 top-full mt-2 w-[420px] rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10 overflow-hidden"
                  onMouseEnter={handlePlatformsDropdownMouseEnter}
                  onMouseLeave={handlePlatformsDropdownMouseLeave}
                >
                  <div className="p-3">
                    {platformCategories.length > 0 ? (
                      <>
                        {platformCategories.map((category: PlatformCategory, idx: number) => (
                          <Link
                            key={idx}
                            href={category.platforms[0]?.path || '#'}
                            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-brand/10 transition-all duration-200 group"
                            onClick={() => setIsPlatformsOpen(false)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand font-bold text-sm">
                                {getPlatformIcon(category.title)}
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-800 group-hover:text-brand transition-colors">
                                  {category.title}
                                </span>
                                {category.platforms[0]?.description && (
                                  <p className="text-xs text-gray-400 group-hover:text-gray-500 transition-colors">
                                    {category.platforms[0].description}
                                  </p>
                                )}
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-brand transition-colors" />
                          </Link>
                        ))}

                        <div className="mt-2 pt-2 border-t border-gray-100">
                          <Link
                            href="/platforms/airtable-automation-services"
                            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-brand/10 transition-all duration-200 group"
                            onClick={() => setIsPlatformsOpen(false)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand font-bold text-sm">
                                {getPlatformIcon('Airtable')}
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-800 group-hover:text-brand transition-colors">
                                  Airtable
                                </span>
                                <p className="text-xs text-gray-400 group-hover:text-gray-500 transition-colors">
                                  Custom operational systems and AI-connected bases
                                </p>
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-brand transition-colors" />
                          </Link>
                        </div>
                      </>
                    ) : (
                      <div className="px-4 py-6 text-center">
                        <p className="text-sm text-gray-400">No platforms available yet.</p>
                        <Link
                          href="/contact"
                          className="text-xs font-semibold text-brand hover:underline mt-2 inline-flex items-center gap-1"
                          onClick={() => setIsPlatformsOpen(false)}
                        >
                          Contact us <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Industries Dropdown ── */}
          <div
            className="relative"
            onMouseEnter={handleIndustriesMouseEnter}
            onMouseLeave={handleIndustriesMouseLeave}
          >
            <button
              className="flex items-center gap-1 text-gray-700 hover:text-black transition-colors"
              onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
            >
              Industries
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${
                  isIndustriesOpen ? 'rotate-180 text-brand' : ''
                }`}
              />
            </button>

            <AnimatePresence>
              {isIndustriesOpen && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute left-0 top-full mt-2 w-[420px] rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10 overflow-hidden"
                  onMouseEnter={handleIndustriesDropdownMouseEnter}
                  onMouseLeave={handleIndustriesDropdownMouseLeave}
                >
                  <div className="p-3">
                    {industryCategories.map((category: IndustryCategory, idx: number) => (
                      <div key={idx}>
                        {category.industries.map((industry: IndustryItem, i: number) => (
                          <Link
                            key={i}
                            href={industry.path}
                            className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-brand/10 transition-all duration-200 group"
                            onClick={() => setIsIndustriesOpen(false)}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand font-bold text-sm">
                                {getIndustryIcon(industry.title)}
                              </div>
                              <div>
                                <span className="text-sm font-medium text-gray-800 group-hover:text-brand transition-colors">
                                  {industry.title}
                                </span>
                                {industry.description && (
                                  <p className="text-xs text-gray-400 group-hover:text-gray-500 transition-colors">
                                    {industry.description}
                                  </p>
                                )}
                              </div>
                            </div>
                            <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-brand transition-colors" />
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ── Work & Process Links with Hash Navigation ── */}
          <Link 
            href="/#work" 
            className="text-gray-700 hover:text-black transition-colors"
            onClick={closeAllDropdowns}
          >
            Work
          </Link>
          
          <Link 
            href="/#process" 
            className="text-gray-700 hover:text-black transition-colors"
            onClick={closeAllDropdowns}
          >
            Process
          </Link>
          
          <Link href="/about" className="text-gray-700 hover:text-black transition-colors">
            About
          </Link>
          
          <Link href="/contact" className="text-gray-700 hover:text-black transition-colors">
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-block bg-black hover:bg-gray-800 text-white text-sm px-5 py-2 transition-colors rounded-none font-medium"
        >
          Book a Call
        </Link>

        <button
          className="md:hidden text-gray-700 hover:text-black transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-4">
            {/* Mobile Services */}
            <div>
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                <span className="font-medium">Services</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileServicesOpen && (
                <div className="mt-2 pl-4 space-y-6 border-l-2 border-brand/30">
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Services
                    </p>
                    {serviceCategories.map((category, idx) => (
                      <div key={idx} className="mb-4">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-5 h-5 rounded bg-brand/10 text-brand flex items-center justify-center">
                            {getCategoryIcon(category.title)}
                          </span>
                          <Link
                            href={`/services/${category.slug}`}
                            className="text-sm font-medium text-gray-800 hover:text-brand transition-colors"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileServicesOpen(false);
                            }}
                          >
                            {category.title}
                          </Link>
                        </div>
                        <div className="ml-7 space-y-1">
                          {category.services.map((service, sIdx) => (
                            <Link
                              key={sIdx}
                              href={`/services/${category.slug}/${service.slug}`}
                              className="flex items-center gap-3 py-1.5 text-sm text-gray-600 hover:text-brand transition-colors"
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setIsMobileServicesOpen(false);
                              }}
                            >
                              {getServiceIcon(service.title)}
                              <div>
                                <span>{service.title}</span>
                                {service.description && (
                                  <span className="text-xs text-gray-400 block">
                                    {service.description}
                                  </span>
                                )}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      {standaloneServices.map((service, idx) => (
                        <Link
                          key={idx}
                          href={`/services/${service.slug}`}
                          className="flex items-center gap-3 py-2 text-sm text-gray-600 hover:text-brand transition-colors"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                        >
                          {getServiceIcon(service.title)}
                          <span>{service.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Solutions */}
            <div>
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
              >
                <span className="font-medium">Solutions</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileSolutionsOpen && (
                <div className="mt-2 pl-4 space-y-2 border-l border-gray-200">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="h-4 w-4 text-brand" />
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      AI Automation Solutions
                    </p>
                  </div>
                  {solutionsData.map((solution, idx) => {
                    const Icon = solution.icon || Sparkles;
                    return (
                      <Link
                        key={idx}
                        href={`/solutions/${solution.slug}`}
                        className="flex items-start gap-3 py-2 px-3 rounded-lg hover:bg-brand/10 transition-colors"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileSolutionsOpen(false);
                        }}
                      >
                        <div className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand text-xs mt-0.5">
                          <Icon className="h-3.5 w-3.5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-gray-700">{solution.title}</p>
                          <p className="text-xs text-gray-400">{solution.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Mobile Platforms */}
            <div>
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMobilePlatformsOpen(!isMobilePlatformsOpen)}
              >
                <span className="font-medium">Platforms</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobilePlatformsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobilePlatformsOpen && (
                <div className="mt-2 pl-4 space-y-3 border-l border-gray-200">
                  {platformCategories.length > 0 ? (
                    <>
                      {platformCategories.map((category: PlatformCategory, idx: number) => (
                        <Link
                          key={idx}
                          href={category.platforms[0]?.path || '#'}
                          className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-brand/10 transition-colors"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobilePlatformsOpen(false);
                          }}
                        >
                          <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand font-bold text-xs">
                            {getPlatformIcon(category.title)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700">{category.title}</p>
                            {category.platforms[0]?.description && (
                              <p className="text-xs text-gray-400">
                                {category.platforms[0].description}
                              </p>
                            )}
                          </div>
                        </Link>
                      ))}

                      <Link
                        href="/platforms/airtable-automation-services"
                        className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-brand/10 transition-colors"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobilePlatformsOpen(false);
                        }}
                      >
                        <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand font-bold text-xs">
                          {getPlatformIcon('Airtable')}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-700">Airtable</p>
                          <p className="text-xs text-gray-400">Custom operational systems and AI-connected bases</p>
                        </div>
                      </Link>
                    </>
                  ) : (
                    <div className="py-3 px-3">
                      <p className="text-sm text-gray-400">No platforms available yet.</p>
                      <Link
                        href="/contact"
                        className="text-xs font-semibold text-brand hover:underline mt-1 inline-flex items-center gap-1"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobilePlatformsOpen(false);
                        }}
                      >
                        Contact us <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Mobile Industries */}
            <div>
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
              >
                <span className="font-medium">Industries</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isMobileIndustriesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileIndustriesOpen && (
                <div className="mt-2 pl-4 space-y-3 border-l border-gray-200">
                  {industryCategories.map((category: IndustryCategory, idx: number) => (
                    <div key={idx}>
                      {category.industries.map((industry: IndustryItem, i: number) => (
                        <Link
                          key={i}
                          href={industry.path}
                          className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-brand/10 transition-colors"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsMobileIndustriesOpen(false);
                          }}
                        >
                          <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand font-bold text-xs">
                            {getIndustryIcon(industry.title)}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-700">{industry.title}</p>
                            {industry.description && (
                              <p className="text-xs text-gray-400">{industry.description}</p>
                            )}
                          </div>
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Work & Process with Hash Navigation */}
            <Link 
              href="/#work" 
              className="block text-gray-700 hover:text-black transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </Link>
            
            <Link 
              href="/#process" 
              className="block text-gray-700 hover:text-black transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Process
            </Link>
            
            <Link 
              href="/about" 
              className="block text-gray-700 hover:text-black transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            
            <Link 
              href="/contact" 
              className="block text-gray-700 hover:text-black transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <Link
              href="/contact"
              className="block w-full text-center bg-black hover:bg-gray-800 text-white text-sm px-5 py-3 transition-colors rounded-none font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
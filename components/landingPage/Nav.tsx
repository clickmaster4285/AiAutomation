'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, Menu, X, Sparkles, ArrowRight } from 'lucide-react';
import {
  serviceCategories,
  platformCategories,
  industryCategories,
  PlatformCategory,
  PlatformItem,
  IndustryCategory,
  IndustryItem,
} from '@/content/index';

export default function Nav() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPlatformsOpen, setIsPlatformsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobilePlatformsOpen, setIsMobilePlatformsOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activePlatformCategory, setActivePlatformCategory] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const platformTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industryTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isServicesOpen && serviceCategories.length > 0 && !activeCategory) {
      setActiveCategory(serviceCategories[0].title);
    }
  }, [isServicesOpen, activeCategory]);

  useEffect(() => {
    if (isPlatformsOpen && platformCategories.length > 0 && !activePlatformCategory) {
      setActivePlatformCategory(platformCategories[0].title);
    }
  }, [isPlatformsOpen, activePlatformCategory]);

  // ── Services handlers ──
  const handleServicesMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
      setActiveCategory(null);
    }, 200);
  };

  const handleServicesDropdownMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleServicesDropdownMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
      setActiveCategory(null);
    }, 200);
  };

  const handleCategoryHover = (categoryTitle: string) => {
    setActiveCategory(categoryTitle);
  };

  // ── Platforms handlers ──
  const handlePlatformsMouseEnter = () => {
    if (platformTimeoutRef.current) {
      clearTimeout(platformTimeoutRef.current);
      platformTimeoutRef.current = null;
    }
    setIsPlatformsOpen(true);
  };

  const handlePlatformsMouseLeave = () => {
    platformTimeoutRef.current = setTimeout(() => {
      setIsPlatformsOpen(false);
    }, 200);
  };

  const handlePlatformsDropdownMouseEnter = () => {
    if (platformTimeoutRef.current) {
      clearTimeout(platformTimeoutRef.current);
      platformTimeoutRef.current = null;
    }
    setIsPlatformsOpen(true);
  };

  const handlePlatformsDropdownMouseLeave = () => {
    platformTimeoutRef.current = setTimeout(() => {
      setIsPlatformsOpen(false);
    }, 200);
  };

  // ── Industries handlers ──
  const handleIndustriesMouseEnter = () => {
    if (industryTimeoutRef.current) {
      clearTimeout(industryTimeoutRef.current);
      industryTimeoutRef.current = null;
    }
    setIsIndustriesOpen(true);
  };

  const handleIndustriesMouseLeave = () => {
    industryTimeoutRef.current = setTimeout(() => {
      setIsIndustriesOpen(false);
    }, 200);
  };

  const handleIndustriesDropdownMouseEnter = () => {
    if (industryTimeoutRef.current) {
      clearTimeout(industryTimeoutRef.current);
      industryTimeoutRef.current = null;
    }
    setIsIndustriesOpen(true);
  };

  const handleIndustriesDropdownMouseLeave = () => {
    industryTimeoutRef.current = setTimeout(() => {
      setIsIndustriesOpen(false);
    }, 200);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg shadow-black/5'
          : 'bg-white/80 backdrop-blur-md border-b border-gray-200/30'
      }`}
    >
      {/* Inner container with exact same padding as page content */}
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16 xl:px-20 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/clickmasters-logo.png"
            alt="ClickMasters"
            width={180}
            height={24}
            className="h-4 w-auto md:h-5"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {/* Services Dropdown – unchanged */}
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

            {isServicesOpen && (
              <div
                className="absolute left-0 top-full mt-2 w-[640px] rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10 overflow-hidden"
                onMouseEnter={handleServicesDropdownMouseEnter}
                onMouseLeave={handleServicesDropdownMouseLeave}
              >
                <div className="flex">
                  <div className="w-1/3 border-r border-gray-100 py-4">
                    {serviceCategories.map((category, idx) => (
                      <div
                        key={idx}
                        className={`px-4 py-2.5 cursor-pointer transition-all duration-200 ${
                          activeCategory === category.title
                            ? 'bg-brand/10 border-r-2 border-brand text-brand'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                        onMouseEnter={() => handleCategoryHover(category.title)}
                      >
                        <span className="text-sm font-medium">{category.title}</span>
                      </div>
                    ))}
                  </div>
                  <div className="w-2/3 py-4 px-4">
                    {serviceCategories.map((category) => (
                      <div
                        key={category.title}
                        className={`transition-all duration-300 ${
                          activeCategory === category.title ? 'block' : 'hidden'
                        }`}
                      >
                        <div className="grid grid-cols-1 gap-1">
                          {category.services.map((service, idx) => (
                            <Link
                              key={idx}
                              href={service.path}
                              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-brand/10 hover:text-brand rounded-lg transition-all group"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <span className="font-medium">{service.title}</span>
                              <span className="block text-xs text-gray-400 group-hover:text-gray-500">
                                {service.path.replace('/services/', '').replace(/-/g, ' ')}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Platforms Dropdown – unchanged */}
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

            {isPlatformsOpen && (
              <div
                className="absolute left-0 top-full mt-2 w-[420px] rounded-2xl border border-gray-200 bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10 overflow-hidden"
                onMouseEnter={handlePlatformsDropdownMouseEnter}
                onMouseLeave={handlePlatformsDropdownMouseLeave}
              >
                <div className="p-3">
                  {platformCategories.map((category: PlatformCategory, idx: number) => (
                    <Link
                      key={idx}
                      href={category.platforms[0]?.path || '#'}
                      className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-brand/10 transition-all duration-200 group"
                      onClick={() => setIsPlatformsOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 bg-brand/20 text-brand font-bold text-sm">
                          {category.title.charAt(0)}
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
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown – unchanged */}
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

            {isIndustriesOpen && (
              <div
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
                              {industry.title.charAt(0)}
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
              </div>
            )}
          </div>

          <Link href="/#work" className="text-gray-700 hover:text-black transition-colors">
            Work
          </Link>
          <Link href="/#process" className="text-gray-700 hover:text-black transition-colors">
            Process
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-black transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-black transition-colors">
            Contact
          </Link>
        </nav>

        {/* ── Desktop Book a Call – square corners ── */}
        <Link
          href="/free-automation-audit"
          className="hidden md:inline-block bg-black hover:bg-gray-800 text-white text-sm px-5 py-2 transition-colors rounded-none font-medium"
        >
          Book a Call
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-black transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-xl">
          <div className="px-6 py-4 space-y-4">
            {/* Mobile Services Dropdown – unchanged */}
            <div>
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                <span className="font-medium">Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isMobileServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isMobileServicesOpen && (
                <div className="mt-2 pl-4 space-y-4 border-l border-gray-200">
                  {serviceCategories.map((category, idx) => (
                    <div key={idx}>
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        {category.title}
                      </p>
                      <div className="space-y-1 pl-2">
                        {category.services.map((service, serviceIdx) => (
                          <Link
                            key={serviceIdx}
                            href={service.path}
                            className="block py-1.5 text-sm text-gray-600 hover:text-brand transition-colors"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsMobileServicesOpen(false);
                            }}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Platforms Dropdown – unchanged */}
            <div>
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMobilePlatformsOpen(!isMobilePlatformsOpen)}
              >
                <span className="font-medium">Platforms</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isMobilePlatformsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isMobilePlatformsOpen && (
                <div className="mt-2 pl-4 space-y-3 border-l border-gray-200">
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
                        {category.title.charAt(0)}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">{category.title}</p>
                        {category.platforms[0]?.description && (
                          <p className="text-xs text-gray-400">{category.platforms[0].description}</p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Industries Dropdown – unchanged */}
            <div>
              <button
                className="flex items-center justify-between w-full text-gray-700 hover:text-black transition-colors"
                onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
              >
                <span className="font-medium">Industries</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isMobileIndustriesOpen ? 'rotate-180' : ''
                  }`}
                />
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
                            {industry.title.charAt(0)}
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

            {/* ── Mobile Book a Call – square corners ── */}
            <Link
              href="/free-automation-audit"
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
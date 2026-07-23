'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { Gb, Us, Pk } from 'react-flag-icons';
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();

  // ── Scroll utility ──
  const scrollToSection = (sectionId: string, offset: number = 80) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleWorkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Check if we're on the homepage
    if (window.location.pathname === '/') {
      // If on homepage, scroll directly to work section
      scrollToSection('work');
    } else {
      // If on another page, navigate to homepage with hash
      router.push('/#work');
    }
  };

  const handleProcessClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    
    // Check if we're on the homepage
    if (window.location.pathname === '/') {
      // If on homepage, scroll directly to process section
      scrollToSection('process');
    } else {
      // If on another page, navigate to homepage with hash
      router.push('/#process');
    }
  };

  return (
    <footer className="bg-muted text-gray-600 border-t border-muted-foreground/10 py-12 md:py-20">
      <div className="mx-auto max-w-[84vw] px-6">
        {/* ── Grid with equal spacing between all 4 columns ── */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4 items-start">
          
          {/* Brand - Column 1 */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/clickmasters-logo.png"
                alt="ClickMasters"
                width={180}
                height={24}
                className="h-6 w-auto md:h-7"
                priority
              />
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              AI automation that businesses actually use and own built for production, not presentations.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-block w-8 h-0.5 bg-brand" />
              <span className="text-xs font-medium tracking-widest text-brand uppercase">Trusted partner</span>
            </div>
          </div>

          {/* Company - Column 2 */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="/#work" 
                  onClick={handleWorkClick}
                  className="text-sm hover:text-brand transition-colors duration-200 cursor-pointer"
                >
                  Work
                </a>
              </li>
              <li>
                <a 
                  href="/#process" 
                  onClick={handleProcessClick}
                  className="text-sm hover:text-brand transition-colors duration-200 cursor-pointer"
                >
                  Process
                </a>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-brand transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-brand transition-colors duration-200">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - Column 3 */}
          <div>
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-brand mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:sales@clickmastersdigitalmarketing.com" 
                  className="hover:text-brand transition-colors break-all"
                >
                  sales@clickmastersdigital<br />marketing.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-brand mt-0.5 flex-shrink-0" />
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-500 min-w-[28px]">UK</span>
                    <Gb className="w-5 h-4 flex-shrink-0" />
                    <a href="tel:+447988576086" className="hover:text-brand transition-colors whitespace-nowrap">+44 7988 576086</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-500 min-w-[28px]">US</span>
                    <Us className="w-5 h-4 flex-shrink-0" />
                    <a href="tel:+13252024074" className="hover:text-brand transition-colors whitespace-nowrap">+1 325 202 4074</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-500 min-w-[28px]">PK</span>
                    <Pk className="w-5 h-4 flex-shrink-0" />
                    <a href="tel:+923325394285" className="hover:text-brand transition-colors whitespace-nowrap">+92 332 5394285</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Get in Touch - Column 4 - Right aligned */}
          <div className="flex flex-col items-start lg:items-end gap-4">
            <h4 className="text-foreground font-semibold text-sm uppercase tracking-wider lg:text-right w-full">Get in Touch</h4>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-medium px-6 py-3 rounded-none transition-all shadow-lg shadow-brand/25 hover:shadow-brand/40 group"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-xs text-muted-foreground lg:text-right w-full">We reply within a few hours.</p>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="mt-10 pt-6 border-t border-muted-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© 2026 Clickmastersaiautomationcompany. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="hover:text-brand transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-brand transition-colors">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-brand transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
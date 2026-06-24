'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Mail, Phone, ArrowRight } from 'lucide-react';

let footerRendered = false;

export default function Footer() {
  useEffect(() => {
    if (footerRendered) {
      console.warn('⚠️ Footer duplicate detected – remove duplicate <Footer />.');
    }
    footerRendered = true;
    return () => { footerRendered = false; };
  }, []);

  if (footerRendered) return null;

  return (
    <footer className="bg-black text-gray-400 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Clickmasters
            </h3>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              AI automation that businesses actually use and own — built for production, not presentations.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-block w-8 h-0.5 bg-brand" />
              <span className="text-xs font-medium tracking-widest text-brand uppercase">Trusted partner</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'Work', href: '/work' },
                { label: 'Process', href: '/process' },
                { label: 'Industries', href: '/industries' },
                { label: 'About', href: '/about' },
                { label: 'Blog', href: '/blog' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm hover:text-brand transition-colors duration-200">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-brand mt-0.5 flex-shrink-0" />
                <a href="mailto:sales@clickmastersdigitalmarketing.com" className="hover:text-brand transition-colors">
                  sales@clickmastersdigitalmarketing.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-brand mt-0.5 flex-shrink-0" />
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-600">🇬🇧</span>
                    <a href="tel:+447988576086" className="hover:text-brand transition-colors">+44 7988 576086</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-600">🇺🇸</span>
                    <a href="tel:+13252024074" className="hover:text-brand transition-colors">+1 325 202 4074</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-600">🇵🇰</span>
                    <a href="tel:+923325394285" className="hover:text-brand transition-colors">+92 332 5394285</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start gap-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider">Get in Touch</h4>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-medium px-6 py-3 rounded-full transition-all shadow-lg shadow-brand/25 hover:shadow-brand/40 group"
            >
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-xs text-gray-500">We reply within a few hours.</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© 2026 Clickmasters. All rights reserved.</p>
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
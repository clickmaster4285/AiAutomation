// app/solutions/layout.tsx
import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Automation Solutions | Clickmasters',
  description: 'Explore our AI automation solutions for business efficiency.',
};

export default function SolutionsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      {/* Optional: Add solutions-specific header or sidebar */}
      {children}
    </div>
  );
}
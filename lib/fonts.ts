// lib/fonts.ts
import { Bodoni_Moda } from 'next/font/google';

export const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['700', '900'],
  display: 'swap',
});

// Helper function for heading classes
export const headingClass = `${bodoni.className} text-3xl md:text-5xl lg:text-6xl text-gray-900 mb-6 leading-[1.05] font-black tracking-tight`;
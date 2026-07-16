// components/solutions/ui/BackButton.tsx
'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  className?: string;
}

export function BackButton({ className = '' }: BackButtonProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <motion.button
      onClick={handleBack}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileHover={{ 
        x: -4,
        backgroundColor: 'rgba(249, 115, 22, 0.08)',
        borderColor: 'rgba(249, 115, 22, 0.3)',
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ 
        duration: 0.4, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={`
        inline-flex items-center gap-2 
        px-4 py-2 
        text-sm font-medium text-gray-600 
        bg-white/80 backdrop-blur-sm
        border border-gray-200 
        rounded-lg 
        hover:text-brand 
        transition-all duration-300
        shadow-sm hover:shadow-md
        group ${className}
      `}
    >
      <motion.span
        initial={{ x: 0 }}
        whileHover={{ x: -4 }}
        transition={{ duration: 0.2 }}
        className="flex items-center gap-2"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back</span>
      </motion.span>
    </motion.button>
  );
}
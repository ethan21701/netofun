'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export default function SectionTitle({
  children,
  subtitle,
  centered = true,
  className = '',
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
    >
      <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : ''}`}>{children}</h2>
      <div className={`w-20 h-1 ${light ? 'bg-yellow-400' : 'bg-purple-500'} ${centered ? 'mx-auto' : ''} mb-4 rounded-full`} />
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto ${light ? 'text-white/90' : 'text-gray-700'}`}>{subtitle}</p>
      )}
    </motion.div>
  );
}

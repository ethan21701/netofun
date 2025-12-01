'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface CardProps {
  children?: ReactNode;
  className?: string;
  hover?: boolean;
  image?: string;
  imageAlt?: string;
  aspectRatio?: 'video' | 'square' | 'portrait';
}

export default function Card({
  children,
  className = '',
  hover = true,
  image,
  imageAlt = '',
  aspectRatio = 'video',
}: CardProps) {
  const aspectRatios = {
    video: 'aspect-video',
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
  };

  return (
    <motion.div
      whileHover={hover ? { y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' } : undefined}
      className={`bg-white rounded-2xl overflow-hidden shadow-lg ${className}`}
    >
      {image && (
        <div className={`relative ${aspectRatios[aspectRatio]} overflow-hidden`}>
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      {children}
    </motion.div>
  );
}

// Card sub-components
export function CardContent({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <h3 className={`text-xl font-bold mb-2 ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`text-gray-600 ${className}`}>{children}</p>;
}

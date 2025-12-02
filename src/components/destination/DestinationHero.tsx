'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Destination } from '@/data/destinations';

interface Props {
  destination: Destination;
}

export default function DestinationHero({ destination }: Props) {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image or Gradient */}
      {destination.heroImage ? (
        <Image
          src={destination.heroImage}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className={`absolute inset-0 bg-gradient-to-br ${destination.color}`} />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg mb-4 opacity-90">{destination.country}</p>
          <h1
            className="text-5xl md:text-7xl font-black mb-6"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            {destination.name}
          </h1>
          <p
            className="text-xl md:text-2xl font-light max-w-2xl mx-auto"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          >
            {destination.tagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

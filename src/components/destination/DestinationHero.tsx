'use client';

import { motion } from 'framer-motion';
import { Destination } from '@/data/destinations';

interface Props {
  destination: Destination;
}

export default function DestinationHero({ destination }: Props) {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${destination.color}`} />

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-lg mb-4 opacity-90">{destination.country}</p>
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            {destination.name}
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            {destination.tagline}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

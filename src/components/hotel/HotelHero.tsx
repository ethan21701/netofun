'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Hotel } from '@/data/hotels';

interface Props {
  hotel: Hotel;
}

export default function HotelHero({ hotel }: Props) {
  return (
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image or Gradient */}
      {hotel.heroImage ? (
        <Image
          src={hotel.heroImage}
          alt={hotel.name}
          fill
          className="object-cover"
          priority
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-primary-800" />
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
          <Link
            href={`/destinations/${hotel.destination}`}
            className="inline-block text-sm bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4 hover:bg-white/30 transition-colors"
          >
            {hotel.destinationName}
          </Link>
          <h1
            className="text-4xl md:text-6xl font-black mb-4"
            style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}
          >
            {hotel.name}
          </h1>
          <div className="flex items-center justify-center gap-1 text-yellow-400">
            {[...Array(hotel.starRating)].map((_, i) => (
              <span key={i} className="text-2xl">★</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';
import { Hotel } from '@/data/hotels';

interface Props {
  hotels: Hotel[];
  destinationName: string;
}

export default function DestinationHotels({ hotels, destinationName }: Props) {
  if (!hotels || hotels.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionTitle subtitle={`המלונות המומלצים שלנו ב${destinationName}`}>
          איפה תישנו?
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/hotels/${hotel.slug}`} className="group block">
                <div className="relative h-64 rounded-2xl overflow-hidden shadow-lg">
                  {hotel.heroImage ? (
                    <Image
                      src={hotel.heroImage}
                      alt={hotel.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 right-0 left-0 p-5 text-white">
                    <h3 className="text-xl font-bold mb-1">{hotel.name}</h3>
                    <div className="flex items-center gap-1 text-yellow-400 text-sm mb-2">
                      {[...Array(hotel.starRating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                    <p className="text-sm text-white/80 line-clamp-2">{hotel.intro}</p>

                    <div className="mt-3 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>לפרטים על המלון</span>
                      <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';

import { destinations as destinationsData } from '@/data/destinations';

const destinations = destinationsData.map(dest => ({
  slug: dest.slug,
  name: dest.name,
  country: dest.country,
  tagline: dest.tagline,
  image: dest.heroImage,
  color: dest.color,
}));

export default function DestinationsGrid() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-50/30 via-white to-gray-50">
      <Container>
        <SectionTitle subtitle="בחרו את היעד המושלם לחופשה הבאה שלכם">
          היעדים שלנו
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/destinations/${dest.slug}`} className="group block">
                <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
                  {/* Background Image or Gradient */}
                  {dest.image ? (
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`absolute inset-0 bg-gradient-to-br ${dest.color}`} />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
                    <p className="text-sm text-white/90 mb-1">{dest.country}</p>
                    <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                    <p className="text-white/90">{dest.tagline}</p>

                    <div className="mt-4 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      <span>לפרטים נוספים</span>
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

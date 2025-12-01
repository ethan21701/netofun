'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';

const destinations = [
  {
    slug: 'ayia-napa',
    name: 'איה נאפה',
    country: 'קפריסין',
    tagline: 'בירת המסיבות של קפריסין',
    image: '/images/destinations/ayia-napa.jpg',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    slug: 'malia',
    name: 'מאליה',
    country: 'יוון',
    tagline: 'חוויה יוונית בלתי נשכחת',
    image: '/images/destinations/malia.jpg',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    slug: 'rhodes',
    name: 'רודוס',
    country: 'יוון',
    tagline: 'האי המושלם לקיץ',
    image: '/images/destinations/rhodes.jpg',
    color: 'from-amber-500 to-orange-600',
  },
  {
    slug: 'sunny-beach',
    name: 'סאני ביץ׳',
    country: 'בולגריה',
    tagline: 'חופים זהובים ומחירים נוחים',
    image: '/images/destinations/sunny-beach.jpg',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    slug: 'lloret-de-mar',
    name: 'יורט דה מאר',
    country: 'ספרד',
    tagline: 'ריביירה ספרדית לוהטת',
    image: '/images/destinations/lloret.jpg',
    color: 'from-red-500 to-pink-600',
  },
  {
    slug: 'eilat',
    name: 'אילת',
    country: 'ישראל',
    tagline: 'פינוק ישראלי במפרץ',
    image: '/images/destinations/eilat.jpg',
    color: 'from-teal-500 to-emerald-600',
  },
];

export default function DestinationsGrid() {
  return (
    <section className="py-20">
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
                  {/* Gradient placeholder (will be replaced with actual image) */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${dest.color}`} />

                  {/* Image would go here when available */}
                  {/* <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  /> */}

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

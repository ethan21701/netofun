import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { hotels } from '@/data/hotels';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';

export const metadata: Metadata = {
  title: 'המלונות שלנו | נטו פאן',
  description: 'גלו את המלונות המומלצים של נטו פאן בכל היעדים - מלונות מושלמים לחופשת צעירים!',
};

export default function HotelsPage() {
  return (
    <div className="pt-24 pb-20">
      <Container>
        <SectionTitle subtitle="המלונות הכי טובים לחופשת צעירים">
          המלונות שלנו
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <Link
              key={hotel.slug}
              href={`/hotels/${hotel.slug}`}
              className="group block"
            >
              <div className="relative h-72 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
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

                <div className="absolute bottom-0 right-0 left-0 p-6 text-white">
                  <p className="text-sm text-white/90 mb-1">{hotel.destinationName}</p>
                  <h2 className="text-2xl font-bold mb-2">{hotel.name}</h2>
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    {[...Array(hotel.starRating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>

                  <div className="mt-3 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>לפרטים נוספים</span>
                    <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}

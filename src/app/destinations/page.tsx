import { Metadata } from 'next';
import Link from 'next/link';
import { destinations } from '@/data/destinations';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';

export const metadata: Metadata = {
  title: 'היעדים שלנו | נטו פאן',
  description: 'גלו את כל היעדים המדהימים של נטו פאן - איה נאפה, מאליה, רודוס, סאני ביץ, יורט דה מאר ואילת.',
};

export default function DestinationsPage() {
  return (
    <div className="pt-24 pb-20">
      <Container>
        <SectionTitle subtitle="בחרו את היעד המושלם לחופשה הבאה שלכם">
          היעדים שלנו
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <Link
              key={dest.slug}
              href={`/destinations/${dest.slug}`}
              className="group block"
            >
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
                <div className={`absolute inset-0 bg-gradient-to-br ${dest.color}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute bottom-0 right-0 left-0 p-8 text-white">
                  <p className="text-sm text-white/90 mb-2">{dest.country}</p>
                  <h2 className="text-3xl font-bold mb-3">{dest.name}</h2>
                  <p className="text-white/90 mb-4">{dest.tagline}</p>

                  <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
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

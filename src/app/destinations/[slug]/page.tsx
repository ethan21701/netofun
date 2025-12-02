import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { destinations, getDestinationBySlug, getAllDestinationSlugs } from '@/data/destinations';
import { getHotelsByDestination } from '@/data/hotels';
import Container from '@/components/shared/Container';
import DestinationHero from '@/components/destination/DestinationHero';
import SuitableFor from '@/components/destination/SuitableFor';
import PackageIncludes from '@/components/destination/PackageIncludes';
import DestinationFAQ from '@/components/destination/FAQ';
import DestinationLeadForm from '@/components/destination/DestinationLeadForm';
import DestinationGallery from '@/components/destination/DestinationGallery';
import DestinationHotels from '@/components/destination/DestinationHotels';

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllDestinationSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const destination = getDestinationBySlug(params.slug);
  if (!destination) return { title: 'יעד לא נמצא' };

  return {
    title: `${destination.name} | נטו פאן`,
    description: destination.description,
  };
}

export default function DestinationPage({ params }: Props) {
  const destination = getDestinationBySlug(params.slug);

  if (!destination) {
    notFound();
  }

  const hotels = getHotelsByDestination(params.slug);

  return (
    <>
      <DestinationHero destination={destination} />

      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-gray-600 leading-relaxed">
              {destination.description}
            </p>
          </div>
        </Container>
      </section>

      <SuitableFor items={destination.suitableFor} />

      <PackageIncludes items={destination.packageIncludes} />

      <DestinationGallery images={destination.gallery} destinationName={destination.name} />

      <DestinationHotels hotels={hotels} destinationName={destination.name} />

      <DestinationFAQ items={destination.faq} />

      <DestinationLeadForm destinationName={destination.name} destinationSlug={destination.slug} />

      {/* Back to destinations */}
      <section className="py-8 bg-gray-100">
        <Container>
          <div className="text-center">
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              חזרה לכל היעדים
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}

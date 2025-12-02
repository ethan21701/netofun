import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hotels, getHotelBySlug, getAllHotelSlugs } from '@/data/hotels';
import {
  HotelHero,
  HotelIntro,
  HotelAmenities,
  HotelServices,
  HotelAdvantages,
  HotelGallery,
  HotelMap,
  HotelLeadForm,
} from '@/components/hotel';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllHotelSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const hotel = getHotelBySlug(slug);

  if (!hotel) {
    return { title: 'מלון לא נמצא | נטו פאן' };
  }

  return {
    title: `${hotel.name} | ${hotel.destinationName} | נטו פאן`,
    description: hotel.intro,
  };
}

export default async function HotelPage({ params }: Props) {
  const { slug } = await params;
  const hotel = getHotelBySlug(slug);

  if (!hotel) {
    notFound();
  }

  return (
    <>
      <HotelHero hotel={hotel} />
      <HotelIntro intro={hotel.intro} />
      <HotelAmenities amenities={hotel.roomAmenities} />
      <HotelServices services={hotel.services} />
      <HotelAdvantages advantages={hotel.youthAdvantages} />
      <HotelGallery images={hotel.gallery} hotelName={hotel.name} />
      <HotelMap mapEmbed={hotel.mapEmbed} hotelName={hotel.name} />
      <HotelLeadForm hotelName={hotel.name} destinationName={hotel.destinationName} />
    </>
  );
}

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';

interface Props {
  images: string[];
  hotelName: string;
}

export default function HotelGallery({ images, hotelName }: Props) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <SectionTitle subtitle="הצצה לחוויה שמחכה לכם">
          גלריית תמונות
        </SectionTitle>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={image}
                alt={`${hotelName} - תמונה ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

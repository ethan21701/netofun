'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Container from '@/components/shared/Container';

interface Props {
  images: string[];
  destinationName: string;
}

export default function DestinationGallery({ images, destinationName }: Props) {
  if (!images || images.length === 0) return null;

  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">גלריית תמונות</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg group"
            >
              <Image
                src={image}
                alt={`${destinationName} - תמונה ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

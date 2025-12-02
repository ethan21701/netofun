'use client';

import { motion } from 'framer-motion';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';

interface Props {
  amenities: string[];
}

export default function HotelAmenities({ amenities }: Props) {
  return (
    <section className="py-16 bg-gray-50">
      <Container size="md">
        <SectionTitle subtitle="מה תמצאו בחדר">
          אבזור החדרים
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {amenities.map((amenity, index) => (
            <motion.div
              key={amenity}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"
            >
              <span className="text-green-500 text-xl">✓</span>
              <span className="text-gray-700">{amenity}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

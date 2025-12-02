'use client';

import { motion } from 'framer-motion';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';

interface Props {
  mapEmbed: string;
  hotelName: string;
}

export default function HotelMap({ mapEmbed, hotelName }: Props) {
  return (
    <section className="py-16">
      <Container>
        <SectionTitle subtitle="איפה נמצא המלון">
          מיקום
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            src={mapEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`מיקום ${hotelName}`}
          />
        </motion.div>
      </Container>
    </section>
  );
}

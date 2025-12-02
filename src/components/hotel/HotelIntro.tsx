'use client';

import { motion } from 'framer-motion';
import Container from '@/components/shared/Container';

interface Props {
  intro: string;
}

export default function HotelIntro({ intro }: Props) {
  return (
    <section className="py-16">
      <Container size="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            {intro}
          </p>
        </motion.div>
      </Container>
    </section>
  );
}

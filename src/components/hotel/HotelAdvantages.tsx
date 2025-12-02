'use client';

import { motion } from 'framer-motion';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';

interface Props {
  advantages: string[];
}

export default function HotelAdvantages({ advantages }: Props) {
  return (
    <section className="py-16 bg-primary-600 text-white">
      <Container size="md">
        <SectionTitle subtitle="למה המלון הזה מושלם לחופשת נטו פאן" light>
          יתרונות לצעירים
        </SectionTitle>

        <div className="space-y-4">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
            >
              <span className="text-2xl">🎯</span>
              <span className="text-lg">{advantage}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

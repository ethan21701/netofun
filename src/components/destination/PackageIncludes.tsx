'use client';

import { motion } from 'framer-motion';
import Container from '@/components/shared/Container';
import { PackageItem } from '@/data/destinations';

interface Props {
  items: PackageItem[];
}

export default function PackageIncludes({ items }: Props) {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">מה החבילה כוללת?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg text-center"
            >
              <span className="text-4xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

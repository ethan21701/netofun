'use client';

import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import Container from '@/components/shared/Container';

interface Props {
  items: string[];
}

export default function SuitableFor({ items }: Props) {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center mb-12">למי היעד מתאים?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"
            >
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FaCheck className="text-green-600 text-sm" />
              </div>
              <span className="font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

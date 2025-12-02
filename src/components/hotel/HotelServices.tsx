'use client';

import { motion } from 'framer-motion';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';
import { HotelService } from '@/data/hotels';

interface Props {
  services: HotelService[];
}

export default function HotelServices({ services }: Props) {
  return (
    <section className="py-16">
      <Container>
        <SectionTitle subtitle="כל מה שתצטרכו במקום אחד">
          שירותי המלון
        </SectionTitle>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-3xl">
                {service.icon}
              </div>
              <h3 className="font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

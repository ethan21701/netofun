'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaMusic, FaShieldAlt, FaMedal } from 'react-icons/fa';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';

const features = [
  {
    icon: FaUsers,
    title: 'נציגים כמו משפחה',
    description: 'נציגים ישראלים 24/7 שידאגו לכם לכל אורך החופשה',
    color: 'bg-blue-500',
  },
  {
    icon: FaMusic,
    title: 'מסיבות ואירועים',
    description: 'חוויה מטורפת עם המסיבות הכי טובות בכל יעד',
    color: 'bg-pink-500',
  },
  {
    icon: FaShieldAlt,
    title: 'שקט להורים',
    description: 'ליווי מלא ובקרת בטיחות לאורך כל הטיול',
    color: 'bg-green-500',
  },
  {
    icon: FaMedal,
    title: 'ניסיון של מעל עשור',
    description: 'אלפי מטיילים מרוצים בחרו בנו שנה אחרי שנה',
    color: 'bg-amber-500',
  },
];

export default function WhyNetofun() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionTitle subtitle="מה הופך את נטו פאן לחברה המובילה בתיירות צעירים">
          למה נטו פאן?
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-20 h-20 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
              >
                <feature.icon className="text-white text-3xl" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

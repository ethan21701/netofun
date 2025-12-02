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
    color: 'bg-purple-500',
  },
  {
    icon: FaMusic,
    title: 'מסיבות ואירועים',
    description: 'חוויה מטורפת עם המסיבות הכי טובות בכל יעד',
    color: 'bg-yellow-400',
    textColor: 'text-gray-800',
  },
  {
    icon: FaShieldAlt,
    title: 'שקט להורים',
    description: 'ליווי מלא ובקרת בטיחות לאורך כל הטיול',
    color: 'bg-blue-500',
  },
  {
    icon: FaMedal,
    title: 'ניסיון של מעל עשור',
    description: 'אלפי מטיילים מרוצים בחרו בנו שנה אחרי שנה',
    color: 'bg-purple-600',
  },
];

export default function WhyNetofun() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <Container>
        <SectionTitle subtitle="מה הופך את נטו פאן לחברה המובילה בתיירות צעירים">
          למה נטו פאן?
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              className="text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-24 h-24 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
              >
                <feature.icon className={`${(feature as { textColor?: string }).textColor || 'text-white'} text-4xl`} />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

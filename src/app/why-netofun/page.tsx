'use client';

import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { FaUsers, FaMusic, FaShieldAlt, FaMedal, FaStar, FaPhoneAlt, FaCheckCircle, FaPlane, FaHeart, FaClock } from 'react-icons/fa';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';

const mainFeatures = [
  {
    icon: FaUsers,
    title: 'נציגים כמו משפחה',
    description: 'צוות נציגים ישראלי שנמצא איתכם 24/7. לא סתם מדריכים - אנשים שדואגים לכם כאילו אתם המשפחה שלהם.',
  },
  {
    icon: FaMusic,
    title: 'המסיבות הכי טובות',
    description: 'כניסה למועדונים הכי שווים, מסיבות בלעדיות, ואירועים מטורפים שלא תשכחו לעולם.',
  },
  {
    icon: FaShieldAlt,
    title: 'בטיחות ללא פשרות',
    description: 'פרוטוקולי בטיחות מחמירים, ביטוח מלא, וקשר ישיר עם ההורים. הבטיחות שלכם זו העדיפות הראשונה.',
  },
  {
    icon: FaMedal,
    title: 'ניסיון של מעל עשור',
    description: 'אלפי צעירים מרוצים בחרו בנו לאורך השנים. אנחנו יודעים בדיוק איך לעשות חופשה מושלמת.',
  },
];

const additionalBenefits = [
  'חבילות הכל כלול - טיסות, מלון, העברות',
  'מלונות מאומתים ובטוחים',
  'קבוצות וואטסאפ להורים',
  'פעילויות ואטרקציות ביעדים',
  'ביטוח נסיעות מקיף',
  'מחירים תחרותיים',
  'גמישות בתאריכים',
  'שירות לקוחות מעולה',
];

const stats = [
  { icon: FaClock, value: 10, suffix: '+', label: 'שנות ניסיון' },
  { icon: FaHeart, value: 50000, suffix: '+', label: 'צעירים מרוצים' },
  { icon: FaPlane, value: 6, suffix: '', label: 'יעדים מדהימים' },
  { icon: FaUsers, value: 24, suffix: '/7', label: 'זמינות נציגים' },
];

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function WhyNetofunPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">למה נטו פאן?</h1>
            <p className="text-xl text-white leading-relaxed">
              מעל עשור של ניסיון, אלפי צעירים מרוצים, והמחויבות שלנו לעשות לכם את החופשה הכי טובה שאפשר.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white border-b">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-primary-600 text-2xl" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-primary-600 mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <Container>
          <SectionTitle subtitle="הסיבות שהופכות אותנו לבחירה הראשונה של צעירים">
            מה מייחד אותנו?
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                  index % 2 === 0 ? 'bg-primary-100' : 'bg-secondary-100'
                }`}>
                  <feature.icon className={`text-3xl ${
                    index % 2 === 0 ? 'text-primary-600' : 'text-secondary-600'
                  }`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionTitle subtitle="עוד סיבות לבחור בנו">
            מה עוד מקבלים?
          </SectionTitle>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {additionalBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <FaCheckCircle className="text-secondary-500 text-xl flex-shrink-0" />
                  <span className="font-medium text-gray-800">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonial Quote */}
      <section className="py-20 bg-primary-600 text-white">
        <Container size="md">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <FaStar className="text-yellow-400 text-5xl mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
              &ldquo;השבוע הכי מטורף בחיים שלי! הנציגים היו כמו משפחה, דאגו לנו לכל דבר. ממליצה בחום!&rdquo;
            </blockquote>
            <p className="text-white/80 text-lg">- שירה כ., איה נאפה 2024</p>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">מוכנים לחופשה הכי טובה?</h2>
            <p className="text-gray-700 text-lg mb-8">צרו קשר עכשיו ונמצא לכם את החבילה המושלמת</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#lead-form"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-colors"
              >
                תמצאו לי חופשה
              </Link>
              <a
                href="https://wa.me/972515699420"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-600 transition-colors"
              >
                <FaPhoneAlt />
                דברו איתנו
              </a>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}

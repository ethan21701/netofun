'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';

const testimonials = [
  {
    id: 1,
    name: 'שירה כ.',
    destination: 'איה נאפה',
    text: 'השבוע הכי מטורף בחיים שלי! הנציגים היו כמו משפחה, דאגו לנו לכל דבר. המסיבות היו מטורפות והחוויה פשוט בלתי נשכחת.',
    avatar: '/images/testimonials/avatar1.jpg',
  },
  {
    id: 2,
    name: 'איתי ר.',
    destination: 'מאליה',
    text: 'חברים המליצו לי על נטו פאן ועכשיו אני מבין למה. השירות היה מעולה מהרגע הראשון, הכל מאורגן ומסודר.',
    avatar: '/images/testimonials/avatar2.jpg',
  },
  {
    id: 3,
    name: 'נועה מ.',
    destination: 'סאני ביץ׳',
    text: 'טסתי עם החברות לסאני ביץ׳ והייתה לנו חוויה מדהימה! המלון היה מושלם, המסיבות מטורפות והנציגים תותחים.',
    avatar: '/images/testimonials/avatar3.jpg',
  },
  {
    id: 4,
    name: 'דניאל ל.',
    destination: 'רודוס',
    text: 'אחרי שחקרתי את כל החברות בשוק, בחרתי בנטו פאן ולא התאכזבתי. מקצוענים אמיתיים שיודעים איך לעשות חופשה.',
    avatar: '/images/testimonials/avatar4.jpg',
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-gray-50">
      <Container>
        <SectionTitle subtitle="מה אומרים עלינו אלפי הצעירים שטסו איתנו">
          אומרים עלינו
        </SectionTitle>

        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300"
            aria-label="הקודם"
          >
            <FaChevronRight className="text-gray-600" />
          </button>

          <button
            onClick={next}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-md hover:shadow-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-300"
            aria-label="הבא"
          >
            <FaChevronLeft className="text-gray-600" />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
              >
                <FaQuoteRight className="text-primary-300 text-4xl mb-6" />

                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                  &ldquo;{testimonials[currentIndex].text}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-gray-600">{testimonials[currentIndex].destination}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                aria-label={`עבור להמלצה ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Link to all testimonials */}
        <div className="text-center mt-10">
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-700 transition-colors"
          >
            לעוד מכתבי תודה
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Container>
    </section>
  );
}

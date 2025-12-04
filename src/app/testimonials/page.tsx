'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteRight, FaStar } from 'react-icons/fa';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';

const testimonials = [
  {
    id: 1,
    name: 'שירה כ.',
    destination: 'איה נאפה',
    year: '2024',
    text: 'השבוע הכי מטורף בחיים שלי! הנציגים היו כמו משפחה, דאגו לנו לכל דבר. המסיבות היו מטורפות והחוויה פשוט בלתי נשכחת. ממליצה בחום לכל מי שרוצה חופשה אמיתית!',
    rating: 5,
  },
  {
    id: 2,
    name: 'איתי ר.',
    destination: 'מאליה',
    year: '2024',
    text: 'חברים המליצו לי על נטו פאן ועכשיו אני מבין למה. השירות היה מעולה מהרגע הראשון, הכל מאורגן ומסודר. הנציגים היו זמינים 24/7 ודאגו שנהנה מכל רגע.',
    rating: 5,
  },
  {
    id: 3,
    name: 'נועה מ.',
    destination: 'סאני ביץ׳',
    year: '2023',
    text: 'טסתי עם החברות לסאני ביץ׳ והייתה לנו חוויה מדהימה! המלון היה מושלם, המסיבות מטורפות והנציגים תותחים. בהחלט נחזור שנה הבאה!',
    rating: 5,
  },
  {
    id: 4,
    name: 'דניאל ל.',
    destination: 'רודוס',
    year: '2024',
    text: 'אחרי שחקרתי את כל החברות בשוק, בחרתי בנטו פאן ולא התאכזבתי. מקצוענים אמיתיים שיודעים איך לעשות חופשה. האי היה יפהפה והחוויה הייתה מושלמת.',
    rating: 5,
  },
  {
    id: 5,
    name: 'יובל ג.',
    destination: 'איה נאפה',
    year: '2023',
    text: 'החופשה הכי טובה שהייתה לי! הכל היה מאורגן ברמה הגבוהה ביותר. הנציגים ידעו להתאים את הפעילויות בדיוק למה שרצינו. פשוט וואו!',
    rating: 5,
  },
  {
    id: 6,
    name: 'מיכל ש.',
    destination: 'יורט דה מאר',
    year: '2024',
    text: 'ספרד הייתה חלום! המועדונים שם מטורפים והנציגים של נטו פאן דאגו שנכנס לכל מקום. תודה על חופשה בלתי נשכחת!',
    rating: 5,
  },
  {
    id: 7,
    name: 'אור כ.',
    destination: 'מאליה',
    year: '2023',
    text: 'כרתים הייתה יפהפייה! שילוב מושלם של מסיבות, חופים מדהימים ואוכל יווני טעים. הנציגים היו אלופים והכל עבר חלק.',
    rating: 5,
  },
  {
    id: 8,
    name: 'הדר ב.',
    destination: 'אילת',
    year: '2024',
    text: 'גם בארץ יכולה להיות חופשה מטורפת! אילת עם נטו פאן הייתה חוויה אחרת לגמרי. המון פעילויות, אווירה מדהימה וחברים חדשים.',
    rating: 5,
  },
];

const destinations = ['הכל', 'איה נאפה', 'מאליה', 'רודוס', 'סאני ביץ׳', 'יורט דה מאר', 'אילת'];

export default function TestimonialsPage() {
  const [filter, setFilter] = useState('הכל');

  const filteredTestimonials = filter === 'הכל'
    ? testimonials
    : testimonials.filter((t) => t.destination === filter);

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">אומרים עלינו</h1>
            <p className="text-xl text-white">מה אומרים אלפי הצעירים שטסו איתנו</p>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {destinations.map((dest) => (
              <button
                key={dest}
                onClick={() => setFilter(dest)}
                className={`px-5 py-2 rounded-full font-medium transition-colors ${
                  filter === dest
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {dest}
              </button>
            ))}
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6"
              >
                <FaQuoteRight className="text-primary-300 text-2xl mb-4" />

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <div className="flex items-center gap-3 border-t pt-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">
                      {testimonial.destination} • {testimonial.year}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredTestimonials.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              אין המלצות ליעד זה עדיין
            </div>
          )}
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">רוצים להיות הבאים ברשימה?</h2>
            <p className="text-gray-700 mb-8">צרו קשר עכשיו וצאו לחופשה שתזכרו לכל החיים</p>
            <a
              href="/#lead-form"
              className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-700 transition-colors"
            >
              תמצאו לי חופשה
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}

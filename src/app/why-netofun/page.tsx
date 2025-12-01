import { Metadata } from 'next';
import Link from 'next/link';
import { FaUsers, FaMusic, FaShieldAlt, FaMedal, FaHeart, FaStar, FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';

export const metadata: Metadata = {
  title: 'למה נטו פאן? | נטו פאן',
  description: 'מעל עשור של ניסיון בתיירות צעירים. גלו למה אלפי צעירים בוחרים בנטו פאן לחופשה שלהם.',
};

const mainFeatures = [
  {
    icon: FaUsers,
    title: 'נציגים כמו משפחה',
    description: 'צוות נציגים ישראלי שנמצא איתכם 24/7. לא סתם מדריכים - אנשים שדואגים לכם כאילו אתם המשפחה שלהם.',
    color: 'bg-blue-500',
  },
  {
    icon: FaMusic,
    title: 'המסיבות הכי טובות',
    description: 'כניסה למועדונים הכי שווים, מסיבות בלעדיות, ואירועים מטורפים שלא תשכחו לעולם.',
    color: 'bg-pink-500',
  },
  {
    icon: FaShieldAlt,
    title: 'בטיחות ללא פשרות',
    description: 'פרוטוקולי בטיחות מחמירים, ביטוח מלא, וקשר ישיר עם ההורים. הבטיחות שלכם זו העדיפות הראשונה.',
    color: 'bg-green-500',
  },
  {
    icon: FaMedal,
    title: 'ניסיון של מעל עשור',
    description: 'אלפי צעירים מרוצים בחרו בנו לאורך השנים. אנחנו יודעים בדיוק איך לעשות חופשה מושלמת.',
    color: 'bg-amber-500',
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
  { number: '10+', label: 'שנות ניסיון' },
  { number: '50,000+', label: 'צעירים מרוצים' },
  { number: '6', label: 'יעדים מדהימים' },
  { number: '24/7', label: 'זמינות נציגים' },
];

export default function WhyNetofunPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">למה נטו פאן?</h1>
            <p className="text-xl text-white leading-relaxed">
              מעל עשור של ניסיון, אלפי צעירים מרוצים, והמחויבות שלנו לעשות לכם את החופשה הכי טובה שאפשר.
            </p>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-black text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
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
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="text-white text-3xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-700 text-lg leading-relaxed">{feature.description}</p>
              </div>
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
                <div
                  key={index}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm"
                >
                  <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Testimonial Quote */}
      <section className="py-20 bg-primary-600 text-white">
        <Container size="md">
          <div className="text-center">
            <FaStar className="text-yellow-400 text-4xl mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
              &ldquo;השבוע הכי מטורף בחיים שלי! הנציגים היו כמו משפחה, דאגו לנו לכל דבר. ממליצה בחום!&rdquo;
            </blockquote>
            <p className="text-white/80">- שירה כ., איה נאפה 2024</p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">מוכנים לחופשה הכי טובה?</h2>
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
          </div>
        </Container>
      </section>
    </div>
  );
}

import { Metadata } from 'next';
import Link from 'next/link';
import { FaShieldAlt, FaPhone, FaUsers, FaFirstAid, FaFileAlt, FaWhatsapp } from 'react-icons/fa';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';

export const metadata: Metadata = {
  title: 'אזור הורים | נטו פאן',
  description: 'כל מה שהורים צריכים לדעת על חופשות נטו פאן - בטיחות, ליווי, נציגים, ביטוח ועוד.',
};

const features = [
  {
    icon: FaUsers,
    title: 'נציגים ישראלים 24/7',
    description: 'צוות נציגים ישראלי שנמצא עם הילדים שלכם לאורך כל החופשה. זמינים בכל שעה, דואגים לכל צורך.',
  },
  {
    icon: FaPhone,
    title: 'קשר ישיר עם ההורים',
    description: 'קבוצות וואטסאפ ייעודיות להורים, עדכונים שוטפים, וקו חם לכל שאלה או בעיה.',
  },
  {
    icon: FaShieldAlt,
    title: 'בטיחות בראש סדר העדיפויות',
    description: 'פרוטוקולי בטיחות מחמירים, בדיקות מלונות, והקפדה על סטנדרטים גבוהים בכל היעדים.',
  },
  {
    icon: FaFirstAid,
    title: 'מוכנות לכל מצב',
    description: 'צוות מאומן לטיפול במקרי חירום, קשר עם שירותי רפואה מקומיים, וביטוח מקיף לכל משתתף.',
  },
];

const faqs = [
  {
    question: 'האם יש ליווי של מבוגרים לאורך כל החופשה?',
    answer: 'כן! צוות הנציגים שלנו כולל מבוגרים מנוסים שנמצאים עם הקבוצה 24/7. הם זמינים לכל שאלה, בעיה או צורך שעולה.',
  },
  {
    question: 'איך אני יכול/ה לקבל עדכונים על הילד/ה שלי?',
    answer: 'אנחנו מקימים קבוצת וואטסאפ ייעודית להורים לפני כל טיסה. הנציגים שלנו משתפים עדכונים, תמונות, ומידע שוטף לאורך כל החופשה.',
  },
  {
    question: 'מה קורה במקרה חירום?',
    answer: 'יש לנו פרוטוקולים ברורים לכל מצב חירום. הנציגים שלנו מאומנים לטפל במגוון מצבים, ויש לנו קשר ישיר עם שירותי רפואה וחירום בכל יעד. במקרה הצורך, אנחנו יוצרים קשר מיידי עם ההורים.',
  },
  {
    question: 'האם יש ביטוח לילדים?',
    answer: 'כן! כל משתתף מבוטח בביטוח נסיעות מקיף שכולל ביטוח רפואי, ביטוח מטען, וביטוח ביטול. פרטי הביטוח נשלחים להורים לפני הטיסה.',
  },
  {
    question: 'מה לגבי אלכוהול ומסיבות?',
    answer: 'אנחנו מקפידים על חוקי המדינה לגבי גיל שתיית אלכוהול. הנציגים שלנו נוכחים בכל הפעילויות ודואגים שהכל יתנהל בצורה בטוחה ואחראית.',
  },
  {
    question: 'איך אני יודע/ת שהמלון בטוח?',
    answer: 'אנחנו עובדים רק עם מלונות שעברו בדיקה מקיפה שלנו. אנחנו מבקרים במלונות באופן קבוע ומוודאים שהם עומדים בסטנדרטים שלנו לבטיחות ונוחות.',
  },
];

export default function ParentsPage() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">שקט נפשי להורים</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              אנחנו מבינים שלשלוח את הילדים לחו״ל זה צעד גדול. בדיוק בגלל זה עשינו הכל כדי שתוכלו להיות רגועים - מהרגע שהם יוצאים מהבית ועד שהם חוזרים עם חיוך.
            </p>
          </div>
        </Container>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <Container>
          <div className="max-w-3xl mx-auto">
            <SectionTitle>מי אנחנו?</SectionTitle>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                נטו פאן פועלת כבר למעלה מעשור בתחום תיירות הנוער והצעירים. במהלך השנים טיפלנו באלפי צעירים והפכנו למובילים בתחום.
              </p>
              <p>
                הצוות שלנו כולל אנשי מקצוע מנוסים שעברו הכשרות מקיפות בתחום הבטיחות, העזרה ראשונה, וניהול קבוצות. אנחנו לא רק מארגנים חופשות - אנחנו דואגים לילדים שלכם כאילו היו שלנו.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle>איך אנחנו שומרים על הילדים שלכם</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="text-green-600 text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <Container size="md">
          <SectionTitle>שאלות ותשובות להורים</SectionTitle>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-bold text-lg mb-3 text-primary-700">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Documents */}
      <section className="py-16 bg-gray-50">
        <Container size="md">
          <SectionTitle>מסמכים חשובים</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/terms"
              className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <FaFileAlt className="text-primary-600 text-xl" />
              <span className="font-medium">תקנון החברה</span>
            </Link>
            <Link
              href="/privacy"
              className="flex items-center gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <FaFileAlt className="text-primary-600 text-xl" />
              <span className="font-medium">מדיניות פרטיות</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-green-600 text-white">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">יש לכם שאלות נוספות?</h2>
            <p className="text-white/90 mb-8">אנחנו כאן בשבילכם - צרו קשר ונשמח לעזור</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:03-379-6666"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors"
              >
                <FaPhone />
                03-379-6666
              </a>
              <a
                href="https://wa.me/972515699420?text=שלום, אני הורה ויש לי שאלות לגבי החופשות שלכם"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-700 text-white px-8 py-4 rounded-full font-bold hover:bg-green-800 transition-colors"
              >
                <FaWhatsapp />
                וואטסאפ
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

export interface HotelService {
  icon: string;
  title: string;
  description: string;
}

export interface Hotel {
  slug: string;
  name: string;
  destination: string; // links to destination slug
  destinationName: string;
  heroImage: string;
  intro: string;
  roomAmenities: string[];
  services: HotelService[];
  youthAdvantages: string[];
  gallery: string[];
  mapEmbed: string; // Google Maps iframe src
  starRating: number;
}

export const hotels: Hotel[] = [
  {
    slug: 'iviskos-hotel',
    name: 'Iviskos Hotel',
    destination: 'rhodes',
    destinationName: 'רודוס',
    heroImage: '',
    intro: 'מלון איביסקוס הוא אחד המלונות הפופולריים ביותר בפאליראקי! ממוקם במרחק הליכה קצר מרחוב הברים, עם בריכה מרכזית ואווירה צעירה ותוססת. המקום המושלם לחופשת נטו פאן!',
    roomAmenities: [
      'מיזוג אוויר',
      'טלוויזיה',
      'מקלחת פרטית',
      'מרפסת',
      'כספת',
      'מקרר קטן',
    ],
    services: [
      { icon: '🏊', title: 'בריכה', description: 'בריכה מרכזית עם מיטות שיזוף' },
      { icon: '🍹', title: 'בר', description: 'בר בריכה עם קוקטיילים ומשקאות' },
      { icon: '📶', title: 'WiFi', description: 'אינטרנט אלחוטי חינם בכל המלון' },
      { icon: '🔒', title: 'לוקרים', description: 'לוקרים לשמירת חפצים יקרי ערך' },
      { icon: '📍', title: 'מיקום', description: '5 דקות הליכה מרחוב הברים' },
      { icon: '🍳', title: 'ארוחת בוקר', description: 'ארוחת בוקר עשירה כלולה' },
    ],
    youthAdvantages: [
      'קרוב לכל הפעולה - 5 דקות מרחוב הברים',
      'בריכה מרכזית עם אווירה חברתית',
      'חדרים מרווחים ל-3-4 אנשים',
      'צוות צעיר ונחמד שמבין את הקהל',
      'מחירים נוחים לכיס הצעיר',
    ],
    gallery: [],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.8!2d28.2!3d36.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDE4JzAwLjAiTiAyOMKwMTInMDAuMCJF!5e0!3m2!1sen!2sil!4v1234567890',
    starRating: 3,
  },
  {
    slug: 'pearl-hotel',
    name: 'Pearl Hotel',
    destination: 'ayia-napa',
    destinationName: 'איה נאפה',
    heroImage: '',
    intro: 'מלון פרל ממוקם בלב איה נאפה, צעדים ספורים מכיכר המסיבות המפורסמת! עיצוב מודרני, חדרים נוחים ושירות מעולה. הבחירה המושלמת לחוויית איה נאפה אמיתית.',
    roomAmenities: [
      'מיזוג אוויר',
      'טלוויזיה מסך שטוח',
      'מקלחת פרטית',
      'מרפסת עם נוף',
      'כספת',
      'מיני בר',
    ],
    services: [
      { icon: '🏊', title: 'בריכה', description: 'בריכה על הגג עם נוף לים' },
      { icon: '🍹', title: 'בר', description: 'בר קוקטיילים על הגג' },
      { icon: '📶', title: 'WiFi', description: 'אינטרנט מהיר בכל המלון' },
      { icon: '🔒', title: 'לוקרים', description: 'כספות בחדרים' },
      { icon: '📍', title: 'מיקום', description: '2 דקות הליכה מהכיכר' },
      { icon: '🍳', title: 'ארוחת בוקר', description: 'בופה בוקר עשיר' },
    ],
    youthAdvantages: [
      'מיקום מרכזי - 2 דקות מכיכר איה נאפה',
      'בריכה על הגג עם אווירה מדהימה',
      'קרוב לחוף ניסי המפורסם',
      'חדרים מודרניים ונקיים',
      'צוות דובר עברית',
    ],
    gallery: [],
    mapEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3236.8!2d34.0!3d34.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDU4JzQ4LjAiTiAzNMKwMDAnMDAuMCJF!5e0!3m2!1sen!2sil!4v1234567890',
    starRating: 4,
  },
];

export function getHotelBySlug(slug: string): Hotel | undefined {
  return hotels.find((h) => h.slug === slug);
}

export function getHotelsByDestination(destinationSlug: string): Hotel[] {
  return hotels.filter((h) => h.destination === destinationSlug);
}

export function getAllHotelSlugs(): string[] {
  return hotels.map((h) => h.slug);
}

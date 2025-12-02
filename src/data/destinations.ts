export interface FAQ {
  question: string;
  answer: string;
}

export interface PackageItem {
  icon: string;
  title: string;
  description: string;
}

export interface Destination {
  slug: string;
  name: string;
  country: string;
  tagline: string;
  heroImage: string;
  description: string;
  suitableFor: string[];
  packageIncludes: PackageItem[];
  hotels: string[];
  gallery: string[];
  faq: FAQ[];
  color: string;
}

export const destinations: Destination[] = [
  {
    slug: 'ayia-napa',
    name: 'איה נאפה',
    country: 'קפריסין',
    tagline: 'בירת המסיבות של קפריסין',
    heroImage: '/images/destinations/ayia-napa-hero.jpg',
    description: 'איה נאפה היא יעד החלומות לצעירים שמחפשים שילוב מושלם של חופים מדהימים, מסיבות מטורפות ואווירה בלתי נשכחת. עם מועדונים מהטובים באירופה, חופים עם מים צלולים ואווירה צעירה ותוססת - זה המקום להיות בו!',
    suitableFor: [
      'אחרי בגרויות',
      'לפני צבא',
      'אחרי צבא',
      'גילאי 16-21',
      'אוהבי מסיבות ואווירה',
      'חובבי חופים ושמש',
    ],
    packageIncludes: [
      { icon: '✈️', title: 'טיסות', description: 'טיסות הלוך וחזור מנתב״ג' },
      { icon: '🚐', title: 'העברות', description: 'העברות משדה התעופה למלון וחזרה' },
      { icon: '🏨', title: 'לינה', description: 'לינה במלונות איכותיים' },
      { icon: '👥', title: 'נציגים', description: 'נציגים ישראלים 24/7' },
      { icon: '🎉', title: 'מסיבות', description: 'כניסה למסיבות הכי טובות' },
    ],
    hotels: ['napa-plaza', 'nestor-hotel', 'callisto-village'],
    gallery: [],
    faq: [
      {
        question: 'האם איה נאפה מתאימה לגיל 16?',
        answer: 'כן! איה נאפה מתאימה מאוד לגיל 16 ומעלה. יש הרבה פעילויות ואטרקציות שמתאימות לכל הגילאים, והנציגים שלנו דואגים לכולם.',
      },
      {
        question: 'האם יש נציגים דוברי עברית?',
        answer: 'בוודאי! כל הנציגים שלנו הם ישראלים דוברי עברית שנמצאים איתכם 24/7 לאורך כל החופשה.',
      },
      {
        question: 'מה לגבי בטיחות?',
        answer: 'הבטיחות שלכם בראש סדר העדיפויות שלנו. יש לנו פרוטוקולים ברורים, קשר ישיר עם ההורים, ונציגים זמינים בכל שעה.',
      },
    ],
    color: 'from-cyan-500 to-blue-600',
  },
  {
    slug: 'malia',
    name: 'מאליה',
    country: 'יוון',
    tagline: 'חוויה יוונית בלתי נשכחת',
    heroImage: '/images/destinations/malia-hero.jpg',
    description: 'מאליה בכרתים היא אחד היעדים הפופולריים ביותר לצעירים מכל אירופה. שילוב מושלם של תרבות יוונית אותנטית, חופים יפהפיים, מסיבות עד הבוקר ואוכל מדהים.',
    suitableFor: [
      'אחרי בגרויות',
      'לפני צבא',
      'אחרי צבא',
      'גילאי 17-21',
      'אוהבי מסיבות',
      'מחפשי חוויה אירופאית',
    ],
    packageIncludes: [
      { icon: '✈️', title: 'טיסות', description: 'טיסות הלוך וחזור מנתב״ג' },
      { icon: '🚐', title: 'העברות', description: 'העברות משדה התעופה למלון וחזרה' },
      { icon: '🏨', title: 'לינה', description: 'לינה במלונות איכותיים' },
      { icon: '👥', title: 'נציגים', description: 'נציגים ישראלים 24/7' },
      { icon: '🎉', title: 'מסיבות', description: 'כניסה למסיבות הכי טובות' },
    ],
    hotels: ['malia-holidays', 'malia-central'],
    gallery: [],
    faq: [
      {
        question: 'מה ההבדל בין מאליה לאיה נאפה?',
        answer: 'שניהם יעדים מעולים! מאליה נמצאת בכרתים ומציעה גם חוויה תרבותית יוונית. איה נאפה ממוקדת יותר במסיבות.',
      },
      {
        question: 'האם יש נציגים דוברי עברית?',
        answer: 'כן! כל הנציגים שלנו ישראלים דוברי עברית.',
      },
    ],
    color: 'from-blue-500 to-indigo-600',
  },
  {
    slug: 'rhodes',
    name: 'רודוס',
    country: 'יוון',
    tagline: 'האי המושלם לקיץ',
    heroImage: '/images/destinations/rhodes-hero.jpg',
    description: 'רודוס הוא אחד האיים היפים ביותר ביוון. שילוב של חופים מדהימים, עיר עתיקה מרתקת, חיי לילה תוססים ואווירה רגועה יותר מיעדים אחרים - מושלם למי שרוצה קצת מהכל.',
    suitableFor: [
      'אחרי בגרויות',
      'אחרי צבא',
      'גילאי 18-25',
      'מחפשי איזון בין מסיבות לרוגע',
      'אוהבי תרבות והיסטוריה',
    ],
    packageIncludes: [
      { icon: '✈️', title: 'טיסות', description: 'טיסות הלוך וחזור מנתב״ג' },
      { icon: '🚐', title: 'העברות', description: 'העברות משדה התעופה למלון וחזרה' },
      { icon: '🏨', title: 'לינה', description: 'לינה במלונות איכותיים' },
      { icon: '👥', title: 'נציגים', description: 'נציגים ישראלים 24/7' },
    ],
    hotels: ['rhodes-beach'],
    gallery: [],
    faq: [
      {
        question: 'האם רודוס מתאימה למי שרוצה פחות מסיבות?',
        answer: 'בהחלט! רודוס מציעה איזון נהדר - יש חיי לילה תוססים למי שרוצה, אבל גם הרבה פעילויות אחרות ואווירה רגועה יותר.',
      },
    ],
    color: 'from-amber-500 to-orange-600',
  },
  {
    slug: 'sunny-beach',
    name: 'סאני ביץ׳',
    country: 'בולגריה',
    tagline: 'הוגאס הבולגרית - הכל BIG',
    heroImage: '/images/destinations/sunny-beach-hero.jpg',
    description: 'סאני ביץ׳ היא עיירת חוף בולגרית שנמצאת בבורגס המפורסמת. בהשוואה לאיה נאפה - הכל BIG: חופים יותר גדולים, מלונות יותר גדולים, כמות אנשים יותר גדולה. סאני ביץ׳ היא הוגאס הבולגרית! כולם מחייכים, כולם רוצים ליהנות, כולם פשוט שם כדי להוציא את המקסימום מהחיים. תתכוננו לימים מלאים באטרקציות, טיולי שטח ומסאז׳, מסיבות צהריים מדהימות, וכל ערב יציאה אירופאית ברמה הכי גבוהה.',
    suitableFor: [
      'אחרי בגרויות',
      'לפני צבא',
      'גילאי 16-21',
      'מחפשי תמורה מעולה למחיר',
      'אוהבי מסיבות',
      'מי שרוצה הכל BIG',
    ],
    packageIncludes: [
      { icon: '✈️', title: 'טיסות', description: 'טיסות הלוך וחזור מנתב״ג' },
      { icon: '🚐', title: 'העברות', description: 'העברות משדה התעופה למלון וחזרה' },
      { icon: '🏨', title: 'לינה', description: 'לינה במלונות איכותיים' },
      { icon: '👥', title: 'נציגים', description: 'נציגים ישראלים 24/7' },
      { icon: '🎉', title: 'מסיבות וילה', description: 'מסיבות וילה מטורפות 2-4 פעמים בשבוע' },
      { icon: '🚢', title: 'מסיבת ספינה', description: 'מסיבת ספינה שבועית עם נופים משוגעים' },
    ],
    hotels: ['sunny-beach-hotel'],
    gallery: [],
    faq: [
      {
        question: 'מה המסיבות המיוחדות בסאני ביץ׳?',
        answer: 'מסיבות הוילה המטורפות (2-4 פעמים בשבוע בצהריים), מסיבת ספינה שבועית עם נופים משוגעים ובריזה מהים, מסיבות צבע, מסיבות רמזור, ובלו מון - מסיבות הפולמון המיוחדות של בולגריה. בכל צהריים ובכל ערב יש מה לעשות!',
      },
      {
        question: 'מה כדאי להביא לסאני ביץ׳?',
        answer: 'בגד ים, כמה טישירטים, סווצ׳רט אחד למקרה שיהיה לילה קריר, כפכפים, נעליים סגורות, ובערך 1000 יורו לבזבוזים (כולל אוכל ומסיבות). סאני ביץ׳ היא גן עדן לתיירים ולא דורשת שום דבר מיוחד!',
      },
      {
        question: 'למה המחירים בסאני ביץ׳ כל כך נוחים?',
        answer: 'בולגריה היא יעד עם עלות מחיה נמוכה יותר, מה שאומר שאתם מקבלים יותר תמורה לכסף - גם במלון וגם במקום עצמו.',
      },
      {
        question: 'מה ההבדל בין סאני ביץ׳ לאיה נאפה?',
        answer: 'סאני ביץ׳ היא הגרסה הגדולה יותר - חופים יותר גדולים, מלונות יותר גדולים, יותר אנשים. אם איה נאפה היא האחות הקטנה, סאני ביץ׳ היא הוגאס הבולגרית עם הכל BIG!',
      },
    ],
    color: 'from-yellow-500 to-amber-600',
  },
  {
    slug: 'lloret-de-mar',
    name: 'יורט דה מאר',
    country: 'ספרד',
    tagline: 'ריביירה ספרדית לוהטת',
    heroImage: '/images/destinations/lloret-hero.jpg',
    description: 'יורט דה מאר על חוף הריביירה הספרדית היא יעד מושלם לחופשת קיץ לוהטת. מועדונים ענקיים, חופים יפהפיים, אוכל ספרדי מדהים ואווירה בלתי נשכחת.',
    suitableFor: [
      'אחרי צבא',
      'גילאי 18-25',
      'אוהבי מסיבות גדולות',
      'מחפשי חוויה ספרדית',
    ],
    packageIncludes: [
      { icon: '✈️', title: 'טיסות', description: 'טיסות הלוך וחזור מנתב״ג' },
      { icon: '🚐', title: 'העברות', description: 'העברות משדה התעופה למלון וחזרה' },
      { icon: '🏨', title: 'לינה', description: 'לינה במלונות איכותיים' },
      { icon: '👥', title: 'נציגים', description: 'נציגים ישראלים 24/7' },
      { icon: '🎉', title: 'מסיבות', description: 'כניסה למסיבות הכי טובות' },
    ],
    hotels: ['lloret-hotel'],
    gallery: [],
    faq: [
      {
        question: 'מה מיוחד ביורט דה מאר?',
        answer: 'יורט דה מאר ידועה במועדונים הענקיים שלה, חלקם מהגדולים באירופה! בנוסף, הקרבה לברצלונה מאפשרת טיולי יום מדהימים.',
      },
    ],
    color: 'from-red-500 to-pink-600',
  },
  {
    slug: 'eilat',
    name: 'אילת',
    country: 'ישראל',
    tagline: 'פינוק ישראלי במפרץ',
    heroImage: '/images/destinations/eilat-hero.jpg',
    description: 'אילת - עיר הנופש הדרומית של ישראל. ים סוף מדהים, שמש כל השנה, מלונות מפנקים, פעילויות אקסטרים וחיי לילה תוססים. הכל בלי צורך בדרכון!',
    suitableFor: [
      'אחרי בגרויות',
      'גילאי 16-21',
      'מי שרוצה להישאר בארץ',
      'אוהבי פעילויות ים',
      'מחפשי חופשה קצרה',
    ],
    packageIncludes: [
      { icon: '🚌', title: 'הסעות', description: 'הסעות מאורגנות מהמרכז' },
      { icon: '🏨', title: 'לינה', description: 'לינה במלונות מפנקים' },
      { icon: '👥', title: 'נציגים', description: 'נציגים ישראלים 24/7' },
      { icon: '🎉', title: 'פעילויות', description: 'פעילויות ואטרקציות' },
    ],
    hotels: ['eilat-hotel'],
    gallery: [],
    faq: [
      {
        question: 'מה היתרון של אילת על פני יעדים בחו״ל?',
        answer: 'אילת מציעה חופשה מדהימה ללא צורך בדרכון, טיסות או החלפת כסף. מושלם למי שרוצה חופשה מהירה וקלה!',
      },
    ],
    color: 'from-teal-500 to-emerald-600',
  },
];

export function getDestinationBySlug(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getAllDestinationSlugs(): string[] {
  return destinations.map((d) => d.slug);
}

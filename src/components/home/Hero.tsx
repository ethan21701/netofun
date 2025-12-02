'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Photo */}
      <Image
        src="/images/hero-party.jpg"
        alt="NetoFun Party"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/40" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div>
          {/* Logo */}
          <Image
            src="https://netofun.co.il/wp-content/uploads/2019/07/NetoFun-Logo.png"
            alt="נטו פאן"
            width={280}
            height={100}
            className="h-20 md:h-28 w-auto mx-auto mb-8 brightness-0 invert drop-shadow-lg"
            priority
          />

          <p
            className="text-xl md:text-3xl font-medium mb-4"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          >
            החברה המרכזית לתיירות צעירים!
          </p>
          <p
            className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          >
            איה נאפה • מאליה • רודוס • סאני ביץ׳ • יורט דה מאר • אילת
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#lead-form"
            className="bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            תמצאו לי חופשה
          </Link>
          <Link
            href="/parents"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            אני הורה – רוצה לדעת יותר
          </Link>
        </div>
      </div>
    </section>
  );
}

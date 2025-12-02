'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

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
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto pt-24 md:pt-0 pb-32 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
<h1
            className="text-4xl md:text-6xl font-black mb-6 leading-tight"
            style={{ textShadow: '0 4px 8px rgba(0,0,0,0.5)' }}
          >
            לא משנה לאן העיקר שיהיה{' '}
            <span className="text-yellow-400">פאן</span>
          </h1>
          <p
            className="text-lg md:text-xl text-white mb-10 max-w-2xl mx-auto tracking-wide"
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          >
            איה נאפה • מאליה • רודוס • סאני ביץ׳ • יורט דה מאר • אילת
          </p>
        </motion.div>

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

      {/* Plane Button */}
      <Link
        href="/destinations"
        className="absolute bottom-4 md:bottom-8 left-0 right-0 z-10 flex flex-col items-center group"
      >
        <span
          className="text-white font-bold text-lg mb-2 transition-transform duration-300 group-hover:-translate-y-2"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
        >
          לאן טסים?
        </span>
        <Image
          src="/images/מטוס-נטופאן-1024x323.png"
          alt="לכל היעדים שלנו"
          width={300}
          height={95}
          className="w-48 md:w-auto opacity-90 drop-shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2"
        />
      </Link>
    </section>
  );
}

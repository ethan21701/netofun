'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaHome, FaPlane, FaBox, FaStar, FaUsers, FaPhone } from 'react-icons/fa';
import Container from '@/components/shared/Container';

const navLinks = [
  { href: '/', label: 'דף הבית', icon: FaHome },
  { href: '/destinations', label: 'היעדים שלנו', icon: FaPlane },
  { href: '/packages', label: 'חבילות', icon: FaBox },
  { href: '/why-netofun', label: 'למה נטו פאן?', icon: FaStar },
  { href: '/parents', label: 'אזור הורים', icon: FaUsers },
  { href: '/contact', label: 'צור קשר', icon: FaPhone },
];

const menuVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

const itemVariants = {
  closed: { opacity: 0, y: 20 },
  open: { opacity: 1, y: 0 }
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm ${
        isScrolled ? 'shadow-lg' : ''
      }`}
    >
      <Container>
        <nav dir="ltr" className="flex items-center justify-between h-20 px-2">
          {/* Logo */}
          <Link href="/" className="flex items-center h-full">
            <Image
              src="/images/logo.png"
              alt="נטו פאן"
              width={140}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div dir="rtl" className="hidden lg:flex items-center h-full gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center h-full font-medium text-gray-800 transition-colors hover:text-primary-500"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-800"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu - Full Screen Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-20 z-40"
            style={{ background: 'linear-gradient(135deg, #9333ea 0%, #7c3aed 50%, #6b21a8 100%)' }}
          >
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="flex flex-col items-center justify-center h-full gap-6 pb-20"
            >
              {navLinks.map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-4 text-white text-2xl font-bold hover:text-yellow-400 transition-colors"
                  >
                    <link.icon className="text-yellow-400" />
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoLogoWhatsapp, IoClose } from 'react-icons/io5';

const WHATSAPP_NUMBER = '972515699420';
const DEFAULT_MESSAGE = 'היי, אשמח לשמוע על חופשות!';

export default function WhatsAppButton() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="absolute bottom-20 left-0 bg-white rounded-2xl shadow-2xl p-4 w-72"
          >
            <button
              onClick={() => setIsExpanded(false)}
              className="absolute top-2 left-2 text-gray-400 hover:text-gray-600"
              aria-label="סגור"
            >
              <IoClose size={20} />
            </button>
            <div className="text-right">
              <h4 className="font-bold text-lg mb-2">יש לכם שאלות?</h4>
              <p className="text-gray-600 text-sm mb-4">
                אנחנו כאן בשבילכם! לחצו לשיחה ישירה עם נציג נטו פאן.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white text-center py-3 rounded-xl font-bold hover:bg-green-600 transition-colors"
              >
                התחל שיחה
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors relative"
        aria-label="פתח צ'אט וואטסאפ"
      >
        <IoLogoWhatsapp className="text-white" size={32} />

        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
      </motion.button>

      {/* Direct link on mobile (no expansion) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden absolute inset-0"
        aria-label="פתח וואטסאפ"
      />
    </div>
  );
}

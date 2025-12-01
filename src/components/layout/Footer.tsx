import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaEnvelope, FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';
import Container from '@/components/shared/Container';

const destinations = [
  { name: 'איה נאפה', href: '/destinations/ayia-napa' },
  { name: 'מאליה', href: '/destinations/malia' },
  { name: 'רודוס', href: '/destinations/rhodes' },
  { name: 'סאני ביץ׳', href: '/destinations/sunny-beach' },
  { name: 'יורט דה מאר', href: '/destinations/lloret-de-mar' },
  { name: 'אילת', href: '/destinations/eilat' },
];

const quickLinks = [
  { name: 'דף הבית', href: '/' },
  { name: 'למה נטו פאן?', href: '/why-netofun' },
  { name: 'אזור הורים', href: '/parents' },
  { name: 'המלצות', href: '/testimonials' },
  { name: 'צור קשר', href: '/contact' },
];

const legalLinks = [
  { name: 'תקנון', href: '/terms' },
  { name: 'מדיניות פרטיות', href: '/privacy' },
  { name: 'נגישות', href: '/accessibility' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Contact */}
          <div>
            <Image
              src="https://netofun.co.il/wp-content/uploads/2019/07/NetoFun-Logo.png"
              alt="נטו פאן"
              width={160}
              height={57}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 mb-6">
              החברה המרכזית לתיירות צעירים בישראל. מעל עשור של ניסיון בחופשות מושלמות.
            </p>
            <div className="space-y-3">
              <a
                href="tel:03-379-6666"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <FaPhone className="text-primary-500" />
                03-379-6666
              </a>
              <a
                href="https://wa.me/972515699420"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <IoLogoWhatsapp className="text-green-500" />
                +972-51-569-9420
              </a>
              <a
                href="mailto:info@netofun.co.il"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
              >
                <FaEnvelope className="text-primary-500" />
                info@netofun.co.il
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-bold mb-4">היעדים שלנו</h4>
            <ul className="space-y-2">
              {destinations.map((dest) => (
                <li key={dest.href}>
                  <Link
                    href={dest.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {dest.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">קישורים מהירים</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h4 className="text-lg font-bold mb-4">עקבו אחרינו</h4>
            <div className="flex gap-4 mb-6">
              <a
                href="https://instagram.com/netofun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://facebook.com/NetofunIL"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="https://youtube.com/@netofun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={20} />
              </a>
            </div>

            <h4 className="text-lg font-bold mb-4">מידע משפטי</h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} נטו פאן. כל הזכויות שמורות.
            </p>
            <p className="text-gray-500 text-sm">
              רישיון סוכנות נסיעות מספר: XXXXXX
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

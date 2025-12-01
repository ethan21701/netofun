'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Here you would send data to Airtable
      console.log('Contact form submitted:', data);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <Container>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">צור קשר</h1>
            <p className="text-xl text-white/90">נשמח לשמוע מכם ולעזור בכל שאלה</p>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-8">פרטי התקשרות</h2>

              <div className="space-y-6">
                <a
                  href="tel:03-379-6666"
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">טלפון</h3>
                    <p className="text-gray-600" dir="ltr">03-379-6666</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/972515699420"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaWhatsapp className="text-green-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">וואטסאפ</h3>
                    <p className="text-gray-600" dir="ltr">+972-51-569-9420</p>
                  </div>
                </a>

                <a
                  href="mailto:info@netofun.co.il"
                  className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">אימייל</h3>
                    <p className="text-gray-600">info@netofun.co.il</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <FaClock className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">שעות פעילות</h3>
                    <p className="text-gray-600">ימים א׳-ה׳: 09:00-18:00</p>
                    <p className="text-gray-600">יום ו׳: 09:00-13:00</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-bold mb-4">עקבו אחרינו</h3>
                <div className="flex gap-4">
                  <a
                    href="https://instagram.com/netofun"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <FaInstagram size={20} />
                  </a>
                  <a
                    href="https://facebook.com/NetofunIL"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                  >
                    <FaFacebookF size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-8">שלחו לנו הודעה</h2>

              {isSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">ההודעה נשלחה בהצלחה!</h3>
                  <p className="text-green-600">נחזור אליכם בהקדם האפשרי</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      שם מלא
                    </label>
                    <input
                      type="text"
                      {...register('name', { required: 'שדה חובה' })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      אימייל
                    </label>
                    <input
                      type="email"
                      {...register('email', {
                        required: 'שדה חובה',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'כתובת אימייל לא תקינה',
                        },
                      })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                      dir="ltr"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      טלפון
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { required: 'שדה חובה' })}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                      dir="ltr"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      הודעה
                    </label>
                    <textarea
                      {...register('message', { required: 'שדה חובה' })}
                      rows={5}
                      className={`w-full px-4 py-3 rounded-xl border ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? 'שולח...' : 'שלח הודעה'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

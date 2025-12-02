'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { IoLogoWhatsapp } from 'react-icons/io5';
import Container from '@/components/shared/Container';
import SectionTitle from '@/components/shared/SectionTitle';

interface FormData {
  name: string;
  phone: string;
  age: string;
}

interface Props {
  hotelName: string;
  destinationName: string;
}

export default function HotelLeadForm({ hotelName, destinationName }: Props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      console.log('Form submitted:', data);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSuccess(true);
      reset();

      setTimeout(() => {
        const message = `היי, אני ${data.name}, גיל ${data.age}. אשמח לשמוע על חופשה במלון ${hotelName} ב${destinationName}!`;
        window.open(`https://wa.me/972515699420?text=${encodeURIComponent(message)}`, '_blank');
      }, 1500);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const openWhatsApp = () => {
    const data = getValues();
    const message = data.name
      ? `היי, אני ${data.name}${data.age ? `, גיל ${data.age}` : ''}. אשמח לשמוע על חופשה במלון ${hotelName} ב${destinationName}!`
      : `היי, אשמח לשמוע על חופשה במלון ${hotelName} ב${destinationName}!`;
    window.open(`https://wa.me/972515699420?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-16 bg-gray-50">
      <Container size="sm">
        <SectionTitle subtitle={`השאירו פרטים ונחזור אליכם עם הצעה למלון ${hotelName}`}>
          רוצים לישון פה?
        </SectionTitle>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          {isSuccess ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">תודה רבה!</h3>
              <p className="text-green-600">מעבירים אתכם לוואטסאפ לשיחה ישירה...</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    שם מלא
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'שדה חובה' })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition`}
                    placeholder="הכניסו את שמכם"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    טלפון
                  </label>
                  <input
                    type="tel"
                    {...register('phone', {
                      required: 'שדה חובה',
                      pattern: {
                        value: /^[0-9]{9,10}$/,
                        message: 'מספר טלפון לא תקין',
                      },
                    })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition`}
                    placeholder="050-000-0000"
                    dir="ltr"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    גיל
                  </label>
                  <input
                    type="number"
                    {...register('age', {
                      required: 'שדה חובה',
                      min: { value: 16, message: 'גיל מינימלי 16' },
                      max: { value: 30, message: 'גיל מקסימלי 30' },
                    })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.age ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-primary-500 focus:border-transparent transition`}
                    placeholder="18"
                    min="16"
                    max="30"
                  />
                  {errors.age && (
                    <p className="mt-1 text-sm text-red-500">{errors.age.message}</p>
                  )}
                </div>
              </div>

              <div className="mt-8 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'שולח...' : 'אני רוצה חופשה במלון הזה!'}
                </button>

                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="w-full bg-green-500 text-white py-4 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  <IoLogoWhatsapp size={24} />
                  או דברו איתנו ישירות בוואטסאפ
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </Container>
    </section>
  );
}

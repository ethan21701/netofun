'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { IoLogoWhatsapp } from 'react-icons/io5';
import Container from '@/components/shared/Container';

interface FormData {
  name: string;
  phone: string;
  age: string;
}

interface Props {
  destinationName: string;
  destinationSlug: string;
}

export default function DestinationLeadForm({ destinationName, destinationSlug }: Props) {
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
      // Here you would send data to Airtable
      console.log('Form submitted:', { ...data, destination: destinationSlug });

      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSuccess(true);
      reset();

      setTimeout(() => {
        const message = `היי, אני ${data.name}, גיל ${data.age}. אשמח לשמוע על חופשות ל${destinationName}!`;
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
      ? `היי, אני ${data.name}${data.age ? `, גיל ${data.age}` : ''}. אשמח לשמוע על חופשות ל${destinationName}!`
      : `היי, אשמח לשמוע על חופשות ל${destinationName}!`;
    window.open(`https://wa.me/972515699420?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-16 bg-primary-600">
      <Container size="md">
        <div className="text-center text-white mb-10">
          <h2 className="text-3xl font-bold mb-4">רוצים לטוס ל{destinationName}?</h2>
          <p className="text-white/80">השאירו פרטים ונחזור אליכם עם הצעה מושלמת</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto"
        >
          {isSuccess ? (
            <div className="bg-white rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-2">תודה רבה!</h3>
              <p className="text-green-600">מעבירים אתכם לוואטסאפ...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl p-8">
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    {...register('name', { required: 'שדה חובה' })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                    placeholder="שם מלא"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <input
                    type="tel"
                    {...register('phone', { required: 'שדה חובה' })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                    placeholder="טלפון"
                    dir="ltr"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
                  )}
                </div>

                <div>
                  <input
                    type="number"
                    {...register('age', { required: 'שדה חובה' })}
                    className={`w-full px-4 py-3 rounded-xl border ${
                      errors.age ? 'border-red-500' : 'border-gray-300'
                    } focus:ring-2 focus:ring-primary-500 focus:border-transparent`}
                    placeholder="גיל"
                    min="16"
                    max="30"
                  />
                  {errors.age && (
                    <p className="mt-1 text-sm text-red-500">{errors.age.message}</p>
                  )}
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-600 text-white py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'שולח...' : `אני רוצה לטוס ל${destinationName}`}
                </button>

                <button
                  type="button"
                  onClick={openWhatsApp}
                  className="w-full bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                  <IoLogoWhatsapp size={24} />
                  דברו איתנו בוואטסאפ
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </Container>
    </section>
  );
}

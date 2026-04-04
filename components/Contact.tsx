'use client';

import React from 'react';
import { Container } from './ui/Container';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Mail, Phone, MapPin, MessageSquare, Send, Clock, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

export const Contact: React.FC = () => {
  const t = useTranslations ('contact');
  return (
    <section id="contact" className="py-20 md:py-32 bg-white dark:bg-gray-950">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {t('title')}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent dark:from-gray-100 dark:to-gray-300">
              {t('titleGradient')}
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <div>
            <Card className="border border-gray-200 shadow-xl dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {t('form.title')}
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('form.name')}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:ring-red-500 dark:focus:border-red-500"
                      placeholder={t('form.namePlaceholder')}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      {t('form.email')}
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:ring-red-500 dark:focus:border-red-500"
                      placeholder={t('form.emailPlaceholder')}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('form.company')}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder={t('form.companyPlaceholder')}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    {t('form.message')}
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none dark:bg-gray-900 dark:border-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:ring-red-500 dark:focus:border-red-500"
                    placeholder={t('form.messagePlaceholder')}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full py-4 text-lg"
                  icon={Send}
                  iconPosition="right"
                >
                  {t('form.submit')}
                </Button>
              </form>
            </Card>
          </div>
          
          {/* Contact info */}
          <div className="space-y-6">
            {/* Demo CTA Card */}
            <Card className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 dark:from-red-600 dark:to-red-800">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">{t('demo.title')}</h4>
                  <p className="opacity-90">
                    {t('demo.description')}
                  </p>
                  <Button 
                    variant="secondary" 
                    className="mt-4 bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                  >
                    {t('demo.button')}
                  </Button>
                </div>
              </div>
            </Card>
            
            {/* Email Card */}
            <Card className="dark:bg-gray-900 dark:border-gray-800">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg dark:bg-red-900/30">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 dark:text-white">{t('info.email')}</h4>
                  <p className="text-gray-600 dark:text-gray-400">support@CatGate.com</p>
                  <p className="text-gray-600 dark:text-gray-400">sales@CatGate.com</p>
                </div>
              </div>
            </Card>
            
            {/* Phone Card */}
            <Card className="dark:bg-gray-900 dark:border-gray-800">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg dark:bg-red-900/30">
                  <Phone className="w-6 h-6 text-blue-600 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 dark:text-white">{t('info.phone')}</h4>
                  <p className="text-gray-600 dark:text-gray-400">+7 (495) 123-45-67</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{t('info.phoneNote')}</p>
                </div>
              </div>
            </Card>
            
            {/* Hours Card */}
            <Card className="dark:bg-gray-900 dark:border-gray-800">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg dark:bg-red-900/30">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 dark:text-white">{t('info.hours')}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{t('info.hoursWeekdays')}</p>
                  <p className="text-gray-600 dark:text-gray-400">{t('info.hoursSupport')}</p>
                </div>
              </div>
            </Card>
            
            {/* Office Card */}
            <Card className="dark:bg-gray-900 dark:border-gray-800">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg dark:bg-red-900/30">
                  <MapPin className="w-6 h-6 text-blue-600 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 dark:text-white">{t('info.office')}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{t('info.officeAddress')}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{t('info.officeNote')}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
};
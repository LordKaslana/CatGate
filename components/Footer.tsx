import React from 'react';
import { Container } from './ui/Container';
import { Shield, Twitter, Linkedin, Github, Mail, Instagram } from 'lucide-react';
import { Button } from './ui/Button';
import { useTranslations } from 'next-intl';

export const Footer: React.FC = () => {
  const t = useTranslations ('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white dark:from-gray-950 dark:to-gray-900 pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              {/* Иконка с градиентом - в темной теме красная */}
              <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg dark:from-red-600 dark:to-red-800">
                <Shield className="w-6 h-6 text-white dark:text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white dark:text-white">
                  CatGate
                </span>
                <div className="text-sm text-gray-400 dark:text-gray-400">
                  Security Platform
                </div>
              </div>
            </div>
            <p className="text-gray-400 dark:text-gray-400 mb-6">
              {t('description')}
            </p>
            {/* Социальные иконки */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-white">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-white">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white dark:text-white">{t('product')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">{t('productLinks.features')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">{t('productLinks.solutions')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">{t('productLinks.pricing')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">{t('productLinks.docs')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">{t('productLinks.api')}</a></li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white dark:text-white">{t('company')}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">{t('companyLinks.about')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">{t('companyLinks.blog')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">{t('companyLinks.careers')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">{t('companyLinks.partners')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors dark:text-gray-400 dark:hover:text-white">{t('companyLinks.press')}</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white dark:text-white">{t('newsletter.title')}</h4>
            <p className="text-gray-400 dark:text-gray-400 mb-4">
              {t('newsletter.description')}
            </p>
            <form className="space-y-3">
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder={t('newsletter.placeholder')}
                  className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:focus:ring-red-500 dark:text-white dark:placeholder-gray-400"
                />
                <Button variant="primary" className="whitespace-nowrap dark:from-red-600 dark:to-red-800 dark:hover:from-red-700 dark:hover:to-red-900">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-500">
                {t('newsletter.privacy')}
              </p>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm dark:text-gray-400">
              © {currentYear} CatGate. {t('copyright')}
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm text-gray-400 dark:text-gray-400">
              <a href="#" className="hover:text-white transition-colors dark:hover:text-white">{t('legal.privacy')}</a>
              <a href="#" className="hover:text-white transition-colors dark:hover:text-white">{t('legal.terms')}</a>
              <a href="#" className="hover:text-white transition-colors dark:hover:text-white">{t('legal.cookies')}</a>
              <a href="#" className="hover:text-white transition-colors dark:hover:text-white">{t('legal.sitemap')}</a>
            </div>
          </div>
          
          <div className="mt-6 text-center text-gray-500 text-sm dark:text-gray-500">
            {t('madeWith')}
          </div>
        </div>
      </Container>
    </footer>
  );
};
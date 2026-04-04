'use client';

import React, { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Shield, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslations } from 'next-intl';
import ThemeSwitcher from '@/components/ThemeSwitcher';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('auth');
  const tForgot = useTranslations('auth.forgotPassword');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Password reset requested for:', email);
    setIsLoading(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-950 flex flex-col">
      {/* Header */}
      <header className="py-6 border-b border-blue-700 dark:border-red-800 bg-gradient-to-r from-blue-800 to-blue-900 dark:from-gray-950 dark:to-gray-900">
        <Container>
          <div className="flex items-center justify-between">
            <Link href={`/${locale}`} className="flex items-center space-x-3">
              <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 dark:bg-red-600 dark:from-red-600 dark:to-red-700">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  CatGate
                </span>
                <div className="text-xs text-blue-200 dark:text-red-300">
                  Security Platform
                </div>
              </div>
            </Link>
            
            <div className="flex items-center space-x-4">
              <ThemeSwitcher />
              <LanguageSwitcher />
              <Link 
                href={`/${locale}/login`}
                className="text-sm font-medium text-blue-200 dark:text-red-300 hover:text-white dark:hover:text-red-200"
              >
                {t('login.backToLogin')}
              </Link>
            </div>
          </div>
        </Container>
      </header>

      <main className="flex-1 flex items-center justify-center py-12">
        <Container>
          <div className="max-w-md mx-auto">
            <div className="text-center mb-10">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {tForgot('title')}
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                {isSubmitted 
                  ? tForgot('successMessage')
                  : tForgot('subtitle')
                }
              </p>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-2xl shadow-xl p-8">
              {isSubmitted ? (
                <div className="text-center space-y-6">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto">
                    <Mail className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {tForgot('successTitle')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {tForgot('successMessage')}
                      <span className="font-medium text-gray-900 dark:text-white"> {email}</span>
                    </p>
                  </div>
                  <div className="space-y-4">
                    <Button
                      onClick={() => router.push(`/${locale}/login`)}
                      variant="primary"
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-red-600 dark:to-red-800 text-white hover:from-blue-700 hover:to-cyan-700 dark:hover:from-red-700 dark:hover:to-red-900 shadow-lg"
                    >
                      {tForgot('backToLogin')}
                    </Button>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      {tForgot('notReceived')}
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-blue-600 hover:text-blue-700 dark:text-red-400 dark:hover:text-red-500 font-medium"
                      >
                        {tForgot('tryAgain')}
                      </button>
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Email Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {tForgot('emailLabel')}
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-gray-500" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-red-500 focus:border-transparent transition-all bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                          placeholder={tForgot('emailPlaceholder')}
                          required
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-red-600 dark:to-red-800 text-white hover:from-blue-700 hover:to-cyan-700 dark:hover:from-red-700 dark:hover:to-red-900 shadow-lg"
                      disabled={isLoading}
                    >
                      {isLoading ? tForgot('submittingButton') : tForgot('submitButton')}
                    </Button>
                  </form>

                  {/* Back to Login */}
                  <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <Link 
                      href={`/${locale}/login`}
                      className="flex items-center justify-center text-blue-600 hover:text-blue-700 dark:text-red-400 dark:hover:text-red-500 font-medium"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      {tForgot('backToLogin')}
                    </Link>
                  </div>
                </>
              )}
            </div>

            {/* Support Info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {tForgot('needHelp')}{' '}
                <Link 
                  href={`/${locale}/support`}
                  className="font-medium text-blue-600 hover:text-blue-700 dark:text-red-400 dark:hover:text-red-500"
                >
                  {tForgot('contactSupport')}
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
        <Container>
          <div className="text-center text-sm text-gray-500 dark:text-gray-500">
            {t('footer.copyright')}
          </div>
        </Container>
      </footer>
    </div>
  );
}
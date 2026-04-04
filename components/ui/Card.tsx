import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 dark:bg-gray-900 dark:border dark:border-gray-800 dark:shadow-gray-900/50 dark:hover:shadow-red-900/20 ${className}`}>
      {children}
    </div>
  );
};
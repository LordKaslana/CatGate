'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionItem {
  id: number;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openItemId, setOpenItemId] = useState<number | null>(items[0]?.id || null);

  const toggleItem = (id: number) => {
    setOpenItemId(openItemId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800">
          <button
            className="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 dark:bg-gray-900 dark:hover:bg-gray-800"
            onClick={() => toggleItem(item.id)}
          >
            <span className="font-semibold text-gray-800 dark:text-gray-200">{item.question}</span>
            {openItemId === item.id ? (
              <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            ) : (
              <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            )}
          </button>
          {openItemId === item.id && (
            <div className="p-4 bg-white dark:bg-gray-900">
              <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
"use client";
import { faqData } from '@/data/faqData';

import React, { useState } from 'react';

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto mt-24 mb-16">
      <h2 className='text-4xl font-bold text-gray-800 flex justify-center mb-4'>FAQs</h2>
      {faqData.map((faq, index) => (
        <div key={faq.id} className="p-6 mb-1 mx-2 bg-gray-100 rounded-lg border-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
          {/* Question */}
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="mb-2 text-xl text-gray-700 font-medium">{faq.question}</h3>
            <svg
              className={`w-6 h-6 transition-transform transform ${activeIndex === index ? 'rotate-45' : 'rotate-0'
                }`}
              fill="none"
              stroke="#334155"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.5v15m7.5-7.5h-15"
              ></path>

            </svg>
          </div>

          {/* Answer */}
          {activeIndex === index && (
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
};
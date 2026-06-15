"use client";

import { useState } from "react";

export default function Testimonials() {
  const items = [
    {
      name: "Anshuman Priyadarshi",
      body: "An excellent app for test series and video classes.",
    },
    {
      name: "Anupriya Sharma",
      body: "This is one of the best platforms for SSC JHT, Rajbhasha adhikari and all types of translator exams....",
    },
    {
      name: "Rituraj Singh",
      body: "Best app for preparation of RAJBHASHA related exams.. Best Mock tests are available here.",
    },
    {
      name: "Anshuman, Privadarshi",
      body: "An excellent app for test series and video classes.",
    },
    {
      name: "Anupriya Sharma",
      body: "This is one of the best platforms for SSC JHT, Rajbhasha adhikari and all types of translator exams....",
    },
    {
      name: "Rituraj Singh",
      body: "Best app for preparation of RAJBHASHA related exams.. Best Mock tests are available here.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="max-w-5xl mx-auto mt-24 flex flex-col items-center px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
        Our App Reviews
      </h2>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full max-w-sm px-8 mb-6 z-40 relative">
        <button
          onClick={handlePrev}
          className="w-16 h-16 bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-gray-50 hover:scale-105 transition-transform"
          aria-label="Previous Review"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="w-16 h-16 bg-white rounded-full shadow-[0_5px_15px_rgba(0,0,0,0.15)] flex items-center justify-center hover:bg-gray-50 hover:scale-105 transition-transform"
          aria-label="Next Review"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-gray-600"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

      {/* Card Stack Wrapper */}
      <div className="relative w-full max-w-lg h-[22rem] md:h-80 mx-auto perspective-1000">
        {items.map((testimonial, index) => {
          // Calculate the visual offset (distance from the current active card)
          // The modulo handles the infinite wrap-around loop smoothly
          let diff = index - currentIndex;
          if (diff < 0) diff += items.length;

          // Assign styles based on the card's position in the stack
          let transformClasses = "";
          let zIndex = 0;
          let borderColor = "border-gray-200";

          if (diff === 0) {
            // Front Card
            transformClasses = "rotate-0 scale-100 opacity-100 translate-y-0";
            zIndex = 30;
            borderColor = "border-[#f1f1f1]";
          } else if (diff === 1) {
            // Second Card (Rotated 3 degrees)
            transformClasses = "rotate-3 scale-[0.98] opacity-100 translate-y-2";
            zIndex = 20;
            borderColor = "border-[#f1f1f1]"; // Match your image's background card color
          } else if (diff === 2) {
            // Third Card (Rotated -3 degrees)
            transformClasses = "-rotate-3 scale-[0.96] opacity-100 translate-y-4";
            zIndex = 10;
            borderColor = "border-[#f1f1f1]"; // Match your image's background card color
          } else {
            // Hidden Cards (Waiting to cycle in)
            transformClasses = "rotate-0 scale-90 opacity-0 translate-y-8";
            zIndex = 0;
          }

          return (
            <div
              key={index}
              className={`absolute inset-0 bg-white border ${borderColor} rounded-[2rem] shadow-xl p-8 flex flex-col justify-between transition-all duration-500 ease-in-out origin-center ${transformClasses}`}
              style={{ zIndex }}
            >
              {/* Star rating */}
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 ms-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Body */}
              <div className="w-full flex-grow flex items-center pt-4">
                <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
                  "{testimonial.body}"
                </p>
              </div>

              <div className="w-full mt-6">
                <div className="w-full h-[1px] bg-gray-200 mb-4"></div>
                {/* Testimonial Author */}
                <div className="flex flex-col">
                  <p className="text-gray-900 font-bold text-lg">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
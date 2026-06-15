"use client";

import React from "react";
import Lottie from "lottie-react";
import books from "./Lottie/books.json";
import Image from "next/image";
import { booksData } from "@/data/booksData";
import Link from "next/link";

export default function App() {
  const style = {
    height: 300, // Slightly reduced to prevent mobile overflow, scales well on desktop
  };

  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.2],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.2, 0.45],
        type: "seek",
        frames: [0, 45],
      },
      {
        visibility: [0.45, 1.0],
        type: "seek",
        frames: [45, 60],
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto mt-24 px-4 md:px-8">
      {/* Mobile-only section title */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10 block lg:hidden">
        Preorder Our Book Now
      </h2>

      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-12 lg:gap-16">
        
        {/* Right Side / Top Side: Book Image Container */}
        <div className="w-full lg:w-2/5 flex justify-center items-center p-8 bg-[#9ABB85] lg:bg-gray-100/60 backdrop-blur-md border border-gray-200 rounded-3xl shadow-xl">
          {/* Desktop Image */}
          <Image
            src="/assets/book2.png"
            width={400}
            height={400}
            alt="Book cover"
            className="hidden lg:block object-contain drop-shadow-xl"
          />
          {/* Mobile Image */}
          <Image
            src="/assets/book2.png"
            width={400}
            height={400}
            alt="Book cover"
            className="block lg:hidden object-contain drop-shadow-xl rounded-xl"
          />
        </div>

        {/* Left Side / Bottom Side: Text, Lottie, and Button */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-8">
          
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              {booksData.title}
            </h3>
            <p className="text-lg md:text-xl text-gray-600 font-medium leading-relaxed">
              {booksData.desc}
            </p>
          </div>

          <div className="w-full flex flex-col items-center lg:items-start relative">
            
            {/* Lottie Animation */}
            <div className="w-full flex justify-center lg:justify-start -my-6 lg:-my-8 pointer-events-none">
              <Lottie
                animationData={books}
                style={style}
                interactivity={interactivity}
              />
            </div>

            {/* Preorder Button */}
            {booksData.link && (
              <Link href={booksData.link} target="_blank" rel="noreferrer" className="w-full sm:w-auto z-10 ml-auto md:ml-6 mt-4">
                <button
                  type="button"
                  className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white text-lg font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 tracking-wide"
                >
                  PREORDER NOW
                </button>
              </Link>
            )}
            
          </div>
        </div>

      </div>
    </div>
  );
}
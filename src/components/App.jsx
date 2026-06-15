"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Lottie from "lottie-react";
import arrow from "./Lottie/arrow.json";

import { useInView } from 'react-intersection-observer';
import { urlData } from "@/data/urlData";

export default function App() {

  const [isZoomed, setIsZoomed] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // Triggers the animation when the image is 20% visible on screen
  });

  useEffect(() => {
    if (inView) {
      setIsZoomed(true);
    }
  }, [inView]);

  const style = {
    height: 150, 
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
        type: "loop",
        frames: [45, 60],
      },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto mt-24 px-4 md:px-8 mb-24 overflow-hidden">
      
      {/* Header Section */}
      <div className="flex flex-col items-center gap-2 mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
          Download Our Mobile App
        </h2>
        <p className="text-xl font-normal text-gray-700 text-center">
          Learning Aksh App for exam preparation
        </p>
      </div>

      {/* Button and Arrows Row */}
      <div className="flex flex-row justify-between items-center w-full max-w-4xl mx-auto mb-8">
        
        {/* Left Arrow */}
        <div className="hidden sm:block">
          <Lottie animationData={arrow} style={style} interactivity={interactivity} />
        </div>

        {/* Download Button (Restored your original gradient) */}
        <div className="flex w-full justify-center items-center z-10">
          {urlData.appLink && (
            <Link href={urlData.appLink} target='_blank' rel='noreferrer'>
              <button 
                type="button" 
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 shadow-lg shadow-blue-500/50 font-medium rounded-2xl text-lg px-8 py-3.5 text-center transition-transform hover:scale-105"
              >
                Download
              </button>
            </Link>
          )}
        </div>

        {/* Right Arrow (Flipped) */}
        <div className="hidden sm:block">
          <Lottie className="rotate-180" animationData={arrow} style={style} interactivity={interactivity} />
        </div>

      </div>

      <div className="relative w-full h-[600px]">
      <div className="flex justify-center items-start w-full h-[400px] overflow-hidden mt-20">
        <div 
          ref={ref}
          className={`w-fit h-fit flex justify-center items-center transform transition-all duration-700 ease-in-out ${
            isZoomed 
              ? 'scale-100 opacity-100' 
              : 'scale-[0.70] opacity-0'
          }`}
        >
          <Image 
            src="/assets/apim.png" 
            width={300} 
            height={300} 
            alt="Learning Aksh App" 
            className="drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Decorative Blurred Circle */}
      <div className="absolute w-full flex justify-center z-[10] w-[300px] h-[300px] overflow-hidden">
        <div className="transform -translate-y-1/2 w-[4500px] h-[200px] bg-[radial-gradient(ellipse_at_center,_#3f6fff_0%,_transparent_70%)] rounded-full filter blur-xl">
      </div>
      </div>
    </div>
    </div>
  );
}
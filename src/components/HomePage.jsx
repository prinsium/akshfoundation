"use client";
import React, { useEffect, useState } from 'react';

import Lottie from "lottie-react";
import rubikCube from "./Lottie/rubikCube.json";

export default function HomePage() {
  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: typeof window !== 'undefined' ? window.innerWidth : 0,
      height: typeof window !== 'undefined' ? window.innerHeight : 0,
    });

    useEffect(() => {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return windowSize;
  };

  const [isWideScreen, setIsWideScreen] = useState(false);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(width >= height);
    };

    handleResize(); // Set initial state based on window size

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [width, height]);

  const style = {
    height: 700,
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

    <div className={`mt-24 lg:mt-0 lg:h-screen flex ${isWideScreen ? 'flex-row justify-evenly' : 'flex-col justify-start'}`}>

      <div className='w-full h-full flex justify-center items-center'>

        <div className="w-fit h-full flex flex-col gap-6 md:gap-4 xl:gap-6 justify-center items-center">

          <div className="flex flex-row items-center gap-2 w-full h-fit">
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#4f46e5]">B</h1>
            <div className="w-48 md:w-96 h-9/12 bg-transparent border-[12px] rounded-3xl py-2 md:py-4 border-[#4f46e5]"></div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#4f46e5]">ST</h1>
          </div>

          <div className="flex flex-row flex-wrap gap-3 w-full h-fit">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800">YOUR</h1>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800">DIGITAL</h1>
          </div>

          <div className="flex flex-row gap-3 w-full h-fit">
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#00DFA2]">EDUCATION</h1>
          </div>

          <div className="flex flex-row flex-wrap gap-3 w-full h-fit">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800">WITH</h1>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800">PERFECT</h1>
          </div>

          <div className="flex flex-row gap-3 w-full h-fit">
            <h1 className="text-5xl md:text-7xl font-extrabold border-4 border-dashed border-[#4f46e5] rounded-2xl p-2 text-[#4f46e5]">LEARNING</h1>
          </div>

        </div>

      </div>

      <div className='w-full h-full flex justify-center items-center'>
        <div className="w-fit h-fit">
          <Lottie animationData={rubikCube} style={style} loop={true} />
        </div>
      </div>

    </div>
  )
}

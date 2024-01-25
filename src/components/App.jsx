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
  });

  useEffect(() => {
    if (inView) {
      setIsZoomed(true);
    } else {
      setIsZoomed(false);
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
    <div className="mx-auto mt-24">
      <div>
        <h3 className="text-gray-800 text-4xl font-bold text-center">Download Our Mobile App</h3>
        <p className="text-gray-700 text-xl font-normal text-center">Learning Aksh App for exam prepration</p>
      </div>
      <div className="flex flex-row justify-between">
        <Lottie animationData={arrow} style={style} interactivity={interactivity} />
        <div className="flex justify-center items-center">
          {urlData.appLink && (
            <Link href={urlData.appLink} target='_blank' rel='noreferrer' >
              <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br 
    focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg 
    dark:shadow-blue-800/80 font-medium rounded-2xl text-md px-5 py-2.5 text-center me-2 mb-2 ">Download</button>
            </Link>
          )}
        </div>
        <Lottie className="rotate-180" animationData={arrow} style={style} interactivity={interactivity} />
      </div>

      <div className="flex justify-center items-center">
        <div className={`w-fit h-fit flex justify-center items-center transition ease-in-out delay-150 ${isZoomed ? 'transition duration-700 scale-125' : 'scale-0'}`} ref={ref}>
          <Image src="/assets/appImg.png" width={300} height={300} alt="APP" />
        </div>
      </div>

    </div>
  )
};
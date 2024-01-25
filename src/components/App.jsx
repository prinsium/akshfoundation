"use client";


import React from "react";
import Lottie from "lottie-react";
import arrow from "./Lottie/arrow.json";

export default function App(){

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

  return(
    <div className="max-w-7xl mx-auto mt-24">
        <div>
            <h3 className="text-gray-800 text-4xl font-bold text-center">Download Our Mobile App</h3>
            <p className="text-gray-700 text-xl font-normal text-center">Learning Aksh App for exam prepration</p>
        </div>
    <div className="flex flex-row justify-between">
    <Lottie animationData={arrow} style={style} interactivity={interactivity} />
    <div className="flex justify-center items-center">
    <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br 
    focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg 
    dark:shadow-blue-800/80 font-medium rounded-2xl text-sm px-5 py-2.5 text-center me-2 mb-2 ">Download Now</button>
    </div>
    <Lottie className="rotate-180" animationData={arrow} style={style} interactivity={interactivity} />
    </div>
    </div>
  )
};
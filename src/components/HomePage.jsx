"use client";


import React from "react";
import Lottie from "lottie-react";
import rubik from "./Lottie/rubik.json";

export default function HomePage(){

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

    return(
        // <div className="h-screen">

        //     <div className="hidden md:block">
        //     <div className="w-full h-full flex flex-col justify-center items-center">
        //     <h1 className="text-gray-800 text-5xl lg:text-5xl md:text-7xl text-8xl 2xl:text-9xl font-bold lg:font-extrabold text-center">CREATING NEW</h1>
        //     <h1 className="text-gray-800 text-5xl lg:text-5xl md:text-7xl text-8xl 2xl:text-9xl font-bold lg:font-extrabold text-center">EXPERIENCE WITH</h1>
        //     <h1 className="text-gray-800 text-5xl lg:text-5xl md:text-7xl text-8xl 2xl:text-9xl font-bold lg:font-extrabold text-center">WAYS OF</h1>
        //     <h1 className="text-gray-800 text-5xl lg:text-5xl md:text-7xl text-8xl 2xl:text-9xl font-bold lg:font-extrabold text-center">PERFECT LEARNING</h1>
        //     </div>
        //     </div>

        //     <div className="block md:hidden">
        //     <div className="w-full h-screen flex flex-col justify-center items-center">
        //     <h1 className="text-gray-800 text-4xl font-extrabold">CREATING NEW</h1>
        //     <h1 className="text-gray-800 text-4xl font-extrabold">EXPERIENCE</h1>
        //     <h1 className="text-gray-800 text-4xl font-extrabold">WITH WAYS OF</h1>
        //     <h1 className="text-gray-800 text-4xl font-extrabold">PERFECT LEARNING</h1>
        //     </div>
        //     </div>
        // </div>

        <div className="w-full h-screen flex flex-col lg:flex-row justify-between">

        <div className="w-fit h-full flex flex-col gap-4 justify-center items-center">

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
            <h1 className="text-5xl md:text-7xl font-extrabold text-[#2dd4bf]">EDUCATION</h1>
            </div>

            <div className="flex flex-row flex-wrap gap-3 w-full h-fit">
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800">WITH</h1>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-800">PERFECT</h1>
            </div>

            <div className="flex flex-row gap-3 w-full h-fit">
            <h1 className="text-5xl md:text-7xl font-extrabold border-4 border-dashed border-[#4f46e5] rounded-2xl p-2 text-[#4f46e5]">LEARNING</h1>
            </div>

        </div>

                <div className="w-full h-full flex justify-center items-center">
                <Lottie animationData={rubik} style={style} loop={true} />
                </div>

        </div>
    )
}

"use client";
import React from "react";
import { courseData } from "@/data/coursesData";
import { urlData } from "@/data/urlData";
import Link from "next/link";

export default function Course() {
  // Array maps out all courses and assigns a unique gradient based on the course type
  const courses = [
    {
      title: courseData.course1,
      desc: courseData.desc1,
      mode: courseData.mode1,
      price: courseData.price1,
      link: courseData.course1link,
      gradient: "from-blue-800 to-indigo-900", // Deep Blue for UPSC
    },
    {
      title: courseData.course2,
      desc: courseData.desc2,
      mode: courseData.mode2,
      price: courseData.price2,
      link: courseData.course2link,
      gradient: "from-teal-500 to-emerald-700", // Green/Teal for IBPS
    },
    {
      title: courseData.course3,
      desc: courseData.desc3,
      mode: courseData.mode3,
      price: courseData.price3 || courseData.coupon3 || "Join Now",
      link: courseData.course3link,
      gradient: "from-orange-500 to-red-600", // Orange/Red for SSC
    },
    {
      title: courseData.course4,
      desc: courseData.desc4,
      mode: courseData.mode4,
      price: courseData.price4 || "Join Now",
      link: courseData.course4link,
      gradient: "from-indigo-500 to-purple-600", // Purple/Indigo for SSC (Alternative)
    },
    {
      title: courseData.course5,
      desc: courseData.desc5,
      mode: courseData.mode5,
      price: courseData.price5,
      link: courseData.course5link,
      gradient: "from-rose-500 to-pink-700", // Rose/Pink for HINDI
    },
    {
      title: courseData.course6,
      desc: courseData.desc6,
      mode: courseData.mode6,
      price: courseData.price6,
      link: courseData.course6link,
      gradient: "from-cyan-600 to-blue-800", // Cyan/Blue for SSC Pradhyapak
    },
  ];

  return (
    <div className="mt-24">
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-center text-gray-900">
          EXPLORE OUR PROGRAMS
        </h2>
      </div>

      {/* Grid Layout: 1 col on mobile, 2 on medium, 3 on large */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 px-4 md:px-8 max-w-7xl mx-auto">
        {courses.map((course, index) => {
          if (!course.link) return null; // Don't render if no link exists

          return (
            <Link
              key={index}
              href={course.link}
              target="_blank"
              rel="noreferrer"
              className="group h-full"
            >
              {/* Outer Card Container */}
              <div className="flex flex-col w-full h-full bg-white border border-gray-200 rounded-3xl shadow-md hover:shadow-2xl transition-shadow duration-300 p-4">
                
                {/* Top Gradient Box */}
                <div className={`w-full h-52 bg-gradient-to-br ${course.gradient} rounded-2xl relative shadow-inner flex items-center justify-center transition-transform duration-300`}>
                  <h3 className="text-white text-4xl sm:text-5xl font-extrabold tracking-wider text-center px-4 drop-shadow-md">
                    {course.title}
                  </h3>

                  {/* Overlapping Red Pill */}
                  <div className="absolute -bottom-5 right-4 sm:right-6 bg-[#ff0000] text-white px-6 py-2 rounded-full font-bold shadow-lg border-2 border-white group-hover:scale-105 transition-transform duration-300">
                    {course.price}
                  </div>
                </div>

                {/* Bottom Text Area */}
                <div className="flex flex-col mt-10 mb-4 px-2 gap-2 flex-grow">
                  <span className="text-gray-500 font-semibold uppercase text-xs tracking-widest w-fit bg-gray-100 px-3 py-1 rounded-md">
                    Mode: {course.mode}
                  </span>
                  <p className="text-gray-900 font-bold text-xl leading-snug mt-2">
                    {course.desc}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="max-w-7xl flex justify-center items-center mt-24 mx-auto md:mx-24 xl:mx-auto px-4">
        <h2 className="w-full text-3xl md:text-4xl font-bold text-gray-800 text-center">
          UNLOCK YOUR FULL POTENTIAL WITH OUR EASY TO USE PROGRAMS
        </h2>
      </div>

      {/* How it works steps */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start mt-12 gap-12 xl:gap-24 px-4 pb-16">
        <div className="max-w-xs w-full flex flex-col justify-center items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#0f172a"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
            />
          </svg>
          <p className="text-xl font-medium text-gray-900 text-center">
            Click on the Course Link
          </p>
        </div>

        <div className="max-w-xs w-full flex flex-col justify-center items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#0f172a"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z"
            />
          </svg>
          <p className="text-xl font-medium text-gray-900 text-center">
            Fill the Form & Make Payment
          </p>
        </div>

        <div className="max-w-xs w-full flex flex-col justify-center items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#0f172a"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
            />
          </svg>
          <p className="text-xl font-medium text-gray-900 text-center">
            Share Screenshot on{" "}
            <span className="text-blue-600 font-bold underline">
              <a href={`${urlData?.whatsapp || "#"}`}>whatsapp</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { courseData } from "@/data/coursesData";
import { urlData } from "@/data/urlData";
import Link from "next/link";

export default function Course() {
  return (
    <div className="mt-24">
      <div>
        <h2>EXPLORE OUR PROGRAMS</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[4vw]">
        {courseData.course1link && (
          <Link href={courseData.course1link} target="_blank" rel="noreferrer">
            <div className="w-full flex flex-col bg-[#e0e0e0] rounded-xl border-2 border-gray-300 shadow-xl hover:shadow-none p-3 justify-between">
              <div className="flex flex-col gap-6">
                <Image
                  className="rounded-lg"
                  src="/assets/upsc.jpg"
                  width={1000}
                  height={1000}
                  alt="course"
                />
                <div className="h-full flex flex-row justify-between">
                  <h6>{courseData.course1}</h6>
                  <p>Mode: {courseData.mode1}</p>
                </div>
                <h6 className="text-2xl">{courseData.desc1}</h6>
              </div>
            </div>
          </Link>
        )}

        {courseData.course2link && (
          <Link href={courseData.course2link} target="_blank" rel="noreferrer">
            <div className="w-full flex flex-col bg-[#e0e0e0] rounded-xl border-2 border-gray-300 shadow-xl hover:shadow-none p-3 justify-between">
              <div className="flex flex-col gap-6">
                <Image
                  className="rounded-lg"
                  src="/assets/ibps.jpg"
                  width={1000}
                  height={1000}
                  alt="course"
                />
                <div className="h-full flex flex-row justify-between">
                  <h6>{courseData.course2}</h6>
                  <p>Mode: {courseData.mode2}</p>
                </div>
                <h6 className="text-2xl">{courseData.desc2}</h6>
              </div>
            </div>
          </Link>
        )}

        {courseData.course3link && (
          <Link href={courseData.course3link} target="_blank" rel="noreferrer">
            <div className="w-full flex flex-col bg-[#e0e0e0] rounded-xl border-2 border-gray-300 shadow-xl hover:shadow-none p-3 justify-between">
              <div className="flex flex-col gap-6">
                <Image
                  className="rounded-lg"
                  src="/assets/sscc.jpg"
                  width={1000}
                  height={1000}
                  alt="course"
                />
                <div className="h-full flex flex-row justify-between">
                  <h6>{courseData.course3}</h6>
                  <p>Mode: {courseData.mode3}</p>
                </div>
                <h6 className="text-2xl">{courseData.desc3}</h6>
              </div>
            </div>
          </Link>
        )}

        {urlData.whatsapp && (
          <Link href={urlData.whatsapp} target="_blank" rel="noreferrer">
            <div className="w-full flex flex-col bg-[#e0e0e0] rounded-xl border-2 border-gray-300 shadow-xl hover:shadow-none p-3 justify-between">
              <div className="flex flex-col gap-6">
                <Image
                  className="rounded-lg"
                  src="/assets/rapc.jpg"
                  width={1000}
                  height={1000}
                  alt="course"
                />
                <div className="h-full flex flex-row justify-between">
                  <h6>{courseData.course4}</h6>
                  <p>Mode: {courseData.mode4}</p>
                </div>
                <h6 className="text-2xl">{courseData.desc4}</h6>
              </div>
            </div>
          </Link>
        )}
      </div>

      <div className='max-w-full flex justify-center items-center mt-16 mx-auto md:mx-24 xl:mx-auto'>
        <h2 className='w-full text-4xl font-bold text-gray-800 text-center'>
          UNLOCK YOUR FULL POTENTIAL WITH OUR EASY TO USE PROGRAMS</h2>
      </div>



      <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-8 xl:gap-12 2xl:gap-24'>

        <div className='max-w-72 flex flex-col justify-center items-center gap-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#0f172a" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59" />
          </svg>

          <p className='text-lg text-gray-900 text-center'>Click on the Course Link</p>
        </div>

        <div className='max-w-72 flex flex-col justify-center items-center gap-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#0f172a" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
          </svg>

          <p className='text-lg text-gray-900 text-center'>Fill the Form & Make Payment</p>
        </div>

        <div className='max-w-72 flex flex-col justify-center items-center gap-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="#0f172a" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
          </svg>

          <p className='text-lg text-gray-900 text-center'>Share Screenshot on <span><a href={`${urlData.whatsapp}`}>whatsapp</a></span></p>
        </div>

      </div>

    </div>
  );
}

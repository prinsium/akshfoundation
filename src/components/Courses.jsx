"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { courseData } from "@/data/coursesData";
import { urlData } from '@/data/urlData';
import Link from 'next/link';

export default function Courses() {
  const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
      width: window.innerWidth,
      height: window.innerHeight,
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

  return (
    <div className='flex flex-col mb-24 justify-center'>

      <div>
        <h3 className="text-gray-800 text-4xl font-extrabold text-center mb-24">
          OUR SPECIAL PROGRAMS FOR YOUR <span className='border-4 border-dashed border-gray-800 rounded-lg bg-[#00DFA2] p-1 my-4'>EDUCATION</span></h3>
      </div>
      <div className={`mx-auto mt-24 gap-4 lg:mt-0 flex justify-center ${isWideScreen ? 'flex-row' : 'flex-col lg:h-2/3'}`}>

        <div className="w-full h-fit flex flex-col md:flex-row justify-center gap-4">


          <div className={`w-full flex flex-col bg-[#2A2F4F] rounded-xl p-3 justify-between ${isWideScreen ? 'min-h-[30vh] max-h-[70vh]' : 'h-[46h]'}`}>
            <div className='flex flex-col gap-6'>
              <Image className="rounded-lg" src="/assets/bank.jpg" width={1000} height={1000} alt="course" />
              <div className="h-full flex flex-row justify-between">
                <h6>{courseData.course1}</h6>
                <p>Mode: {courseData.mode1}</p>
              </div>
              <h6 className='text-2xl'>{courseData.desc1}</h6>
            </div>
            <div className="flex flex-row bg-gray-950 rounded-3xl justify-between items-center mt-6">
              
                  <div className='flex just items-center ml-3.5'>More Details</div>
                  <div>
                  {courseData.course1link && (
                <Link href={courseData.course1link} target='_blank' rel='noreferrer' >
                    <button type="submit" className="flex-none rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                      </svg>

                    </button>
                    </Link>
              )}
                  </div>

            </div>
          </div>

          <div className={`w-full flex flex-col bg-[#2A2F4F] rounded-xl p-3 justify-between ${isWideScreen ? 'min-h-[30vh] max-h-[70vh]' : 'h-[46h]'}`}>
            <div className='flex flex-col gap-6'>
              <Image className="rounded-lg" src="/assets/bank.jpg" width={1000} height={1000} alt="course" />
              <div className="h-full flex flex-row justify-between">
                <h6>{courseData.course1}</h6>
                <p>Mode: {courseData.mode1}</p>
              </div>
              <h6 className='text-2xl'>{courseData.desc1}</h6>
            </div>
            <div className="flex flex-row bg-gray-950 rounded-3xl justify-between items-center mt-6">
              
                  <div className='flex just items-center ml-3.5'>More Details</div>
                  <div>
                  {courseData.course2link && (
                <Link href={courseData.course2link} target='_blank' rel='noreferrer' >
                    <button type="submit" className="flex-none rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                      </svg>

                    </button>
                    </Link>
                    )}
                  </div>
            </div>
          </div>

        </div>

        <div className=" w-full h-full flex flex-col md:flex-row justify-center gap-4">

          <div className={`w-full flex flex-col bg-[#2A2F4F] rounded-xl p-3 justify-between ${isWideScreen ? 'min-h-[30vh] max-h-[70vh]' : 'h-[46h]'}`}>
            <div className='flex flex-col gap-6'>
              <Image className="rounded-lg" src="/assets/bank.jpg" width={1000} height={1000} alt="course" />
              <div className="h-full flex flex-row justify-between">
                <h6>{courseData.course1}</h6>
                <p>Mode: {courseData.mode1}</p>
              </div>
              <h6 className='text-2xl'>{courseData.desc1}</h6>
            </div>
            <div className="flex flex-row bg-gray-950 rounded-3xl justify-between items-center mt-6">
              
                  <div className='flex just items-center ml-3.5'>More Details</div>
                  <div>
                  {courseData.course3link && (
                <Link href={courseData.course3link} target='_blank' rel='noreferrer' >
                    <button type="submit" className="flex-none rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                      </svg>

                    </button>
                    </Link>
              )}
                  </div>
            </div>
          </div>

          <div className={`w-full flex flex-col bg-[#2A2F4F] rounded-xl p-3 justify-between ${isWideScreen ? 'min-h-[30vh] max-h-[70vh]' : 'h-[46h]'}`}>
            <div className='flex flex-col gap-6'>
              <Image className="rounded-lg" src="/assets/bank.jpg" width={1000} height={1000} alt="course" />
              <div className="h-full flex flex-row justify-between">
                <h6>{courseData.course1}</h6>
                <p>Mode: {courseData.mode1}</p>
              </div>
              <h6 className='text-2xl'>{courseData.desc1}</h6>
            </div>
            <div className="flex flex-row bg-gray-950 rounded-3xl justify-between items-center mt-6">
              
                  <div className='flex just items-center ml-3.5'>More Details</div>
                  <div>
                  {/* {courseData.course4link && (
                <Link href={courseData.course4link} target='_blank' rel='noreferrer' > */}
                    <button type="submit" className="flex-none rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                      </svg>

                    </button>
                    {/* </Link>
              )} */}
                  </div>
            </div>
          </div>

        </div>

      </div>


      <div className='max-w-full flex justify-center items-center mt-24 mx-auto md:mx-24 xl:mx-auto'>
        <h2 className='w-full text-4xl font-bold text-gray-800 text-center'>
          UNLOCK YOUR FULL POTENTIAL WITH OUR <span className='border-4 border-dashed border-gray-800 text-gray-200 rounded-lg bg-[#4f46e5] p-1 my-4'>EASY</span> TO USE PROGRAMS</h2>
      </div>



      <div className='flex flex-col md:flex-row justify-center items-center mt-24 gap-8 xl:gap-12 2xl:gap-24'>

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
  )
}
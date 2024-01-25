"use client";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import { courseData } from "@/data/coursesData";
import { urlData } from '@/data/urlData';

export default function Courses(){
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

    return(
        <div className='flex flex-col mb-24 justify-center'>
        <div className={`mx-auto mt-24 gap-4 lg:mt-0 flex justify-center ${isWideScreen ? 'flex-row' : 'flex-col lg:h-2/3'}`}>

            <div className="w-full h-full flex flex-col md:flex-row justify-center gap-4">

            <div className="w-full h-full flex flex-col bg-gray-700 w-fit h-fit rounded-xl p-3 gap-4 justify-between">
                <Image className="rounded-lg" src="/assets/bank.jpg" width={1000} height={1000} />
                <div className="h-full flex flex-row justify-between">
                <h6>{courseData.course1}</h6>
                <p>Mode: {courseData.mode1}</p>
                </div>
                <h6>{courseData.desc1}</h6>
                <div className="flex flex-row justify-between items-end">
                <div>{courseData.price1}</div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                </div>
                </div>
            </div>

            <div className="w-full h-full flex flex-col bg-gray-700 w-fit h-fit rounded-xl p-3 gap-4 justify-between">
                <Image className="rounded-lg" src="/assets/bank.jpg" width={1000} height={1000} />
                <div className="flex flex-row justify-between">
                <h6>{courseData.course2}</h6>
                <p>Mode: {courseData.mode2}</p>
                </div>
                <h6>{courseData.desc2}</h6>
                <div className="flex flex-row justify-between items-end">
                <div>{courseData.price2}</div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                </div>
                </div>
            </div>

            </div>

            <div className=" w-full h-full flex flex-col md:flex-row justify-center gap-4">

            <div className=" w-full h-full flex flex-col bg-gray-700 w-fit h-fit rounded-xl p-3 gap-4 justify-between">
                <Image className="rounded-lg" src="/assets/bank.jpg" width={1000} height={1000} />
                <div className="flex flex-row justify-between">
                <h6>{courseData.course3}</h6>
                <p>Mode: {courseData.mode3}</p>
                </div>
                <h6>{courseData.desc3}</h6>
                <div className="flex flex-row justify-between items-end">
                <div>1000/-</div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                </div>
                </div>
            </div>

            <div className="w-full h-full flex flex-col bg-gray-700 w-fit h-fit rounded-xl p-3 gap-4 justify-between">
                <Image className="rounded-lg" src="/assets/bank.jpg" width={1000} height={1000} />
                <div className="flex flex-row justify-between">
                <h6>{courseData.course4}</h6>
                <p>Mode: {courseData.mode4}</p>
                </div>
                <h6>{courseData.desc4}</h6>
                <div className="flex flex-row justify-between items-end">
                <div>1000/-</div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                </div>
                </div>
            </div>

            </div>

        </div>


        <div className='max-w-full flex justify-center items-center mt-24 mx-auto md:mx-24 xl:mx-auto'>
            <h2 className='w-full text-4xl font-bold text-gray-800 text-center'>UNLOCK YOUR FULL POTENTIAL WITH OUR EASY TO USE PROGRAMS</h2>
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
import Image from "next/image";
import Link from "next/link";

export default function Mainpage() {
  return (
    <div className="min-h-screen bg-transparent text-gray-950 flex flex-col overflow-x-hidden">
      
      {/* Hero Section */}
      <div className="flex-grow flex items-center max-w-7xl mx-auto w-full p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column: Text and Buttons */}
          <div className="flex flex-col items-start gap-12">
            <h1>
              Boost Your Digital Education With Perfect Learning
            </h1>

            {/* Primary Start Button */}
            <div className="flex items-center gap-2">
              <div className="bg-gray-800 p-3.5 rounded-full flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="#ffffff" 
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                </svg>
              </div>
              <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium text-lg hover:bg-gray-700 transition">
                Start Learning
              </button>
            </div>

            {/* Student Info Box */}
            <div className="flex flex-row gap-4">
              <div className="flex px-2 py-1.5 items-center border border-gray-300 bg-gray-200 rounded-xl">
                {/* Initials */}
                <div className="flex -space-x-3.5">
                  <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center border-2 border-white text-white font-bold text-xl">
                    P
                  </div>
                  <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center border-2 border-white text-white font-bold text-xl">
                    A
                  </div>
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center border-2 border-white text-white font-bold text-xl">
                    R
                  </div>
                </div>
                {/* Student Count */}
                <div className="flex-grow pl-2">
                  <p className="text-white text-sm font-medium px-3 py-1.5 leading-tight">
                    1500+ <br /> Students
                  </p>
                </div>
              </div>

              {/* Side Play Button */}
              <div className="border border-gray-300 bg-gray-200 p-4.5 rounded-xl flex items-center justify-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  strokeWidth="1.5" 
                  stroke="#ffffff" 
                  className="size-6"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Illustration */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/assets/studying.svg"
              alt="illustration of a student reading a book"
              className="w-full max-w-lg h-auto"
            />
          </div>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="w-full bg-gray-800 shadow-indigo-400 shadow-2xl py-4 overflow-hidden flex">
        {/* Container 1 */}
        <div className="animate-marquee flex items-center gap-8 text-white whitespace-nowrap pr-8">
          <h1>Learn</h1>
          <Image src='/star.svg' width={40} height={40} alt="star" className="w-10 h-10" />
          <h1>Adapt</h1>
          <Image src='/star.svg' width={40} height={40} alt="star" className="w-10 h-10" />
          <h1>Grow</h1>
          <Image src='/star.svg' width={40} height={40} alt="star" className="w-10 h-10" />
          <h1>Learn</h1>
          <Image src='/star.svg' width={40} height={40} alt="star" className="w-10 h-10" />
          <h1>Adapt</h1>
          <Image src='/star.svg' width={40} height={40} alt="star" className="w-10 h-10" />
          <h1>Grow</h1>
          <Image src='/star.svg' width={40} height={40} alt="star" className="w-10 h-10" />
          <h1>Learn</h1>
          <Image src='/star.svg' width={40} height={40} alt="star" className="w-10 h-10" />
          <h1>Adapt</h1>
          <Image src='/star.svg' width={40} height={40} alt="star" className="w-10 h-10" />
          <h1>Grow</h1>
          <Image src='/star.svg' width={40} height={40} alt="star" className="w-10 h-10" />
        </div>

        {/* Container 2 (Exact Duplicate) */}
        <div className="animate-marquee flex items-center gap-8 text-white whitespace-nowrap pr-8" aria-hidden="true">
          <h1>Learn</h1>
          <Image src='/star.svg' width={40} height={40} alt="star" className="w-10 h-10" />
          <h1>Adapt</h1>
          <Image src='/star.svg' width={40} height={40} alt="star" className="w-10 h-10" />
          <h1>Grow</h1>
          <Image src='/star.svg' width={40} height={40} alt="star" className="w-10 h-10" />
          <h1>Learn</h1>
          <Image src='/star.svg' width={40} height={40} alt="star" className="w-10 h-10" />
          <h1>Adapt</h1>
          <Image src='/star.svg' width={40} height={40} alt="star" className="w-10 h-10" />
          <h1>Grow</h1>
          <Image src='/star.svg' width={40} height={40} alt="star" className="w-10 h-10" />
          <h1>Learn</h1>
          <Image src='/star.svg' width={40} height={40} alt="star" className="w-10 h-10" />
          <h1>Adapt</h1>
          <Image src='/star.svg' width={40} height={40} alt="star" className="w-10 h-10" />
          <h1>Grow</h1>
          <Image src='/star.svg' width={40} height={40} alt="star" className="w-10 h-10" />
        </div>
      </div>

    </div>
  );
}
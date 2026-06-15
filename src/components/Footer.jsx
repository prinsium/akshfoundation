import { urlData } from "@/data/urlData";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col gap-4 mt-24 px-2 md:px-8 mb-8 max-w-7xl mx-auto">
      
      {/* Main Top Footer Block */}
      <div className="bg-indigo-600 flex flex-col lg:flex-row justify-between gap-1 sm:gap-2 md:gap-4 lgLgap-6 p-2 md:p-4 lg:p-8 rounded-4xl">
        
        {/* Left Column */}
        <div className="flex flex-col justify-start gap-1 text-white text-3xl sm:text-4xl md:text-5xl tracking-wide font-normal p-4">
         <p className="text-[#B6B8C4] mb-1">Learning AKSH App</p>
             <div className="text-[#ffffff] font-semibold text-2xl lg:text-4xl mb-1">
               Download Our Mobile App
             </div>
             <div>
             {urlData.appLink && (
               <Link href={urlData.appLink} target="_blank" rel="noreferrer">
                 <button
                   type="submit"
                   className="flex flex-row justify-center items-center rounded-full bg-gray-200 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:bg-gray-300 transition cursor-pointer"
                 >
                   Download Now &nbsp;&nbsp;
                   <svg
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     strokeWidth="1.5"
                     stroke="currentColor"
                     className="w-6 h-6"
                   >
                     <path
                       strokeLinecap="round"
                       strokeLinejoin="round"
                       d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                     />
                   </svg>
                 </button>
               </Link>
             )}
           </div>
        </div>

        {/* Right Column (Dark "Get In Touch" Box) */}
        <div className="bg-[#2A2A2A] rounded-3xl p-8 sm:p-10 flex flex-col gap-3 w-full lg:w-auto min-w-[260px] shadow-lg">
          <p className="text-indigo-600 text-3xl sm:text-4xl font-normal tracking-wide mb-2">
            Get In Touch
          </p>

          <Link
            href={`mailto:${urlData.email}`}
            className="text-white text-md md:text-2xl underline underline-offset-4 decoration-1 tracking-wide hover:text-gray-300"
          >
            {urlData.email}
          </Link>

          <Link
            href={`tel:${urlData.phone1}`}
            className="text-white text-md md:text-2xl underline underline-offset-4 decoration-1 tracking-wide hover:text-gray-300"
          >
            tel:{urlData.phone1}
          </Link>

          <Link
            href={`tel:${urlData.phone2}`}
            className="text-white text-md md:text-2xl underline underline-offset-4 decoration-1 tracking-wide hover:text-gray-300"
          >
            tel:{urlData.phone2}
          </Link>

          {/* Social Icons inside Gray Circles */}
          <div className="flex flex-row justify-start gap-4 mt-6 flex-wrap">
            {urlData.whatsapp && (
              <Link href={urlData.whatsapp} target="_blank" rel="noreferrer" className="bg-[#d9d9d9] hover:bg-indigo-600 rounded-full w-6 h-6 md:w-12 md:h-12 flex justify-center items-center hover:scale-105 transition-transform">
                <svg
                  className="stroke-[#141414] stroke-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <path d="M35.66 35.67a16.71 16.71 0 01-7.75-6.78.82.82 0 01.12-.95l1.55-1.69a.8.8 0 00.15-.87l-2.44-4.65s-1.08-1.65-3.29-.23c0 0-5.81 4.54-2.1 10.78s7.2 8.35 10.34 9.88c2.73 1.33 8.64 3.1 12.21-3.39 0 0 1.25-2 0-2.51-.57-.23-3.68-1.77-5-2.41a.82.82 0 00-1 .22l-1.86 2.35a.81.81 0 01-.93.25z"></path>
                  <path d="M8.86 53.49l4-11.2a23 23 0 118.64 8.8z" strokeLinecap="round"></path>
                </svg>
              </Link>
            )}

            {urlData.telegram && (
              <Link href={urlData.telegram} target="_blank" rel="noreferrer" className="bg-[#d9d9d9] hover:bg-indigo-600 rounded-full w-6 h-6 md:w-12 md:h-12 flex justify-center items-center hover:scale-105 transition-transform">
                <svg
                  className="stroke-[#141414] stroke-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <path d="M26.67 38.57l-.82 11.54A2.88 2.88 0 0028.14 49l5.5-5.26 11.42 8.35c2.08 1.17 3.55.56 4.12-1.92l7.49-35.12h0c.66-3.09-1.08-4.33-3.16-3.55l-44 16.85C6.47 29.55 6.54 31.23 9 32l11.26 3.5 25.33-14.79c1.23-.83 2.36-.37 1.44.44z" strokeLinecap="round"></path>
                </svg>
              </Link>
            )}

            {urlData.instagram && (
              <Link href={urlData.instagram} target="_blank" rel="noreferrer" className="bg-[#d9d9d9] hover:bg-indigo-600 rounded-full w-6 h-6 md:w-12 md:h-12 flex justify-center items-center hover:scale-105 transition-transform">
                <svg
                  className="stroke-[#141414] stroke-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <rect x="13.8" y="13.02" width="36.4" height="37.97" rx="10.53" strokeLinecap="round"></rect>
                  <circle cx="32" cy="32" r="9.28" strokeLinecap="round"></circle>
                  <circle cx="43.11" cy="19.74" r="1.32"></circle>
                </svg>
              </Link>
            )}

            {urlData.twitter && (
              <Link href={urlData.twitter} target="_blank" rel="noreferrer" className="bg-[#d9d9d9] hover:bg-indigo-600 rounded-full w-6 h-6 md:w-12 md:h-12 flex justify-center items-center hover:scale-105 transition-transform">
                <svg
                  className="stroke-[#141414] stroke-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <path d="M54.49 12.3c0-.1-.09-.16-.17-.09-1.57 1.36-5.36 2.46-5.84 2.51a.11.11 0 01-.09 0c-2.78-4.44-9.19-3.24-9.19-3.24C29.78 13.48 30.82 23 31 24c0 .05 0 .09-.09.09-10.48.52-19.63-9.22-20.67-10.37a.11.11 0 00-.17 0A10.57 10.57 0 0012.78 27a.11.11 0 010 .19 12.87 12.87 0 01-4-.77c-.06 0-.13 0-.13.1.14 6.2 6.22 9 7.63 9.59a.1.1 0 010 .19 13.4 13.4 0 01-3.85.27.11.11 0 00-.11.14c1.27 4.78 7.5 6.78 8.62 7.11A.11.11 0 0121 44c-3.85 3.44-11.44 4.35-13 4.51a.11.11 0 00-.06.19c5.82 4 21.06 7.32 32.7-2.63A30.3 30.3 0 0051 21.83a.09.09 0 01.05-.08 14.22 14.22 0 005.06-5.06c0-.1 0-.16-.15-.13a5.63 5.63 0 01-3.15.17s1.71-2.96 1.68-4.43z" strokeLinecap="round"></path>
                </svg>
              </Link>
            )}

            {urlData.youtube && (
              <Link href={urlData.youtube} target="_blank" rel="noreferrer" className="bg-[#d9d9d9] hover:bg-indigo-600 rounded-full w-6 h-6 md:w-12 md:h-12 flex justify-center items-center hover:scale-105 transition-transform">
                <svg
                  className="stroke-[#141414] stroke-2"
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 64 64"
                  fill="none"
                >
                  <path d="M26.5 39.88V24.12a.37.37 0 01.56-.31l12.4 7.88a.36.36 0 010 .62l-12.4 7.88a.37.37 0 01-.56-.31z"></path>
                  <rect x="6.46" y="14.42" width="51.09" height="35.16" rx="9.06"></rect>
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar Section (Separated by a gap as seen in the image) */}
      <div className="bg-indigo-600 rounded-4xl p-6 lg:px-12 flex flex-row justify-between items-center gap-1 sm:gap-2 md:gap-4 lg:gap-6">
        <p className="text-white text-base">
          AKSH Foundation &copy; {new Date().getFullYear()}
        </p>
        <p className="text-white text-base">
          Developed by{" "}
          <Link className="hover:text-gray-300" href="https://prinsium.com">
            PRINSIUM
          </Link>
        </p>
      </div>

    </div>
  );
}
"use client"

import Image from "next/image";

import { useEffect, useState } from "react";

import Modal from './Modal';


export default function Navbar() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };


  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div>
      <nav className="absolute w-full bg-transparent z-20">
        <div className="flex flex-wrap justify-between items-center mt-0 max-w-full py-4 p-2 md:px-8">
          <div
            onClick={() => scrollToSection("homepage")}
            className="flex justify-start items-center cursor-pointer"
          >
            <div className="text-gray-800 text-lg font-semibold">
              <Image src="/assets/aksh.svg" width={200} height={40} alt="aksh"/>
            </div>
          </div>

          <div className="hidden md:block">
          <ul className="flex flex-row gap-6 font-normal">
            <li>
              <div
                onClick={() => scrollToSection("courses")}
                className="text-gray-700 font-semibold cursor-pointer"
              >
                COURSES
              </div>
            </li>
            <li>
              <div
                onClick={() => scrollToSection("books")}
                className="text-gray-700 font-semibold cursor-pointer"
              >
                BOOKS
              </div>
            </li>
            <li>
              <div
                onClick={() => scrollToSection("app")}
                className="text-gray-700 font-semibold flex flex-row cursor-pointer"
              >
                <span className="hidden md:block">DOWNLOAD OUR &nbsp;</span> APP
              </div>
            </li>
          </ul>
          </div>


          <div className='md:hidden flex relative'>

            <div className='flex fixed top-4 right-2 z-20'>
              <button onClick={openModal} className="text-gray-800 p-2 rounded-full">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                </svg> */}
              <svg className="w-5 h-5" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.3683 8.19388C10.0453 8.19388 8.93756 9.25122 8.93756 10.5805V15.8067H8.44525V10.5805C8.44525 9.25122 7.33756 8.19388 5.98371 8.19388H0.691406V7.71052H5.98371C7.33756 7.68031 8.44525 6.62297 8.41448 5.29374V0.0976562H8.93756V5.29374C8.93756 6.62297 10.0453 7.68031 11.3683 7.68031H16.6914V8.19388H11.3683Z" fill="currentColor"></path>
              </svg>
              </button>
              <Modal isOpen={isModalOpen} onClose={closeModal}>

              <ul className="flex flex-row gap-6 font-normal">
            <li>
              <div
                onClick={() => scrollToSection("courses")}
                className="text-gray-700 font-semibold cursor-pointer"
              >
                COURSES
              </div>
            </li>
            <li>
              <div
                onClick={() => scrollToSection("books")}
                className="text-gray-700 font-semibold cursor-pointer"
              >
                BOOKS
              </div>
            </li>
            <li>
              <div
                onClick={() => scrollToSection("app")}
                className="text-gray-700 font-semibold flex flex-row cursor-pointer"
              >
                <span className="hidden md:block">DOWNLOAD OUR &nbsp;</span> APP
              </div>
            </li>
          </ul>


              </Modal>
            </div>
          </div>


        </div>
      </nav>
    </div>
  );
}

"use client";

import Image from "next/image";

import { useEffect, useState } from "react";

import Modal from "./Modal";
import Link from "next/link";
import { urlData } from "@/data/urlData";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

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
            <div className="text-gray-800 flex flex-row justify-center items-end text-3xl font-semibold">
              <Image
                src="/aksh.svg"
                width={40}
                height={40}
                alt="aksh"
              />
              <Image
                src="/assets/akshlg.svg"
                width={200}
                height={40}
                alt="aksh"
              />
            </div>
          </div>

          <div className="hidden md:block">
            <ul className="flex flex-row gap-6 font-normal">
              <li>
                <div
                  onClick={() => scrollToSection("courses")}
                  className="text-gray-800 font-semibold cursor-pointer"
                >
                  COURSES
                </div>
              </li>
              <li>
                <div
                  onClick={() => scrollToSection("books")}
                  className="text-gray-800 font-semibold cursor-pointer"
                >
                  BOOKS
                </div>
              </li>
              <li>
                <div
                  onClick={() => scrollToSection("app")}
                  className="text-gray-800 font-semibold flex flex-row cursor-pointer"
                >
                  <span className="hidden md:block">DOWNLOAD OUR &nbsp;</span>{" "}
                  APP
                </div>
              </li>
            </ul>
          </div>

          <div className="md:hidden flex relative">
            <div className="flex fixed top-4 right-4 z-10">
              {/* <button onClick={toggleModal} className="text-gray-800 p-2 rounded-full">
        <svg className="w-10 h-10 bg-emerald-500 p-2 rounded-full" viewBox="0 0 17 16" stroke="#ffffff" strokeWidth={1.5} fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.3683 8.19388C10.0453 8.19388 8.93756 9.25122 8.93756 10.5805V15.8067H8.44525V10.5805C8.44525 9.25122 7.33756 8.19388 5.98371 8.19388H0.691406V7.71052H5.98371C7.33756 7.68031 8.44525 6.62297 8.41448 5.29374V0.0976562H8.93756V5.29374C8.93756 6.62297 10.0453 7.68031 11.3683 7.68031H16.6914V8.19388H11.3683Z" fill="currentColor"></path>
        </svg>
      </button>

      <Modal isOpen={isModalOpen} onClose={toggleModal}>

              <ul className="flex flex-row justify-end gap-6 font-normal">
            <li>
              <div
                onClick={() => scrollToSection("courses")}
                className="text-gray-900 py-1 px-2.5 rounded-xl font-semibold cursor-pointer"
              >
                COURSES
              </div>
            </li>
            <li>
              <div
                onClick={() => scrollToSection("books")}
                className="text-gray-900 py-1 px-2.5 rounded-xl font-semibold cursor-pointer"
              >
                BOOKS
              </div>
            </li>
            <li>
              <div
                onClick={() => scrollToSection("app")}
                className="text-gray-900 py-1 px-2.5 rounded-xl font-semibold flex flex-row cursor-pointer"
              >
                <span className="hidden md:block">DOWNLOAD OUR &nbsp;</span> APP
              </div>
            </li>
          </ul>


              </Modal> */}
              <button
                onClick={openModal}
                className="border-2 border-[#20DDBC] hover:border-indigo-600 text-gray-800 p-2 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <div className="w-full h-fit flex flex-col justify-start mt-4">
                  <div>
                    <div>
                      <ul className="flex flex-col justify-between max-w-full gap-6 text-2xl font-medium mb-6 sm:mt-6">
                        <li onClick={closeModal}>
                          <div
                            onClick={() => scrollToSection("courses")}
                            className="text-gray-900 py-1 px-2.5 rounded-xl font-semibold cursor-pointer"
                          >
                            COURSES
                          </div>
                        </li>

                        <li onClick={closeModal}>
                          <div
                            onClick={() => scrollToSection("books")}
                            className="text-gray-900 py-1 px-2.5 rounded-xl font-semibold cursor-pointer"
                          >
                            BOOKS
                          </div>
                        </li>

                        <li onClick={closeModal}>
                          <div
                            onClick={() => scrollToSection("app")}
                            className="text-gray-900 py-1 px-2.5 rounded-xl font-semibold flex flex-row cursor-pointer"
                          >
                            DOWNLOAD OUR APP
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="flex flex-col mb-6">
                      <p className="text-indigo-600">Get In Touch</p>
                      <Link
                        href={`mailto:${urlData.email}`}
                        className="text-gray-800 text-lg sm:text-2xl"
                      >
                        {urlData.email}
                      </Link>

                      <Link
                        href={`tel:${urlData.phone}`}
                        className="text-gray-800 text-lg sm:text-2xl font-medium"
                      >
                        {urlData.phone}
                      </Link>
                    </div>
                  </div>

                  <div className="flex flex-row justify-between">
                    {urlData.whatsapp && (
                      <Link
                        href={urlData.whatsapp}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          className="stroke-[#141414] stroke-2 transition ease-in-out delay-150 hover:bg-indigo-600 rounded-full p-1 duration-300"
                          xmlns="http://www.w3.org/2000/svg"
                          height="40"
                          width="40"
                          viewBox="0 0 64 64"
                          fill="none"
                        >
                          <path d="M35.66 35.67a16.71 16.71 0 01-7.75-6.78.82.82 0 01.12-.95l1.55-1.69a.8.8 0 00.15-.87l-2.44-4.65s-1.08-1.65-3.29-.23c0 0-5.81 4.54-2.1 10.78s7.2 8.35 10.34 9.88c2.73 1.33 8.64 3.1 12.21-3.39 0 0 1.25-2 0-2.51-.57-.23-3.68-1.77-5-2.41a.82.82 0 00-1 .22l-1.86 2.35a.81.81 0 01-.93.25z"></path>
                          <path
                            d="M8.86 53.49l4-11.2a23 23 0 118.64 8.8z"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </Link>
                    )}

                    {urlData.telegram && (
                      <Link
                        href={urlData.telegram}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          className="stroke-[#141414] stroke-2 transition ease-in-out delay-150 hover:bg-indigo-600 rounded-full p-1 duration-300"
                          xmlns="http://www.w3.org/2000/svg"
                          height="40"
                          width="40"
                          viewBox="0 0 64 64"
                          fill="none"
                        >
                          <path
                            d="M26.67 38.57l-.82 11.54A2.88 2.88 0 0028.14 49l5.5-5.26 11.42 8.35c2.08 1.17 3.55.56 4.12-1.92l7.49-35.12h0c.66-3.09-1.08-4.33-3.16-3.55l-44 16.85C6.47 29.55 6.54 31.23 9 32l11.26 3.5 25.33-14.79c1.23-.83 2.36-.37 1.44.44z"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </Link>
                    )}

                    {urlData.instagram && (
                      <Link
                        href={urlData.instagram}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          className="stroke-[#141414] stroke-2 transition ease-in-out delay-150 hover:bg-indigo-600 rounded-full p-1 duration-300"
                          xmlns="http://www.w3.org/2000/svg"
                          height="40"
                          width="40"
                          viewBox="0 0 64 64"
                          fill="none"
                        >
                          <rect
                            x="13.8"
                            y="13.02"
                            width="36.4"
                            height="37.97"
                            rx="10.53"
                            stroke-linecap="round"
                          ></rect>
                          <circle
                            cx="32"
                            cy="32"
                            r="9.28"
                            stroke-linecap="round"
                          ></circle>
                          <circle cx="43.11" cy="19.74" r="1.32"></circle>
                        </svg>
                      </Link>
                    )}

                    {urlData.twitter && (
                      <Link
                        href={urlData.twitter}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          className="stroke-[#141414] stroke-2 transition ease-in-out delay-150 hover:bg-indigo-600 rounded-full p-1 duration-300"
                          xmlns="http://www.w3.org/2000/svg"
                          height="40"
                          width="40"
                          viewBox="0 0 64 64"
                          fill="none"
                        >
                          <path
                            d="M54.49 12.3c0-.1-.09-.16-.17-.09-1.57 1.36-5.36 2.46-5.84 2.51a.11.11 0 01-.09 0c-2.78-4.44-9.19-3.24-9.19-3.24C29.78 13.48 30.82 23 31 24c0 .05 0 .09-.09.09-10.48.52-19.63-9.22-20.67-10.37a.11.11 0 00-.17 0A10.57 10.57 0 0012.78 27a.11.11 0 010 .19 12.87 12.87 0 01-4-.77c-.06 0-.13 0-.13.1.14 6.2 6.22 9 7.63 9.59a.1.1 0 010 .19 13.4 13.4 0 01-3.85.27.11.11 0 00-.11.14c1.27 4.78 7.5 6.78 8.62 7.11A.11.11 0 0121 44c-3.85 3.44-11.44 4.35-13 4.51a.11.11 0 00-.06.19c5.82 4 21.06 7.32 32.7-2.63A30.3 30.3 0 0051 21.83a.09.09 0 01.05-.08 14.22 14.22 0 005.06-5.06c0-.1 0-.16-.15-.13a5.63 5.63 0 01-3.15.17s1.71-2.96 1.68-4.43z"
                            stroke-linecap="round"
                          ></path>
                        </svg>
                      </Link>
                    )}

                    {urlData.youtube && (
                      <Link
                        href={urlData.youtube}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <svg
                          className="stroke-[#141414] stroke-2 transition ease-in-out delay-150 hover:bg-indigo-600 rounded-full p-1 duration-300"
                          xmlns="http://www.w3.org/2000/svg"
                          height="40"
                          width="40"
                          viewBox="0 0 64 64"
                          fill="none"
                        >
                          <path d="M26.5 39.88V24.12a.37.37 0 01.56-.31l12.4 7.88a.36.36 0 010 .62l-12.4 7.88a.37.37 0 01-.56-.31z"></path>
                          <rect
                            x="6.46"
                            y="14.42"
                            width="51.09"
                            height="35.16"
                            rx="9.06"
                          ></rect>
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

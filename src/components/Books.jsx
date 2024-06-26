"use client";

import React from "react";
import Lottie from "lottie-react";
import books from "./Lottie/books.json";
import Image from "next/image";

import { booksData } from "@/data/booksData";
import Link from "next/link";

export default function App() {

    const style = {
        height: 400,
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
                type: "seek",
                frames: [45, 60],
            },
        ],
    };

    return (
        <div className="max-w-7xl mx-auto mt-24">

            {/* this will be visible in larger screens */}

            <div className="hidden lg:block">
                <div className="flex flex-row justify-between">

                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-gray-800 text-4xl font-extrabold text-center">'{booksData.title}'</h3>
                            <p className="text-gray-700 text-xl font-normal text-center">{booksData.desc}</p>
                        </div>
                        <div>
                            <Lottie animationData={books} style={style} interactivity={interactivity} />
                            <div className="flex justify-center items-center">
                                {booksData.link && (
                                    <Link href={booksData.link} target='_blank' rel='noreferrer' >
                                        <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br 
                                        focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg 
                                        dark:shadow-blue-800/80 font-medium rounded-2xl text-md px-5 py-2.5 text-center me-2 mb-2 ">Preorder Now</button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="w-2/5 h-full bg-gray-100 rounded-xl border-2 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 flex justify-center items-center">
                        <Image src="/assets/book2.png" width={400} height={400} alt="BOOK" />
                    </div>

                </div>
            </div>

            {/* this will be visible in smaller screens */}

            <div className="block lg:hidden">

                <div className="max-w-7xl flex justify-center mx-auto mt-24">
                    <div className="flex flex-col justify-center items-center gap-6">
                        <div>
                            <h2>Preorder Our Book Now</h2>
                        </div>
                        <div className="flex flex-col bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 w-fit h-fit rounded-xl p-3 gap-4 justify-between">
                            <Image className="rounded-lg" src="/assets/book1.png" width={400} height={400} alt="BOOK" />
                            <div className="flex flex-col gap-4">
                                <h6 className="text-gray-700">{booksData.title}</h6>
                                <p className="text-gray-700">{booksData.desc}</p>
                            </div>
                            <div className="w-full">
                                {booksData.link && (
                                    <Link href={booksData.link} target='_blank' rel='noreferrer' >
                                        <button className="w-full bg-gray-800 text-2xl rounded-lg p-3 flex justify-center items-center">
                                            PREORDER NOW
                                        </button></Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
};



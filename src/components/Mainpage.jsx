import Image from "next/image";
import Link from "next/link";

export default function Mainpage(){
    return(
        <div className="relative h-[90vh] md:h-[100vh] flex flex-col justify-end">
        <div className="absolute h-[50vh] flex flex-col justify-center items-center -translate-y-[30vh]">
        <div className="w-full h-full md:w-1/2 flex justify-center items-center">

            <div className="abril text-center text-gray-950">
                Boost Your Digital Education With Perfect Learning
            </div>


            {/* <div className="flex justify-center items-center w-fit h-fit rounded-2xl p-1 bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
            <Link className="w-full h-full rounded-xl text-gray-800 text-2xl px-3.5 py-1.5 bg-gray-100" href="/">Explore Our Courses</Link>
            </div> */}

        

        </div>
        </div>

        <div className="w-full flex justify-end items-end overflow-hidden -z-20">
        <img src="/assets/studying.svg" alt="study" class="w-[60vw] h-[60vw] md:w-[30vw] md:h-[30vw] flex rotate-12 translate-x-14 translate-y-14 transform -scale-x-100" />
                 </div>

        {/* <div className="overflow-hidden w-full bg-gray-800 shadow-2xl">
       <div className="flex flex-row animate-marquee gap-4">
            <h1>Learn</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
            <h1>Adapt</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
            <h1>Grow</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
            <h1>Learn</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
            <h1>Adapt</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
            <h1>Grow</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
            <h1>Learn</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
            <h1>Adapt</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
            <h1>Grow</h1>
            <Image src='/star.svg' width={70} height={70} alt="star" />
        </div>
       </div> */}

<div class="overflow-hidden w-full bg-gray-800 shadow-indigo-400 shadow-2xl">
        <div class="flex animate-marquee">
            <div class="flex justify-center items-center gap-4">
                <h1>Learn</h1>
                <Image src='/star.svg' width="70" height="70" alt="star" />
                <h1>Adapt</h1>
                <Image src='/star.svg' width="70" height="70" alt="star" />
                <h1>Grow</h1>
                <Image src='/star.svg' width="70" height="70" alt="star" />
                <h1>Learn</h1>
                <Image src='/star.svg' width="70" height="70" alt="star" />
                <h1>Adapt</h1>
                <Image src='/star.svg' width="70" height="70" alt="star" />
                <h1>Grow</h1>
                <Image src='/star.svg' width="70" height="70" alt="star" />
                <h1>Learn</h1>
                <Image src='/star.svg' width="70" height="70" alt="star" />
                <h1>Adapt</h1>
                <Image src='/star.svg' width="70" height="70" alt="star" />
                <h1>Grow</h1>
                <Image src='/star.svg' width="70" height="70" alt="star" />

                <h1>Learn</h1>
                <Image src='/star.svg' width="70" height="70" alt="star" />
                <h1>Adapt</h1>
                <Image src='/star.svg' width="70" height="70" alt="star" />
                <h1>Grow</h1>
                <Image src='/star.svg' width="70" height="70" alt="star" />
                <h1>Learn</h1>
                <Image src='/star.svg' width="70" height="70" alt="star" />
                <h1>Adapt</h1>
                <Image src='/star.svg' width="70" height="70" alt="star" />
                <h1>Grow</h1>
                <Image src='/star.svg' width="70" height="70" alt="star" />
                <h1>Learn</h1>
                <Image src='/star.svg' width="70" height="70" alt="star" />
                <h1>Adapt</h1>
                <Image src='/star.svg' width="70" height="70" alt="star" />
                <h1>Grow</h1>
                <Image src='/star.svg' width="70" height="70" alt="star" />
            </div>
        </div>
    </div>

        </div>
    )
}
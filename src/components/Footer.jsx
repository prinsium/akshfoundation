import { urlData } from "@/data/urlData";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {

    return (
        <div className="bg-[#141414] flex flex-col justify-between gap-y-3 p-6 rounded-t-3xl mt-24 xl:p-8">

            <div className="flex flex-col gap-x-8 lg:flex-row justify-between mt-1 sm:mt-4 md:mt-9">

                <div className="w-full flex flex-col justify-center">
                    <div className="flex flex-col">
                        <p className="text-[#B6B8C4] mb-1">Get Latest Updates</p>
                        <div className="text-[#B6BBC4] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Subscribe to the Newsletter</div>
                    </div>

                    <div>
                        <form className="max-w-2xl flex gap-x-4 rounded-full border-2 border-gray-600 my-5 justify-center">

                            <label for="email-address" className="sr-only">Email address</label>
                            <input id="email-address" name="email" type="email" autocomplete="email" required="" className="min-w-0 flex-auto rounded-lg appearance-none bg-transparent border-none px-3.5 py-2 text-white focus:outline-none sm:text-sm sm:leading-6" placeholder="Enter your email" />

                            <button type="submit" className="flex-none rounded-full bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                                </svg>

                            </button>
                        </form>
                    </div>

                </div>

                <div className=" flex flex-col">
                    <p className="text-indigo-600 mb-1">Get In Touch</p>
                    <Link
                        href={`mailto:${urlData.email}`}
                        className='text-[#B6BBC4] text-lg sm:text-2xl'
                    >{urlData.email}</Link>


                    <Link
                        href={`tel:${urlData.phone}`}
                        className='text-[#B6BBC4] text-xl sm:text-3xl font-medium'
                    >{urlData.phone}</Link>

                    <div className="flex flex-row justify-between mt-2">

                        {urlData.whatsapp && (
                            <Link href={urlData.whatsapp} target='_blank' rel='noreferrer' >
                                <svg className="stroke-[#ffffff] stroke-2 transition ease-in-out delay-150 hover:bg-indigo-600 rounded-full p-1 duration-300" xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 64 64" fill="none"><path d="M35.66 35.67a16.71 16.71 0 01-7.75-6.78.82.82 0 01.12-.95l1.55-1.69a.8.8 0 00.15-.87l-2.44-4.65s-1.08-1.65-3.29-.23c0 0-5.81 4.54-2.1 10.78s7.2 8.35 10.34 9.88c2.73 1.33 8.64 3.1 12.21-3.39 0 0 1.25-2 0-2.51-.57-.23-3.68-1.77-5-2.41a.82.82 0 00-1 .22l-1.86 2.35a.81.81 0 01-.93.25z"></path><path d="M8.86 53.49l4-11.2a23 23 0 118.64 8.8z" stroke-linecap="round"></path></svg>
                            </Link>
                        )}

                        {urlData.facebook && (
                            <Link href={urlData.facebook} target='_blank' rel='noreferrer' >
                                <svg className="stroke-[#ffffff] stroke-2 transition ease-in-out delay-150 hover:bg-indigo-600 rounded-full p-1 duration-300" xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 64 64" fill="none"><path d="M37.49 19.86c0-.07.36-.3 1.51-.3h3.76A2.21 2.21 0 0045 17.34h0v-6.56a2.22 2.22 0 00-2.19-2.26h-5.6a11.47 11.47 0 00-8.43 3.28 12 12 0 00-3.19 8.64v5.95h-4.35A2.23 2.23 0 0019 28.61v7.07a2.21 2.21 0 002.21 2.21h4.28v15.35a2.22 2.22 0 002.18 2.25h7.35a2.21 2.21 0 002.21-2.22h0V37.94h5.23a2.23 2.23 0 002.22-2.22v-7.08a2.21 2.21 0 00-2.22-2.21h-5.2v-5.21a2.44 2.44 0 01.23-1.36z" stroke-linecap="round"></path></svg>
                            </Link>
                        )}

                        {urlData.instagram && (
                            <Link href={urlData.instagram} target='_blank' rel='noreferrer' >
                                <svg className="stroke-[#ffffff] stroke-2 transition ease-in-out delay-150 hover:bg-indigo-600 rounded-full p-1 duration-300" xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 64 64" fill="none"><rect x="13.8" y="13.02" width="36.4" height="37.97" rx="10.53" stroke-linecap="round"></rect><circle cx="32" cy="32" r="9.28" stroke-linecap="round"></circle><circle cx="43.11" cy="19.74" r="1.32"></circle></svg>
                            </Link>
                        )}

                        {urlData.twitter && (
                            <Link href={urlData.twitter} target='_blank' rel='noreferrer' >
                                <svg className="stroke-[#ffffff] stroke-2 transition ease-in-out delay-150 hover:bg-indigo-600 rounded-full p-1 duration-300" xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 64 64" fill="none"><path d="M54.49 12.3c0-.1-.09-.16-.17-.09-1.57 1.36-5.36 2.46-5.84 2.51a.11.11 0 01-.09 0c-2.78-4.44-9.19-3.24-9.19-3.24C29.78 13.48 30.82 23 31 24c0 .05 0 .09-.09.09-10.48.52-19.63-9.22-20.67-10.37a.11.11 0 00-.17 0A10.57 10.57 0 0012.78 27a.11.11 0 010 .19 12.87 12.87 0 01-4-.77c-.06 0-.13 0-.13.1.14 6.2 6.22 9 7.63 9.59a.1.1 0 010 .19 13.4 13.4 0 01-3.85.27.11.11 0 00-.11.14c1.27 4.78 7.5 6.78 8.62 7.11A.11.11 0 0121 44c-3.85 3.44-11.44 4.35-13 4.51a.11.11 0 00-.06.19c5.82 4 21.06 7.32 32.7-2.63A30.3 30.3 0 0051 21.83a.09.09 0 01.05-.08 14.22 14.22 0 005.06-5.06c0-.1 0-.16-.15-.13a5.63 5.63 0 01-3.15.17s1.71-2.96 1.68-4.43z" stroke-linecap="round"></path></svg>
                            </Link>
                        )}

                        {urlData.youtube && (
                            <Link href={urlData.youtube} target='_blank' rel='noreferrer' >
                                <svg className="stroke-[#ffffff] stroke-2 transition ease-in-out delay-150 hover:bg-indigo-600 rounded-full p-1 duration-300" xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 64 64" fill="none"><path d="M26.5 39.88V24.12a.37.37 0 01.56-.31l12.4 7.88a.36.36 0 010 .62l-12.4 7.88a.37.37 0 01-.56-.31z"></path><rect x="6.46" y="14.42" width="51.09" height="35.16" rx="9.06"></rect></svg>
                            </Link>
                        )}



                    </div>

                </div>

            </div>


            <div className="w-full flex justify-center">
                <div className="w-full h-[1px] bg-[#B6BBC4] opacity-20 my-4"></div>
            </div>

            {/* <div className="w-[50vw] h-[10vh]">
               <Image className="object-fit" src="/assets/akshFooter.svg" fill={true} />
            </div> */}

            <div className="flex flex-row justify-between text-[#B6BBC4] text-xs sm:text-sm md:text-md lg:text-lg">
                <p> AKSH Foundation &copy; 2024</p>
                <p>Developed by <Link className="hover:text-indigo-600" href='https://prinsium.com'>PRINSIUM</Link></p>
            </div>

        </div>
    )
}
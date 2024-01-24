import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return(
        <div>
            <nav className="absolute w-full bg-transparent">
            <div className="flex flex-wrap justify-between items-center mt-0 max-w-full py-4 px-8">

            <Link href="/" className="flex justify-start items-center">
              <div className="text-gray-700 text-lg font-semibold">
                <Image src='/assets/aksh.svg' width={200} height={40} />
            </div>
           </Link>

           <ul className="flex flex-row gap-6 font-normal">
              <li>
                <Link href="/" className="text-gray-700 font-semibold">COURSES</Link>
              </li>
              <li>
                <Link href="/" className="text-gray-700 font-semibold">BOOKS</Link>
              </li>
              <li>
                <Link href="/" className="text-gray-700 font-semibold flex flex-row"><span className="hidden md:block">DOWNLOAD OUR &nbsp;</span> APP</Link>
              </li>
            </ul>

            </div>
            </nav>
        </div>
    )
}
import Image from "next/image";

export default function Courses(){
    return(
        <div className="flex flex-row gap-4">

            <div className="flex flex-col bg-gray-700 w-fit h-fit rounded-xl p-3 gap-4 justify-between">
                <Image className="rounded-lg" src="/assets/bank.jpg" width={400} height={225} />
                <div className="flex flex-row justify-between">
                <h6>UPSC</h6>
                <p>Mode: Online</p>
                </div>
                <h6>Target: UPPCS Prelims, 2024</h6>
                <div className="flex flex-row justify-between items-end">
                <div>1000/-</div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                </div>
                </div>
            </div>

            <div className="flex flex-col bg-gray-700 w-fit h-fit rounded-xl p-3 gap-4 justify-between">
                <Image className="rounded-lg" src="/assets/bank.jpg" width={400} height={225} />
                <div className="flex flex-row justify-between">
                <h6>IBPS</h6>
                <p>Mode: Online</p>
                </div>
                <h6>Target: All Bank Exams, 2024</h6>
                <div className="flex flex-row justify-between items-end">
                <div>1000/-</div>
                <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                </div>
                </div>
            </div>

            <div className="flex flex-col bg-gray-700 w-fit h-fit rounded-xl p-3 gap-4 justify-between">
                <Image className="rounded-lg" src="/assets/bank.jpg" width={400} height={225} />
                <div className="flex flex-row justify-between">
                <h6>SSC</h6>
                <p>Mode: Online</p>
                </div>
                <h6>Target: SSC, 2024</h6>
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
    )
}
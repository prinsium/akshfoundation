import Image from "next/image";

export default function Books(){
    return(
        <div>
            <div className="flex flex-col bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 w-fit h-fit rounded-xl p-3 gap-4 justify-between">
                <Image className="rounded-lg" src="/assets/book1.png" width={400} height={400} />
                <div className="flex flex-col gap-4">
                <h6>ANUVAD ABHYAAS</h6>
                <p>Translation Practice Book by AKSH Foundation</p>
                </div>
                <div className="flex flex-col gap-4 justify-between">
                <div>Rs. 195/-</div>
                <div className="bg-gray-800 rounded-lg p-3 flex justify-center items-center">
                PREORDER NOW
                </div>
                </div>
            </div>
        </div>
    )
}
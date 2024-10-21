export default function Pagination(){
    return(
        <div className="flex justify-center items-center mb-32">
        <div className="pr-48">
            <button className="text-gray-900 px-4 py-1 hover hover:text-black">1</button>
            <button className="text-gray-900 px-4 py-1 hover hover:text-black">2</button>
            <button className="text-gray-900 px-4 py-1 hover hover:text-black">3</button>
            <button className="text-gray-900 px-4 py-1 hover hover:text-black">4</button>
            <button className="text-gray-900 px-4 py-1 hover hover:text-black">5</button>
            <button className="text-gray-900 px-4 py-1 hover hover:text-black">6</button>
            <button className="text-gray-900 px-4 py-1 hover hover:text-black">7</button>
            <button className="text-gray-900 px-4 py-1 hover hover:text-black">8</button>
            <button className="text-gray-900 px-4 py-1 hover hover:text-black">{'>'}</button>
         </div>
         <div className="">
         <button className="text-gray-900 py-1 hover hover:text-black pr-10">View all</button>
         </div>
        </div>

    )
}
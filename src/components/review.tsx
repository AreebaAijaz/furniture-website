import { BiSolidQuoteAltLeft } from "react-icons/bi";


export default function Review(){
    return(
        <section className="mt-16">
            <div className="review h-72 bg-gray-200 text-center flex flex-col justify-center items-center">
                <div className="quotation text-4xl ">
                <BiSolidQuoteAltLeft/>
                </div>
                <p className="text-gray-400 w-1/3 pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptates sit earum at non expedita architecto? Veritatis unde libero laborum dolorum nam facere modi assumenda?</p>
                <p className="text-xl font-bold pt-4 ">Sorosh Norozy</p>
                <p className="">Designer</p>
            </div>
        </section>
    )
}
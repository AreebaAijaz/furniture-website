import { BsClock } from "react-icons/bs";
import { AiOutlineShopping } from 'react-icons/ai';
import { BiRefresh } from 'react-icons/bi';
import { AiOutlineDollar } from "react-icons/ai";




export default function Banner2(){
    return(
        <section>
            <div className="icons-overview flex justify-between mx-14 mt-8">
                <div>
                    <div className="flex space-x-2 pl-5">
                        <div className="text-4xl">
                           <BsClock />
                        </div>
                <h1 className="text-xl font-bold">Shop online</h1>
                </div>
                <p className="text-center text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Perferendis perspiciatis<br/> et vitae eum commodi qui alias!</p>
            </div>

                <div>
                    <div className="flex space-x-2 pl-5">
                        <div className="text-4xl">
                           <AiOutlineShopping />
                        </div>
                <h1 className="text-xl font-bold">Free Shipping</h1>
                </div>
                <p className="text-center text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Perferendis perspiciatis<br/> et vitae eum commodi qui alias!</p>
            </div>

              <div>
                    <div className="flex space-x-2 pl-5">
                        <div className="text-4xl">
                           <BiRefresh />
                        </div>
                <h1 className="text-xl font-bold">Return Policy</h1>
                </div>
                <p className="text-center text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Perferendis perspiciatis<br/> et vitae eum commodi qui alias!</p>
            </div> 

            <div>
                    <div className="flex space-x-2 pl-6">
                        <div className="text-4xl ">
                           <AiOutlineDollar />
                        </div>
                <h1 className="text-xl font-bold uppercase">Payment</h1>
                </div>
                <p className="text-center text-sm text-gray-400">Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Perferendis perspiciatis<br/> et vitae eum commodi qui alias!</p>
            </div>
 








                    

            </div>
        </section>
    )
}